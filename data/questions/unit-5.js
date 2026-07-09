/*
 * data/questions/unit-5.js — Original practice questions for Unit 5: Mental and Physical Health.
 * Schema per question:
 *   { id, topic, unit, practice(1-3), difficulty('Easy'|'Moderate'|'Difficult'),
 *     stem, stimulus(null | table/bars/scatter),
 *     choices:[{text, correct?:true, why}]  // exactly one correct; every choice has a 'why',
 *     keyConcept }
 * Disorders are described as academic classifications, respectfully and non-diagnostically.
 * All questions are original, written for this site (not copied from any question bank).
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.questions = window.APSYCH.questions || {};

window.APSYCH.questions["5.1"] = [
  {
    id: "5.1-1", topic: "5.1", unit: 5, practice: 1, difficulty: "Easy",
    stem: "A physician treating a patient's chronic headaches considers the patient's genetics, ongoing stress, sleep habits, and support at home. This integrated approach best reflects the",
    stimulus: null,
    choices: [
      { text: "biopsychosocial model.", correct: true, why: "Weighing biological, psychological, and social factors together is exactly the biopsychosocial approach at the heart of health psychology." },
      { text: "medical model applied narrowly to biology alone.", why: "Considering stress, habits, and home support goes beyond biology, so this is broader than a biology-only medical model." },
      { text: "psychoanalytic model of unconscious conflict.", why: "Nothing here involves interpreting unconscious conflicts; the focus is multiple interacting health factors." },
      { text: "behavioral model of conditioned responses.", why: "The scenario is not about conditioning or learned behavior but about integrating several categories of influence." }
    ],
    keyConcept: "Biopsychosocial model in health psychology"
  },
  {
    id: "5.1-2", topic: "5.1", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "According to Selye's general adaptation syndrome, the body's very first reaction to a sudden stressor — a surge of sympathetic arousal — occurs during the",
    stimulus: null,
    choices: [
      { text: "resistance stage.", why: "Resistance is the sustained middle phase, not the initial surge of arousal." },
      { text: "alarm reaction stage.", correct: true, why: "The alarm reaction is the immediate 'first shock' of sympathetic arousal when a stressor appears." },
      { text: "exhaustion stage.", why: "Exhaustion is the final phase of depleted reserves, the opposite of an initial surge." },
      { text: "appraisal stage.", why: "Appraisal is Lazarus's concept, not one of Selye's three GAS stages." }
    ],
    keyConcept: "GAS alarm reaction"
  },
  {
    id: "5.1-3", topic: "5.1", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "After caring for an ill relative for many months without rest, Mr. Lee finds his energy reserves depleted and catches every illness going around. In Selye's GAS this best fits the",
    stimulus: null,
    choices: [
      { text: "alarm reaction stage.", why: "Alarm is the brief initial surge, not the long-term depletion described here." },
      { text: "resistance stage.", why: "In resistance the body is still coping with mobilized resources, not yet depleted and vulnerable." },
      { text: "exhaustion stage.", correct: true, why: "Prolonged stress that drains reserves and raises vulnerability to illness is the exhaustion stage." },
      { text: "tend-and-befriend response.", why: "Tend-and-befriend is a way of responding socially to stress, not a stage of physical depletion." }
    ],
    keyConcept: "GAS exhaustion stage"
  },
  {
    id: "5.1-4", topic: "5.1", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Weeks into a demanding project, Priya is still coping and functioning, but her stress hormones remain elevated and she feels persistently 'on edge.' This ongoing mobilization best matches which GAS stage?",
    stimulus: null,
    choices: [
      { text: "Exhaustion, because her resources are fully depleted.", why: "She is still functioning and coping, so her resources are not yet fully depleted." },
      { text: "Alarm, because she is experiencing the first shock of a stressor.", why: "The stressor began weeks ago; this is no longer the initial alarm surge." },
      { text: "Appraisal, because she is deciding whether the project is threatening.", why: "Appraisal is not one of Selye's stages, and the scenario describes sustained arousal, not initial evaluation." },
      { text: "Resistance, because her body stays mobilized to cope over time.", correct: true, why: "The resistance stage is the prolonged middle phase of continued coping with stress hormones still high." }
    ],
    keyConcept: "GAS resistance stage"
  },
  {
    id: "5.1-5", topic: "5.1", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "After a frightening event, Maria copes by calling close friends and caring for her younger siblings rather than fighting or fleeing. Her response is best described as",
    stimulus: null,
    choices: [
      { text: "tend-and-befriend.", correct: true, why: "Seeking social support and nurturing others under stress is precisely the tend-and-befriend response." },
      { text: "the fight-or-flight response.", why: "Fight-or-flight involves confronting or escaping the threat, not nurturing and bonding." },
      { text: "the alarm reaction of the GAS.", why: "Alarm names the body's initial physiological surge, not the social coping strategy described." },
      { text: "learned helplessness.", why: "Learned helplessness is passive giving up after uncontrollable stress, not actively reaching out to others." }
    ],
    keyConcept: "Tend-and-befriend response"
  },
  {
    id: "5.1-6", topic: "5.1", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A commuter feels worn down over time not by any single disaster but by the pile-up of a long drive, a slow computer, and small daily disagreements. These stressors are best categorized as",
    stimulus: null,
    choices: [
      { text: "catastrophes.", why: "Catastrophes are large, unpredictable events like natural disasters, not everyday irritations." },
      { text: "daily hassles.", correct: true, why: "The accumulation of small, repeated everyday annoyances is the definition of daily hassles." },
      { text: "significant life changes.", why: "Life changes are major transitions (a move, a loss); the scenario describes minor recurring irritations." },
      { text: "eustress.", why: "Eustress is positive, motivating stress, but these draining hassles are experienced negatively." }
    ],
    keyConcept: "Types of stressors: daily hassles"
  },
  {
    id: "5.1-7", topic: "5.1", unit: 5, practice: 1, difficulty: "Easy",
    stem: "An athlete feels energized, focused, and motivated while training hard for a challenging but exciting competition. This positive form of stress is called",
    stimulus: null,
    choices: [
      { text: "distress.", why: "Distress is negative, harmful stress; the athlete's experience is energizing and positive." },
      { text: "the exhaustion stage.", why: "Exhaustion is depletion from prolonged stress, the opposite of feeling energized." },
      { text: "eustress.", correct: true, why: "Eustress is positive, motivating stress that can enhance focus and performance." },
      { text: "burnout.", why: "Burnout is chronic exhaustion from prolonged stress, not the motivating state described." }
    ],
    keyConcept: "Eustress vs. distress"
  },
  {
    id: "5.1-8", topic: "5.1", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Overwhelmed by a heavy course load, Devin builds a detailed study schedule and meets his professor to drop an optional assignment. His approach is best described as",
    stimulus: null,
    choices: [
      { text: "emotion-focused coping.", why: "Emotion-focused coping manages feelings; Devin is changing the situation itself, not just his emotions." },
      { text: "an alarm reaction.", why: "An alarm reaction is an automatic physiological surge, not a deliberate planning strategy." },
      { text: "avoidance through denial.", why: "He is actively confronting and reorganizing the workload, which is the opposite of avoidance or denial." },
      { text: "problem-focused coping.", correct: true, why: "Directly changing or reducing the stressor (the workload) is problem-focused coping." }
    ],
    keyConcept: "Problem-focused vs. emotion-focused coping"
  },
  {
    id: "5.1-9", topic: "5.1", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants a valid, direct measure of participants' physiological stress response during a timed task. Which measure is most appropriate?",
    stimulus: null,
    choices: [
      { text: "Heart rate, blood pressure, and stress-hormone (cortisol) levels.", correct: true, why: "These are direct physiological indicators of the body's stress response, making them valid operational measures." },
      { text: "Participants' self-reported life satisfaction from last year.", why: "A retrospective satisfaction rating does not directly index physiological arousal during the task." },
      { text: "The participants' height and weight.", why: "Body size is unrelated to the momentary physiological stress response being studied." },
      { text: "The number of vocabulary words participants can define.", why: "Vocabulary measures knowledge, not physiological stress arousal." }
    ],
    keyConcept: "Operationalizing the physiological stress response"
  },
  {
    id: "5.1-10", topic: "5.1", unit: 5, practice: 2, difficulty: "Difficult",
    stem: "A survey finds a positive correlation between the number of daily hassles people report and how often they get headaches. A student concludes that hassles cause headaches. The best critique is that",
    stimulus: null,
    choices: [
      { text: "the correlation must be negative if headaches are unpleasant.", why: "The sign of a correlation reflects the direction of the relationship, not whether the outcome is pleasant; this misunderstands correlation." },
      { text: "a correlation cannot establish causation, and a third variable such as poor sleep could drive both.", correct: true, why: "Correlational data cannot rule out reverse causation or confounds like sleep that affect both hassles and headaches." },
      { text: "correlations between psychological variables are impossible to measure.", why: "Such correlations are routinely measured; the real issue is that correlation does not prove causation." },
      { text: "the study proves headaches cause daily hassles instead.", why: "The direction of causation is exactly what a correlation cannot establish, so this reversal is just as unsupported." }
    ],
    keyConcept: "Correlation is not causation (stress and illness)"
  },
  {
    id: "5.1-11", topic: "5.1", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "To test whether a new stress-management program actually lowers blood pressure, which design best supports a causal conclusion?",
    stimulus: null,
    choices: [
      { text: "A case study following one participant through the program.", why: "A single case cannot isolate the program's effect or generalize, so it cannot establish causation." },
      { text: "A survey asking people whether they feel less stressed.", why: "A survey measures self-reported feelings without a controlled comparison, so it cannot show the program caused the change." },
      { text: "A randomized experiment comparing a program group to a no-program control group.", correct: true, why: "Random assignment plus a control group isolates the program as the cause of any blood-pressure difference." },
      { text: "Naturalistic observation of people at a gym.", why: "Observation without manipulation or a control condition cannot establish that the program caused an effect." }
    ],
    keyConcept: "Experimental design for causal claims about stress"
  },
  {
    id: "5.1-12", topic: "5.1", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "The scatterplot shows each participant's reported stress score and their number of illness episodes over the past year. Which conclusion is best supported?",
    stimulus: {
      type: "scatter",
      caption: "Reported stress score vs. illness episodes in the past year",
      points: [[8, 1], [12, 2], [15, 1], [20, 3], [24, 3], [28, 4], [32, 5], [36, 5], [41, 7]],
      xLabel: "Reported stress (0–50)",
      yLabel: "Illness episodes (past year)",
      alt: "Points rise from lower left to upper right, showing higher stress paired with more illness episodes."
    },
    choices: [
      { text: "Higher reported stress tends to be associated with more illness episodes.", correct: true, why: "The points rise from lower-left to upper-right, showing a positive association between stress and illness." },
      { text: "Higher stress is associated with fewer illness episodes.", why: "That would require a downward pattern, but the points trend upward." },
      { text: "Stress and illness are completely unrelated.", why: "A clear upward trend indicates a relationship, so 'unrelated' is not supported." },
      { text: "The data prove that stress directly causes illness.", why: "A scatterplot shows correlation, not causation; confounds could explain the link." }
    ],
    keyConcept: "Interpreting a scatterplot of stress and illness"
  },
  {
    id: "5.1-13", topic: "5.1", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "In a study, healthy volunteers were exposed to a cold virus under controlled conditions. The bar graph shows the percentage who developed a cold, grouped by chronic-stress level. Which statement is best supported?",
    stimulus: {
      type: "bars",
      caption: "Percentage who developed a cold after controlled virus exposure, by chronic-stress level",
      categories: ["Low stress", "Moderate stress", "High stress"],
      values: [27, 39, 47],
      yLabel: "% who developed a cold",
      max: 100
    },
    choices: [
      { text: "Chronic-stress level had no effect on who caught a cold.", why: "The percentages differ across groups (27 to 47), so 'no effect' is not supported." },
      { text: "Higher chronic stress was associated with a greater likelihood of developing a cold.", correct: true, why: "The percentage rises from the low-stress to the high-stress group, indicating a positive association with catching a cold." },
      { text: "Everyone exposed to the virus developed a cold.", why: "Even in the high-stress group only 47% developed a cold, so not everyone did." },
      { text: "Low-stress participants were the most likely to get sick.", why: "The low-stress group had the lowest rate (27%), not the highest." }
    ],
    keyConcept: "Reading a bar graph of stress and immune outcomes"
  }
];

window.APSYCH.questions["5.2"] = [
  {
    id: "5.2-1", topic: "5.2", unit: 5, practice: 1, difficulty: "Easy",
    stem: "Positive psychology is best defined as the scientific study of",
    stimulus: null,
    choices: [
      { text: "human strengths, well-being, and the conditions that help people flourish.", correct: true, why: "Positive psychology focuses on strengths and flourishing, complementing the traditional focus on disorder." },
      { text: "the unconscious conflicts that drive maladaptive behavior.", why: "That is the psychodynamic focus, not positive psychology's emphasis on strengths." },
      { text: "how mental disorders are classified and diagnosed.", why: "Classification of disorders belongs to psychopathology, not positive psychology." },
      { text: "how neurons transmit signals across synapses.", why: "That is biological psychology, unrelated to the study of well-being and strengths." }
    ],
    keyConcept: "Definition of positive psychology"
  },
  {
    id: "5.2-2", topic: "5.2", unit: 5, practice: 1, difficulty: "Easy",
    stem: "Which psychologist is most associated with founding the modern positive psychology movement?",
    stimulus: null,
    choices: [
      { text: "Sigmund Freud.", why: "Freud founded psychoanalysis, focused on unconscious conflict, not positive psychology." },
      { text: "Martin Seligman.", correct: true, why: "Seligman championed positive psychology, redirecting attention toward strengths and well-being." },
      { text: "B. F. Skinner.", why: "Skinner is known for operant conditioning and behaviorism, not positive psychology." },
      { text: "Hans Selye.", why: "Selye developed the general adaptation syndrome of stress, not positive psychology." }
    ],
    keyConcept: "Seligman and positive psychology"
  },
  {
    id: "5.2-3", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A researcher measures how satisfied people feel with their lives and whether their positive emotions outweigh their negative ones. She is assessing",
    stimulus: null,
    choices: [
      { text: "the general adaptation syndrome.", why: "GAS describes the body's stress stages, not a person's overall life evaluation." },
      { text: "learned helplessness.", why: "Learned helplessness is passivity after uncontrollable stress, not a measure of well-being." },
      { text: "subjective well-being.", correct: true, why: "Subjective well-being combines life satisfaction with a favorable balance of positive over negative feelings." },
      { text: "sensory adaptation.", why: "Sensory adaptation is reduced sensitivity to a constant stimulus, unrelated to well-being." }
    ],
    keyConcept: "Subjective well-being"
  },
  {
    id: "5.2-4", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A rock climber becomes so absorbed in a challenging route that matches her skill that she loses track of time and self-consciousness. This state is called",
    stimulus: null,
    choices: [
      { text: "distress.", why: "Distress is negative, harmful stress; she is deeply and positively absorbed, not distressed." },
      { text: "resistance.", why: "Resistance is a GAS stress stage, not the state of energized absorption described." },
      { text: "unconditional positive regard.", why: "That is a therapy attitude from Rogers, not a state of task absorption." },
      { text: "flow.", correct: true, why: "Flow, from Csikszentmihalyi, is deep, energized absorption when a challenging task matches one's skills." }
    ],
    keyConcept: "Flow (Csikszentmihalyi)"
  },
  {
    id: "5.2-5", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A counselor helps a student identify her most characteristic virtues — such as curiosity and kindness — and find new ways to use them daily. The counselor is drawing on the concept of",
    stimulus: null,
    choices: [
      { text: "signature strengths.", correct: true, why: "Signature strengths are a person's most characteristic virtues that, when used, promote engagement and well-being." },
      { text: "positive symptoms.", why: "Positive symptoms refer to added experiences in schizophrenia, an entirely different concept." },
      { text: "defense mechanisms.", why: "Defense mechanisms are psychodynamic strategies against anxiety, not character strengths." },
      { text: "the diathesis-stress model.", why: "That model explains how disorders arise, not how to identify personal strengths." }
    ],
    keyConcept: "Signature strengths and virtues"
  },
  {
    id: "5.2-6", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Each night a man writes down three things he appreciated that day, and over weeks he reports feeling happier. This practice targets which positive-psychology concept?",
    stimulus: null,
    choices: [
      { text: "Catharsis.", why: "Catharsis is emotional release of pent-up feelings, not appreciation of the good in one's life." },
      { text: "Gratitude.", correct: true, why: "Deliberately noting what one appreciates is a gratitude practice studied for its well-being benefits." },
      { text: "Transference.", why: "Transference is redirecting emotions onto a therapist, unrelated to a gratitude journal." },
      { text: "Habituation.", why: "Habituation is decreased responding to a repeated stimulus, not cultivating appreciation." }
    ],
    keyConcept: "Gratitude and well-being"
  },
  {
    id: "5.2-7", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "After losing her job, a woman experiences a difficult few weeks but adapts, finds new routines, and returns to her usual level of functioning. This ability to bounce back is called",
    stimulus: null,
    choices: [
      { text: "posttraumatic stress.", why: "Posttraumatic stress refers to lasting distress after trauma, not successful recovery to baseline." },
      { text: "learned helplessness.", why: "Learned helplessness is giving up after uncontrollable stress, the opposite of bouncing back." },
      { text: "resilience.", correct: true, why: "Resilience is the capacity to adapt to and recover from adversity, returning to normal functioning." },
      { text: "exhaustion.", why: "Exhaustion is the depleted final GAS stage, not the successful recovery described." }
    ],
    keyConcept: "Resilience"
  },
  {
    id: "5.2-8", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Following a serious illness, a man reports that he now values relationships more deeply and has reprioritized his goals in ways that feel positive. This experience is best described as",
    stimulus: null,
    choices: [
      { text: "sensory adaptation.", why: "Sensory adaptation is reduced sensitivity to a constant stimulus, unrelated to personal growth after hardship." },
      { text: "the alarm reaction.", why: "The alarm reaction is an immediate physiological stress response, not lasting positive change." },
      { text: "regression to a childlike state.", why: "Regression is a defense mechanism of retreating to earlier behavior, not the positive reprioritization described." },
      { text: "posttraumatic growth.", correct: true, why: "Posttraumatic growth is positive psychological change that some people report after struggling with adversity." }
    ],
    keyConcept: "Posttraumatic growth vs. resilience"
  },
  {
    id: "5.2-9", topic: "5.2", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Compared with much of traditional 20th-century psychology, positive psychology is distinctive because it primarily investigates",
    stimulus: null,
    choices: [
      { text: "what helps people thrive, rather than only what goes wrong.", correct: true, why: "Positive psychology adds the study of strengths and flourishing to psychology's traditional focus on dysfunction." },
      { text: "only the biological causes of mental illness.", why: "It is not limited to biology or to illness; it studies well-being and strengths broadly." },
      { text: "how to classify disorders more precisely.", why: "Refining diagnostic categories is the work of psychopathology, not positive psychology's aim." },
      { text: "the reflexes controlled by the spinal cord.", why: "Spinal reflexes are a biological-bases topic, unrelated to the study of flourishing." }
    ],
    keyConcept: "Focus of positive psychology"
  },
  {
    id: "5.2-10", topic: "5.2", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "To test whether keeping a gratitude journal increases well-being, a researcher randomly assigns participants to a gratitude-journal group or a neutral-writing group and compares later well-being scores. Random assignment is important mainly because it",
    stimulus: null,
    choices: [
      { text: "guarantees every participant will improve.", why: "Random assignment does not guarantee improvement; it balances groups, not outcomes." },
      { text: "helps ensure the groups are similar at the start, so differences can be attributed to the journaling.", correct: true, why: "Random assignment distributes pre-existing differences evenly, isolating journaling as the likely cause of any difference." },
      { text: "makes the study a naturalistic observation.", why: "Random assignment defines an experiment, the opposite of hands-off naturalistic observation." },
      { text: "removes the need to measure well-being at all.", why: "The outcome must still be measured; random assignment concerns group comparability, not measurement." }
    ],
    keyConcept: "Random assignment in a well-being experiment"
  },
  {
    id: "5.2-11", topic: "5.2", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "A study measures subjective well-being using participants' self-reported ratings. A reasonable limitation of this method is that",
    stimulus: null,
    choices: [
      { text: "self-reports can never be quantified for analysis.", why: "Self-reports are routinely quantified with rating scales, so this is not the limitation." },
      { text: "well-being is a purely physical variable that surveys cannot touch.", why: "Well-being includes subjective judgments that self-reports are actually designed to capture." },
      { text: "responses may be biased by social desirability or momentary mood.", correct: true, why: "Self-reports can be distorted by the wish to look good or by how one happens to feel that day." },
      { text: "self-reports automatically prove causation.", why: "No measurement method proves causation by itself, and this is not a limitation of self-report specifically." }
    ],
    keyConcept: "Limitations of self-report measures"
  },
  {
    id: "5.2-12", topic: "5.2", unit: 5, practice: 2, difficulty: "Difficult",
    stem: "A study reports that people who feel more grateful also tend to report higher life satisfaction. A student concludes that practicing gratitude raises life satisfaction. The strongest objection is that",
    stimulus: null,
    choices: [
      { text: "gratitude and life satisfaction cannot both be measured in one study.", why: "Both can be measured together; that is not the flaw in the reasoning." },
      { text: "the finding is a negative correlation and was misread.", why: "The description is a positive association; mislabeling its direction is not the core problem." },
      { text: "life satisfaction must cause gratitude, never the reverse.", why: "Asserting the reverse direction is just as unwarranted; correlation alone fixes no direction." },
      { text: "this is correlational, so satisfaction could drive gratitude or a third factor could drive both.", correct: true, why: "A correlation cannot establish that gratitude causes satisfaction, since the direction could reverse or a confound could explain both." }
    ],
    keyConcept: "Correlation vs. causation in well-being research"
  },
  {
    id: "5.2-13", topic: "5.2", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "Participants were randomly assigned to one of three three-week writing activities, then rated their well-being (0–10). The bar graph shows the group averages. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Average well-being rating (0–10) after a three-week writing activity",
      categories: ["Gratitude journal", "Neutral events log", "No writing (control)"],
      values: [7.4, 6.1, 5.9],
      yLabel: "Well-being (0–10)",
      max: 10
    },
    choices: [
      { text: "The gratitude-journal group reported the highest average well-being.", correct: true, why: "At 7.4, the gratitude group's average is higher than the neutral log (6.1) and control (5.9) groups." },
      { text: "The control group reported the highest average well-being.", why: "The control group had the lowest average (5.9), not the highest." },
      { text: "All three groups reported identical well-being.", why: "The averages differ (7.4 vs. 6.1 vs. 5.9), so they are not identical." },
      { text: "Writing about neutral events lowered well-being below the control group's.", why: "The neutral-log average (6.1) is slightly above the control (5.9), not below it." }
    ],
    keyConcept: "Interpreting a bar graph of a well-being intervention"
  }
];

window.APSYCH.questions["5.3"] = [
  {
    id: "5.3-1", topic: "5.3", unit: 5, practice: 1, difficulty: "Easy",
    stem: "Psychologists often weigh several criteria before considering a pattern of behavior a psychological disorder. Which set best captures these commonly used criteria?",
    stimulus: null,
    choices: [
      { text: "Intelligence, memory, and reaction time.", why: "These are cognitive abilities, not the criteria used to classify a pattern as disordered." },
      { text: "Dysfunction, distress, and deviation from cultural norms.", correct: true, why: "The 'three D's' — dysfunction, distress, and deviance — are the standard criteria, always judged in context." },
      { text: "Reinforcement, punishment, and extinction.", why: "These are learning concepts from operant conditioning, not criteria for defining disorders." },
      { text: "Sensation, transduction, and perception.", why: "These are sensory-processing terms, unrelated to defining psychological disorders." }
    ],
    keyConcept: "Criteria for defining disorders (the three D's)"
  },
  {
    id: "5.3-2", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Which behavior would most clearly be considered maladaptive?",
    stimulus: null,
    choices: [
      { text: "Feeling briefly nervous before an important interview.", why: "Brief, situational nervousness is common and does not interfere with functioning, so it is adaptive, not maladaptive." },
      { text: "Preferring to spend a quiet weekend alone to recharge.", why: "A preference for solitude is a normal individual difference, not a pattern that impairs functioning." },
      { text: "Washing one's hands so often that the skin is raw and daily routines are disrupted.", correct: true, why: "Behavior that harms the body and disrupts everyday functioning is maladaptive." },
      { text: "Following cultural traditions during a holiday celebration.", why: "Culturally typical behavior is not deviant or impairing, so it is not maladaptive." }
    ],
    keyConcept: "Maladaptive behavior"
  },
  {
    id: "5.3-3", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A clinician explains that a client's depression likely stems from an interaction of genetic vulnerability, negative thinking patterns, and ongoing family conflict. This explanation reflects the",
    stimulus: null,
    choices: [
      { text: "purely biological (medical) model.", why: "Naming thinking patterns and family conflict goes beyond biology alone." },
      { text: "psychoanalytic model exclusively.", why: "The explanation includes genes and social conflict, not just unconscious dynamics." },
      { text: "behavioral model exclusively.", why: "Genetic vulnerability and cognition are not part of a strictly behavioral account." },
      { text: "biopsychosocial model.", correct: true, why: "Integrating biological, psychological, and social factors is exactly the biopsychosocial model." }
    ],
    keyConcept: "Biopsychosocial explanation of disorders"
  },
  {
    id: "5.3-4", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Two people inherit a similar vulnerability to an anxiety disorder. One develops it after a period of severe stress; the other, in a stable and supportive environment, does not. This pattern best illustrates the",
    stimulus: null,
    choices: [
      { text: "diathesis-stress model.", correct: true, why: "A predisposition (diathesis) expressed only when triggered by stress is the diathesis-stress model." },
      { text: "general adaptation syndrome.", why: "GAS describes the body's stress stages, not how a predisposition and stress combine to produce a disorder." },
      { text: "the three D's of abnormality.", why: "The three D's are criteria for defining a disorder, not a model of how one develops." },
      { text: "unconditional positive regard.", why: "That is a humanistic therapy attitude, unrelated to how vulnerability and stress interact." }
    ],
    keyConcept: "Diathesis-stress model"
  },
  {
    id: "5.3-5", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A psychiatrist describes psychological disorders as illnesses with identifiable causes, symptoms, and treatments, much like physical diseases. This viewpoint is the",
    stimulus: null,
    choices: [
      { text: "humanistic model.", why: "The humanistic model emphasizes personal growth and self-actualization, not disorders as diseases." },
      { text: "medical model.", correct: true, why: "The medical model treats disorders as diagnosable illnesses with causes, symptoms, and treatments." },
      { text: "sociocultural model.", why: "The sociocultural model emphasizes social conditions and culture, not a disease framework." },
      { text: "learning model.", why: "The learning model explains disorders as conditioned behaviors, not as medical illnesses." }
    ],
    keyConcept: "The medical model"
  },
  {
    id: "5.3-6", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "The primary purpose of a classification system such as the DSM-5-TR is to",
    stimulus: null,
    choices: [
      { text: "explain the single true cause of every disorder.", why: "The DSM standardizes description and diagnosis; it does not claim one cause per disorder." },
      { text: "provide the specific medication for each diagnosis.", why: "The DSM classifies disorders by criteria; it is not a prescribing guide." },
      { text: "give clinicians shared, standardized criteria so diagnoses are more consistent.", correct: true, why: "Standardized criteria improve the reliability of diagnosis across different clinicians." },
      { text: "rank disorders from least to most severe on one scale.", why: "The manual categorizes disorders by criteria, not by a single severity ranking." }
    ],
    keyConcept: "Purpose of the DSM-5-TR"
  },
  {
    id: "5.3-7", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "An experience regarded as a meaningful spiritual practice in one culture might be viewed as a symptom in another. This observation shows that judgments about psychological disorders",
    stimulus: null,
    choices: [
      { text: "are identical in every culture and era.", why: "The example shows judgments differ across cultures, so they are not identical everywhere." },
      { text: "depend only on brain chemistry.", why: "The point is about cultural interpretation, not solely biology." },
      { text: "are determined entirely by genetics.", why: "Cultural variation in what counts as disordered cannot be explained by genes alone." },
      { text: "can vary across cultures and historical periods.", correct: true, why: "What is considered disordered is shaped by cultural and historical context, so deviance is judged in context." }
    ],
    keyConcept: "Cultural and historical relativity of disorder"
  },
  {
    id: "5.3-8", topic: "5.3", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "After a coworker learns that a colleague once received a psychiatric diagnosis, he begins interpreting the colleague's ordinary quirks as 'symptoms.' This illustrates the harmful effect of",
    stimulus: null,
    choices: [
      { text: "stigma and diagnostic labeling.", correct: true, why: "A label can bias how others interpret normal behavior, which is the essence of stigma." },
      { text: "the diathesis-stress model.", why: "That model concerns how disorders develop, not how a label changes others' perceptions." },
      { text: "sensory adaptation.", why: "Sensory adaptation is reduced sensitivity to a constant stimulus, unrelated to labeling." },
      { text: "reliability of diagnosis.", why: "Reliability refers to consistency of diagnosis, not the biasing social effect of a label." }
    ],
    keyConcept: "Stigma and labeling"
  },
  {
    id: "5.3-9", topic: "5.3", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "Several clinicians independently evaluate the same set of patients and tend to reach the same diagnoses. This consistency across clinicians is evidence of the classification system's",
    stimulus: null,
    choices: [
      { text: "validity, meaning it measures the right underlying cause.", why: "Agreement among raters concerns consistency (reliability), not whether the category captures the true cause (validity)." },
      { text: "reliability, meaning it yields consistent diagnoses.", correct: true, why: "Agreement across independent clinicians is inter-rater reliability — consistency of the diagnostic judgments." },
      { text: "operational definition of stress.", why: "This is about diagnostic consistency, not defining a stress variable." },
      { text: "random assignment.", why: "Random assignment is an experimental procedure, not a measure of diagnostic agreement." }
    ],
    keyConcept: "Reliability of diagnosis (inter-rater agreement)"
  },
  {
    id: "5.3-10", topic: "5.3", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "Researchers ask whether a diagnostic category actually identifies a distinct condition that predicts a person's course and response to treatment. They are examining the category's",
    stimulus: null,
    choices: [
      { text: "test-retest reliability only.", why: "Test-retest reliability is about consistency over time, not whether the category is meaningful and predictive." },
      { text: "sample size.", why: "Sample size affects statistical power, not whether the category captures a real, predictive condition." },
      { text: "validity.", correct: true, why: "Validity asks whether the category truly measures a distinct condition and predicts meaningful outcomes." },
      { text: "placebo effect.", why: "The placebo effect concerns improvement from expectation, not the meaningfulness of a diagnostic category." }
    ],
    keyConcept: "Validity of a diagnostic category"
  },
  {
    id: "5.3-11", topic: "5.3", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "Before standardized manuals, two clinicians often gave the same patient different diagnoses. Providing explicit, shared criteria was expected to improve diagnosis most directly by increasing its",
    stimulus: null,
    choices: [
      { text: "social desirability.", why: "Social desirability is a response bias, not something shared criteria are designed to raise." },
      { text: "sensory threshold.", why: "A sensory threshold is a perception concept, irrelevant to diagnostic agreement." },
      { text: "sample size.", why: "Standardized criteria do not change how many participants are studied." },
      { text: "reliability.", correct: true, why: "Shared, explicit criteria make different clinicians more likely to agree, raising the reliability of diagnosis." }
    ],
    keyConcept: "Standardization improves diagnostic reliability"
  },
  {
    id: "5.3-12", topic: "5.3", unit: 5, practice: 2, difficulty: "Difficult",
    stem: "In a classic demonstration, once individuals had been labeled with a diagnosis in a hospital, staff tended to interpret their normal behaviors (like taking notes) as further symptoms. The best methodological lesson is that",
    stimulus: null,
    choices: [
      { text: "diagnostic labels can bias observers' interpretations of ordinary behavior.", correct: true, why: "The demonstration shows that expectations created by a label can distort how neutral behavior is perceived." },
      { text: "diagnoses are always perfectly objective once assigned.", why: "The whole point is that labels introduced bias, so diagnoses are not purely objective." },
      { text: "note-taking is itself a reliable symptom of disorder.", why: "Note-taking is ordinary behavior; treating it as a symptom is exactly the labeling bias being illustrated." },
      { text: "observer bias is impossible in psychological research.", why: "The demonstration is a vivid example of observer bias, showing it is very possible." }
    ],
    keyConcept: "Labeling effects and observer bias"
  },
  {
    id: "5.3-13", topic: "5.3", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "The table shows approximate lifetime prevalence estimates for several broad disorder categories. Based only on the table, which statement is best supported?",
    stimulus: {
      type: "table",
      caption: "Approximate lifetime prevalence of selected disorder categories",
      headers: ["Disorder category", "Approx. lifetime prevalence"],
      rows: [["Anxiety disorders", "~30%"], ["Depressive disorders", "~20%"], ["Bipolar disorders", "~4%"], ["Schizophrenia spectrum", "~1%"]],
      rowHeaders: true
    },
    choices: [
      { text: "Schizophrenia spectrum disorders are the most common category shown.", why: "At ~1%, the schizophrenia spectrum is the least common category in the table, not the most." },
      { text: "Among the categories listed, anxiety disorders are the most common and schizophrenia the least.", correct: true, why: "Anxiety disorders (~30%) have the highest listed prevalence and the schizophrenia spectrum (~1%) the lowest." },
      { text: "Depressive and bipolar disorders occur at the same rate.", why: "The table lists ~20% for depressive versus ~4% for bipolar, so their rates differ." },
      { text: "The table proves anxiety disorders cause depressive disorders.", why: "Prevalence figures describe how common conditions are; they say nothing about causation." }
    ],
    keyConcept: "Interpreting a prevalence table"
  }
];

window.APSYCH.questions["5.4"] = [
  {
    id: "5.4-1", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "For at least six months, a woman feels tense and worried about many things — money, health, work — with no single focus, and cannot easily control the worry. This pattern best fits",
    stimulus: null,
    choices: [
      { text: "generalized anxiety disorder.", correct: true, why: "Persistent, free-floating worry across many areas is characteristic of generalized anxiety disorder." },
      { text: "a specific phobia.", why: "A specific phobia is an intense fear of one particular object or situation, not diffuse worry about many things." },
      { text: "major depressive disorder.", why: "Depression centers on low mood and loss of interest, not chronic multi-focus worry." },
      { text: "bipolar disorder.", why: "Bipolar disorder requires episodes of mania, which are absent here." }
    ],
    keyConcept: "Generalized anxiety disorder"
  },
  {
    id: "5.4-2", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A man experiences sudden, unexpected episodes of intense fear with a pounding heart, shortness of breath, and a feeling of impending doom that peak within minutes. These recurrent episodes best fit",
    stimulus: null,
    choices: [
      { text: "a specific phobia triggered by a known object.", why: "A phobia is cued by a particular feared object or situation, whereas these attacks arise unexpectedly." },
      { text: "panic disorder.", correct: true, why: "Recurrent, unexpected panic attacks with intense physical symptoms define panic disorder." },
      { text: "obsessive-compulsive disorder.", why: "OCD centers on obsessions and compulsions, not sudden unexpected panic attacks." },
      { text: "persistent depressive disorder.", why: "That is a chronic low-mood condition, not episodes of acute panic." }
    ],
    keyConcept: "Panic disorder vs. phobia"
  },
  {
    id: "5.4-3", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A student is plagued by intrusive, unwanted thoughts that his hands are contaminated and repeatedly washes them in a set ritual to reduce the anxiety. The intrusive thoughts and the repetitive behaviors are best labeled, respectively,",
    stimulus: null,
    choices: [
      { text: "delusions and hallucinations.", why: "Delusions and hallucinations are psychotic symptoms, not the intrusive thoughts and rituals of OCD." },
      { text: "manic and depressive episodes.", why: "Those are mood-episode terms from bipolar disorder, not the components of OCD." },
      { text: "obsessions and compulsions.", correct: true, why: "Intrusive, unwanted thoughts are obsessions, and the repetitive anxiety-reducing rituals are compulsions." },
      { text: "flashbacks and avoidance.", why: "Flashbacks and avoidance are features of PTSD following trauma, not the pattern described." }
    ],
    keyConcept: "OCD: obsessions and compulsions"
  },
  {
    id: "5.4-4", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "For the past month a woman has felt persistently sad, lost interest in activities she used to enjoy, sleeps poorly, and has little energy, without any period of unusually elevated mood. This pattern best fits",
    stimulus: null,
    choices: [
      { text: "bipolar disorder.", why: "Bipolar disorder requires at least one manic or hypomanic episode, which is explicitly absent here." },
      { text: "a specific phobia.", why: "A phobia is an intense fear of a particular object, not pervasive low mood and anhedonia." },
      { text: "schizophrenia.", why: "Schizophrenia involves psychosis (e.g., hallucinations, delusions), not the mood symptoms described." },
      { text: "major depressive disorder.", correct: true, why: "Two or more weeks of depressed mood and loss of interest with related changes, and no mania, fits major depressive disorder." }
    ],
    keyConcept: "Major depressive disorder"
  },
  {
    id: "5.4-5", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Over the past week a man has needed almost no sleep, feels euphoric and unusually powerful, talks rapidly, and has made several impulsive, risky purchases; at other times he has had depressive episodes. This alternating pattern best fits",
    stimulus: null,
    choices: [
      { text: "bipolar disorder.", correct: true, why: "Episodes of mania (elevated mood, decreased need for sleep, risky behavior) alternating with depression define bipolar disorder." },
      { text: "major depressive disorder.", why: "Major depression involves low mood without manic episodes, but this man shows clear mania." },
      { text: "generalized anxiety disorder.", why: "GAD is chronic worry, not alternating manic and depressive episodes." },
      { text: "dissociative identity disorder.", why: "That involves distinct identity states and memory gaps, not mood episodes of mania and depression." }
    ],
    keyConcept: "Bipolar disorder and mania"
  },
  {
    id: "5.4-6", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Months after surviving a serious car crash, a woman re-experiences it in vivid flashbacks and nightmares, avoids driving, and startles violently at loud noises. This best fits",
    stimulus: null,
    choices: [
      { text: "generalized anxiety disorder.", why: "GAD is diffuse worry not tied to a specific event, whereas her symptoms stem directly from a trauma." },
      { text: "posttraumatic stress disorder.", correct: true, why: "Intrusive memories, avoidance, and hyperarousal following a traumatic event characterize PTSD." },
      { text: "a manic episode.", why: "Mania involves elevated mood and energy, not trauma-linked flashbacks and avoidance." },
      { text: "a specific phobia of cars present since childhood.", why: "The fear began after a specific trauma and includes flashbacks and hyperarousal, which point to PTSD rather than a lifelong phobia." }
    ],
    keyConcept: "Posttraumatic stress disorder (PTSD)"
  },
  {
    id: "5.4-7", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A person experiences vivid hallucinations and firmly held false beliefs (delusions) that others are plotting against him. Within schizophrenia spectrum disorders, these experiences are classified as",
    stimulus: null,
    choices: [
      { text: "negative symptoms, because they reduce normal functioning.", why: "Negative symptoms are reductions like flat affect; hallucinations and delusions are additions, not reductions." },
      { text: "dissociative symptoms.", why: "Dissociation involves disruptions of memory or identity, not psychotic hallucinations and delusions." },
      { text: "positive symptoms, because they add abnormal experiences.", correct: true, why: "Hallucinations and delusions are experiences added to normal functioning, which defines positive symptoms." },
      { text: "compulsions, because they are repeated behaviors.", why: "Compulsions are repetitive behaviors in OCD, not the perceptual and belief disturbances described." }
    ],
    keyConcept: "Positive symptoms of schizophrenia"
  },
  {
    id: "5.4-8", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A person with a schizophrenia spectrum disorder shows a flat, expressionless face, speaks very little, and has lost motivation to carry out daily activities. These features are best described as",
    stimulus: null,
    choices: [
      { text: "positive symptoms, because they are severe.", why: "Positive symptoms are added abnormal experiences (like hallucinations); these are reductions, and severity does not make a symptom 'positive.'" },
      { text: "delusions of control.", why: "Delusions are false beliefs (a positive symptom), not the reduced affect and motivation described." },
      { text: "obsessions and compulsions.", why: "Those belong to OCD, not to the reduced functioning seen here." },
      { text: "negative symptoms, because normal functions are reduced or absent.", correct: true, why: "Flat affect, reduced speech, and loss of motivation are normal functions that are diminished — negative symptoms." }
    ],
    keyConcept: "Negative symptoms of schizophrenia"
  },
  {
    id: "5.4-9", topic: "5.4", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "Two eating disorders differ in a key way: one involves severe restriction of intake and a dangerously low body weight, while the other involves cycles of binge eating followed by compensatory behaviors, often at a body weight in the normal range. These are, respectively,",
    stimulus: null,
    choices: [
      { text: "anorexia nervosa and bulimia nervosa.", correct: true, why: "Anorexia features restriction and very low weight; bulimia features binge-and-compensate cycles, often at a normal weight." },
      { text: "bulimia nervosa and anorexia nervosa.", why: "This reverses the two: restriction with very low weight is anorexia, not bulimia." },
      { text: "binge-eating disorder and anorexia nervosa.", why: "Binge-eating disorder lacks the compensatory behaviors described in the second pattern, so this mismatches the clues." },
      { text: "major depressive disorder and generalized anxiety disorder.", why: "Those are mood and anxiety categories, not eating disorders." }
    ],
    keyConcept: "Anorexia nervosa vs. bulimia nervosa"
  },
  {
    id: "5.4-10", topic: "5.4", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "A psychologist studies a rare presentation of dissociative identity disorder by documenting one client in great depth over several years. What is the main limitation of relying on this method?",
    stimulus: null,
    choices: [
      { text: "It requires random assignment that is unethical here.", why: "Case studies do not use random assignment at all, so this misstates the method and its limitation." },
      { text: "Findings from a single case may not generalize to others.", correct: true, why: "An in-depth case study offers rich detail but cannot be assumed to represent people beyond that one individual." },
      { text: "It cannot gather any qualitative detail.", why: "Case studies are especially strong at gathering rich qualitative detail, so this is not a limitation." },
      { text: "It automatically establishes cause and effect.", why: "A case study cannot establish causation, so claiming it does is incorrect, not a description of its limitation." }
    ],
    keyConcept: "Case-study method and generalizability"
  },
  {
    id: "5.4-11", topic: "5.4", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "A researcher studying antisocial personality disorder relies on participants' self-reports of their own behavior. Why is this a notable concern for this particular category?",
    stimulus: null,
    choices: [
      { text: "Personality disorders cannot be studied scientifically at all.", why: "They can be studied with careful methods; the concern is a specific limitation, not impossibility." },
      { text: "Self-reports are always more accurate than any other measure.", why: "Self-reports are not automatically most accurate, and the question points to a weakness, not a strength." },
      { text: "Individuals may underreport behaviors like deceit, so self-reports can be biased.", correct: true, why: "Because traits such as deceit and disregard for others may be minimized, self-report can distort findings for this category." },
      { text: "Self-reports convert the study into an experiment.", why: "Using self-report does not make a study experimental; it is a measurement choice, not a design that manipulates variables." }
    ],
    keyConcept: "Self-report limitations in studying personality disorders"
  },
  {
    id: "5.4-12", topic: "5.4", unit: 5, practice: 2, difficulty: "Difficult",
    stem: "A study finds that people diagnosed with an anxiety disorder are more likely than average to also meet criteria for a depressive disorder (a pattern called comorbidity). A student concludes that anxiety disorders cause depressive disorders. The best evaluation is that",
    stimulus: null,
    choices: [
      { text: "comorbidity proves anxiety directly causes depression.", why: "Co-occurrence is a correlation and cannot by itself establish that one condition causes the other." },
      { text: "comorbidity means the two disorders are actually the same condition.", why: "Frequent co-occurrence does not make two distinct categories identical." },
      { text: "the finding is meaningless because disorders never co-occur.", why: "Disorders do co-occur, and comorbidity is a real, meaningful pattern; dismissing it is incorrect." },
      { text: "comorbidity is a correlation, so shared risk factors could explain the overlap rather than one causing the other.", correct: true, why: "Because comorbidity is correlational, common underlying factors — not direct causation — may account for the overlap." }
    ],
    keyConcept: "Comorbidity and correlation vs. causation"
  },
  {
    id: "5.4-13", topic: "5.4", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "The table shows an illustrative percentage of people with each listed disorder who also have a co-occurring depressive disorder. Based only on the table, which statement is best supported?",
    stimulus: {
      type: "table",
      caption: "Illustrative comorbidity: percentage with the row disorder who also have a co-occurring depressive disorder",
      headers: ["Disorder", "% with co-occurring depression"],
      rows: [["PTSD", "~48%"], ["Generalized anxiety disorder", "~39%"], ["Panic disorder", "~35%"], ["Specific phobia", "~18%"]],
      rowHeaders: true
    },
    choices: [
      { text: "Depression frequently co-occurs with these disorders, most often with PTSD in this table.", correct: true, why: "Each row shows substantial overlap with depression, and PTSD has the highest listed rate (~48%)." },
      { text: "None of these disorders ever co-occur with depression.", why: "Every listed rate is well above zero, so co-occurrence clearly happens." },
      { text: "Specific phobia co-occurs with depression more than PTSD does.", why: "Specific phobia is lowest (~18%) and PTSD is highest (~48%), so this reverses the data." },
      { text: "The table proves that depression causes PTSD.", why: "Comorbidity percentages describe overlap, not the direction of causation." }
    ],
    keyConcept: "Reading a comorbidity table"
  }
];

window.APSYCH.questions["5.5"] = [
  {
    id: "5.5-1", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "During therapy, a client is encouraged to say whatever comes to mind without filtering, and the therapist notes moments when the client seems to redirect feelings about a parent onto the therapist. This approach is",
    stimulus: null,
    choices: [
      { text: "psychodynamic therapy using free association and transference.", correct: true, why: "Free association and interpreting transference are hallmark techniques of psychodynamic (Freudian) therapy." },
      { text: "systematic desensitization.", why: "Systematic desensitization pairs relaxation with feared stimuli to reduce phobias, not free association." },
      { text: "a token economy.", why: "A token economy uses reinforcement to shape behavior, not exploration of unconscious feelings." },
      { text: "client-centered therapy.", why: "Client-centered therapy emphasizes acceptance and empathy, not free association and transference analysis." }
    ],
    keyConcept: "Psychodynamic therapy techniques"
  },
  {
    id: "5.5-2", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A therapist offers a client genuine warmth and full, nonjudgmental acceptance no matter what the client shares, trusting this climate will support the client's own growth. This reflects",
    stimulus: null,
    choices: [
      { text: "aversion therapy.", why: "Aversion therapy pairs an unwanted behavior with an unpleasant stimulus, the opposite of warm acceptance." },
      { text: "client-centered therapy with unconditional positive regard.", correct: true, why: "Rogers's client-centered approach uses unconditional positive regard, empathy, and genuineness to foster growth." },
      { text: "psychoanalysis focused on dream interpretation.", why: "Dream interpretation is a psychodynamic technique, not the humanistic climate of acceptance described." },
      { text: "cognitive therapy that disputes irrational beliefs.", why: "Cognitive therapy actively challenges thoughts, whereas this therapist provides accepting support." }
    ],
    keyConcept: "Humanistic (client-centered) therapy"
  },
  {
    id: "5.5-3", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "To treat a severe fear of elevators, a therapist teaches relaxation and then guides the client up a gradual hierarchy — from looking at a photo of an elevator to eventually riding one — staying relaxed at each step. This technique is",
    stimulus: null,
    choices: [
      { text: "free association.", why: "Free association is a psychodynamic talking technique, not graded exposure to a feared object." },
      { text: "a token economy.", why: "A token economy reinforces behavior with tokens; it does not involve a graded fear hierarchy." },
      { text: "systematic desensitization.", correct: true, why: "Pairing relaxation with a gradual hierarchy of a feared stimulus is systematic desensitization, ideal for phobias." },
      { text: "electroconvulsive therapy.", why: "ECT is a biomedical treatment for severe depression, not a behavioral treatment for phobia." }
    ],
    keyConcept: "Systematic desensitization for phobias"
  },
  {
    id: "5.5-4", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "On a hospital unit, patients earn plastic chips for completing self-care tasks and later trade the chips for privileges. This behavioral treatment based on operant reinforcement is a",
    stimulus: null,
    choices: [
      { text: "form of psychoanalysis.", why: "Psychoanalysis explores unconscious conflict; earning and exchanging chips is a behavioral reinforcement system." },
      { text: "cognitive restructuring technique.", why: "Cognitive restructuring changes thoughts, whereas this program reinforces observable behaviors with rewards." },
      { text: "type of aversion therapy.", why: "Aversion therapy discourages behavior with unpleasant stimuli; a token economy rewards desired behavior." },
      { text: "token economy.", correct: true, why: "Earning tokens for desired behaviors and exchanging them for rewards is a token economy, an operant technique." }
    ],
    keyConcept: "Token economy (operant behavioral therapy)"
  },
  {
    id: "5.5-5", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A therapist helps a client with depression identify automatic thoughts like 'I always fail,' then challenge and replace these distorted beliefs with more realistic ones. This approach is best described as",
    stimulus: null,
    choices: [
      { text: "cognitive therapy.", correct: true, why: "Identifying and changing distorted, negative thought patterns is the core of Beck's cognitive therapy." },
      { text: "systematic desensitization.", why: "Systematic desensitization treats phobias through graded exposure, not by challenging beliefs." },
      { text: "free association.", why: "Free association surfaces unconscious material; it does not directly dispute distorted thoughts." },
      { text: "drug (biomedical) therapy.", why: "This is a talk-based cognitive method, not a medication-based biomedical treatment." }
    ],
    keyConcept: "Cognitive therapy (Beck/Ellis)"
  },
  {
    id: "5.5-6", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A treatment for anxiety and depression that combines changing distorted thoughts with practicing new behaviors, and that has strong research support, is",
    stimulus: null,
    choices: [
      { text: "psychosurgery.", why: "Psychosurgery is a rare, invasive biomedical procedure, not the combined talk-based approach described." },
      { text: "cognitive-behavioral therapy (CBT).", correct: true, why: "CBT integrates cognitive restructuring with behavioral techniques and is well supported for anxiety and depression." },
      { text: "dream analysis.", why: "Dream analysis is a psychodynamic technique, not the thought-plus-behavior approach described." },
      { text: "a token economy alone.", why: "A token economy is purely behavioral and does not include the cognitive restructuring that defines CBT." }
    ],
    keyConcept: "Cognitive-behavioral therapy (CBT)"
  },
  {
    id: "5.5-7", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A patient experiencing hallucinations and delusions is prescribed a medication that reduces dopamine activity to ease these symptoms. This medication is a(n)",
    stimulus: null,
    choices: [
      { text: "antidepressant that increases serotonin.", why: "Antidepressants target mood via serotonin; they are not the first-line treatment aimed at psychotic symptoms." },
      { text: "antianxiety drug.", why: "Antianxiety drugs calm anxiety; they do not target hallucinations and delusions by reducing dopamine." },
      { text: "antipsychotic drug.", correct: true, why: "Antipsychotics typically reduce dopamine activity and target the positive symptoms (hallucinations, delusions) of schizophrenia." },
      { text: "mood stabilizer such as lithium.", why: "Mood stabilizers treat the mood swings of bipolar disorder, not the psychotic symptoms described." }
    ],
    keyConcept: "Antipsychotics for schizophrenia"
  },
  {
    id: "5.5-8", topic: "5.5", unit: 5, practice: 1, difficulty: "Moderate",
    stem: "A person with bipolar disorder is prescribed a medication to reduce the frequency and intensity of manic and depressive episodes. The most appropriate class of medication is",
    stimulus: null,
    choices: [
      { text: "an antipsychotic aimed only at hallucinations.", why: "The goal here is stabilizing mood swings, not solely treating hallucinations." },
      { text: "a stimulant to increase energy.", why: "Stimulants could worsen mania; they are not used to stabilize bipolar mood episodes." },
      { text: "an antianxiety drug for daily worry.", why: "Antianxiety drugs target anxiety, not the alternating mood episodes of bipolar disorder." },
      { text: "a mood stabilizer such as lithium.", correct: true, why: "Mood stabilizers like lithium are used to reduce the mood swings of bipolar disorder." }
    ],
    keyConcept: "Mood stabilizers (lithium) for bipolar disorder"
  },
  {
    id: "5.5-9", topic: "5.5", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "To test whether a new therapy actually reduces depression rather than people simply improving on their own, the most important design feature is",
    stimulus: null,
    choices: [
      { text: "a control group that does not receive the new therapy for comparison.", correct: true, why: "A comparison group shows whether improvement exceeds what happens without the therapy, isolating its effect." },
      { text: "recruiting only participants who already expect to improve.", why: "Selecting optimistic participants would bias results, not help isolate the therapy's effect." },
      { text: "measuring depression only after treatment, never before.", why: "Without a baseline or comparison, you cannot tell whether the therapy caused any change." },
      { text: "letting each participant choose their own treatment.", why: "Self-selection introduces confounds, undermining rather than supporting a causal test." }
    ],
    keyConcept: "Control groups in therapy-outcome research"
  },
  {
    id: "5.5-10", topic: "5.5", unit: 5, practice: 2, difficulty: "Difficult",
    stem: "Clients often seek therapy when their symptoms are at their worst, and symptoms at an extreme tend to move back toward average over time even without treatment. Ignoring this can lead researchers to",
    stimulus: null,
    choices: [
      { text: "underestimate how common the disorder is.", why: "This phenomenon concerns change in symptom severity over time, not estimates of prevalence." },
      { text: "overestimate a therapy's effectiveness by mistaking regression toward the mean for a treatment effect.", correct: true, why: "Natural improvement from an extreme (regression toward the mean) can be misread as the therapy working." },
      { text: "prove the therapy has no effect at all.", why: "Regression toward the mean does not prove zero effect; it is a confound that a control group helps rule out." },
      { text: "eliminate the need for a comparison group.", why: "Precisely because of this confound, a comparison group is more necessary, not less." }
    ],
    keyConcept: "Regression toward the mean as a confound"
  },
  {
    id: "5.5-11", topic: "5.5", unit: 5, practice: 2, difficulty: "Moderate",
    stem: "A clinic wants to adopt only treatments shown by well-designed research to work for a given problem. This commitment is best described as",
    stimulus: null,
    choices: [
      { text: "an eclectic guess based on therapist preference.", why: "Choosing by preference alone is not grounded in research evidence, which is the point of the commitment." },
      { text: "reliance on testimonials from a few satisfied clients.", why: "Anecdotal testimonials are not the controlled research evidence that this approach requires." },
      { text: "evidence-based practice.", correct: true, why: "Selecting treatments supported by rigorous research findings is the definition of evidence-based practice." },
      { text: "the placebo effect.", why: "The placebo effect is improvement from expectation, not a policy of using research-supported treatments." }
    ],
    keyConcept: "Evidence-based practice"
  },
  {
    id: "5.5-12", topic: "5.5", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "In a randomized trial, participants with depression received one of four conditions for 16 weeks. The bar graph shows the percentage who were much improved. Which statement is best supported?",
    stimulus: {
      type: "bars",
      caption: "Percentage much improved after 16 weeks, by treatment condition (illustrative)",
      categories: ["Placebo", "Medication only", "CBT only", "CBT + medication"],
      values: [30, 52, 55, 68],
      yLabel: "% much improved",
      max: 100
    },
    choices: [
      { text: "The placebo condition produced the most improvement.", why: "Placebo had the lowest improvement rate (30%), not the most." },
      { text: "Medication and CBT were equally as effective as placebo.", why: "Both active treatments (52% and 55%) exceeded placebo (30%), so they were not equal to it." },
      { text: "Only medication, and not CBT, beat placebo.", why: "CBT only (55%) also exceeded placebo (30%), so it was not just medication." },
      { text: "Combining CBT with medication produced the greatest improvement in this trial.", correct: true, why: "The combined condition had the highest rate (68%), above each treatment alone and placebo." }
    ],
    keyConcept: "Comparing treatment-efficacy data"
  },
  {
    id: "5.5-13", topic: "5.5", unit: 5, practice: 3, difficulty: "Moderate",
    stem: "The table shows the illustrative percentage of patients who relapsed within one year after each treatment ended. Based only on the table, which statement is best supported?",
    stimulus: {
      type: "table",
      caption: "Illustrative relapse within one year after treatment ended",
      headers: ["Treatment", "Relapse rate"],
      rows: [["Medication only", "~55%"], ["CBT only", "~30%"], ["CBT + medication", "~25%"]],
      rowHeaders: true
    },
    choices: [
      { text: "Treatments that included CBT were associated with lower relapse than medication alone.", correct: true, why: "CBT only (~30%) and CBT + medication (~25%) both show lower relapse than medication alone (~55%)." },
      { text: "Medication alone had the lowest relapse rate.", why: "Medication alone had the highest relapse rate (~55%), not the lowest." },
      { text: "No treatment led to any relapse.", why: "Every listed treatment shows a relapse rate above zero." },
      { text: "The table proves CBT cures depression permanently.", why: "Lower relapse is not the same as a permanent cure, and the table only reports one-year rates." }
    ],
    keyConcept: "Interpreting relapse-rate data"
  }
];
