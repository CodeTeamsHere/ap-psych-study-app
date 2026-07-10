/*
 * nav.js — Builds and manages the app chrome: the collapsible Unit→Topic sidebar,
 * the top-bar stat strip, the mobile drawer, keyboard handling, and the footer.
 * Reads the course structure from course.js and live progress from progress.js.
 * Exposes window.Shell.init({ active }).
 */
(function () {
  "use strict";
  window.APSYCH = window.APSYCH || {};

  var EXP_KEY = "apsych:nav-expanded";

  function rootPrefix() {
    if (document.body && document.body.dataset.root) return document.body.dataset.root;
    var p = location.pathname.replace(/\\/g, "/");
    return /\/(units|practice|assessments|frq)\//.test(p) ? "../" : "./";
  }

  function loadExpanded() {
    try {
      var raw = localStorage.getItem(EXP_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null; // null => default (all expanded)
  }
  function saveExpanded(arr) {
    try { localStorage.setItem(EXP_KEY, JSON.stringify(arr)); } catch (e) {}
  }

  function masteryLabel(level) { return level; }

  function buildSidebar(active) {
    var pre = rootPrefix();
    var course = window.APSYCH.course;
    var expanded = loadExpanded();
    var isExpanded = function (n) {
      if (active && active.unit === n) return true;           // always open the active unit
      if (expanded === null) return true;                     // default: all open
      return expanded.indexOf(n) !== -1;
    };

    var side = document.querySelector(".sidebar");
    if (!side) return;

    var html = '';
    html += '<div class="brand">' +
      '<a href="' + pre + 'index.html" class="brand-mark" aria-label="Home">Ψ</a>' +
      '<div class="brand-name">AP Psychology<small>Self-Study Studio</small></div>' +
      '</div>';
    html += '<nav class="side-nav" aria-label="Course sections">';
    html += link(pre + "index.html", "🏠", "Dashboard", active && active.page === "home");
    html += link(pre + "progress.html", "📊", "Progress & Mastery", active && active.page === "progress");

    html += '<div class="side-section-label">Units</div>';
    course.units.forEach(function (u) {
      var open = isExpanded(u.n);
      html += '<div class="unit-group" aria-expanded="' + open + '" data-unit="' + u.n + '">';
      html += '<button class="unit-toggle" aria-expanded="' + open + '" aria-controls="ul-' + u.n + '">' +
        '<span class="chev" aria-hidden="true">▾</span>' +
        '<span class="u-num">' + u.n + '</span>' +
        '<span class="u-title">' + u.title + '</span>' +
        '<span class="u-acc" data-unit-acc="' + u.n + '" aria-hidden="true"></span>' +
        '</button>';
      html += '<ul class="topic-list" id="ul-' + u.n + '">';
      u.topics.forEach(function (t) {
        var isActive = active && active.topic === t.code;
        html += '<li><a class="topic-row' + (isActive ? " active" : "") + '" href="' + pre + "units/" + u.slug + ".html#" + t.code + '">' +
          '<span class="mastery-dot m-new" data-dot="' + t.code + '" aria-hidden="true"></span>' +
          '<span class="t-code">' + t.code + '</span>' +
          '<span class="t-title">' + t.title + '</span>' +
          '<span class="t-acc" data-acc="' + t.code + '"></span>' +
          '</a></li>';
      });
      html += '</ul></div>';
    });

    html += '<div class="side-section-label">Practice & Exams</div>';
    html += link(pre + "practice/unit-1.html", "✏️", "Practice Questions", active && active.page === "practice");
    html += link(pre + "assessments/unit-1.html", "🧪", "Unit Assessments", active && active.page === "assessment");
    html += link(pre + "frq/aaq-practice.html", "📝", "AAQ Practice", active && active.page === "aaq");
    html += link(pre + "frq/ebq-practice.html", "🗂️", "EBQ Practice", active && active.page === "ebq");

    html += '<div class="side-section-label">Guides</div>';
    html += link(pre + "exam-overview.html", "📋", "Exam Overview", active && active.page === "overview");
    html += link(pre + "how-to-study.html", "🧭", "How to Study", active && active.page === "howto");
    html += '</nav>';

    side.innerHTML = html;
    wireGroups();
    updateProgressUI();
  }

  function link(href, ic, label, isActive) {
    return '<a class="side-link' + (isActive ? " active" : "") + '" href="' + href + '"' +
      (isActive ? ' aria-current="page"' : "") + '>' +
      '<span class="ic" aria-hidden="true">' + ic + '</span>' + label + '</a>';
  }

  function currentExpandedArray() {
    var arr = [];
    document.querySelectorAll(".unit-group").forEach(function (g) {
      if (g.getAttribute("aria-expanded") === "true") arr.push(Number(g.dataset.unit));
    });
    return arr;
  }

  function wireGroups() {
    document.querySelectorAll(".unit-toggle").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var group = btn.closest(".unit-group");
        var open = group.getAttribute("aria-expanded") === "true";
        group.setAttribute("aria-expanded", String(!open));
        btn.setAttribute("aria-expanded", String(!open));
        saveExpanded(currentExpandedArray());
      });
    });
  }

  // ---- live progress reflected in the sidebar chips + dots ------------------
  function updateProgressUI() {
    var P = window.Progress;
    if (!P) return;
    document.querySelectorAll("[data-acc]").forEach(function (elm) {
      var code = elm.getAttribute("data-acc");
      var acc = P.topicAccuracy(code);
      elm.textContent = acc == null ? "" : acc + "%";
    });
    document.querySelectorAll("[data-dot]").forEach(function (dot) {
      var code = dot.getAttribute("data-dot");
      var level = P.topicLevel(code);
      dot.className = "mastery-dot " + P.levelClass(level);
      dot.setAttribute("title", code + " — " + level);
    });
    document.querySelectorAll("[data-unit-acc]").forEach(function (elm) {
      var n = Number(elm.getAttribute("data-unit-acc"));
      var acc = P.unitAccuracy(n);
      elm.textContent = acc == null ? "" : acc + "%";
    });
    // refresh stat strip if present
    if (window.Gamification) window.Gamification.renderStrip("#stat-strip");
  }

  // ---- mobile drawer -------------------------------------------------------
  function wireDrawer() {
    var app = document.querySelector(".app");
    if (!app) return;
    function open() {
      app.classList.add("drawer-open");
      var first = document.querySelector(".sidebar .side-link, .sidebar .unit-toggle");
      if (first) first.focus();
    }
    function close() {
      app.classList.remove("drawer-open");
      var h = document.querySelector(".hamburger"); if (h) h.focus();
    }
    document.addEventListener("click", function (e) {
      if (e.target.closest(".hamburger")) { e.preventDefault(); app.classList.contains("drawer-open") ? close() : open(); }
      else if (e.target.closest(".drawer-scrim")) { close(); }
      else if (e.target.closest(".sidebar a") && window.innerWidth <= 768) { close(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && app.classList.contains("drawer-open")) close();
    });
  }

  function injectSync() {
    // Load the optional cloud-sync module once, on every page (it stays dormant unless the
    // user has signed in). Guarded so it isn't added twice.
    if (window.Sync || document.querySelector("script[data-apsync-sync]")) return;
    var s = document.createElement("script");
    s.src = rootPrefix() + "js/sync.js";
    s.setAttribute("data-apsync-sync", "1");
    document.head.appendChild(s);
  }

  function injectFavicon() {
    if (document.querySelector('link[rel="icon"]')) return;
    var svg = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>" +
      "<rect width='32' height='32' rx='7' fill='#12805c'/>" +
      "<text x='16' y='24' font-size='22' text-anchor='middle' fill='#ffffff' font-family='Georgia,serif' font-weight='bold'>Ψ</text></svg>";
    var link = document.createElement("link");
    link.rel = "icon";
    link.href = "data:image/svg+xml," + encodeURIComponent(svg);
    document.head.appendChild(link);
  }

  function showStorageWarning() {
    if (document.querySelector(".storage-warn")) return;
    var bar = document.createElement("div");
    bar.className = "storage-warn";
    bar.setAttribute("role", "alert");
    bar.innerHTML = '<span><b>⚠️ Your progress won\'t be saved.</b> This browser is blocking local storage — usually because you\'re in a Private / Incognito window. Switch to a normal window to keep your streak, XP, and mastery between visits.</span>' +
      '<button class="sw-close" aria-label="Dismiss this warning">✕</button>';
    document.body.appendChild(bar);
    bar.querySelector(".sw-close").addEventListener("click", function () { bar.remove(); });
  }
  function maybeStorageWarning() {
    if (window.Progress && !window.Progress.storageOk()) showStorageWarning();
  }

  var Shell = {
    init: function (opts) {
      opts = opts || {};
      injectFavicon();
      injectSync();
      if (window.Progress) window.Progress.load();
      buildSidebar(opts.active || {});
      if (window.Gamification) window.Gamification.renderStrip("#stat-strip");
      wireDrawer();
      buildFooter();
      maybeStorageWarning();
      window.addEventListener("apsych:storage-blocked", showStorageWarning);
      window.addEventListener("apsych:progress-updated", updateProgressUI);
    },
    refresh: updateProgressUI
  };

  function buildFooter() {
    document.querySelectorAll("[data-footer]").forEach(function (f) {
      f.className = "site-footer";
      f.innerHTML =
        'AP&reg; is a trademark registered by the College Board, which is not affiliated with and does not endorse this site. ' +
        'Study content is original and based on the publicly available AP Psychology Course and Exam Description. ' +
        'This is a free, open-source self-study tool — not an official College Board product. ' +
        '<br>Built as a static site (HTML/CSS/JS). Your progress is stored only in this browser. ' +
        '<a href="' + rootPrefix() + 'exam-overview.html">Exam overview</a> &middot; ' +
        '<a href="' + rootPrefix() + 'how-to-study.html">How to study</a>';
    });
  }

  // ---- shared UI helpers (rings, mastery grid, countdown) ------------------
  function ring(pct, opts) {
    opts = opts || {};
    pct = Math.max(0, Math.min(100, Math.round(pct || 0)));
    var size = opts.size || 96, stroke = opts.stroke || 10;
    var r = (size - stroke) / 2, c = 2 * Math.PI * r;
    var off = c * (1 - pct / 100);
    var label = opts.label != null ? opts.label : pct + "%";
    var sub = opts.sub ? "<small>" + opts.sub + "</small>" : "";
    var fillColor = opts.color ? ' style="stroke:' + opts.color + ';"' : "";
    return '<div class="ring" style="width:' + size + "px;height:" + size + 'px;" role="img" aria-label="' +
      (opts.aria || (pct + " percent")) + '">' +
      '<svg width="' + size + '" height="' + size + '" viewBox="0 0 ' + size + " " + size + '" aria-hidden="true">' +
      '<circle class="ring-track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke + '"/>' +
      '<circle class="ring-fill" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" stroke-width="' + stroke +
      '" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"' + fillColor + "/>" +
      '</svg><div class="ring-label" style="font-size:' + (opts.fs || "1.15rem") + ';">' + label + sub + "</div></div>";
  }

  function renderMasteryGrid(target) {
    target = typeof target === "string" ? document.querySelector(target) : target;
    if (!target) return;
    var P = window.Progress, pre = rootPrefix();
    var html = '<div class="mastery-grid">';
    window.APSYCH.course.units.forEach(function (u) {
      u.topics.forEach(function (t) {
        var lv = P ? P.topicLevel(t.code) : "New";
        var acc = P ? P.topicAccuracy(t.code) : null;
        html += '<a class="mgrid-cell ' + (P ? P.levelClass(lv) : "m-new") + '" href="' + pre + "units/" + u.slug + ".html#" + t.code + '"' +
          ' title="' + t.code + " " + t.title.replace(/"/g, "") + " — " + lv + (acc != null ? " (" + acc + "%)" : "") + '"' +
          ' aria-label="Topic ' + t.code + ", " + lv + (acc != null ? ", " + acc + " percent" : "") + '">' + t.code + "</a>";
      });
    });
    html += "</div>";
    html += '<div class="mgrid-legend" aria-hidden="false">' +
      '<span><i style="background:var(--surface-3)"></i> New</span>' +
      '<span><i style="background:var(--m-practiced)"></i> Practiced</span>' +
      '<span><i style="background:var(--m-familiar)"></i> Familiar</span>' +
      '<span><i style="background:var(--m-proficient)"></i> Proficient</span>' +
      '<span><i style="background:var(--m-mastered)"></i> Mastered</span>' +
      "</div>";
    target.innerHTML = html;
  }

  function daysUntilExam() {
    // Returns a signed day count (negative if the stated date has already passed),
    // or null on error. Callers decide how to present a non-positive value.
    try {
      var exam = new Date(window.APSYCH.course.examDate + "T08:00:00");
      var now = new Date();
      return Math.ceil((exam - now) / 86400000);
    } catch (e) { return null; }
  }

  Shell.ring = ring;
  Shell.renderMasteryGrid = renderMasteryGrid;
  Shell.daysUntilExam = daysUntilExam;
  window.APSYCH.ring = ring;

  window.Shell = Shell;
  window.APSYCH.Shell = Shell;
})();
