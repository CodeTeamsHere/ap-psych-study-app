/*
 * course.js — Single source of truth for the AP Psychology course structure.
 * Based on the current College Board Course and Exam Description (CED),
 * effective Fall 2024 (first exam May 2025): 5 units, 35 topics, 4 Science Practices.
 * Loaded on every page via <script>. No network calls — pure static data.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.notes = window.APSYCH.notes || {};
window.APSYCH.questions = window.APSYCH.questions || {};
window.APSYCH.frq = window.APSYCH.frq || {};

window.APSYCH.course = {
  title: "AP Psychology",
  // Exam date is set annually by College Board — confirm on their site.
  examDate: "2026-05-12", // Tuesday, May 12, 2026
  examDateLabel: "Tuesday, May 12, 2026",
  unitWeight: "15–25%", // College Board publishes only this band per unit.

  units: [
    {
      n: 1,
      title: "Biological Bases of Behavior",
      slug: "unit-1",
      periods: "17–23",
      blurb: "How genes, the nervous system, the neuron, the brain, sleep, and sensation give rise to behavior and mental processes.",
      topics: [
        { code: "1.1", title: "Interaction of Heredity and Environment" },
        { code: "1.2", title: "Overview of the Nervous System" },
        { code: "1.3", title: "The Neuron and Neural Firing" },
        { code: "1.4", title: "The Brain" },
        { code: "1.5", title: "Sleep" },
        { code: "1.6", title: "Sensation" }
      ]
    },
    {
      n: 2,
      title: "Cognition",
      slug: "unit-2",
      periods: "17–23",
      blurb: "Perception, thinking and decision-making, the memory system end to end, and intelligence.",
      topics: [
        { code: "2.1", title: "Perception" },
        { code: "2.2", title: "Thinking, Problem-Solving, Judgments, and Decision-Making" },
        { code: "2.3", title: "Introduction to Memory" },
        { code: "2.4", title: "Encoding Memories" },
        { code: "2.5", title: "Storing Memories" },
        { code: "2.6", title: "Retrieving Memories" },
        { code: "2.7", title: "Forgetting and Other Memory Challenges" },
        { code: "2.8", title: "Intelligence and Achievement" }
      ]
    },
    {
      n: 3,
      title: "Development and Learning",
      slug: "unit-3",
      periods: "17–23",
      blurb: "Development across the lifespan and the major theories of learning: classical, operant, and observational.",
      topics: [
        { code: "3.1", title: "Themes and Methods in Developmental Psychology" },
        { code: "3.2", title: "Physical Development Across the Lifespan" },
        { code: "3.3", title: "Gender and Sexual Orientation" },
        { code: "3.4", title: "Cognitive Development Across the Lifespan" },
        { code: "3.5", title: "Communication and Language Development" },
        { code: "3.6", title: "Social-Emotional Development Across the Lifespan" },
        { code: "3.7", title: "Classical Conditioning" },
        { code: "3.8", title: "Operant Conditioning" },
        { code: "3.9", title: "Social, Cognitive, and Neurological Factors in Learning" }
      ]
    },
    {
      n: 4,
      title: "Social Psychology and Personality",
      slug: "unit-4",
      periods: "17–23",
      blurb: "How situations and other people shape behavior, and the major theories of personality, motivation, and emotion.",
      topics: [
        { code: "4.1", title: "Attribution Theory and Person Perception" },
        { code: "4.2", title: "Attitude Formation and Attitude Change" },
        { code: "4.3", title: "Psychology of Social Situations" },
        { code: "4.4", title: "Psychodynamic and Humanistic Theories of Personality" },
        { code: "4.5", title: "Social-Cognitive and Trait Theories of Personality" },
        { code: "4.6", title: "Motivation" },
        { code: "4.7", title: "Emotion" }
      ]
    },
    {
      n: 5,
      title: "Mental and Physical Health",
      slug: "unit-5",
      periods: "17–23",
      blurb: "Health and positive psychology, and the explanation, classification, and treatment of psychological disorders.",
      topics: [
        { code: "5.1", title: "Introduction to Health Psychology" },
        { code: "5.2", title: "Positive Psychology" },
        { code: "5.3", title: "Explaining and Classifying Psychological Disorders" },
        { code: "5.4", title: "Selection of Categories of Psychological Disorders" },
        { code: "5.5", title: "Treatment of Psychological Disorders" }
      ]
    }
  ],

  practices: [
    {
      n: 1,
      name: "Concept Application",
      short: "Apply concepts to a scenario",
      pct: "≈65%",
      items: "~49 of 75 MCQs",
      desc: "Apply psychological perspectives, theories, concepts, and research findings to a scenario."
    },
    {
      n: 2,
      name: "Research Methods and Design",
      short: "Evaluate research",
      pct: "≈25%",
      items: "~18 of 75 MCQs",
      desc: "Evaluate qualitative and quantitative research methods and study designs."
    },
    {
      n: 3,
      name: "Data Interpretation",
      short: "Read data & statistics",
      pct: "≈10%",
      items: "7–8 of 75 MCQs",
      desc: "Evaluate representations of psychological concepts (tables, graphs, charts, figures). Calculate/interpret mean, median, mode, range, standard deviation, percentile rank, the normal curve, and the correlation coefficient."
    },
    {
      n: 4,
      name: "Argumentation",
      short: "Build an evidence-based argument",
      pct: "FRQ only",
      items: "Not on the MCQ section",
      desc: "Develop and justify psychological arguments using evidence. Assessed only on the free-response section."
    }
  ]
};

// Convenience lookups
window.APSYCH.allTopics = function () {
  var out = [];
  window.APSYCH.course.units.forEach(function (u) {
    u.topics.forEach(function (t) {
      out.push({ code: t.code, title: t.title, unit: u.n });
    });
  });
  return out;
};

window.APSYCH.unitByNumber = function (n) {
  return window.APSYCH.course.units.filter(function (u) { return u.n === Number(n); })[0];
};

window.APSYCH.topicMeta = function (code) {
  var found = null;
  window.APSYCH.course.units.forEach(function (u) {
    u.topics.forEach(function (t) {
      if (t.code === code) found = { code: t.code, title: t.title, unit: u.n };
    });
  });
  return found;
};
