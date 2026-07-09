/*
 * data/notes/unit-1.js — Study notes for Unit 1: Biological Bases of Behavior.
 * Original explanatory content. LO/EK statements are paraphrased from the College Board
 * AP Psychology CED; LO letters and EK numbers follow the CED numbering convention.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.notes = window.APSYCH.notes || {};

window.APSYCH.notes["1.1"] = {
  topic: "1.1", unit: 1, title: "Interaction of Heredity and Environment",
  los: [
    {
      code: "1.1.A", text: "Explain the relationship between heredity and environment in shaping behavior and mental processes.",
      eks: [
        { code: "1.1.A.1", text: "Heredity and environmental factors interact to shape behavior and mental processes.", subs: [
          { code: "1.1.A.1.i", text: "Heredity refers to the genetic transmission of traits from biological parents to offspring — the \"nature\" side." },
          { code: "1.1.A.1.ii", text: "Environment refers to all external, experiential influences — the \"nurture\" side." }
        ] },
        { code: "1.1.A.2", text: "The evolutionary perspective explains behavior and mental processes in terms of natural selection: traits that improved survival and reproduction became more common." },
        { code: "1.1.A.3", text: "Twin, family, and adoption studies help researchers estimate the relative contributions of heredity and environment." }
      ]
    }
  ],
  bigIdea: "<p>The single biggest idea of this topic: it is never nature <em>versus</em> nurture — it is nature <em>and</em> nurture, constantly interacting. Genes set a range of possibilities; environment determines where in that range a person actually lands. A trait like anxiety or musical skill emerges from both a genetic predisposition and the experiences that switch that predisposition on or off.</p>" +
    "<p>The <b>evolutionary perspective</b> asks \"why might this behavior have helped ancestors survive and reproduce?\" Traits that increased reproductive success were naturally selected and passed on. Psychologists use <b>twin studies</b> (comparing identical vs. fraternal twins), <b>adoption studies</b> (comparing adopted children to their biological vs. adoptive families), and <b>family studies</b> to tease apart genetic and environmental influence.</p>",
  vocab: [
    { term: "Nature–nurture issue", def: "The longstanding question of how much heredity (nature) and experience (nurture) contribute to psychological traits — now understood as an interaction, not an either/or." },
    { term: "Heredity", def: "The genetic transmission of traits from biological parents to offspring." },
    { term: "Environment", def: "Every non-genetic influence, from prenatal nutrition to culture and learning." },
    { term: "Natural selection", def: "The evolutionary process by which inherited traits that boost survival and reproduction become more common in a population." },
    { term: "Evolutionary perspective", def: "Explaining behavior/mental processes in terms of their adaptive value shaped by natural selection." },
    { term: "Twin studies", def: "Research comparing identical (monozygotic) and fraternal (dizygotic) twins to estimate heritability." },
    { term: "Adoption studies", def: "Research comparing adoptees with their biological and adoptive relatives to separate genes from environment." }
  ],
  researchers: [
    { name: "Charles Darwin", contribution: "Proposed natural selection, the foundation of the evolutionary perspective in psychology." }
  ],
  examples: [
    "Two siblings both inherit a genetic tendency toward shyness. One is raised in a home that gently encourages social risk-taking and becomes reasonably outgoing; the other is rarely pushed and stays reserved. Same genes, different environments, different outcomes — an interaction, not one cause.",
    "Height is highly heritable, yet average heights rise across generations when childhood nutrition improves. The genes didn't change in a few decades — the environment did."
  ],
  mnemonic: { device: "Genes load the gun; environment pulls the trigger.", explain: "A memorable way to state gene–environment interaction: heredity creates a predisposition (loads), experience determines whether and how it is expressed (pulls)." },
  traps: [
    "Treating nature and nurture as opposing, separate causes. The exam rewards recognizing their interaction.",
    "Confusing the evolutionary perspective with 'behavior is fixed by genes.' It's about adaptive value, not determinism.",
    "Thinking identical twins raised apart being similar proves 'genes only.' Shared prenatal and some environmental factors still matter — it's evidence for heritability, not proof nurture is irrelevant.",
    "Assuming 'heritable' means 'unchangeable.' Heritable traits (like height) can still shift with environment."
  ],
  exclusions: [
    "Specific genetics terminology — genotype, phenotype, DNA, chromosomes, and dominant/recessive expression — is beyond the scope of the exam. You do not need to know these terms.",
    "You are not expected to know the biological details of natural selection beyond its role in shaping behavior."
  ]
};

window.APSYCH.notes["1.2"] = {
  topic: "1.2", unit: 1, title: "Overview of the Nervous System",
  los: [
    {
      code: "1.2.A", text: "Explain how the nervous system and its subdivisions influence behavior and mental processes.",
      eks: [
        { code: "1.2.A.1", text: "The nervous system has two main divisions: the central nervous system (CNS: brain and spinal cord) and the peripheral nervous system (PNS: everything else)." },
        { code: "1.2.A.2", text: "The PNS divides into the somatic (voluntary skeletal muscles) and autonomic (involuntary organs/glands) nervous systems; the autonomic further divides into sympathetic (arousing) and parasympathetic (calming)." },
        { code: "1.2.A.3", text: "The endocrine system uses hormones (e.g., released by the adrenal glands) to influence behavior more slowly and longer-lastingly than neural signals." }
      ]
    }
  ],
  bigIdea: "<p>Think of the nervous system as a branching tree. At the trunk is the <b>central nervous system (CNS)</b> — the brain and spinal cord, where information is processed and decisions are made. Branching out is the <b>peripheral nervous system (PNS)</b>, the wiring that connects the CNS to the rest of the body.</p>" +
    "<p>The PNS splits into the <b>somatic</b> system (controls voluntary movement of skeletal muscles) and the <b>autonomic</b> system (controls involuntary functions like heartbeat and digestion). The autonomic system has two opposing halves: the <b>sympathetic</b> nervous system revs you up for \"fight or flight,\" and the <b>parasympathetic</b> nervous system calms you back down (\"rest and digest\"). Working alongside the nervous system, the slower <b>endocrine system</b> sends hormones through the bloodstream — for example, adrenal glands releasing adrenaline during stress.</p>",
  vocab: [
    { term: "Central nervous system (CNS)", def: "The brain and spinal cord; the body's decision-making core." },
    { term: "Peripheral nervous system (PNS)", def: "All the nerves outside the CNS, linking it to the body." },
    { term: "Somatic nervous system", def: "PNS division controlling voluntary movements of skeletal muscles." },
    { term: "Autonomic nervous system", def: "PNS division controlling involuntary functions of internal organs and glands." },
    { term: "Sympathetic nervous system", def: "Arouses the body for action — 'fight or flight' (speeds heart, dilates pupils)." },
    { term: "Parasympathetic nervous system", def: "Calms the body — 'rest and digest' (slows heart, aids digestion)." },
    { term: "Endocrine system", def: "A slower communication network of glands that secrete hormones into the bloodstream." },
    { term: "Reflex arc", def: "A simple, automatic response pathway routed through the spinal cord without waiting for the brain." }
  ],
  researchers: [],
  examples: [
    "A car swerves toward you: your sympathetic nervous system floods you with adrenaline, your heart pounds, and you jump back. Minutes later, once safe, your parasympathetic system brings your heart rate down.",
    "Touching a hot stove and yanking your hand away before you consciously feel pain is a spinal reflex arc — the spinal cord handles it to save time."
  ],
  mnemonic: [
    { device: "Sympathetic = Stress; Parasympathetic = Peace.", explain: "Both the arousing system and 'stress' start with S; parasympathetic restores 'peace.'" },
    { device: "Somatic = Skeletal (voluntary).", explain: "Somatic and skeletal both start with S and both refer to muscles you control on purpose." }
  ],
  traps: [
    "Mixing up sympathetic and parasympathetic. Sympathetic accelerates; parasympathetic decelerates.",
    "Assuming the endocrine system is part of the nervous system. It's a separate, hormone-based system that interacts with it.",
    "Forgetting the somatic vs. autonomic split is within the PNS, not the CNS.",
    "Thinking hormones act as fast as neurotransmitters. Endocrine signaling is slower but longer-lasting."
  ],
  exclusions: [
    "Detailed anatomy of specific glands or hormone chemistry is beyond the scope; focus on the roles of each division."
  ]
};

window.APSYCH.notes["1.3"] = {
  topic: "1.3", unit: 1, title: "The Neuron and Neural Firing",
  los: [
    {
      code: "1.3.A", text: "Explain how neurons transmit information through the process of neural firing.",
      eks: [
        { code: "1.3.A.1", text: "A neuron receives signals at its dendrites, integrates them in the cell body (soma), and sends an impulse down the axon to the terminal buttons." },
        { code: "1.3.A.2", text: "The action potential is an all-or-none electrical impulse; a neuron fires fully or not at all once the threshold is reached." },
        { code: "1.3.A.3", text: "At the synapse, neurotransmitters cross the gap and bind to receptors on the next neuron; excess is cleared by reuptake." }
      ]
    },
    {
      code: "1.3.B", text: "Explain how neurotransmitters and other substances affect behavior and mental processes.",
      eks: [
        { code: "1.3.B.1", text: "Different neurotransmitters (e.g., dopamine, serotonin, acetylcholine, GABA, glutamate, endorphins) have distinct functions." },
        { code: "1.3.B.2", text: "Agonists mimic or increase a neurotransmitter's action; antagonists block it. Drugs can act as agonists or antagonists." }
      ]
    }
  ],
  bigIdea: "<p>A neuron is a tiny messenger. Signals come in through branchy <b>dendrites</b>, get summed in the <b>cell body</b>, and — if they cross a threshold — trigger an <b>action potential</b>: an electrical impulse that shoots down the <b>axon</b>. The key phrase is <b>all-or-none</b>: like a gun's trigger, the neuron either fires at full strength or not at all. A stronger stimulus makes a neuron fire <em>more often</em>, not more powerfully.</p>" +
    "<p>Where two neurons meet is the <b>synapse</b>, a microscopic gap. The impulse causes the sending neuron to release <b>neurotransmitters</b> that drift across and bind to <b>receptors</b> on the next neuron, either exciting or inhibiting it. Leftover neurotransmitter is reabsorbed by the sending neuron in a process called <b>reuptake</b>. Drugs work by imitating this system: <b>agonists</b> boost a neurotransmitter's effect; <b>antagonists</b> block it.</p>",
  vocab: [
    { term: "Dendrites", def: "Branch-like extensions that receive incoming messages from other neurons." },
    { term: "Axon", def: "The long fiber that carries the action potential away from the cell body toward other neurons." },
    { term: "Myelin sheath", def: "A fatty insulating layer around some axons that speeds neural transmission." },
    { term: "Action potential", def: "A brief all-or-none electrical charge that travels down an axon." },
    { term: "All-or-none principle", def: "A neuron either fires at full strength or not at all; intensity is coded by firing rate." },
    { term: "Threshold", def: "The level of stimulation required to trigger an action potential." },
    { term: "Synapse", def: "The junction (tiny gap) between a sending neuron's terminal and a receiving neuron." },
    { term: "Neurotransmitters", def: "Chemical messengers that cross the synapse to influence the next neuron." },
    { term: "Reuptake", def: "The sending neuron's reabsorption of excess neurotransmitter from the synapse." },
    { term: "Agonist / Antagonist", def: "An agonist mimics or increases a neurotransmitter's effect; an antagonist blocks it." },
    { term: "Endorphins", def: "Natural, opioid-like neurotransmitters that reduce pain and can produce pleasure." }
  ],
  researchers: [],
  examples: [
    "A dimmer switch is the wrong metaphor for a single neuron; a machine gun is closer. A painful pinch versus a gentle touch doesn't make one neuron fire 'harder' — it makes pain neurons fire faster and recruits more of them.",
    "Many SSRIs used for depression block the reuptake of serotonin, leaving more of it in the synapse — an example of a drug acting on the neurotransmitter system."
  ],
  mnemonic: [
    { device: "\"All-or-none\" = light switch, not dimmer.", explain: "The neuron is on or off; it can't fire halfway." },
    { device: "Dopamine → 'Do' motivation/reward.", explain: "Dopamine is central to reward, motivation, and movement." }
  ],
  traps: [
    "Believing a stronger stimulus makes a neuron fire more strongly. It fires more frequently — strength is fixed (all-or-none).",
    "Confusing reuptake (reabsorption by the sending neuron) with the receptors on the receiving neuron.",
    "Mixing up agonist (mimics/boosts) and antagonist (blocks).",
    "Thinking myelin generates the signal. Myelin only insulates and speeds it; damage (as in multiple sclerosis) slows transmission.",
    "Assuming neurotransmitters are all 'exciting.' Some (like GABA) are inhibitory, calming the next neuron."
  ],
  exclusions: [
    "You do not need the exact ion movements (sodium/potassium) or millivolt values of the action potential; focus on the all-or-none concept and the synaptic process."
  ]
};

window.APSYCH.notes["1.4"] = {
  topic: "1.4", unit: 1, title: "The Brain",
  los: [
    {
      code: "1.4.A", text: "Explain how the structures and functions of the brain influence behavior and mental processes.",
      eks: [
        { code: "1.4.A.1", text: "Different brain regions have specialized roles (e.g., the hippocampus in forming new memories, the amygdala in emotion, the cerebellum in balance/coordination)." },
        { code: "1.4.A.2", text: "The cerebral cortex includes lobes (frontal, parietal, occipital, temporal) with specialized functions, plus the motor and somatosensory strips." },
        { code: "1.4.A.3", text: "Neuroplasticity allows the brain to reorganize by forming new connections, especially after learning or injury." },
        { code: "1.4.A.4", text: "Tools such as EEG, fMRI, and lesion studies let researchers link brain activity to behavior." }
      ]
    }
  ],
  bigIdea: "<p>The brain is not one blob but a team of specialized regions. Deep, older structures handle survival: the <b>brainstem/medulla</b> keeps you breathing, the <b>cerebellum</b> coordinates balance and smooth movement, the <b>amygdala</b> processes fear and emotion, the <b>hippocampus</b> forms new memories, the <b>hypothalamus</b> regulates hunger, thirst, body temperature, and the endocrine system, and the <b>thalamus</b> is the sensory relay station (all senses but smell route through it).</p>" +
    "<p>Wrapped over the top is the wrinkled <b>cerebral cortex</b>, divided into four lobes: the <b>frontal</b> lobe (planning, judgment, movement, and speech production via Broca's area), the <b>parietal</b> lobe (touch/body sensation via the somatosensory cortex), the <b>occipital</b> lobe (vision), and the <b>temporal</b> lobe (hearing and language comprehension via Wernicke's area). Thanks to <b>neuroplasticity</b>, the brain rewires itself with experience and can partially recover after damage. Researchers study all this with <b>EEG</b> (electrical activity), <b>fMRI</b> (blood-flow/activity), and <b>lesion</b> studies.</p>",
  vocab: [
    { term: "Cerebral cortex", def: "The wrinkled outer layer of the brain responsible for higher-order thinking." },
    { term: "Frontal lobe", def: "Planning, decision-making, voluntary movement, and speech production (Broca's area)." },
    { term: "Parietal lobe", def: "Processes touch and body position via the somatosensory cortex." },
    { term: "Occipital lobe", def: "Processes visual information." },
    { term: "Temporal lobe", def: "Processes hearing and, via Wernicke's area, language comprehension." },
    { term: "Hippocampus", def: "Forms and consolidates new explicit (conscious) memories." },
    { term: "Amygdala", def: "Two clusters central to emotion, especially fear and aggression." },
    { term: "Hypothalamus", def: "Regulates hunger, thirst, temperature, and links to the endocrine system." },
    { term: "Thalamus", def: "The brain's sensory relay station (routes all senses except smell)." },
    { term: "Cerebellum", def: "'Little brain' at the rear; coordinates balance, movement, and some procedural learning." },
    { term: "Corpus callosum", def: "The band of fibers connecting the two hemispheres, allowing them to communicate." },
    { term: "Neuroplasticity", def: "The brain's ability to change and reorganize by forming new neural connections." }
  ],
  researchers: [
    { name: "Paul Broca", contribution: "Linked an area of the left frontal lobe (Broca's area) to speech production." },
    { name: "Carl Wernicke", contribution: "Linked an area of the temporal lobe (Wernicke's area) to language comprehension." }
  ],
  examples: [
    "A patient with hippocampal damage can still recall childhood memories but cannot form new ones — showing the hippocampus builds new memories rather than storing old ones.",
    "After a stroke damages a movement area, a patient regains some function as neuroplasticity reroutes tasks to healthy tissue."
  ],
  mnemonic: [
    { device: "Broca → 'boca' (mouth) → speech production.", explain: "Broca's area lets you produce speech; damage causes halting, effortful speech." },
    { device: "Hippocampus → 'hippo on campus' making NEW memories.", explain: "It forms new explicit memories; picture a hippo starting at a new campus." },
    { device: "Four lobes: 'F-POT' — Frontal, Parietal, Occipital, Temporal.", explain: "A quick way to recall all four cortical lobes." }
  ],
  traps: [
    "Swapping Broca's (production) and Wernicke's (comprehension) areas.",
    "Saying the hippocampus 'stores' long-term memories. It forms and consolidates new ones; old memories live in the cortex.",
    "Confusing hypothalamus (regulates drives/endocrine) with thalamus (sensory relay). Note: smell bypasses the thalamus.",
    "Assuming the amygdala handles all emotion. It's most tied to fear and threat detection.",
    "Thinking neuroplasticity only happens in childhood. It continues throughout life, though it's greater when young."
  ],
  exclusions: [
    "Detailed neuroanatomy beyond the listed structures/functions is not required. You won't need to label a full brain diagram from memory."
  ]
};

window.APSYCH.notes["1.5"] = {
  topic: "1.5", unit: 1, title: "Sleep",
  los: [
    {
      code: "1.5.A", text: "Explain how sleep and the sleep cycle relate to consciousness, behavior, and mental processes.",
      eks: [
        { code: "1.5.A.1", text: "Sleep follows a cycle of stages (NREM stages and REM) roughly every 90 minutes, tracked by brain-wave patterns." },
        { code: "1.5.A.2", text: "The circadian rhythm is the body's ~24-hour biological clock governing the sleep–wake cycle." },
        { code: "1.5.A.3", text: "Sleep supports memory consolidation, restoration, and healthy functioning; deprivation impairs them." },
        { code: "1.5.A.4", text: "Theories of dreaming include information-processing/memory consolidation and activation-synthesis." }
      ]
    }
  ],
  bigIdea: "<p>Sleep isn't 'off' — it's an active, cyclical process. About every 90 minutes you pass through stages: light <b>NREM-1</b> (hypnagogic sensations), <b>NREM-2</b> (sleep spindles), deep slow-wave <b>NREM-3</b> (bodily restoration, hardest to wake from), and <b>REM</b> sleep, when the brain is highly active, most vivid dreaming occurs, and the body is essentially paralyzed (REM is called 'paradoxical sleep' for this reason).</p>" +
    "<p>Governing the whole thing is your <b>circadian rhythm</b>, a roughly 24-hour internal clock influenced by light and melatonin. Sleep matters because it supports <b>memory consolidation</b> (moving the day's learning into durable storage) and physical restoration. <b>Sleep deprivation</b> harms attention, mood, and immune function. Why we dream is debated: the <b>information-processing</b> theory says dreams help consolidate memories, while the <b>activation-synthesis</b> theory says dreams are the cortex's attempt to make sense of random neural activity during REM.</p>",
  vocab: [
    { term: "Circadian rhythm", def: "The body's roughly 24-hour biological clock regulating the sleep–wake cycle and alertness." },
    { term: "REM sleep", def: "Rapid-eye-movement sleep: vivid dreams, high brain activity, and muscle paralysis ('paradoxical sleep')." },
    { term: "NREM sleep", def: "Non-REM stages 1–3, progressing from light sleep to deep slow-wave sleep." },
    { term: "Sleep spindles", def: "Bursts of brain activity in NREM-2 associated with memory consolidation." },
    { term: "Memory consolidation", def: "The strengthening and stabilizing of memories, supported heavily by sleep." },
    { term: "Activation-synthesis theory", def: "The idea that dreams are the brain's interpretation of random neural activity during REM." },
    { term: "Insomnia", def: "Persistent difficulty falling or staying asleep." },
    { term: "Narcolepsy", def: "A disorder marked by sudden, uncontrollable sleep attacks, sometimes directly into REM." }
  ],
  researchers: [],
  examples: [
    "Pulling an all-nighter before a test backfires partly because sleep is when the brain consolidates what you studied — you lose the very process that would have locked it in.",
    "Jet lag happens because your circadian rhythm is still set to your old time zone; bright morning light helps reset it."
  ],
  mnemonic: [
    { device: "REM = 'Rapid Eye Movement' = Real vivid dreams + Rigid (paralyzed) body.", explain: "REM pairs an active dreaming brain with a still body." },
    { device: "Circadian ≈ 'circa-dian' = about a day.", explain: "'Circa' (about) + 'dies' (day) = the ~24-hour clock." }
  ],
  traps: [
    "Calling REM 'deep sleep.' Deep sleep is NREM-3 (slow-wave); REM is highly active despite being hard to categorize.",
    "Thinking dreaming only happens in REM. Some dreaming occurs in NREM, but the most vivid dreams are in REM.",
    "Confusing the circadian rhythm (24-hour cycle) with the ~90-minute sleep-stage cycle.",
    "Assuming sleep is passive rest. It actively consolidates memory and restores the body.",
    "Mixing up activation-synthesis (random activity interpreted) with information-processing (memory consolidation) theories of dreams."
  ],
  exclusions: [
    "You are not expected to memorize exact EEG wave names (alpha, beta, delta, theta) in fine detail, though understanding that stages differ in brain-wave patterns is useful."
  ]
};

window.APSYCH.notes["1.6"] = {
  topic: "1.6", unit: 1, title: "Sensation",
  los: [
    {
      code: "1.6.A", text: "Explain how sensory systems detect and transmit information as sensation.",
      eks: [
        { code: "1.6.A.1", text: "Transduction converts physical stimulus energy (light, sound, chemicals) into neural signals the brain can use." },
        { code: "1.6.A.2", text: "Absolute threshold is the minimum stimulation detectable 50% of the time; the difference threshold (JND) is the smallest detectable change." },
        { code: "1.6.A.3", text: "Sensory adaptation is reduced sensitivity to an unchanging stimulus over time." }
      ]
    },
    {
      code: "1.6.B", text: "Explain how principles of sensation apply to vision, hearing, and the other senses.",
      eks: [
        { code: "1.6.B.1", text: "In vision, light is transduced by rods and cones in the retina; in hearing, sound waves are transduced by hair cells in the cochlea." },
        { code: "1.6.B.2", text: "Other senses include taste, smell, touch, the vestibular sense (balance), and kinesthesis (body position)." }
      ]
    }
  ],
  bigIdea: "<p><b>Sensation</b> is the raw detection of stimuli by your sensory receptors; <b>perception</b> (Topic 2.1) is how the brain organizes and interprets that raw data. The crucial shared process is <b>transduction</b>: converting physical energy — light waves, sound waves, chemical molecules — into the electrochemical language of neurons.</p>" +
    "<p>Psychophysics gives us thresholds. The <b>absolute threshold</b> is the faintest stimulus you can detect half the time (like the softest sound you can just barely hear). The <b>difference threshold</b> (just-noticeable difference, JND) is the smallest change you can notice; <b>Weber's law</b> says this change must be a constant <em>proportion</em> of the original. Over time, <b>sensory adaptation</b> kicks in — you stop noticing an unchanging stimulus (you 'forget' you're wearing a watch). In vision, <b>rods</b> (dim light, black-and-white, peripheral) and <b>cones</b> (color and detail, bright light) in the <b>retina</b> transduce light; in hearing, <b>hair cells</b> in the <b>cochlea</b> transduce sound.</p>",
  vocab: [
    { term: "Sensation", def: "The process of detecting physical stimuli through sensory receptors." },
    { term: "Transduction", def: "Converting one form of energy (light, sound, chemical) into neural impulses." },
    { term: "Absolute threshold", def: "The minimum stimulation needed to detect a stimulus 50% of the time." },
    { term: "Difference threshold (JND)", def: "The smallest difference between two stimuli detectable 50% of the time." },
    { term: "Weber's law", def: "The JND is a constant proportion (not a constant amount) of the original stimulus." },
    { term: "Sensory adaptation", def: "Reduced sensitivity to a constant, unchanging stimulus over time." },
    { term: "Signal detection theory", def: "Detecting a faint stimulus depends on both its strength and the observer's expectations/state." },
    { term: "Retina / Rods / Cones", def: "The retina's light-sensitive layer; rods detect dim light and are colorblind; cones detect color and detail." },
    { term: "Cochlea", def: "The coiled, fluid-filled inner-ear structure where sound is transduced by hair cells." },
    { term: "Vestibular sense / Kinesthesis", def: "Vestibular sense = balance and head position; kinesthesis = the position/movement of body parts." }
  ],
  researchers: [
    { name: "Ernst Weber", contribution: "Formulated Weber's law: the just-noticeable difference is a constant proportion of the original stimulus." }
  ],
  examples: [
    "Adding one candle to a room lit by one candle is obvious; adding one candle to a room lit by a hundred is not — because the JND depends on a proportion of the original (Weber's law).",
    "Walking into a bakery smells amazing, but after a few minutes you barely notice it — sensory adaptation to the constant odor."
  ],
  mnemonic: [
    { device: "Transduction = 'Translate' energy into neural code.", explain: "Both start with 'trans-'; transduction translates physical energy into signals." },
    { device: "Rods for Rnight; Cones for Color.", explain: "Rods work in dim light (night, no color); cones detect color and detail in bright light." }
  ],
  traps: [
    "Confusing sensation (raw detection) with perception (interpretation). This is the most common trap heading into Unit 2.",
    "Thinking the absolute threshold is 100% detection. It's the level detected 50% of the time.",
    "Stating the JND is a constant amount. Weber's law says it's a constant proportion.",
    "Swapping rods and cones — rods = dim light/no color; cones = color/detail.",
    "Confusing the vestibular sense (balance) with kinesthesis (limb position)."
  ],
  exclusions: [
    "You do not need fine anatomical detail of the eye or ear beyond the receptors and structures that perform transduction. Specific theories of color vision and pitch may appear in perception contexts but memorizing full anatomy is not required."
  ]
};
