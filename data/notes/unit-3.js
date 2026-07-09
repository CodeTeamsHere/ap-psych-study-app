/*
 * data/notes/unit-3.js — Study notes for Unit 3: Development and Learning.
 * Original explanatory content. LO/EK statements are paraphrased from the College Board
 * AP Psychology CED; LO letters and EK numbers follow the CED numbering convention.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.notes = window.APSYCH.notes || {};

window.APSYCH.notes["3.1"] = {
  topic: "3.1", unit: 3, title: "Themes and Methods in Developmental Psychology",
  los: [
    {
      code: "3.1.A", text: "Explain how enduring themes and research methods shape the study of development across the lifespan.",
      eks: [
        { code: "3.1.A.1", text: "Three recurring themes frame developmental psychology.", subs: [
          { code: "3.1.A.1.i", text: "Continuity vs. stages: is development a gradual, cumulative process (continuity) or a series of distinct qualitative steps (stages/discontinuity)?" },
          { code: "3.1.A.1.ii", text: "Stability vs. change: do early traits (like temperament) persist throughout life, or can they be reshaped by experience?" },
          { code: "3.1.A.1.iii", text: "Nature vs. nurture: how do heredity and experience jointly produce the changes we observe?" }
        ] },
        { code: "3.1.A.2", text: "A cross-sectional study compares people of different ages at one point in time — fast and inexpensive, but age is confounded with cohort (generational) differences." },
        { code: "3.1.A.3", text: "A longitudinal study follows the same people over months or years — it removes cohort confounds but is slow, costly, and vulnerable to participant attrition (dropout)." }
      ]
    }
  ],
  bigIdea: "<p>Developmental psychology asks how thinking, feeling, and behavior change from conception to death. Three big questions run through the entire unit. Is change smooth and gradual (<b>continuity</b>) or does it happen in distinct leaps (<b>stages</b>)? Do our earliest characteristics stick with us (<b>stability</b>) or get remade by life (<b>change</b>)? And how do <b>nature and nurture</b> interact to produce who we become? Keep these three lenses in mind — nearly every theory in Unit 3 is really taking a position on one of them.</p>" +
    "<p>To study change, researchers pick between two core designs. A <b>cross-sectional</b> study takes a 'snapshot,' testing different age groups (say, 20-, 40-, and 60-year-olds) all at once. It is quick, but it confounds age with <b>cohort</b>: a 70-year-old and a 20-year-old differ not only in age but in the era they grew up in. A <b>longitudinal</b> study instead follows one group of people across time, which untangles that confound — but it can take decades and loses participants to <b>attrition</b>. Neither is 'better'; each trades speed for control.</p>",
  vocab: [
    { term: "Developmental psychology", def: "The study of physical, cognitive, and social-emotional change across the entire lifespan." },
    { term: "Continuity vs. discontinuity (stages)", def: "Whether development is gradual and cumulative (continuity) or proceeds through distinct qualitative stages (discontinuity)." },
    { term: "Stability vs. change", def: "Whether traits present early in life persist over time (stability) or are modified by experience (change)." },
    { term: "Nature vs. nurture", def: "The interacting contributions of heredity (nature) and experience (nurture) to development." },
    { term: "Cross-sectional study", def: "A design comparing people of different ages at a single point in time." },
    { term: "Longitudinal study", def: "A design following the same people repeatedly over an extended period." },
    { term: "Cohort", def: "A group of people born in the same era who share historical and cultural experiences." },
    { term: "Cohort effect", def: "A difference between age groups caused by their differing generational experiences rather than by age itself — a confound in cross-sectional research." },
    { term: "Attrition", def: "The loss of participants over the course of a study, a special threat to longitudinal designs." }
  ],
  researchers: [],
  examples: [
    "A cross-sectional study tests vocabulary in 25-, 50-, and 75-year-olds on one afternoon and finds the oldest group scores lowest. Before concluding vocabulary declines with age, note the confound: the 75-year-olds may simply have had fewer years of formal schooling than the younger cohort.",
    "A longitudinal study follows one group of children from age 3 to age 18, testing them every year — the same people, so any change reflects development rather than generational differences, but the study takes 15 years and some families move away."
  ],
  mnemonic: [
    { device: "Cross-sectional = a CROSS-section snapshot of many ages at once; Longitudinal = a LONG movie of the same people.", explain: "Cross-sectional is one moment across ages; longitudinal is many moments following one group." },
    { device: "Cohort effects haunt Cross-sectional studies (both start with C).", explain: "Because cross-sectional designs compare different generations, generational (cohort) confounds are their signature weakness." }
  ],
  traps: [
    "Confusing the two designs: cross-sectional compares different people of different ages; longitudinal follows the same people over time.",
    "Forgetting that cross-sectional results can be distorted by cohort effects (generational differences), not real age change.",
    "Treating 'stages' as proof of abrupt, all-at-once change; stage theories still allow gradual transitions between steps.",
    "Framing nature vs. nurture as an either/or; the modern view is continuous interaction.",
    "Assuming longitudinal is always superior; its attrition, cost, and time make cross-sectional the practical choice for many questions."
  ],
  exclusions: [
    "You do not need to know cross-sequential (mixed) designs by name; focus on the contrast between cross-sectional and longitudinal methods."
  ]
};

window.APSYCH.notes["3.2"] = {
  topic: "3.2", unit: 3, title: "Physical Development Across the Lifespan",
  los: [
    {
      code: "3.2.A", text: "Explain how physical development across the lifespan influences behavior and mental processes.",
      eks: [
        { code: "3.2.A.1", text: "Prenatal development can be disrupted by teratogens — harmful agents (e.g., alcohol, certain drugs, viruses) that cross the placenta; prenatal alcohol exposure can produce fetal alcohol syndrome." },
        { code: "3.2.A.2", text: "Newborns arrive with automatic reflexes (rooting, sucking, grasping) that aid survival; motor skills then unfold through maturation in a largely universal sequence, even though timing varies." },
        { code: "3.2.A.3", text: "Adolescence begins with puberty, marked by the development of primary and secondary sex characteristics and landmark events such as menarche and spermarche." },
        { code: "3.2.A.4", text: "In adulthood, physical and sensory abilities gradually decline; menopause ends female reproductive capacity, while other changes are more gradual." },
        { code: "3.2.A.5", text: "Some abilities are shaped during critical or sensitive periods — windows when the right experience has an unusually strong, sometimes irreversible, effect." }
      ]
    }
  ],
  bigIdea: "<p>Physical development sets the stage for everything else. Before birth, development can be derailed by <b>teratogens</b> — harmful agents like alcohol that cross the placenta; heavy prenatal alcohol exposure can cause <b>fetal alcohol syndrome</b>, with lifelong cognitive effects. Newborns are not blank: they come equipped with survival <b>reflexes</b> such as <b>rooting</b> (turning toward a cheek touch to find food) and sucking. From there, motor milestones emerge through <b>maturation</b> — a biologically programmed sequence (roll, sit, crawl, walk) that appears in nearly the same order everywhere, even though the exact timing differs from child to child.</p>" +
    "<p>The next big physical transition is <b>puberty</b>, the surge that launches adolescence. It brings <b>primary sex characteristics</b> (the reproductive organs) and <b>secondary sex characteristics</b> (like body hair and voice change), plus landmark events — <b>menarche</b> (first menstrual period) and <b>spermarche</b> (first ejaculation). Later, adulthood brings gradual physical and sensory decline; <b>menopause</b> ends the menstrual cycle in midlife. Throughout, some capacities depend on <b>critical (sensitive) periods</b> — limited windows when specific experiences shape the brain most powerfully.</p>",
  vocab: [
    { term: "Teratogen", def: "Any agent (alcohol, drugs, viruses, toxins) that can cross the placenta and harm prenatal development." },
    { term: "Fetal alcohol syndrome (FAS)", def: "Physical and cognitive abnormalities in a child caused by heavy alcohol use during pregnancy." },
    { term: "Maturation", def: "Biologically driven growth processes that produce orderly changes in behavior, relatively independent of experience." },
    { term: "Rooting reflex", def: "A newborn's automatic tendency to turn the head and open the mouth toward a touch on the cheek, aiding feeding." },
    { term: "Puberty", def: "The period of sexual maturation during which a person becomes capable of reproduction." },
    { term: "Primary sex characteristics", def: "The body structures (reproductive organs) directly involved in reproduction." },
    { term: "Secondary sex characteristics", def: "Nonreproductive sexual traits, such as body hair, deepened voice, or breast development." },
    { term: "Menarche / Spermarche", def: "Menarche is the first menstrual period; spermarche is the first ejaculation — landmark events of puberty." },
    { term: "Menopause", def: "The natural end of menstruation and female reproductive capacity, typically in midlife." },
    { term: "Critical (sensitive) period", def: "An optimal window early in life when exposure to certain experiences produces normal, sometimes irreversible, development." }
  ],
  researchers: [],
  examples: [
    "A pregnant person who drinks heavily may have a child with fetal alcohol syndrome — showing how a teratogen crossing the placenta produces lifelong physical and cognitive effects.",
    "Almost all infants sit before they crawl and crawl before they walk. The universal ordering reflects maturation; the fact that one baby walks at 10 months and another at 15 illustrates that timing (but not sequence) varies."
  ],
  mnemonic: [
    { device: "Rooting reflex = a baby 'roots around' toward a cheek touch to find food.", explain: "Rooting turns the newborn toward the source of a touch, helping it locate the breast or bottle." },
    { device: "Teratogen = 'terror' agent that crosses the placenta.", explain: "The 'ter-' start links teratogen to the terror it can inflict on prenatal development." }
  ],
  traps: [
    "Confusing maturation (biological unfolding) with learning (change from experience); motor milestones are chiefly maturational.",
    "Assuming the sequence of motor development varies; the order is largely universal, only the timing differs.",
    "Thinking a teratogen must cause visible, immediate harm; effects can be subtle, cognitive, and delayed.",
    "Mixing up primary sex characteristics (reproductive organs) with secondary sex characteristics (e.g., body hair, voice change).",
    "Believing menopause is sudden; it is a gradual transition, and it does not equal a total loss of health or vitality."
  ],
  exclusions: [
    "The specific prenatal stage names — zygote, embryo, and fetus — are beyond the scope of the exam. You do not need to identify these stages by name.",
    "Detailed hormonal chemistry of puberty and menopause is not required; focus on the behavioral and developmental significance."
  ]
};

window.APSYCH.notes["3.3"] = {
  topic: "3.3", unit: 3, title: "Gender and Sexual Orientation",
  los: [
    {
      code: "3.3.A", text: "Explain how gender and sexual orientation develop and influence behavior and mental processes.",
      eks: [
        { code: "3.3.A.1", text: "Sex refers to the biological category (typically assigned at birth), whereas gender refers to the socially and psychologically constructed roles, behaviors, and identity associated with being male, female, or another category." },
        { code: "3.3.A.2", text: "Gender identity is one's internal sense of one's own gender; gender roles are the culture's expected behaviors; gender typing is the degree to which a child adopts a traditional role; androgyny blends traditionally masculine and feminine traits." },
        { code: "3.3.A.3", text: "Both biological factors (e.g., hormones) and social factors (e.g., social learning and gender schemas) contribute to gender development." },
        { code: "3.3.A.4", text: "Sexual orientation is an enduring pattern of emotional and sexual attraction; it is shaped by biological and environmental influences, is not a deliberate choice, and spans a continuum." }
      ]
    }
  ],
  bigIdea: "<p>This topic is studied <em>scientifically and neutrally</em> — it is course content, not a matter of opinion. Start with a key distinction: <b>sex</b> is the biological category typically assigned at birth, while <b>gender</b> is the set of roles, behaviors, and identity a society builds around it. <b>Gender identity</b> is a person's own internal sense of their gender; <b>gender roles</b> are the behaviors a culture expects; <b>gender typing</b> describes how strongly a child takes on a traditional role; and <b>androgyny</b> describes a blend of traditionally masculine and feminine traits in one person.</p>" +
    "<p>Where does gender come from? As always, both nature and nurture. <b>Biological</b> influences include prenatal hormones, while <b>social</b> influences include <b>social learning</b> (rewards, punishments, and imitation of models) and <b>gender schemas</b> — mental frameworks that organize the world into 'for boys' and 'for girls' and filter what a child notices and remembers. <b>Sexual orientation</b> — an enduring pattern of attraction — likewise reflects biological and environmental influences. Research indicates it is not a voluntary choice, and it exists along a continuum rather than in rigid boxes.</p>",
  vocab: [
    { term: "Sex", def: "The biological category (male, female, intersex) typically assigned at birth based on physical characteristics." },
    { term: "Gender", def: "The socially and psychologically constructed roles, behaviors, and identity a culture associates with sex categories." },
    { term: "Gender identity", def: "A person's internal, deeply held sense of their own gender." },
    { term: "Gender role", def: "A set of behaviors and attitudes a culture expects of people based on their perceived gender." },
    { term: "Gender typing", def: "The degree to which a child acquires a traditional masculine or feminine role." },
    { term: "Androgyny", def: "Displaying a blend of traditionally masculine and feminine psychological traits." },
    { term: "Gender schema", def: "A mental framework that organizes experience by gender and guides what a child attends to and adopts." },
    { term: "Social learning (of gender)", def: "Acquiring gendered behavior through observation, imitation, and reinforcement from others." },
    { term: "Sexual orientation", def: "An enduring pattern of emotional and sexual attraction to others, existing along a continuum." }
  ],
  researchers: [
    { name: "Sandra Bem", contribution: "Developed gender schema theory and the concept of androgyny, arguing children learn to filter experience through cultural gender frameworks." },
    { name: "Albert Bandura", contribution: "His social learning theory explains how children acquire gendered behavior by observing and imitating models and being reinforced." }
  ],
  examples: [
    "A preschooler refuses to play with a toy labeled 'for girls,' even though it looks fun. A gender schema is filtering the toy through a 'not for me' framework — an example of gender typing in action.",
    "An androgynous adult is comfortably assertive at work (a traditionally 'masculine' trait) and warmly nurturing at home (a traditionally 'feminine' trait), showing a blend rather than a single rigid role."
  ],
  mnemonic: { device: "Sex = biology you're born with; Gender = the social role and identity you live.", explain: "Separating the biological category (sex) from the social/psychological experience (gender) is the core distinction of this topic." },
  traps: [
    "Using 'sex' and 'gender' interchangeably; on the exam, sex is biological and gender is social/psychological.",
    "Treating sexual orientation as a deliberate choice; evidence points to biological and environmental influences, not a decision.",
    "Thinking androgyny means having no gender; it means displaying both traditionally masculine and feminine traits.",
    "Assuming gender roles are fixed by biology alone; social learning and gender schemas play a major role.",
    "Confusing gender identity (one's internal sense of self) with gender role (society's outward expectations)."
  ],
  exclusions: [
    "Treat gender and sexual orientation neutrally and scientifically — this is study content, not opinion. Questions assess your understanding of the concepts, not any personal or political stance."
  ]
};

window.APSYCH.notes["3.4"] = {
  topic: "3.4", unit: 3, title: "Cognitive Development Across the Lifespan",
  los: [
    {
      code: "3.4.A", text: "Explain how theories of cognitive development describe changes in thinking across the lifespan.",
      eks: [
        { code: "3.4.A.1", text: "Piaget proposed that children build knowledge through schemas, adjusting them by assimilation (fitting new information into an existing schema) and accommodation (revising a schema to fit new information)." },
        { code: "3.4.A.2", text: "Piaget described four stages of cognitive development.", subs: [
          { code: "3.4.A.2.i", text: "Sensorimotor (birth to ~2): experiencing the world through senses and actions; developing object permanence." },
          { code: "3.4.A.2.ii", text: "Preoperational (~2 to 7): using language and symbols but marked by egocentrism and a lack of conservation." },
          { code: "3.4.A.2.iii", text: "Concrete operational (~7 to 11): logical thinking about concrete events, including mastering conservation." },
          { code: "3.4.A.2.iv", text: "Formal operational (~12 and up): abstract, hypothetical, and systematic reasoning." }
        ] },
        { code: "3.4.A.3", text: "Vygotsky emphasized the social and cultural roots of thinking: children learn within a zone of proximal development through scaffolding provided by more skilled others, with language as a central tool." },
        { code: "3.4.A.4", text: "Developing a theory of mind — understanding that others have beliefs and perspectives different from one's own — is a milestone; later research suggests Piaget underestimated young children and that development is more continuous than his stages imply." },
        { code: "3.4.A.5", text: "In late adulthood, fluid intelligence (quick, novel problem-solving) tends to decline while crystallized intelligence (accumulated knowledge) remains stable or grows; dementia involves a more serious loss of cognitive function." }
      ]
    }
  ],
  bigIdea: "<p><b>Jean Piaget</b> argued that children are active thinkers who build mental frameworks called <b>schemas</b>. They update these in two ways: <b>assimilation</b> (interpreting new information using an existing schema — a toddler calling every four-legged animal 'doggy') and <b>accommodation</b> (revising the schema when it no longer fits — learning that cats are a separate category). He proposed four stages: <b>sensorimotor</b> (knowing the world through senses and action, gaining <b>object permanence</b> — that things exist when out of sight); <b>preoperational</b> (symbolic thought but <b>egocentrism</b> and no <b>conservation</b> — thinking a tall glass holds more than a wide one); <b>concrete operational</b> (logical thought about concrete things, mastering conservation); and <b>formal operational</b> (abstract, hypothetical reasoning).</p>" +
    "<p><b>Lev Vygotsky</b> offered a social alternative: thinking grows out of interaction. A child learns best within the <b>zone of proximal development</b> — the gap between what they can do alone and what they can do with help — through <b>scaffolding</b> (temporary support from a more skilled person), with language as the key tool of thought. A related milestone is <b>theory of mind</b>: realizing that other people hold beliefs and viewpoints different from one's own. Modern researchers note that Piaget <b>underestimated</b> young children and that development is smoother than sharp stages suggest. Finally, cognition keeps changing in adulthood: <b>fluid intelligence</b> (fast, novel reasoning) tends to decline with age, while <b>crystallized intelligence</b> (accumulated knowledge and vocabulary) holds steady or rises.</p>",
  vocab: [
    { term: "Schema", def: "A mental framework that organizes and interprets information." },
    { term: "Assimilation", def: "Incorporating new experiences into an existing schema without changing it." },
    { term: "Accommodation", def: "Adjusting or creating a schema to fit new information that doesn't match." },
    { term: "Sensorimotor stage", def: "Piaget's first stage (birth-~2): knowing the world through senses and motor action; gaining object permanence." },
    { term: "Object permanence", def: "The understanding that objects continue to exist even when they cannot be seen." },
    { term: "Preoperational stage", def: "Piaget's second stage (~2-7): symbolic thought marked by egocentrism and lack of conservation." },
    { term: "Egocentrism", def: "The preoperational child's difficulty taking another person's point of view (not the same as selfishness)." },
    { term: "Conservation", def: "The principle that quantity stays the same despite changes in shape or appearance." },
    { term: "Concrete operational stage", def: "Piaget's third stage (~7-11): logical reasoning about concrete events; mastery of conservation." },
    { term: "Formal operational stage", def: "Piaget's fourth stage (~12+): abstract, hypothetical, and systematic reasoning." },
    { term: "Zone of proximal development (ZPD)", def: "Vygotsky's term for the range of tasks a child can do with help but not yet alone." },
    { term: "Scaffolding", def: "Temporary support from a more skilled person that is gradually withdrawn as the learner improves." },
    { term: "Theory of mind", def: "The ability to understand that others have beliefs, desires, and perspectives different from one's own." },
    { term: "Crystallized vs. fluid intelligence", def: "Crystallized = accumulated knowledge (stable/rising with age); fluid = fast, novel problem-solving (declines with age)." }
  ],
  researchers: [
    { name: "Jean Piaget", contribution: "Proposed a four-stage theory of cognitive development driven by schemas, assimilation, and accommodation." },
    { name: "Lev Vygotsky", contribution: "Emphasized the social and cultural roots of cognition — the zone of proximal development, scaffolding, and language as a tool of thought." }
  ],
  examples: [
    "Show a preoperational child two identical glasses of juice, then pour one into a taller, thinner glass. The child insists the tall glass now has 'more.' This failure of conservation reveals the child cannot yet mentally reverse the pouring.",
    "A parent helping a child with a puzzle offers hints and holds pieces steady at first, then gradually pulls back as the child improves. This is scaffolding within the zone of proximal development."
  ],
  mnemonic: [
    { device: "Assimilate = Add to an existing schema; Accommodate = Alter/create a new schema.", explain: "Both A-words: assimilation adds without change; accommodation alters the schema to fit reality." },
    { device: "Piaget's stages: 'Some People Can't Fly' — Sensorimotor, Preoperational, Concrete, Formal.", explain: "The first letters cue the ordered four stages of cognitive development." }
  ],
  traps: [
    "Swapping assimilation and accommodation: assimilation fits new info into an old schema; accommodation changes the schema.",
    "Confusing Piaget (cognitive stages) with Erikson (psychosocial stages) or Vygotsky (social/cultural learning).",
    "Reading egocentrism as selfishness; it means an inability to take another's visual or mental perspective.",
    "Assuming everyone reaches full formal operational reasoning; not all adults consistently reason abstractly.",
    "Believing all intelligence declines with age; crystallized intelligence typically stays stable or increases even as fluid intelligence falls."
  ],
  exclusions: [
    "Exact age ranges for Piaget's stages are approximate guides, not strict cutoffs you must memorize to the year."
  ]
};

window.APSYCH.notes["3.5"] = {
  topic: "3.5", unit: 3, title: "Communication and Language Development",
  los: [
    {
      code: "3.5.A", text: "Explain how communication and language develop and influence thinking.",
      eks: [
        { code: "3.5.A.1", text: "Language is built from units of increasing size: phonemes (smallest sound units), morphemes (smallest meaning-carrying units), and grammar (syntax and semantics) that combine them into meaningful sentences." },
        { code: "3.5.A.2", text: "Language unfolds in a predictable sequence.", subs: [
          { code: "3.5.A.2.i", text: "Cooing and then babbling (producing a wide range of speech sounds), which narrows to the sounds of the native language." },
          { code: "3.5.A.2.ii", text: "The one-word (holophrastic) stage around age one, followed by two-word telegraphic speech." },
          { code: "3.5.A.2.iii", text: "Rapid growth into full sentences during early childhood." }
        ] },
        { code: "3.5.A.3", text: "Nativist theorists such as Chomsky argue humans possess an inborn capacity for language (a universal grammar), and that acquisition is easiest during a critical/sensitive period in childhood." },
        { code: "3.5.A.4", text: "Errors like overgeneralization (overregularization) — saying 'goed' or 'foots' — reveal that children are applying grammar rules, not merely imitating." }
      ]
    }
  ],
  bigIdea: "<p>Language is assembled from building blocks of increasing size. The smallest are <b>phonemes</b> — individual speech sounds (the 'b' in 'bat'). Combine phonemes and you get <b>morphemes</b> — the smallest units that carry meaning (the '-ed' in 'walked' is a morpheme). Rules of <b>grammar</b> — including <b>syntax</b> (word order) and <b>semantics</b> (meaning) — then knit morphemes into sentences. Development follows a strikingly universal timetable: <b>cooing</b>, then <b>babbling</b> (in which infants produce sounds from every language before narrowing to their own), then the <b>one-word stage</b> around age one, then two-word <b>telegraphic speech</b> ('want cookie'), and soon full sentences.</p>" +
    "<p>Why do children learn language so fast? <b>Noam Chomsky</b> argued that humans are born with a built-in readiness for grammar — a <b>universal grammar</b> supported by an inborn language capacity — and that acquisition is easiest during a <b>critical (sensitive) period</b> in childhood. A telltale sign that children learn <em>rules</em> rather than just imitating is <b>overgeneralization</b> (overregularization): a child who once said 'went' starts saying 'goed,' misapplying the regular '-ed' rule. That 'error' is actually evidence of an active, rule-seeking mind.</p>",
  vocab: [
    { term: "Phoneme", def: "The smallest distinctive unit of sound in a language." },
    { term: "Morpheme", def: "The smallest unit of language that carries meaning (a word or meaningful part like a prefix or suffix)." },
    { term: "Grammar", def: "A language's system of rules for combining words, including syntax and semantics." },
    { term: "Semantics / Syntax", def: "Semantics is the meaning of words and sentences; syntax is the rules of word order." },
    { term: "Babbling stage", def: "Beginning around 4 months, an infant's spontaneous production of a wide range of speech sounds that later narrows to the native language." },
    { term: "One-word (holophrastic) stage", def: "Around age one, when a child communicates using mostly single words." },
    { term: "Telegraphic speech", def: "Early two-word speech that omits smaller words, like a telegram ('go car')." },
    { term: "Overgeneralization (overregularization)", def: "Applying a grammar rule too broadly (e.g., 'goed,' 'foots'), showing rule learning rather than imitation." },
    { term: "Universal grammar", def: "Chomsky's proposed innate set of grammatical principles shared by all human languages." },
    { term: "Language acquisition device (LAD)", def: "Chomsky's proposed inborn mechanism enabling children to acquire language readily." },
    { term: "Critical (sensitive) period for language", def: "The childhood window during which language is acquired most easily and completely." }
  ],
  researchers: [
    { name: "Noam Chomsky", contribution: "Argued that language ability is innate, proposing a universal grammar and a language acquisition device, and stressing a critical period." },
    { name: "B. F. Skinner", contribution: "Represented the behaviorist view that language is learned through imitation, association, and reinforcement — a contrast to Chomsky's nativism." }
  ],
  examples: [
    "A one-year-old points and says 'up!' to mean 'pick me up.' By age two the child says 'want up' — telegraphic speech that drops the smaller connecting words while keeping the key content.",
    "A three-year-old who previously said 'we went' now says 'we goed to the park.' The mistake actually shows the child has internalized the '-ed' past-tense rule and is overgeneralizing it."
  ],
  mnemonic: [
    { device: "PHoneme = PHonics (sound); Morpheme = Meaning.", explain: "Phonemes are sound units; morphemes are the smallest meaning units." },
    { device: "Babble Before Baby's first Words.", explain: "The babbling stage precedes the one-word stage in the universal sequence." }
  ],
  traps: [
    "Confusing phonemes (sound units) with morphemes (meaning units).",
    "Thinking overgeneralization is a sign of poor learning; it actually demonstrates the child has learned a grammar rule.",
    "Believing babbling only contains native-language sounds; early babbling includes sounds from many languages before narrowing.",
    "Mislabeling telegraphic speech; it is the two-word stage that omits function words, not single-word speech.",
    "Assuming language can be learned equally well at any age; the critical/sensitive period makes early childhood far more effective."
  ],
  exclusions: [
    "You are not required to reproduce the debate over specific brain regions here; Broca's and Wernicke's areas are addressed in the biological unit."
  ]
};

window.APSYCH.notes["3.6"] = {
  topic: "3.6", unit: 3, title: "Social-Emotional Development Across the Lifespan",
  los: [
    {
      code: "3.6.A", text: "Explain how social-emotional development across the lifespan influences behavior and mental processes.",
      eks: [
        { code: "3.6.A.1", text: "Attachment is an emotional bond with caregivers; Harlow's monkeys showed the power of contact comfort, and Ainsworth's Strange Situation identified secure and insecure (avoidant, anxious/resistant) attachment styles." },
        { code: "3.6.A.2", text: "Temperament — a child's inborn emotional reactivity — and parenting styles (authoritative, authoritarian, permissive) shape social-emotional outcomes, with authoritative parenting generally linked to the best outcomes." },
        { code: "3.6.A.3", text: "Erikson proposed eight psychosocial stages, each posing a crisis (e.g., trust vs. mistrust in infancy; identity vs. role confusion in adolescence) whose resolution shapes later development." },
        { code: "3.6.A.4", text: "Broader social contexts matter: Bronfenbrenner's ecological systems theory frames development within nested environments, and moral reasoning develops as well (Kohlberg)." }
      ]
    }
  ],
  bigIdea: "<p>From birth we are wired to bond. <b>Attachment</b> is the emotional tie to caregivers. <b>Harry Harlow</b>'s monkey studies showed infants clung to a soft cloth 'mother' over a wire one that provided food, proving the power of <b>contact comfort</b> over mere feeding. <b>Mary Ainsworth</b>'s <b>Strange Situation</b> then classified infant attachment: <b>secure</b> babies use the caregiver as a safe base, explore, get upset at separation, and are soothed on reunion; <b>insecure</b> babies are either avoidant (indifferent) or anxious/resistant (distressed and hard to console). A child's inborn <b>temperament</b> and the family's <b>parenting style</b> both matter — of the styles (<b>authoritative</b>, <b>authoritarian</b>, <b>permissive</b>), the warm-but-firm authoritative style is generally linked to the best outcomes.</p>" +
    "<p>Development continues across the whole lifespan. <b>Erik Erikson</b> proposed eight <b>psychosocial stages</b>, each centered on a crisis to resolve: <b>trust vs. mistrust</b> in infancy, <b>autonomy vs. shame/doubt</b>, <b>initiative vs. guilt</b>, <b>industry vs. inferiority</b>, the pivotal adolescent <b>identity vs. role confusion</b>, then <b>intimacy vs. isolation</b>, <b>generativity vs. stagnation</b>, and finally <b>integrity vs. despair</b> in old age. Zooming out, <b>Bronfenbrenner</b>'s ecological systems theory frames the child inside nested environments (family, school, culture), and moral reasoning itself matures — <b>Kohlberg</b> described a progression from self-interested to rule-based to principled thinking.</p>",
  vocab: [
    { term: "Attachment", def: "A deep emotional bond between an infant and caregiver." },
    { term: "Contact comfort", def: "The comfort and security an infant derives from physical touch, shown to outweigh feeding in Harlow's studies." },
    { term: "Strange Situation", def: "Ainsworth's lab procedure observing infants' reactions to a caregiver's departure and return to classify attachment." },
    { term: "Secure attachment", def: "A style in which the infant uses the caregiver as a safe base, is distressed at separation, and is comforted on reunion." },
    { term: "Insecure attachment", def: "Avoidant (indifferent to the caregiver) or anxious/resistant (distressed and difficult to soothe) attachment patterns." },
    { term: "Temperament", def: "A person's characteristic, biologically based emotional reactivity and intensity, evident early in life." },
    { term: "Authoritative parenting", def: "A warm but firm style with clear rules and open communication, generally linked to the best child outcomes." },
    { term: "Authoritarian parenting", def: "A strict, demanding style low in warmth that emphasizes obedience without explanation." },
    { term: "Permissive parenting", def: "A warm but lax style that makes few demands and sets few limits." },
    { term: "Psychosocial stages", def: "Erikson's eight lifelong stages, each defined by a social crisis to resolve." },
    { term: "Identity vs. role confusion", def: "Erikson's adolescent crisis of forming a coherent sense of self." },
    { term: "Imprinting", def: "The rigid attachment of certain animals to the first moving object seen during a critical period (Lorenz)." },
    { term: "Ecological systems theory", def: "Bronfenbrenner's view that development occurs within nested environmental systems from family to culture." }
  ],
  researchers: [
    { name: "Harry Harlow", contribution: "His monkey experiments showed that contact comfort, not feeding, is the basis of attachment." },
    { name: "Mary Ainsworth", contribution: "Devised the Strange Situation and identified secure and insecure attachment styles." },
    { name: "Konrad Lorenz", contribution: "Demonstrated imprinting — a critical-period attachment in which young animals follow the first moving object they see." },
    { name: "Erik Erikson", contribution: "Proposed eight psychosocial stages spanning the whole lifespan, each with a defining social crisis." },
    { name: "Diana Baumrind", contribution: "Identified parenting styles (authoritative, authoritarian, permissive) and linked authoritative parenting to the best outcomes." },
    { name: "Lawrence Kohlberg", contribution: "Described stages of moral reasoning progressing from preconventional (self-interest) to conventional (social rules) to postconventional (abstract principles)." }
  ],
  examples: [
    "In the Strange Situation, a securely attached toddler explores the playroom while the parent is present, cries when the parent leaves, and is quickly comforted when the parent returns — using the caregiver as a safe base.",
    "An authoritative parent sets a firm bedtime but explains the reason and listens to the child's feelings, whereas an authoritarian parent simply says 'because I said so.' The warm-but-firm approach tends to predict better outcomes."
  ],
  mnemonic: [
    { device: "Secure = uses caregiver as a Safe base.", explain: "Both start with S; securely attached infants explore freely using the caregiver as a secure base." },
    { device: "authoritaTIVE = firm + supporTIVE (best); authoritaRIAN = RIGID rules.", explain: "Authoritative blends warmth and structure; authoritarian is strict and cold." }
  ],
  traps: [
    "Confusing Erikson's psychosocial stages with Freud's psychosexual stages or Piaget's cognitive stages.",
    "Mixing up authoritative (warm + firm, best outcomes) with authoritarian (strict, cold).",
    "Treating imprinting (a rapid, critical-period bond in some animals) as the same as human attachment.",
    "Assuming secure attachment simply means the baby never cries; secure infants do get upset at separation but are readily soothed on reunion.",
    "Thinking Harlow's monkeys attached to the wire 'mother' that fed them; they clung to the soft cloth mother, showing contact comfort matters more than food."
  ],
  exclusions: [
    "You need to recognize Erikson's stages and their central crises, but memorizing every associated age range to the year is not required."
  ]
};

window.APSYCH.notes["3.7"] = {
  topic: "3.7", unit: 3, title: "Classical Conditioning",
  los: [
    {
      code: "3.7.A", text: "Explain how the principles of classical conditioning apply to learning.",
      eks: [
        { code: "3.7.A.1", text: "Classical conditioning is learning to associate two stimuli so that a previously neutral stimulus comes to trigger a reflexive, involuntary response.", subs: [
          { code: "3.7.A.1.i", text: "An unconditioned stimulus (UCS) naturally triggers an unconditioned response (UCR) without learning." },
          { code: "3.7.A.1.ii", text: "A neutral stimulus paired repeatedly with the UCS becomes a conditioned stimulus (CS) that triggers a conditioned response (CR)." }
        ] },
        { code: "3.7.A.2", text: "Key processes include acquisition, extinction (the CR fades when the CS is presented without the UCS), spontaneous recovery, generalization, and discrimination." },
        { code: "3.7.A.3", text: "Watson's Little Albert study showed emotions like fear can be classically conditioned; higher-order conditioning can build new associations on existing ones." },
        { code: "3.7.A.4", text: "Biological preparedness constrains conditioning — for example, taste aversions (Garcia) form readily in a single trial and over long delays, because such learning is adaptive." }
      ]
    }
  ],
  bigIdea: "<p><b>Classical conditioning</b>, discovered by <b>Ivan Pavlov</b>, is learning by association — and crucially, it involves <em>involuntary, reflexive</em> responses. The logic: an <b>unconditioned stimulus (UCS)</b>, like food, naturally produces an <b>unconditioned response (UCR)</b>, like salivation, with no learning needed. Pair a <b>neutral stimulus</b> (a bell) with that food again and again, and the bell becomes a <b>conditioned stimulus (CS)</b> that alone triggers a <b>conditioned response (CR)</b> — salivation to the bell. The neutral stimulus has become a signal. This is the foundation for a lot of emotional learning, from a phobia of the dentist's drill to comfort at a familiar smell.</p>" +
    "<p>Several processes govern it. <b>Acquisition</b> is the initial learning of the association. <b>Extinction</b> occurs when the CS is presented repeatedly without the UCS and the CR fades; after a rest, the CR can briefly return in <b>spontaneous recovery</b>. <b>Generalization</b> is responding to stimuli similar to the CS (fearing all white furry things), while <b>discrimination</b> is learning to respond only to the specific CS. <b>John B. Watson</b>'s <b>Little Albert</b> study showed a baby could be conditioned to fear a white rat, proving emotions are conditionable. Finally, <b>biological preparedness</b> shapes what associations form easily: <b>John Garcia</b> showed <b>taste aversions</b> can form in a single trial, even with a long delay, because avoiding foods that made us sick is adaptive.</p>",
  vocab: [
    { term: "Classical conditioning", def: "Learning to associate two stimuli so a neutral stimulus comes to elicit a reflexive response." },
    { term: "Unconditioned stimulus (UCS)", def: "A stimulus that naturally and automatically triggers a response without learning (e.g., food)." },
    { term: "Unconditioned response (UCR)", def: "The unlearned, automatic reaction to the UCS (e.g., salivating to food)." },
    { term: "Neutral stimulus (NS)", def: "A stimulus that initially produces no relevant response before conditioning." },
    { term: "Conditioned stimulus (CS)", def: "A formerly neutral stimulus that, after pairing with the UCS, triggers a conditioned response." },
    { term: "Conditioned response (CR)", def: "The learned reaction to the conditioned stimulus (e.g., salivating to a bell)." },
    { term: "Acquisition", def: "The initial stage of learning the association between the NS/CS and the UCS." },
    { term: "Extinction", def: "The weakening of the CR when the CS is repeatedly presented without the UCS." },
    { term: "Spontaneous recovery", def: "The reappearance of an extinguished CR after a rest period." },
    { term: "Generalization", def: "Responding to stimuli similar to the conditioned stimulus." },
    { term: "Discrimination", def: "Learning to respond only to the specific CS and not to similar stimuli." },
    { term: "Taste aversion", def: "A conditioned avoidance of a food, often learned in one trial and over long delays (biological preparedness)." }
  ],
  researchers: [
    { name: "Ivan Pavlov", contribution: "Discovered classical conditioning through experiments in which dogs learned to salivate to a bell paired with food." },
    { name: "John B. Watson", contribution: "The Little Albert study demonstrated that emotional responses such as fear can be classically conditioned in humans." },
    { name: "John Garcia", contribution: "Showed that taste aversions form readily in a single trial and over long delays, revealing biological preparedness." }
  ],
  examples: [
    "A child gets a painful shot (UCS) that makes them cry (UCR) while looking at the nurse's white coat (neutral stimulus). After a few visits, the white coat alone (CS) makes the child cry (CR) — classic emotional conditioning.",
    "After getting sick from a certain food, a person feels nauseated at just the smell of it for years, even though they know the food didn't really cause a virus. The rapid, long-delay learning is a conditioned taste aversion."
  ],
  mnemonic: [
    { device: "UN-conditioned = UN-learned (natural); Conditioned = learned.", explain: "The UCS/UCR happen naturally; the CS/CR are acquired through pairing." },
    { device: "The bell is Neutral until it's paired — then it's the CS.", explain: "A neutral stimulus becomes the conditioned stimulus only after repeated pairing with the UCS." }
  ],
  traps: [
    "Mislabeling the four parts (UCS, UCR, CS, CR). Trace what is natural (unconditioned) versus learned (conditioned).",
    "Forgetting that classical conditioning involves involuntary, reflexive responses — unlike operant conditioning's voluntary behaviors.",
    "Confusing extinction (CR fades when CS occurs without UCS) with spontaneous recovery (the CR briefly returns after a rest).",
    "Mixing up generalization (responding to similar stimuli) and discrimination (responding only to the specific CS).",
    "Thinking any two stimuli associate equally easily; biological preparedness (e.g., taste aversions) makes some links form far faster."
  ],
  exclusions: [
    "You do not need the mathematical details of the Rescorla-Wagner model; focus on the concepts and processes of classical conditioning."
  ]
};

window.APSYCH.notes["3.8"] = {
  topic: "3.8", unit: 3, title: "Operant Conditioning",
  los: [
    {
      code: "3.8.A", text: "Explain how the principles of operant conditioning apply to learning.",
      eks: [
        { code: "3.8.A.1", text: "Operant conditioning shapes voluntary behavior through consequences: Thorndike's law of effect states behaviors followed by favorable outcomes are strengthened, and Skinner extended this in the operant chamber." },
        { code: "3.8.A.2", text: "Reinforcement increases behavior; punishment decreases it.", subs: [
          { code: "3.8.A.2.i", text: "Positive reinforcement adds a pleasant stimulus; negative reinforcement removes an aversive stimulus. Both increase behavior." },
          { code: "3.8.A.2.ii", text: "Positive punishment adds an aversive stimulus; negative punishment removes a pleasant stimulus. Both decrease behavior." }
        ] },
        { code: "3.8.A.3", text: "Primary reinforcers satisfy biological needs; secondary (conditioned) reinforcers gain value through association. Shaping reinforces successive approximations toward a target behavior." },
        { code: "3.8.A.4", text: "Schedules of reinforcement produce distinct response patterns.", subs: [
          { code: "3.8.A.4.i", text: "Ratio schedules reinforce a number of responses; interval schedules reinforce the first response after a time period." },
          { code: "3.8.A.4.ii", text: "Fixed schedules are predictable; variable schedules are unpredictable and most resistant to extinction (e.g., variable-ratio drives the highest response rates)." }
        ] }
      ]
    }
  ],
  bigIdea: "<p>Where classical conditioning links stimuli for <em>involuntary</em> responses, <b>operant conditioning</b> shapes <em>voluntary</em> behavior through its consequences. <b>Edward Thorndike</b>'s <b>law of effect</b> says behaviors followed by good outcomes are repeated; <b>B. F. Skinner</b> built this into a science using the operant chamber. The key vocabulary trips up many students, so anchor it: <b>reinforcement</b> always <em>increases</em> a behavior and <b>punishment</b> always <em>decreases</em> it. The words 'positive' and 'negative' do <em>not</em> mean good and bad — they mean <b>add</b> and <b>remove</b>. So <b>positive reinforcement</b> adds something pleasant (a treat), <b>negative reinforcement</b> removes something aversive (the seatbelt chime stops), <b>positive punishment</b> adds something aversive (a scolding), and <b>negative punishment</b> removes something pleasant (losing phone privileges).</p>" +
    "<p><b>Primary reinforcers</b> (food, water) satisfy biological needs innately; <b>secondary (conditioned) reinforcers</b> (money, grades) gain power by association. Complex behaviors are built through <b>shaping</b> — reinforcing <b>successive approximations</b> that get closer and closer to the goal. Finally, <b>schedules of reinforcement</b> control behavior in predictable ways. <b>Ratio</b> schedules reward a number of responses; <b>interval</b> schedules reward the first response after some time. <b>Fixed</b> schedules are predictable; <b>variable</b> ones are unpredictable and hardest to extinguish. A <b>variable-ratio</b> schedule (like a slot machine) produces the highest, most persistent response rate.</p>",
  vocab: [
    { term: "Operant conditioning", def: "Learning in which voluntary behavior is strengthened or weakened by its consequences." },
    { term: "Law of effect", def: "Thorndike's principle that behaviors followed by favorable consequences become more likely." },
    { term: "Reinforcement", def: "Any consequence that increases the likelihood of the behavior it follows." },
    { term: "Positive reinforcement", def: "Adding a pleasant stimulus to increase a behavior (e.g., praise)." },
    { term: "Negative reinforcement", def: "Removing an aversive stimulus to increase a behavior (e.g., a nagging alarm stops when you buckle up)." },
    { term: "Positive punishment", def: "Adding an aversive stimulus to decrease a behavior (e.g., extra chores)." },
    { term: "Negative punishment", def: "Removing a pleasant stimulus to decrease a behavior (e.g., taking away a phone)." },
    { term: "Primary reinforcer", def: "An innately satisfying reinforcer that meets a biological need (food, water)." },
    { term: "Secondary (conditioned) reinforcer", def: "A reinforcer that gains value through association with primary reinforcers (money, tokens)." },
    { term: "Shaping", def: "Reinforcing successive approximations that move closer to a desired target behavior." },
    { term: "Fixed-ratio schedule", def: "Reinforcement after a set number of responses (e.g., every 10th sale)." },
    { term: "Variable-ratio schedule", def: "Reinforcement after an unpredictable number of responses; yields the highest, most extinction-resistant rate (slot machine)." },
    { term: "Fixed-interval schedule", def: "Reinforcement for the first response after a set time period (e.g., a weekly paycheck)." },
    { term: "Variable-interval schedule", def: "Reinforcement for the first response after an unpredictable time period (e.g., checking for a text reply)." }
  ],
  researchers: [
    { name: "Edward Thorndike", contribution: "Formulated the law of effect using puzzle-box experiments with cats — favorable consequences strengthen behavior." },
    { name: "B. F. Skinner", contribution: "Founded the systematic study of operant conditioning, inventing the operant chamber and mapping schedules of reinforcement." }
  ],
  examples: [
    "A driver buckles the seatbelt and the annoying chime stops. Because removing the unpleasant chime makes buckling more likely, this is negative reinforcement — not punishment.",
    "A slot machine pays out after an unpredictable number of pulls. This variable-ratio schedule produces rapid, persistent gambling that is highly resistant to extinction — the player keeps going because the next pull 'might' win."
  ],
  mnemonic: [
    { device: "Reinforcement Rises; Punishment Plummets. Positive = add (+); Negative = remove (-).", explain: "Reinforcement increases behavior, punishment decreases it; positive/negative are add/remove, not good/bad." },
    { device: "Ratio = Responses; Interval = time. Variable = unpredictable = addictive.", explain: "Ratio schedules count responses; interval schedules count time; variable schedules resist extinction best." }
  ],
  traps: [
    "The biggest trap: treating negative reinforcement as punishment. Negative reinforcement REMOVES something aversive to INCREASE behavior.",
    "Reading 'positive/negative' as good/bad instead of add/remove.",
    "Confusing reinforcement (increases behavior) with punishment (decreases behavior).",
    "Mixing up ratio (based on number of responses) with interval (based on time elapsed).",
    "Forgetting that variable schedules resist extinction best and that variable-ratio drives the highest response rate."
  ],
  exclusions: [
    "You are not required to memorize exact cumulative-record slopes for every schedule; understand the general response patterns each schedule produces."
  ]
};

window.APSYCH.notes["3.9"] = {
  topic: "3.9", unit: 3, title: "Social, Cognitive, and Neurological Factors in Learning",
  los: [
    {
      code: "3.9.A", text: "Explain how social, cognitive, and biological factors influence learning beyond simple conditioning.",
      eks: [
        { code: "3.9.A.1", text: "Observational learning (modeling) occurs by watching others; Bandura's Bobo doll studies showed children imitate aggressive models, and vicarious reinforcement or punishment adjusts the likelihood of imitation." },
        { code: "3.9.A.2", text: "Cognitive processes matter: Tolman's latent learning and cognitive maps show learning can occur without reinforcement and stay hidden until needed, and Kohler demonstrated insight learning (sudden solutions)." },
        { code: "3.9.A.3", text: "Motivation shapes learning: intrinsic motivation comes from within, extrinsic from outside rewards, and the overjustification effect shows external rewards can undermine intrinsic interest." },
        { code: "3.9.A.4", text: "Biological factors constrain learning: instinctive drift and biological preparedness limit which behaviors can be conditioned, and mirror neurons may support imitation." }
      ]
    }
  ],
  bigIdea: "<p>Not all learning requires direct reinforcement. In <b>observational learning</b> (modeling), we learn by watching others. <b>Albert Bandura</b>'s famous <b>Bobo doll</b> studies showed children who watched an adult attack an inflatable doll later imitated that aggression — without ever being rewarded themselves. Whether we imitate depends partly on <b>vicarious reinforcement</b> or <b>vicarious punishment</b>: seeing a model rewarded makes us more likely to copy them, and seeing them punished makes us less likely. <b>Cognition</b> also drives learning. <b>Edward Tolman</b> showed rats formed <b>cognitive maps</b> of a maze and displayed <b>latent learning</b> — knowledge acquired without reinforcement that stayed hidden until there was a reason to use it. <b>Wolfgang Kohler</b> observed <b>insight learning</b>, the sudden 'aha' grasp of a solution.</p>" +
    "<p>Motivation shapes how and whether we learn. <b>Intrinsic motivation</b> is doing something for its own sake; <b>extrinsic motivation</b> is doing it for outside rewards. The <b>overjustification effect</b> is a striking twist: paying people for an activity they already enjoy can <em>reduce</em> their intrinsic interest, because they start to see the reward, not the activity, as the point. Finally, <b>biology sets limits</b> on learning. <b>Instinctive drift</b> describes trained animals reverting to instinctive behaviors, and <b>biological preparedness</b> makes some associations (like fears or taste aversions) far easier to learn. <b>Mirror neurons</b> may provide a neural basis for imitation and empathy.</p>",
  vocab: [
    { term: "Observational learning", def: "Learning by watching and imitating others (models)." },
    { term: "Modeling", def: "The process of observing and imitating a specific behavior demonstrated by another." },
    { term: "Vicarious reinforcement / punishment", def: "Adjusting one's own behavior after seeing a model rewarded (vicarious reinforcement) or punished (vicarious punishment)." },
    { term: "Latent learning", def: "Learning that occurs without obvious reinforcement and is not demonstrated until there is an incentive to do so." },
    { term: "Cognitive map", def: "A mental representation of the layout of one's environment (Tolman)." },
    { term: "Insight learning", def: "A sudden realization of a problem's solution, rather than gradual trial-and-error (Kohler)." },
    { term: "Intrinsic motivation", def: "The desire to perform a behavior for its own sake and inherent satisfaction." },
    { term: "Extrinsic motivation", def: "The desire to perform a behavior to gain external rewards or avoid punishment." },
    { term: "Overjustification effect", def: "The reduction of intrinsic motivation when an external reward is given for an already-enjoyed activity." },
    { term: "Instinctive drift", def: "The tendency of conditioned animals to revert to innate, instinctive behaviors that interfere with the learned response." },
    { term: "Mirror neurons", def: "Neurons proposed to fire both when performing an action and when observing another perform it, possibly supporting imitation." }
  ],
  researchers: [
    { name: "Albert Bandura", contribution: "Demonstrated observational learning with the Bobo doll studies, showing children imitate modeled aggression." },
    { name: "Edward Tolman", contribution: "Showed latent learning and cognitive maps in rats, evidence that learning can occur without reinforcement." },
    { name: "Wolfgang Kohler", contribution: "Documented insight learning in chimpanzees, who solved problems by sudden realization rather than trial and error." }
  ],
  examples: [
    "A child watches an older sibling get praised for sharing and then starts sharing more — even though the child was never directly rewarded. This is observational learning driven by vicarious reinforcement.",
    "Children who already love drawing are paid for each picture. Over time they draw less on their own: the external reward has undermined their intrinsic interest — the overjustification effect."
  ],
  mnemonic: [
    { device: "Bandura's Bobo: we Behave like what we Behold (observational learning).", explain: "The Bobo doll study shows behavior is learned by watching models, not only by direct reinforcement." },
    { device: "Latent = 'lat-er' — learning is hidden until there's a reason to show it.", explain: "Latent learning stays latent (hidden) until an incentive reveals it." }
  ],
  traps: [
    "Assuming all learning needs direct reinforcement; observational and latent learning occur without it.",
    "Confusing latent learning (learning without performance) with a failure to learn; the knowledge is there, just not yet shown.",
    "Overlooking the overjustification effect: adding an extrinsic reward can decrease, not increase, intrinsic motivation.",
    "Treating insight learning as gradual trial-and-error; it is a sudden 'aha' solution.",
    "Ignoring biological limits on learning, such as instinctive drift and preparedness, which constrain what conditioning can achieve."
  ],
  exclusions: [
    "Detailed neuroscience of mirror-neuron systems is beyond the scope; you need only their proposed role in imitation and observational learning."
  ]
};
