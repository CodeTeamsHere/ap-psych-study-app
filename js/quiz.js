/*
 * quiz.js — The question engine.
 * Renders questions with accessible semantics (<fieldset>/<legend> + real radios),
 * the select -> eliminate -> submit -> lock -> explain -> advance flow for practice,
 * and a deferred-feedback ExamSession for timed unit assessments.
 * Records every attempt through window.Progress. No network calls.
 */
(function () {
  "use strict";
  window.APSYCH = window.APSYCH || {};
  var LETTERS = ["A", "B", "C", "D", "E"];

  // ---------- registry access ----------
  function topicQuestions(code) { return (window.APSYCH.questions[code] || []).slice(); }
  function unitQuestions(n) {
    var u = window.APSYCH.unitByNumber(n);
    if (!u) return [];
    var out = [];
    u.topics.forEach(function (t) { out = out.concat(topicQuestions(t.code)); });
    return out;
  }
  function allQuestions() {
    var out = [];
    window.APSYCH.course.units.forEach(function (u) { out = out.concat(unitQuestions(u.n)); });
    return out;
  }
  function correctIndex(q) {
    for (var i = 0; i < q.choices.length; i++) if (q.choices[i].correct) return i;
    return 0;
  }
  function filter(qs, f) {
    f = f || {};
    return qs.filter(function (q) {
      if (f.topic && f.topic !== "all" && q.topic !== f.topic) return false;
      if (f.difficulty && f.difficulty !== "all" && q.difficulty !== f.difficulty) return false;
      if (f.practice && f.practice !== "all" && String(q.practice) !== String(f.practice)) return false;
      if (f.status && f.status !== "all") {
        var st = window.Progress ? window.Progress.questionStatus(q.id) : "unseen";
        if (f.status !== st) return false;
      }
      return true;
    });
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  // ---------- helpers ----------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function diffClass(d) { return "chip-" + String(d || "Moderate").toLowerCase(); }

  // ---------- stimulus renderer (Practice 3: tables / charts / passages) ----------
  function renderStimulus(stim) {
    if (!stim) return "";
    if (stim.type === "passage") {
      return '<figure class="stimulus passage">' +
        (stim.caption ? '<figcaption class="stim-cap">' + esc(stim.caption) + "</figcaption>" : "") +
        '<div class="stim-body">' + esc(stim.text).replace(/\n/g, "<br>") + "</div></figure>";
    }
    if (stim.type === "table") {
      var thead = "<tr>" + stim.headers.map(function (h) { return "<th scope=\"col\">" + esc(h) + "</th>"; }).join("") + "</tr>";
      var tbody = stim.rows.map(function (r) {
        return "<tr>" + r.map(function (c, i) {
          return i === 0 && stim.rowHeaders ? "<th scope=\"row\">" + esc(c) + "</th>" : "<td>" + esc(c) + "</td>";
        }).join("") + "</tr>";
      }).join("");
      return '<figure class="stimulus"><figcaption class="stim-cap">' + esc(stim.caption || "Data table") + "</figcaption>" +
        '<div class="stim-body"><table class="data">' +
        (stim.title ? "<caption>" + esc(stim.title) + "</caption>" : "") +
        "<thead>" + thead + "</thead><tbody>" + tbody + "</tbody></table></div></figure>";
    }
    if (stim.type === "bars") return renderBars(stim);
    if (stim.type === "scatter") return renderScatter(stim);
    if (stim.type === "figure") {
      return '<figure class="stimulus"><figcaption class="stim-cap">' + esc(stim.caption || "Figure") + "</figcaption>" +
        '<div class="stim-body"><p class="muted" style="margin:0;">' + esc(stim.alt || stim.text || "") + "</p></div></figure>";
    }
    return "";
  }

  function srTable(headers, rows) {
    return '<table class="visually-hidden"><thead><tr>' +
      headers.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
      "</tr></thead><tbody>" +
      rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>"; }).join("") +
      "</tbody></table>";
  }

  function renderBars(stim) {
    var cats = stim.categories, vals = stim.values;
    var max = stim.max || Math.max.apply(null, vals) * 1.2 || 1;
    var W = 420, H = 240, padL = 46, padB = 46, padT = 16, padR = 12;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var bw = plotW / cats.length * 0.6, gap = plotW / cats.length;
    var bars = "", labels = "", ticks = "";
    var steps = 4;
    for (var s = 0; s <= steps; s++) {
      var yv = max * s / steps;
      var y = padT + plotH - (yv / max) * plotH;
      ticks += '<line x1="' + padL + '" y1="' + y + '" x2="' + (W - padR) + '" y2="' + y + '" stroke="var(--chart-grid)" stroke-width="1"/>' +
        '<text x="' + (padL - 6) + '" y="' + (y + 4) + '" text-anchor="end" font-size="10" fill="var(--muted)">' + (Math.round(yv * 10) / 10) + "</text>";
    }
    cats.forEach(function (c, i) {
      var v = vals[i];
      var h = (v / max) * plotH;
      var x = padL + gap * i + (gap - bw) / 2;
      var y = padT + plotH - h;
      var color = "var(--chart-" + ((i % 3) + 1) + ")";
      bars += '<rect x="' + x + '" y="' + y + '" width="' + bw + '" height="' + h + '" rx="3" fill="' + color + '"/>' +
        '<text x="' + (x + bw / 2) + '" y="' + (y - 5) + '" text-anchor="middle" font-size="10" font-weight="700" fill="var(--text)">' + v + "</text>";
      labels += '<text x="' + (x + bw / 2) + '" y="' + (H - padB + 16) + '" text-anchor="middle" font-size="10" fill="var(--text-2)">' + esc(c) + "</text>";
    });
    var yLabel = stim.yLabel ? '<text x="12" y="' + (padT + plotH / 2) + '" transform="rotate(-90 12 ' + (padT + plotH / 2) + ')" text-anchor="middle" font-size="10" fill="var(--muted)">' + esc(stim.yLabel) + "</text>" : "";
    var alt = stim.alt || (stim.caption || "Bar chart") + ": " + cats.map(function (c, i) { return c + " = " + vals[i]; }).join(", ");
    return '<figure class="stimulus"><figcaption class="stim-cap">' + esc(stim.caption || "Bar chart") + "</figcaption>" +
      '<div class="stim-body">' +
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(alt) + '" style="width:100%;height:auto;max-width:520px;">' +
      '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (W - padR) + '" y2="' + (padT + plotH) + '" stroke="var(--border-strong)"/>' +
      ticks + bars + labels + yLabel + "</svg>" +
      srTable([stim.xLabel || "Category", stim.yLabel || "Value"], cats.map(function (c, i) { return [c, vals[i]]; })) +
      "</div></figure>";
  }

  function renderScatter(stim) {
    var pts = stim.points; // [[x,y],...]
    var xs = pts.map(function (p) { return p[0]; }), ys = pts.map(function (p) { return p[1]; });
    var xMin = stim.xMin != null ? stim.xMin : Math.min.apply(null, xs);
    var xMax = stim.xMax != null ? stim.xMax : Math.max.apply(null, xs);
    var yMin = stim.yMin != null ? stim.yMin : Math.min.apply(null, ys);
    var yMax = stim.yMax != null ? stim.yMax : Math.max.apply(null, ys);
    var W = 420, H = 260, padL = 44, padB = 40, padT = 14, padR = 14;
    var plotW = W - padL - padR, plotH = H - padT - padB;
    function sx(x) { return padL + (xMax === xMin ? 0.5 : (x - xMin) / (xMax - xMin)) * plotW; }
    function sy(y) { return padT + plotH - (yMax === yMin ? 0.5 : (y - yMin) / (yMax - yMin)) * plotH; }
    var dots = pts.map(function (p) {
      return '<circle cx="' + sx(p[0]).toFixed(1) + '" cy="' + sy(p[1]).toFixed(1) + '" r="4" fill="var(--chart-2)" fill-opacity="0.85"/>';
    }).join("");
    var alt = stim.alt || (stim.caption || "Scatterplot") + " showing the relationship between " + (stim.xLabel || "x") + " and " + (stim.yLabel || "y") + ".";
    return '<figure class="stimulus"><figcaption class="stim-cap">' + esc(stim.caption || "Scatterplot") + "</figcaption>" +
      '<div class="stim-body">' +
      '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="' + esc(alt) + '" style="width:100%;height:auto;max-width:520px;">' +
      '<line x1="' + padL + '" y1="' + padT + '" x2="' + padL + '" y2="' + (padT + plotH) + '" stroke="var(--border-strong)"/>' +
      '<line x1="' + padL + '" y1="' + (padT + plotH) + '" x2="' + (W - padR) + '" y2="' + (padT + plotH) + '" stroke="var(--border-strong)"/>' +
      dots +
      '<text x="' + (padL + plotW / 2) + '" y="' + (H - 6) + '" text-anchor="middle" font-size="10" fill="var(--muted)">' + esc(stim.xLabel || "") + "</text>" +
      '<text x="12" y="' + (padT + plotH / 2) + '" transform="rotate(-90 12 ' + (padT + plotH / 2) + ')" text-anchor="middle" font-size="10" fill="var(--muted)">' + esc(stim.yLabel || "") + "</text>" +
      "</svg>" +
      srTable([stim.xLabel || "x", stim.yLabel || "y"], pts.map(function (p) { return [p[0], p[1]]; })) +
      "</div></figure>";
  }

  // ---------- shared: build the answers markup ----------
  function answersHTML(q, name, order) {
    var rows = order.map(function (ci, pos) {
      var c = q.choices[ci];
      var id = name + "-" + pos;
      return '<div class="answer" data-choice="' + ci + '" data-pos="' + pos + '">' +
        '<input type="radio" name="' + name + '" id="' + id + '" value="' + ci + '">' +
        '<label class="hit" for="' + id + '">' +
        '<span class="badge" aria-hidden="true">' + LETTERS[pos] + "</span>" +
        '<span class="atext">' + esc(c.text) + "</span>" +
        '<span class="result-ic" aria-hidden="true"></span>' +
        "</label>" +
        '<button type="button" class="eye" aria-pressed="false" aria-label="Eliminate choice ' + LETTERS[pos] + '" title="Eliminate this answer">' +
        "&#128065;</button>" +
        "</div>";
    }).join("");
    return '<div class="answers" role="group">' + rows + "</div>";
  }

  // ---------- PRACTICE session ----------
  function PracticeSession(container, questions, opts) {
    opts = opts || {};
    var self = this;
    this.questions = opts.shuffle ? shuffle(questions) : questions.slice();
    this.container = typeof container === "string" ? document.querySelector(container) : container;
    this.i = 0;
    this.results = [];             // {qid, correct}
    this.xpGained = 0;
    this.newBadges = {};
    this.touchedTopics = {};       // code -> startLevel
    this.opts = opts;

    if (!this.questions.length) {
      this.container.innerHTML = '<div class="panel center"><p class="muted mb-0">No questions match these filters yet. Try widening them.</p></div>';
      if (opts.onEmpty) opts.onEmpty();
      return;
    }
    if (window.Progress) window.Progress.touchSession();
    this.render();
    this.bindKeys();
  }

  PracticeSession.prototype.bindKeys = function () {
    var self = this;
    this._key = function (e) {
      if (/^(input|textarea|select)$/i.test((e.target.tagName || "")) && e.target.type !== "radio") return;
      var card = self.container.querySelector(".question-card");
      if (!card) return;
      var k = e.key.toLowerCase();
      if (!self._submitted && "abcd".indexOf(k) !== -1) {
        var pos = "abcd".indexOf(k);
        var row = card.querySelector('.answer[data-pos="' + pos + '"]');
        if (row) { e.preventDefault(); self.select(row); }
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (!self._submitted) { if (self._selected != null) self.submit(); }
        else { self.next(); }
      }
    };
    document.addEventListener("keydown", this._key);
  };
  PracticeSession.prototype.destroy = function () {
    if (this._key) document.removeEventListener("keydown", this._key);
  };

  PracticeSession.prototype.render = function () {
    var q = this.questions[this.i];
    this._submitted = false;
    this._selected = null;
    this._eliminated = {};
    var name = "q_" + (q.id || this.i);
    var order = this.opts.shuffleChoices ? shuffle(q.choices.map(function (_, i) { return i; })) : q.choices.map(function (_, i) { return i; });
    this._order = order;

    var meta = window.APSYCH.topicMeta(q.topic) || { title: "", unit: q.unit };
    var prac = window.APSYCH.course.practices[(q.practice || 1) - 1];
    var total = this.questions.length;

    var html = '';
    html += '<div class="quiz-toolbar" role="group" aria-label="Set progress">' +
      '<span class="qcount">Question ' + (this.i + 1) + ' of ' + total + '</span>' +
      '<div class="progress-track" aria-hidden="true"><i style="width:' + Math.round(this.i / total * 100) + '%"></i></div>' +
      '<label class="elim-toggle"><input type="checkbox" class="hide-elim"> Hide eliminated</label>' +
      "</div>";

    html += '<div class="question-card">';
    html += '<div class="q-meta">' +
      '<span class="chip">Topic ' + q.topic + " &middot; " + esc(meta.title) + "</span>" +
      '<span class="chip ' + diffClass(q.difficulty) + '">' + esc(q.difficulty || "Moderate") + "</span>" +
      '<span class="chip chip-practice" title="' + esc(prac ? prac.desc : "") + '">Practice ' + (q.practice || 1) + ": " + esc(prac ? prac.name : "") + "</span>" +
      "</div>";
    html += renderStimulus(q.stimulus);
    html += '<fieldset class="q-fieldset"><legend class="q-legend">' + esc(q.stem) + "</legend>";
    html += answersHTML(q, name, order);
    html += "</fieldset>";

    html += '<div class="result-banner" role="status" aria-live="polite"></div>';
    html += '<div class="explanation"></div>';

    html += '<div class="q-actions">' +
      '<div class="left"><span class="muted small">Keys: <kbd>A</kbd>–<kbd>D</kbd> select &middot; <kbd>Enter</kbd> submit</span></div>' +
      '<div><button class="btn btn-primary submit-btn" disabled>Submit Answer</button>' +
      '<button class="btn btn-primary next-btn hidden">Next Question &rarr;</button></div>' +
      "</div>";
    html += "</div>";

    this.container.innerHTML = html;
    this.wire();

    // capture starting mastery level for topics touched this session
    if (window.Progress && !(q.topic in this.touchedTopics)) {
      this.touchedTopics[q.topic] = window.Progress.topicLevel(q.topic);
    }
  };

  PracticeSession.prototype.wire = function () {
    var self = this, card = this.container.querySelector(".question-card");
    var answers = card.querySelector(".answers");

    card.querySelectorAll(".answer").forEach(function (row) {
      var radio = row.querySelector('input[type="radio"]');
      radio.addEventListener("change", function () { if (!self._submitted) self.select(row); });
      row.querySelector(".eye").addEventListener("click", function (e) {
        e.preventDefault(); e.stopPropagation();
        if (self._submitted) return;
        self.toggleEliminate(row);
      });
    });

    var hideElim = this.container.querySelector(".hide-elim");
    hideElim.addEventListener("change", function () {
      answers.classList.toggle("hide-eliminated", hideElim.checked);
    });

    card.querySelector(".submit-btn").addEventListener("click", function () { self.submit(); });
    card.querySelector(".next-btn").addEventListener("click", function () { self.next(); });
  };

  PracticeSession.prototype.select = function (row) {
    if (this._submitted) return;
    var card = this.container.querySelector(".question-card");
    card.querySelectorAll(".answer").forEach(function (r) { r.classList.remove("selected"); });
    row.classList.add("selected");
    var radio = row.querySelector('input[type="radio"]');
    radio.checked = true;
    this._selected = Number(row.dataset.choice);
    card.querySelector(".submit-btn").disabled = false;
  };

  PracticeSession.prototype.toggleEliminate = function (row) {
    var ci = Number(row.dataset.choice);
    if (this._eliminated[ci]) {
      delete this._eliminated[ci];
      row.classList.remove("eliminated");
      row.querySelector(".eye").setAttribute("aria-pressed", "false");
    } else {
      this._eliminated[ci] = true;
      row.classList.add("eliminated");
      row.querySelector(".eye").setAttribute("aria-pressed", "true");
      // if the eliminated row was selected, clear selection
      if (this._selected === ci) {
        row.classList.remove("selected");
        row.querySelector('input[type="radio"]').checked = false;
        this._selected = null;
        this.container.querySelector(".submit-btn").disabled = true;
      }
    }
  };

  PracticeSession.prototype.submit = function () {
    if (this._submitted || this._selected == null) return;
    var self = this;
    this._submitted = true;
    var q = this.questions[this.i];
    var ci = correctIndex(q);
    var chosen = this._selected;
    var isCorrect = q.choices[chosen].correct === true;
    var card = this.container.querySelector(".question-card");
    var answers = card.querySelector(".answers");
    answers.classList.add("locked");

    card.querySelectorAll(".answer").forEach(function (row) {
      var c = Number(row.dataset.choice);
      var radio = row.querySelector('input[type="radio"]');
      radio.disabled = true;
      row.classList.remove("selected");
      var ic = row.querySelector(".result-ic");
      if (c === ci) { row.classList.add("is-correct"); ic.textContent = "✓"; }
      if (c === chosen && !isCorrect) { row.classList.add("is-incorrect"); ic.textContent = "✗"; }
      row.querySelector(".eye").disabled = true;
    });

    // result banner
    var banner = card.querySelector(".result-banner");
    banner.className = "result-banner show " + (isCorrect ? "correct" : "incorrect");
    banner.innerHTML = '<span class="r-ic" aria-hidden="true">' + (isCorrect ? "✓" : "✗") + "</span>" +
      "<span>" + (isCorrect ? "Correct" : "Incorrect") + "</span>";

    // explanation
    var exp = card.querySelector(".explanation");
    exp.classList.add("show");
    exp.innerHTML = this.explanationHTML(q, ci, chosen, isCorrect);

    // record
    var rec = null;
    if (window.Progress) {
      rec = window.Progress.recordAttempt(q, isCorrect);
      this.xpGained += rec.xpGained;
      (rec.newBadges || []).forEach(function (b) { self.newBadges[b.id] = b; });
      if (window.Gamification) window.Gamification.celebrate(Object.assign({}, rec, { topic: q.topic }));
    }
    this.results.push({ qid: q.id, topic: q.topic, correct: isCorrect });

    card.querySelector(".submit-btn").classList.add("hidden");
    var nextBtn = card.querySelector(".next-btn");
    nextBtn.classList.remove("hidden");
    if (this.i + 1 >= this.questions.length) nextBtn.textContent = "See results →";
    nextBtn.focus();

    if (this.opts.onAnswered) this.opts.onAnswered(q, isCorrect, rec);
  };

  PracticeSession.prototype.explanationHTML = function (q, ci, chosen, isCorrect) {
    var order = this._order;
    var correctChoice = q.choices[ci];
    var meta = window.APSYCH.topicMeta(q.topic) || {};
    var html = '<div class="exp-correct"><h4><span aria-hidden="true">✓</span> Why ' + LETTERS[order.indexOf(ci)] + " is correct</h4>" +
      '<div class="exp-line good">' + esc(correctChoice.why || correctChoice.explanation || "") + "</div></div>";
    html += '<h4 class="mt-4">Why the other choices are wrong</h4><div class="exp-why">';
    order.forEach(function (cIdx, pos) {
      if (cIdx === ci) return;
      var c = q.choices[cIdx];
      html += '<div class="exp-line"><b>' + LETTERS[pos] + ".</b> " + esc(c.why || c.explanation || "") + "</div>";
    });
    html += "</div>";
    html += '<p class="exp-key"><span class="k-label">Key concept:</span> ' + esc(q.keyConcept || (meta.title || "")) +
      ' &nbsp;·&nbsp; <span class="k-label">Skill:</span> Science Practice ' + (q.practice || 1) + "</p>";
    return html;
  };

  PracticeSession.prototype.next = function () {
    if (this.i + 1 >= this.questions.length) { this.finish(); return; }
    this.i += 1;
    this.render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  PracticeSession.prototype.finish = function () {
    this.destroy();
    var correct = this.results.filter(function (r) { return r.correct; }).length;
    var moves = [];
    var P = window.Progress;
    if (P) {
      var self = this;
      Object.keys(this.touchedTopics).forEach(function (code) {
        var from = self.touchedTopics[code], to = P.topicLevel(code);
        if (from !== to) {
          moves.push({ topic: code, from: from, to: to, dir: P.LEVELS.indexOf(to) - P.LEVELS.indexOf(from) });
        }
      });
    }
    var summary = {
      total: this.results.length,
      correct: correct,
      xp: this.xpGained,
      moves: moves,
      newBadges: Object.keys(this.newBadges).map(function (k) { return this.newBadges[k]; }, this),
      missed: this.results.filter(function (r) { return !r.correct; }).map(function (r) { return r.qid; })
    };
    if (this.opts.onComplete) { this.opts.onComplete(summary); return; }
    this.renderSummary(summary);
  };

  PracticeSession.prototype.renderSummary = function (summary) {
    var self = this;
    var html = '<div class="page-head"><div class="eyebrow">Session complete</div><h1>Nice work!</h1></div>';
    html += '<div class="card">' + window.Gamification.sessionSummaryHTML(summary) + "</div>";
    html += '<div class="flex gap-3 mt-5 wrap">';
    if (summary.missed.length) html += '<button class="btn btn-outline review-missed">Review ' + summary.missed.length + " missed →</button>";
    html += '<button class="btn btn-primary again">Practice again</button>';
    html += '<a class="btn btn-ghost" href="' + (document.body.dataset.root || "./") + 'progress.html">View progress</a>';
    html += "</div>";
    this.container.innerHTML = html;
    var missedBtn = this.container.querySelector(".review-missed");
    if (missedBtn) missedBtn.addEventListener("click", function () {
      var qs = self.results.filter(function (r) { return !r.correct; }).map(function (r) {
        return self.questions.filter(function (q) { return q.id === r.qid; })[0];
      }).filter(Boolean);
      new PracticeSession(self.container, qs, self.opts);
    });
    this.container.querySelector(".again").addEventListener("click", function () {
      new PracticeSession(self.container, self.questions, self.opts);
    });
  };

  // ---------- EXAM session (deferred feedback) ----------
  function ExamSession(container, questions, opts) {
    opts = opts || {};
    this.container = typeof container === "string" ? document.querySelector(container) : container;
    this.questions = opts.shuffle ? shuffle(questions) : questions.slice();
    this.opts = opts;
    this.i = 0;
    this.answers = {};       // index -> choiceIndex
    this.eliminated = {};    // index -> {choiceIndex:true}
    this.finished = false;
    this.remaining = (opts.minutes || 30) * 60;
    if (!this.questions.length) {
      this.container.innerHTML = '<div class="panel">No questions available for this assessment yet.</div>';
      return;
    }
    if (window.Progress) window.Progress.touchSession();
    this.render();
    this.startTimer();
    this.emit();
  }
  ExamSession.prototype.startTimer = function () {
    var self = this;
    this._t = setInterval(function () {
      self.remaining -= 1;
      if (self.opts.onTick) self.opts.onTick(self.remaining);
      if (self.remaining <= 0) { clearInterval(self._t); self.finish(); }
    }, 1000);
    if (this.opts.onTick) this.opts.onTick(this.remaining);
  };
  ExamSession.prototype.emit = function () {
    if (this.opts.onChange) this.opts.onChange({
      index: this.i, total: this.questions.length,
      answered: Object.keys(this.answers).length,
      answeredMap: this.answers
    });
  };
  ExamSession.prototype.render = function () {
    var q = this.questions[this.i];
    var name = "ex_" + this.i;
    var order = q.choices.map(function (_, i) { return i; });
    this._order = order;
    var meta = window.APSYCH.topicMeta(q.topic) || {};
    var html = '<div class="question-card">';
    html += '<div class="q-meta"><span class="chip">Q' + (this.i + 1) + " · Topic " + q.topic + "</span>" +
      '<span class="chip ' + diffClass(q.difficulty) + '">' + esc(q.difficulty || "Moderate") + "</span>" +
      '<label class="elim-toggle" style="margin-left:auto;"><input type="checkbox" class="hide-elim"> Hide eliminated</label></div>';
    html += renderStimulus(q.stimulus);
    html += '<fieldset class="q-fieldset"><legend class="q-legend">' + esc(q.stem) + "</legend>";
    html += answersHTML(q, name, order);
    html += "</fieldset>";
    html += '<div class="q-actions"><div class="left">' +
      '<button class="btn btn-outline prev-btn"' + (this.i === 0 ? " disabled" : "") + '>&larr; Previous</button></div>' +
      "<div>" +
      (this.i + 1 >= this.questions.length
        ? '<button class="btn btn-primary finish-btn">Finish &amp; submit</button>'
        : '<button class="btn btn-primary next-btn">Next &rarr;</button>') +
      "</div></div>";
    html += "</div>";
    this.container.innerHTML = html;
    this.wire();
  };
  ExamSession.prototype.wire = function () {
    var self = this, card = this.container.querySelector(".question-card");
    var answers = card.querySelector(".answers");
    // restore prior answer / eliminations
    var prior = this.answers[this.i];
    var elim = this.eliminated[this.i] || {};
    card.querySelectorAll(".answer").forEach(function (row) {
      var ci = Number(row.dataset.choice);
      var radio = row.querySelector('input[type="radio"]');
      if (prior === ci) { radio.checked = true; row.classList.add("selected"); }
      if (elim[ci]) { row.classList.add("eliminated"); row.querySelector(".eye").setAttribute("aria-pressed", "true"); }
      radio.addEventListener("change", function () {
        self.answers[self.i] = ci;
        card.querySelectorAll(".answer").forEach(function (r) { r.classList.remove("selected"); });
        row.classList.add("selected");
        self.emit();
      });
      row.querySelector(".eye").addEventListener("click", function (e) {
        e.preventDefault(); e.stopPropagation();
        self.eliminated[self.i] = self.eliminated[self.i] || {};
        if (self.eliminated[self.i][ci]) { delete self.eliminated[self.i][ci]; row.classList.remove("eliminated"); this.setAttribute("aria-pressed", "false"); }
        else { self.eliminated[self.i][ci] = true; row.classList.add("eliminated"); this.setAttribute("aria-pressed", "true"); }
      });
    });
    var hideElim = card.querySelector(".hide-elim");
    hideElim.addEventListener("change", function () { answers.classList.toggle("hide-eliminated", hideElim.checked); });
    var prev = card.querySelector(".prev-btn"); if (prev) prev.addEventListener("click", function () { self.goto(self.i - 1); });
    var next = card.querySelector(".next-btn"); if (next) next.addEventListener("click", function () { self.goto(self.i + 1); });
    var fin = card.querySelector(".finish-btn"); if (fin) fin.addEventListener("click", function () { self.confirmFinish(); });
  };
  ExamSession.prototype.goto = function (i) {
    if (i < 0 || i >= this.questions.length) return;
    this.i = i; this.render(); this.emit();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  ExamSession.prototype.confirmFinish = function () {
    var unanswered = this.questions.length - Object.keys(this.answers).length;
    if (unanswered > 0) {
      if (!window.confirm(unanswered + " question(s) are unanswered. Submit anyway?")) return;
    }
    this.finish();
  };
  ExamSession.prototype.finish = function () {
    if (this.finished) return;
    this.finished = true;
    if (this._t) clearInterval(this._t);
    // score + record every attempt
    var byTopic = {}, byPractice = {}, missed = [], correct = 0;
    var self = this;
    this.questions.forEach(function (q, idx) {
      var chosen = self.answers[idx];
      var isCorrect = chosen != null && q.choices[chosen] && q.choices[chosen].correct === true;
      if (isCorrect) correct += 1; else missed.push({ q: q, chosen: chosen });
      byTopic[q.topic] = byTopic[q.topic] || { c: 0, n: 0 };
      byTopic[q.topic].n += 1; if (isCorrect) byTopic[q.topic].c += 1;
      var pr = "P" + (q.practice || 1);
      byPractice[pr] = byPractice[pr] || { c: 0, n: 0 };
      byPractice[pr].n += 1; if (isCorrect) byPractice[pr].c += 1;
      if (window.Progress && chosen != null) window.Progress.recordAttempt(q, isCorrect);
    });
    var result = {
      total: this.questions.length, correct: correct,
      byTopic: byTopic, byPractice: byPractice, missed: missed
    };
    if (this.opts.onFinish) this.opts.onFinish(result);
  };

  // Static explanation renderer for a single question (used by review screens)
  function reviewCardHTML(q, chosen) {
    var ci = correctIndex(q);
    var meta = window.APSYCH.topicMeta(q.topic) || {};
    var order = q.choices.map(function (_, i) { return i; });
    var rows = order.map(function (cIdx, pos) {
      var c = q.choices[cIdx];
      var cls = "answer locked";
      var ic = "";
      if (cIdx === ci) { cls += " is-correct"; ic = "✓"; }
      else if (cIdx === chosen) { cls += " is-incorrect"; ic = "✗"; }
      return '<div class="' + cls + '"><label class="hit"><span class="badge">' + LETTERS[pos] + "</span>" +
        '<span class="atext">' + esc(c.text) + '</span><span class="result-ic">' + ic + "</span></label></div>";
    }).join("");
    return '<div class="question-card"><div class="q-meta"><span class="chip">Topic ' + q.topic + " · " + esc(meta.title) + "</span>" +
      '<span class="chip ' + diffClass(q.difficulty) + '">' + esc(q.difficulty) + "</span></div>" +
      (q.stimulus ? renderStimulus(q.stimulus) : "") +
      '<p class="q-legend">' + esc(q.stem) + "</p>" +
      '<div class="answers locked">' + rows + "</div>" +
      '<div class="explanation show" style="border-top:1px solid var(--border);margin-top:1rem;padding-top:1rem;">' +
      '<div class="exp-line good">' + esc(q.choices[ci].why) + "</div>" +
      '<p class="exp-key"><span class="k-label">Key concept:</span> ' + esc(q.keyConcept || "") + "</p></div></div>";
  }

  window.Quiz = {
    topicQuestions: topicQuestions,
    unitQuestions: unitQuestions,
    allQuestions: allQuestions,
    filter: filter,
    shuffle: shuffle,
    renderStimulus: renderStimulus,
    PracticeSession: PracticeSession,
    ExamSession: ExamSession,
    reviewCardHTML: reviewCardHTML,
    correctIndex: correctIndex
  };
  window.APSYCH.Quiz = window.Quiz;
})();
