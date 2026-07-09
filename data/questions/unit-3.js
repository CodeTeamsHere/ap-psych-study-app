/*
 * data/questions/unit-3.js — Original practice questions for Unit 3: Development and Learning.
 * Schema per question:
 *   { id, topic, unit, practice(1-3), difficulty('Easy'|'Moderate'|'Difficult'),
 *     stem, stimulus?(table/bars/scatter),
 *     choices:[{text, correct?:true, why}]  // exactly one correct; every choice has a 'why',
 *     keyConcept }
 * All questions are original, written for this site (not copied from any question bank).
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.questions = window.APSYCH.questions || {};

window.APSYCH.questions["3.1"] = [
  {
    id: "3.1-1", topic: "3.1", unit: 3, practice: 1, difficulty: "Easy",
    stem: "A theorist argues that development proceeds through distinct, qualitatively different steps rather than smooth, gradual growth. This position reflects which developmental theme?",
    choices: [
      { text: "Discontinuity (stages).", correct: true, why: "Distinct, qualitatively different steps is exactly the stage (discontinuity) side of the continuity-vs-stages theme." },
      { text: "Continuity.", why: "Continuity is the opposite view — that development is gradual and cumulative, not stepwise." },
      { text: "Stability.", why: "Stability concerns whether early traits persist over time, not whether change is gradual or stepwise." },
      { text: "Nurture over nature.", why: "That addresses the source of development (experience vs. genes), not its shape as gradual or stepwise." }
    ],
    keyConcept: "Continuity vs. stages (discontinuity)"
  },
  {
    id: "3.1-2", topic: "3.1", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A study finds that a person's shy temperament at age 2 still predicts shyness at age 30. This finding is most relevant to which developmental theme?",
    choices: [
      { text: "Continuity vs. stages.", why: "That theme is about whether change is gradual or stepwise, not about whether a trait persists." },
      { text: "Stability vs. change.", correct: true, why: "A trait persisting from age 2 to age 30 is direct evidence bearing on the stability side of the stability-vs-change theme." },
      { text: "Nature vs. nurture.", why: "The finding is about persistence over time, not about whether genes or environment produced the shyness." },
      { text: "Cross-sectional vs. longitudinal.", why: "That is a research-design distinction, not one of the three enduring themes of development." }
    ],
    keyConcept: "Stability vs. change"
  },
  {
    id: "3.1-3", topic: "3.1", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "To quickly compare memory across ages, a psychologist tests separate groups of 20-, 40-, and 60-year-olds during the same week. This is a ______ design, whose signature weakness is ______.",
    choices: [
      { text: "longitudinal; participant attrition.", why: "Longitudinal designs follow the same people over time; this study tests different people once, so it is not longitudinal." },
      { text: "cross-sectional; taking many years to complete.", why: "Cross-sectional designs are fast — the 'takes years' weakness belongs to longitudinal studies." },
      { text: "cross-sectional; cohort effects.", correct: true, why: "Testing different age groups at one time is cross-sectional, and its main confound is cohort (generational) differences." },
      { text: "longitudinal; cohort effects.", why: "Longitudinal designs actually reduce cohort confounds, and this one-time, multi-age study is not longitudinal." }
    ],
    keyConcept: "Cross-sectional design and cohort effects"
  },
  {
    id: "3.1-4", topic: "3.1", unit: 3, practice: 2, difficulty: "Easy",
    stem: "Following the same 100 children every year from kindergarten through high school is an example of a",
    choices: [
      { text: "cross-sectional design.", why: "Cross-sectional designs compare different people of different ages at one time, not the same people repeatedly." },
      { text: "true experiment with random assignment to age.", why: "Age cannot be randomly assigned, so this is not an experiment manipulating age." },
      { text: "case study of a single individual.", why: "A case study examines one person in depth; this follows a group of 100 over time." },
      { text: "longitudinal design.", correct: true, why: "Tracking the same individuals across many years is the defining feature of a longitudinal design." }
    ],
    keyConcept: "Longitudinal design"
  },
  {
    id: "3.1-5", topic: "3.1", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A cross-sectional study finds that older adults use less technology than younger adults. Before concluding that aging reduces tech skill, a careful critic would point out that",
    choices: [
      { text: "the age groups differ in generational experience (a cohort effect), not necessarily in the effect of aging.", correct: true, why: "Older and younger groups grew up in different tech eras, so a cohort difference — not aging itself — could explain the gap." },
      { text: "the study should have used fewer participants.", why: "Sample size is not the flaw here; the issue is confounding age with generational experience." },
      { text: "technology use cannot be measured objectively.", why: "Technology use can be measured; the real limitation is the cohort confound built into cross-sectional designs." },
      { text: "longitudinal designs also confound age with cohort.", why: "Longitudinal designs actually control cohort by following one group over time, so this is incorrect." }
    ],
    keyConcept: "Cohort effects as a confound"
  },
  {
    id: "3.1-6", topic: "3.1", unit: 3, practice: 3, difficulty: "Difficult",
    stem: "The table shows results from a cross-sectional vocabulary study. Which is the most cautious, well-supported conclusion?",
    stimulus: {
      type: "table",
      caption: "Cross-sectional mean vocabulary scores by age group",
      headers: ["Age group","Mean vocabulary score"],
      rows: [["25 years","82"],["50 years","80"],["75 years","71"]],
      rowHeaders: true
    },
    choices: [
      { text: "Vocabulary definitely declines as a direct result of aging.", why: "A cross-sectional snapshot cannot establish that aging itself caused the decline; cohort is a rival explanation." },
      { text: "The oldest group scored lower, but because the design is cross-sectional, a cohort difference (such as years of schooling) could explain the gap rather than aging.", correct: true, why: "Cross-sectional data confound age with cohort, so the cautious reading acknowledges a generational explanation is possible." },
      { text: "Vocabulary is completely unrelated to age.", why: "The scores do differ by age group (82 vs. 71), so 'no relationship' is unsupported." },
      { text: "Younger people are simply more intelligent than older people.", why: "The table measures one vocabulary score, not overall intelligence, and cannot support that broad claim." }
    ],
    keyConcept: "Interpreting cross-sectional age data with cohort confounds"
  },
  {
    id: "3.1-7", topic: "3.1", unit: 3, practice: 1, difficulty: "Easy",
    stem: "The question of how much a person's musical talent is due to inherited ability versus years of practice reflects which developmental theme?",
    choices: [
      { text: "Stability vs. change.", why: "That theme concerns whether traits persist over time, not the genes-vs-experience source of a trait." },
      { text: "Continuity vs. stages.", why: "That theme concerns the shape of development (gradual vs. stepwise), not its causes." },
      { text: "Nature vs. nurture.", correct: true, why: "Weighing inherited ability against practice is precisely the nature (genes) vs. nurture (experience) theme." },
      { text: "Cross-sectional vs. longitudinal.", why: "That is a research-method choice, not one of the enduring developmental themes." }
    ],
    keyConcept: "Nature vs. nurture theme"
  },
  {
    id: "3.1-8", topic: "3.1", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A psychologist describes language growth as the steady accumulation of more and more words, with no distinct jumps between different kinds of thinking. This description best reflects a belief in",
    choices: [
      { text: "discontinuity (stages).", why: "Stage theories emphasize distinct qualitative jumps, which this description explicitly denies." },
      { text: "instability.", why: "Instability would mean traits change unpredictably; the description is about gradual growth, not fluctuation." },
      { text: "nature over nurture.", why: "This describes the shape of development, not whether genes or environment cause it." },
      { text: "continuity.", correct: true, why: "Steady, gradual accumulation with no distinct jumps is the continuity view of development." }
    ],
    keyConcept: "Continuity view of development"
  },
  {
    id: "3.1-9", topic: "3.1", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "A researcher has only one semester and limited funding but wants to compare problem-solving at ages 10, 15, and 20. The most practical design is",
    choices: [
      { text: "a cross-sectional study testing 10-, 15-, and 20-year-olds during the same semester.", correct: true, why: "Cross-sectional designs gather all ages at once, making them the fast, low-cost choice for tight timelines." },
      { text: "a longitudinal study following one group of 10-year-olds until they turn 20.", why: "That would take a decade — the opposite of practical given a single semester." },
      { text: "a case study of one 15-year-old.", why: "A single case cannot compare across the three ages the researcher wants to study." },
      { text: "an experiment randomly assigning participants to be 10, 15, or 20.", why: "Age cannot be randomly assigned, so this design is impossible." }
    ],
    keyConcept: "Choosing cross-sectional for speed and cost"
  },
  {
    id: "3.1-10", topic: "3.1", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "Evidence that a child with early insecure attachment can develop healthy relationships after years of supportive care best supports which side of a developmental theme?",
    choices: [
      { text: "The stability side — traits are fixed early.", why: "This evidence shows the early pattern was overcome, which argues against fixed stability." },
      { text: "The change side — traits can be modified by later experience.", correct: true, why: "Overcoming an early pattern through later experience is direct evidence for the change side of stability vs. change." },
      { text: "The stages side of continuity vs. stages.", why: "This concerns whether a trait can be modified, not whether development occurs in discrete stages." },
      { text: "The nature side of nature vs. nurture.", why: "Improvement driven by supportive care points to nurture and change, not to a purely genetic (nature) account." }
    ],
    keyConcept: "Change side of stability vs. change"
  },
  {
    id: "3.1-11", topic: "3.1", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "\"Do the aggressive tendencies observed in a 5-year-old remain part of the same person at age 25?\" This question most directly concerns which theme?",
    choices: [
      { text: "Nature vs. nurture.", why: "The question asks about persistence over time, not whether genes or environment produced the aggression." },
      { text: "Continuity vs. stages.", why: "That theme is about whether development is gradual or stepwise, not whether a trait endures." },
      { text: "Stability vs. change.", correct: true, why: "Asking whether a childhood trait persists into adulthood is the core of the stability-vs-change theme." },
      { text: "Cross-sectional vs. longitudinal method.", why: "That names a way to study the question, not the conceptual theme the question is about." }
    ],
    keyConcept: "Identifying the stability vs. change theme"
  }
];

window.APSYCH.questions["3.2"] = [
  {
    id: "3.2-1", topic: "3.2", unit: 3, practice: 1, difficulty: "Easy",
    stem: "When a newborn's cheek is gently stroked, the baby turns its head toward the touch and opens its mouth. This automatic response is the",
    choices: [
      { text: "Moro (startle) reflex.", why: "The Moro reflex is a startle response of flinging out the arms, not turning toward a cheek touch." },
      { text: "grasping reflex.", why: "The grasping reflex is the automatic curling of fingers around an object placed in the palm." },
      { text: "conservation response.", why: "Conservation is a Piagetian cognitive concept, not a newborn reflex." },
      { text: "rooting reflex.", correct: true, why: "Turning toward a cheek touch to search for a nipple is the rooting reflex, which aids feeding." }
    ],
    keyConcept: "Newborn reflexes: rooting"
  },
  {
    id: "3.2-2", topic: "3.2", unit: 3, practice: 1, difficulty: "Easy",
    stem: "Across cultures, almost all infants sit before they crawl and crawl before they walk. This universal ordering of motor milestones best illustrates",
    choices: [
      { text: "maturation.", correct: true, why: "A biologically programmed, universal sequence of motor development that unfolds largely independent of experience is maturation." },
      { text: "operant conditioning.", why: "The universal order appears without training or reinforcement, so it is maturational rather than operantly learned." },
      { text: "observational learning.", why: "Infants do not learn to sit and crawl mainly by imitating models; the sequence is biologically driven." },
      { text: "accommodation.", why: "Accommodation is a Piagetian cognitive process, not the physical unfolding of motor skills." }
    ],
    keyConcept: "Maturation and universal motor sequence"
  },
  {
    id: "3.2-3", topic: "3.2", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A physician warns a pregnant patient to avoid alcohol because it can cross the placenta and disrupt development. In this context, alcohol is acting as a",
    choices: [
      { text: "neurotransmitter.", why: "A neurotransmitter is a chemical messenger between neurons, not a harmful prenatal agent." },
      { text: "teratogen.", correct: true, why: "A teratogen is any agent, such as alcohol, that crosses the placenta and can harm prenatal development." },
      { text: "reflex.", why: "A reflex is an automatic response, not a substance that harms development." },
      { text: "secondary sex characteristic.", why: "Secondary sex characteristics are pubertal body changes, unrelated to prenatal harm." }
    ],
    keyConcept: "Teratogens"
  },
  {
    id: "3.2-4", topic: "3.2", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "During puberty, a teenager's voice deepens and body hair develops. These changes are examples of",
    choices: [
      { text: "primary sex characteristics.", why: "Primary sex characteristics are the reproductive organs themselves, not nonreproductive traits like voice and body hair." },
      { text: "teratogenic effects.", why: "Teratogens harm prenatal development; these are normal pubertal changes." },
      { text: "secondary sex characteristics.", correct: true, why: "Nonreproductive traits such as deepened voice and body hair are secondary sex characteristics." },
      { text: "reflexes.", why: "Reflexes are automatic newborn responses, not pubertal body changes." }
    ],
    keyConcept: "Secondary sex characteristics"
  },
  {
    id: "3.2-5", topic: "3.2", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "The first menstrual period, a landmark event of female puberty, is called",
    choices: [
      { text: "menopause.", why: "Menopause is the end of menstruation in midlife, not its first occurrence." },
      { text: "spermarche.", why: "Spermarche is the first ejaculation in males, not the first menstrual period." },
      { text: "maturation.", why: "Maturation is the broad process of biological growth, not this specific pubertal event." },
      { text: "menarche.", correct: true, why: "Menarche is specifically the first menstrual period, a landmark of puberty." }
    ],
    keyConcept: "Menarche"
  },
  {
    id: "3.2-6", topic: "3.2", unit: 3, practice: 1, difficulty: "Easy",
    stem: "In midlife, a woman's menstrual cycles gradually end and her reproductive capacity ceases. This natural transition is called",
    choices: [
      { text: "menopause.", correct: true, why: "Menopause is the natural end of menstruation and female reproductive capacity, typically in midlife." },
      { text: "menarche.", why: "Menarche is the first menstrual period at the start of puberty, the opposite life stage." },
      { text: "puberty.", why: "Puberty is the onset of sexual maturation in adolescence, not its midlife end." },
      { text: "a critical period.", why: "A critical period is a developmental window for acquiring an ability, not the end of reproductive capacity." }
    ],
    keyConcept: "Menopause"
  },
  {
    id: "3.2-7", topic: "3.2", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "The idea that there is a limited early window during which certain experiences must occur for an ability to develop normally is the concept of a",
    choices: [
      { text: "cohort effect.", why: "A cohort effect is a generational difference in research, not a developmental window for an ability." },
      { text: "critical (sensitive) period.", correct: true, why: "A critical or sensitive period is exactly this optimal early window for normal development of a capacity." },
      { text: "reflex arc.", why: "A reflex arc is a spinal response pathway, unrelated to developmental windows." },
      { text: "conservation.", why: "Conservation is a Piagetian cognitive milestone, not a timing window for development." }
    ],
    keyConcept: "Critical (sensitive) period"
  },
  {
    id: "3.2-8", topic: "3.2", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "One infant begins walking at 10 months and another at 14 months, yet both passed through the same sequence of motor milestones. This pattern shows that in motor development,",
    choices: [
      { text: "the sequence is different for every child.", why: "The premise states both children followed the same sequence, so the order is not different for each." },
      { text: "timing is identical for all infants.", why: "The two infants started walking at different ages, so timing clearly varies." },
      { text: "the sequence is largely universal, though the timing varies from child to child.", correct: true, why: "Motor milestones follow the same order everywhere while their exact onset times differ, reflecting maturation." },
      { text: "walking is learned entirely through practice.", why: "The shared, orderly sequence reflects maturation, not purely practice-driven learning." }
    ],
    keyConcept: "Universal sequence, variable timing"
  },
  {
    id: "3.2-9", topic: "3.2", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "A researcher compares children whose mothers drank heavily during pregnancy with children whose mothers did not, then measures cognitive outcomes. Why can this study not be a true experiment?",
    choices: [
      { text: "It has too few variables to be an experiment.", why: "Number of variables is not what disqualifies it; the lack of random assignment of the exposure does." },
      { text: "Cognitive outcomes cannot be measured.", why: "Cognitive outcomes can be measured with standardized tests; that is not the obstacle." },
      { text: "Experiments never involve children.", why: "Experiments can ethically involve children; the specific problem is that a teratogen cannot be assigned." },
      { text: "Prenatal alcohol exposure cannot ethically be randomly assigned, so the study is correlational/quasi-experimental.", correct: true, why: "Assigning pregnant people to drink would be unethical, so exposure is measured rather than manipulated, making causal claims tentative." }
    ],
    keyConcept: "Why teratogen studies are correlational"
  },
  {
    id: "3.2-10", topic: "3.2", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "To study infant motor development objectively, which measure is most valid?",
    choices: [
      { text: "Recording the age at which each infant first sits, crawls, and walks.", correct: true, why: "Directly timing observable motor milestones is an objective, valid operational measure of motor development." },
      { text: "Asking parents to rate how intelligent their baby seems.", why: "Parent ratings of intelligence are subjective and do not directly measure motor milestones." },
      { text: "Measuring the infant's birth weight only.", why: "Birth weight is a single physical fact, not a measure of the motor developmental sequence." },
      { text: "Counting how many words the parents speak per day.", why: "Parental speech relates to language input, not the infant's motor development." }
    ],
    keyConcept: "Operationalizing motor development"
  },
  {
    id: "3.2-11", topic: "3.2", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "Researchers find that intensive early walking practice does not make infants walk much sooner than untrained infants. This result most strongly supports the conclusion that early motor milestones are driven mainly by",
    choices: [
      { text: "operant reinforcement.", why: "Reinforcement would predict that trained infants walk sooner, which the data do not show." },
      { text: "maturation rather than training.", correct: true, why: "If practice barely changes onset, the milestone is governed by biological maturation, not experience." },
      { text: "observational learning from other babies.", why: "The finding shows practice has little effect, arguing against an experience-based explanation like imitation." },
      { text: "cohort effects.", why: "Cohort effects concern generational differences in research groups, not the maturation-vs-training question here." }
    ],
    keyConcept: "Evidence for maturation over practice"
  }
];

window.APSYCH.questions["3.3"] = [
  {
    id: "3.3-1", topic: "3.3", unit: 3, practice: 1, difficulty: "Easy",
    stem: "In psychology, the biological category typically assigned at birth is called ______, whereas the socially and psychologically constructed roles and identity are called ______.",
    choices: [
      { text: "gender; sex.", why: "This reverses the terms; sex is biological and gender is social/psychological." },
      { text: "androgyny; gender typing.", why: "Androgyny and gender typing are specific concepts, not the basic biological-vs-social distinction being asked about." },
      { text: "sex; gender.", correct: true, why: "Sex refers to the biological category; gender refers to the social/psychological roles and identity — the core distinction of this topic." },
      { text: "identity; orientation.", why: "These are different concepts; the biological-vs-social contrast is captured by sex vs. gender." }
    ],
    keyConcept: "Sex vs. gender"
  },
  {
    id: "3.3-2", topic: "3.3", unit: 3, practice: 1, difficulty: "Easy",
    stem: "A person's internal, deeply held sense of being male, female, or another gender is their",
    choices: [
      { text: "gender role.", why: "A gender role is society's outward expectation, not the person's internal sense of self." },
      { text: "sexual orientation.", why: "Sexual orientation is a pattern of attraction to others, not one's sense of one's own gender." },
      { text: "sex.", why: "Sex is the biological category assigned at birth, not the internal psychological sense of gender." },
      { text: "gender identity.", correct: true, why: "Gender identity is precisely one's own internal sense of one's gender." }
    ],
    keyConcept: "Gender identity"
  },
  {
    id: "3.3-3", topic: "3.3", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "In a culture that expects fathers to be the family's primary earners, this shared expectation about how a man 'should' behave is an example of a",
    choices: [
      { text: "gender role.", correct: true, why: "A culturally shared expectation about how people of a given gender should behave is a gender role." },
      { text: "gender identity.", why: "Gender identity is an internal sense of self, not a societal expectation about behavior." },
      { text: "sexual orientation.", why: "Sexual orientation is about attraction, not cultural behavior expectations." },
      { text: "primary sex characteristic.", why: "That is a physical reproductive structure, not a social expectation." }
    ],
    keyConcept: "Gender roles"
  },
  {
    id: "3.3-4", topic: "3.3", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "An adult who is comfortably assertive at work (a traditionally masculine trait) and warmly nurturing at home (a traditionally feminine trait) would best be described as",
    choices: [
      { text: "strongly gender-typed.", why: "Strong gender typing means adopting mainly one traditional role, not blending both." },
      { text: "androgynous.", correct: true, why: "Displaying a blend of both traditionally masculine and feminine traits is the definition of androgyny." },
      { text: "lacking any gender identity.", why: "Androgyny is a blend of traits, not an absence of gender identity." },
      { text: "biologically intersex.", why: "Intersex refers to biological sex characteristics, not a psychological blend of gendered traits." }
    ],
    keyConcept: "Androgyny"
  },
  {
    id: "3.3-5", topic: "3.3", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A young boy glances at an unfamiliar toy, quickly decides it is 'for girls,' and loses interest without examining it. His reaction is best explained by a",
    choices: [
      { text: "primary sex characteristic.", why: "That is a physical reproductive structure, not a cognitive framework guiding his reaction." },
      { text: "critical period.", why: "A critical period is a developmental timing window, not the mental filter driving his toy choice." },
      { text: "gender schema.", correct: true, why: "A gender schema is a mental framework that sorts the world into 'for boys' or 'for girls' and filters what a child attends to." },
      { text: "reflex.", why: "A reflex is an automatic physical response, not a learned mental category about gender." }
    ],
    keyConcept: "Gender schema"
  },
  {
    id: "3.3-6", topic: "3.3", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A girl is repeatedly praised for playing quietly and gently and often imitates her mother's behaviors. Her acquisition of gendered behavior through observation and reinforcement best reflects",
    choices: [
      { text: "Piaget's conservation.", why: "Conservation is a cognitive concept about quantity, unrelated to learning gender through modeling." },
      { text: "classical conditioning of a reflex.", why: "Gendered behavior here is voluntary and modeled, not an involuntary reflex conditioned to a stimulus." },
      { text: "maturation.", why: "Maturation is biological unfolding; this behavior is being shaped by praise and imitation, which is nurture." },
      { text: "social learning theory.", correct: true, why: "Learning gendered behavior via imitation of models plus reinforcement is the social learning account of gender." }
    ],
    keyConcept: "Social learning of gender"
  },
  {
    id: "3.3-7", topic: "3.3", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "The degree to which a child takes on a traditional masculine or feminine role is referred to as",
    choices: [
      { text: "gender typing.", correct: true, why: "Gender typing is precisely the extent to which a child adopts a traditional gender role." },
      { text: "androgyny.", why: "Androgyny is a blend of masculine and feminine traits, the opposite emphasis from strong role adoption." },
      { text: "gender identity.", why: "Gender identity is the internal sense of one's gender, not the degree of traditional role adoption." },
      { text: "sexual orientation.", why: "Sexual orientation concerns attraction, not adoption of gender roles." }
    ],
    keyConcept: "Gender typing"
  },
  {
    id: "3.3-8", topic: "3.3", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "Which statement best reflects the current scientific understanding of sexual orientation?",
    choices: [
      { text: "It is a deliberate choice that can be easily changed at will.", why: "Evidence indicates orientation is not a simple choice, so this contradicts the scientific view." },
      { text: "It is an enduring pattern of attraction shaped by both biological and environmental influences.", correct: true, why: "Science treats orientation as a stable pattern of attraction with biological and environmental contributions." },
      { text: "It is determined entirely by parenting style.", why: "No single environmental cause like parenting determines orientation; multiple biological and environmental factors are involved." },
      { text: "It falls into exactly two rigid categories with nothing in between.", why: "Orientation is understood to lie along a continuum rather than in two rigid boxes." }
    ],
    keyConcept: "Sexual orientation (scientific view)"
  },
  {
    id: "3.3-9", topic: "3.3", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "The best-supported scientific view of how gender develops is that it arises from",
    choices: [
      { text: "biological factors alone, such as hormones.", why: "Biology contributes, but social factors like modeling and schemas also clearly shape gender, so 'alone' is too narrow." },
      { text: "socialization alone, such as rewards and imitation.", why: "Socialization matters, but biological influences also contribute, so 'alone' is incomplete." },
      { text: "both biological factors and social factors interacting.", correct: true, why: "Like most development, gender reflects an interaction of nature (e.g., hormones) and nurture (e.g., social learning and schemas)." },
      { text: "random chance unrelated to biology or environment.", why: "Gender development is not random; it is systematically influenced by biological and social factors." }
    ],
    keyConcept: "Nature and nurture in gender development"
  },
  {
    id: "3.3-10", topic: "3.3", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants to measure young children's gender typing objectively and neutrally. The most valid approach is to",
    choices: [
      { text: "ask parents whether they personally approve of how their child behaves.", why: "Parental approval is a subjective value judgment, not an objective measure of the child's behavior." },
      { text: "have children rate whether they think their gender is 'better.'", why: "That measures an opinion and injects bias, rather than objectively assessing gender typing." },
      { text: "measure each child's height and weight.", why: "Physical size is unrelated to the degree of traditional gender-role adoption." },
      { text: "record children's toy and activity choices in a standardized free-play setting.", correct: true, why: "Systematically observing actual choices in a controlled setting is an objective operational measure of gender typing." }
    ],
    keyConcept: "Operationalizing gender typing neutrally"
  },
  {
    id: "3.3-11", topic: "3.3", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "Twin studies find that identical twins are more similar in sexual orientation than fraternal twins, yet the concordance is far below 100%. The best interpretation is that sexual orientation is",
    choices: [
      { text: "influenced by both genetic and environmental factors.", correct: true, why: "Greater identical-twin similarity implies a genetic contribution, while concordance below 100% shows environment also matters." },
      { text: "entirely genetically determined.", why: "If it were entirely genetic, identical twins (who share all genes) would show 100% concordance, which they do not." },
      { text: "entirely environmentally determined.", why: "A purely environmental account cannot explain why identical twins are more alike than fraternal twins." },
      { text: "completely unrelated to biology.", why: "The higher identical-twin similarity points to a real biological component, contradicting 'unrelated to biology.'" }
    ],
    keyConcept: "Interpreting twin data on orientation"
  }
];

window.APSYCH.questions["3.4"] = [
  {
    id: "3.4-1", topic: "3.4", unit: 3, practice: 1, difficulty: "Easy",
    stem: "A 5-month-old acts as if a toy no longer exists the moment it is hidden under a blanket. According to Piaget, the infant has not yet developed",
    choices: [
      { text: "conservation.", why: "Conservation concerns quantity staying constant despite appearance changes, a later preoperational/concrete milestone." },
      { text: "object permanence.", correct: true, why: "Object permanence is the understanding that objects continue to exist when out of sight, typically absent early in the sensorimotor stage." },
      { text: "theory of mind.", why: "Theory of mind is understanding others' beliefs, not the persistence of hidden objects." },
      { text: "egocentrism.", why: "Egocentrism is difficulty taking another's viewpoint, not the awareness that hidden objects still exist." }
    ],
    keyConcept: "Object permanence (sensorimotor stage)"
  },
  {
    id: "3.4-2", topic: "3.4", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A 4-year-old watches juice poured from a short, wide glass into a tall, thin one and insists the tall glass now has more juice. The child has not yet mastered",
    choices: [
      { text: "object permanence.", why: "Object permanence is about hidden objects existing, which this older child already has." },
      { text: "assimilation.", why: "Assimilation is a process for updating schemas, not a milestone the child is failing here." },
      { text: "conservation.", correct: true, why: "Failing to see that quantity is unchanged despite a new shape is a lack of conservation, typical of the preoperational stage." },
      { text: "scaffolding.", why: "Scaffolding is Vygotsky's supported-learning concept, not the conservation ability being tested." }
    ],
    keyConcept: "Conservation and the preoperational stage"
  },
  {
    id: "3.4-3", topic: "3.4", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A toddler who has a schema for 'dog' sees a cow for the first time and calls it a 'doggy.' Interpreting the new animal using the existing schema is an example of",
    choices: [
      { text: "accommodation.", why: "Accommodation would involve revising the schema to create a new 'cow' category, which has not happened yet." },
      { text: "conservation.", why: "Conservation concerns quantity and appearance, not categorizing a new animal." },
      { text: "object permanence.", why: "Object permanence is about hidden objects existing, unrelated to labeling the cow." },
      { text: "assimilation.", correct: true, why: "Fitting new information (the cow) into an existing schema (dog) without changing the schema is assimilation." }
    ],
    keyConcept: "Assimilation"
  },
  {
    id: "3.4-4", topic: "3.4", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "After being corrected several times, the same toddler stops calling cows 'doggy' and forms a separate 'cow' category. Revising the schema to fit reality is",
    choices: [
      { text: "accommodation.", correct: true, why: "Adjusting or creating a new schema so it fits the new information is accommodation." },
      { text: "assimilation.", why: "Assimilation would keep using the old dog schema; here the child changes the schema, which is different." },
      { text: "egocentrism.", why: "Egocentrism is difficulty taking another's perspective, not updating a category." },
      { text: "spontaneous recovery.", why: "Spontaneous recovery is a conditioning term, unrelated to schema revision." }
    ],
    keyConcept: "Accommodation"
  },
  {
    id: "3.4-5", topic: "3.4", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A preschooler covers her own eyes and announces, 'Now you can't see me!' This best illustrates Piaget's concept of",
    choices: [
      { text: "conservation.", why: "Conservation concerns constant quantity despite appearance, not assuming others share her viewpoint." },
      { text: "egocentrism.", correct: true, why: "Assuming others share her own visual perspective is egocentrism, a hallmark of preoperational thought." },
      { text: "object permanence.", why: "The child clearly knows objects exist; the error is assuming others see what she sees." },
      { text: "accommodation.", why: "Accommodation is updating a schema, not the perspective-taking failure shown here." }
    ],
    keyConcept: "Egocentrism"
  },
  {
    id: "3.4-6", topic: "3.4", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "A 15-year-old can reason about hypothetical situations, weigh abstract principles like justice, and systematically test possibilities in her head. According to Piaget, she is displaying thinking characteristic of the",
    choices: [
      { text: "sensorimotor stage.", why: "The sensorimotor stage involves knowing the world through senses and action in infancy, not abstract reasoning." },
      { text: "preoperational stage.", why: "Preoperational children rely on symbols but cannot yet reason abstractly and hypothetically." },
      { text: "formal operational stage.", correct: true, why: "Abstract, hypothetical, and systematic reasoning defines Piaget's formal operational stage." },
      { text: "concrete operational stage.", why: "Concrete operational thinkers reason logically about concrete situations but struggle with abstract hypotheticals." }
    ],
    keyConcept: "Formal operational stage"
  },
  {
    id: "3.4-7", topic: "3.4", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A tutor gives a struggling student just enough hints to solve a problem she could not solve alone, then gradually withdraws the hints as she improves. This teaching approach reflects Vygotsky's concept of",
    choices: [
      { text: "assimilation.", why: "Assimilation is fitting new information into an existing schema, not providing graded support." },
      { text: "conservation.", why: "Conservation is a Piagetian quantity concept, unrelated to supported problem-solving." },
      { text: "object permanence.", why: "Object permanence concerns hidden objects, not tutoring support." },
      { text: "scaffolding within the zone of proximal development.", correct: true, why: "Temporary, fading support that helps a learner do what they cannot yet do alone is scaffolding in the ZPD." }
    ],
    keyConcept: "Scaffolding and the zone of proximal development"
  },
  {
    id: "3.4-8", topic: "3.4", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "To test whether children understand that another person can hold a false belief, a researcher has a child predict where a character will look for an object that was moved while the character was away. This task measures",
    choices: [
      { text: "theory of mind.", correct: true, why: "Predicting another's belief that differs from reality is the classic false-belief test of theory of mind." },
      { text: "conservation.", why: "Conservation tests quantity judgments, not understanding of others' beliefs." },
      { text: "object permanence.", why: "Object permanence tests whether hidden objects are known to exist, not others' mental states." },
      { text: "attachment style.", why: "Attachment style concerns caregiver bonds, not belief reasoning." }
    ],
    keyConcept: "Theory of mind (false-belief task)"
  },
  {
    id: "3.4-9", topic: "3.4", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "Using more sensitive methods, later researchers found that infants show object permanence earlier than Piaget claimed. This finding best illustrates that Piaget",
    choices: [
      { text: "overestimated young children's abilities.", why: "Finding abilities earlier than claimed means he underestimated, not overestimated, them." },
      { text: "underestimated young children's cognitive abilities.", correct: true, why: "Evidence that abilities appear earlier than he proposed indicates Piaget underestimated young children." },
      { text: "was correct that abilities appear exactly on schedule.", why: "The new evidence contradicts his timeline, so it does not confirm exact scheduling." },
      { text: "studied only adults, not children.", why: "Piaget famously studied children; his stage ages are what the new methods revised." }
    ],
    keyConcept: "Critiques of Piaget"
  },
  {
    id: "3.4-10", topic: "3.4", unit: 3, practice: 3, difficulty: "Difficult",
    stem: "The graph shows the percentage of children who pass a conservation task at each age. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Percentage passing a conservation task, by age",
      categories: ["Age 4","Age 5","Age 6","Age 7"],
      values: [10,25,55,85],
      yLabel: "% passing", max: 100
    },
    choices: [
      { text: "Conservation is already fully present at age 4.", why: "Only 10% pass at age 4, so conservation is clearly not yet established then." },
      { text: "Age is unrelated to conservation ability.", why: "The steady rise from 10% to 85% shows a strong relationship with age." },
      { text: "The ability to conserve rises sharply with age, consistent with the shift from preoperational to concrete operational thought.", correct: true, why: "Passing rates climb from 10% to 85% across ages 4-7, matching the expected emergence of conservation around the concrete operational stage." },
      { text: "Conservation ability declines as children get older.", why: "The data increase with age, the opposite of a decline." }
    ],
    keyConcept: "Interpreting age trends in conservation"
  },
  {
    id: "3.4-11", topic: "3.4", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "A gerontologist wants to show that crystallized intelligence (vocabulary) stays stable while fluid intelligence (novel problem-solving speed) declines in late adulthood. A longitudinal design would be preferable to a cross-sectional one here mainly because it",
    choices: [
      { text: "is always faster and cheaper than cross-sectional research.", why: "Longitudinal studies are actually slower and costlier; that is not the advantage." },
      { text: "allows the researcher to randomly assign participants to ages.", why: "Age can never be randomly assigned in any design, so this is not a benefit." },
      { text: "eliminates the need for any comparison across ages.", why: "The study still compares abilities across ages; longitudinal design just does so within the same people." },
      { text: "measures change within the same individuals over time, avoiding cohort confounds.", correct: true, why: "Following the same people separates true aging effects from generational (cohort) differences that plague cross-sectional data." }
    ],
    keyConcept: "Longitudinal advantage for studying cognitive aging"
  }
];

window.APSYCH.questions["3.5"] = [
  {
    id: "3.5-1", topic: "3.5", unit: 3, practice: 1, difficulty: "Easy",
    stem: "The smallest distinctive unit of sound in a spoken language, such as the 'b' sound in 'bat,' is a",
    choices: [
      { text: "phoneme.", correct: true, why: "A phoneme is the smallest distinctive sound unit of a language." },
      { text: "morpheme.", why: "A morpheme is the smallest unit that carries meaning, which is larger than a single sound." },
      { text: "syntax.", why: "Syntax is the rules of word order, not an individual sound." },
      { text: "semantic.", why: "Semantics concerns meaning; it is not a unit of sound." }
    ],
    keyConcept: "Phoneme"
  },
  {
    id: "3.5-2", topic: "3.5", unit: 3, practice: 1, difficulty: "Easy",
    stem: "The smallest unit of language that carries meaning, such as the '-s' that makes a word plural, is a",
    choices: [
      { text: "phoneme.", why: "A phoneme is a unit of sound with no meaning of its own; a plural marker carries meaning." },
      { text: "morpheme.", correct: true, why: "A morpheme is the smallest meaning-carrying unit, and a plural '-s' qualifies." },
      { text: "syntax.", why: "Syntax is the system of word-order rules, not a single meaningful unit." },
      { text: "telegraphic phrase.", why: "Telegraphic speech is a stage of two-word utterances, not a unit of meaning." }
    ],
    keyConcept: "Morpheme"
  },
  {
    id: "3.5-3", topic: "3.5", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A two-year-old says 'want cookie' and 'go car,' leaving out smaller connecting words. This pattern is called",
    choices: [
      { text: "babbling.", why: "Babbling is earlier, pre-word production of speech sounds, not meaningful two-word phrases." },
      { text: "overgeneralization.", why: "Overgeneralization is misapplying a grammar rule (e.g., 'goed'), not omitting small words." },
      { text: "telegraphic speech.", correct: true, why: "Two-word utterances that drop function words, like a telegram, are telegraphic speech." },
      { text: "cooing.", why: "Cooing is the earliest vowel-like sounds of infancy, well before two-word speech." }
    ],
    keyConcept: "Telegraphic speech"
  },
  {
    id: "3.5-4", topic: "3.5", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A 5-month-old in Japan and a 5-month-old in Kenya both babble a wide variety of sounds, including some not used in their own languages. This shows that early babbling",
    choices: [
      { text: "contains only the sounds of the infant's native language from birth.", why: "Early babbling actually includes non-native sounds, contradicting this option." },
      { text: "is identical to adult telegraphic speech.", why: "Babbling is pre-linguistic sound play, not the later two-word telegraphic stage." },
      { text: "proves language is learned entirely by imitation.", why: "The presence of sounds the infants have not heard argues against pure imitation." },
      { text: "includes a broad range of speech sounds before narrowing to the native language.", correct: true, why: "Infants initially babble sounds from many languages, then narrow to those they hear around them." }
    ],
    keyConcept: "Universality of babbling"
  },
  {
    id: "3.5-5", topic: "3.5", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A child who previously said 'I ran' now says 'I runned.' This error most directly shows that the child has",
    choices: [
      { text: "learned a grammatical rule and is applying it too broadly (overgeneralization).", correct: true, why: "Producing 'runned' shows the child internalized the regular past-tense '-ed' rule and overextended it." },
      { text: "regressed and lost earlier language ability.", why: "This is not regression; it reflects active rule learning, a normal advance." },
      { text: "stopped learning grammar entirely.", why: "The mistake actually reveals grammar rule use, so learning has not stopped." },
      { text: "simply imitated an adult who said 'runned.'", why: "Adults do not model 'runned'; the child generated it by applying a rule, not by imitation." }
    ],
    keyConcept: "Overgeneralization (overregularization)"
  },
  {
    id: "3.5-6", topic: "3.5", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "The view that humans are born with an innate readiness to acquire grammar is most closely associated with",
    choices: [
      { text: "Skinner's reinforcement-based account.", why: "Skinner argued language is learned through reinforcement and imitation, the opposite of an innate-grammar view." },
      { text: "Chomsky's concept of universal grammar.", correct: true, why: "Chomsky proposed an inborn universal grammar and language acquisition device enabling rapid language learning." },
      { text: "Pavlov's classical conditioning.", why: "Pavlov studied reflexive associative learning, not innate grammar." },
      { text: "Piaget's object permanence.", why: "Object permanence is a cognitive milestone, not a theory of innate grammar." }
    ],
    keyConcept: "Chomsky and universal grammar"
  },
  {
    id: "3.5-7", topic: "3.5", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "Children who receive no exposure to any language until after puberty rarely achieve full native fluency. This observation supports the idea of a",
    choices: [
      { text: "cohort effect.", why: "A cohort effect is a generational research confound, not a developmental window for language." },
      { text: "conservation deficit.", why: "Conservation is a Piagetian quantity concept, unrelated to language timing." },
      { text: "critical (sensitive) period for language.", correct: true, why: "A limited early window for acquiring language easily and completely is a critical/sensitive period." },
      { text: "reinforcement schedule.", why: "Reinforcement schedules concern operant conditioning, not a language-learning window." }
    ],
    keyConcept: "Critical period for language"
  },
  {
    id: "3.5-8", topic: "3.5", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "A behaviorist claims children learn language mainly by imitating and being reinforced for correct words. Which observation most strongly challenges this claim?",
    choices: [
      { text: "Children imitate their parents' regional accents.", why: "Accent imitation is consistent with the behaviorist account, so it does not challenge it." },
      { text: "Children are praised when they speak correctly.", why: "Praise for correct speech supports, rather than challenges, a reinforcement explanation." },
      { text: "Children learn words for objects they see around them.", why: "Learning object labels fits comfortably with imitation and reinforcement, posing no challenge." },
      { text: "Children produce novel rule-based errors like 'goed' that they never heard adults say.", correct: true, why: "Generating forms no adult modeled shows children apply internal rules, which pure imitation and reinforcement cannot explain." }
    ],
    keyConcept: "Nativist challenge to behaviorist language learning"
  },
  {
    id: "3.5-9", topic: "3.5", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "The sentence 'Colorless green ideas sleep furiously' follows correct word-order rules but is meaningless. It has correct ______ but violates ______.",
    choices: [
      { text: "syntax; semantics.", correct: true, why: "Proper word order is correct syntax, while the lack of coherent meaning is a semantic violation." },
      { text: "semantics; syntax.", why: "This reverses the terms; the sentence's grammar (syntax) is fine and its meaning (semantics) is broken." },
      { text: "phonemes; morphemes.", why: "Those are sound and meaning units of words, not the sentence-level grammar-vs-meaning contrast." },
      { text: "babbling; cooing.", why: "Those are infant pre-speech stages, irrelevant to analyzing this sentence." }
    ],
    keyConcept: "Syntax vs. semantics"
  },
  {
    id: "3.5-10", topic: "3.5", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "To track how a single group of children's vocabulary grows from age 1 to age 4, the most appropriate design is",
    choices: [
      { text: "cross-sectional, testing different 1-, 2-, 3-, and 4-year-olds once.", why: "That compares different children at one time and cannot show growth within the same individuals." },
      { text: "longitudinal, testing the same children repeatedly over the years.", correct: true, why: "Following the same children over time directly captures individual vocabulary growth without cohort confounds." },
      { text: "a single case study of one child's first word.", why: "One child's first word cannot capture the growth trajectory of a group across four years." },
      { text: "an experiment randomly assigning children to ages.", why: "Age cannot be randomly assigned, making this design impossible." }
    ],
    keyConcept: "Design choice for tracking language growth"
  },
  {
    id: "3.5-11", topic: "3.5", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "A researcher wants to identify when infants enter the one-word stage. The most valid operational definition is",
    choices: [
      { text: "the age at which the infant first cries after birth.", why: "Crying is a reflexive newborn behavior, not evidence of the one-word language stage." },
      { text: "the parents' guess about how smart the baby is.", why: "A subjective intelligence guess does not measure the onset of single-word speech." },
      { text: "the age at which the infant reliably produces single words to name objects or make requests.", correct: true, why: "Defining the stage by observable, reliable single-word use is a clear, valid operationalization." },
      { text: "the number of hours the infant sleeps each night.", why: "Sleep duration is unrelated to the emergence of first words." }
    ],
    keyConcept: "Operationalizing the one-word stage"
  }
];

window.APSYCH.questions["3.6"] = [
  {
    id: "3.6-1", topic: "3.6", unit: 3, practice: 1, difficulty: "Easy",
    stem: "Harlow's infant monkeys spent most of their time clinging to a soft cloth 'mother' rather than a bare wire 'mother' that dispensed milk. This demonstrated the importance of",
    choices: [
      { text: "food as the sole basis of attachment.", why: "The monkeys chose the non-feeding cloth mother, directly contradicting the idea that feeding drives attachment." },
      { text: "operant shaping of clinging.", why: "The preference was not built by reinforcing successive approximations; it reflected a need for comforting contact." },
      { text: "imprinting on a moving object.", why: "Imprinting involves following the first moving object, which is Lorenz's work, not Harlow's cloth-mother finding." },
      { text: "contact comfort.", correct: true, why: "Preferring the soft cloth mother over the feeding wire one showed that contact comfort, not food, underlies attachment." }
    ],
    keyConcept: "Harlow and contact comfort"
  },
  {
    id: "3.6-2", topic: "3.6", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "In the Strange Situation, a toddler explores the room while her parent is present, cries when the parent leaves, and is quickly comforted upon the parent's return. This pattern is",
    choices: [
      { text: "secure attachment.", correct: true, why: "Using the caregiver as a safe base, showing distress at separation, and being soothed on reunion defines secure attachment." },
      { text: "insecure-avoidant attachment.", why: "Avoidant infants show little distress and ignore the caregiver on reunion, unlike this toddler." },
      { text: "insecure-anxious/resistant attachment.", why: "Anxious/resistant infants are hard to console on reunion; this toddler is quickly comforted." },
      { text: "imprinting.", why: "Imprinting is a rapid critical-period bond in some animals, not a Strange Situation attachment classification." }
    ],
    keyConcept: "Secure attachment"
  },
  {
    id: "3.6-3", topic: "3.6", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "In the Strange Situation, a toddler shows little distress when the parent leaves and largely ignores the parent upon return. This pattern is best classified as",
    choices: [
      { text: "secure attachment.", why: "Secure infants show distress at separation and seek comfort on reunion, unlike this indifferent toddler." },
      { text: "insecure-avoidant attachment.", correct: true, why: "Minimal separation distress and ignoring the caregiver on reunion characterize insecure-avoidant attachment." },
      { text: "authoritative attachment.", why: "'Authoritative' describes a parenting style, not an attachment classification." },
      { text: "generativity.", why: "Generativity is an adult Eriksonian stage, not an infant attachment pattern." }
    ],
    keyConcept: "Insecure-avoidant attachment"
  },
  {
    id: "3.6-4", topic: "3.6", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "Parents who set firm, consistent rules but also explain their reasoning and respond warmly to their child's needs are using a parenting style best described as",
    choices: [
      { text: "authoritarian.", why: "Authoritarian parents demand obedience with little warmth or explanation, unlike these responsive parents." },
      { text: "permissive.", why: "Permissive parents set few rules; these parents set firm, consistent rules." },
      { text: "authoritative.", correct: true, why: "Combining firm structure with warmth and open communication is the authoritative style, linked to the best outcomes." },
      { text: "neglectful.", why: "Neglectful parents are uninvolved and unresponsive, the opposite of these warm, engaged parents." }
    ],
    keyConcept: "Authoritative parenting"
  },
  {
    id: "3.6-5", topic: "3.6", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A parent demands strict obedience, offers little warmth, and responds to questions with 'because I said so.' This parenting style is",
    choices: [
      { text: "authoritative.", why: "Authoritative parents pair firmness with warmth and explanation, which this cold, unexplaining parent lacks." },
      { text: "permissive.", why: "Permissive parents make few demands; this parent is highly demanding." },
      { text: "androgynous.", why: "Androgyny describes blended gender traits, not a parenting style." },
      { text: "authoritarian.", correct: true, why: "High demands and low warmth with obedience 'because I said so' is the authoritarian style." }
    ],
    keyConcept: "Authoritarian vs. authoritative"
  },
  {
    id: "3.6-6", topic: "3.6", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "According to Erikson, the central psychosocial task of adolescence is",
    choices: [
      { text: "identity vs. role confusion.", correct: true, why: "Forming a coherent sense of self, identity vs. role confusion, is Erikson's adolescent crisis." },
      { text: "trust vs. mistrust.", why: "Trust vs. mistrust is the infancy stage, not the adolescent task." },
      { text: "integrity vs. despair.", why: "Integrity vs. despair is the late-adulthood stage, not adolescence." },
      { text: "intimacy vs. isolation.", why: "Intimacy vs. isolation is the young-adulthood stage that follows adolescence." }
    ],
    keyConcept: "Erikson: identity vs. role confusion"
  },
  {
    id: "3.6-7", topic: "3.6", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "A psychologist describes how an infant learns whether the world is dependable based on responsive caregiving, calling this 'trust vs. mistrust.' This idea comes from",
    choices: [
      { text: "Piaget's cognitive-stage theory.", why: "Piaget described cognitive stages like sensorimotor, not psychosocial crises like trust vs. mistrust." },
      { text: "Erikson's psychosocial theory.", correct: true, why: "Trust vs. mistrust is the first of Erikson's eight psychosocial stages." },
      { text: "Pavlov's classical conditioning.", why: "Pavlov studied reflexive associative learning, not psychosocial development." },
      { text: "Skinner's operant conditioning.", why: "Skinner studied consequences shaping voluntary behavior, not Erikson's developmental crises." }
    ],
    keyConcept: "Distinguishing Erikson from Piaget and conditioning"
  },
  {
    id: "3.6-8", topic: "3.6", unit: 3, practice: 3, difficulty: "Difficult",
    stem: "The graph shows the distribution of attachment classifications in a sample of infants. Which statement is best supported?",
    stimulus: {
      type: "bars",
      caption: "Distribution of infant attachment classifications",
      categories: ["Secure","Avoidant","Anxious/Resistant"],
      values: [62,23,15],
      yLabel: "% of infants", max: 100
    },
    choices: [
      { text: "Most infants in the sample were insecurely attached.", why: "Avoidant and anxious/resistant together total 38%, a minority, so most were not insecure." },
      { text: "Avoidant attachment was the most common classification.", why: "Avoidant is 23%, well below the 62% secure group, so it is not the most common." },
      { text: "A majority of the infants were classified as securely attached.", correct: true, why: "At 62%, secure attachment exceeds half the sample, so a majority were secure." },
      { text: "No infants were securely attached.", why: "The secure bar is the tallest at 62%, directly contradicting this claim." }
    ],
    keyConcept: "Reading attachment-style percentages"
  },
  {
    id: "3.6-9", topic: "3.6", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "The Strange Situation assesses an infant's attachment by",
    choices: [
      { text: "having the infant complete a written questionnaire.", why: "Infants cannot complete questionnaires; the method relies on behavioral observation." },
      { text: "measuring the infant's IQ score.", why: "The Strange Situation assesses attachment, not intelligence." },
      { text: "recording the infant's brain-wave patterns during sleep.", why: "It observes behavior during separations and reunions, not sleep EEG." },
      { text: "observing the infant's reactions to a caregiver's structured departures and returns.", correct: true, why: "Ainsworth's procedure classifies attachment from how infants respond to separations from and reunions with the caregiver." }
    ],
    keyConcept: "Strange Situation methodology"
  },
  {
    id: "3.6-10", topic: "3.6", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "Studies linking authoritative parenting to better child outcomes are usually correlational. This means researchers cannot firmly conclude that",
    choices: [
      { text: "authoritative parenting causes the better outcomes, since a third variable could influence both.", correct: true, why: "Correlation does not establish causation; an unmeasured factor (e.g., child temperament) might drive both parenting and outcomes." },
      { text: "the two variables are related at all.", why: "Correlational studies do establish a relationship; what they cannot establish is causation." },
      { text: "parenting styles actually exist.", why: "The existence of parenting styles is not what the correlational limitation calls into question." },
      { text: "outcomes were measured in the study.", why: "Outcomes clearly were measured; the limitation concerns causal interpretation, not measurement." }
    ],
    keyConcept: "Correlation vs. causation in parenting research"
  },
  {
    id: "3.6-11", topic: "3.6", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "A researcher presents moral dilemmas and classifies people's reasoning as based on avoiding punishment, upholding social rules, or applying abstract ethical principles. This approach is most associated with",
    choices: [
      { text: "Ainsworth's attachment styles.", why: "Ainsworth classified infant attachment, not levels of moral reasoning." },
      { text: "Kohlberg's stages of moral reasoning.", correct: true, why: "Sorting justifications into preconventional, conventional, and postconventional levels is Kohlberg's method for studying moral reasoning." },
      { text: "Piaget's object permanence.", why: "Object permanence is an infant cognitive milestone, not a framework for moral reasoning." },
      { text: "Skinner's reinforcement schedules.", why: "Reinforcement schedules concern operant conditioning, not moral judgment." }
    ],
    keyConcept: "Kohlberg's moral reasoning"
  }
];

window.APSYCH.questions["3.7"] = [
  {
    id: "3.7-1", topic: "3.7", unit: 3, practice: 1, difficulty: "Easy",
    stem: "In Pavlov's experiment, food placed in a dog's mouth naturally causes the dog to salivate. The food is the",
    choices: [
      { text: "conditioned stimulus (CS).", why: "The food triggers salivation without any learning, so it is unconditioned, not conditioned." },
      { text: "neutral stimulus (NS).", why: "A neutral stimulus produces no relevant response at first; food already triggers salivation." },
      { text: "unconditioned stimulus (UCS).", correct: true, why: "Food naturally and automatically elicits salivation without learning, making it the unconditioned stimulus." },
      { text: "conditioned response (CR).", why: "The food is a stimulus, not a response, and it is unconditioned rather than conditioned." }
    ],
    keyConcept: "Identifying the unconditioned stimulus"
  },
  {
    id: "3.7-2", topic: "3.7", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "After a bell is repeatedly paired with food, the dog begins to salivate to the bell alone. The bell is now the",
    choices: [
      { text: "unconditioned stimulus (UCS).", why: "The bell only triggers salivation after learning, so it is conditioned, not unconditioned." },
      { text: "unconditioned response (UCR).", why: "The bell is a stimulus, not a response." },
      { text: "conditioned response (CR).", why: "The salivation is the conditioned response; the bell that triggers it is the conditioned stimulus." },
      { text: "conditioned stimulus (CS).", correct: true, why: "A once-neutral bell that triggers salivation after pairing with food has become the conditioned stimulus." }
    ],
    keyConcept: "Identifying the conditioned stimulus"
  },
  {
    id: "3.7-3", topic: "3.7", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "The dog's salivation in response to the bell alone (after conditioning) is the",
    choices: [
      { text: "conditioned response (CR).", correct: true, why: "A learned response to the conditioned stimulus (the bell) is the conditioned response." },
      { text: "unconditioned response (UCR).", why: "Salivation to food is unconditioned, but salivation to the learned bell signal is conditioned." },
      { text: "conditioned stimulus (CS).", why: "The salivation is a response, not the stimulus that triggers it." },
      { text: "neutral stimulus (NS).", why: "The salivation is a response, and it is conditioned, not a neutral stimulus." }
    ],
    keyConcept: "Identifying the conditioned response"
  },
  {
    id: "3.7-4", topic: "3.7", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "After surviving a car crash, a person's heart pounds every time they hear tires screeching, even in safe situations. The pounding heart in response to the screech is best understood as a",
    choices: [
      { text: "operantly reinforced voluntary behavior.", why: "A pounding heart is an involuntary reflex, not a voluntary operant behavior shaped by consequences." },
      { text: "conditioned response produced by classical conditioning.", correct: true, why: "A once-neutral sound now triggers an involuntary fear reaction, a classically conditioned response." },
      { text: "unconditioned response to a natural stimulus.", why: "Screeching tires do not naturally cause a pounding heart without the crash association, so the response is conditioned." },
      { text: "example of shaping through successive approximations.", why: "Shaping is an operant technique for building voluntary behavior, not this reflexive fear reaction." }
    ],
    keyConcept: "Classical conditioning of involuntary responses"
  },
  {
    id: "3.7-5", topic: "3.7", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A dog conditioned to salivate to a bell now hears the bell many times with no food following. Gradually, the salivation to the bell stops. This process is",
    choices: [
      { text: "spontaneous recovery.", why: "Spontaneous recovery is the later reappearance of the response, not its initial fading." },
      { text: "generalization.", why: "Generalization is responding to similar stimuli, not the weakening of the response." },
      { text: "extinction.", correct: true, why: "Repeatedly presenting the CS without the UCS weakens and eventually eliminates the CR — extinction." },
      { text: "acquisition.", why: "Acquisition is the initial learning of the association, the opposite of the response fading." }
    ],
    keyConcept: "Extinction"
  },
  {
    id: "3.7-6", topic: "3.7", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "After being conditioned to fear a white rat, Little Albert also showed fear of a white rabbit, a dog, and a fuzzy coat. This spread of the fear to similar stimuli is called",
    choices: [
      { text: "discrimination.", why: "Discrimination is responding only to the specific CS and not to similar stimuli — the opposite pattern." },
      { text: "extinction.", why: "Extinction is the fading of a conditioned response, not its spread to new stimuli." },
      { text: "spontaneous recovery.", why: "Spontaneous recovery is a response returning after extinction, not spreading to similar objects." },
      { text: "generalization.", correct: true, why: "Responding to stimuli similar to the conditioned stimulus is stimulus generalization." }
    ],
    keyConcept: "Stimulus generalization"
  },
  {
    id: "3.7-7", topic: "3.7", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "A dog learns to salivate to a high-pitched tone that predicts food but not to a low-pitched tone that never precedes food. This learned ability to respond differently to the two tones is",
    choices: [
      { text: "discrimination.", correct: true, why: "Responding to the specific CS but not to a similar stimulus that predicts nothing is stimulus discrimination." },
      { text: "generalization.", why: "Generalization would mean responding to both similar tones; here the dog responds to only one." },
      { text: "extinction.", why: "Extinction is the weakening of a response, not the ability to tell two stimuli apart." },
      { text: "acquisition.", why: "Acquisition is the initial learning of an association, not distinguishing between two tones." }
    ],
    keyConcept: "Stimulus discrimination"
  },
  {
    id: "3.7-8", topic: "3.7", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "Watson's Little Albert study, in which an infant was conditioned to fear a white rat, would be considered unethical by modern standards mainly because",
    choices: [
      { text: "it used far too many participants to be manageable.", why: "The study famously used a single infant, so sample size was not the ethical problem." },
      { text: "it caused psychological harm and never removed the conditioned fear (no debriefing or informed consent).", correct: true, why: "Inducing lasting fear in an infant without consent or a plan to undo it violates modern protection-from-harm standards." },
      { text: "it relied on a longitudinal design lasting decades.", why: "It was a short demonstration, not a decades-long study, so design length is not the issue." },
      { text: "it measured salivation rather than fear.", why: "The study measured fear responses, and the ethical concern is the harm caused, not the measure used." }
    ],
    keyConcept: "Ethics of the Little Albert study"
  },
  {
    id: "3.7-9", topic: "3.7", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "Garcia found that rats readily learned to avoid a taste that preceded illness by several hours, in just one trial. This finding challenged the earlier assumption that",
    choices: [
      { text: "learning can occur without any reinforcement.", why: "That statement is about operant/latent learning, not the associability point Garcia's work addressed." },
      { text: "rats are capable of tasting food.", why: "Tasting ability was never in question; the finding concerned how selectively associations form." },
      { text: "any two stimuli can be associated equally easily.", correct: true, why: "One-trial, long-delay taste aversion shows biological preparedness makes some associations far easier, contradicting equal associability." },
      { text: "classical conditioning exists at all.", why: "Garcia's work refined conditioning principles rather than denying that conditioning occurs." }
    ],
    keyConcept: "Taste aversion and biological preparedness"
  },
  {
    id: "3.7-10", topic: "3.7", unit: 3, practice: 3, difficulty: "Difficult",
    stem: "The graph plots a dog's salivation to a bell across trials in which the bell is presented without food. The trend shown illustrates which process?",
    stimulus: {
      type: "scatter",
      caption: "Salivation to the bell across trials with no food",
      points: [[1,10],[2,8],[3,6],[4,3],[5,1],[6,1]],
      xLabel: "Trial (bell presented without food)",
      yLabel: "Drops of saliva",
      alt: "Salivation drops steadily from 10 to about 1 across six trials with no food."
    },
    choices: [
      { text: "Acquisition of a new conditioned response.", why: "Acquisition would show the response increasing, but the graph shows it decreasing." },
      { text: "Spontaneous recovery.", why: "Spontaneous recovery is a sudden rebound after a rest, not the steady decline plotted here." },
      { text: "Stimulus generalization.", why: "Generalization involves responding to new similar stimuli, not the fading of a response over repeated trials." },
      { text: "Extinction of the conditioned response.", correct: true, why: "Presenting the CS (bell) without the UCS (food) causes the CR to weaken across trials, exactly the declining curve shown." }
    ],
    keyConcept: "Interpreting an extinction curve"
  },
  {
    id: "3.7-11", topic: "3.7", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "Before conditioning, a tone produces no salivation, and food reliably produces salivation. Before any pairing, the tone is best labeled the ______, and the salivation to food is the ______.",
    choices: [
      { text: "neutral stimulus; unconditioned response.", correct: true, why: "Before conditioning the tone is neutral, and salivation naturally triggered by food is the unconditioned response." },
      { text: "conditioned stimulus; conditioned response.", why: "Before pairing, the tone is not yet conditioned, and salivation to food is unconditioned, so both labels are wrong." },
      { text: "unconditioned stimulus; unconditioned response.", why: "The tone is not an unconditioned stimulus; it triggers no salivation before pairing." },
      { text: "conditioned response; neutral stimulus.", why: "This mislabels a stimulus as a response and vice versa." }
    ],
    keyConcept: "Labeling the four conditioning components"
  }
];

window.APSYCH.questions["3.8"] = [
  {
    id: "3.8-1", topic: "3.8", unit: 3, practice: 1, difficulty: "Easy",
    stem: "A teacher gives a sticker each time a student turns in homework, and homework completion increases. The sticker is an example of",
    choices: [
      { text: "negative reinforcement.", why: "Negative reinforcement removes something aversive; the sticker is an added reward, not a removed annoyance." },
      { text: "positive reinforcement.", correct: true, why: "Adding a pleasant stimulus (a sticker) that increases the behavior is positive reinforcement." },
      { text: "positive punishment.", why: "Punishment decreases behavior, but homework completion increased, so this is reinforcement." },
      { text: "negative punishment.", why: "Negative punishment removes something pleasant to reduce behavior; here a reward is added and behavior rises." }
    ],
    keyConcept: "Positive reinforcement"
  },
  {
    id: "3.8-2", topic: "3.8", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A driver buckles the seatbelt to make the car's annoying warning chime stop, and now buckles up every time. Stopping the chime is an example of",
    choices: [
      { text: "positive reinforcement.", why: "Positive reinforcement adds a pleasant stimulus; here an aversive chime is removed, not added." },
      { text: "positive punishment.", why: "Punishment decreases behavior, but buckling increased, so this is reinforcement, not punishment." },
      { text: "negative reinforcement.", correct: true, why: "Removing an aversive stimulus (the chime) to increase a behavior (buckling) is negative reinforcement." },
      { text: "negative punishment.", why: "Negative punishment removes something pleasant to reduce behavior; here an unpleasant chime is removed and behavior increases." }
    ],
    keyConcept: "Negative reinforcement (the classic trap)"
  },
  {
    id: "3.8-3", topic: "3.8", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A child touches a hot stove, feels a painful burn, and never touches it again. The pain functioned as",
    choices: [
      { text: "negative reinforcement.", why: "Reinforcement increases behavior, but touching the stove stopped, so this is punishment, not reinforcement." },
      { text: "negative punishment.", why: "Negative punishment removes something pleasant; here an aversive sensation is added, not removed." },
      { text: "positive reinforcement.", why: "Positive reinforcement adds a pleasant stimulus to increase behavior, the opposite of a painful burn stopping it." },
      { text: "positive punishment.", correct: true, why: "Adding an aversive stimulus (pain) that decreases the behavior is positive punishment." }
    ],
    keyConcept: "Positive punishment"
  },
  {
    id: "3.8-4", topic: "3.8", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A teen misses curfew, so the parents take away the phone for a week, and future lateness decreases. Removing the phone is",
    choices: [
      { text: "negative punishment.", correct: true, why: "Removing a pleasant stimulus (the phone) to decrease a behavior is negative punishment." },
      { text: "positive punishment.", why: "Positive punishment adds an aversive stimulus; here something pleasant is taken away instead." },
      { text: "negative reinforcement.", why: "Negative reinforcement increases behavior by removing an aversive stimulus; here behavior decreases and a pleasant item is removed." },
      { text: "positive reinforcement.", why: "Positive reinforcement adds a reward to increase behavior, the opposite of removing the phone to reduce lateness." }
    ],
    keyConcept: "Negative punishment"
  },
  {
    id: "3.8-5", topic: "3.8", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "To teach a rat to press a lever, a trainer first rewards it for facing the lever, then only for touching it, then only for pressing it. This gradual method is",
    choices: [
      { text: "stimulus generalization.", why: "Generalization is a classical-conditioning term about responding to similar stimuli, not building a new behavior step by step." },
      { text: "shaping through successive approximations.", correct: true, why: "Reinforcing closer and closer approximations of the target behavior is shaping." },
      { text: "spontaneous recovery.", why: "Spontaneous recovery is the return of an extinguished response, not a training procedure." },
      { text: "classical conditioning of a reflex.", why: "Lever pressing is voluntary operant behavior, not an involuntary reflex conditioned to a stimulus." }
    ],
    keyConcept: "Shaping"
  },
  {
    id: "3.8-6", topic: "3.8", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "A gambler keeps pulling a slot-machine lever because payouts arrive after an unpredictable number of pulls. This reinforcement schedule, known for high and persistent responding, is",
    choices: [
      { text: "fixed-ratio.", why: "Fixed-ratio pays after a set, predictable number of responses; slot payouts are unpredictable." },
      { text: "fixed-interval.", why: "Fixed-interval reinforces the first response after a set time, not after a number of responses." },
      { text: "variable-ratio.", correct: true, why: "Reinforcement after an unpredictable number of responses is variable-ratio, which drives the highest, most persistent rate." },
      { text: "variable-interval.", why: "Variable-interval is based on unpredictable time, whereas slot machines depend on the number of pulls." }
    ],
    keyConcept: "Variable-ratio schedule"
  },
  {
    id: "3.8-7", topic: "3.8", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "An employee receives a paycheck every other Friday regardless of how much extra work is done between paydays. This is an example of a",
    choices: [
      { text: "variable-interval schedule.", why: "Variable-interval reinforcement comes after unpredictable time periods; a set biweekly payday is predictable." },
      { text: "fixed-ratio schedule.", why: "Fixed-ratio depends on a set number of responses, not on the passage of a fixed time." },
      { text: "variable-ratio schedule.", why: "Variable-ratio depends on an unpredictable number of responses, not a scheduled payday." },
      { text: "fixed-interval schedule.", correct: true, why: "Reinforcement delivered for the first relevant response after a set, predictable time period is a fixed-interval schedule." }
    ],
    keyConcept: "Fixed-interval schedule"
  },
  {
    id: "3.8-8", topic: "3.8", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "A behavior analyst wants to increase how often a client exercises. Which consequence would NOT serve that goal?",
    choices: [
      { text: "Positive punishment.", correct: true, why: "Punishment is designed to decrease behavior, so it would not increase exercising as the analyst intends." },
      { text: "Positive reinforcement.", why: "Positive reinforcement adds a reward to increase behavior, which does serve the goal." },
      { text: "Negative reinforcement.", why: "Negative reinforcement increases behavior by removing something aversive, which serves the goal." },
      { text: "A secondary reinforcer like points toward a prize.", why: "A secondary reinforcer strengthens behavior, so it does serve the goal of increasing exercise." }
    ],
    keyConcept: "Reinforcement increases; punishment decreases"
  },
  {
    id: "3.8-9", topic: "3.8", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "Two groups of pigeons are trained to peck a key, one on a continuous reinforcement schedule and one on a variable-ratio schedule. When reinforcement stops entirely, what is the predicted outcome?",
    choices: [
      { text: "The continuously reinforced group will keep pecking much longer.", why: "Continuous reinforcement actually extinguishes faster once rewards stop, so this is backwards." },
      { text: "The variable-ratio group will keep pecking longer, showing greater resistance to extinction.", correct: true, why: "Partial (variable-ratio) reinforcement produces behavior that is more resistant to extinction than continuous reinforcement." },
      { text: "Both groups will stop pecking immediately.", why: "The variable-ratio group persists, so neither stops immediately in the same way." },
      { text: "Neither group ever learned to peck the key.", why: "Both were trained to peck; the question is about how they respond during extinction." }
    ],
    keyConcept: "Partial reinforcement and resistance to extinction"
  },
  {
    id: "3.8-10", topic: "3.8", unit: 3, practice: 3, difficulty: "Moderate",
    stem: "The graph shows average response rates produced by four reinforcement schedules. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Average responses per minute by reinforcement schedule",
      categories: ["Fixed-interval","Variable-interval","Fixed-ratio","Variable-ratio"],
      values: [18,22,45,60],
      yLabel: "Responses per minute", max: 70
    },
    choices: [
      { text: "Interval schedules produced the highest response rates.", why: "The interval bars (18 and 22) are the lowest, not the highest." },
      { text: "All four schedules produced identical response rates.", why: "The bars range from 18 to 60, so the rates are clearly not identical." },
      { text: "Ratio schedules produced higher response rates than interval schedules, with variable-ratio highest.", correct: true, why: "Both ratio bars (45 and 60) exceed both interval bars (18 and 22), and variable-ratio is the tallest, matching known schedule effects." },
      { text: "Fixed-interval produced the highest response rate.", why: "Fixed-interval is the lowest bar at 18, not the highest." }
    ],
    keyConcept: "Comparing response rates across schedules"
  },
  {
    id: "3.8-11", topic: "3.8", unit: 3, practice: 3, difficulty: "Difficult",
    stem: "The cumulative record shows responding on a fixed-interval schedule in which reinforcement is available every 4 minutes. Which description best fits the pattern?",
    stimulus: {
      type: "scatter",
      caption: "Cumulative responses over time on a fixed-interval (4-min) schedule",
      points: [[0,0],[1,3],[2,7],[3,14],[4,24],[5,27],[6,32],[7,40],[8,52]],
      xLabel: "Time (minutes)",
      yLabel: "Cumulative responses",
      alt: "Responding is slow just after each 4-minute reward point and accelerates as the next reward approaches."
    },
    choices: [
      { text: "Responding is fast and perfectly steady the entire time.", why: "The slope changes across each interval, so responding is not steady." },
      { text: "Responding stops completely between reinforcements.", why: "The cumulative count keeps rising between rewards, so responding does not stop." },
      { text: "Responding is random with no relation to the timing of reinforcement.", why: "The acceleration before each reward shows a clear relationship to timing, not randomness." },
      { text: "Responding slows just after each reinforcement and speeds up as the next reinforcement time approaches.", correct: true, why: "The curve flattens right after minutes 4 and rises steeply before the next reward, the pause-then-accelerate pattern typical of fixed-interval schedules." }
    ],
    keyConcept: "Fixed-interval response pattern"
  }
];

window.APSYCH.questions["3.9"] = [
  {
    id: "3.9-1", topic: "3.9", unit: 3, practice: 1, difficulty: "Easy",
    stem: "In Bandura's classic study, children who watched an adult punch and kick a Bobo doll later imitated that aggression themselves. This demonstrated",
    choices: [
      { text: "observational learning.", correct: true, why: "Acquiring behavior by watching and imitating a model, with no direct reward to the child, is observational learning." },
      { text: "classical conditioning.", why: "Classical conditioning links stimuli for involuntary responses, not learning aggression by watching a model." },
      { text: "negative reinforcement.", why: "The children were not reinforced by removing anything aversive; they imitated what they observed." },
      { text: "taste aversion.", why: "Taste aversion is a conditioned food avoidance, unrelated to imitating modeled aggression." }
    ],
    keyConcept: "Observational learning (Bobo doll)"
  },
  {
    id: "3.9-2", topic: "3.9", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A student sees a classmate get praised for asking questions in class and then begins asking more questions herself, even though she was never directly rewarded. This is best described as",
    choices: [
      { text: "direct positive reinforcement.", why: "The student received no direct reward herself; she learned from the classmate's consequences." },
      { text: "vicarious reinforcement.", correct: true, why: "Increasing one's own behavior after seeing a model rewarded is vicarious reinforcement." },
      { text: "latent learning.", why: "Latent learning is hidden until an incentive appears; here behavior changed after observing a model's reward." },
      { text: "shaping.", why: "Shaping reinforces successive approximations directly; this involved learning from another's outcome." }
    ],
    keyConcept: "Vicarious reinforcement"
  },
  {
    id: "3.9-3", topic: "3.9", unit: 3, practice: 1, difficulty: "Easy",
    stem: "A young child learns to wave 'bye-bye' simply by watching family members do it. The family members are serving as",
    choices: [
      { text: "unconditioned stimuli.", why: "An unconditioned stimulus triggers a reflex; the family members are demonstrating a behavior to imitate." },
      { text: "primary reinforcers.", why: "A primary reinforcer satisfies a biological need; the family members are demonstrators, not rewards." },
      { text: "models.", correct: true, why: "People whose behavior is observed and imitated are models in observational learning." },
      { text: "neutral stimuli.", why: "A neutral stimulus is a classical-conditioning cue, not a person being imitated." }
    ],
    keyConcept: "Models and modeling"
  },
  {
    id: "3.9-4", topic: "3.9", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "Rats allowed to wander a maze with no reward later ran it quickly and accurately once food was placed at the end, showing they had learned the layout all along. This is",
    choices: [
      { text: "insight learning.", why: "Insight is a sudden 'aha' solution; here the rats gradually acquired maze knowledge before demonstrating it." },
      { text: "shaping.", why: "Shaping requires reinforcing successive approximations; these rats explored without any reward." },
      { text: "spontaneous recovery.", why: "Spontaneous recovery is the return of an extinguished conditioned response, unrelated to maze learning." },
      { text: "latent learning.", correct: true, why: "Learning that occurs without reinforcement and stays hidden until there is an incentive to show it is latent learning." }
    ],
    keyConcept: "Latent learning"
  },
  {
    id: "3.9-5", topic: "3.9", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "The mental representation of the maze's layout that the rats formed while exploring is called a",
    choices: [
      { text: "cognitive map.", correct: true, why: "A mental representation of the spatial layout of an environment is a cognitive map (Tolman)." },
      { text: "conditioned response.", why: "A conditioned response is a learned reflex to a stimulus, not a mental spatial representation." },
      { text: "reinforcement schedule.", why: "A reinforcement schedule is a rule for delivering rewards, not a mental map." },
      { text: "fixed-action pattern.", why: "That is an innate behavior sequence, not a learned representation of a maze." }
    ],
    keyConcept: "Cognitive map"
  },
  {
    id: "3.9-6", topic: "3.9", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "After a period of no progress, a chimpanzee suddenly stacks boxes to reach a banana, solving the problem all at once with no gradual trial and error. Kohler called this",
    choices: [
      { text: "latent learning.", why: "Latent learning is prior hidden learning revealed by incentive, not a sudden new solution to a novel problem." },
      { text: "insight learning.", correct: true, why: "A sudden realization of a solution, rather than incremental trial and error, is insight learning." },
      { text: "observational learning.", why: "The chimp solved the problem itself rather than imitating a model." },
      { text: "operant shaping.", why: "Shaping builds behavior gradually through reinforcement, the opposite of a sudden insight." }
    ],
    keyConcept: "Insight learning"
  },
  {
    id: "3.9-7", topic: "3.9", unit: 3, practice: 1, difficulty: "Difficult",
    stem: "Children who already loved drawing were given a reward for each picture they made. Later, when rewards stopped, they drew less on their own than before. This illustrates the",
    choices: [
      { text: "law of effect.", why: "The law of effect predicts reward strengthens behavior; here reward decreased later drawing, which it cannot explain." },
      { text: "partial reinforcement effect.", why: "That concerns resistance to extinction under intermittent schedules, not the loss of intrinsic interest after rewards." },
      { text: "overjustification effect.", correct: true, why: "Rewarding an already-enjoyed activity can undermine intrinsic motivation, reducing later free-choice engagement." },
      { text: "spontaneous recovery.", why: "Spontaneous recovery is a conditioning phenomenon, unrelated to reduced intrinsic motivation." }
    ],
    keyConcept: "Overjustification effect"
  },
  {
    id: "3.9-8", topic: "3.9", unit: 3, practice: 1, difficulty: "Moderate",
    stem: "A musician practices for hours purely for the joy of playing, not for money or applause. Her behavior is driven by",
    choices: [
      { text: "extrinsic motivation.", why: "Extrinsic motivation is driven by external rewards, which she explicitly is not seeking." },
      { text: "negative reinforcement.", why: "Negative reinforcement involves removing an aversive stimulus, not playing for personal enjoyment." },
      { text: "vicarious punishment.", why: "Vicarious punishment is reduced behavior after seeing a model punished, unrelated to her internal drive." },
      { text: "intrinsic motivation.", correct: true, why: "Doing an activity for its own inherent satisfaction is intrinsic motivation." }
    ],
    keyConcept: "Intrinsic vs. extrinsic motivation"
  },
  {
    id: "3.9-9", topic: "3.9", unit: 3, practice: 2, difficulty: "Moderate",
    stem: "In Bandura's Bobo doll experiment, whether children watched an aggressive or a non-aggressive model was the ______, and the children's later aggressive behavior was the ______.",
    choices: [
      { text: "independent variable; dependent variable.", correct: true, why: "The manipulated model type is the independent variable, and the measured aggression is the dependent variable." },
      { text: "dependent variable; independent variable.", why: "This reverses the roles; what the experimenter manipulates is the independent variable." },
      { text: "confounding variable; control group.", why: "Model type was deliberately manipulated, not an uncontrolled confound, and aggression is an outcome, not a group." },
      { text: "placebo; control condition.", why: "There is no placebo here; these terms do not fit the manipulated cause and measured effect." }
    ],
    keyConcept: "Identifying variables in the Bobo doll study"
  },
  {
    id: "3.9-10", topic: "3.9", unit: 3, practice: 2, difficulty: "Difficult",
    stem: "To test the overjustification effect, researchers reward one group of children for an activity they already enjoy, give a second group no reward, and later measure free-choice engagement. The predicted result is that the rewarded group will",
    choices: [
      { text: "spend more free time on the activity than the unrewarded group.", why: "That is the opposite of the overjustification prediction, which expects reduced intrinsic engagement." },
      { text: "spend less free time on the activity than the unrewarded group.", correct: true, why: "The overjustification effect predicts external rewards undermine intrinsic interest, lowering later voluntary engagement." },
      { text: "show no change at all relative to the other group.", why: "The whole point of the study is to detect a difference, and theory predicts a decrease, not no change." },
      { text: "forget entirely how to do the activity.", why: "Overjustification reduces motivation to do the activity, not the ability to perform it." }
    ],
    keyConcept: "Predicting the overjustification effect"
  },
  {
    id: "3.9-11", topic: "3.9", unit: 3, practice: 3, difficulty: "Moderate",
    stem: "The graph shows the average number of aggressive acts children performed after viewing different kinds of models. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Average aggressive acts by children after viewing a model",
      categories: ["Aggressive model","Non-aggressive model","No model (control)"],
      values: [8.4,1.9,3],
      yLabel: "Aggressive acts", max: 10
    },
    choices: [
      { text: "Viewing a non-aggressive model produced the most aggression.", why: "The non-aggressive-model bar (1.9) is the lowest, not the highest." },
      { text: "The type of model had no effect on children's aggression.", why: "The bars differ substantially (8.4 vs. 1.9), so the model clearly mattered." },
      { text: "Children who viewed an aggressive model behaved most aggressively, supporting observational learning.", correct: true, why: "The aggressive-model bar (8.4) far exceeds the others, consistent with children imitating a modeled aggressive behavior." },
      { text: "The control group with no model was the most aggressive.", why: "The control bar (3.0) is well below the aggressive-model bar (8.4), so it is not the most aggressive." }
    ],
    keyConcept: "Interpreting observational-learning data"
  }
];
