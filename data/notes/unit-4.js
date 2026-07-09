/*
 * data/notes/unit-4.js — Study notes for Unit 4: Social Psychology and Personality.
 * Original explanatory content. LO/EK statements are paraphrased from the College Board
 * AP Psychology CED; LO letters and EK numbers follow the CED numbering convention.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.notes = window.APSYCH.notes || {};

window.APSYCH.notes["4.1"] = {
  topic: "4.1", unit: 4, title: "Attribution Theory and Person Perception",
  los: [
    {
      code: "4.1.A", text: "Explain how attribution theory describes the way people account for their own and others' behavior.",
      eks: [
        { code: "4.1.A.1", text: "Attribution theory holds that people explain behavior by crediting it to either dispositional or situational causes.", subs: [
          { code: "4.1.A.1.i", text: "A dispositional (internal) attribution locates the cause inside the person — their personality, ability, effort, or character." },
          { code: "4.1.A.1.ii", text: "A situational (external) attribution locates the cause in the circumstances — the environment, luck, or social pressure." }
        ] },
        { code: "4.1.A.2", text: "The fundamental attribution error is the tendency to overestimate dispositional causes and underestimate situational causes when explaining OTHER people's behavior." },
        { code: "4.1.A.3", text: "The actor-observer bias leads people to explain their own actions situationally but others' actions dispositionally; the self-serving bias leads people to credit their successes to disposition and blame their failures on the situation." }
      ]
    },
    {
      code: "4.1.B", text: "Explain how locus of control and explanatory style relate to behavior and mental processes.",
      eks: [
        { code: "4.1.B.1", text: "Locus of control is a person's general belief about who controls outcomes in their life.", subs: [
          { code: "4.1.B.1.i", text: "An internal locus of control is the belief that one's own choices and effort control outcomes." },
          { code: "4.1.B.1.ii", text: "An external locus of control is the belief that luck, fate, or powerful others control outcomes." }
        ] },
        { code: "4.1.B.2", text: "Explanatory style is a person's habitual way of explaining events: an optimistic style attributes setbacks to temporary, specific, external causes, while a pessimistic style attributes them to permanent, global, internal causes." }
      ]
    },
    {
      code: "4.1.C", text: "Explain how person perception shapes attitudes and behavior toward others.",
      eks: [
        { code: "4.1.C.1", text: "Person perception refers to the mental processes people use to form impressions of and beliefs about others." },
        { code: "4.1.C.2", text: "Social comparison is evaluating oneself by measuring against others; upward comparison is to those seen as better off and downward comparison is to those seen as worse off. Relative deprivation is the sense of being worse off compared to a reference group." },
        { code: "4.1.C.3", text: "The mere exposure effect (repeated exposure increases liking) and the self-fulfilling prophecy (an expectation elicits behavior that confirms it) both shape how people perceive and treat others." }
      ]
    }
  ],
  bigIdea: "<p>Whenever someone acts, we instantly build an explanation for <em>why</em>. <b>Attribution theory</b> says every explanation lands somewhere on a single dial between two poles: a <b>dispositional (internal)</b> cause — \"that's just who they are\" — or a <b>situational (external)</b> cause — \"anyone would act that way in that spot.\" The single most tested idea in this topic is that we systematically twist that dial. The <b>fundamental attribution error</b> is our habit of blaming <em>other</em> people's behavior on their character while ignoring the situation (the driver who cut you off is a jerk, not late for a hospital visit).</p>" +
    "<p>Two related biases round this out. The <b>actor-observer bias</b> flips the dial depending on who is acting: I failed the quiz because it was unfair (situational), but you failed because you're lazy (dispositional). The <b>self-serving bias</b> protects the ego: I take credit for my A (my brains) but blame the situation for my F (bad teacher). Whether people feel they steer their own outcomes at all is captured by <b>locus of control</b> — internal (\"I control my fate\") versus external (\"luck and fate control me\") — and by <b>explanatory style</b>, the optimistic-versus-pessimistic pattern in how we narrate setbacks. Finally, <b>person perception</b> — including <b>social comparison</b>, the <b>mere exposure effect</b>, and the <b>self-fulfilling prophecy</b> — describes how first impressions and expectations quietly steer how we treat people.</p>",
  vocab: [
    { term: "Attribution theory", def: "The idea that people explain others' behavior by attributing it to internal dispositions or external situations." },
    { term: "Dispositional attribution", def: "Explaining behavior as caused by the person's internal traits, personality, or effort." },
    { term: "Situational attribution", def: "Explaining behavior as caused by external circumstances or the environment." },
    { term: "Fundamental attribution error", def: "Overestimating disposition and underestimating the situation when explaining OTHERS' behavior." },
    { term: "Actor-observer bias", def: "Attributing one's own behavior to the situation while attributing others' behavior to their disposition." },
    { term: "Self-serving bias", def: "Crediting one's successes to internal factors and blaming failures on external factors, protecting self-esteem." },
    { term: "Internal locus of control", def: "The belief that one's own effort and choices determine outcomes." },
    { term: "External locus of control", def: "The belief that luck, fate, or outside forces determine outcomes." },
    { term: "Explanatory style", def: "A person's habitual optimistic or pessimistic way of interpreting good and bad events." },
    { term: "Social comparison", def: "Evaluating one's own abilities and opinions by comparing oneself to others (upward or downward)." },
    { term: "Relative deprivation", def: "The perception that one is worse off relative to a comparison group, which can breed discontent." },
    { term: "Mere exposure effect", def: "The tendency to develop a preference for people or things simply because they are familiar." },
    { term: "Self-fulfilling prophecy", def: "A belief or expectation that leads a person to act in ways that make the expectation come true." }
  ],
  researchers: [
    { name: "Fritz Heider", contribution: "Introduced attribution theory, framing everyday explanation as a choice between dispositional and situational causes." },
    { name: "Julian Rotter", contribution: "Developed the concept of locus of control (internal vs. external)." },
    { name: "Martin Seligman", contribution: "Linked pessimistic explanatory style to learned helplessness and optimistic style to resilience." }
  ],
  examples: [
    "A classmate stumbles through a presentation. Committing the fundamental attribution error, you think \"he's unprepared and awkward\" and never consider that his laptop just crashed and he was handed the slides that morning.",
    "After acing a test you tell yourself you're brilliant, but after bombing one you blame the confusing questions — the self-serving bias keeping your self-image intact."
  ],
  mnemonic: [
    { device: "Fundamental Attribution Error = \"blame the Person, forget the Place.\"", explain: "For others' behavior we default to the person (disposition) and overlook the place (situation)." },
    { device: "Self-serving = \"my Wins are Me, my Losses are Life.\"", explain: "Successes get internal credit; failures get external blame." },
    { device: "Internal locus = \"I'm in the driver's seat.\"", explain: "Internal control means you believe you steer your own outcomes; external means fate drives." }
  ],
  traps: [
    "Confusing the fundamental attribution error (about explaining OTHERS) with the self-serving bias (about protecting the SELF).",
    "Mixing up dispositional (internal, the person) and situational (external, the circumstances) attributions.",
    "Flipping internal and external locus of control — internal means YOU are in control, not that control comes from outside.",
    "Assuming the actor-observer bias and the fundamental attribution error are identical; the actor-observer bias specifically contrasts self versus other.",
    "Thinking the mere exposure effect requires positive interaction — mere familiarity alone increases liking."
  ],
  exclusions: [
    "You do not need formal covariation or correspondent-inference models of attribution; the dispositional-versus-situational distinction and the named biases are enough.",
    "Detailed measurement scales for locus of control are beyond the scope of the exam."
  ]
};

window.APSYCH.notes["4.2"] = {
  topic: "4.2", unit: 4, title: "Attitude Formation and Attitude Change",
  los: [
    {
      code: "4.2.A", text: "Explain how attitudes are formed and how they relate to behavior.",
      eks: [
        { code: "4.2.A.1", text: "An attitude is a set of feelings and beliefs that predisposes a person to respond in particular ways to objects, people, and events." },
        { code: "4.2.A.2", text: "Attitudes may be explicit (consciously held and reportable) or implicit (automatic and outside conscious awareness)." },
        { code: "4.2.A.3", text: "Attitudes are shaped by direct experience, socialization, and observation, and they predict behavior best when situational pressures are weak and the attitude is strong and specific." }
      ]
    },
    {
      code: "4.2.B", text: "Explain how persuasion and cognitive dissonance produce attitude change.",
      eks: [
        { code: "4.2.B.1", text: "The elaboration likelihood model describes two routes to persuasion.", subs: [
          { code: "4.2.B.1.i", text: "The central route persuades through the strength of evidence and logical argument and works best with a motivated, thoughtful audience." },
          { code: "4.2.B.1.ii", text: "The peripheral route persuades through incidental cues such as attractiveness, emotion, or source credibility rather than content." }
        ] },
        { code: "4.2.B.2", text: "Compliance strategies include the foot-in-the-door phenomenon (agreeing to a small request increases later agreement to a larger one) and the door-in-the-face technique (refusing a large request increases agreement to a smaller follow-up)." },
        { code: "4.2.B.3", text: "Cognitive dissonance theory holds that holding inconsistent attitudes and behaviors creates uncomfortable tension, which people reduce by changing an attitude to match the behavior." }
      ]
    }
  ],
  bigIdea: "<p>An <b>attitude</b> is a leaning — a bundle of feelings and beliefs that tilts you toward responding to something in a certain way. Attitudes can be <b>explicit</b> (you know them and can state them) or <b>implicit</b> (automatic, operating below awareness). A key nuance the exam loves: attitudes predict behavior only sometimes. When outside pressure is strong, behavior often wins out over privately held attitudes.</p>" +
    "<p>Changing attitudes is the art of <b>persuasion</b>. The <b>central route</b> works through solid arguments and evidence — persuading a careful, motivated listener with facts. The <b>peripheral route</b> bypasses the brain's front door and relies on surface cues: a celebrity endorser, a catchy jingle, or sheer repetition. Persuaders also exploit commitment with the <b>foot-in-the-door phenomenon</b> (get a small yes, then a big one) and the <b>door-in-the-face</b> technique (ask for the moon, then settle for what you actually wanted). The deepest source of self-persuasion is <b>cognitive dissonance</b>: when Leon Festinger's participants noticed a clash between what they did and what they believed, the tension pushed them to quietly change the attitude so it lined up with the behavior — \"I lied for only a dollar, so I guess the task really was interesting.\"</p>",
  vocab: [
    { term: "Attitude", def: "Feelings and beliefs that predispose a person to respond in particular ways to objects, people, and events." },
    { term: "Explicit attitude", def: "A consciously held, deliberately reportable attitude." },
    { term: "Implicit attitude", def: "An automatic attitude that operates outside conscious awareness." },
    { term: "Central route to persuasion", def: "Attitude change driven by careful attention to the strength of arguments and evidence." },
    { term: "Peripheral route to persuasion", def: "Attitude change driven by incidental cues such as attractiveness, emotion, or credibility rather than content." },
    { term: "Foot-in-the-door phenomenon", def: "The tendency for people who agree to a small request to later comply with a larger one." },
    { term: "Door-in-the-face technique", def: "Making a large request expected to be refused so that a smaller follow-up request is more likely accepted." },
    { term: "Cognitive dissonance", def: "The uncomfortable tension from holding inconsistent attitudes or acting against one's attitude, motivating attitude change." },
    { term: "Halo effect", def: "Letting one positive trait (such as attractiveness) color one's overall impression of a person." }
  ],
  researchers: [
    { name: "Leon Festinger", contribution: "Proposed cognitive dissonance theory, showing that people change attitudes to resolve the tension of acting against their beliefs." }
  ],
  examples: [
    "A charity asks you to \"just sign this petition\" (small request); a week later you readily agree to donate — the foot-in-the-door phenomenon exploiting your earlier small commitment.",
    "After volunteering for a boring study for very little pay, a participant later rates the study as enjoyable — reducing cognitive dissonance by changing the attitude to justify the poorly paid effort."
  ],
  mnemonic: [
    { device: "Central = Content; Peripheral = Packaging.", explain: "The central route persuades with the message's content; the peripheral route persuades with surface packaging like looks and emotion." },
    { device: "Foot-in-the-door = small yes opens the door to a big yes.", explain: "A small initial agreement makes a larger later request more likely to be accepted." },
    { device: "Dissonance = the itch you scratch by changing your mind.", explain: "The discomfort of attitude-behavior mismatch is relieved by shifting the attitude." }
  ],
  traps: [
    "Reversing the two routes: central relies on strong arguments; peripheral relies on superficial cues.",
    "Confusing foot-in-the-door (small THEN large) with door-in-the-face (large THEN small).",
    "Assuming attitudes always predict behavior — situational pressure can override a privately held attitude.",
    "Thinking cognitive dissonance changes the behavior; it usually changes the ATTITUDE to fit the behavior already done.",
    "Treating implicit attitudes as the same as explicit ones; implicit attitudes operate automatically, outside awareness."
  ],
  exclusions: [
    "You are not required to know specific measurement instruments for implicit attitudes.",
    "Detailed mathematical models of the elaboration likelihood model are beyond the scope; the two-route distinction is what matters."
  ]
};

window.APSYCH.notes["4.3"] = {
  topic: "4.3", unit: 4, title: "Psychology of Social Situations",
  los: [
    {
      code: "4.3.A", text: "Explain how social norms, conformity, and obedience influence behavior.",
      eks: [
        { code: "4.3.A.1", text: "Social norms are shared expectations about how members of a group should behave; conformity is adjusting one's behavior or thinking to match a group standard." },
        { code: "4.3.A.2", text: "Conformity is driven by normative social influence (the desire to be liked and accepted) and informational social influence (the desire to be correct by relying on others' knowledge)." },
        { code: "4.3.A.3", text: "Obedience is compliance with the commands of an authority figure; obedience rises when the authority is legitimate and nearby, when responsibility is diffused, and when there is no dissenting model." }
      ]
    },
    {
      code: "4.3.B", text: "Explain how the presence of others and group dynamics affect individual behavior.",
      eks: [
        { code: "4.3.B.1", text: "Social facilitation is improved performance on easy or well-learned tasks in the presence of others, while social loafing is reduced individual effort when working in a group." },
        { code: "4.3.B.2", text: "Deindividuation is the loss of self-awareness and self-restraint in group situations that foster arousal and anonymity." },
        { code: "4.3.B.3", text: "Group polarization strengthens a group's prevailing attitudes through discussion, and groupthink is the drive for harmony that overrides realistic appraisal of alternatives." }
      ]
    },
    {
      code: "4.3.C", text: "Explain how group membership and social situations shape helping and intergroup behavior.",
      eks: [
        { code: "4.3.C.1", text: "The bystander effect is the tendency for any given bystander to be less likely to help as the number of other bystanders increases, largely due to diffusion of responsibility. Prosocial behavior is voluntary behavior intended to help others." },
        { code: "4.3.C.2", text: "Prejudice is an unjustified attitude toward a group, discrimination is unjustified behavior toward a group, and stereotypes are generalized beliefs about a group." },
        { code: "4.3.C.3", text: "In-group bias favors one's own group, out-group homogeneity is the perception that out-group members are all alike, and ethnocentrism judges other groups by one's own standards; individualist and collectivist cultures differ in how they weigh personal versus group goals." }
      ]
    }
  ],
  bigIdea: "<p>This topic is the heart of social psychology: how the <em>situation</em> — not just personality — steers behavior. It starts with <b>conformity</b>, adjusting to a group. Solomon Asch showed people will agree with an obviously wrong group about line lengths, driven by two forces: <b>normative social influence</b> (I want to fit in) and <b>informational social influence</b> (I assume the group knows better). Turn up the pressure to a command from authority and you get <b>obedience</b>: Stanley Milgram found ordinary people would deliver what they believed were dangerous shocks when a lab-coated experimenter insisted — obedience that climbed when the authority was close and legitimate and when no one else refused.</p>" +
    "<p>Groups change us in other ways too. <b>Social facilitation</b> means an audience boosts performance on easy tasks (and hurts it on hard ones); <b>social loafing</b> means people slack when effort is pooled and individual output is hidden; <b>deindividuation</b> means anonymity and arousal in a crowd can strip away self-restraint, as in Zimbardo's prison study. Group discussion produces <b>group polarization</b> (attitudes get more extreme) and <b>groupthink</b> (the hunger for agreement crushes dissent). Finally, situations shape helping and prejudice: the <b>bystander effect</b> means each person is less likely to help as a crowd grows because responsibility diffuses, while <b>in-group bias</b>, <b>stereotypes</b>, <b>prejudice</b> (attitude), and <b>discrimination</b> (behavior) shape how we treat other groups.</p>",
  vocab: [
    { term: "Conformity", def: "Adjusting one's behavior or thinking to align with a group standard." },
    { term: "Normative social influence", def: "Conforming to gain approval or avoid rejection — the desire to be liked." },
    { term: "Informational social influence", def: "Conforming because one assumes others have accurate information — the desire to be right." },
    { term: "Obedience", def: "Complying with the direct commands of a perceived authority figure." },
    { term: "Social facilitation", def: "Improved performance on easy or well-learned tasks when others are present." },
    { term: "Social loafing", def: "The tendency to exert less individual effort when working in a group than when working alone." },
    { term: "Deindividuation", def: "The loss of self-awareness and self-restraint in group situations that foster arousal and anonymity." },
    { term: "Group polarization", def: "The strengthening of a group's dominant attitudes through discussion among like-minded members." },
    { term: "Groupthink", def: "The drive for harmony and consensus that overrides realistic appraisal of alternatives." },
    { term: "Bystander effect", def: "The tendency for an individual to be less likely to help as the number of other bystanders increases." },
    { term: "Diffusion of responsibility", def: "The reduced sense of personal responsibility to act when others are present." },
    { term: "Prejudice", def: "An unjustified (usually negative) attitude toward a group and its members." },
    { term: "Discrimination", def: "Unjustified negative behavior directed at members of a group." },
    { term: "In-group bias", def: "The tendency to favor one's own group over out-groups." },
    { term: "Ethnocentrism", def: "Judging other cultures by the standards of one's own group, seen as superior." }
  ],
  researchers: [
    { name: "Solomon Asch", contribution: "Demonstrated conformity: participants agreed with a group's obviously wrong line judgments." },
    { name: "Stanley Milgram", contribution: "Showed high levels of obedience to authority in his shock-generator experiments." },
    { name: "Philip Zimbardo", contribution: "Stanford Prison Experiment illustrating how assigned roles, anonymity, and deindividuation shape behavior." },
    { name: "Irving Janis", contribution: "Coined groupthink to describe how the desire for consensus can lead to poor group decisions." }
  ],
  examples: [
    "In Asch's line task, many participants gave an answer they could see was wrong simply because the rest of the group said it first — normative social influence in action.",
    "A person collapses on a busy subway platform and dozens walk past, each assuming someone else will step in — the bystander effect fueled by diffusion of responsibility."
  ],
  mnemonic: [
    { device: "Normative = Need to be liked; Informational = Need to be right.", explain: "Normative influence is social approval; informational influence is wanting accurate information." },
    { device: "Asch = Agreement (conformity); Milgram = orders (obedience).", explain: "Asch studied conforming to peers; Milgram studied obeying authority." },
    { device: "Groupthink = harmony over honesty.", explain: "The push for consensus silences dissent and realistic evaluation." }
  ],
  traps: [
    "Confusing conformity (matching peers, Asch) with obedience (following authority's orders, Milgram).",
    "Mixing up normative (fitting in) and informational (being right) social influence.",
    "Confusing group polarization (attitudes get MORE extreme) with groupthink (suppressing dissent for consensus).",
    "Confusing prejudice (an attitude) with discrimination (a behavior).",
    "Assuming social facilitation always helps; the presence of others helps EASY tasks but can hurt difficult or unpracticed ones."
  ],
  exclusions: [
    "You are not required to memorize exact obedience or conformity percentages, though understanding the direction of the effects and the conditions that change them is expected.",
    "Detailed ethical critiques of individual studies are beyond the scope, though awareness of ethical concerns is useful."
  ]
};

window.APSYCH.notes["4.4"] = {
  topic: "4.4", unit: 4, title: "Psychodynamic and Humanistic Theories of Personality",
  los: [
    {
      code: "4.4.A", text: "Explain how the psychodynamic theory describes personality.",
      eks: [
        { code: "4.4.A.1", text: "The psychodynamic (psychoanalytic) perspective proposes that personality is driven largely by unconscious motives and unresolved conflicts.", subs: [
          { code: "4.4.A.1.i", text: "The id operates on the pleasure principle, the superego enforces internalized morals and ideals, and the ego mediates between them on the reality principle." }
        ] },
        { code: "4.4.A.2", text: "Defense mechanisms (such as repression, denial, projection, displacement, regression, and rationalization) are the ego's unconscious strategies for reducing anxiety by distorting reality." },
        { code: "4.4.A.3", text: "Projective tests, such as the Rorschach inkblot and the Thematic Apperception Test, attempt to reveal unconscious dynamics but are criticized for weak reliability and validity." }
      ]
    },
    {
      code: "4.4.B", text: "Explain how humanistic theories describe personality.",
      eks: [
        { code: "4.4.B.1", text: "Humanistic theories emphasize free will, conscious experience, and the drive toward self-actualization — realizing one's full potential." },
        { code: "4.4.B.2", text: "Carl Rogers argued that healthy personality growth requires unconditional positive regard, genuineness, and empathy, which foster a positive self-concept and congruence between the real and ideal self." }
      ]
    }
  ],
  bigIdea: "<p>These two perspectives are opposites in mood. The <b>psychodynamic</b> view, rooted in Sigmund Freud, is the darker one: personality is an iceberg, and most of it is the hidden <b>unconscious</b>. Freud imagined three warring parts — the <b>id</b> (the impulsive \"I want it now,\" running on the pleasure principle), the <b>superego</b> (the strict internalized conscience), and the <b>ego</b> (the realistic referee that negotiates between them on the reality principle). When their conflict produces anxiety, the ego deploys unconscious <b>defense mechanisms</b> like <b>repression</b> (burying threatening thoughts), <b>projection</b> (attributing your own impulses to others), and <b>displacement</b> (redirecting an impulse onto a safer target).</p>" +
    "<p>The <b>humanistic</b> view is the sunny counterweight. Reacting against Freud's pessimism and behaviorism's determinism, Abraham Maslow and Carl Rogers stressed <b>free will</b>, conscious growth, and the innate push toward <b>self-actualization</b> — becoming the best version of yourself. Rogers argued that people flourish when they receive <b>unconditional positive regard</b> — being accepted and valued without strings — which builds a healthy <b>self-concept</b>. When your real self and your ideal self are close, you have <b>congruence</b>; a big gap breeds anxiety. Where Freud saw hidden conflict, the humanists saw a person straining toward their potential.</p>",
  vocab: [
    { term: "Unconscious", def: "In psychodynamic theory, the reservoir of thoughts, wishes, and memories outside conscious awareness that shape behavior." },
    { term: "Id", def: "The unconscious, impulsive part of personality that seeks immediate gratification (pleasure principle)." },
    { term: "Ego", def: "The largely conscious, decision-making part of personality that operates on the reality principle." },
    { term: "Superego", def: "The part of personality that houses internalized ideals and moral standards (the conscience)." },
    { term: "Defense mechanisms", def: "The ego's unconscious tactics for reducing anxiety by distorting reality." },
    { term: "Repression", def: "The basic defense mechanism that pushes anxiety-arousing thoughts out of awareness." },
    { term: "Projection", def: "A defense mechanism that attributes one's own unacceptable impulses to others." },
    { term: "Projective test", def: "A personality test presenting ambiguous stimuli to reveal supposed unconscious dynamics (e.g., Rorschach, TAT)." },
    { term: "Self-actualization", def: "The humanistic drive to fulfill one's unique potential and become one's fullest self." },
    { term: "Unconditional positive regard", def: "An attitude of total acceptance toward a person regardless of their behavior (Rogers)." },
    { term: "Self-concept", def: "The organized set of beliefs and feelings a person holds about themselves." },
    { term: "Congruence", def: "In humanistic theory, alignment between a person's real self and ideal self." }
  ],
  researchers: [
    { name: "Sigmund Freud", contribution: "Founded psychoanalysis, proposing the unconscious, the id-ego-superego structure, and defense mechanisms." },
    { name: "Abraham Maslow", contribution: "Humanistic theorist who described self-actualization as the peak of human growth." },
    { name: "Carl Rogers", contribution: "Person-centered theorist who emphasized unconditional positive regard, self-concept, and congruence." }
  ],
  examples: [
    "A man furious at his boss says nothing at work but snaps at his family at home — displacement, redirecting the unacceptable anger onto a safer target.",
    "A teacher who accepts a struggling student warmly and without conditions, separating the behavior from the person's worth, is offering the unconditional positive regard Rogers saw as essential to growth."
  ],
  mnemonic: [
    { device: "Id = Instant desires; Superego = Standards; Ego = Executive referee.", explain: "The id wants it now, the superego judges, and the ego brokers a realistic compromise." },
    { device: "Projection = 'the pot calling the kettle black.'", explain: "You see your own unacceptable impulse in someone else." },
    { device: "Humanists = 'be your best self' (self-actualization).", explain: "Maslow and Rogers focus on growth and reaching one's potential, not hidden conflict." }
  ],
  traps: [
    "Mixing up the id (impulsive, pleasure principle) and the superego (moral conscience); the ego is the realistic mediator.",
    "Confusing projection (seeing your impulse in others) with displacement (redirecting an impulse onto a safer target).",
    "Calling humanistic theory deterministic; it emphasizes free will and conscious growth, opposing Freud's determinism.",
    "Assuming projective tests are highly valid; the exam expects awareness that their reliability and validity are weak.",
    "Treating self-actualization (humanistic growth) as a Freudian idea; it belongs to Maslow and the humanists."
  ],
  exclusions: [
    "You do not need the detailed psychosexual stages (oral, anal, phallic, etc.) or the specific claims of individual neo-Freudians.",
    "Memorizing the full list of every defense mechanism is not required; understand the concept and a few key examples."
  ]
};

window.APSYCH.notes["4.5"] = {
  topic: "4.5", unit: 4, title: "Social-Cognitive and Trait Theories of Personality",
  los: [
    {
      code: "4.5.A", text: "Explain how social-cognitive theories describe personality.",
      eks: [
        { code: "4.5.A.1", text: "The social-cognitive perspective views personality as the product of the interaction between a person's traits and thinking, their behavior, and their environment." },
        { code: "4.5.A.2", text: "Reciprocal determinism (Bandura) describes the mutual, two-way influence among personal factors, behavior, and environment; self-efficacy is one's belief in one's ability to succeed at a task." }
      ]
    },
    {
      code: "4.5.B", text: "Explain how trait theories describe personality.",
      eks: [
        { code: "4.5.B.1", text: "Trait theories describe personality using stable, measurable dimensions rather than hidden dynamics.", subs: [
          { code: "4.5.B.1.i", text: "The Big Five (OCEAN) dimensions are openness, conscientiousness, extraversion, agreeableness, and neuroticism, each ranging along a continuum." }
        ] },
        { code: "4.5.B.2", text: "Personality inventories (such as the MMPI) use standardized questionnaires and statistical techniques like factor analysis to identify and measure traits objectively." },
        { code: "4.5.B.3", text: "Trait theories are praised for description and prediction but criticized for underestimating the power of situations (the person-situation controversy)." }
      ]
    }
  ],
  bigIdea: "<p>If psychodynamic and humanistic theories ask <em>why</em> we are the way we are, these two perspectives focus on <em>describing and predicting</em> behavior more scientifically. The <b>social-cognitive</b> perspective, led by Albert Bandura, says personality emerges from a three-way conversation among your <b>thoughts/traits</b>, your <b>behavior</b>, and your <b>environment</b>. Bandura called this <b>reciprocal determinism</b>: each arrow points both ways — a shy person avoids parties (behavior), which limits their social environment, which reinforces the shy self-belief. A central idea is <b>self-efficacy</b>, your belief that you can succeed at a specific task, which shapes what you attempt and how long you persist.</p>" +
    "<p>The <b>trait</b> perspective takes a different tack: skip the hidden causes and just map the stable dimensions on which people reliably differ. The dominant model is the <b>Big Five</b>, remembered as <b>OCEAN</b> — <b>O</b>penness, <b>C</b>onscientiousness, <b>E</b>xtraversion, <b>A</b>greeableness, and <b>N</b>euroticism — where everyone falls somewhere along each continuum rather than in a rigid \"type.\" Traits are measured with objective <b>personality inventories</b> like the MMPI and refined with <b>factor analysis</b>. Their strength is prediction; their weakness, highlighted by the person-situation debate, is that behavior also depends heavily on the situation, not traits alone.</p>",
  vocab: [
    { term: "Social-cognitive perspective", def: "A view that personality results from the interaction of traits/thoughts, behavior, and environment." },
    { term: "Reciprocal determinism", def: "Bandura's principle that personal factors, behavior, and environment continuously influence one another." },
    { term: "Self-efficacy", def: "A person's belief in their ability to succeed at a particular task or situation." },
    { term: "Trait", def: "A characteristic pattern of behavior or disposition that is relatively stable across situations." },
    { term: "Big Five (OCEAN)", def: "The five broad trait dimensions: openness, conscientiousness, extraversion, agreeableness, and neuroticism." },
    { term: "Openness", def: "The Big Five dimension reflecting imagination, curiosity, and preference for variety versus routine." },
    { term: "Conscientiousness", def: "The Big Five dimension reflecting organization, dependability, and self-discipline." },
    { term: "Extraversion", def: "The Big Five dimension reflecting sociability, assertiveness, and drawing energy from others." },
    { term: "Agreeableness", def: "The Big Five dimension reflecting warmth, cooperation, and trust versus antagonism." },
    { term: "Neuroticism", def: "The Big Five dimension reflecting emotional instability, anxiety, and moodiness versus calm." },
    { term: "Personality inventory", def: "A standardized questionnaire assessing many traits at once (e.g., the MMPI)." },
    { term: "Factor analysis", def: "A statistical method that identifies clusters of related items to reveal underlying trait dimensions." }
  ],
  researchers: [
    { name: "Albert Bandura", contribution: "Developed the social-cognitive perspective, including reciprocal determinism and self-efficacy." }
  ],
  examples: [
    "A student with high self-efficacy in math tackles harder problems and keeps trying after mistakes, while a classmate who doubts their ability gives up quickly — showing how self-belief shapes behavior.",
    "Two people score high on extraversion and conscientiousness but differ on openness: one loves trying new restaurants, the other prefers familiar favorites — the Big Five describing them along continuous dimensions."
  ],
  mnemonic: [
    { device: "OCEAN — Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.", explain: "The five letters spell OCEAN, the standard way to recall the Big Five dimensions (also seen as CANOE)." },
    { device: "Reciprocal determinism = a three-way street, arrows both ways.", explain: "Person, behavior, and environment each influence the other two." },
    { device: "Self-efficacy = 'I can do this' for a specific task.", explain: "It is task-specific confidence in one's capability, which drives effort and persistence." }
  ],
  traps: [
    "Confusing the Big Five (continuous traits) with older 'type' theories that sort people into rigid categories.",
    "Mixing up self-efficacy (belief you can do a task) with self-esteem (overall sense of self-worth) or locus of control.",
    "Thinking reciprocal determinism is one-directional; all three factors influence each other mutually.",
    "Assuming neuroticism means 'neurotic disorder'; it is a normal trait dimension of emotional stability versus instability.",
    "Overlooking the person-situation controversy — traits predict behavior on average but situations also strongly shape it."
  ],
  exclusions: [
    "You do not need the full item content or scoring of specific inventories like the MMPI beyond understanding what a personality inventory is.",
    "Detailed historical trait taxonomies (e.g., every one of Cattell's or Eysenck's factors) are beyond the scope."
  ]
};

window.APSYCH.notes["4.6"] = {
  topic: "4.6", unit: 4, title: "Motivation",
  los: [
    {
      code: "4.6.A", text: "Explain the major theories and concepts that account for motivation.",
      eks: [
        { code: "4.6.A.1", text: "Several theories explain what drives behavior.", subs: [
          { code: "4.6.A.1.i", text: "Drive-reduction theory says a physiological need creates a drive that pushes the organism to restore homeostasis (internal balance)." },
          { code: "4.6.A.1.ii", text: "Arousal theory says organisms are motivated to reach an optimal level of arousal; the Yerkes-Dodson law adds that moderate arousal yields the best performance." },
          { code: "4.6.A.1.iii", text: "Incentive theory says external rewards and punishments (incentives) pull behavior, complementing internal pushes." }
        ] },
        { code: "4.6.A.2", text: "Maslow's hierarchy of needs orders motives from basic physiological and safety needs up through belonging and esteem to self-actualization, proposing that lower needs generally take priority." }
      ]
    },
    {
      code: "4.6.B", text: "Explain how intrinsic and extrinsic motivation and specific motives shape behavior.",
      eks: [
        { code: "4.6.B.1", text: "Intrinsic motivation is doing an activity for its own inherent satisfaction; extrinsic motivation is doing it for external rewards or to avoid punishment." },
        { code: "4.6.B.2", text: "The overjustification effect occurs when rewarding an already-intrinsically-motivating activity reduces later intrinsic interest in it." },
        { code: "4.6.B.3", text: "Motivational conflicts include approach-approach (two attractive options), avoidance-avoidance (two unattractive options), and approach-avoidance (one goal with both attractive and unattractive features)." }
      ]
    }
  ],
  bigIdea: "<p>Motivation is the engine behind behavior — the <em>why</em> that energizes and directs action. Several theories try to name that engine. <b>Drive-reduction theory</b> is about internal <em>pushes</em>: a need (hunger) creates an unpleasant <b>drive</b> that motivates you to act until you restore <b>homeostasis</b>, the body's steady internal balance. But this cannot explain why we seek stimulation when no need is unmet, so <b>arousal theory</b> adds that we aim for an <em>optimal</em> level of arousal — not too bored, not too overwhelmed. The <b>Yerkes-Dodson law</b> captures this as an inverted U: moderate arousal produces peak performance, especially on tough tasks. <b>Incentive theory</b> adds the external <em>pull</em> of rewards. And <b>Maslow's hierarchy of needs</b> stacks motives in a pyramid, arguing basic physiological and safety needs generally must be met before we pursue belonging, esteem, and finally self-actualization.</p>" +
    "<p>A crucial distinction is the source of the reward. <b>Intrinsic motivation</b> means doing something for the sheer enjoyment of it; <b>extrinsic motivation</b> means doing it for an outside payoff or to avoid punishment. Surprisingly, piling extrinsic rewards onto something you already loved can backfire — the <b>overjustification effect</b>, where being paid to do a hobby can shrink your original interest. Motives also collide, producing <b>approach-approach</b> conflicts (choosing between two goods), <b>avoidance-avoidance</b> conflicts (two bads), and <b>approach-avoidance</b> conflicts (one goal that both attracts and repels).</p>",
  vocab: [
    { term: "Motivation", def: "A need or desire that energizes and directs behavior toward a goal." },
    { term: "Drive-reduction theory", def: "The idea that a physiological need creates a drive that motivates the organism to reduce it and restore balance." },
    { term: "Homeostasis", def: "The body's tendency to maintain a balanced, steady internal state." },
    { term: "Arousal theory", def: "The idea that people are motivated to seek an optimal level of arousal or stimulation." },
    { term: "Yerkes-Dodson law", def: "The principle that performance peaks at moderate arousal and drops when arousal is too low or too high." },
    { term: "Incentive", def: "A positive or negative external stimulus that pulls behavior toward or away from it." },
    { term: "Hierarchy of needs", def: "Maslow's pyramid ordering motives from physiological needs up to self-actualization." },
    { term: "Intrinsic motivation", def: "The desire to perform a behavior for its own sake and inherent satisfaction." },
    { term: "Extrinsic motivation", def: "The desire to perform a behavior for external rewards or to avoid punishment." },
    { term: "Overjustification effect", def: "The reduction of intrinsic interest when an external reward is given for an already-enjoyed activity." },
    { term: "Approach-avoidance conflict", def: "A motivational conflict over a single goal that has both attractive and unattractive features." },
    { term: "Sensation-seeking", def: "The tendency to pursue varied, novel, and intense experiences and stimulation." }
  ],
  researchers: [
    { name: "Abraham Maslow", contribution: "Proposed the hierarchy of needs, ordering human motives from basic survival to self-actualization." },
    { name: "Robert Yerkes and John Dodson", contribution: "Formulated the Yerkes-Dodson law relating arousal to performance as an inverted U." }
  ],
  examples: [
    "A student who reads novels purely for pleasure (intrinsic) is offered cash per book; months later, once the payments stop, she reads far less than before — the overjustification effect eroding her original interest.",
    "Before a big game, an athlete performs best with moderate nerves; too little arousal leaves them flat and too much makes them choke — the inverted-U of the Yerkes-Dodson law."
  ],
  mnemonic: [
    { device: "Yerkes-Dodson = inverted U: the 'Goldilocks' arousal, not too little, not too much.", explain: "Moderate arousal is 'just right' for peak performance; extremes hurt it." },
    { device: "Intrinsic = Inside joy; Extrinsic = External reward.", explain: "Intrinsic motivation comes from within; extrinsic comes from outside payoffs." },
    { device: "Maslow: 'Please Say Before Eating Soup' — Physiological, Safety, Belonging, Esteem, Self-actualization.", explain: "A phrase to recall the order of the hierarchy from bottom to top." }
  ],
  traps: [
    "Confusing drive-reduction (reducing an internal need to reach homeostasis) with arousal theory (seeking an optimal level of stimulation).",
    "Forgetting the Yerkes-Dodson law is an inverted U — performance drops when arousal is too HIGH, not just too low.",
    "Mixing up intrinsic (internal enjoyment) and extrinsic (external reward) motivation.",
    "Thinking rewards always increase motivation; the overjustification effect shows they can undermine intrinsic interest.",
    "Confusing the three conflict types: approach-approach (two goods), avoidance-avoidance (two bads), approach-avoidance (one mixed goal)."
  ],
  exclusions: [
    "You are not required to memorize the detailed physiology of hunger (specific hormones or brain circuits) beyond the general idea of homeostatic regulation.",
    "The precise ordering debates within Maslow's hierarchy are beyond the scope; know its general structure and logic."
  ]
};

window.APSYCH.notes["4.7"] = {
  topic: "4.7", unit: 4, title: "Emotion",
  los: [
    {
      code: "4.7.A", text: "Explain the major theories of emotion and how they relate physiological arousal, cognition, and feeling.",
      eks: [
        { code: "4.7.A.1", text: "The major theories differ on the ordering of arousal, thinking, and the felt emotion.", subs: [
          { code: "4.7.A.1.i", text: "The James-Lange theory says a stimulus triggers physiological arousal FIRST, and the emotion is our awareness of that bodily response." },
          { code: "4.7.A.1.ii", text: "The Cannon-Bard theory says the arousal and the felt emotion occur SIMULTANEOUSLY and independently." },
          { code: "4.7.A.1.iii", text: "The Schachter-Singer two-factor theory says emotion requires both physiological arousal AND a cognitive label that interprets that arousal." }
        ] },
        { code: "4.7.A.2", text: "Cognitive-appraisal approaches (Lazarus) hold that how we interpret a situation shapes the emotion, and some emotional responses can occur with minimal conscious thought (Zajonc)." }
      ]
    },
    {
      code: "4.7.B", text: "Explain how the body, facial expression, and culture shape the experience and expression of emotion.",
      eks: [
        { code: "4.7.B.1", text: "Emotions involve autonomic nervous system arousal, and the facial feedback hypothesis proposes that facial expressions can influence the emotions a person feels." },
        { code: "4.7.B.2", text: "Some basic emotional expressions appear to be universally recognized across cultures, while display rules — culturally specific norms for expressing emotion — govern when and how emotions are shown." }
      ]
    }
  ],
  bigIdea: "<p>An emotion has three ingredients: <b>physiological arousal</b> (racing heart), <b>expressive behavior</b> (a fearful face), and <b>conscious experience</b> (the feeling of fear). The big debate — and the most tested idea in this topic — is about the <em>order</em> in which arousal, thinking, and feeling occur. The <b>James-Lange theory</b> says the body comes first: you see a bear, your heart pounds, and the emotion IS your reading of that pounding (\"I'm racing, so I must be afraid\"). The <b>Cannon-Bard theory</b> disagrees, arguing the bodily arousal and the conscious feeling happen at the same time and independently (the bear makes you pound AND feel afraid at once).</p>" +
    "<p>The <b>Schachter-Singer two-factor theory</b> splits the difference and adds a mind: emotion equals <b>arousal + a cognitive label</b>. Your heart is pounding, but you look around to interpret <em>why</em> — \"a bear\" means fear, whereas the same pounding at a party might get labeled excitement. Richard Lazarus stressed that this <b>cognitive appraisal</b> is central, while Robert Zajonc argued some emotional reactions fire before much thinking at all. Finally, the body and culture shape emotion: the <b>facial feedback hypothesis</b> shows that making a facial expression can actually intensify the matching feeling, some basic expressions are recognized <b>universally</b> across cultures (Ekman), and <b>display rules</b> dictate the culturally appropriate way to show what you feel.</p>",
  vocab: [
    { term: "Emotion", def: "A response involving physiological arousal, expressive behavior, and conscious experience." },
    { term: "James-Lange theory", def: "The theory that emotion is our awareness of physiological arousal that occurs first in response to a stimulus." },
    { term: "Cannon-Bard theory", def: "The theory that physiological arousal and the conscious emotion occur simultaneously and independently." },
    { term: "Schachter-Singer two-factor theory", def: "The theory that emotion requires both physiological arousal and a cognitive label for that arousal." },
    { term: "Cognitive appraisal", def: "The interpretation or evaluation of a situation that shapes the resulting emotion (emphasized by Lazarus)." },
    { term: "Facial feedback hypothesis", def: "The idea that facial muscle movements can trigger or intensify the corresponding emotion." },
    { term: "Display rules", def: "Culturally specific norms that govern how and when emotions may be expressed." },
    { term: "Universal emotions", def: "Basic emotional expressions (e.g., happiness, fear, anger) recognized across cultures." },
    { term: "Autonomic arousal", def: "The physiological activation of the sympathetic and parasympathetic systems that accompanies emotion." }
  ],
  researchers: [
    { name: "William James", contribution: "Co-originated the James-Lange theory that bodily arousal precedes and produces emotional feeling." },
    { name: "Walter Cannon and Philip Bard", contribution: "Proposed the Cannon-Bard theory that arousal and emotion occur simultaneously." },
    { name: "Stanley Schachter and Jerome Singer", contribution: "Proposed the two-factor theory that emotion requires arousal plus a cognitive label." },
    { name: "Paul Ekman", contribution: "Documented that certain basic facial expressions of emotion are recognized across cultures." },
    { name: "Richard Lazarus", contribution: "Argued that cognitive appraisal is central to which emotion a situation produces." }
  ],
  examples: [
    "Two people feel the same racing heart: one, on a roller coaster with friends, labels it 'thrill'; the other, hearing footsteps in a dark alley, labels it 'fear.' Same arousal, different cognitive label — the Schachter-Singer two-factor theory.",
    "Asked to hold a pen between their teeth (forcing a smile), participants rate cartoons as funnier than those holding it with their lips (a frown) — support for the facial feedback hypothesis."
  ],
  mnemonic: [
    { device: "James-Lange = 'I'm shaking, therefore I'm afraid' (body FIRST).", explain: "In James-Lange, the physiological response comes before and causes the felt emotion." },
    { device: "Cannon-Bard = 'at the same time' (arousal AND emotion together).", explain: "Cannon-Bard has arousal and the conscious emotion occur simultaneously and separately." },
    { device: "Schachter-Singer = arousal + label = emotion (TWO factors).", explain: "You need bodily arousal plus a cognitive interpretation to name the emotion." }
  ],
  traps: [
    "Confusing James-Lange (body first, then emotion) with Cannon-Bard (body and emotion at the same time).",
    "Forgetting that the Schachter-Singer two-factor theory requires BOTH arousal AND a cognitive label, not just one.",
    "Reversing the facial feedback hypothesis — the expression influences the feeling, not only the reverse.",
    "Assuming all emotional expression is fully universal; basic expressions are widely recognized, but display rules vary by culture.",
    "Treating cognitive appraisal (Lazarus) as identical to the two-factor theory; appraisal stresses the interpretation step in particular."
  ],
  exclusions: [
    "You are not required to know the detailed brain circuitry of specific emotions beyond the general role of autonomic arousal and structures like the amygdala.",
    "Memorizing the exact experimental procedures of classic emotion studies is not required; understand what each theory predicts."
  ]
};
