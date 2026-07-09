/*
 * gamification.js — Badge catalog + the "view" layer for streaks / XP / badges.
 * progress.js awards badges by running each catalog entry's test(). This module
 * also renders the top-bar stat strip, the badges grid, and the session summary.
 * Lightweight by design — it should support studying, not distract from it.
 */
(function () {
  "use strict";
  window.APSYCH = window.APSYCH || {};

  // Badge catalog. Each test(API, state) -> boolean (earned?).
  var catalog = [
    { id: "first-question", emoji: "🎯", name: "First Steps",
      desc: "Answer your first practice question.",
      test: function (P) { return P.totalAnswered() >= 1; } },
    { id: "q-25", emoji: "✅", name: "Getting Reps In",
      desc: "Answer 25 practice questions.",
      test: function (P) { return P.totalAnswered() >= 25; } },
    { id: "q-100", emoji: "💯", name: "Century",
      desc: "Answer 100 practice questions.",
      test: function (P) { return P.totalAnswered() >= 100; } },
    { id: "first-mastered", emoji: "🏆", name: "First Mastery",
      desc: "Reach the Mastered level on any topic.",
      test: function (P, s) {
        return Object.keys(s.topics).some(function (k) { return s.topics[k].level === "Mastered"; });
      } },
    { id: "streak-10", emoji: "⚡", name: "On a Roll",
      desc: "Answer 10 questions correctly in a row.",
      test: function (P) { return P.maxCorrectStreak() >= 10; } },
    { id: "streak-50", emoji: "🔥", name: "50-Question Streak",
      desc: "Answer 50 questions correctly in a row.",
      test: function (P) { return P.maxCorrectStreak() >= 50; } },
    { id: "week-warrior", emoji: "📅", name: "Week Warrior",
      desc: "Keep a 7-day study streak going.",
      test: function (P) { return P.streakCount() >= 7; } },
    { id: "unit-1-complete", emoji: "🧠", name: "Unit 1 Complete",
      desc: "Answer 20+ questions in Unit 1 (Biological Bases).",
      test: function (P) { return P.unitAttempts(1) >= 20; } },
    { id: "unit-2-complete", emoji: "💭", name: "Unit 2 Complete",
      desc: "Answer 20+ questions in Unit 2 (Cognition).",
      test: function (P) { return P.unitAttempts(2) >= 20; } },
    { id: "unit-3-complete", emoji: "🌱", name: "Unit 3 Complete",
      desc: "Answer 20+ questions in Unit 3 (Development & Learning).",
      test: function (P) { return P.unitAttempts(3) >= 20; } },
    { id: "unit-4-complete", emoji: "🤝", name: "Unit 4 Complete",
      desc: "Answer 20+ questions in Unit 4 (Social & Personality).",
      test: function (P) { return P.unitAttempts(4) >= 20; } },
    { id: "unit-5-complete", emoji: "❤️‍🩹", name: "Unit 5 Complete",
      desc: "Answer 20+ questions in Unit 5 (Mental & Physical Health).",
      test: function (P) { return P.unitAttempts(5) >= 20; } },
    { id: "proficient-10", emoji: "📈", name: "Halfway There",
      desc: "Reach Proficient or better on 10 topics.",
      test: function (P) { return P.topicsAtOrAbove("Proficient") >= 10; } },
    { id: "all-seen", emoji: "🗺️", name: "Full Survey",
      desc: "Practice at least one question in all 35 topics.",
      test: function (P, s) { return Object.keys(s.topics).length >= 35; } }
  ];
  window.APSYCH.badgeCatalog = catalog;

  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  var G = {
    catalog: catalog,

    // Top-bar strip: streak + XP
    renderStrip: function (target) {
      target = typeof target === "string" ? document.querySelector(target) : target;
      if (!target) return;
      var P = window.Progress;
      target.innerHTML =
        '<span class="stat-pill streak" title="Daily study streak">' +
          '<span class="ic" aria-hidden="true">🔥</span>' +
          '<span class="tabular">' + P.streakCount() + '</span>' +
          '<span class="lbl-text">day' + (P.streakCount() === 1 ? "" : "s") + '</span>' +
        '</span>' +
        '<span class="stat-pill xp" title="Total XP earned">' +
          '<span class="ic" aria-hidden="true">⭐</span>' +
          '<span class="tabular">' + P.xp() + '</span>' +
          '<span class="lbl-text">XP</span>' +
        '</span>';
    },

    renderBadges: function (target) {
      target = typeof target === "string" ? document.querySelector(target) : target;
      if (!target) return;
      var P = window.Progress;
      var earned = P.badges();
      target.innerHTML = "";
      catalog.forEach(function (b) {
        var got = !!earned[b.id];
        var card = el("div", "achv" + (got ? "" : " locked"));
        card.innerHTML =
          '<div class="emoji" aria-hidden="true">' + (got ? b.emoji : "🔒") + '</div>' +
          '<div><div class="a-name">' + b.name + '</div>' +
          '<div class="a-desc">' + b.desc + '</div></div>';
        target.appendChild(card);
      });
      var count = Object.keys(earned).length;
      return count;
    },

    // Session summary object -> HTML. results = { total, correct, xp, moves:[{topic,from,to,dir}] }
    sessionSummaryHTML: function (r) {
      var pct = r.total ? Math.round((r.correct / r.total) * 100) : 0;
      var moves = (r.moves || []).filter(function (m) { return m.from !== m.to; });
      var moveHTML = "";
      if (moves.length) {
        moveHTML = '<div class="mt-4"><h3 style="font-size:1rem;">Mastery changes</h3><ul class="stack" style="gap:.25rem;">' +
          moves.map(function (m) {
            var arrow = m.dir > 0 ? "▲" : "▼";
            var color = m.dir > 0 ? "var(--correct)" : "var(--incorrect)";
            var meta = window.APSYCH.topicMeta(m.topic);
            return '<li style="font-size:.9rem;"><b>' + m.topic + "</b> " +
              (meta ? meta.title : "") + ' — <span style="color:' + color + ';font-weight:700;">' +
              arrow + " " + m.from + " → " + m.to + "</span></li>";
          }).join("") + "</ul></div>";
      }
      var badgeHTML = "";
      if (r.newBadges && r.newBadges.length) {
        badgeHTML = '<div class="mt-4"><h3 style="font-size:1rem;">New badges</h3><div class="flex wrap gap-2">' +
          r.newBadges.map(function (b) {
            return '<span class="chip">' + b.emoji + " " + b.name + "</span>";
          }).join("") + "</div></div>";
      }
      return '' +
        '<div class="result-summary">' +
          '<div class="center"><div class="score-big">' + pct + '%</div>' +
          '<div class="muted small">' + r.correct + " / " + r.total + ' correct</div></div>' +
          '<div><div class="stat-row">' +
            '<div class="stat-tile"><div class="num">+' + r.xp + '</div><div class="lbl">XP earned</div></div>' +
            '<div class="stat-tile"><div class="num tabular">' + window.Progress.streakCount() + '</div><div class="lbl">Day streak</div></div>' +
          '</div></div>' +
        '</div>' + moveHTML + badgeHTML;
    },

    // Fire toast notifications for XP/level/badges after an answer (respects reduced motion via CSS)
    celebrate: function (rec) {
      if (!rec) return;
      if (rec.newBadges && rec.newBadges.length) {
        rec.newBadges.forEach(function (b) {
          G.toast(b.emoji + " Badge unlocked: " + b.name);
        });
      }
      if (rec.levelUp) {
        G.toast("📈 " + rec.topic + " → " + rec.levelAfter + "!");
      }
      if (rec.correctStreak && rec.correctStreak > 0 && rec.correctStreak % 10 === 0) {
        G.toast("🔥 " + rec.correctStreak + " in a row!");
      }
    },

    toast: function (msg) {
      var wrap = document.querySelector(".toast-wrap");
      if (!wrap) {
        wrap = el("div", "toast-wrap"); wrap.setAttribute("aria-live", "polite"); document.body.appendChild(wrap);
      }
      var t = el("div", "toast", '<span>' + msg + '</span>');
      wrap.appendChild(t);
      setTimeout(function () {
        t.style.transition = "opacity .3s"; t.style.opacity = "0";
        setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 320);
      }, 2600);
    }
  };

  window.Gamification = G;
  window.APSYCH.Gamification = G;
})();
