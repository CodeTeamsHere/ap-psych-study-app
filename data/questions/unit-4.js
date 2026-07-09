/*
 * data/questions/unit-4.js — Original practice questions for Unit 4: Social Psychology and Personality.
 * Schema per question:
 *   { id, topic, unit, practice(1-3), difficulty('Easy'|'Moderate'|'Difficult'),
 *     stem, stimulus?(table/bars/scatter/passage/figure),
 *     choices:[{text, correct?:true, why}]  // exactly one correct; every choice has a 'why',
 *     keyConcept }
 * All questions are original, written for this site (not copied from any question bank).
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.questions = window.APSYCH.questions || {};

window.APSYCH.questions["4.1"] = [
  {
    id: "4.1-1", topic: "4.1", unit: 4, practice: 1, difficulty: "Easy",
    stem: "A student sees a classmate trip in the hallway and immediately thinks, \"He's so clumsy,\" without considering that the floor was wet. This snap judgment best illustrates",
    stimulus: null,
    choices: [
      { text: "a situational attribution.", why: "A situational attribution would credit the wet floor — the external cause the student ignored." },
      { text: "the fundamental attribution error.", correct: true, why: "Blaming another person's disposition (clumsiness) while ignoring the situation (wet floor) is the fundamental attribution error." },
      { text: "the self-serving bias.", why: "The self-serving bias concerns explaining one's OWN successes and failures, not judging another person." },
      { text: "an external locus of control.", why: "Locus of control is a belief about who controls one's own outcomes, not an explanation of someone else's trip." }
    ],
    keyConcept: "Fundamental attribution error"
  },
  {
    id: "4.1-2", topic: "4.1", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "After winning a chess match, Dana says her victory proves her superior skill; after losing the next one, she blames the noisy room. Dana's pattern of explanation best illustrates",
    stimulus: null,
    choices: [
      { text: "the fundamental attribution error.", why: "That error is about over-attributing OTHERS' behavior to disposition, not explaining one's own wins and losses." },
      { text: "informational social influence.", why: "That describes conforming because others seem to know better, not crediting one's own outcomes." },
      { text: "the self-serving bias.", correct: true, why: "Taking credit for success (skill) but blaming failure on the situation (noise) is the self-serving bias protecting self-esteem." },
      { text: "an external locus of control.", why: "An external locus is a general belief that outside forces control everything; Dana claims internal credit when she wins." }
    ],
    keyConcept: "Self-serving bias"
  },
  {
    id: "4.1-3", topic: "4.1", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "When Marcus is late, he explains that traffic was terrible; when his coworker is late, he decides she is irresponsible. This contrast best illustrates",
    stimulus: null,
    choices: [
      { text: "the actor-observer bias.", correct: true, why: "People attribute their own behavior to the situation (traffic) but others' behavior to disposition (irresponsible) — the actor-observer bias." },
      { text: "the mere exposure effect.", why: "That is increased liking from familiarity, unrelated to explaining lateness." },
      { text: "cognitive dissonance.", why: "Dissonance is tension from inconsistent attitudes and behavior, not differing explanations for self versus others." },
      { text: "downward social comparison.", why: "That is comparing oneself to those worse off, not attributing causes of lateness." }
    ],
    keyConcept: "Actor-observer bias"
  },
  {
    id: "4.1-4", topic: "4.1", unit: 4, practice: 1, difficulty: "Easy",
    stem: "Priya believes that her grades depend mainly on how much effort she puts in and the strategies she chooses. Priya most clearly has",
    stimulus: null,
    choices: [
      { text: "an external locus of control.", why: "An external locus attributes outcomes to luck or fate, the opposite of Priya's belief in her own effort." },
      { text: "a pessimistic explanatory style.", why: "A pessimistic style attributes setbacks to permanent internal causes; Priya's belief is an empowering sense of control." },
      { text: "low self-efficacy.", why: "Low self-efficacy is doubting one can succeed at a task; Priya expresses confidence that effort pays off." },
      { text: "an internal locus of control.", correct: true, why: "Believing that one's own effort and choices drive outcomes is the definition of an internal locus of control." }
    ],
    keyConcept: "Internal locus of control"
  },
  {
    id: "4.1-5", topic: "4.1", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "After failing one quiz, Leo tells himself, \"That was just a hard quiz on a bad day; I'll do better next time.\" Leo's interpretation best reflects",
    stimulus: null,
    choices: [
      { text: "a pessimistic explanatory style.", why: "A pessimistic style would call the failure permanent and personal, not temporary and specific." },
      { text: "an optimistic explanatory style.", correct: true, why: "Attributing the setback to temporary, specific, external causes (a hard quiz, a bad day) is the optimistic explanatory style." },
      { text: "the fundamental attribution error.", why: "That error concerns explaining others' behavior, not interpreting one's own setback." },
      { text: "deindividuation.", why: "Deindividuation is losing self-restraint in a group, unrelated to explaining a quiz result." }
    ],
    keyConcept: "Optimistic explanatory style"
  },
  {
    id: "4.1-6", topic: "4.1", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "A new song feels grating the first time Aisha hears it, but after it plays repeatedly on the radio she finds herself liking it. This change best illustrates",
    stimulus: null,
    choices: [
      { text: "the self-fulfilling prophecy.", why: "That is when an expectation causes behavior confirming it, not increased liking from repetition." },
      { text: "the halo effect.", why: "The halo effect is letting one good trait color an overall impression, not growing to like something through exposure." },
      { text: "the mere exposure effect.", correct: true, why: "Repeated exposure to a stimulus increasing one's liking of it is the mere exposure effect." },
      { text: "cognitive dissonance.", why: "Dissonance is discomfort from conflicting attitudes and actions, not familiarity breeding liking." }
    ],
    keyConcept: "Mere exposure effect"
  },
  {
    id: "4.1-7", topic: "4.1", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "A teacher is told that certain students are \"late bloomers\" poised to excel. She unknowingly gives them more attention and encouragement, and by year's end they do outperform their peers. This outcome best illustrates",
    stimulus: null,
    choices: [
      { text: "a self-fulfilling prophecy.", correct: true, why: "The teacher's expectation changed her behavior in ways that made the expectation come true — a self-fulfilling prophecy." },
      { text: "the fundamental attribution error.", why: "No one here is over-attributing behavior to disposition while ignoring the situation." },
      { text: "downward social comparison.", why: "That is comparing oneself to those worse off, which is not what produced the students' gains." },
      { text: "normative social influence.", why: "That is conforming to be liked; the effect here came from the teacher's expectations shaping her behavior." }
    ],
    keyConcept: "Self-fulfilling prophecy"
  },
  {
    id: "4.1-8", topic: "4.1", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Reana is content with her salary until she learns that coworkers with similar jobs earn much more, after which she feels cheated and discontented. Her new discontent best illustrates",
    stimulus: null,
    choices: [
      { text: "downward social comparison.", why: "Downward comparison, to those worse off, tends to boost satisfaction — the opposite of her reaction." },
      { text: "the mere exposure effect.", why: "That is liking through familiarity, unrelated to feeling underpaid." },
      { text: "an internal locus of control.", why: "That is a belief about controlling one's own outcomes, not discontent from comparison." },
      { text: "relative deprivation from upward social comparison.", correct: true, why: "Comparing upward to better-off others and feeling worse off as a result is relative deprivation." }
    ],
    keyConcept: "Relative deprivation and upward social comparison"
  },
  {
    id: "4.1-9", topic: "4.1", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "To study the fundamental attribution error, researchers have participants read an essay and tell them the author was ASSIGNED which position to argue. Participants still infer the essay reflects the author's true beliefs. This result supports the error because participants",
    stimulus: null,
    choices: [
      { text: "correctly weighted the situational constraint.", why: "If they had weighted the forced assignment, they would NOT infer true beliefs — that would contradict the error." },
      { text: "underused the situational information and inferred a disposition anyway.", correct: true, why: "Ignoring the known situational constraint and inferring the author's disposition is exactly the fundamental attribution error." },
      { text: "were measured on their obedience to authority.", why: "The design measures attribution, not obedience to commands." },
      { text: "changed their own attitudes to match the essay.", why: "The study measures how participants explain the author, not attitude change in themselves." }
    ],
    keyConcept: "Experimental evidence for the fundamental attribution error"
  },
  {
    id: "4.1-10", topic: "4.1", unit: 4, practice: 2, difficulty: "Difficult",
    stem: "Students explain their grades by citing their intelligence for A's but \"unfair tests\" for F's. To argue this reflects the self-serving bias rather than accurate reporting, a researcher would most need to show that",
    stimulus: null,
    choices: [
      { text: "the students never study for exams.", why: "Study habits are irrelevant to whether the attribution pattern is self-protective." },
      { text: "the tests were, in fact, unfair.", why: "If the tests really were unfair, the external attribution would be accurate, undermining the self-serving interpretation." },
      { text: "the same students attribute others' failures to lack of ability rather than to unfair tests.", correct: true, why: "An asymmetry favoring the self — external for one's own failure but internal for others' failure — is the signature of the self-serving bias." },
      { text: "the students report high self-efficacy in every subject.", why: "General task confidence does not establish the self-protective asymmetry that defines the bias." }
    ],
    keyConcept: "Distinguishing self-serving bias from accurate attribution"
  },
  {
    id: "4.1-11", topic: "4.1", unit: 4, practice: 3, difficulty: "Moderate",
    stem: "The table shows the percentage of explanations that were dispositional (crediting the person rather than the situation) in a study. Which conclusion is best supported?",
    stimulus: {
      type: "table",
      caption: "Percent of explanations that were dispositional, by target",
      headers: ["Behavior explained", "% dispositional"],
      rows: [["Own success", "78"], ["Own failure", "23"], ["Others' success", "41"], ["Others' failure", "69"]],
      rowHeaders: true
    },
    choices: [
      { text: "People explained their OWN failures situationally but OTHERS' failures dispositionally, consistent with self-serving and actor-observer patterns.", correct: true, why: "Own failure is only 23% dispositional (mostly situational) while others' failure is 69% dispositional — the predicted self/other asymmetry." },
      { text: "People always used dispositional explanations.", why: "Own failure was only 23% dispositional, so 'always' is false." },
      { text: "People explained their own successes situationally.", why: "Own success was 78% dispositional, meaning they credited themselves, not the situation." },
      { text: "There was no difference between explaining one's own and others' behavior.", why: "The percentages differ sharply (for failure, 23% vs. 69%), showing a clear difference." }
    ],
    keyConcept: "Interpreting attribution data (self-serving and actor-observer patterns)"
  }
];

window.APSYCH.questions["4.2"] = [
  {
    id: "4.2-1", topic: "4.2", unit: 4, practice: 1, difficulty: "Easy",
    stem: "A voter carefully reads a candidate's detailed policy proposals and changes her opinion based on the strength of the arguments. This attitude change occurred through",
    stimulus: null,
    choices: [
      { text: "the peripheral route to persuasion.", why: "The peripheral route relies on surface cues like image or emotion, not careful analysis of arguments." },
      { text: "the central route to persuasion.", correct: true, why: "Being persuaded by carefully weighing the strength of the arguments and evidence is the central route." },
      { text: "the foot-in-the-door phenomenon.", why: "That is a compliance technique using a small prior request, not evaluation of argument quality." },
      { text: "cognitive dissonance.", why: "Dissonance is tension from acting against one's attitude, not persuasion by strong arguments." }
    ],
    keyConcept: "Central route to persuasion"
  },
  {
    id: "4.2-2", topic: "4.2", unit: 4, practice: 1, difficulty: "Easy",
    stem: "An ad persuades viewers to buy a soda mainly by featuring an attractive celebrity and upbeat music rather than any facts about the product. This relies on",
    stimulus: null,
    choices: [
      { text: "the central route to persuasion.", why: "The central route uses substantive arguments and evidence, not celebrity appeal." },
      { text: "cognitive dissonance reduction.", why: "No attitude-behavior conflict is being resolved here; it is an external appeal." },
      { text: "the peripheral route to persuasion.", correct: true, why: "Persuasion through incidental cues like attractiveness and music, rather than content, is the peripheral route." },
      { text: "informational social influence.", why: "That is conforming because others seem to know better, not persuasion by ad imagery." }
    ],
    keyConcept: "Peripheral route to persuasion"
  },
  {
    id: "4.2-3", topic: "4.2", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "A volunteer first asks neighbors to display a small window sticker supporting safe driving. Weeks later, most of those who agreed also allow a large, unattractive yard sign. This increase in compliance illustrates",
    stimulus: null,
    choices: [
      { text: "the door-in-the-face technique.", why: "That technique starts with a LARGE request that is refused, then a smaller one; here the small request came first." },
      { text: "the peripheral route to persuasion.", why: "This is about escalating commitment, not persuasion through surface cues." },
      { text: "informational social influence.", why: "No group is serving as a source of correct information; this is a compliance sequence." },
      { text: "the foot-in-the-door phenomenon.", correct: true, why: "Agreeing to a small request (sticker) increasing later agreement to a larger one (yard sign) is the foot-in-the-door phenomenon." }
    ],
    keyConcept: "Foot-in-the-door phenomenon"
  },
  {
    id: "4.2-4", topic: "4.2", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Participants paid only $1 to tell someone a boring task was fun later rated the task as more enjoyable than those paid $20. Festinger explained this because the $1 group",
    stimulus: null,
    choices: [
      { text: "felt dissonance from lying for little reward and changed their attitude to reduce it.", correct: true, why: "With too little external justification ($1), they reduced dissonance by deciding the task really was enjoyable." },
      { text: "were persuaded through the central route by strong evidence.", why: "No strong arguments were presented; the effect came from resolving internal tension." },
      { text: "experienced the mere exposure effect.", why: "Mere exposure is liking from repetition, not attitude change from insufficient justification." },
      { text: "conformed due to normative social influence.", why: "The effect is intrapersonal dissonance reduction, not conforming to be liked by a group." }
    ],
    keyConcept: "Cognitive dissonance and insufficient justification"
  },
  {
    id: "4.2-5", topic: "4.2", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Rico says he strongly values recycling but rarely recycles at his office because there is no bin nearby and no one else bothers. This gap best illustrates that",
    stimulus: null,
    choices: [
      { text: "attitudes are always excellent predictors of behavior.", why: "This case shows the opposite — the attitude did not translate into behavior." },
      { text: "situational factors can override a privately held attitude.", correct: true, why: "Weak situational support (no bin, no models) overrode Rico's pro-recycling attitude." },
      { text: "Rico has no real attitude about recycling.", why: "He clearly holds the attitude; the point is that the situation blocked matching behavior." },
      { text: "this demonstrates the door-in-the-face technique.", why: "No sequence of requests is involved; it is an attitude-behavior gap." }
    ],
    keyConcept: "Attitude-behavior gap and situational pressure"
  },
  {
    id: "4.2-6", topic: "4.2", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Jordan sincerely reports believing all groups are equally capable, yet on a timed task he automatically associates certain groups with negative words more quickly. The automatic reaction reflects his",
    stimulus: null,
    choices: [
      { text: "explicit attitude.", why: "His explicit, consciously reported attitude is one of equality; the automatic reaction is something else." },
      { text: "central route processing.", why: "That is a mode of persuasion, not a type of attitude." },
      { text: "implicit attitude.", correct: true, why: "An automatic association operating outside conscious awareness is an implicit attitude, which can diverge from the explicit one." },
      { text: "cognitive dissonance.", why: "Dissonance is felt tension from inconsistency; the item describes an automatic association, not resolved discomfort." }
    ],
    keyConcept: "Implicit vs. explicit attitudes"
  },
  {
    id: "4.2-7", topic: "4.2", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "A student assigned to publicly argue a viewpoint she initially opposed gradually finds herself actually agreeing with it more. The most likely explanation is that",
    stimulus: null,
    choices: [
      { text: "the peripheral route changed her attitude through attractive cues.", why: "No superficial cues were involved; she engaged in the behavior of arguing." },
      { text: "the mere exposure effect made the topic familiar.", why: "The change came from acting against her attitude, not mere repeated exposure." },
      { text: "informational social influence corrected her facts.", why: "No group provided information; she persuaded herself through her own behavior." },
      { text: "acting against her original attitude created dissonance she reduced by shifting the attitude.", correct: true, why: "Advocating a counter-attitudinal position creates dissonance, often resolved by changing the attitude to match the behavior." }
    ],
    keyConcept: "Counter-attitudinal behavior and dissonance"
  },
  {
    id: "4.2-8", topic: "4.2", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants to show that the central route works better than the peripheral route for a highly involved audience. The best design would compare persuasion when messages vary in",
    stimulus: null,
    choices: [
      { text: "argument quality (strong vs. weak) for people who care deeply about the issue.", correct: true, why: "The central route predicts that argument quality matters most for a motivated audience, so varying argument strength tests it directly." },
      { text: "background music only, with no change in argument content.", why: "Varying only a peripheral cue cannot demonstrate the central route's reliance on argument quality." },
      { text: "the attractiveness of the speaker only.", why: "Speaker attractiveness is a peripheral cue, so it does not isolate central-route processing." },
      { text: "the color of the pamphlet.", why: "Pamphlet color is an incidental cue irrelevant to argument strength." }
    ],
    keyConcept: "Operationalizing central vs. peripheral persuasion"
  },
  {
    id: "4.2-9", topic: "4.2", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "To measure attitudes people may not consciously report, a researcher records how quickly participants pair group images with positive versus negative words. This reaction-time method is designed to capture",
    stimulus: null,
    choices: [
      { text: "explicit attitudes through direct self-report.", why: "Reaction times are indirect; self-report captures explicit attitudes, which this method deliberately bypasses." },
      { text: "implicit attitudes that operate automatically.", correct: true, why: "Reaction-time pairing tasks are meant to reveal automatic, implicit attitudes outside conscious control." },
      { text: "the foot-in-the-door phenomenon.", why: "That is a compliance technique, not an attitude-measurement method." },
      { text: "the participant's locus of control.", why: "Locus of control is a belief about outcomes, not an implicit group attitude." }
    ],
    keyConcept: "Measuring implicit attitudes with reaction time"
  },
  {
    id: "4.2-10", topic: "4.2", unit: 4, practice: 2, difficulty: "Difficult",
    stem: "In a study, people who felt they freely chose to write essays against their own view showed more attitude change than those who were simply ordered to write them. Which conclusion about cognitive dissonance is best supported?",
    stimulus: null,
    choices: [
      { text: "Attitude change requires a large external reward.", why: "Dissonance research shows the opposite — smaller justification tends to produce MORE change." },
      { text: "Being ordered to act produces the most dissonance.", why: "Perceived choice, not coercion, heightens dissonance and thus attitude change." },
      { text: "Perceived free choice increases dissonance and therefore attitude change.", correct: true, why: "When people feel they freely chose the counter-attitudinal act, dissonance is greater, driving more attitude change." },
      { text: "Dissonance only occurs in group settings.", why: "Dissonance is an individual, internal state, not limited to groups." }
    ],
    keyConcept: "Perceived choice amplifies dissonance"
  },
  {
    id: "4.2-11", topic: "4.2", unit: 4, practice: 3, difficulty: "Moderate",
    stem: "The graph shows average attitude change under four conditions that vary the strength of a message's arguments and the audience's involvement. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Average attitude change (0-10) by argument strength and audience involvement",
      categories: ["Strong args, high involve", "Weak args, high involve", "Strong args, low involve", "Weak args, low involve"],
      values: [8.1, 3.2, 5.0, 4.6],
      yLabel: "Attitude change (0-10)", max: 10
    },
    choices: [
      { text: "Weak arguments always persuade better than strong ones.", why: "Under high involvement, strong arguments (8.1) far outperformed weak ones (3.2), so this is false." },
      { text: "For highly involved audiences, argument strength mattered a lot; for low-involvement audiences, it mattered little.", correct: true, why: "High-involvement change swings widely with argument quality (8.1 vs. 3.2), but low-involvement change is similar (5.0 vs. 4.6) — the central/peripheral pattern." },
      { text: "Involvement had no effect on how arguments worked.", why: "Argument quality strongly affected the high-involvement groups but barely the low-involvement ones, so involvement clearly mattered." },
      { text: "No condition produced any attitude change.", why: "Every bar shows change above zero, with the top bar at 8.1." }
    ],
    keyConcept: "Interpreting persuasion data (central vs. peripheral route)"
  }
];

window.APSYCH.questions["4.3"] = [
  {
    id: "4.3-1", topic: "4.3", unit: 4, practice: 1, difficulty: "Easy",
    stem: "In a classic experiment, participants judged line lengths and often gave an obviously wrong answer just because everyone else in the group did. This demonstrates",
    stimulus: null,
    choices: [
      { text: "obedience to authority.", why: "No authority ordered them; they matched peers, which is conformity, not obedience." },
      { text: "the bystander effect.", why: "The bystander effect is about failing to help, not agreeing with a group's wrong judgment." },
      { text: "conformity.", correct: true, why: "Adjusting one's answer to match a group standard, even against the evidence, is conformity (Asch)." },
      { text: "social facilitation.", why: "Social facilitation is improved performance on easy tasks with others present, not yielding to a wrong majority." }
    ],
    keyConcept: "Conformity (Asch)"
  },
  {
    id: "4.3-2", topic: "4.3", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Nadia laughs at a joke she did not find funny because everyone around her is laughing and she does not want to seem out of place. Her conformity is driven by",
    stimulus: null,
    choices: [
      { text: "normative social influence.", correct: true, why: "Going along to gain acceptance and avoid standing out is normative social influence." },
      { text: "informational social influence.", why: "Informational influence is assuming others know something you do not; she conformed to fit in, not to be correct." },
      { text: "deindividuation.", why: "Deindividuation is losing self-restraint in an anonymous crowd, not laughing to fit in." },
      { text: "diffusion of responsibility.", why: "That concerns feeling less responsible to help when others are present, unrelated to laughing along." }
    ],
    keyConcept: "Normative social influence"
  },
  {
    id: "4.3-3", topic: "4.3", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Unsure which fork to use at a formal dinner, Sam watches the other guests and copies them, assuming they know the correct etiquette. Sam's conformity reflects",
    stimulus: null,
    choices: [
      { text: "normative social influence.", why: "Normative influence is about fitting in socially; Sam is trying to be correct, not merely accepted." },
      { text: "informational social influence.", correct: true, why: "Relying on others as a source of accurate information in an ambiguous situation is informational social influence." },
      { text: "the self-serving bias.", why: "That is crediting one's successes and blaming failures externally, unrelated to copying dinner etiquette." },
      { text: "groupthink.", why: "Groupthink is a decision-making group suppressing dissent, not one person copying etiquette." }
    ],
    keyConcept: "Informational social influence"
  },
  {
    id: "4.3-4", topic: "4.3", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "In Milgram's obedience experiments, the proportion of participants delivering the maximum shock was highest when",
    stimulus: null,
    choices: [
      { text: "the learner was in the same room and clearly visible.", why: "Obedience DECREASED when the victim was closer and more visible." },
      { text: "participants first watched another teacher refuse to continue.", why: "A defiant model sharply REDUCED obedience." },
      { text: "the experimenter gave orders by telephone from far away.", why: "Obedience dropped when the authority was remote rather than present." },
      { text: "the experimenter was present, authoritative, and close by.", correct: true, why: "Obedience was highest with a legitimate authority physically present issuing the commands." }
    ],
    keyConcept: "Conditions that increase obedience (Milgram)"
  },
  {
    id: "4.3-5", topic: "4.3", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "On a group project where only one combined grade is given, Tomas puts in noticeably less effort than he would on a solo assignment. This illustrates",
    stimulus: null,
    choices: [
      { text: "social facilitation.", why: "Social facilitation is doing BETTER on easy tasks when observed, the opposite of slacking in a group." },
      { text: "deindividuation.", why: "Deindividuation is losing self-restraint in an anonymous crowd, not reduced effort in pooled work." },
      { text: "social loafing.", correct: true, why: "Exerting less individual effort when contributions are pooled and hidden is social loafing." },
      { text: "groupthink.", why: "Groupthink concerns suppressing dissent for consensus, not reduced effort." }
    ],
    keyConcept: "Social loafing"
  },
  {
    id: "4.3-6", topic: "4.3", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "Wearing identical masks at night, members of a crowd commit acts of vandalism that none of them would do alone. Their loss of restraint under anonymity and group arousal best illustrates",
    stimulus: null,
    choices: [
      { text: "deindividuation.", correct: true, why: "Losing self-awareness and self-restraint amid anonymity and group arousal is deindividuation." },
      { text: "social facilitation.", why: "Social facilitation is enhanced performance on easy tasks when observed, not anonymous mob behavior." },
      { text: "the mere exposure effect.", why: "That is liking through familiarity, unrelated to a loss of restraint in a crowd." },
      { text: "informational social influence.", why: "The crowd is not looking to others for correct information; they have lost self-restraint through anonymity." }
    ],
    keyConcept: "Deindividuation"
  },
  {
    id: "4.3-7", topic: "4.3", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "A manager privately dislikes people from a certain region (an attitude) and also refuses to hire any of them (a behavior). The refusal to hire specifically illustrates",
    stimulus: null,
    choices: [
      { text: "a stereotype.", why: "A stereotype is a generalized belief about a group, not the act of refusing to hire." },
      { text: "in-group bias.", why: "In-group bias is favoring one's own group; the item highlights a discriminatory action against an out-group." },
      { text: "prejudice.", why: "Prejudice is the unjustified ATTITUDE (the dislike), not the hiring behavior." },
      { text: "discrimination.", correct: true, why: "Unjustified negative BEHAVIOR toward a group, such as refusing to hire them, is discrimination." }
    ],
    keyConcept: "Discrimination (behavior) vs. prejudice (attitude)"
  },
  {
    id: "4.3-8", topic: "4.3", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "A committee keeps making poor decisions because members suppress doubts to preserve group harmony. Which change would most directly reduce groupthink?",
    stimulus: null,
    choices: [
      { text: "Emphasize reaching unanimous agreement as quickly as possible.", why: "Pushing for fast unanimity worsens groupthink by further discouraging dissent." },
      { text: "Assign a member to voice objections as a devil's advocate and invite outside critique.", correct: true, why: "Deliberately encouraging dissent and outside input counteracts the suppression of doubts that drives groupthink." },
      { text: "Have the highest-status leader state a firm opinion first.", why: "A leader stating a strong opinion early pressures members to conform, increasing groupthink." },
      { text: "Reduce the time available for discussion.", why: "Less discussion time limits critical evaluation, making groupthink more likely, not less." }
    ],
    keyConcept: "Reducing groupthink"
  },
  {
    id: "4.3-9", topic: "4.3", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "Researchers stage an emergency and vary how many bystanders are present to test the bystander effect. The predicted result is that a given person is LEAST likely to help when",
    stimulus: null,
    choices: [
      { text: "many other bystanders are present.", correct: true, why: "The bystander effect predicts that as the number of bystanders grows, each individual is less likely to help (diffusion of responsibility)." },
      { text: "they are the only person present.", why: "A lone bystander is MOST likely to help, since responsibility is not diffused." },
      { text: "the victim is a close friend.", why: "Helping a friend is more likely, and this does not isolate the number-of-bystanders variable." },
      { text: "they happen to have an internal locus of control.", why: "Locus of control is not the manipulated variable; the study varies the number of bystanders." }
    ],
    keyConcept: "Bystander effect and diffusion of responsibility"
  },
  {
    id: "4.3-10", topic: "4.3", unit: 4, practice: 3, difficulty: "Difficult",
    stem: "The table shows the percentage of participants who obeyed to the maximum shock across variations of Milgram's study. Which conclusion is best supported?",
    stimulus: {
      type: "table",
      caption: "Percent fully obedient by experimental condition",
      headers: ["Condition", "% fully obedient"],
      rows: [["Experimenter present in the room", "65"], ["Experimenter gives orders by phone", "23"], ["Learner in the same room as teacher", "40"], ["Teacher must force learner's hand onto a plate", "30"]],
      rowHeaders: true
    },
    choices: [
      { text: "Obedience was essentially unaffected by the situation.", why: "The rates range from 23% to 65%, so the situation clearly mattered." },
      { text: "Obedience increased when the experimenter left the room.", why: "Obedience dropped to 23% when orders came by phone (experimenter absent), so it decreased." },
      { text: "Obedience was highest when the authority figure was physically present.", correct: true, why: "The 65% rate with the experimenter in the room is the highest, showing that proximity of authority raises obedience." },
      { text: "Bringing the learner closer increased obedience.", why: "Obedience fell (to 40% and then 30%) as the learner became closer and more real, not increased." }
    ],
    keyConcept: "Situational factors in obedience (Milgram)"
  },
  {
    id: "4.3-11", topic: "4.3", unit: 4, practice: 3, difficulty: "Moderate",
    stem: "The graph shows the percentage of trials on which participants conformed as the size of the unanimous majority increased. Which statement is best supported?",
    stimulus: {
      type: "bars",
      caption: "Conformity rate (%) by number of confederates in the unanimous majority",
      categories: ["1", "2", "3", "4", "6"],
      values: [4, 14, 33, 35, 36],
      yLabel: "Conformity (%)", max: 100
    },
    choices: [
      { text: "Conformity fell steadily as the majority grew.", why: "Conformity ROSE from 4% to about 36%, not fell." },
      { text: "Conformity rose as the majority grew from 1 to 3, then leveled off.", correct: true, why: "The rate climbs sharply from 4% to 33% by three confederates, then plateaus around 35-36%." },
      { text: "Conformity was identical regardless of majority size.", why: "The values range from 4% to 36%, so they are not identical." },
      { text: "A majority of one produced the highest conformity.", why: "One confederate produced the lowest conformity (4%), not the highest." }
    ],
    keyConcept: "Interpreting conformity data by group size"
  }
];

window.APSYCH.questions["4.4"] = [
  {
    id: "4.4-1", topic: "4.4", unit: 4, practice: 1, difficulty: "Easy",
    stem: "According to Freud, the part of personality that operates on the pleasure principle and demands immediate gratification is the",
    stimulus: null,
    choices: [
      { text: "superego.", why: "The superego is the moral conscience, restraining impulses, not demanding immediate gratification." },
      { text: "id.", correct: true, why: "The id runs on the pleasure principle and seeks immediate satisfaction of impulses." },
      { text: "ego.", why: "The ego is the realistic mediator operating on the reality principle, not the pleasure principle." },
      { text: "self-concept.", why: "Self-concept is a humanistic idea about how one views oneself, not a Freudian structure." }
    ],
    keyConcept: "The id and the pleasure principle"
  },
  {
    id: "4.4-2", topic: "4.4", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "In Freud's model, the largely conscious part of personality that balances the demands of the id and superego against reality is the",
    stimulus: null,
    choices: [
      { text: "id.", why: "The id is the impulsive, unconscious source of desires, not the realistic mediator." },
      { text: "superego.", why: "The superego supplies moral standards; it does not mediate with reality." },
      { text: "ego.", correct: true, why: "The ego operates on the reality principle, negotiating between the id's urges and the superego's morals." },
      { text: "unconscious drive.", why: "That is a general concept, not the specific mediating structure Freud called the ego." }
    ],
    keyConcept: "The ego and the reality principle"
  },
  {
    id: "4.4-3", topic: "4.4", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "A person who survived a serious car accident cannot recall any details of the traumatic event, which seem pushed out of awareness. In Freudian terms, this best illustrates",
    stimulus: null,
    choices: [
      { text: "repression.", correct: true, why: "Repression is the defense mechanism that banishes anxiety-arousing memories from conscious awareness." },
      { text: "projection.", why: "Projection attributes one's own unacceptable impulses to others, not forgetting a trauma." },
      { text: "self-actualization.", why: "That is the humanistic drive to fulfill potential, unrelated to a blocked traumatic memory." },
      { text: "regression.", why: "Regression is retreating to an earlier developmental stage, not simply forgetting a trauma." }
    ],
    keyConcept: "Repression as a defense mechanism"
  },
  {
    id: "4.4-4", topic: "4.4", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Gregor, who feels strong hostility toward a coworker, becomes convinced that the coworker actually hates him. This defense mechanism is",
    stimulus: null,
    choices: [
      { text: "displacement.", why: "Displacement redirects an impulse onto a safer target, not attributing one's own feeling to the other person." },
      { text: "denial.", why: "Denial refuses to acknowledge reality; Gregor is misattributing his feeling, not denying it exists." },
      { text: "regression.", why: "Regression is reverting to childlike behavior, not projecting hostility onto someone else." },
      { text: "projection.", correct: true, why: "Attributing one's own unacceptable hostility to someone else is projection." }
    ],
    keyConcept: "Projection"
  },
  {
    id: "4.4-5", topic: "4.4", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "After being criticized by her manager, Bianca goes home and snaps at her younger brother over something trivial. Redirecting her frustration onto a safer target illustrates",
    stimulus: null,
    choices: [
      { text: "projection.", why: "Projection is seeing your own impulse in others, not redirecting anger onto a substitute target." },
      { text: "displacement.", correct: true, why: "Displacement redirects an impulse from a threatening source (the manager) onto a safer target (the brother)." },
      { text: "reaction formation.", why: "Reaction formation expresses the opposite of one's true feelings, not redirecting anger." },
      { text: "unconditional positive regard.", why: "That is a humanistic concept about acceptance, unrelated to redirected anger." }
    ],
    keyConcept: "Displacement"
  },
  {
    id: "4.4-6", topic: "4.4", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "A humanistic psychologist would most likely explain a person's drive to master new skills and become \"all they can be\" in terms of",
    stimulus: null,
    choices: [
      { text: "the resolution of unconscious childhood conflicts.", why: "That is a psychodynamic, not humanistic, explanation." },
      { text: "reciprocal determinism among traits, behavior, and environment.", why: "That is the social-cognitive perspective, not the humanistic one." },
      { text: "the innate drive toward self-actualization.", correct: true, why: "Humanistic theory centers on the growth drive to fulfill one's unique potential, called self-actualization." },
      { text: "conditioned responses to rewards and punishments.", why: "That is a behaviorist account, not the humanistic emphasis on growth and free will." }
    ],
    keyConcept: "Self-actualization (humanistic)"
  },
  {
    id: "4.4-7", topic: "4.4", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Carl Rogers argued that people are most likely to develop a healthy self-concept when others offer them",
    stimulus: null,
    choices: [
      { text: "unconditional positive regard.", correct: true, why: "Rogers held that total, nonjudgmental acceptance (unconditional positive regard) fosters a healthy self-concept." },
      { text: "consistent punishment for mistakes.", why: "Punishment is a behaviorist tool and the opposite of Rogers's accepting climate." },
      { text: "interpretation of their unconscious conflicts.", why: "That is a psychodynamic technique, not Rogers's humanistic approach." },
      { text: "strong extrinsic rewards.", why: "External rewards are not the basis of Rogers's growth-promoting acceptance." }
    ],
    keyConcept: "Unconditional positive regard"
  },
  {
    id: "4.4-8", topic: "4.4", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "According to Rogers, a person feels anxiety and low self-worth when there is a large gap between their real self and their ideal self, a state called",
    stimulus: null,
    choices: [
      { text: "self-actualization.", why: "Self-actualization is fulfilling one's potential, not a gap between the real and ideal self." },
      { text: "reciprocal determinism.", why: "That is a social-cognitive concept about mutual influence, not the self-ideal gap." },
      { text: "the pleasure principle.", why: "That is a Freudian id concept, unrelated to the real-ideal self gap." },
      { text: "incongruence.", correct: true, why: "A mismatch between the real self and the ideal self is incongruence; close alignment is congruence." }
    ],
    keyConcept: "Congruence vs. incongruence"
  },
  {
    id: "4.4-9", topic: "4.4", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "A clinician uses the Rorschach inkblot test to assess personality. A major methodological criticism of such projective tests is that they",
    stimulus: null,
    choices: [
      { text: "provide overly objective, numerical scores.", why: "Projective tests are criticized for being subjective, not overly objective." },
      { text: "tend to have low reliability and validity.", correct: true, why: "Different scorers often reach different conclusions (low reliability), and the tests poorly predict behavior (low validity)." },
      { text: "can only be scored by a computer.", why: "They are typically interpreted by clinicians, and the criticism is subjectivity, not computer scoring." },
      { text: "measure the Big Five traits directly.", why: "The Big Five are measured by objective inventories, not projective inkblots." }
    ],
    keyConcept: "Reliability and validity of projective tests"
  },
  {
    id: "4.4-10", topic: "4.4", unit: 4, practice: 2, difficulty: "Difficult",
    stem: "A researcher wants to study personality strictly from the humanistic perspective. Which research focus best fits that goal?",
    stimulus: null,
    choices: [
      { text: "Measuring reaction times to threatening words to reveal unconscious conflict.", why: "Probing unconscious conflict is the psychodynamic approach, not the humanistic one." },
      { text: "Correlating brain-wave patterns with impulsive behavior.", why: "That is a biological approach, not humanistic." },
      { text: "Interviewing people about their self-concept and their strivings toward personal growth.", correct: true, why: "Focusing on conscious self-concept and growth toward one's potential is squarely humanistic." },
      { text: "Counting how often rewards increase a target behavior.", why: "That is a behaviorist focus on reinforcement, not humanistic growth." }
    ],
    keyConcept: "Identifying the humanistic perspective"
  },
  {
    id: "4.4-11", topic: "4.4", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "A common scientific criticism of Freud's psychodynamic theory is that many of its central concepts, such as unconscious conflict, are",
    stimulus: null,
    choices: [
      { text: "difficult to test or falsify empirically.", correct: true, why: "A key critique is that unconscious constructs are hard to operationalize, test, or falsify scientifically." },
      { text: "based entirely on controlled experiments.", why: "Freud's theory drew on case studies, not controlled experiments, which is itself part of the criticism." },
      { text: "too focused on objectively measurable traits.", why: "Objective trait measurement is the trait perspective's strength, not a feature of psychodynamic theory." },
      { text: "purely about conscious decision-making.", why: "Psychodynamic theory emphasizes the UNconscious, so this mischaracterizes it." }
    ],
    keyConcept: "Scientific critique of psychodynamic theory"
  }
];

window.APSYCH.questions["4.5"] = [
  {
    id: "4.5-1", topic: "4.5", unit: 4, practice: 1, difficulty: "Easy",
    stem: "Kayla believes she is capable of learning to code if she practices, so she signs up for a challenging course and persists through setbacks. Her belief in her own capability at this task is called",
    stimulus: null,
    choices: [
      { text: "external locus of control.", why: "An external locus is believing outside forces control outcomes, the opposite of her confidence in her own ability." },
      { text: "self-efficacy.", correct: true, why: "Self-efficacy is one's belief in the capability to succeed at a specific task, which drives effort and persistence." },
      { text: "self-actualization.", why: "Self-actualization is fulfilling one's overall potential, not task-specific confidence." },
      { text: "the id.", why: "The id is a Freudian impulse structure, unrelated to task confidence." }
    ],
    keyConcept: "Self-efficacy"
  },
  {
    id: "4.5-2", topic: "4.5", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Bandura noted that an outgoing person seeks out social events (behavior), which places them in lively settings (environment), which further strengthens their sociability (a personal trait). This mutual influence is called",
    stimulus: null,
    choices: [
      { text: "unconditional positive regard.", why: "That is a humanistic concept about acceptance, not mutual causation among factors." },
      { text: "the fundamental attribution error.", why: "That is an attribution bias, not the interaction of person, behavior, and environment." },
      { text: "reciprocal determinism.", correct: true, why: "The two-way influence among personal factors, behavior, and environment is Bandura's reciprocal determinism." },
      { text: "factor analysis.", why: "Factor analysis is a statistical method for finding trait clusters, not a model of mutual influence." }
    ],
    keyConcept: "Reciprocal determinism"
  },
  {
    id: "4.5-3", topic: "4.5", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Renaldo is highly organized, dependable, and disciplined, always finishing tasks early. On the Big Five, he would score high in",
    stimulus: null,
    choices: [
      { text: "conscientiousness.", correct: true, why: "Conscientiousness captures organization, dependability, and self-discipline." },
      { text: "neuroticism.", why: "Neuroticism reflects emotional instability and anxiety, not organization and discipline." },
      { text: "openness.", why: "Openness reflects curiosity and imagination, not orderliness and reliability." },
      { text: "agreeableness.", why: "Agreeableness reflects warmth and cooperation, not organization." }
    ],
    keyConcept: "Big Five: conscientiousness"
  },
  {
    id: "4.5-4", topic: "4.5", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Sofia gains energy from being around people, is talkative and assertive, and loves large gatherings. She scores high in the Big Five dimension of",
    stimulus: null,
    choices: [
      { text: "neuroticism.", why: "Neuroticism is emotional instability, not sociability and assertiveness." },
      { text: "openness.", why: "Openness reflects curiosity and imagination, not drawing energy from people." },
      { text: "conscientiousness.", why: "Conscientiousness is about discipline and organization, not sociability." },
      { text: "extraversion.", correct: true, why: "Extraversion captures sociability, assertiveness, and gaining energy from others." }
    ],
    keyConcept: "Big Five: extraversion"
  },
  {
    id: "4.5-5", topic: "4.5", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "A key advantage of the Big Five trait model over older 'type' theories is that the Big Five",
    stimulus: null,
    choices: [
      { text: "sorts everyone into one of a few fixed categories.", why: "That describes type theories, which the Big Five was designed to improve upon." },
      { text: "describes each person along continuous dimensions rather than rigid categories.", correct: true, why: "The Big Five treats traits as continua on which people vary by degree, unlike either/or type theories." },
      { text: "relies on interpreting unconscious conflicts.", why: "That is psychodynamic assessment, not the trait approach." },
      { text: "ignores measurement entirely.", why: "The Big Five is built on objective measurement, not the absence of it." }
    ],
    keyConcept: "Trait dimensions vs. type categories"
  },
  {
    id: "4.5-6", topic: "4.5", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "Darius has high overall self-worth but doubts he can specifically pass an advanced calculus exam. This combination shows that self-efficacy",
    stimulus: null,
    choices: [
      { text: "is identical to self-esteem.", why: "The example shows they differ: high self-esteem can coexist with low task self-efficacy." },
      { text: "is the same as an external locus of control.", why: "Self-efficacy is task-specific confidence, not a general belief about who controls outcomes." },
      { text: "is task-specific and can differ from a person's general self-esteem.", correct: true, why: "Self-efficacy applies to specific tasks and can be low even when overall self-esteem is high." },
      { text: "cannot vary across situations.", why: "Self-efficacy varies by task and situation, which is exactly what the example shows." }
    ],
    keyConcept: "Self-efficacy vs. self-esteem"
  },
  {
    id: "4.5-7", topic: "4.5", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Someone who frequently feels anxious, moody, and emotionally reactive to minor stressors would score high on the Big Five dimension of",
    stimulus: null,
    choices: [
      { text: "neuroticism.", correct: true, why: "Neuroticism reflects the tendency toward anxiety, moodiness, and emotional instability." },
      { text: "agreeableness.", why: "Agreeableness reflects warmth and cooperativeness, not emotional reactivity." },
      { text: "conscientiousness.", why: "Conscientiousness is about discipline and dependability, not moodiness." },
      { text: "openness.", why: "Openness is about curiosity and imagination, not emotional instability." }
    ],
    keyConcept: "Big Five: neuroticism"
  },
  {
    id: "4.5-8", topic: "4.5", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "Trait researchers identified the Big Five dimensions using a statistical technique that groups together questionnaire items tending to be answered similarly. This technique is",
    stimulus: null,
    choices: [
      { text: "reciprocal determinism.", why: "That is a theoretical model of mutual influence, not a statistical grouping technique." },
      { text: "a projective test.", why: "Projective tests use ambiguous stimuli; they do not statistically cluster items." },
      { text: "random assignment.", why: "Random assignment is an experimental control method, not a way to identify trait clusters." },
      { text: "factor analysis.", correct: true, why: "Factor analysis identifies clusters of correlated items, revealing underlying trait dimensions." }
    ],
    keyConcept: "Factor analysis and trait identification"
  },
  {
    id: "4.5-9", topic: "4.5", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "Compared with projective tests, an objective personality inventory such as the MMPI is generally considered more",
    stimulus: null,
    choices: [
      { text: "revealing of unconscious wishes.", why: "Probing the unconscious is the aim of projective tests, not the strength of objective inventories." },
      { text: "reliable and standardized in scoring.", correct: true, why: "Objective inventories use standardized items and scoring, giving them higher reliability than subjective projective tests." },
      { text: "dependent on the scorer's personal interpretation.", why: "Reliance on interpretation is a weakness of projective tests, not of objective inventories." },
      { text: "useful for measuring reaction times.", why: "The MMPI is a self-report questionnaire, not a reaction-time measure." }
    ],
    keyConcept: "Objective inventories vs. projective tests"
  },
  {
    id: "4.5-10", topic: "4.5", unit: 4, practice: 2, difficulty: "Difficult",
    stem: "A critic argues that knowing someone's trait scores predicts their behavior only modestly because behavior also depends heavily on the situation. This argument is central to",
    stimulus: null,
    choices: [
      { text: "the pleasure principle.", why: "That is a Freudian id concept, unrelated to trait prediction." },
      { text: "the mere exposure effect.", why: "That is about familiarity and liking, not trait-behavior prediction." },
      { text: "the person-situation controversy.", correct: true, why: "The debate over whether traits or situations better predict behavior is the person-situation controversy." },
      { text: "the overjustification effect.", why: "That concerns rewards undermining intrinsic motivation, not trait prediction." }
    ],
    keyConcept: "Person-situation controversy"
  },
  {
    id: "4.5-11", topic: "4.5", unit: 4, practice: 3, difficulty: "Moderate",
    stem: "The table shows Big Five percentile scores for two employees. Which statement is best supported by the data?",
    stimulus: {
      type: "table",
      caption: "Big Five percentile scores for two employees",
      headers: ["Dimension", "Employee A", "Employee B"],
      rows: [["Openness", "82", "30"], ["Conscientiousness", "75", "78"], ["Extraversion", "40", "85"], ["Agreeableness", "60", "55"], ["Neuroticism", "35", "33"]],
      rowHeaders: true
    },
    choices: [
      { text: "Employee B is far more extraverted than Employee A, while their conscientiousness is similar.", correct: true, why: "Extraversion is 85 vs. 40 (much higher for B), while conscientiousness is close (78 vs. 75)." },
      { text: "Employee A is much more neurotic than Employee B.", why: "Their neuroticism scores are nearly equal (35 vs. 33), so A is not clearly more neurotic." },
      { text: "Employee B is more open to new experiences than Employee A.", why: "Openness is 30 for B versus 82 for A, so A is more open, not B." },
      { text: "The two employees are essentially identical across all five traits.", why: "They differ sharply on openness and extraversion, so they are not identical." }
    ],
    keyConcept: "Interpreting a Big Five trait profile"
  }
];

window.APSYCH.questions["4.6"] = [
  {
    id: "4.6-1", topic: "4.6", unit: 4, practice: 1, difficulty: "Easy",
    stem: "Feeling thirsty, Malik gets up to drink water, which relieves the unpleasant internal tension. This behavior is best explained by",
    stimulus: null,
    choices: [
      { text: "arousal theory.", why: "Arousal theory is about seeking optimal stimulation, not reducing a physiological need like thirst." },
      { text: "drive-reduction theory.", correct: true, why: "A need (dehydration) creates a drive that motivates behavior to restore homeostasis — drive-reduction theory." },
      { text: "the overjustification effect.", why: "That is about rewards undermining intrinsic interest, unrelated to thirst." },
      { text: "extrinsic motivation.", why: "Drinking to relieve thirst is driven by an internal need, not an external reward." }
    ],
    keyConcept: "Drive-reduction theory and homeostasis"
  },
  {
    id: "4.6-2", topic: "4.6", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Even when all her biological needs are met, Elena seeks out roller coasters and rock climbing for the thrill. This is best explained by",
    stimulus: null,
    choices: [
      { text: "drive-reduction theory.", why: "Drive-reduction explains reducing needs; Elena has no unmet need and instead seeks stimulation." },
      { text: "the pleasure principle of the id.", why: "That is a Freudian personality concept, not a motivation theory about optimal arousal." },
      { text: "arousal theory.", correct: true, why: "Arousal theory says people are motivated to seek an optimal level of stimulation, even without any deficit." },
      { text: "cognitive dissonance.", why: "Dissonance is tension from inconsistent attitudes and behavior, not thrill-seeking." }
    ],
    keyConcept: "Arousal theory"
  },
  {
    id: "4.6-3", topic: "4.6", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "A musician performs best with a moderate level of nervous energy; when too calm she is flat, and when too anxious she fumbles. This inverted-U relationship reflects",
    stimulus: null,
    choices: [
      { text: "drive-reduction theory.", why: "This is about arousal and performance, not reducing a physiological need." },
      { text: "the overjustification effect.", why: "That concerns rewards reducing intrinsic interest, not arousal and performance." },
      { text: "an approach-avoidance conflict.", why: "No single goal with both attractive and unattractive features is described." },
      { text: "the Yerkes-Dodson law.", correct: true, why: "Performance peaking at moderate arousal and dropping at the extremes is the Yerkes-Dodson law." }
    ],
    keyConcept: "Yerkes-Dodson law"
  },
  {
    id: "4.6-4", topic: "4.6", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Jonah spends hours painting simply because he finds it deeply satisfying, with no interest in selling or showing his work. His motivation is",
    stimulus: null,
    choices: [
      { text: "intrinsic.", correct: true, why: "Doing an activity for its own inherent satisfaction, with no external reward sought, is intrinsic motivation." },
      { text: "extrinsic.", why: "Extrinsic motivation is driven by external rewards or avoiding punishment, which Jonah is not pursuing." },
      { text: "based on homeostasis.", why: "Homeostasis concerns restoring physiological balance, not enjoying painting." },
      { text: "an example of the bystander effect.", why: "The bystander effect is about helping behavior, unrelated to painting for enjoyment." }
    ],
    keyConcept: "Intrinsic motivation"
  },
  {
    id: "4.6-5", topic: "4.6", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Priyanka studies hard mainly to earn a scholarship and to avoid disappointing her parents. Her motivation is primarily",
    stimulus: null,
    choices: [
      { text: "intrinsic.", why: "Intrinsic motivation is for the activity's own sake; she is driven by outside rewards and pressures." },
      { text: "extrinsic.", correct: true, why: "Studying for external rewards (a scholarship) and to avoid negative outcomes is extrinsic motivation." },
      { text: "self-actualization.", why: "Self-actualization is fulfilling one's potential, not studying for a scholarship." },
      { text: "an avoidance-avoidance conflict.", why: "No choice between two undesirable options is described." }
    ],
    keyConcept: "Extrinsic motivation"
  },
  {
    id: "4.6-6", topic: "4.6", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "Children who already loved drawing were given a prize each time they drew. After the prizes stopped, they drew far less than before. This best illustrates",
    stimulus: null,
    choices: [
      { text: "drive-reduction theory.", why: "No physiological need is being reduced; the change involves motivation for a hobby." },
      { text: "the Yerkes-Dodson law.", why: "That concerns arousal and performance, not rewards reducing interest." },
      { text: "the overjustification effect.", correct: true, why: "Rewarding an already intrinsically enjoyed activity reduced later intrinsic interest — the overjustification effect." },
      { text: "homeostasis.", why: "Homeostasis is physiological balance, unrelated to reduced drawing after rewards ended." }
    ],
    keyConcept: "Overjustification effect"
  },
  {
    id: "4.6-7", topic: "4.6", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "According to Maslow's hierarchy of needs, a person struggling to afford food and shelter is unlikely to focus on pursuing esteem or self-actualization because",
    stimulus: null,
    choices: [
      { text: "esteem needs are the most basic of all.", why: "Esteem needs sit higher in the hierarchy, not at the base." },
      { text: "self-actualization must be achieved first.", why: "Self-actualization is the top of the pyramid, reached last, not first." },
      { text: "physiological and safety needs are unimportant.", why: "Those needs are actually the most fundamental, the opposite of unimportant." },
      { text: "lower-level physiological and safety needs generally must be met first.", correct: true, why: "Maslow proposed that basic needs like food and safety usually take priority before higher needs." }
    ],
    keyConcept: "Maslow's hierarchy of needs"
  },
  {
    id: "4.6-8", topic: "4.6", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Devi is offered a prestigious job that pays well but would require moving far from everyone she loves. Feeling both drawn to and repelled by this single option, she is experiencing",
    stimulus: null,
    choices: [
      { text: "an approach-avoidance conflict.", correct: true, why: "One goal with both attractive and unattractive features produces an approach-avoidance conflict." },
      { text: "an approach-approach conflict.", why: "That is a choice between two desirable options, but here there is one option with mixed features." },
      { text: "an avoidance-avoidance conflict.", why: "That is a choice between two undesirable options, not one appealing-but-costly goal." },
      { text: "cognitive dissonance.", why: "Dissonance is tension from inconsistent attitudes and behavior, not a single mixed-feelings goal." }
    ],
    keyConcept: "Approach-avoidance conflict"
  },
  {
    id: "4.6-9", topic: "4.6", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "To test whether rewards can undermine intrinsic motivation, a researcher should compare later free-choice play between children who",
    stimulus: null,
    choices: [
      { text: "were never allowed to do the activity at all.", why: "If they never did the activity, there is no intrinsic interest to undermine or measure." },
      { text: "were rewarded for an activity they already enjoyed versus those who were not rewarded.", correct: true, why: "Comparing rewarded and non-rewarded groups on an initially enjoyed activity isolates the reward's effect on intrinsic motivation." },
      { text: "differ in age by several years.", why: "Confounding the groups by age would obscure the effect of the reward itself." },
      { text: "were all given the same large reward.", why: "Without a non-rewarded comparison group, the effect of the reward cannot be detected." }
    ],
    keyConcept: "Designing an overjustification study"
  },
  {
    id: "4.6-10", topic: "4.6", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "A researcher predicts that performance on a difficult task will be best at a moderate level of arousal. To test this, the best approach is to",
    stimulus: null,
    choices: [
      { text: "give every participant the same high level of arousal.", why: "Without varying arousal, the inverted-U relationship cannot be observed." },
      { text: "measure only how much participants like the task.", why: "Liking is not performance; the hypothesis concerns performance across arousal levels." },
      { text: "vary arousal across groups (low, moderate, high) and compare task performance.", correct: true, why: "Manipulating arousal across levels and measuring performance directly tests the predicted inverted-U (Yerkes-Dodson)." },
      { text: "reward participants after every correct answer.", why: "Adding rewards introduces a confound and does not test the arousal-performance curve." }
    ],
    keyConcept: "Testing the arousal-performance relationship"
  },
  {
    id: "4.6-11", topic: "4.6", unit: 4, practice: 3, difficulty: "Difficult",
    stem: "The scatterplot shows performance on a difficult task at different arousal levels. The pattern best supports which conclusion?",
    stimulus: {
      type: "scatter",
      caption: "Task performance by arousal level on a difficult task",
      points: [[1, 3], [2, 5], [3, 7], [4, 9], [5, 7], [6, 5], [7, 2]],
      xLabel: "Arousal level (low to high)", yLabel: "Performance score",
      alt: "Performance rises with arousal to a peak near the middle, then declines as arousal continues to increase."
    },
    choices: [
      { text: "Performance rises steadily as arousal increases.", why: "Performance rises and then FALLS, forming an inverted U rather than rising steadily." },
      { text: "Performance is unrelated to arousal.", why: "There is a clear, systematic pattern, so performance is related to arousal." },
      { text: "The lowest arousal produced the best performance.", why: "The lowest arousal (score 3) is far below the mid-range peak (score 9)." },
      { text: "Performance peaks at a moderate arousal level and declines at higher levels.", correct: true, why: "The points climb to a peak near the middle and then decline — the inverted-U of the Yerkes-Dodson law." }
    ],
    keyConcept: "Interpreting the arousal-performance curve"
  }
];

window.APSYCH.questions["4.7"] = [
  {
    id: "4.7-1", topic: "4.7", unit: 4, practice: 1, difficulty: "Easy",
    stem: "\"I notice my heart pounding and my hands trembling, and from that I realize I am afraid.\" This sequence, in which the bodily response comes first and the emotion is our reading of it, matches the",
    stimulus: null,
    choices: [
      { text: "Cannon-Bard theory.", why: "Cannon-Bard says arousal and emotion occur at the same time, not that the emotion follows from noticing arousal." },
      { text: "James-Lange theory.", correct: true, why: "James-Lange holds that physiological arousal occurs first and the felt emotion is our awareness of it." },
      { text: "Schachter-Singer two-factor theory.", why: "Two-factor theory requires a cognitive label in addition to arousal, which this description does not emphasize." },
      { text: "facial feedback hypothesis.", why: "That concerns facial expressions influencing emotion, not general bodily arousal preceding emotion." }
    ],
    keyConcept: "James-Lange theory"
  },
  {
    id: "4.7-2", topic: "4.7", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "According to the Cannon-Bard theory, when you encounter a frightening stimulus, your racing heart and your conscious feeling of fear",
    stimulus: null,
    choices: [
      { text: "occur one after the other, with the arousal causing the fear.", why: "That sequential, arousal-first account is James-Lange, not Cannon-Bard." },
      { text: "require a cognitive label to become an emotion.", why: "That is the Schachter-Singer two-factor theory, not Cannon-Bard." },
      { text: "occur at the same time but independently.", correct: true, why: "Cannon-Bard holds that physiological arousal and the conscious emotion happen simultaneously and separately." },
      { text: "happen only after you consciously interpret the situation.", why: "Emphasizing interpretation first fits appraisal or two-factor theory, not Cannon-Bard." }
    ],
    keyConcept: "Cannon-Bard theory"
  },
  {
    id: "4.7-3", topic: "4.7", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Feeling physiologically aroused, Miguel looks around, decides the situation is dangerous, and labels his feeling as fear. This need for both arousal and an interpretation reflects the",
    stimulus: null,
    choices: [
      { text: "Schachter-Singer two-factor theory.", correct: true, why: "Two-factor theory says emotion arises from physiological arousal plus a cognitive label for that arousal." },
      { text: "James-Lange theory.", why: "James-Lange does not require a separate cognitive labeling step; the emotion is simply the reading of the body." },
      { text: "Cannon-Bard theory.", why: "Cannon-Bard has arousal and emotion occur simultaneously without a labeling step." },
      { text: "facial feedback hypothesis.", why: "That concerns facial muscles influencing emotion, not arousal plus interpretation." }
    ],
    keyConcept: "Schachter-Singer two-factor theory"
  },
  {
    id: "4.7-4", topic: "4.7", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "People who had just exercised and were still physically aroused later reported feeling MORE angry when provoked than people who had rested. A two-factor theorist would explain this because the exercisers",
    stimulus: null,
    choices: [
      { text: "had no physiological arousal to interpret.", why: "They were still aroused from exercise; that leftover arousal is central to the explanation." },
      { text: "relied only on facial feedback.", why: "The explanation involves misattributing arousal, not facial expressions." },
      { text: "experienced arousal and emotion completely independently.", why: "That is Cannon-Bard; two-factor theory says the label attaches to the existing arousal." },
      { text: "misattributed their leftover exercise arousal to the provocation and labeled it anger.", correct: true, why: "Two-factor theory predicts residual arousal gets relabeled by the current situation, intensifying the felt emotion." }
    ],
    keyConcept: "Misattribution of arousal (two-factor theory)"
  },
  {
    id: "4.7-5", topic: "4.7", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Participants forced to hold a smile-like expression rate cartoons as funnier than those forced into a frown-like expression. This supports the",
    stimulus: null,
    choices: [
      { text: "Cannon-Bard theory.", why: "Cannon-Bard concerns the timing of arousal and emotion, not facial expressions shaping feeling." },
      { text: "facial feedback hypothesis.", correct: true, why: "The facial feedback hypothesis holds that facial muscle movements can influence or intensify the emotion felt." },
      { text: "drive-reduction theory.", why: "That is a motivation theory about reducing needs, unrelated to facial expressions." },
      { text: "external locus of control.", why: "That is a belief about who controls outcomes, unrelated to facial feedback." }
    ],
    keyConcept: "Facial feedback hypothesis"
  },
  {
    id: "4.7-6", topic: "4.7", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "Research by Paul Ekman found that people across very different cultures can recognize facial expressions of basic emotions such as happiness, anger, and fear. This suggests that",
    stimulus: null,
    choices: [
      { text: "all emotional expression is entirely learned.", why: "Cross-cultural recognition suggests a biological, not entirely learned, basis for basic expressions." },
      { text: "emotions require spoken language to be understood.", why: "The expressions were recognized across languages, so language is not required." },
      { text: "some basic emotional expressions are universal.", correct: true, why: "Recognition of the same basic expressions across cultures indicates that they are universal." },
      { text: "display rules are identical in every culture.", why: "Display rules actually vary by culture; the universality is in recognizing basic expressions, not in display norms." }
    ],
    keyConcept: "Universal emotional expressions"
  },
  {
    id: "4.7-7", topic: "4.7", unit: 4, practice: 1, difficulty: "Moderate",
    stem: "In one culture people are expected to mask disappointment with a polite smile, while in another openly showing it is acceptable. These culturally specific norms for expressing emotion are called",
    stimulus: null,
    choices: [
      { text: "display rules.", correct: true, why: "Display rules are the culturally specific norms governing when and how emotions may be expressed." },
      { text: "the facial feedback hypothesis.", why: "That is about expressions influencing feelings, not cultural norms for showing emotion." },
      { text: "cognitive appraisal.", why: "Cognitive appraisal is interpreting a situation, not a cultural expression norm." },
      { text: "universal emotions.", why: "Universal emotions are recognized everywhere; display rules are what VARY across cultures." }
    ],
    keyConcept: "Display rules"
  },
  {
    id: "4.7-8", topic: "4.7", unit: 4, practice: 1, difficulty: "Difficult",
    stem: "Two people face the same tight deadline. One appraises it as an exciting challenge and feels energized; the other appraises it as a threat and feels anxious. Lazarus would say their differing emotions arise mainly from",
    stimulus: null,
    choices: [
      { text: "the strength of their physiological arousal alone.", why: "Lazarus emphasized interpretation; the same situation produced different emotions despite similar circumstances." },
      { text: "facial feedback from their expressions.", why: "The difference lies in how they interpret the deadline, not in their facial muscles." },
      { text: "an absence of any cognition.", why: "Lazarus stressed the presence of cognitive appraisal, not its absence." },
      { text: "their different cognitive appraisals of the situation.", correct: true, why: "Lazarus held that how one appraises a situation (challenge vs. threat) shapes the resulting emotion." }
    ],
    keyConcept: "Cognitive appraisal (Lazarus)"
  },
  {
    id: "4.7-9", topic: "4.7", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants evidence for the James-Lange idea that distinct bodily states underlie distinct emotions. The most supportive finding would be that",
    stimulus: null,
    choices: [
      { text: "all emotions produce exactly the same physiological arousal.", why: "Identical arousal for all emotions would UNDERMINE James-Lange, which ties specific bodily states to specific emotions." },
      { text: "different emotions are associated with measurably different patterns of bodily arousal.", correct: true, why: "Distinct physiological signatures for different emotions would support the James-Lange claim that emotion follows from bodily states." },
      { text: "emotions occur even when the body is completely still and unaroused.", why: "That would challenge James-Lange's reliance on bodily response." },
      { text: "cognitive labels alone create emotion without any arousal.", why: "That supports a cognitive account, not the bodily-response-first James-Lange theory." }
    ],
    keyConcept: "Evaluating evidence for James-Lange"
  },
  {
    id: "4.7-10", topic: "4.7", unit: 4, practice: 2, difficulty: "Difficult",
    stem: "In a study testing the two-factor theory, participants are injected with a stimulant (producing arousal) and placed with either a cheerful or an irritated companion. The two-factor prediction is that participants will",
    stimulus: null,
    choices: [
      { text: "feel the same emotion regardless of the companion.", why: "Two-factor theory predicts the cognitive context (the companion) shapes which emotion is felt, so they should differ." },
      { text: "feel no emotion at all because they are aroused.", why: "Arousal plus a context label should produce emotion, not none." },
      { text: "take on the emotion suggested by their companion's mood as they label their arousal.", correct: true, why: "Two-factor theory predicts people use the social context to label ambiguous arousal, so the companion's mood colors the emotion." },
      { text: "show emotions determined only by their facial expressions.", why: "That is the facial feedback hypothesis, not the two-factor manipulation of arousal plus context." }
    ],
    keyConcept: "Testing the two-factor theory of emotion"
  },
  {
    id: "4.7-11", topic: "4.7", unit: 4, practice: 2, difficulty: "Moderate",
    stem: "The clearest way to distinguish the Cannon-Bard theory from the James-Lange theory is that only Cannon-Bard claims that",
    stimulus: null,
    choices: [
      { text: "physiological arousal and the conscious emotion occur simultaneously.", correct: true, why: "Cannon-Bard's signature claim is simultaneity, whereas James-Lange says arousal comes first and causes the emotion." },
      { text: "a cognitive label is required for emotion.", why: "That is the two-factor theory's claim, not what distinguishes Cannon-Bard from James-Lange." },
      { text: "facial expressions cause emotions.", why: "That is the facial feedback hypothesis, not the Cannon-Bard/James-Lange distinction." },
      { text: "emotions are entirely learned through culture.", why: "Neither theory claims emotions are entirely cultural, so this does not distinguish them." }
    ],
    keyConcept: "Cannon-Bard vs. James-Lange"
  }
];
