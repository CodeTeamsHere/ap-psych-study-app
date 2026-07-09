/*
 * notes.js — Renders structured study-notes data into the reading-optimized layout
 * and assembles the per-unit page (header + in-unit topic nav + all topic sections).
 * Notes data lives in data/notes/unit-N.js as window.APSYCH.notes[code] = {...}.
 */
(function () {
  "use strict";
  window.APSYCH = window.APSYCH || {};

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function pre() { return document.body.dataset.root || "./"; }

  function loBlock(lo) {
    var eks = (lo.eks || []).map(function (ek) {
      var subs = (ek.subs || []).length
        ? '<ul style="margin:.25rem 0 0;">' + ek.subs.map(function (s) {
            return "<li><span class=\"ek-code\">" + s.code + "</span> " + s.text + "</li>";
          }).join("") + "</ul>"
        : "";
      return '<p class="ek"><span class="ek-code">' + ek.code + "</span> " + ek.text + subs + "</p>";
    }).join("");
    return '<div class="lo-block"><span class="lo-code">' + lo.code + "</span> " + esc(lo.text) + eks + "</div>";
  }

  function renderTopic(n) {
    if (!n) return "";
    var pracHref = pre() + "practice/unit-" + n.unit + ".html?topic=" + encodeURIComponent(n.topic);
    var html = '<section class="topic-section" id="' + n.topic + '">';

    // header row
    html += '<div class="spread" style="align-items:flex-start;flex-wrap:wrap;gap:1rem;border-bottom:2px solid var(--border);padding-bottom:.75rem;margin:2rem 0 1rem;">';
    html += "<div><div class=\"eyebrow\" style=\"color:var(--primary-strong);font-weight:700;font-size:.8rem;\">Topic " + n.topic + "</div>" +
      '<h2 style="border:none;margin:.15rem 0 0;padding:0;">' + esc(n.title) + "</h2></div>";
    html += '<div class="flex items-center gap-2 wrap">' +
      '<span class="badge-level"><span class="mastery-dot" data-dot="' + n.topic + '"></span><span data-level="' + n.topic + '">New</span></span>' +
      '<span class="chip acc" data-acc-chip="' + n.topic + '">—</span>' +
      '<a class="btn btn-sm btn-primary" href="' + pracHref + '">Practice ' + n.topic + " →</a></div>";
    html += "</div>";

    html += '<div class="reading">';

    // Learning objectives / EK
    if (n.los && n.los.length) {
      html += '<h3>Learning objectives &amp; essential knowledge</h3>';
      html += '<p class="muted small">Paraphrased from the College Board AP Psychology CED. LO letters and EK numbers follow the CED convention.</p>';
      n.los.forEach(function (lo) { html += loBlock(lo); });
    }

    // Big idea
    if (n.bigIdea) { html += "<h3>The right way to learn it</h3>" + n.bigIdea; }

    // Vocabulary
    if (n.vocab && n.vocab.length) {
      html += "<h3>Key vocabulary</h3><dl class=\"vocab-list\">";
      n.vocab.forEach(function (v) {
        html += '<div class="vocab-item"><dt>' + esc(v.term) + "</dt><dd>" + v.def + "</dd></div>";
      });
      html += "</dl>";
    }

    // Researchers
    if (n.researchers && n.researchers.length) {
      html += "<h3>Key researchers &amp; studies</h3><div>";
      n.researchers.forEach(function (r) {
        html += '<div class="researcher"><div class="r-name">' + esc(r.name) + '</div><div class="r-desc">' + r.contribution + "</div></div>";
      });
      html += "</div>";
    }

    // Applied example
    if (n.examples && n.examples.length) {
      html += '<div class="callout info"><div class="c-title"><span aria-hidden="true">🔎</span> Applied example</div>';
      n.examples.forEach(function (ex) { html += "<p>" + ex + "</p>"; });
      html += "</div>";
    }

    // Mnemonic
    if (n.mnemonic) {
      var mns = Array.isArray(n.mnemonic) ? n.mnemonic : [n.mnemonic];
      html += '<div class="callout mnemonic"><div class="c-title"><span aria-hidden="true">🧠</span> Memory device</div>';
      mns.forEach(function (m) { html += "<p><b>" + esc(m.device) + "</b> — " + m.explain + "</p>"; });
      html += "</div>";
    }

    // Trouble spots
    if (n.traps && n.traps.length) {
      html += '<div class="callout traps"><div class="c-title"><span aria-hidden="true">⚠️</span> Common trouble spots &amp; distractor traps</div><ul>';
      n.traps.forEach(function (t) { html += "<li>" + t + "</li>"; });
      html += "</ul></div>";
    }

    // Exclusions
    if (n.exclusions && n.exclusions.length) {
      html += '<div class="callout exclusion"><div class="c-title"><span aria-hidden="true">🚫</span> Beyond the scope of the exam (don\'t over-study)</div><ul>';
      n.exclusions.forEach(function (e) { html += "<li>" + e + "</li>"; });
      html += "</ul></div>";
    }

    html += '<p class="mt-5"><a class="btn btn-outline" href="' + pracHref + '">Practice questions for Topic ' + n.topic + " →</a></p>";
    html += "</div></section>";
    return html;
  }

  function renderUnit(container, unitN) {
    container = typeof container === "string" ? document.querySelector(container) : container;
    if (!container) return;
    var u = window.APSYCH.unitByNumber(unitN);
    if (!u) { container.innerHTML = "<p>Unit not found.</p>"; return; }
    var P = window.Progress;

    var html = '<div class="page-head"><div class="eyebrow">Unit ' + u.n + " &middot; " + esc(u.title) + " &middot; " + window.APSYCH.course.unitWeight + '</div>' +
      "<h1>" + esc(u.title) + "</h1><p class=\"lede\">" + esc(u.blurb) + "</p></div>";

    // unit summary card
    html += '<div class="card mb-4"><div class="spread wrap gap-4">';
    html += '<div class="flex items-center gap-4">' + (window.APSYCH.ring(P ? P.unitMasteryPct(u.n) : 0, { size: 84, sub: "mastered", aria: (P ? P.unitMasteryPct(u.n) : 0) + " percent of topics mastered" })) + "</div>";
    html += '<div class="stat-row" style="flex:1;min-width:240px;">' +
      '<div class="stat-tile"><div class="num" data-unit-acc-num="' + u.n + '">—</div><div class="lbl">Accuracy</div></div>' +
      '<div class="stat-tile"><div class="num" data-unit-answered="' + u.n + '">0</div><div class="lbl">Answered</div></div>' +
      "</div>";
    html += '<div class="flex gap-2 wrap"><a class="btn btn-primary" href="' + pre() + "practice/" + u.slug + '.html">Practice this unit</a>' +
      '<a class="btn btn-outline" href="' + pre() + "assessments/" + u.slug + '.html">Take assessment</a></div>';
    html += "</div></div>";

    // in-unit topic nav
    html += '<nav class="panel mb-4" aria-label="Topics in this unit"><strong class="small muted" style="display:block;margin-bottom:.5rem;">Jump to a topic</strong><div class="flex wrap gap-2">';
    u.topics.forEach(function (t) {
      html += '<a class="chip" href="#' + t.code + '" style="text-decoration:none;">' + t.code + " " + esc(t.title) + "</a>";
    });
    html += "</div></nav>";

    // topic sections
    u.topics.forEach(function (t) {
      var n = window.APSYCH.notes[t.code];
      if (n) html += renderTopic(n);
      else html += '<section id="' + t.code + '"><h2>Topic ' + t.code + " — " + esc(t.title) + '</h2><p class="muted">Study notes for this topic are being finalized.</p></section>';
    });

    container.innerHTML = html;
    refreshChips();
    window.addEventListener("apsych:progress-updated", refreshChips);

    // hash scroll
    if (location.hash) {
      var id = decodeURIComponent(location.hash.slice(1));
      var el = document.getElementById(id);
      if (el) setTimeout(function () { el.scrollIntoView({ behavior: "smooth", block: "start" }); }, 60);
    }
  }

  function refreshChips() {
    var P = window.Progress; if (!P) return;
    document.querySelectorAll("[data-acc-chip]").forEach(function (c) {
      var code = c.getAttribute("data-acc-chip");
      var acc = P.topicAccuracy(code);
      c.textContent = acc == null ? "Not started" : acc + "% accuracy";
    });
    document.querySelectorAll("[data-level]").forEach(function (l) {
      l.textContent = P.topicLevel(l.getAttribute("data-level"));
    });
    document.querySelectorAll("[data-dot]").forEach(function (d) {
      var code = d.getAttribute("data-dot");
      d.className = "mastery-dot " + P.levelClass(P.topicLevel(code));
    });
    document.querySelectorAll("[data-unit-acc-num]").forEach(function (e) {
      var n = Number(e.getAttribute("data-unit-acc-num"));
      var acc = P.unitAccuracy(n);
      e.textContent = acc == null ? "—" : acc + "%";
    });
    document.querySelectorAll("[data-unit-answered]").forEach(function (e) {
      e.textContent = P.unitAttempts(Number(e.getAttribute("data-unit-answered")));
    });
  }

  // ---- FRQ renderer (AAQ + EBQ) --------------------------------------------
  function renderFRQ(frq) {
    if (!frq) return "";
    var id = frq.id;
    var html = '<div class="frq" data-frq="' + id + '">';
    html += '<div class="q-meta"><span class="chip chip-practice">' + frq.kind + "</span>" +
      '<span class="chip">' + esc(frq.topicArea || "") + "</span>" +
      '<span class="chip">' + (frq.minutes || "") + " min</span>" +
      '<span class="chip">' + (frq.points || 7) + " points</span></div>";
    html += "<h3 style=\"margin-top:.5rem;\">" + esc(frq.title) + "</h3>";

    if (frq.kind === "AAQ" && frq.study) {
      var s = frq.study;
      html += '<div class="frq-source"><div class="fs-head">The study</div><div class="fs-body reading" style="max-width:none;">';
      if (s.citation) html += '<p class="muted small"><em>' + esc(s.citation) + "</em></p>";
      if (s.background) html += "<p><b>Background.</b> " + s.background + "</p>";
      if (s.method) html += "<p><b>Method.</b> " + s.method + "</p>";
      if (s.participants) html += "<p><b>Participants.</b> " + s.participants + "</p>";
      if (s.procedure) html += "<p><b>Procedure.</b> " + s.procedure + "</p>";
      if (s.results) html += "<p><b>Results.</b> " + s.results + "</p>";
      if (s.stimulus && window.Quiz) html += window.Quiz.renderStimulus(s.stimulus);
      html += "</div></div>";
    }
    if (frq.kind === "EBQ") {
      if (frq.question) html += '<div class="callout info"><div class="c-title">Prompt</div><p>' + frq.question + "</p></div>";
      (frq.sources || []).forEach(function (src) {
        html += '<div class="frq-source"><div class="fs-head">' + esc(src.label) + (src.citation ? ' — <span class="muted small">' + esc(src.citation) + "</span>" : "") + "</div>" +
          '<div class="fs-body reading" style="max-width:none;">' + (src.summary || "") + (src.stimulus && window.Quiz ? window.Quiz.renderStimulus(src.stimulus) : "") + "</div></div>";
      });
    }

    // prompt parts
    html += '<div class="panel" style="margin-top:1rem;"><strong>Respond to each part:</strong><div class="frq-prompt">';
    (frq.parts || []).forEach(function (p) {
      html += '<div class="frq-part"><span class="fp-label">(' + p.label + ") [" + p.points + " pt] </span>" + p.prompt + "</div>";
    });
    html += "</div></div>";

    // response area
    html += '<label class="small muted" style="display:block;margin:1rem 0 .25rem;">Your response (saved in this browser)</label>' +
      '<div class="self-score"><textarea data-frq-text="' + id + '" placeholder="Write your full response here…"></textarea></div>';

    // reveal: rubric + model + self-score checklist
    html += '<details class="reveal mt-4"><summary>Show scoring rubric &amp; model answer</summary><div class="reveal-body">';
    html += '<p class="muted small">Rubric structure mirrors the official College Board ' + frq.kind + ' scoring guidelines. The model answer is one way to earn full marks — not the only way.</p>';
    html += '<table class="rubric-table"><thead><tr><th>Part</th><th>Pts</th><th>What earns the point(s)</th></tr></thead><tbody>';
    (frq.parts || []).forEach(function (p) {
      html += "<tr><td><b>" + p.label + "</b></td><td>" + p.points + "</td><td>" + (p.rubric || "") + "</td></tr>";
    });
    html += "</tbody></table>";
    html += '<h4 class="mt-4">Model answer</h4><div class="model-answer reading" style="max-width:none;">';
    (frq.parts || []).forEach(function (p) {
      html += "<p><b>(" + p.label + ")</b> " + (p.model || "") + "</p>";
    });
    html += "</div>";

    // interactive self-score checklist
    if (frq.checklist && frq.checklist.length) {
      html += '<h4 class="mt-4">Self-score checklist</h4><div class="stack" style="gap:.4rem;" data-frq-checklist="' + id + '">';
      frq.checklist.forEach(function (c, idx) {
        html += '<label class="flex items-center gap-2" style="font-size:.95rem;"><input type="checkbox" data-frq-check="' + id + '" data-pts="' + c.points + '" style="width:18px;height:18px;accent-color:var(--primary);"> ' + esc(c.text) + ' <span class="muted small">(' + c.points + " pt)</span></label>";
      });
      html += '<p class="mt-2"><b>Your self-score: <span data-frq-total="' + id + '">0</span> / ' + (frq.points || 7) + "</b></p></div>";
    }
    html += "</div></details></div>";
    return html;
  }

  // global delegation: persist FRQ responses + tally self-score checklist
  document.addEventListener("input", function (e) {
    if (e.target.matches && e.target.matches("[data-frq-text]")) {
      try { localStorage.setItem("apsych:frq:" + e.target.getAttribute("data-frq-text"), e.target.value); } catch (err) {}
    }
  });
  document.addEventListener("change", function (e) {
    if (e.target.matches && e.target.matches("[data-frq-check]")) {
      var id = e.target.getAttribute("data-frq-check");
      var total = 0;
      document.querySelectorAll('[data-frq-check="' + id + '"]').forEach(function (cb) {
        if (cb.checked) total += Number(cb.getAttribute("data-pts")) || 0;
      });
      var out = document.querySelector('[data-frq-total="' + id + '"]');
      if (out) out.textContent = total;
    }
  });
  // restore saved responses when FRQs appear
  function restoreFRQ() {
    document.querySelectorAll("[data-frq-text]").forEach(function (ta) {
      if (ta.value) return;
      try { var v = localStorage.getItem("apsych:frq:" + ta.getAttribute("data-frq-text")); if (v) ta.value = v; } catch (e) {}
    });
  }

  window.APSYCH.Notes = { renderTopic: renderTopic, renderUnit: renderUnit, renderFRQ: renderFRQ, restoreFRQ: restoreFRQ };
})();

