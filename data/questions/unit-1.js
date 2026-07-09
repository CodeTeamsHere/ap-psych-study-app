/*
 * data/questions/unit-1.js — Original practice questions for Unit 1.
 * Schema per question:
 *   { id, topic, unit, practice(1-3), difficulty('Easy'|'Moderate'|'Difficult'),
 *     stem, stimulus?(table/bars/scatter/passage/figure),
 *     choices:[{text, correct?:true, why}]  // exactly one correct; every choice has a 'why',
 *     keyConcept }
 * All questions are original, written for this site (not copied from any question bank).
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.questions = window.APSYCH.questions || {};

window.APSYCH.questions["1.1"] = [
  {
    id: "1.1-1", topic: "1.1", unit: 1, practice: 1, difficulty: "Easy",
    stem: "A psychologist argues that a person's sociability results from an inherited temperament that is then shaped by how their family responds to them. This view best reflects which idea?",
    choices: [
      { text: "Behavior is determined entirely by genes (nature).", why: "This ignores the family's influence, which the psychologist explicitly includes." },
      { text: "Heredity and environment interact to shape behavior.", correct: true, why: "The claim combines an inherited temperament with environmental shaping — the interactionist view the CED emphasizes." },
      { text: "Behavior is determined entirely by upbringing (nurture).", why: "This ignores the inherited temperament the psychologist names as a starting point." },
      { text: "Natural selection directly causes individual personality.", why: "Natural selection explains species-wide adaptations over generations, not one person's development from genes-plus-family." }
    ],
    keyConcept: "Gene–environment interaction (nature and nurture, not versus)"
  },
  {
    id: "1.1-2", topic: "1.1", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "An evolutionary psychologist would most likely explain why humans easily develop a fear of snakes by proposing that",
    choices: [
      { text: "the fear is learned only through direct painful experiences with snakes.", why: "That is a purely learning-based account; the evolutionary perspective emphasizes inherited predispositions, not required direct experience." },
      { text: "a predisposition to fear snakes improved ancestors' survival and was naturally selected.", correct: true, why: "The evolutionary perspective explains behavior by its adaptive value shaped by natural selection." },
      { text: "snakes activate the parasympathetic nervous system.", why: "Fear activates the sympathetic (arousing) system, and this is a physiological claim, not an evolutionary explanation." },
      { text: "fear of snakes is culturally taught and varies randomly across societies.", why: "This is an environmental/cultural account, the opposite of the evolutionary, heritable-predisposition explanation." }
    ],
    keyConcept: "Evolutionary perspective and natural selection"
  },
  {
    id: "1.1-3", topic: "1.1", unit: 1, practice: 2, difficulty: "Moderate",
    stem: "Researchers compare identical twins raised together, fraternal twins raised together, and adopted siblings to estimate genetic influence on a trait. This design is used mainly because",
    choices: [
      { text: "it allows random assignment of participants to genetic conditions.", why: "Genes cannot be randomly assigned; twin/adoption studies are used precisely because experiments on heredity are impossible." },
      { text: "comparing groups that differ in genetic relatedness helps separate heredity from environment.", correct: true, why: "Varying genetic similarity while noting shared/different environments lets researchers estimate each factor's contribution." },
      { text: "identical twins have identical environments, controlling all variables.", why: "Even identical twins do not share perfectly identical environments; the method estimates, not perfectly controls, influences." },
      { text: "it proves that a trait is caused entirely by genes.", why: "These studies estimate relative heritability; they never prove a trait is 100% genetic." }
    ],
    keyConcept: "Twin and adoption studies (research methods for heredity)"
  },
  {
    id: "1.1-4", topic: "1.1", unit: 1, practice: 3, difficulty: "Difficult",
    stem: "The table shows the average similarity (correlation) in a personality trait for pairs of people with different relationships. Which conclusion is best supported?",
    stimulus: {
      type: "table",
      caption: "Correlation of a personality trait between pairs",
      headers: ["Pair type", "Correlation (r)"],
      rows: [["Identical twins raised together", "0.52"], ["Fraternal twins raised together", "0.27"], ["Unrelated children raised together", "0.05"]],
      rowHeaders: true
    },
    choices: [
      { text: "The trait shows a genetic influence, because more genetically similar pairs are more alike.", correct: true, why: "Correlation rises with genetic relatedness (0.52 > 0.27 > 0.05), pointing to a heritable component." },
      { text: "The trait is caused entirely by the environment.", why: "If environment alone mattered, unrelated children raised together should be as similar as twins, but they are far less similar (0.05)." },
      { text: "Identical twins have this trait; others do not.", why: "A correlation measures similarity between pairs, not whether individuals 'have' a trait." },
      { text: "Being raised together makes people less similar.", why: "The data show the opposite pattern is driven by relatedness, not by shared rearing reducing similarity." }
    ],
    keyConcept: "Interpreting correlational data from heritability research"
  },
  {
    id: "1.1-5", topic: "1.1", unit: 1, practice: 1, difficulty: "Easy",
    stem: "Which statement best captures the modern scientific consensus on the nature–nurture question?",
    choices: [
      { text: "Nature and nurture each act separately and can be fully separated.", why: "The consensus is that they interact continuously, not that they act separately." },
      { text: "Nature and nurture interact, with genes and experience jointly shaping traits.", correct: true, why: "Contemporary psychology treats behavior as the product of ongoing gene–environment interaction." },
      { text: "Nurture always outweighs nature.", why: "Neither is claimed to 'always' win; their relative contribution varies by trait and interacts." },
      { text: "Nature always outweighs nurture.", why: "This overstates heredity and ignores the interactionist consensus." }
    ],
    keyConcept: "Nature–nurture as interaction"
  },
  {
    id: "1.1-6", topic: "1.1", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A trait is described as 'highly heritable.' A student concludes this means the trait cannot be changed by experience. The student's reasoning is flawed because",
    choices: [
      { text: "heritability estimates apply to individuals, not populations.", why: "Heritability actually refers to variation within a population, but that isn't why 'unchangeable' is wrong." },
      { text: "heritable traits can still be influenced by environmental factors.", correct: true, why: "High heritability (e.g., height) does not mean fixed; environment (e.g., nutrition) can still change outcomes." },
      { text: "heritability always equals 100% for psychological traits.", why: "Heritability is virtually never 100% for psychological traits, and this doesn't address the changeability error." },
      { text: "environment has no measurable effect on any trait.", why: "This is false and the opposite of the point; environment does affect even heritable traits." }
    ],
    keyConcept: "Heritable does not mean unchangeable"
  },
  {
    id: "1.1-7", topic: "1.1", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Average adult height in a country rose substantially over 50 years, even though the population's genes changed little. This is best explained by",
    choices: [
      { text: "a sudden mutation affecting the whole population.", why: "Population-wide mutations don't occur that fast; the premise says genes changed little." },
      { text: "improved environmental factors such as childhood nutrition and healthcare.", correct: true, why: "Environmental improvement can shift a heritable trait's expression across a population within decades." },
      { text: "natural selection eliminating short people within one generation.", why: "Natural selection acts across many generations and wouldn't produce this in 50 years without huge selective pressure." },
      { text: "height becoming a learned behavior.", why: "Height is a physical trait, not a learned behavior; the change reflects environment acting on a heritable trait." }
    ],
    keyConcept: "Environmental influence on heritable traits"
  },
  {
    id: "1.1-8", topic: "1.1", unit: 1, practice: 2, difficulty: "Difficult",
    stem: "An adoption study finds that adopted children's tendency toward a trait resembles their biological parents more than their adoptive parents. What does this most directly suggest, and what key limitation remains?",
    choices: [
      { text: "A genetic contribution to the trait; but shared prenatal environment can also inflate biological resemblance.", correct: true, why: "Resemblance to biological parents implies heredity, yet prenatal environment (shared with the biological mother) is a real confound." },
      { text: "A purely environmental cause; with no limitations.", why: "Greater resemblance to biological (not adoptive) parents argues against a purely environmental cause." },
      { text: "That adoption harms development; but the sample was too small.", why: "The design says nothing about harm from adoption; that misreads the comparison." },
      { text: "That genes fully determine the trait; with no confounds.", why: "Adoption studies estimate genetic contribution and always carry confounds like prenatal environment; 'fully determine' overstates it." }
    ],
    keyConcept: "Adoption-study logic and confounds"
  },
  {
    id: "1.1-9", topic: "1.1", unit: 1, practice: 1, difficulty: "Easy",
    stem: "'Genes load the gun; environment pulls the trigger' is a phrase used to describe",
    choices: [
      { text: "how heredity creates a predisposition that experience may then express.", correct: true, why: "It captures gene–environment interaction: predisposition plus experiential trigger." },
      { text: "how the nervous system fires an action potential.", why: "That's neural firing (Topic 1.3), unrelated to this heredity phrase." },
      { text: "how natural selection removes harmful genes.", why: "The phrase is about individual expression of predispositions, not selection removing genes." },
      { text: "how environment has no role in behavior.", why: "The phrase specifically gives environment the 'trigger' role, so it emphasizes environment's importance." }
    ],
    keyConcept: "Predisposition and expression"
  },
  {
    id: "1.1-10", topic: "1.1", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Which research question best fits the evolutionary perspective?",
    choices: [
      { text: "How did a preference for calorie-dense foods aid ancestral survival?", correct: true, why: "It asks about the adaptive, survival-related origin of a behavior — the evolutionary perspective's core question." },
      { text: "Which neurotransmitter is released during hunger?", why: "That is a biological/physiological question, not an evolutionary (adaptive-value) one." },
      { text: "How does a family's mealtime routine shape eating habits?", why: "That is an environmental/learning question about upbringing, not evolution." },
      { text: "What is the absolute threshold for detecting sweetness?", why: "That is a sensation/psychophysics question (Topic 1.6), unrelated to adaptive origins." }
    ],
    keyConcept: "Identifying evolutionary-perspective questions"
  }
];

window.APSYCH.questions["1.2"] = [
  {
    id: "1.2-1", topic: "1.2", unit: 1, practice: 1, difficulty: "Easy",
    stem: "While hiking, Maya suddenly sees a bear. Her heart races, her pupils dilate, and she feels a surge of energy. Which system produced this response?",
    choices: [
      { text: "The parasympathetic nervous system.", why: "The parasympathetic system calms the body ('rest and digest'); it would slow the heart, not speed it." },
      { text: "The sympathetic nervous system.", correct: true, why: "The sympathetic system triggers 'fight or flight' arousal: racing heart, dilated pupils, energy surge." },
      { text: "The somatic nervous system alone.", why: "The somatic system controls voluntary skeletal muscle, not automatic changes like heart rate and pupil dilation." },
      { text: "The central nervous system's spinal reflex arc.", why: "A reflex arc is a fast automatic movement; the described whole-body arousal is autonomic (sympathetic)." }
    ],
    keyConcept: "Sympathetic nervous system and fight-or-flight"
  },
  {
    id: "1.2-2", topic: "1.2", unit: 1, practice: 1, difficulty: "Easy",
    stem: "The brain and spinal cord together make up the",
    choices: [
      { text: "peripheral nervous system.", why: "The PNS is everything outside the brain and spinal cord." },
      { text: "central nervous system.", correct: true, why: "By definition, the CNS is the brain plus the spinal cord." },
      { text: "autonomic nervous system.", why: "The autonomic system is a division of the PNS controlling involuntary organs." },
      { text: "endocrine system.", why: "The endocrine system is a separate hormone-based network of glands." }
    ],
    keyConcept: "CNS vs. PNS"
  },
  {
    id: "1.2-3", topic: "1.2", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "After giving a stressful presentation, Devon notices his heart rate gradually slowing and his breathing returning to normal. This return to baseline is governed by the",
    choices: [
      { text: "sympathetic nervous system.", why: "The sympathetic system arouses the body; it would keep him keyed up, not calm him." },
      { text: "parasympathetic nervous system.", correct: true, why: "The parasympathetic system restores calm ('rest and digest') after arousal subsides." },
      { text: "somatic nervous system.", why: "The somatic system moves voluntary muscles, not the automatic slowing of heart and breathing." },
      { text: "reflex arc.", why: "A reflex arc is a rapid protective movement, not the gradual autonomic return to baseline." }
    ],
    keyConcept: "Parasympathetic 'rest and digest'"
  },
  {
    id: "1.2-4", topic: "1.2", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Which is the best example of the somatic nervous system in action?",
    choices: [
      { text: "Deliberately raising your hand to answer a question.", correct: true, why: "The somatic system controls voluntary movement of skeletal muscles, like raising a hand on purpose." },
      { text: "Your stomach digesting a meal.", why: "Digestion is involuntary and controlled by the autonomic (parasympathetic) system." },
      { text: "Adrenaline raising your blood sugar.", why: "That is endocrine/hormonal and autonomic, not voluntary somatic control." },
      { text: "Your pupils constricting in bright light.", why: "Pupil reflexes are automatic, controlled by the autonomic system, not the voluntary somatic system." }
    ],
    keyConcept: "Somatic = voluntary skeletal movement"
  },
  {
    id: "1.2-5", topic: "1.2", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A key difference between how the nervous system and the endocrine system communicate is that",
    choices: [
      { text: "the endocrine system uses hormones and acts more slowly but with longer-lasting effects.", correct: true, why: "Hormones travel through the bloodstream: slower onset than neural firing but longer-lasting influence." },
      { text: "the nervous system uses hormones through the bloodstream.", why: "That describes the endocrine system; neurons use electrochemical impulses and neurotransmitters." },
      { text: "the endocrine system is faster than neural transmission.", why: "The endocrine system is slower than rapid neural signaling, not faster." },
      { text: "the two systems never interact.", why: "They interact closely — e.g., the hypothalamus links the nervous and endocrine systems." }
    ],
    keyConcept: "Nervous vs. endocrine communication"
  },
  {
    id: "1.2-6", topic: "1.2", unit: 1, practice: 1, difficulty: "Difficult",
    stem: "Touching a sharp object, Priya jerks her hand back before she is even aware of pain. This rapid withdrawal is best explained by",
    choices: [
      { text: "a reflex arc processed through the spinal cord.", correct: true, why: "Protective reflexes are routed through the spinal cord, producing a response before the brain registers pain." },
      { text: "conscious decision-making in the frontal lobe.", why: "The withdrawal happens before awareness, so it cannot be a conscious frontal-lobe decision." },
      { text: "slow endocrine signaling.", why: "Endocrine responses are far too slow to produce an instant withdrawal." },
      { text: "the parasympathetic 'rest and digest' response.", why: "Rapid protective withdrawal is not a calming parasympathetic function." }
    ],
    keyConcept: "Spinal reflex arc"
  },
  {
    id: "1.2-7", topic: "1.2", unit: 1, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants to measure sympathetic nervous system activation during a fear task. Which measure is most valid?",
    choices: [
      { text: "Heart rate and skin conductance (sweating).", correct: true, why: "Increased heart rate and sweating are direct physiological markers of sympathetic arousal." },
      { text: "A self-report survey given a week later.", why: "A delayed self-report is an indirect, memory-dependent measure, not a direct index of physiological arousal." },
      { text: "The participant's height and weight.", why: "These are unrelated to sympathetic activation." },
      { text: "Number of words recalled after the task.", why: "Recall measures memory, not sympathetic arousal." }
    ],
    keyConcept: "Operationalizing sympathetic arousal"
  },
  {
    id: "1.2-8", topic: "1.2", unit: 1, practice: 1, difficulty: "Easy",
    stem: "The autonomic nervous system is responsible for",
    choices: [
      { text: "controlling voluntary skeletal muscle movements.", why: "That is the somatic nervous system's job, not the autonomic system's." },
      { text: "regulating involuntary functions such as heartbeat and digestion.", correct: true, why: "The autonomic system governs automatic internal processes like heart rate and digestion." },
      { text: "processing all conscious thought.", why: "Conscious thought is handled by the brain (CNS/cortex), not the autonomic system." },
      { text: "transmitting light into neural signals.", why: "That is transduction in sensation (Topic 1.6), unrelated to the autonomic system." }
    ],
    keyConcept: "Autonomic = involuntary internal regulation"
  },
  {
    id: "1.2-9", topic: "1.2", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Which sequence correctly moves from the broadest division to the most specific?",
    choices: [
      { text: "Peripheral → autonomic → sympathetic.", correct: true, why: "The sympathetic system is a subdivision of the autonomic system, which is a subdivision of the PNS." },
      { text: "Autonomic → peripheral → sympathetic.", why: "The peripheral system is broader than the autonomic, so this order is reversed." },
      { text: "Sympathetic → autonomic → peripheral.", why: "This goes from most specific to broadest — the opposite of what's asked." },
      { text: "Central → somatic → sympathetic.", why: "The somatic and sympathetic systems are both in the PNS, not the CNS, so this mixes divisions incorrectly." }
    ],
    keyConcept: "Hierarchy of nervous-system divisions"
  },
  {
    id: "1.2-10", topic: "1.2", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "During a calm dinner with friends, which physiological pattern is most likely dominant?",
    choices: [
      { text: "Parasympathetic activity promoting digestion and a lowered heart rate.", correct: true, why: "A relaxed meal is the classic 'rest and digest' parasympathetic state." },
      { text: "Sympathetic activity dilating the pupils and stopping digestion.", why: "That is the fight-or-flight state, inappropriate for a calm dinner." },
      { text: "Somatic paralysis of all skeletal muscles.", why: "There is no such state during dinner; the somatic system still allows voluntary movement." },
      { text: "Complete shutdown of the autonomic nervous system.", why: "The autonomic system runs continuously; it never fully shuts down while alive." }
    ],
    keyConcept: "Parasympathetic dominance at rest"
  }
];

window.APSYCH.questions["1.3"] = [
  {
    id: "1.3-1", topic: "1.3", unit: 1, practice: 1, difficulty: "Easy",
    stem: "The part of the neuron that receives incoming messages from other neurons is the",
    choices: [
      { text: "axon.", why: "The axon carries the impulse away from the cell body toward other neurons." },
      { text: "dendrites.", correct: true, why: "Dendrites are the branch-like receivers of incoming signals." },
      { text: "terminal buttons.", why: "Terminal buttons release neurotransmitters at the end of the axon; they send, not receive." },
      { text: "myelin sheath.", why: "The myelin sheath insulates the axon to speed transmission; it doesn't receive messages." }
    ],
    keyConcept: "Neuron structure: dendrites receive"
  },
  {
    id: "1.3-2", topic: "1.3", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The 'all-or-none' principle means that",
    choices: [
      { text: "a neuron fires at full strength or not at all, regardless of how strong the stimulus is above threshold.", correct: true, why: "Once threshold is reached, the action potential is a fixed, full-strength event; intensity is coded by firing rate." },
      { text: "a stronger stimulus makes each action potential larger.", why: "Action-potential strength is constant; a stronger stimulus increases firing frequency, not size." },
      { text: "all neurons in the brain fire together or none do.", why: "The principle concerns a single neuron's firing, not the whole brain firing at once." },
      { text: "neurons only fire during sleep.", why: "Neurons fire constantly during waking and sleep; this misstates the principle entirely." }
    ],
    keyConcept: "All-or-none firing"
  },
  {
    id: "1.3-3", topic: "1.3", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A neuroscientist notes that a very intense stimulus and a mild (but above-threshold) stimulus produce action potentials of the same size, but the intense stimulus produces more of them per second. This illustrates that stimulus intensity is coded by",
    choices: [
      { text: "the frequency of neural firing, not the amplitude of each impulse.", correct: true, why: "Because of the all-or-none principle, intensity is represented by how often the neuron fires, not by impulse size." },
      { text: "the size of each individual action potential.", why: "Action-potential size is constant (all-or-none); it does not scale with intensity." },
      { text: "the length of the neuron's dendrites.", why: "Dendrite length doesn't encode stimulus intensity." },
      { text: "the amount of myelin on the axon.", why: "Myelin affects speed of transmission, not the coding of intensity." }
    ],
    keyConcept: "Intensity coded by firing rate"
  },
  {
    id: "1.3-4", topic: "1.3", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "At the synapse, after neurotransmitters are released and bind to the next neuron, excess neurotransmitter is reabsorbed by the sending neuron. This process is called",
    choices: [
      { text: "reuptake.", correct: true, why: "Reuptake is the sending neuron's reabsorption of leftover neurotransmitter from the synaptic gap." },
      { text: "transduction.", why: "Transduction is converting physical energy into neural signals (sensation), not synaptic reabsorption." },
      { text: "an action potential.", why: "The action potential is the electrical impulse down the axon, not the reabsorption process." },
      { text: "depolarization.", why: "Depolarization is part of generating the impulse, not the reabsorption of neurotransmitter." }
    ],
    keyConcept: "Reuptake at the synapse"
  },
  {
    id: "1.3-5", topic: "1.3", unit: 1, practice: 1, difficulty: "Difficult",
    stem: "A drug blocks the receptor sites for a neurotransmitter so the neurotransmitter cannot bind. This drug is acting as a(n)",
    choices: [
      { text: "antagonist.", correct: true, why: "An antagonist blocks or reduces a neurotransmitter's action — here by occupying/blocking its receptors." },
      { text: "agonist.", why: "An agonist mimics or increases a neurotransmitter's action, the opposite of blocking it." },
      { text: "reuptake enhancer that increases the neurotransmitter's effect.", why: "Increasing the effect is agonist-like; blocking receptors decreases the effect." },
      { text: "myelin catalyst.", why: "There is no such mechanism; myelin is insulation, unrelated to receptor binding." }
    ],
    keyConcept: "Agonists vs. antagonists"
  },
  {
    id: "1.3-6", topic: "1.3", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The myelin sheath's main function is to",
    choices: [
      { text: "speed the transmission of the neural impulse along the axon.", correct: true, why: "Myelin insulates the axon, allowing the action potential to travel faster." },
      { text: "generate the action potential.", why: "The action potential is generated by the neuron's membrane at threshold, not by myelin." },
      { text: "release neurotransmitters into the synapse.", why: "Neurotransmitters are released from terminal buttons, not the myelin sheath." },
      { text: "receive incoming signals from other neurons.", why: "Receiving signals is the dendrites' role, not the myelin's." }
    ],
    keyConcept: "Myelin speeds transmission"
  },
  {
    id: "1.3-7", topic: "1.3", unit: 1, practice: 1, difficulty: "Difficult",
    stem: "Many antidepressants block the reuptake of serotonin. The most direct effect of blocking reuptake is that",
    choices: [
      { text: "more serotonin remains available in the synapse to affect the receiving neuron.", correct: true, why: "Blocking reabsorption leaves neurotransmitter in the gap longer, increasing its action — an agonist-like effect." },
      { text: "the sending neuron immediately stops producing serotonin.", why: "Reuptake blockade concerns reabsorption, not production; it doesn't shut off synthesis." },
      { text: "serotonin can no longer bind to any receptors.", why: "Blocking reuptake increases, not prevents, receptor binding by keeping serotonin in the synapse." },
      { text: "the axon loses its myelin.", why: "Reuptake has nothing to do with myelin integrity." }
    ],
    keyConcept: "Reuptake inhibition increases neurotransmitter availability"
  },
  {
    id: "1.3-8", topic: "1.3", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Which neurotransmitter is most associated with reward, motivation, and voluntary movement (and is implicated in Parkinson's disease and addiction)?",
    choices: [
      { text: "Dopamine.", correct: true, why: "Dopamine underlies reward/motivation and movement; its loss is linked to Parkinson's and its surges to addiction." },
      { text: "GABA.", why: "GABA is the main inhibitory neurotransmitter (calming), not the reward/movement one." },
      { text: "Acetylcholine.", why: "Acetylcholine is key for muscle action and memory, not primarily reward/motivation." },
      { text: "Endorphins.", why: "Endorphins reduce pain and produce pleasure but aren't the primary reward/movement transmitter described." }
    ],
    keyConcept: "Neurotransmitter functions: dopamine"
  },
  {
    id: "1.3-9", topic: "1.3", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "After an intense workout, Jordan feels a natural 'high' and reduced pain. This is most directly linked to the release of",
    choices: [
      { text: "endorphins.", correct: true, why: "Endorphins are natural, opioid-like neurotransmitters that reduce pain and can produce euphoria." },
      { text: "GABA.", why: "GABA is inhibitory/calming and not specifically responsible for a pain-reducing 'high.'" },
      { text: "glutamate.", why: "Glutamate is the main excitatory neurotransmitter, not the source of a runner's high." },
      { text: "acetylcholine.", why: "Acetylcholine relates to muscle movement and memory, not the euphoric pain relief described." }
    ],
    keyConcept: "Endorphins and pain relief"
  },
  {
    id: "1.3-10", topic: "1.3", unit: 1, practice: 1, difficulty: "Easy",
    stem: "Order of information flow within a single neuron is best described as",
    choices: [
      { text: "dendrites → cell body → axon → terminal buttons.", correct: true, why: "Signals are received at dendrites, integrated in the cell body, sent down the axon, and released at the terminals." },
      { text: "axon → dendrites → cell body → synapse.", why: "This reverses the flow; dendrites receive first, not after the axon." },
      { text: "terminal buttons → axon → cell body → dendrites.", why: "This is backwards; information does not start at the terminal buttons." },
      { text: "synapse → myelin → dendrites → axon.", why: "This ordering is incoherent; the synapse is between neurons, and myelin is not a processing stage." }
    ],
    keyConcept: "Direction of neural information flow"
  },
  {
    id: "1.3-11", topic: "1.3", unit: 1, practice: 2, difficulty: "Difficult",
    stem: "A researcher claims a new drug 'increases acetylcholine activity at the synapse.' Which experimental finding would most directly support calling the drug an agonist?",
    choices: [
      { text: "Muscles that use acetylcholine contract more strongly when the drug is present.", correct: true, why: "Enhanced acetylcholine-mediated action is exactly what an agonist (which boosts a neurotransmitter's effect) should produce." },
      { text: "The drug reduces all neural firing throughout the brain.", why: "General suppression suggests blocking/inhibition, more consistent with an antagonist than an agonist." },
      { text: "The drug dissolves the myelin sheath.", why: "Destroying myelin concerns transmission speed, not whether the drug mimics acetylcholine." },
      { text: "Participants report no change at all.", why: "No change would fail to support any claim that the drug increases acetylcholine activity." }
    ],
    keyConcept: "Evaluating evidence for agonist action"
  }
];

window.APSYCH.questions["1.4"] = [
  {
    id: "1.4-1", topic: "1.4", unit: 1, practice: 1, difficulty: "Easy",
    stem: "Damage to the hippocampus would most likely impair a person's ability to",
    choices: [
      { text: "form new long-term memories.", correct: true, why: "The hippocampus is essential for forming and consolidating new explicit memories." },
      { text: "recall memories from early childhood.", why: "Older consolidated memories are stored in the cortex and can survive hippocampal damage." },
      { text: "maintain balance while walking.", why: "Balance and coordination are the cerebellum's role, not the hippocampus's." },
      { text: "see colors.", why: "Color vision is processed in the occipital lobe, not the hippocampus." }
    ],
    keyConcept: "Hippocampus forms new memories"
  },
  {
    id: "1.4-2", topic: "1.4", unit: 1, practice: 1, difficulty: "Easy",
    stem: "Which lobe of the cerebral cortex is primarily responsible for processing visual information?",
    choices: [
      { text: "Occipital lobe.", correct: true, why: "The occipital lobe at the back of the brain processes vision." },
      { text: "Temporal lobe.", why: "The temporal lobe handles hearing and language comprehension, not primary vision." },
      { text: "Frontal lobe.", why: "The frontal lobe handles planning, movement, and speech production, not vision." },
      { text: "Parietal lobe.", why: "The parietal lobe processes touch and body sensation, not vision." }
    ],
    keyConcept: "Occipital lobe and vision"
  },
  {
    id: "1.4-3", topic: "1.4", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "After a stroke, a patient can understand language perfectly but produces slow, effortful, broken speech. The damage is most likely to",
    choices: [
      { text: "Broca's area in the frontal lobe.", correct: true, why: "Broca's area governs speech production; damage yields effortful, halting speech with intact comprehension." },
      { text: "Wernicke's area in the temporal lobe.", why: "Wernicke's damage impairs comprehension and produces fluent but meaningless speech — the opposite pattern." },
      { text: "the occipital lobe.", why: "The occipital lobe handles vision, unrelated to speech production." },
      { text: "the cerebellum.", why: "The cerebellum coordinates movement/balance, not language production specifically." }
    ],
    keyConcept: "Broca's area = speech production"
  },
  {
    id: "1.4-4", topic: "1.4", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A person who can speak fluently but produces nonsensical, jumbled sentences and struggles to understand others has most likely damaged",
    choices: [
      { text: "Wernicke's area.", correct: true, why: "Wernicke's area supports language comprehension; damage causes fluent but meaningless speech and poor understanding." },
      { text: "Broca's area.", why: "Broca's damage causes effortful, sparse speech with preserved comprehension — not fluent nonsense." },
      { text: "the amygdala.", why: "The amygdala processes emotion (especially fear), not language comprehension." },
      { text: "the hypothalamus.", why: "The hypothalamus regulates drives and the endocrine system, not language." }
    ],
    keyConcept: "Wernicke's area = comprehension"
  },
  {
    id: "1.4-5", topic: "1.4", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The structure that acts as the brain's sensory relay station, directing most incoming sensory signals (except smell) to the appropriate cortical areas, is the",
    choices: [
      { text: "thalamus.", correct: true, why: "The thalamus routes incoming sensory information (all senses except smell) to the cortex." },
      { text: "hypothalamus.", why: "The hypothalamus regulates hunger, thirst, temperature, and the endocrine system — not sensory relay." },
      { text: "cerebellum.", why: "The cerebellum coordinates movement and balance, not sensory relay." },
      { text: "amygdala.", why: "The amygdala is involved in emotion, not routing sensory input to the cortex." }
    ],
    keyConcept: "Thalamus as sensory relay"
  },
  {
    id: "1.4-6", topic: "1.4", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A gymnast's precise balance and smoothly coordinated movements depend heavily on the",
    choices: [
      { text: "cerebellum.", correct: true, why: "The cerebellum coordinates balance, posture, and smooth voluntary movement." },
      { text: "hippocampus.", why: "The hippocampus forms new memories, not motor coordination." },
      { text: "occipital lobe.", why: "The occipital lobe processes vision, not balance and coordination." },
      { text: "Broca's area.", why: "Broca's area is for speech production, unrelated to physical balance." }
    ],
    keyConcept: "Cerebellum and coordination"
  },
  {
    id: "1.4-7", topic: "1.4", unit: 1, practice: 1, difficulty: "Difficult",
    stem: "A researcher observes heightened activity in a small almond-shaped structure whenever participants view threatening faces. This structure is the",
    choices: [
      { text: "amygdala.", correct: true, why: "The amygdala is central to processing emotion, especially fear and threat detection." },
      { text: "corpus callosum.", why: "The corpus callosum connects the hemispheres; it isn't the emotion-processing structure described." },
      { text: "thalamus.", why: "The thalamus relays sensory signals; it isn't specifically the fear-processing structure." },
      { text: "cerebellum.", why: "The cerebellum handles movement/balance, not emotional threat responses." }
    ],
    keyConcept: "Amygdala and fear"
  },
  {
    id: "1.4-8", topic: "1.4", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The brain's ability to reorganize itself by forming new neural connections, especially after learning or injury, is called",
    choices: [
      { text: "neuroplasticity.", correct: true, why: "Neuroplasticity is the brain's capacity to rewire and adapt through new connections." },
      { text: "transduction.", why: "Transduction converts physical energy to neural signals in sensation, not brain reorganization." },
      { text: "reuptake.", why: "Reuptake is neurotransmitter reabsorption at the synapse, unrelated to structural reorganization." },
      { text: "natural selection.", why: "Natural selection is an evolutionary process across generations, not within-brain rewiring." }
    ],
    keyConcept: "Neuroplasticity"
  },
  {
    id: "1.4-9", topic: "1.4", unit: 1, practice: 2, difficulty: "Difficult",
    stem: "A scientist wants to know which brain regions become active while people solve math problems, with good spatial detail. Which tool is most appropriate?",
    choices: [
      { text: "fMRI, which tracks blood flow to show active regions.", correct: true, why: "fMRI provides spatial images of activity by measuring blood-oxygen changes during a task." },
      { text: "A lesion, by destroying tissue to see what is lost.", why: "Deliberately lesioning human brains to study math is unethical and destroys function rather than imaging activity." },
      { text: "An EEG, which alone gives precise 3-D location of deep activity.", why: "EEG has excellent timing but poor spatial resolution, so it can't pinpoint deep regions well." },
      { text: "A reflex test.", why: "A reflex test measures spinal reflexes, not cortical activity during problem-solving." }
    ],
    keyConcept: "Neuroimaging tools (fMRI vs. EEG)"
  },
  {
    id: "1.4-10", topic: "1.4", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The band of nerve fibers that connects the left and right hemispheres, allowing them to communicate, is the",
    choices: [
      { text: "corpus callosum.", correct: true, why: "The corpus callosum is the fiber bridge linking the two hemispheres." },
      { text: "medulla.", why: "The medulla controls vital functions like breathing and heartbeat, not hemispheric communication." },
      { text: "hippocampus.", why: "The hippocampus forms memories; it doesn't connect the hemispheres." },
      { text: "somatosensory cortex.", why: "The somatosensory cortex processes touch; it isn't the hemisphere-connecting structure." }
    ],
    keyConcept: "Corpus callosum connects hemispheres"
  },
  {
    id: "1.4-11", topic: "1.4", unit: 1, practice: 1, difficulty: "Difficult",
    stem: "A patient can form new memories and speak normally but has lost the ability to feel touch on the right side of the body. Damage is most likely in the",
    choices: [
      { text: "left parietal lobe (somatosensory cortex).", correct: true, why: "The parietal lobe's somatosensory cortex processes touch, and each hemisphere handles the opposite side of the body." },
      { text: "right occipital lobe.", why: "The occipital lobe handles vision, not touch sensation." },
      { text: "left temporal lobe.", why: "The temporal lobe handles hearing/comprehension, not body touch." },
      { text: "cerebellum.", why: "The cerebellum coordinates movement/balance; it is not the primary touch-processing area." }
    ],
    keyConcept: "Parietal lobe / somatosensory cortex and contralateral control"
  }
];

window.APSYCH.questions["1.5"] = [
  {
    id: "1.5-1", topic: "1.5", unit: 1, practice: 1, difficulty: "Easy",
    stem: "The body's roughly 24-hour biological clock that regulates the sleep–wake cycle is the",
    choices: [
      { text: "circadian rhythm.", correct: true, why: "The circadian rhythm is the ~24-hour internal clock governing sleep and wakefulness." },
      { text: "REM cycle.", why: "REM is one sleep stage that recurs about every 90 minutes, not the 24-hour clock." },
      { text: "sleep spindle.", why: "Sleep spindles are bursts of activity in NREM-2, not a daily rhythm." },
      { text: "reflex arc.", why: "A reflex arc is a spinal response pathway, unrelated to daily rhythms." }
    ],
    keyConcept: "Circadian rhythm"
  },
  {
    id: "1.5-2", topic: "1.5", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Which is the best description of REM sleep?",
    choices: [
      { text: "High brain activity with vivid dreaming and near-paralysis of the body ('paradoxical sleep').", correct: true, why: "REM pairs an active, dreaming brain with muscle atonia, earning the name paradoxical sleep." },
      { text: "The deepest, slow-wave stage from which it is hardest to be awakened.", why: "That describes NREM-3 (deep slow-wave sleep), not REM." },
      { text: "A brief transitional stage marked by hypnagogic jerks.", why: "That describes NREM-1, the lightest stage, not REM." },
      { text: "Complete absence of brain activity.", why: "Brain activity is high during REM, not absent." }
    ],
    keyConcept: "REM (paradoxical) sleep"
  },
  {
    id: "1.5-3", topic: "1.5", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A student pulls an all-nighter to cram. According to research on sleep and memory, this is counterproductive largely because",
    choices: [
      { text: "sleep supports memory consolidation, so skipping it undermines retention of what was studied.", correct: true, why: "Sleep (especially slow-wave and REM) consolidates new learning; losing it weakens memory." },
      { text: "studying at night is impossible for the brain.", why: "Studying at night is possible; the issue is losing the consolidation that sleep provides." },
      { text: "the circadian rhythm permanently resets after one late night.", why: "One late night doesn't permanently reset the clock; the key harm is lost consolidation." },
      { text: "memories can only form during REM dreaming.", why: "Consolidation involves multiple stages, and memories form while awake too; this overstates REM's exclusivity." }
    ],
    keyConcept: "Sleep and memory consolidation"
  },
  {
    id: "1.5-4", topic: "1.5", unit: 1, practice: 3, difficulty: "Difficult",
    stem: "The chart shows average nightly sleep and average reported concentration (0–10) for four groups of students. Which statement is best supported?",
    stimulus: {
      type: "bars",
      caption: "Average concentration rating (0–10) by nightly sleep group",
      categories: ["4–5 hrs", "6 hrs", "7 hrs", "8–9 hrs"],
      values: [4.1, 5.6, 7.2, 8.0],
      yLabel: "Concentration (0–10)", max: 10
    },
    choices: [
      { text: "Students who slept more tended to report higher concentration.", correct: true, why: "Concentration rises across the groups as sleep increases (4.1 → 8.0), a positive association." },
      { text: "Sleeping less caused better grades.", why: "The data show more sleep, not less, tracks with higher concentration — and this is associational, not proven causal." },
      { text: "There is no relationship between sleep and concentration.", why: "There is a clear upward pattern, so 'no relationship' is unsupported." },
      { text: "Concentration was identical across all groups.", why: "The bars differ substantially (4.1 vs 8.0), so they are not identical." }
    ],
    keyConcept: "Interpreting a bar graph of sleep vs. concentration"
  },
  {
    id: "1.5-5", topic: "1.5", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The activation-synthesis theory proposes that dreams",
    choices: [
      { text: "are the cortex's attempt to interpret random neural activity generated during REM.", correct: true, why: "Activation-synthesis says the brain 'synthesizes' a story from random REM-driven activation." },
      { text: "always reveal hidden unconscious wishes.", why: "That is closer to Freud's wish-fulfillment view, not activation-synthesis." },
      { text: "primarily rehearse and consolidate the day's memories.", why: "That is the information-processing theory, a different explanation of dreaming." },
      { text: "occur only during the deepest NREM stage.", why: "Vivid dreaming and this theory center on REM, not deep NREM-3." }
    ],
    keyConcept: "Activation-synthesis theory of dreaming"
  },
  {
    id: "1.5-6", topic: "1.5", unit: 1, practice: 1, difficulty: "Easy",
    stem: "During which stage is a sleeper typically hardest to awaken and most likely experiencing deep, restorative slow-wave sleep?",
    choices: [
      { text: "NREM-3.", correct: true, why: "NREM-3 is deep slow-wave sleep, the hardest stage to wake from and key for restoration." },
      { text: "NREM-1.", why: "NREM-1 is the lightest stage, easy to wake from." },
      { text: "REM.", why: "Though the body is paralyzed in REM, the brain is very active and it isn't the deep slow-wave stage." },
      { text: "Wakefulness.", why: "The question asks about a sleep stage, and wakefulness is not sleep." }
    ],
    keyConcept: "NREM-3 deep sleep"
  },
  {
    id: "1.5-7", topic: "1.5", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A traveler flies from New York to Tokyo and struggles to sleep at appropriate local times for several days. This 'jet lag' occurs because",
    choices: [
      { text: "the internal circadian rhythm is still aligned with the departure time zone.", correct: true, why: "Jet lag reflects a mismatch between the internal clock and the new external time, which takes days to reset." },
      { text: "the traveler has developed narcolepsy.", why: "Narcolepsy is a chronic disorder of sudden sleep attacks, not a temporary time-zone mismatch." },
      { text: "flying permanently damages the hypothalamus.", why: "Jet lag is temporary and doesn't reflect permanent brain damage." },
      { text: "REM sleep no longer occurs after flights.", why: "REM sleep still occurs; the problem is timing of the sleep–wake cycle." }
    ],
    keyConcept: "Circadian misalignment (jet lag)"
  },
  {
    id: "1.5-8", topic: "1.5", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "A person repeatedly experiences sudden, uncontrollable episodes of falling asleep during the day, sometimes directly into REM. This best describes",
    choices: [
      { text: "narcolepsy.", correct: true, why: "Narcolepsy involves sudden, uncontrollable sleep attacks, sometimes entering REM directly." },
      { text: "insomnia.", why: "Insomnia is difficulty falling or staying asleep, not sudden daytime sleep attacks." },
      { text: "sleep apnea being fully treated.", why: "Sleep apnea involves breathing interruptions; the described sudden REM-onset attacks fit narcolepsy." },
      { text: "normal circadian variation.", why: "Uncontrollable daytime sleep attacks are not part of a normal circadian pattern." }
    ],
    keyConcept: "Narcolepsy"
  },
  {
    id: "1.5-9", topic: "1.5", unit: 1, practice: 1, difficulty: "Easy",
    stem: "About how often does a full sleep cycle (through the NREM stages and into REM) repeat across the night?",
    choices: [
      { text: "Roughly every 90 minutes.", correct: true, why: "Sleep cycles repeat approximately every 90 minutes, with REM periods lengthening toward morning." },
      { text: "Roughly every 24 hours.", why: "24 hours is the circadian rhythm, not the within-night sleep-stage cycle." },
      { text: "Only once per night.", why: "The cycle repeats multiple times per night, not once." },
      { text: "Every 10 seconds.", why: "That is far too fast; stages last many minutes each." }
    ],
    keyConcept: "~90-minute sleep cycle"
  },
  {
    id: "1.5-10", topic: "1.5", unit: 1, practice: 2, difficulty: "Difficult",
    stem: "A researcher wants to determine which sleep stage a participant is in at a given moment. The most valid tool is",
    choices: [
      { text: "an EEG recording of brain-wave patterns.", correct: true, why: "Sleep stages are defined by characteristic brain-wave patterns, which an EEG measures directly." },
      { text: "a single self-report the next morning.", why: "A morning self-report can't identify moment-to-moment stages during sleep." },
      { text: "measuring the participant's height.", why: "Height is irrelevant to sleep staging." },
      { text: "counting words the participant recalls.", why: "Recall measures memory, not the current sleep stage." }
    ],
    keyConcept: "EEG and sleep staging"
  }
];

window.APSYCH.questions["1.6"] = [
  {
    id: "1.6-1", topic: "1.6", unit: 1, practice: 1, difficulty: "Easy",
    stem: "The process of converting physical energy such as light or sound waves into neural impulses is called",
    choices: [
      { text: "transduction.", correct: true, why: "Transduction converts physical stimulus energy into the neural signals the brain can process." },
      { text: "perception.", why: "Perception is the brain's interpretation of sensory data, which comes after transduction." },
      { text: "accommodation.", why: "Accommodation refers to lens focusing (or a Piaget concept), not energy conversion." },
      { text: "adaptation.", why: "Sensory adaptation is reduced sensitivity to a constant stimulus, not the energy-conversion process." }
    ],
    keyConcept: "Transduction"
  },
  {
    id: "1.6-2", topic: "1.6", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "The minimum amount of a stimulus a person can detect 50% of the time is the",
    choices: [
      { text: "absolute threshold.", correct: true, why: "The absolute threshold is the smallest detectable stimulus level (detected half the time)." },
      { text: "difference threshold.", why: "The difference threshold is the smallest detectable change between two stimuli, not the minimum detectable level." },
      { text: "sensory adaptation point.", why: "That's not a defined threshold; adaptation is declining sensitivity to a constant stimulus." },
      { text: "receptor ceiling.", why: "This is not a real psychophysics term." }
    ],
    keyConcept: "Absolute threshold"
  },
  {
    id: "1.6-3", topic: "1.6", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "After a few minutes in a smelly locker room, Ravi barely notices the odor anymore. This illustrates",
    choices: [
      { text: "sensory adaptation.", correct: true, why: "Sensitivity to an unchanging stimulus (the constant odor) decreases over time — sensory adaptation." },
      { text: "transduction.", why: "Transduction is converting the odor molecules into signals, not the fading of the sensation." },
      { text: "the absolute threshold.", why: "He clearly detected the smell initially; this is about reduced sensitivity, not a detection minimum." },
      { text: "Weber's law.", why: "Weber's law concerns just-noticeable differences between stimuli, not fading of a constant one." }
    ],
    keyConcept: "Sensory adaptation"
  },
  {
    id: "1.6-4", topic: "1.6", unit: 1, practice: 3, difficulty: "Difficult",
    stem: "The table gives the just-noticeable difference (JND) in weight for two starting weights. Which conclusion best fits Weber's law?",
    stimulus: {
      type: "table",
      caption: "Just-noticeable difference (JND) by starting weight",
      headers: ["Starting weight", "JND needed to notice a change"],
      rows: [["100 g", "2 g"], ["500 g", "10 g"]],
      rowHeaders: true
    },
    choices: [
      { text: "The JND is a constant proportion (about 2%) of the starting weight.", correct: true, why: "2 g/100 g and 10 g/500 g both equal 2% — a constant proportion, exactly what Weber's law predicts." },
      { text: "The JND is a constant amount (2 g) regardless of starting weight.", why: "The JND rises from 2 g to 10 g, so it is not a constant amount." },
      { text: "Heavier objects are impossible to distinguish.", why: "They can be distinguished; a larger absolute change is simply needed." },
      { text: "The JND decreases as the starting weight increases.", why: "It increases (2 g → 10 g), not decreases." }
    ],
    keyConcept: "Weber's law (constant proportion)"
  },
  {
    id: "1.6-5", topic: "1.6", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "In dim light, you can see shapes and movement but almost no color. This is because",
    choices: [
      { text: "rods, which detect dim light but not color, dominate vision in low light.", correct: true, why: "Rods are highly sensitive in dim light but do not encode color, so night vision is nearly colorless." },
      { text: "cones become more active in the dark.", why: "Cones need bright light and detect color; they are least active in the dark." },
      { text: "the lens stops performing transduction.", why: "The lens focuses light; transduction occurs at the retina's receptors, and it continues in dim light." },
      { text: "the optic nerve shuts off at night.", why: "The optic nerve keeps transmitting; the color loss is due to rod dominance, not the nerve shutting off." }
    ],
    keyConcept: "Rods vs. cones"
  },
  {
    id: "1.6-6", topic: "1.6", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "In the ear, the structure where sound waves are transduced into neural signals by tiny hair cells is the",
    choices: [
      { text: "cochlea.", correct: true, why: "The fluid-filled cochlea contains hair cells that transduce sound vibrations into neural impulses." },
      { text: "retina.", why: "The retina is in the eye and transduces light, not sound." },
      { text: "cornea.", why: "The cornea is part of the eye's focusing system, not the ear." },
      { text: "olfactory bulb.", why: "The olfactory bulb processes smell, not sound." }
    ],
    keyConcept: "Cochlea transduces sound"
  },
  {
    id: "1.6-7", topic: "1.6", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Weber's law states that to notice a difference between two stimuli, they must differ by a",
    choices: [
      { text: "constant proportion, not a constant amount.", correct: true, why: "The JND is a fixed percentage of the original stimulus, so larger stimuli need larger absolute changes." },
      { text: "constant fixed number of units in all cases.", why: "A constant amount contradicts Weber's law, which specifies a proportion." },
      { text: "amount equal to the absolute threshold.", why: "The absolute threshold is about minimum detection, not the difference threshold's proportional rule." },
      { text: "random amount that cannot be predicted.", why: "Weber's law makes the JND predictable as a proportion, not random." }
    ],
    keyConcept: "Weber's law definition"
  },
  {
    id: "1.6-8", topic: "1.6", unit: 1, practice: 1, difficulty: "Easy",
    stem: "The critical distinction between sensation and perception is that sensation is ______ while perception is ______.",
    choices: [
      { text: "detecting raw stimuli; organizing and interpreting that information.", correct: true, why: "Sensation is receptor-level detection; perception is the brain's interpretation of it." },
      { text: "interpreting stimuli; detecting stimuli.", why: "This reverses the two terms." },
      { text: "a learned skill; an innate reflex.", why: "Both involve innate and learned components; this mischaracterizes the distinction." },
      { text: "only visual; only auditory.", why: "Both sensation and perception apply across all senses, not one modality each." }
    ],
    keyConcept: "Sensation vs. perception"
  },
  {
    id: "1.6-9", topic: "1.6", unit: 1, practice: 1, difficulty: "Difficult",
    stem: "A soldier on guard duty at night detects a very faint sound that others miss, partly because he expects danger. This influence of expectations and motivation on detecting weak stimuli is described by",
    choices: [
      { text: "signal detection theory.", correct: true, why: "Signal detection theory says detecting a faint stimulus depends on its strength AND the observer's expectations/state." },
      { text: "Weber's law.", why: "Weber's law concerns proportional differences between stimuli, not expectation-driven detection of faint signals." },
      { text: "sensory adaptation.", why: "Adaptation is reduced sensitivity to constant stimuli, not heightened detection due to expectation." },
      { text: "transduction.", why: "Transduction is energy conversion; it doesn't explain the role of expectation in detection." }
    ],
    keyConcept: "Signal detection theory"
  },
  {
    id: "1.6-10", topic: "1.6", unit: 1, practice: 1, difficulty: "Moderate",
    stem: "Closing your eyes and still knowing that your arm is bent and raised above your head relies on",
    choices: [
      { text: "kinesthesis.", correct: true, why: "Kinesthesis is the sense of the position and movement of individual body parts." },
      { text: "the vestibular sense.", why: "The vestibular sense tracks overall head position and balance, not the specific position of a limb." },
      { text: "the absolute threshold.", why: "That's a detection concept, unrelated to body-position awareness." },
      { text: "transduction of light.", why: "Knowing arm position with eyes closed does not involve light transduction." }
    ],
    keyConcept: "Kinesthesis vs. vestibular sense"
  },
  {
    id: "1.6-11", topic: "1.6", unit: 1, practice: 2, difficulty: "Difficult",
    stem: "A researcher measures the softest tone each participant can hear 50% of the time in a soundproof booth. This procedure operationally defines",
    choices: [
      { text: "the absolute threshold for hearing.", correct: true, why: "Detecting a stimulus 50% of the time is exactly the operational definition of the absolute threshold." },
      { text: "the difference threshold for hearing.", why: "The difference threshold involves detecting a change between two tones, not the minimum audible tone." },
      { text: "sensory adaptation.", why: "This measures a detection minimum, not declining sensitivity over time." },
      { text: "signal detection bias only.", why: "The 50%-detection criterion defines the absolute threshold; response bias is a separate factor." }
    ],
    keyConcept: "Operationalizing the absolute threshold"
  }
];
