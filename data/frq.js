/*
 * frq.js — Original AAQ and EBQ practice sets.
 * Format, part structure, and rubric structure follow College Board's officially
 * released 2025 AAQ/EBQ and published scoring guidelines (updated Oct 2025).
 * All studies, sources, and data below are ORIGINAL analogues written for this site —
 * they do NOT reproduce any released or secure College Board material.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.frq = {
  aaq: [
    {
      id: "aaq-1",
      kind: "AAQ",
      title: "Does a brief afternoon nap improve memory consolidation?",
      topicArea: "Sleep & Memory (Units 1–2)",
      minutes: 25,
      points: 7,
      study: {
        citation: "Original analogue study written for this site (not a real citation).",
        background: "Researchers wanted to test whether a short nap after learning helps the brain consolidate new declarative memories. Prior work suggests slow-wave sleep supports the transfer of information from the hippocampus into long-term storage.",
        method: "Sixty undergraduate volunteers first studied a list of 40 unrelated word pairs. Participants were then randomly assigned to either a 45-minute nap opportunity in a sleep lab or a 45-minute quiet-wakefulness condition (seated, awake, reading neutral text). Afterward, all participants were tested on cued recall of the word pairs. Recall was scored as the number of pairs correctly reproduced (0–40).",
        participants: "60 undergraduate psychology students (ages 18–22) at a single mid-sized university who received course credit for participating. All reported normal sleep habits.",
        procedure: "Assignment to condition was determined by a random number generator. Testing occurred in the same room for both groups, and the researcher scoring recall did not know which condition each participant had been in.",
        results: "The nap group recalled more word pairs on average than the quiet-wakefulness group, and the researchers reported the difference as statistically significant (p < .05).",
        stimulus: {
          type: "table",
          caption: "Mean cued-recall scores by condition (0–40 pairs)",
          headers: ["Condition", "n", "Mean recall", "SD"],
          rows: [["Nap", "30", "18.4", "3.1"], ["Quiet wakefulness", "30", "14.2", "3.6"]]
        }
      },
      parts: [
        {
          label: "A", points: "0–1",
          prompt: "Identify the research method used in this study.",
          rubric: "Point for correctly identifying the study as an experiment (experimental method).",
          model: "This is an experiment: participants were randomly assigned to conditions and the researchers manipulated an independent variable (nap vs. quiet wakefulness)."
        },
        {
          label: "B", points: "0–1",
          prompt: "State an operational definition of the dependent variable.",
          rubric: "Point for describing how the DV was measured/quantified, not just naming it.",
          model: "The dependent variable, memory, was operationally defined as the number of the 40 studied word pairs a participant correctly reproduced on the cued-recall test (a score from 0 to 40)."
        },
        {
          label: "C", points: "0–1",
          prompt: "Interpret the reported statistic \"p < .05\" in the context of this study.",
          rubric: "Point for explaining statistical significance: the observed difference is unlikely (less than a 5% probability) to have occurred by chance alone if there were truly no effect.",
          model: "\"p < .05\" means the difference in recall between the nap and quiet-wakefulness groups was statistically significant — there is less than a 5% probability of obtaining a difference this large by chance if napping actually had no effect, so the result is unlikely to be due to random variation."
        },
        {
          label: "D", points: "0–1",
          prompt: "Identify one ethical guideline the researchers applied, and explain how the description shows it.",
          rubric: "Point for naming a guideline (e.g., informed consent, voluntary participation, confidentiality) AND tying it to a detail in the study.",
          model: "The researchers applied voluntary participation/informed consent: participants were described as volunteers who chose to take part for course credit, indicating they agreed to participate rather than being coerced."
        },
        {
          label: "E", points: "0–1",
          prompt: "Explain whether the findings can be generalized to the broader population, using evidence about the participants.",
          rubric: "Point for addressing generalizability with specific reference to the sample's characteristics.",
          model: "Generalizability is limited: the sample was 60 undergraduates aged 18–22 from a single university who reported normal sleep habits. Because this is a narrow, non-representative convenience sample, the results may not generalize to older adults, poor sleepers, or the general population."
        },
        {
          label: "F", points: "0–2",
          prompt: "Explain how a specific result supports or refutes the researchers' hypothesis that napping improves memory consolidation.",
          rubric: "One point for referencing a specific result; a second point for explaining how it supports/refutes the hypothesis.",
          model: "The result supports the hypothesis. The nap group's mean recall (18.4 pairs) was higher than the quiet-wakefulness group's (14.2 pairs), and the difference was statistically significant. Because the only systematic difference between groups was the nap, the higher recall after napping is consistent with the prediction that sleep aids consolidation of newly learned material."
        }
      ],
      checklist: [
        { text: "A: I identified the study as an experiment.", points: 1 },
        { text: "B: I said HOW the DV was measured (number of pairs recalled, 0–40).", points: 1 },
        { text: "C: I explained p < .05 as statistical significance / unlikely due to chance.", points: 1 },
        { text: "D: I named an ethical guideline AND tied it to a study detail.", points: 1 },
        { text: "E: I addressed generalizability using the sample's characteristics.", points: 1 },
        { text: "F: I cited a specific result (the two means / significance).", points: 1 },
        { text: "F: I explained how that result supports/refutes the hypothesis.", points: 1 }
      ]
    },
    {
      id: "aaq-2",
      kind: "AAQ",
      title: "Does a daily gratitude practice raise well-being?",
      topicArea: "Positive & Health Psychology (Unit 5)",
      minutes: 25,
      points: 7,
      study: {
        citation: "Original analogue study written for this site (not a real citation).",
        background: "Positive-psychology researchers examined whether deliberately practicing gratitude increases subjective well-being compared with simply recording daily events.",
        method: "Adults recruited from an online research panel were randomly assigned to one of two two-week journaling conditions: a gratitude condition (list three things you are grateful for each night) or a neutral condition (list three things that happened each day). Well-being was measured before and after with a validated 1–7 life-satisfaction scale.",
        participants: "120 adults (ages 25–60) from an online research panel who volunteered and could withdraw at any time. Participants spanned several regions but skewed toward people who use online panels.",
        procedure: "Condition assignment was random. Researchers kept responses confidential and identified participants only by code number.",
        results: "The gratitude group showed a larger increase in life-satisfaction scores than the neutral group. Change scores are shown below.",
        stimulus: {
          type: "bars",
          caption: "Mean change in life-satisfaction score (post minus pre, 1–7 scale)",
          categories: ["Gratitude", "Neutral"],
          values: [0.8, 0.2],
          yLabel: "Mean change",
          max: 1
        }
      },
      parts: [
        { label: "A", points: "0–1", prompt: "Identify the research method used.", rubric: "Point for identifying an experiment (random assignment + manipulated condition).", model: "It is an experiment — participants were randomly assigned to the gratitude or neutral journaling condition, which the researchers manipulated." },
        { label: "B", points: "0–1", prompt: "State an operational definition of the dependent variable.", rubric: "Point for how well-being was measured.", model: "Well-being was operationally defined as a participant's score on a validated 1–7 life-satisfaction scale (specifically the change from the pre-test to the post-test)." },
        { label: "C", points: "0–1", prompt: "Interpret the change score for the gratitude group (+0.8) relative to the neutral group (+0.2).", rubric: "Point for a contextual interpretation of the difference in change scores.", model: "On average, the gratitude group's life satisfaction rose by 0.8 points over two weeks versus only 0.2 for the neutral group — a larger improvement — suggesting the gratitude practice was associated with a greater increase in well-being than simply recording events." },
        { label: "D", points: "0–1", prompt: "Identify one ethical guideline applied and connect it to a detail.", rubric: "Point for naming a guideline tied to the description.", model: "The researchers maintained confidentiality: responses were kept private and participants were identified only by code number rather than by name." },
        { label: "E", points: "0–1", prompt: "Explain the extent to which the findings generalize, using participant evidence.", rubric: "Point for using the sample to reason about generalizability.", model: "The sample was 120 adults aged 25–60 drawn from an online research panel. Because panel members may differ from the general public (e.g., more internet-engaged, self-selected volunteers), the findings may not fully generalize beyond similar online-panel adults." },
        { label: "F", points: "0–2", prompt: "Explain how a specific result supports or refutes the hypothesis that practicing gratitude increases well-being.", rubric: "One point for a specific result; one for the support/refute explanation.", model: "The result supports the hypothesis: the gratitude group's mean life-satisfaction change (+0.8) exceeded the neutral group's (+0.2). Since random assignment makes the groups comparable, the greater gain in the gratitude condition is consistent with the prediction that deliberately practicing gratitude raises well-being." }
      ],
      checklist: [
        { text: "A: Identified as an experiment.", points: 1 },
        { text: "B: Operationalized the DV (score on the 1–7 scale / change score).", points: 1 },
        { text: "C: Interpreted the +0.8 vs +0.2 difference in context.", points: 1 },
        { text: "D: Named an ethical guideline tied to a detail.", points: 1 },
        { text: "E: Reasoned about generalizability from the sample.", points: 1 },
        { text: "F: Cited a specific result.", points: 1 },
        { text: "F: Explained how it supports/refutes the hypothesis.", points: 1 }
      ]
    }
  ],

  ebq: [
    {
      id: "ebq-1",
      kind: "EBQ",
      title: "Should high schools start the school day later for adolescents?",
      topicArea: "Sleep (Unit 1)",
      minutes: 45,
      points: 7,
      question: "Using the three sources below, develop and support a claim about whether delaying high-school start times benefits adolescents.",
      sources: [
        {
          label: "Source A",
          citation: "Original analogue — correlational survey.",
          summary: "<p>A survey of 4,000 high-school students found that students who reported getting fewer than 7 hours of sleep on school nights also reported lower grades and more daytime drowsiness. The relationship between hours of sleep and self-reported GPA was positive, r = +0.31. Because the design was correlational, the researchers noted that sleep and grades are associated but that causation cannot be established.</p>"
        },
        {
          label: "Source B",
          citation: "Original analogue — quasi-experiment.",
          summary: "<p>One school district moved its high-school start time from 7:30 a.m. to 8:30 a.m. Researchers compared attendance and average sleep duration for the year before and the year after the change. After the delay, students averaged 34 more minutes of sleep per night and tardiness dropped by 18%. No comparison district was used, so other factors during the year cannot be ruled out.</p>"
        },
        {
          label: "Source C",
          citation: "Original analogue — review of developmental sleep biology.",
          summary: "<p>A review explains that during puberty the circadian rhythm shifts later, so adolescents naturally feel sleepy later at night and struggle to fall asleep early. Combined with early start times, this produces chronic sleep deprivation during a developmental window when sleep supports memory consolidation and emotional regulation.</p>"
        }
      ],
      parts: [
        { label: "A", points: "0–1", prompt: "Propose a defensible claim that answers the question.", rubric: "Point for a clear, defensible claim (a position that could be supported with evidence).", model: "Claim: High schools should delay their start times because doing so helps adolescents get more sleep, which supports both academic performance and healthy development." },
        { label: "B", points: "0–1 + 0–2", prompt: "Support your claim with specific evidence from ONE source, and explain how a psychological concept applies to that evidence.", rubric: "1 pt: cite specific evidence from one source. 2 pts: correctly explain/apply a CED psychological concept to that evidence.", model: "Evidence (Source B): after one district delayed its start time to 8:30 a.m., students averaged 34 more minutes of sleep and tardiness fell 18%. Concept — sleep deprivation: adolescents who chronically get too little sleep accumulate a sleep debt that impairs alertness and functioning; giving them more time to sleep reduces that deprivation, which plausibly explains the improved punctuality (Source B)." },
        { label: "C", points: "0–1 + 0–2", prompt: "Support your claim with DIFFERENT evidence from a DIFFERENT source, and apply a DIFFERENT psychological concept.", rubric: "1 pt: cite different evidence from a different source. 2 pts: apply a different CED concept correctly.", model: "Evidence (Source C): during puberty the circadian rhythm shifts later, so teens fall asleep later. Concept — circadian rhythm: the body's roughly 24-hour biological clock governs the sleep–wake cycle; because the adolescent clock shifts later, early start times fight their biology and cause chronic sleep loss, which supports moving start times later (Source C)." }
      ],
      checklist: [
        { text: "A: Stated a clear, defensible claim.", points: 1 },
        { text: "B: Cited specific evidence from one source.", points: 1 },
        { text: "B: Correctly explained/applied a psych concept to it (worth 2).", points: 2 },
        { text: "C: Cited DIFFERENT evidence from a DIFFERENT source.", points: 1 },
        { text: "C: Applied a DIFFERENT psych concept correctly (worth 2).", points: 2 }
      ]
    },
    {
      id: "ebq-2",
      kind: "EBQ",
      title: "What most effectively reduces prejudice between groups?",
      topicArea: "Social Psychology (Unit 4)",
      minutes: 45,
      points: 7,
      question: "Using the three sources below, develop and support a claim about how prejudice between groups can be reduced.",
      sources: [
        {
          label: "Source A",
          citation: "Original analogue — field experiment.",
          summary: "<p>Members of two rival groups were assigned to work on tasks that could only be solved by cooperating (for example, jointly repairing a shared resource). After a week of these cooperative tasks requiring shared goals, self-reported liking of the other group increased and hostile incidents decreased compared with a control period of separate activities.</p>"
        },
        {
          label: "Source B",
          citation: "Original analogue — correlational study.",
          summary: "<p>In a survey of 2,500 adults, people who reported more frequent, friendly contact with members of an out-group also reported lower prejudice toward that group, r = −0.28. The researchers cautioned that the design cannot show whether contact reduces prejudice or whether less-prejudiced people simply seek more contact.</p>"
        },
        {
          label: "Source C",
          citation: "Original analogue — meta-analysis.",
          summary: "<p>A meta-analysis combining 200+ studies concluded that intergroup contact typically reduces prejudice, and that the effect is strongest when the contact involves equal status, cooperation toward common goals, and institutional support. Contact that was hostile or unequal produced weaker or no benefits.</p>"
        }
      ],
      parts: [
        { label: "A", points: "0–1", prompt: "Propose a defensible claim.", rubric: "Point for a clear, defensible claim.", model: "Claim: Prejudice between groups is most effectively reduced through structured intergroup contact that involves cooperation toward shared goals under conditions of equal status." },
        { label: "B", points: "0–1 + 0–2", prompt: "Support the claim with specific evidence from ONE source and apply a psychological concept.", rubric: "1 pt evidence; 2 pts concept application.", model: "Evidence (Source A): rival groups who cooperated on tasks requiring shared goals showed increased liking and fewer hostile incidents. Concept — superordinate goals: goals that require groups to work together and cannot be achieved alone reduce competition and build cooperative relationships, which explains why the shared tasks lowered hostility (Source A)." },
        { label: "C", points: "0–1 + 0–2", prompt: "Support the claim with DIFFERENT evidence from a DIFFERENT source and apply a DIFFERENT concept.", rubric: "1 pt different evidence; 2 pts different concept.", model: "Evidence (Source C): a meta-analysis found contact reduces prejudice most when it involves equal status, cooperation, and institutional support. Concept — the contact hypothesis: prejudice declines when groups interact under these favorable conditions; the meta-analysis's pattern directly matches the contact hypothesis's predicted conditions, strengthening the claim (Source C)." }
      ],
      checklist: [
        { text: "A: Stated a clear, defensible claim.", points: 1 },
        { text: "B: Cited specific evidence from one source.", points: 1 },
        { text: "B: Applied a psych concept correctly (worth 2).", points: 2 },
        { text: "C: Cited DIFFERENT evidence from a DIFFERENT source.", points: 1 },
        { text: "C: Applied a DIFFERENT psych concept correctly (worth 2).", points: 2 }
      ]
    }
  ]
};
