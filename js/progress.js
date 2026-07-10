/*
 * progress.js — The data model. Reads/writes all learner progress to localStorage.
 * Owns: per-question history, per-topic rolling accuracy + mastery level,
 * unit/course roll-ups, XP, daily streak (+ streak-freeze), and badge awards.
 * No network. Dispatches window event "apsych:progress-updated" after every save.
 */
(function () {
  "use strict";
  var KEY = "apsych:progress:v1";
  var RECENT_CAP = 20;          // rolling window size for topic accuracy/level
  var MAX_FREEZES = 3;
  var XP_CORRECT = 10, XP_WRONG = 3;
  var DIFF_BONUS = { Easy: 0, Moderate: 5, Difficult: 10 };

  function localDateStr(d) {
    d = d || new Date();
    var m = String(d.getMonth() + 1).padStart(2, "0");
    var day = String(d.getDate()).padStart(2, "0");
    return d.getFullYear() + "-" + m + "-" + day;
  }
  function dayDiff(aStr, bStr) {
    // whole-day difference between two YYYY-MM-DD strings (a - b)
    var a = new Date(aStr + "T00:00:00");
    var b = new Date(bStr + "T00:00:00");
    return Math.round((a - b) / 86400000);
  }

  function fresh() {
    return {
      v: 1,
      questions: {},   // qid -> { attempts, correct, last:bool, ts }
      topics: {},      // code -> { attempts, correct, recent:[1/0...], level, ts }
      xp: 0,
      correctStreak: 0,
      maxCorrectStreak: 0,
      streak: { count: 0, lastActive: null, freezes: 1, freezeUsedOn: null },
      badges: {},      // id -> ts
      lastTopic: null,
      lastUnit: null,
      sessions: 0,
      createdAt: Date.now(),
      updatedAt: Date.now()
    };
  }

  var state = fresh();
  var storageOk = true;

  function probeStorage() {
    try {
      localStorage.setItem(KEY + ":_probe", "1");
      localStorage.removeItem(KEY + ":_probe");
      storageOk = true;
    } catch (e) {
      storageOk = false; // private mode, disabled storage, or full
    }
    return storageOk;
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        state = Object.assign(fresh(), parsed);
        state.streak = Object.assign(fresh().streak, parsed.streak || {});
      }
    } catch (e) {
      console.warn("Progress: could not parse storage, starting fresh.", e);
      state = fresh();
    }
    return state;
  }

  function save() {
    state.updatedAt = Date.now();
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
      storageOk = true;
    } catch (e) {
      storageOk = false;
      console.warn("Progress: save failed (storage full or blocked).", e);
      try { window.dispatchEvent(new CustomEvent("apsych:storage-blocked")); } catch (_) {}
    }
    try {
      window.dispatchEvent(new CustomEvent("apsych:progress-updated"));
    } catch (e) {}
  }

  // ---- Mastery model -------------------------------------------------------
  var LEVELS = ["New", "Practiced", "Familiar", "Proficient", "Mastered"];
  function levelClass(level) { return "m-" + String(level || "New").toLowerCase(); }

  function computeLevel(t) {
    if (!t || t.attempts === 0) return "New";
    var recent = t.recent || [];
    var n = recent.length;
    if (n < 3) return "Practiced";
    var acc = recent.reduce(function (s, x) { return s + x; }, 0) / n; // rolling accuracy
    // Higher levels require both sustained accuracy AND enough attempts.
    if (n >= 8 && acc >= 0.90) return "Mastered";
    if (n >= 5 && acc >= 0.80) return "Proficient";
    if (acc >= 0.70) return "Familiar";
    return "Practiced"; // demotion path: recent accuracy < 70% drops out of Familiar+
  }

  // Deep-ish clone for plain data
  function clone(o) { return o == null ? o : JSON.parse(JSON.stringify(o)); }

  // Pick the per-question/per-topic record that reflects MORE progress (more attempts; tie -> newer).
  function pickMore(x, y) {
    if (!x) return clone(y);
    if (!y) return clone(x);
    var ax = x.attempts || 0, ay = y.attempts || 0;
    if (ay > ax) return clone(y);
    if (ax > ay) return clone(x);
    return (y.ts || 0) > (x.ts || 0) ? clone(y) : clone(x);
  }

  // Merge two progress states without losing work (used when signing in / pulling from cloud).
  function mergeTwo(a, b) {
    a = a || fresh(); b = b || fresh();
    var out = fresh();
    var keys, k;

    out.questions = {};
    keys = {}; Object.keys(a.questions || {}).forEach(function (k) { keys[k] = 1; });
    Object.keys(b.questions || {}).forEach(function (k) { keys[k] = 1; });
    for (k in keys) out.questions[k] = pickMore((a.questions || {})[k], (b.questions || {})[k]);

    out.topics = {};
    keys = {}; Object.keys(a.topics || {}).forEach(function (k) { keys[k] = 1; });
    Object.keys(b.topics || {}).forEach(function (k) { keys[k] = 1; });
    for (k in keys) {
      var t = pickMore((a.topics || {})[k], (b.topics || {})[k]) || { attempts: 0, correct: 0, recent: [] };
      t.level = computeLevel(t);
      out.topics[k] = t;
    }

    out.xp = Math.max(a.xp || 0, b.xp || 0);
    out.maxCorrectStreak = Math.max(a.maxCorrectStreak || 0, b.maxCorrectStreak || 0);
    out.correctStreak = 0;

    var sa = a.streak || {}, sb = b.streak || {};
    var base = String(sb.lastActive || "") > String(sa.lastActive || "") ? sb : sa;
    out.streak = Object.assign(fresh().streak, base);
    out.streak.count = Math.max(sa.count || 0, sb.count || 0);
    out.streak.freezes = Math.max(sa.freezes || 0, sb.freezes || 0);

    out.badges = {};
    [a.badges || {}, b.badges || {}].forEach(function (bd) {
      Object.keys(bd).forEach(function (id) { out.badges[id] = out.badges[id] ? Math.min(out.badges[id], bd[id]) : bd[id]; });
    });

    var newer = (b.updatedAt || 0) >= (a.updatedAt || 0) ? b : a;
    out.lastTopic = newer.lastTopic || a.lastTopic || b.lastTopic || null;
    out.lastUnit = newer.lastUnit != null ? newer.lastUnit : (a.lastUnit != null ? a.lastUnit : b.lastUnit);
    out.sessions = Math.max(a.sessions || 0, b.sessions || 0);
    out.createdAt = Math.min(a.createdAt || Date.now(), b.createdAt || Date.now());
    out.updatedAt = Date.now();
    return out;
  }

  function rollingAccuracy(code) {
    var t = state.topics[code];
    if (!t || !t.recent || !t.recent.length) return null;
    var sum = t.recent.reduce(function (s, x) { return s + x; }, 0);
    return Math.round((sum / t.recent.length) * 100);
  }

  // ---- Streak --------------------------------------------------------------
  function touchDay() {
    var today = localDateStr();
    var s = state.streak;
    var result = { changed: false, usedFreeze: false, reset: false };
    if (!s.lastActive) {
      s.count = 1; s.lastActive = today; result.changed = true;
    } else {
      var diff = dayDiff(today, s.lastActive);
      if (diff === 0) {
        /* already counted today */
      } else if (diff === 1) {
        s.count += 1; s.lastActive = today; result.changed = true;
      } else if (diff === 2 && s.freezes > 0) {
        s.freezes -= 1; s.freezeUsedOn = today; s.count += 1; s.lastActive = today;
        result.changed = true; result.usedFreeze = true;
      } else {
        s.count = 1; s.lastActive = today; result.changed = true; result.reset = true;
      }
      // Reward a freeze token for every 7 consecutive days (capped)
      if (result.changed && s.count > 0 && s.count % 7 === 0 && s.freezes < MAX_FREEZES) {
        s.freezes += 1;
      }
    }
    return result;
  }

  // ---- Badges --------------------------------------------------------------
  function award(id) {
    if (!state.badges[id]) { state.badges[id] = Date.now(); return id; }
    return null;
  }
  function evaluateBadges() {
    var earned = [];
    var cat = (window.APSYCH && window.APSYCH.badgeCatalog) || [];
    cat.forEach(function (b) {
      if (state.badges[b.id]) return;
      try {
        if (b.test(API, state)) { if (award(b.id)) earned.push(b); }
      } catch (e) {}
    });
    return earned;
  }

  // ---- Public API ----------------------------------------------------------
  var API = {
    load: load,
    save: save,
    LEVELS: LEVELS,
    levelClass: levelClass,

    raw: function () { return state; },
    storageOk: function () { return storageOk; },
    lastUpdated: function () { return state.updatedAt; },

    recordAttempt: function (q, isCorrect) {
      isCorrect = !!isCorrect;
      var qid = q.id, code = q.topic, unit = q.unit;
      var levelBefore = API.topicLevel(code);

      var qs = state.questions[qid] || { attempts: 0, correct: 0, last: false, ts: 0 };
      qs.attempts += 1; qs.correct += isCorrect ? 1 : 0; qs.last = isCorrect; qs.ts = Date.now();
      state.questions[qid] = qs;

      var t = state.topics[code] || { attempts: 0, correct: 0, recent: [], level: "New", ts: 0 };
      t.attempts += 1; t.correct += isCorrect ? 1 : 0;
      t.recent.push(isCorrect ? 1 : 0);
      if (t.recent.length > RECENT_CAP) t.recent = t.recent.slice(-RECENT_CAP);
      t.ts = Date.now();
      t.level = computeLevel(t);
      state.topics[code] = t;

      // XP
      var gained = isCorrect ? (XP_CORRECT + (DIFF_BONUS[q.difficulty] || 0)) : XP_WRONG;
      state.xp += gained;

      // correct-in-a-row
      state.correctStreak = isCorrect ? state.correctStreak + 1 : 0;
      if (state.correctStreak > state.maxCorrectStreak) state.maxCorrectStreak = state.correctStreak;

      // daily streak
      var streakRes = touchDay();

      state.lastTopic = code;
      state.lastUnit = unit != null ? unit : (code ? Number(String(code).split(".")[0]) : null);

      var levelAfter = t.level;
      var newBadges = evaluateBadges();

      save();
      return {
        xpGained: gained,
        levelBefore: levelBefore,
        levelAfter: levelAfter,
        levelUp: LEVELS.indexOf(levelAfter) > LEVELS.indexOf(levelBefore),
        levelDown: LEVELS.indexOf(levelAfter) < LEVELS.indexOf(levelBefore),
        topic: code,
        correctStreak: state.correctStreak,
        streak: streakRes,
        newBadges: newBadges
      };
    },

    // record that a study/practice session happened (updates daily streak even w/o answers)
    touchSession: function () {
      var r = touchDay();
      state.sessions += 1;
      var newBadges = evaluateBadges();
      save();
      return { streak: r, newBadges: newBadges };
    },

    setLast: function (unit, topic) {
      if (unit != null) state.lastUnit = Number(unit);
      if (topic != null) state.lastTopic = topic;
      save();
    },

    // ---- reads
    xp: function () { return state.xp; },
    streakCount: function () { return state.streak.count; },
    freezes: function () { return state.streak.freezes; },
    lastTopic: function () { return state.lastTopic; },
    lastUnit: function () { return state.lastUnit; },
    maxCorrectStreak: function () { return state.maxCorrectStreak; },

    topicAccuracy: rollingAccuracy,
    topicLifetimeAccuracy: function (code) {
      var t = state.topics[code];
      if (!t || !t.attempts) return null;
      return Math.round((t.correct / t.attempts) * 100);
    },
    topicAttempts: function (code) { return (state.topics[code] || {}).attempts || 0; },
    topicLevel: function (code) {
      var t = state.topics[code];
      return t ? (t.level || computeLevel(t)) : "New";
    },

    unitAccuracy: function (n) {
      var u = window.APSYCH.unitByNumber(n); if (!u) return null;
      var att = 0, cor = 0;
      u.topics.forEach(function (tp) {
        var t = state.topics[tp.code];
        if (t) { att += t.attempts; cor += t.correct; }
      });
      return att ? Math.round((cor / att) * 100) : null;
    },
    unitAttempts: function (n) {
      var u = window.APSYCH.unitByNumber(n); if (!u) return 0;
      var att = 0;
      u.topics.forEach(function (tp) { att += (state.topics[tp.code] || {}).attempts || 0; });
      return att;
    },
    unitMasteryPct: function (n) {
      var u = window.APSYCH.unitByNumber(n); if (!u) return 0;
      var prof = 0;
      u.topics.forEach(function (tp) {
        var lv = API.topicLevel(tp.code);
        if (lv === "Proficient" || lv === "Mastered") prof += 1;
      });
      return Math.round((prof / u.topics.length) * 100);
    },
    courseMasteryPct: function () {
      var all = window.APSYCH.allTopics(), prof = 0;
      all.forEach(function (tp) {
        var lv = API.topicLevel(tp.code);
        if (lv === "Proficient" || lv === "Mastered") prof += 1;
      });
      return Math.round((prof / all.length) * 100);
    },
    topicsAtOrAbove: function (level) {
      var idx = LEVELS.indexOf(level), all = window.APSYCH.allTopics(), c = 0;
      all.forEach(function (tp) { if (LEVELS.indexOf(API.topicLevel(tp.code)) >= idx) c += 1; });
      return c;
    },
    totalAnswered: function () {
      var n = 0; Object.keys(state.questions).forEach(function (k) { n += state.questions[k].attempts; });
      return n;
    },
    totalCorrect: function () {
      var n = 0; Object.keys(state.questions).forEach(function (k) { n += state.questions[k].correct; });
      return n;
    },

    // question status helpers (for filtering practice sets)
    questionStatus: function (qid) {
      var q = state.questions[qid];
      if (!q) return "unseen";
      return q.last ? "correct" : "missed";
    },
    isMissed: function (qid) { return API.questionStatus(qid) === "missed"; },
    missedQuestionIds: function () {
      return Object.keys(state.questions).filter(function (k) { return !state.questions[k].last; });
    },

    badges: function () { return state.badges; },
    hasBadge: function (id) { return !!state.badges[id]; },

    // ---- import/export (used by export.js)
    exportState: function () { return JSON.parse(JSON.stringify(state)); },
    importState: function (obj) {
      if (!obj || typeof obj !== "object") throw new Error("Invalid progress file.");
      state = Object.assign(fresh(), obj);
      state.streak = Object.assign(fresh().streak, obj.streak || {});
      save();
    },
    // Merge an incoming (e.g. cloud) state into the current one without losing progress.
    mergeState: function (remote) {
      state = mergeTwo(state, remote);
      save();
      return clone(state);
    },
    reset: function () { state = fresh(); save(); }
  };

  load();
  probeStorage();

  // Cross-tab sync: if progress changes in another tab/window, reload and refresh UI.
  try {
    window.addEventListener("storage", function (e) {
      if (e.key === KEY) {
        load();
        try { window.dispatchEvent(new CustomEvent("apsych:progress-updated")); } catch (_) {}
      }
    });
  } catch (e) {}

  window.Progress = API;
  window.APSYCH = window.APSYCH || {};
  window.APSYCH.Progress = API;
})();
