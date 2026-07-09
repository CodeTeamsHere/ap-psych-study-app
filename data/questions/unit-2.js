/*
 * data/questions/unit-2.js — Original practice questions for Unit 2: Cognition.
 * Schema per question:
 *   { id, topic, unit, practice(1-3), difficulty('Easy'|'Moderate'|'Difficult'),
 *     stem, stimulus(null OR table/bars/scatter object),
 *     choices:[{text, correct?:true, why}]  // exactly one correct; every choice has a 'why',
 *     keyConcept }
 * All questions are original, written for this site (not copied from any question bank).
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.questions = window.APSYCH.questions || {};

window.APSYCH.questions["2.1"] = [
  {
    id: "2.1-1", topic: "2.1", unit: 2, practice: 1, difficulty: "Easy",
    stem: "Walking into a dark room, at first Jamal cannot identify a shape, but once a friend says 'that's a coat rack,' he instantly perceives it as one. His shift to using that knowledge to interpret the shape best illustrates",
    stimulus: null,
    choices: [
      { text: "bottom-up processing.", why: "Bottom-up processing builds a perception from raw features alone; here he used prior knowledge to interpret it." },
      { text: "sensory adaptation.", why: "Sensory adaptation is reduced sensitivity to a constant stimulus, not a knowledge-based interpretation." },
      { text: "top-down processing.", correct: true, why: "Using prior knowledge and expectations (the label) to interpret ambiguous sensory input is top-down processing." },
      { text: "transduction.", why: "Transduction converts physical energy into neural signals; it does not involve interpreting meaning." }
    ],
    keyConcept: "Top-down processing"
  },
  {
    id: "2.1-2", topic: "2.1", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Before a taste test, participants told a smoothie is 'kale and spinach' rate it as more bitter than participants told the same smoothie is 'mango and banana.' This difference best illustrates",
    stimulus: null,
    choices: [
      { text: "bottom-up processing driven only by taste receptors.", why: "Identical stimuli producing different experiences shows expectation shaped perception, not pure receptor data." },
      { text: "a perceptual set created by expectations.", correct: true, why: "The label set a predisposition to perceive the flavor a certain way — a perceptual set." },
      { text: "sensory adaptation to the flavor.", why: "Adaptation is fading sensitivity to a constant stimulus over time, not an expectation effect." },
      { text: "the absolute threshold for taste.", why: "The absolute threshold is the minimum detectable level, unrelated to expectation-driven interpretation." }
    ],
    keyConcept: "Perceptual set"
  },
  {
    id: "2.1-3", topic: "2.1", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "At a loud party Priya is absorbed in her friend's story, yet she instantly turns when someone across the room says her name. This best demonstrates",
    stimulus: null,
    choices: [
      { text: "selective attention and the cocktail party effect.", correct: true, why: "She filtered out most voices but still detected a personally significant stimulus (her name)." },
      { text: "inattentional blindness.", why: "Inattentional blindness is failing to notice something; she did notice her name." },
      { text: "change blindness.", why: "Change blindness is missing a change in a scene, not catching one's name among many voices." },
      { text: "sensory adaptation to noise.", why: "Adaptation is reduced sensitivity to constant stimulation, not selectively detecting one's name." }
    ],
    keyConcept: "Selective attention / cocktail party effect"
  },
  {
    id: "2.1-4", topic: "2.1", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Students counting how many times players pass a ball fail to notice a person in a costume stroll across the screen. Failing to see a visible event because attention was elsewhere is",
    stimulus: null,
    choices: [
      { text: "change blindness.", why: "Change blindness is failing to notice a change between views, not missing a present object under attentional load." },
      { text: "sensory adaptation.", why: "Adaptation is declining sensitivity to an unchanging stimulus, not an attention failure." },
      { text: "a perceptual constancy.", why: "Constancy is perceiving objects as stable; it is unrelated to missing the costumed figure." },
      { text: "inattentional blindness.", correct: true, why: "They failed to perceive a fully visible stimulus because attention was focused on counting passes." }
    ],
    keyConcept: "Inattentional blindness"
  },
  {
    id: "2.1-5", topic: "2.1", unit: 2, practice: 1, difficulty: "Easy",
    stem: "A logo made of a few disconnected dashes is instantly seen as a complete circle. This illustrates the Gestalt principle of",
    stimulus: null,
    choices: [
      { text: "proximity.", why: "Proximity groups items that are near one another; it does not fill gaps to complete a form." },
      { text: "figure-ground.", why: "Figure-ground separates an object from its background, not gap-filling." },
      { text: "similarity.", why: "Similarity groups items that look alike, not completing an incomplete figure." },
      { text: "closure.", correct: true, why: "Closure is the tendency to fill in gaps to perceive a complete, whole object." }
    ],
    keyConcept: "Gestalt closure"
  },
  {
    id: "2.1-6", topic: "2.1", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Looking at printed text, you effortlessly see dark letters standing out against the white page rather than white shapes on a dark field. Organizing a scene into object and background is",
    stimulus: null,
    choices: [
      { text: "closure.", why: "Closure fills gaps in a form; this is about separating an object from its background." },
      { text: "the phi phenomenon.", why: "The phi phenomenon is illusory motion, not object/background separation." },
      { text: "figure-ground.", correct: true, why: "Figure-ground is perceiving a scene as an object (figure) distinct from its surroundings (ground)." },
      { text: "retinal disparity.", why: "Retinal disparity is a binocular depth cue, unrelated to figure-ground organization." }
    ],
    keyConcept: "Gestalt figure-ground"
  },
  {
    id: "2.1-7", topic: "2.1", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A 3-D movie creates depth by showing each eye a slightly different image, which the brain compares to judge distance. This depth cue is",
    stimulus: null,
    choices: [
      { text: "retinal disparity, a binocular cue.", correct: true, why: "Comparing the two eyes' slightly different images is retinal disparity, which requires both eyes." },
      { text: "interposition, a monocular cue.", why: "Interposition (overlap) needs only one eye and does not involve comparing two images." },
      { text: "linear perspective, a monocular cue.", why: "Linear perspective (converging lines) is monocular, not based on a two-eye comparison." },
      { text: "accommodation of the lens.", why: "Accommodation is the lens changing shape to focus, not the two-eye image comparison described." }
    ],
    keyConcept: "Retinal disparity (binocular cue)"
  },
  {
    id: "2.1-8", topic: "2.1", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Standing on a straight road, you notice its parallel edges appear to converge toward a point in the distance, giving a sense of depth. This still works with one eye closed, so it relies on",
    stimulus: null,
    choices: [
      { text: "convergence, a binocular cue.", why: "Convergence uses both eyes turning inward; it fails with one eye closed." },
      { text: "retinal disparity.", why: "Retinal disparity needs two eyes to compare images, so it cannot work with one eye." },
      { text: "the vestibular sense.", why: "The vestibular sense tracks balance and head position, not visual depth from converging lines." },
      { text: "linear perspective, a monocular cue.", correct: true, why: "Converging parallel lines is linear perspective, a monocular cue that needs only one eye." }
    ],
    keyConcept: "Monocular cue: linear perspective"
  },
  {
    id: "2.1-9", topic: "2.1", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "As a friend walks away, the image she casts on your retina shrinks, yet you perceive her as staying the same height rather than shrinking. This is",
    stimulus: null,
    choices: [
      { text: "retinal disparity.", why: "Retinal disparity is a depth cue from comparing two eyes' images, not the perception of stable size." },
      { text: "the phi phenomenon.", why: "The phi phenomenon is apparent motion from sequential images, unrelated to size perception." },
      { text: "sensory adaptation.", why: "Adaptation is fading sensitivity to a constant stimulus, not stable size perception." },
      { text: "size constancy.", correct: true, why: "Perceiving an object as unchanged in size despite a shrinking retinal image is size constancy." }
    ],
    keyConcept: "Size constancy"
  },
  {
    id: "2.1-10", topic: "2.1", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants to test whether a label creates a perceptual set for how an ambiguous drawing is interpreted. Which design best isolates the effect of the label?",
    stimulus: null,
    choices: [
      { text: "Show every participant the drawing with no label and record their answers.", why: "With no label there is no manipulation, so the effect of labels cannot be measured." },
      { text: "Let participants pick which label they prefer before viewing.", why: "Self-selected labels confound the manipulation and prevent random assignment." },
      { text: "Randomly assign participants to see the same drawing with one of two different labels, then compare interpretations.", correct: true, why: "Randomly varying only the label while holding the image constant isolates the label's causal effect." },
      { text: "Interview participants about past experiences with similar drawings.", why: "A retrospective interview is correlational and cannot isolate the label's causal effect." }
    ],
    keyConcept: "Experimental design: isolating a variable"
  },
  {
    id: "2.1-11", topic: "2.1", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "To study change blindness, researchers briefly interrupt a scene, alter one object, and record whether viewers detect it. In this study, the dependent variable is",
    stimulus: null,
    choices: [
      { text: "whether participants notice the change.", correct: true, why: "The measured outcome — detection of the change — is the dependent variable." },
      { text: "the length of the interruption set by the experimenter.", why: "The interruption is manipulated by the researcher, making it an independent variable, not the outcome." },
      { text: "the participants' ages.", why: "Age is a participant characteristic here, not the measured outcome of interest." },
      { text: "the number of objects the researcher places in the scene.", why: "That is a controlled feature of the stimulus, not the measured outcome." }
    ],
    keyConcept: "Identifying the dependent variable"
  },
  {
    id: "2.1-12", topic: "2.1", unit: 2, practice: 3, difficulty: "Difficult",
    stem: "The graph shows the percentage of viewers who noticed an unexpected object while performing an easy versus a hard counting task. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Viewers noticing an unexpected object, by task difficulty",
      categories: ["Easy counting task", "Hard counting task"],
      values: [78, 32],
      yLabel: "% noticing unexpected object", max: 100
    },
    choices: [
      { text: "The unexpected object was invisible during the hard task.", why: "32% still noticed it, so it was visible, not invisible." },
      { text: "A more demanding attention task increased inattentional blindness.", correct: true, why: "Fewer viewers noticed the object during the hard task (32% vs 78%), consistent with greater inattentional blindness under higher attentional load." },
      { text: "Task difficulty had no effect on noticing the object.", why: "The percentages differ substantially (78% vs 32%), so difficulty did have an effect." },
      { text: "Everyone noticed the object regardless of task.", why: "Only some viewers noticed it, especially in the hard condition, so 'everyone' is false." }
    ],
    keyConcept: "Interpreting inattentional-blindness data"
  }
];

window.APSYCH.questions["2.2"] = [
  {
    id: "2.2-1", topic: "2.2", unit: 2, practice: 1, difficulty: "Easy",
    stem: "Asked to picture a 'bird,' most people imagine something like a robin rather than a penguin or ostrich. The robin functions as a",
    stimulus: null,
    choices: [
      { text: "prototype of the concept 'bird.'", correct: true, why: "A prototype is the most typical, best example of a concept, used as a mental benchmark." },
      { text: "an algorithm for identifying birds.", why: "An algorithm is a step-by-step procedure, not a typical example." },
      { text: "a heuristic bias.", why: "A heuristic is a shortcut strategy, not a mental image of a typical category member." },
      { text: "a mental set.", why: "A mental set is a tendency to reuse past strategies, not a category exemplar." }
    ],
    keyConcept: "Prototype"
  },
  {
    id: "2.2-2", topic: "2.2", unit: 2, practice: 1, difficulty: "Easy",
    stem: "To find a word in a dictionary, Lena checks every single page in order from the first until she finds it. She is using",
    stimulus: null,
    choices: [
      { text: "a heuristic.", why: "A heuristic is a shortcut; checking every page exhaustively is not a shortcut." },
      { text: "insight.", why: "Insight is a sudden realization of a solution, not a methodical page-by-page search." },
      { text: "an algorithm.", correct: true, why: "An exhaustive, step-by-step procedure guaranteed to find the answer is an algorithm." },
      { text: "the availability heuristic.", why: "That is judging by ease of recall, not conducting a systematic search." }
    ],
    keyConcept: "Algorithm vs. heuristic"
  },
  {
    id: "2.2-3", topic: "2.2", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Told that 'Marcus is thin, wears glasses, and loves poetry,' Dana guesses he is a literature professor rather than a truck driver, ignoring that there are vastly more truck drivers. Dana relied on",
    stimulus: null,
    choices: [
      { text: "the availability heuristic.", why: "Availability is about ease of recall, not matching a description to a stereotype." },
      { text: "the representativeness heuristic.", correct: true, why: "Judging by resemblance to a stereotype while ignoring base rates is the representativeness heuristic." },
      { text: "an algorithm.", why: "An algorithm is a systematic, guaranteed method, not a snap stereotype judgment." },
      { text: "functional fixedness.", why: "Functional fixedness concerns the uses of objects, unrelated to category judgments." }
    ],
    keyConcept: "Representativeness heuristic (base-rate neglect)"
  },
  {
    id: "2.2-4", topic: "2.2", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "After watching several dramatic news reports about shark attacks, Theo believes they are far more common than they are and refuses to swim. His overestimate reflects",
    stimulus: null,
    choices: [
      { text: "the representativeness heuristic.", why: "Representativeness matches a case to a prototype; here the issue is vivid examples coming easily to mind." },
      { text: "the gambler's fallacy.", why: "The gambler's fallacy is expecting outcomes to 'even out,' not overestimating from memorable events." },
      { text: "the availability heuristic.", correct: true, why: "Estimating likelihood by how readily vivid examples come to mind is the availability heuristic." },
      { text: "the sunk-cost fallacy.", why: "Sunk cost concerns past investment, not frequency estimates from memorable events." }
    ],
    keyConcept: "Availability heuristic"
  },
  {
    id: "2.2-5", topic: "2.2", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Needing to pound in a nail, Sofia searches for a hammer and never realizes the heavy wrench on the table would work just fine. Her difficulty best illustrates",
    stimulus: null,
    choices: [
      { text: "a mental set.", why: "A mental set is over-relying on a past problem-solving strategy; this is specifically about an object's use." },
      { text: "confirmation bias.", why: "Confirmation bias is seeking confirming evidence, unrelated to an object's function." },
      { text: "the framing effect.", why: "Framing concerns how choices are worded, not seeing alternative uses of an object." },
      { text: "functional fixedness.", correct: true, why: "Failing to see the wrench as usable for anything but its normal purpose is functional fixedness." }
    ],
    keyConcept: "Functional fixedness"
  },
  {
    id: "2.2-6", topic: "2.2", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Having solved earlier puzzles with a three-step formula, Ben keeps applying that same formula to a new puzzle that actually needs a simpler approach, and he stays stuck. This illustrates",
    stimulus: null,
    choices: [
      { text: "a mental set.", correct: true, why: "Persisting with a previously successful strategy when it no longer fits is a mental set." },
      { text: "functional fixedness.", why: "Functional fixedness is about the uses of objects, not reusing a solution strategy." },
      { text: "the availability heuristic.", why: "That is estimating frequency by ease of recall, not sticking with an old method." },
      { text: "divergent thinking.", why: "Divergent thinking generates many new options — the opposite of rigidly reusing one." }
    ],
    keyConcept: "Mental set"
  },
  {
    id: "2.2-7", topic: "2.2", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A surgeon who tells patients a procedure has a '90% survival rate' gets more consent than one who says it has a '10% death rate,' even though the odds are identical. This reflects",
    stimulus: null,
    choices: [
      { text: "the gambler's fallacy.", why: "The gambler's fallacy is about expecting outcomes to balance out, not the wording of odds." },
      { text: "belief perseverance.", why: "Belief perseverance is clinging to a belief after it is discredited, not being swayed by presentation." },
      { text: "the framing effect.", correct: true, why: "Identical information presented differently (survival vs. death) changed the decision — the framing effect." },
      { text: "the representativeness heuristic.", why: "Representativeness matches a case to a prototype, not the wording of identical odds." }
    ],
    keyConcept: "Framing effect"
  },
  {
    id: "2.2-8", topic: "2.2", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "After a fair coin lands heads five times in a row, Mara is certain the next flip is 'due' to be tails and bets heavily on it. Her reasoning reflects",
    stimulus: null,
    choices: [
      { text: "the availability heuristic.", why: "Availability is about ease of recall, not the belief that outcomes must even out." },
      { text: "functional fixedness.", why: "Functional fixedness concerns object uses, unrelated to probability judgments." },
      { text: "the sunk-cost fallacy.", why: "Sunk cost concerns prior investment, not predicting the next independent event." },
      { text: "the gambler's fallacy.", correct: true, why: "Believing an independent random event is 'due' based on prior outcomes is the gambler's fallacy." }
    ],
    keyConcept: "Gambler's fallacy"
  },
  {
    id: "2.2-9", topic: "2.2", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "Two hours into a movie he finds boring, Raj refuses to leave because he 'already paid for the ticket and sat through this much.' His decision to stay best illustrates",
    stimulus: null,
    choices: [
      { text: "the representativeness heuristic.", why: "Representativeness is a stereotype-matching judgment, not persisting due to past investment." },
      { text: "confirmation bias.", why: "Confirmation bias is seeking confirming evidence, not honoring an unrecoverable cost." },
      { text: "the sunk-cost fallacy.", correct: true, why: "Continuing because of already-spent, unrecoverable resources rather than future value is the sunk-cost fallacy." },
      { text: "the framing effect.", why: "Framing is about the wording of options, not sticking with a losing investment." }
    ],
    keyConcept: "Sunk-cost fallacy"
  },
  {
    id: "2.2-10", topic: "2.2", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "A researcher wants to demonstrate that people neglect base rates when using the representativeness heuristic. Which manipulation would best show this?",
    stimulus: null,
    choices: [
      { text: "Give a stereotype-matching description of a person drawn from a group that is mostly one occupation, and see whether participants ignore the group proportions.", correct: true, why: "Pitting a matching description against known base rates reveals whether participants neglect the base rate." },
      { text: "Ask participants to solve long-division problems under time pressure.", why: "Arithmetic under time pressure does not test base-rate neglect in category judgments." },
      { text: "Measure participants' reaction times to flashing lights.", why: "Reaction time to lights is unrelated to judgments about base rates." },
      { text: "Have participants rate how vivid various news stories feel.", why: "Vividness ratings tap the availability heuristic, not base-rate neglect." }
    ],
    keyConcept: "Operationalizing base-rate neglect"
  },
  {
    id: "2.2-11", topic: "2.2", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "To measure divergent thinking, a psychologist should ask participants to",
    stimulus: null,
    choices: [
      { text: "solve a math problem that has exactly one correct answer.", why: "A single-answer problem measures convergent thinking, not divergent thinking." },
      { text: "list as many different uses as they can for a common brick.", correct: true, why: "Generating many varied possibilities operationalizes divergent thinking." },
      { text: "recall a memorized list of vocabulary words.", why: "Recall measures memory, not the generation of novel ideas." },
      { text: "choose the single best answer from four options.", why: "Selecting one best option is convergent thinking, the opposite of divergent." }
    ],
    keyConcept: "Operationalizing divergent thinking"
  },
  {
    id: "2.2-12", topic: "2.2", unit: 2, practice: 3, difficulty: "Difficult",
    stem: "Participants were randomly given identical survival statistics for a surgery, worded two different ways. Based on the graph, which statement is best supported?",
    stimulus: {
      type: "bars",
      caption: "Consent to an identical surgery under two framings",
      categories: ["Gain frame (90% survive)", "Loss frame (10% die)"],
      values: [82, 54],
      yLabel: "% who chose the surgery", max: 100
    },
    choices: [
      { text: "Wording the outcome as a gain rather than a loss increased willingness to choose the surgery.", correct: true, why: "82% consented under the gain frame vs 54% under the loss frame, demonstrating the framing effect." },
      { text: "The surgery was objectively safer in the gain-frame condition.", why: "The statistics were identical; only the wording differed, so the surgery was not actually safer." },
      { text: "Framing had no measurable effect on the decision.", why: "The two bars differ by 28 percentage points, indicating a clear effect." },
      { text: "Participants in the loss frame all refused the surgery.", why: "54% still chose it, so 'all refused' is false." }
    ],
    keyConcept: "Interpreting framing-effect data"
  }
];

window.APSYCH.questions["2.3"] = [
  {
    id: "2.3-1", topic: "2.3", unit: 2, practice: 1, difficulty: "Easy",
    stem: "A student reads a definition, holds it in mind over the week, and writes it on a test. Getting the definition into memory in the first place is called",
    stimulus: null,
    choices: [
      { text: "encoding.", correct: true, why: "Encoding is the initial process of getting information into the memory system." },
      { text: "storage.", why: "Storage is retaining information over time, not the initial intake." },
      { text: "retrieval.", why: "Retrieval is getting information back out, such as on the test." },
      { text: "consolidation.", why: "Consolidation stabilizes already-stored memories; it is not the initial intake process." }
    ],
    keyConcept: "Encoding vs. storage vs. retrieval"
  },
  {
    id: "2.3-2", topic: "2.3", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "According to the Atkinson-Shiffrin three-box model, rehearsed information moves in which order?",
    stimulus: null,
    choices: [
      { text: "Long-term memory to short-term memory to sensory memory.", why: "This reverses the flow; information enters through sensory memory first." },
      { text: "Sensory memory to short-term memory to long-term memory.", correct: true, why: "The three-box model flows from brief sensory memory to short-term memory to long-term memory with rehearsal." },
      { text: "Short-term memory to sensory memory to long-term memory.", why: "Sensory memory precedes short-term memory, so this order is wrong." },
      { text: "Sensory memory to long-term memory to short-term memory.", why: "Information passes through short-term memory before reaching long-term storage." }
    ],
    keyConcept: "Atkinson-Shiffrin three-box model"
  },
  {
    id: "2.3-3", topic: "2.3", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "While mentally rearranging furniture in a room she is picturing, Aisha relies most on which component of working memory?",
    stimulus: null,
    choices: [
      { text: "The phonological loop.", why: "The phonological loop handles verbal and auditory information, not mental images of space." },
      { text: "Long-term potentiation.", why: "LTP is a neural mechanism of storage, not a working-memory component." },
      { text: "Echoic memory.", why: "Echoic memory is a brief auditory sensory store, not a working-memory workspace for images." },
      { text: "The visuospatial sketchpad.", correct: true, why: "Manipulating visual and spatial images is the job of the visuospatial sketchpad." }
    ],
    keyConcept: "Working memory: visuospatial sketchpad"
  },
  {
    id: "2.3-4", topic: "2.3", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Recalling the fun you had at last year's party is ______ memory, whereas knowing that a year has 365 days is ______ memory.",
    stimulus: null,
    choices: [
      { text: "semantic; episodic.", why: "This reverses the two: a personal event is episodic and a general fact is semantic." },
      { text: "procedural; semantic.", why: "The party memory is a conscious personal event (episodic), not an unconscious skill (procedural)." },
      { text: "episodic; semantic.", correct: true, why: "Episodic memory stores personal experiences; semantic memory stores general facts." },
      { text: "implicit; explicit.", why: "Both examples are explicit; the finer contrast is episodic (events) vs. semantic (facts)." }
    ],
    keyConcept: "Episodic vs. semantic memory"
  },
  {
    id: "2.3-5", topic: "2.3", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Years after learning, Omar can ride a bike smoothly but cannot put into words how he balances. His bike-riding ability is stored as",
    stimulus: null,
    choices: [
      { text: "semantic memory.", why: "Semantic memory holds stateable facts, but he cannot state how he balances." },
      { text: "episodic memory.", why: "Episodic memory is of specific events; the skill itself is not a single recalled event." },
      { text: "procedural (implicit) memory.", correct: true, why: "Skills performed without conscious verbalization are procedural, a form of implicit memory." },
      { text: "iconic memory.", why: "Iconic memory is a momentary visual sensory store, not a long-held motor skill." }
    ],
    keyConcept: "Procedural (implicit) memory"
  },
  {
    id: "2.3-6", topic: "2.3", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Reviewing vocabulary, Nina thinks about what each word means and connects it to her own life instead of just noting how many letters it has. The levels-of-processing model predicts she will",
    stimulus: null,
    choices: [
      { text: "remember the words better because she used deep, semantic processing.", correct: true, why: "Processing meaning (deep/semantic) produces stronger memories than shallow structural processing." },
      { text: "remember the words worse because deep processing overloads memory.", why: "Deep processing improves, not harms, retention." },
      { text: "remember only the number of letters she counted.", why: "Counting letters is shallow processing, which yields weaker memory than the semantic work she did." },
      { text: "show no difference from rote letter-counting.", why: "The model specifically predicts deeper processing improves memory over shallow counting." }
    ],
    keyConcept: "Levels of processing (deep vs. shallow)"
  },
  {
    id: "2.3-7", topic: "2.3", unit: 2, practice: 1, difficulty: "Easy",
    stem: "The split-second, photograph-like visual memory that lingers just after you glance at an image is",
    stimulus: null,
    choices: [
      { text: "echoic memory.", why: "Echoic memory is the brief auditory sensory store, not the visual one." },
      { text: "iconic memory.", correct: true, why: "Iconic memory is the brief visual sensory store lasting a fraction of a second." },
      { text: "semantic memory.", why: "Semantic memory is long-term factual knowledge, not a fleeting sensory image." },
      { text: "working memory.", why: "Working memory actively manipulates information; it is not the raw visual afterimage." }
    ],
    keyConcept: "Iconic memory"
  },
  {
    id: "2.3-8", topic: "2.3", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "Without trying, you can usually recall roughly where on a page you read an interesting sentence and about what time of day something happened. Encoding such space and time information is best described as",
    stimulus: null,
    choices: [
      { text: "effortful processing requiring rehearsal.", why: "Recalling space and time here happens without conscious effort, so it is automatic, not effortful." },
      { text: "the misinformation effect.", why: "The misinformation effect distorts memory with false post-event details, which is not described here." },
      { text: "retrieval failure.", why: "The person successfully recalls the information, so this is not a retrieval failure." },
      { text: "automatic processing.", correct: true, why: "Information such as space, time, and frequency is often encoded automatically, without conscious effort." }
    ],
    keyConcept: "Automatic processing"
  },
  {
    id: "2.3-9", topic: "2.3", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "A researcher finds that a patient with amnesia can gradually learn a new motor skill over several days yet has no memory of any practice session. This dissociation best supports",
    stimulus: null,
    choices: [
      { text: "a distinction between implicit (procedural) and explicit memory systems.", correct: true, why: "Intact skill learning alongside absent conscious recall implies separate implicit and explicit systems." },
      { text: "the idea that memory is a single unified store.", why: "The split between preserved skills and lost recall argues against a single store." },
      { text: "the misinformation effect.", why: "The misinformation effect is about distortion by false information, not preserved skill learning." },
      { text: "the gambler's fallacy.", why: "That is a judgment bias, unrelated to memory-system dissociations." }
    ],
    keyConcept: "Dissociation evidence for memory systems"
  },
  {
    id: "2.3-10", topic: "2.3", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "To test whether deep processing improves memory, a researcher has one group judge whether words rhyme and another judge whether words fit meaningfully in a sentence, then tests recall. What is the independent variable?",
    stimulus: null,
    choices: [
      { text: "the number of words recalled.", why: "Recall is the measured outcome, making it the dependent variable, not the independent variable." },
      { text: "the type of processing task (rhyme vs. meaning).", correct: true, why: "The manipulated variable is the depth of the processing task assigned to each group." },
      { text: "the participants' ages.", why: "Age is a participant characteristic here, not the manipulated variable." },
      { text: "the room temperature.", why: "Room temperature is an irrelevant, controlled factor, not the manipulation of interest." }
    ],
    keyConcept: "Identifying the independent variable"
  },
  {
    id: "2.3-11", topic: "2.3", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "A study claims 'semantic processing causes better memory,' but the deep-processing group also happened to study in a quieter room than the shallow group. This weakens the conclusion because",
    stimulus: null,
    choices: [
      { text: "the sample was too large to interpret.", why: "A large sample is not itself a problem; the issue is an uncontrolled difference between groups." },
      { text: "recall is impossible to measure.", why: "Recall is readily measurable; the flaw is a confound, not measurement." },
      { text: "room noise is a confounding variable that offers an alternative explanation for the results.", correct: true, why: "An uncontrolled difference (noise) could have caused the memory difference instead of processing depth." },
      { text: "correlation always equals causation here.", why: "The point is precisely that the confound blocks a causal claim, not that correlation equals causation." }
    ],
    keyConcept: "Confounding variables"
  },
  {
    id: "2.3-12", topic: "2.3", unit: 2, practice: 3, difficulty: "Moderate",
    stem: "The graph shows recall for words processed three different ways. Which conclusion is best supported by the data?",
    stimulus: {
      type: "bars",
      caption: "Recall by depth of processing",
      categories: ["Structural (shallow)", "Phonemic (sound)", "Semantic (deep)"],
      values: [16, 34, 71],
      yLabel: "% of words recalled", max: 100
    },
    choices: [
      { text: "Shallow structural processing produced the best recall.", why: "Structural processing produced the lowest recall (16%), not the best." },
      { text: "The three processing types produced equal recall.", why: "Recall ranged widely from 16% to 71%, so they were not equal." },
      { text: "Deeper (semantic) processing was associated with the highest recall.", correct: true, why: "Semantic processing yielded the most recall (71%), consistent with the levels-of-processing model." },
      { text: "Processing words by sound produced no memory at all.", why: "Phonemic processing still yielded 34% recall, which is not zero." }
    ],
    keyConcept: "Interpreting levels-of-processing data"
  }
];

window.APSYCH.questions["2.4"] = [
  {
    id: "2.4-1", topic: "2.4", unit: 2, practice: 1, difficulty: "Easy",
    stem: "Trying to memorize the number 1-4-9-2-1-7-7-6, Leo groups it as '1492' and '1776,' two dates he already knows. This strategy is",
    stimulus: null,
    choices: [
      { text: "the spacing effect.", why: "The spacing effect concerns distributing practice over time, not grouping digits." },
      { text: "chunking.", correct: true, why: "Grouping items into familiar, meaningful units is chunking." },
      { text: "the serial position effect.", why: "That concerns recall by list position, not grouping items into units." },
      { text: "maintenance rehearsal.", why: "Simple repetition is not the same as reorganizing digits into meaningful chunks." }
    ],
    keyConcept: "Chunking"
  },
  {
    id: "2.4-2", topic: "2.4", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "To memorize a speech, Grace mentally 'walks' through her house, placing each topic in a different room and picturing it there. She is using",
    stimulus: null,
    choices: [
      { text: "chunking of unrelated facts.", why: "Chunking groups items into units; this specifically uses spatial imagery along a route." },
      { text: "the self-reference effect.", why: "The self-reference effect relates material to oneself, not to locations along a path." },
      { text: "a mnemonic device (the method of loci).", correct: true, why: "Associating items with familiar locations is the method of loci, a mnemonic device." },
      { text: "massed practice.", why: "Massed practice is cramming; it is not an imagery-based memory aid." }
    ],
    keyConcept: "Mnemonic device: method of loci"
  },
  {
    id: "2.4-3", topic: "2.4", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Two students study the same total number of minutes. One spreads it over five nights; the other crams it all the night before. Research on the spacing effect predicts that",
    stimulus: null,
    choices: [
      { text: "the crammer will retain more a week later.", why: "Massed practice (cramming) produces worse long-term retention than distributed practice." },
      { text: "neither will remember anything a week later.", why: "The spacing effect predicts better, not zero, retention for distributed study." },
      { text: "both will retain exactly the same amount.", why: "The spacing effect predicts a reliable advantage for distributed practice, not equal retention." },
      { text: "the student who spread out studying will retain more a week later.", correct: true, why: "Distributed practice yields better long-term retention than massed practice — the spacing effect." }
    ],
    keyConcept: "Spacing effect (distributed practice)"
  },
  {
    id: "2.4-4", topic: "2.4", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Which study strategy involves the deepest level of processing and should produce the strongest memory?",
    stimulus: null,
    choices: [
      { text: "Highlighting words in a bright color.", why: "Attending to appearance is shallow, structural processing." },
      { text: "Counting the syllables in each term.", why: "Focusing on sound is phonemic, a relatively shallow level of processing." },
      { text: "Explaining each concept in your own words and linking it to an example.", correct: true, why: "Elaborating on meaning is deep, semantic processing, which produces the strongest memory." },
      { text: "Copying the definitions word for word.", why: "Verbatim copying emphasizes surface form, not meaning, so it is shallow." }
    ],
    keyConcept: "Deep (semantic) processing"
  },
  {
    id: "2.4-5", topic: "2.4", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "After reading a 20-item list once, Malik recalls the first few items well, partly because he rehearsed them the most and moved them into long-term memory. This advantage for early items is the",
    stimulus: null,
    choices: [
      { text: "recency effect.", why: "The recency effect is superior recall of the last items, not the first." },
      { text: "primacy effect.", correct: true, why: "Better recall of early list items, due to more rehearsal into long-term memory, is the primacy effect." },
      { text: "self-reference effect.", why: "The self-reference effect involves relating material to oneself, not list position." },
      { text: "spacing effect.", why: "The spacing effect concerns the timing of study sessions, not position within a list." }
    ],
    keyConcept: "Primacy effect"
  },
  {
    id: "2.4-6", topic: "2.4", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Immediately after hearing a grocery list, Nora most easily recalls the last few items because they are still active in short-term memory. This is the",
    stimulus: null,
    choices: [
      { text: "primacy effect.", why: "The primacy effect is for early items via long-term memory, not the last items." },
      { text: "misinformation effect.", why: "The misinformation effect involves distortion by false post-event information, not position-based recall." },
      { text: "recency effect.", correct: true, why: "Superior recall of the most recent (last) items, still held in short-term memory, is the recency effect." },
      { text: "encoding failure.", why: "She does recall the items, so this is not a failure to encode." }
    ],
    keyConcept: "Recency effect"
  },
  {
    id: "2.4-7", topic: "2.4", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Students who relate new vocabulary to their own experiences remember more than those who just note the words' dictionary meanings. This extra boost from personal relevance is the",
    stimulus: null,
    choices: [
      { text: "spacing effect.", why: "The spacing effect is about distributing practice over time, not personal relevance." },
      { text: "recency effect.", why: "The recency effect concerns the last items in a list, not self-relevance." },
      { text: "availability heuristic.", why: "That is a judgment shortcut, unrelated to encoding personally relevant material." },
      { text: "self-reference effect.", correct: true, why: "Better memory for information related to oneself is the self-reference effect." }
    ],
    keyConcept: "Self-reference effect"
  },
  {
    id: "2.4-8", topic: "2.4", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "A biology student who organizes terms into an outline of categories and subcategories tends to recall more than one who studies the same terms in a random list. This benefit comes mainly from",
    stimulus: null,
    choices: [
      { text: "automatic processing of the terms.", why: "Building an organized outline is effortful, not automatic, processing." },
      { text: "sensory adaptation to the words.", why: "Adaptation is fading sensitivity to a constant stimulus, not a study-organization benefit." },
      { text: "the gambler's fallacy.", why: "That is a probability bias, unrelated to organizing study material." },
      { text: "organizing material into hierarchies, which improves encoding and retrieval.", correct: true, why: "Hierarchical organization structures material so it is encoded and retrieved more effectively." }
    ],
    keyConcept: "Organization/hierarchies improve encoding"
  },
  {
    id: "2.4-9", topic: "2.4", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "To test the spacing effect, a researcher should compare two groups that differ in",
    stimulus: null,
    choices: [
      { text: "how much total time they spend studying.", why: "Total study time must be held equal so any difference reflects spacing, not amount studied." },
      { text: "whether their equal study time is distributed across days or massed in one session.", correct: true, why: "Holding total time constant while varying its distribution isolates the spacing effect." },
      { text: "the difficulty of the material each group studies.", why: "Differing material introduces a confound and would not isolate spacing." },
      { text: "how intelligent the participants are.", why: "Intelligence is a participant variable to control, not the manipulation of spacing." }
    ],
    keyConcept: "Designing a spacing-effect study"
  },
  {
    id: "2.4-10", topic: "2.4", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "In a serial position study, 'memory' is operationally defined as the proportion of list items a participant writes down correctly within one minute. This operational definition is valuable mainly because it",
    stimulus: null,
    choices: [
      { text: "guarantees the study has no confounds.", why: "An operational definition does not by itself remove confounds." },
      { text: "measures the participants' intelligence directly.", why: "It measures recall of a specific list, not general intelligence." },
      { text: "specifies memory in precise, measurable terms so the study can be replicated.", correct: true, why: "An operational definition makes an abstract concept measurable and the procedure repeatable." },
      { text: "proves that primacy causes recency.", why: "An operational definition defines measurement; it does not establish any causal relationship." }
    ],
    keyConcept: "Operational definitions"
  },
  {
    id: "2.4-11", topic: "2.4", unit: 2, practice: 3, difficulty: "Difficult",
    stem: "The graph plots the proportion of items recalled at each position in a 15-item list. The U-shaped pattern is best explained by",
    stimulus: {
      type: "scatter",
      caption: "Proportion of items recalled by list position",
      points: [[1, 0.85], [2, 0.70], [3, 0.55], [5, 0.35], [8, 0.28], [10, 0.30], [12, 0.45], [14, 0.72], [15, 0.88]],
      xLabel: "Position in list", yLabel: "Proportion recalled",
      alt: "A U-shaped curve: recall is high at the first and last positions and lowest in the middle."
    },
    choices: [
      { text: "encoding failure for every item on the list.", why: "Items were recalled at varying rates by position, so it is not uniform encoding failure." },
      { text: "the serial position effect: strong recall for early items (primacy) and late items (recency), with a dip in the middle.", correct: true, why: "High recall at both ends with a mid-list dip is the classic serial position (primacy plus recency) curve." },
      { text: "the availability heuristic distorting recall.", why: "The availability heuristic is a judgment bias, not the cause of a position-based recall curve." },
      { text: "proactive interference affecting only the last items.", why: "The last items are actually recalled best here, so interference does not explain their high recall." }
    ],
    keyConcept: "Reading a serial position curve"
  },
  {
    id: "2.4-12", topic: "2.4", unit: 2, practice: 3, difficulty: "Moderate",
    stem: "The table lists five students' test scores (%) under each study method. Which statement is best supported?",
    stimulus: {
      type: "table",
      caption: "Test scores (%) after massed vs. distributed study",
      headers: ["Study method", "Student scores"],
      rows: [["Massed (crammed)", "55, 60, 62, 58, 65"], ["Distributed (spaced)", "80, 78, 85, 82, 90"]],
      rowHeaders: true
    },
    choices: [
      { text: "The distributed-study group had a higher average score than the massed group.", correct: true, why: "The spaced scores (mean 83) clearly exceed the massed scores (mean 60), supporting the spacing effect." },
      { text: "The massed group had a higher average score.", why: "The massed scores are lower (mean 60) than the distributed scores (mean 83)." },
      { text: "Both methods produced identical median scores.", why: "The massed median (60) differs from the distributed median (82), so they are not identical." },
      { text: "Study method had no effect on scores.", why: "The two groups' scores differ substantially, indicating a clear effect." }
    ],
    keyConcept: "Comparing means from a data table"
  }
];
window.APSYCH.questions["2.5"] = [
  {
    id: "2.5-1", topic: "2.5", unit: 2, practice: 1, difficulty: "Easy",
    stem: "Research suggests that, without rehearsal, short-term memory can hold about how many items?",
    stimulus: null,
    choices: [
      { text: "An unlimited number of items.", why: "Unlimited capacity describes long-term memory, not short-term memory." },
      { text: "About seven, plus or minus two.", correct: true, why: "Miller's 'magic number' estimates short-term memory at roughly seven (5-9) items." },
      { text: "Exactly two items.", why: "Short-term memory holds more than two; the classic estimate is about seven." },
      { text: "About fifty items.", why: "Fifty far exceeds short-term memory's limited capacity of roughly seven items." }
    ],
    keyConcept: "Short-term memory capacity (7 plus or minus 2)"
  },
  {
    id: "2.5-2", topic: "2.5", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Without active rehearsal, information in short-term memory typically fades within about",
    stimulus: null,
    choices: [
      { text: "a full day.", why: "A day is far too long; unrehearsed short-term memory fades in seconds." },
      { text: "20-30 seconds.", correct: true, why: "Unrehearsed short-term memory lasts only about 20-30 seconds." },
      { text: "a fraction of a second.", why: "A fraction of a second describes iconic sensory memory, not short-term memory." },
      { text: "several years.", why: "Lasting years describes long-term memory, not short-term memory." }
    ],
    keyConcept: "Short-term memory duration"
  },
  {
    id: "2.5-3", topic: "2.5", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Compared with short-term memory, long-term memory is best described as",
    stimulus: null,
    choices: [
      { text: "essentially unlimited in capacity and potentially permanent.", correct: true, why: "Long-term memory has vast capacity and can last a lifetime." },
      { text: "limited to about seven items.", why: "The seven-item limit describes short-term memory, not long-term memory." },
      { text: "lasting only about 30 seconds.", why: "About 30 seconds is unrehearsed short-term memory, not long-term memory." },
      { text: "a purely visual store.", why: "Long-term memory stores many kinds of information, not only visual." }
    ],
    keyConcept: "Long-term memory capacity and duration"
  },
  {
    id: "2.5-4", topic: "2.5", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "After damage to his hippocampus, a patient can no longer form new conscious memories of facts and events, though older memories remain. This shows the hippocampus is essential for",
    stimulus: null,
    choices: [
      { text: "storing procedural motor skills.", why: "Procedural skills rely on the cerebellum, not the hippocampus." },
      { text: "controlling balance and coordination.", why: "Balance and coordination are cerebellar functions, not hippocampal ones." },
      { text: "regulating emotional fear responses.", why: "Emotional tagging is the amygdala's role, not the hippocampus's." },
      { text: "forming new explicit (declarative) memories.", correct: true, why: "The hippocampus is central to forming new explicit memories of facts and events." }
    ],
    keyConcept: "Hippocampus and explicit memory"
  },
  {
    id: "2.5-5", topic: "2.5", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A person with damage to the cerebellum would most likely have trouble",
    stimulus: null,
    choices: [
      { text: "recalling facts learned in school.", why: "Factual recall depends on explicit-memory systems (hippocampus and cortex), not the cerebellum." },
      { text: "recognizing a friend's face.", why: "Face recognition is not the cerebellum's procedural/conditioned role." },
      { text: "forming new classically conditioned and procedural (skill) memories.", correct: true, why: "The cerebellum stores implicit procedural and classically conditioned memories." },
      { text: "feeling emotions such as fear.", why: "Fear is tied to the amygdala, not the cerebellum." }
    ],
    keyConcept: "Cerebellum and implicit/procedural memory"
  },
  {
    id: "2.5-6", topic: "2.5", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Emotionally intense experiences are often remembered especially vividly. Which brain structure most directly strengthens these emotional memories?",
    stimulus: null,
    choices: [
      { text: "The cerebellum.", why: "The cerebellum handles procedural and conditioned memory, not emotional tagging." },
      { text: "The occipital lobe.", why: "The occipital lobe processes vision, not emotional memory." },
      { text: "The phonological loop.", why: "The phonological loop is a working-memory component, not a brain structure for emotional memory." },
      { text: "The amygdala.", correct: true, why: "The amygdala tags experiences with emotional significance, strengthening emotional memories." }
    ],
    keyConcept: "Amygdala and emotional memory"
  },
  {
    id: "2.5-7", topic: "2.5", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "As neurons repeatedly fire together, the connection between them strengthens, making future transmission easier. This lasting strengthening, seen as the neural basis of learning and memory, is",
    stimulus: null,
    choices: [
      { text: "long-term potentiation (LTP).", correct: true, why: "LTP is the enduring strengthening of neural connections underlying memory." },
      { text: "sensory adaptation.", why: "Adaptation is reduced sensitivity to a constant stimulus, not synaptic strengthening." },
      { text: "the misinformation effect.", why: "That is a memory-distortion phenomenon, not a neural strengthening process." },
      { text: "reuptake.", why: "Reuptake is neurotransmitter reabsorption, not a durable strengthening of connections." }
    ],
    keyConcept: "Long-term potentiation"
  },
  {
    id: "2.5-8", topic: "2.5", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "Marisol vividly recalls exactly where she was and what she was doing when she heard shocking national news, and she feels certain the memory is perfectly accurate. This vivid, emotional memory is called a",
    stimulus: null,
    choices: [
      { text: "procedural memory.", why: "Procedural memory is for skills, not a vivid recollection of a specific moment." },
      { text: "flashbulb memory.", correct: true, why: "A vivid, emotionally charged memory of a surprising, significant event is a flashbulb memory (though it may still be inaccurate)." },
      { text: "an iconic memory.", why: "Iconic memory is a fraction-of-a-second visual store, not a lasting emotional memory." },
      { text: "semantic memory.", why: "Semantic memory is general factual knowledge, not a personal, emotional snapshot." }
    ],
    keyConcept: "Flashbulb memory"
  },
  {
    id: "2.5-9", topic: "2.5", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "A researcher measures how many digits people can repeat back in order immediately after hearing them. This procedure most directly measures",
    stimulus: null,
    choices: [
      { text: "short-term (working) memory capacity.", correct: true, why: "Immediate serial recall of digits operationalizes short-term memory span." },
      { text: "long-term memory capacity.", why: "Immediate recall of a just-heard span taps short-term, not long-term, memory." },
      { text: "sensory memory duration.", why: "This measures how many items are held, not the split-second sensory store." },
      { text: "procedural memory.", why: "Repeating digits is not a measure of a motor skill." }
    ],
    keyConcept: "Operationalizing memory span"
  },
  {
    id: "2.5-10", topic: "2.5", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "To test whether sleep aids memory consolidation, a researcher should compare recall between groups that, after learning, differ only in whether they",
    stimulus: null,
    choices: [
      { text: "studied easy versus hard material.", why: "Differing material is a confound, not a test of sleep's role in consolidation." },
      { text: "slept or stayed awake for an equal interval before the memory test.", correct: true, why: "Varying only sleep versus wakefulness after learning isolates sleep's effect on consolidation." },
      { text: "were tested with recall versus recognition.", why: "That varies the test format, not the sleep manipulation of interest." },
      { text: "were younger versus older.", why: "Age is a participant variable, not the sleep manipulation being tested." }
    ],
    keyConcept: "Designing a consolidation study"
  },
  {
    id: "2.5-11", topic: "2.5", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "In a classic study, participants shown a grid of letters for a split second could report only a few, but when a tone immediately cued one row afterward, they reported that row almost perfectly. This best demonstrates that",
    stimulus: null,
    choices: [
      { text: "long-term memory has unlimited capacity.", why: "The study concerns a fleeting sensory store, not long-term capacity." },
      { text: "sensory (iconic) memory briefly holds far more than can be reported before it fades.", correct: true, why: "Near-perfect cued report shows the whole grid was momentarily available in iconic memory but decayed quickly." },
      { text: "chunking eliminates the limits of short-term memory.", why: "The study is about sensory memory's brief richness, not chunking in short-term memory." },
      { text: "the participants had photographic long-term memory.", why: "The information vanished in under a second, indicating brief sensory memory, not permanent storage." }
    ],
    keyConcept: "Iconic memory (partial-report evidence)"
  },
  {
    id: "2.5-12", topic: "2.5", unit: 2, practice: 3, difficulty: "Moderate",
    stem: "The graph shows the average number of digits recalled in order when the same series was presented as separate digits versus grouped into meaningful chunks. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Average digits recalled with and without chunking",
      categories: ["Unchunked digits", "Chunked into groups"],
      values: [7, 12],
      yLabel: "Digits recalled in order", max: 15
    },
    choices: [
      { text: "Chunking reduced how much could be recalled.", why: "Recall rose from 7 to 12 with chunking, so it increased rather than reduced recall." },
      { text: "Chunking increased the effective amount held in short-term memory.", correct: true, why: "Grouping digits into meaningful units let participants recall more (12 vs 7), expanding effective span." },
      { text: "Chunking had no effect on recall.", why: "The two bars differ (7 vs 12), showing a clear effect." },
      { text: "Participants recalled an unlimited number of digits when chunked.", why: "Recall rose to 12, not to an unlimited amount." }
    ],
    keyConcept: "Interpreting chunking data"
  }
];

window.APSYCH.questions["2.6"] = [
  {
    id: "2.6-1", topic: "2.6", unit: 2, practice: 1, difficulty: "Easy",
    stem: "A fill-in-the-blank question requires ______, whereas a multiple-choice question requires only ______.",
    stimulus: null,
    choices: [
      { text: "recognition; recall.", why: "This reverses the terms; fill-in-the-blank requires producing the answer (recall)." },
      { text: "recall; recognition.", correct: true, why: "Recall means producing information without cues; recognition means identifying it among options." },
      { text: "priming; encoding.", why: "Those are different processes, not the recall/recognition contrast." },
      { text: "storage; retrieval.", why: "Both tasks are retrieval; the contrast asked for is recall vs. recognition." }
    ],
    keyConcept: "Recall vs. recognition"
  },
  {
    id: "2.6-2", topic: "2.6", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Seeing the word 'yellow' makes people faster to then recognize the word 'banana.' This automatic activation of associations is",
    stimulus: null,
    choices: [
      { text: "the misinformation effect.", why: "That is memory distortion by false information, not activation of related concepts." },
      { text: "encoding failure.", why: "Encoding failure is not storing information, not faster access via associations." },
      { text: "priming.", correct: true, why: "Priming is the activation, often unconscious, of associations that speed related retrieval." },
      { text: "the spacing effect.", why: "The spacing effect concerns study timing, not associative activation." }
    ],
    keyConcept: "Priming as a retrieval cue"
  },
  {
    id: "2.6-3", topic: "2.6", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Diego studies for his exam in the same classroom where he will take it, and finds he recalls more there than he did practicing at a coffee shop. This best illustrates",
    stimulus: null,
    choices: [
      { text: "context-dependent memory.", correct: true, why: "Matching the external environment at encoding and retrieval improves recall — context-dependent memory." },
      { text: "state-dependent memory.", why: "State-dependent memory involves matching internal states, not external surroundings." },
      { text: "the testing effect.", why: "The testing effect is the benefit of retrieval practice, not environmental matching." },
      { text: "proactive interference.", why: "Interference impairs memory; here memory improved due to matching context." }
    ],
    keyConcept: "Context-dependent memory"
  },
  {
    id: "2.6-4", topic: "2.6", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "When Ana is in a sad mood, she more easily remembers other sad events from her past. This tendency is called",
    stimulus: null,
    choices: [
      { text: "context-dependent memory.", why: "Context-dependent memory involves the external setting, not one's mood." },
      { text: "source amnesia.", why: "Source amnesia is misremembering a memory's origin, not mood-based retrieval." },
      { text: "the primacy effect.", why: "The primacy effect is about early list items, not emotional matching." },
      { text: "mood-congruent memory.", correct: true, why: "Retrieving memories that match one's current emotional state is mood-congruent memory." }
    ],
    keyConcept: "Mood-congruent memory"
  },
  {
    id: "2.6-5", topic: "2.6", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Students who quiz themselves repeatedly on material remember more on a later exam than students who reread the same material for the same amount of time. This advantage is the",
    stimulus: null,
    choices: [
      { text: "spacing effect.", why: "The spacing effect concerns distributing sessions over time, not retrieval versus rereading." },
      { text: "recency effect.", why: "The recency effect concerns the last items in a list, not self-quizzing benefits." },
      { text: "testing effect (retrieval practice).", correct: true, why: "Actively retrieving information strengthens memory more than restudying — the testing effect." },
      { text: "misinformation effect.", why: "That is distortion by false information, not a benefit of self-testing." }
    ],
    keyConcept: "Testing effect (retrieval practice)"
  },
  {
    id: "2.6-6", topic: "2.6", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "The principle that memory retrieval is best when the cues and conditions present at retrieval match those present at encoding is called",
    stimulus: null,
    choices: [
      { text: "the encoding specificity principle.", correct: true, why: "This principle holds that retrieval improves when conditions match those at encoding." },
      { text: "the levels-of-processing effect.", why: "That concerns depth of processing, not matching retrieval conditions." },
      { text: "the availability heuristic.", why: "That is a judgment shortcut, unrelated to matching cues at retrieval." },
      { text: "maintenance rehearsal.", why: "That is simple repetition, not the match between encoding and retrieval conditions." }
    ],
    keyConcept: "Encoding specificity principle"
  },
  {
    id: "2.6-7", topic: "2.6", unit: 2, practice: 1, difficulty: "Easy",
    stem: "Trying to name an actor, Kwame feels the name is right on the verge of coming to him but he just cannot produce it. This experience is",
    stimulus: null,
    choices: [
      { text: "encoding failure.", why: "Encoding failure means information was never stored; here it is stored but momentarily inaccessible." },
      { text: "the tip-of-the-tongue phenomenon, a retrieval failure.", correct: true, why: "Feeling a stored word is just out of reach is the tip-of-the-tongue phenomenon, a retrieval failure." },
      { text: "retrograde amnesia.", why: "Retrograde amnesia is a broad loss of old memories, not a momentary word-finding block." },
      { text: "proactive interference.", why: "Proactive interference is old learning blocking new; that is not what is described." }
    ],
    keyConcept: "Tip-of-the-tongue (retrieval failure)"
  },
  {
    id: "2.6-8", topic: "2.6", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "Jordan swears he 'does not know' the answer on a fill-in-the-blank test, but when the same item appears as multiple choice he immediately picks the right answer. This is best explained by the fact that",
    stimulus: null,
    choices: [
      { text: "recognition tasks provide cues that make retrieval easier than recall.", correct: true, why: "Multiple-choice options serve as retrieval cues, so recognition is easier than cue-free recall." },
      { text: "the information was never encoded at all.", why: "He correctly recognizes the answer, so the information clearly was encoded." },
      { text: "multiple-choice questions always test deeper knowledge.", why: "Recognition typically requires less retrieval effort than recall, not deeper knowledge." },
      { text: "he experienced the misinformation effect.", why: "No misleading post-event information was introduced; this is about recognition versus recall." }
    ],
    keyConcept: "Recognition provides retrieval cues"
  },
  {
    id: "2.6-9", topic: "2.6", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "To test context-dependent memory, researchers have participants learn a word list in one room. To isolate the context effect, they should test recall with participants split so they are tested",
    stimulus: null,
    choices: [
      { text: "all in a brand-new third room.", why: "Without comparing matched vs. mismatched rooms, the context effect cannot be isolated." },
      { text: "after different amounts of sleep.", why: "Varying sleep tests consolidation, not context-dependent retrieval." },
      { text: "only in the room where they learned.", why: "With no mismatched comparison group, any context effect cannot be shown." },
      { text: "half in the same room and half in a different room, then compare recall.", correct: true, why: "Comparing matched versus mismatched contexts isolates the effect of environmental context on retrieval." }
    ],
    keyConcept: "Designing a context-dependent memory study"
  },
  {
    id: "2.6-10", topic: "2.6", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "A teacher claims frequent low-stakes quizzing improves final-exam scores. Which comparison would best support the testing effect specifically?",
    stimulus: null,
    choices: [
      { text: "Compare a class that self-quizzes with a class that rereads for the same total time, holding content equal.", correct: true, why: "Matching time and content while varying retrieval versus rereading isolates the testing effect." },
      { text: "Compare this year's quizzed class to last year's un-quizzed class taught by a different teacher.", why: "A different teacher and year add confounds that undermine the comparison." },
      { text: "Ask students whether they enjoyed the quizzes.", why: "Preference ratings do not measure whether retrieval practice improved memory." },
      { text: "Give only the quizzed class extra study time.", why: "Extra time is a confound; the groups must be matched except for retrieval practice." }
    ],
    keyConcept: "Isolating the testing effect"
  },
  {
    id: "2.6-11", topic: "2.6", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "A study reports that 'recognition memory is better than recall.' A skeptic notes that the recall test used obscure fill-ins while the recognition test used easy items. The skeptic is pointing out that",
    stimulus: null,
    choices: [
      { text: "the two tests were not equated in difficulty, confounding the comparison.", correct: true, why: "Unequal item difficulty is a confound, so the difference may reflect difficulty rather than recall versus recognition." },
      { text: "recognition and recall cannot both be measured.", why: "Both are routinely measured; the flaw is unequal difficulty, not measurability." },
      { text: "the sample must have been biased toward good memory.", why: "Nothing indicates a biased sample; the issue raised is item difficulty." },
      { text: "correlation cannot show causation here.", why: "The concern raised is a confound in an experiment, not a correlation-causation issue." }
    ],
    keyConcept: "Confounds in memory comparisons"
  },
  {
    id: "2.6-12", topic: "2.6", unit: 2, practice: 3, difficulty: "Moderate",
    stem: "The graph shows average words recalled when the testing environment matched or differed from the study environment. Which conclusion is best supported?",
    stimulus: {
      type: "bars",
      caption: "Words recalled when test context matched or differed from study context",
      categories: ["Same context", "Different context"],
      values: [22, 14],
      yLabel: "Words recalled (of 30)", max: 30
    },
    choices: [
      { text: "Matching the study context at test was associated with better recall.", correct: true, why: "Recall was higher in the same-context condition (22 vs 14), consistent with context-dependent memory." },
      { text: "The testing environment made no difference.", why: "The two conditions differ (22 vs 14), so context did matter." },
      { text: "A different context improved recall.", why: "The different-context group recalled fewer words (14 vs 22), not more." },
      { text: "Participants recalled all 30 words in both conditions.", why: "Neither condition reached 30 words recalled." }
    ],
    keyConcept: "Interpreting context-dependent memory data"
  }
];

window.APSYCH.questions["2.7"] = [
  {
    id: "2.7-1", topic: "2.7", unit: 2, practice: 1, difficulty: "Easy",
    stem: "After getting a new locker combination, Elena keeps accidentally entering last year's combination. Her old learning disrupting her new learning is",
    stimulus: null,
    choices: [
      { text: "retroactive interference.", why: "Retroactive interference is new learning disrupting old; here old is disrupting new." },
      { text: "proactive interference.", correct: true, why: "Previously learned information (the old combination) is disrupting new learning — proactive interference." },
      { text: "encoding failure.", why: "She did encode the new combination; the problem is interference from the old one." },
      { text: "the misinformation effect.", why: "No misleading post-event information is involved here." }
    ],
    keyConcept: "Proactive interference"
  },
  {
    id: "2.7-2", topic: "2.7", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "After memorizing this semester's class schedule, Sam can no longer recall last semester's schedule. New learning disrupting old memory is",
    stimulus: null,
    choices: [
      { text: "proactive interference.", why: "Proactive interference is old learning disrupting new; here new is disrupting old." },
      { text: "encoding failure.", why: "Last semester's schedule was encoded before; the issue is newer learning interfering with it." },
      { text: "retroactive interference.", correct: true, why: "Newly learned information (this semester) disrupts recall of older information — retroactive interference." },
      { text: "source amnesia.", why: "Source amnesia is misremembering a memory's origin, not schedule interference." }
    ],
    keyConcept: "Retroactive interference"
  },
  {
    id: "2.7-3", topic: "2.7", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Asked to draw the exact design of a common coin from memory, most people cannot, despite seeing such coins daily. This is best explained by",
    stimulus: null,
    choices: [
      { text: "encoding failure — the details were never deeply processed into memory.", correct: true, why: "Because people never attend to the fine details, they are not encoded in the first place." },
      { text: "retroactive interference from newer coins.", why: "The issue is failure to encode details, not new learning overwriting old memories." },
      { text: "storage decay over minutes.", why: "The details were never stored to begin with, so there is nothing to decay." },
      { text: "repression of the memory.", why: "Coin designs are not anxiety-provoking, so motivated forgetting does not apply." }
    ],
    keyConcept: "Encoding failure"
  },
  {
    id: "2.7-4", topic: "2.7", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A word is 'on the tip of your tongue' and then, hours later, suddenly pops into your head. The fact that it returned shows the memory was",
    stimulus: null,
    choices: [
      { text: "never encoded.", why: "It later returned, so it clearly was encoded and stored." },
      { text: "distorted by the misinformation effect.", why: "No misleading information altered the memory; it was simply inaccessible for a while." },
      { text: "permanently decayed from storage.", why: "A permanently decayed memory could not spontaneously return." },
      { text: "stored but temporarily inaccessible — a retrieval failure.", correct: true, why: "Recovering the word shows it was stored all along and had only been momentarily unretrievable." }
    ],
    keyConcept: "Retrieval failure vs. storage decay"
  },
  {
    id: "2.7-5", topic: "2.7", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "After a brain injury, Leo can recall his childhood and life before the injury but cannot form any new long-term memories afterward. He has",
    stimulus: null,
    choices: [
      { text: "anterograde amnesia.", correct: true, why: "An inability to form new memories after an injury, with old memories intact, is anterograde amnesia." },
      { text: "retrograde amnesia.", why: "Retrograde amnesia is loss of memories from before the injury, which Leo retains." },
      { text: "proactive interference.", why: "Interference is one memory disrupting another, not a global inability to form new memories." },
      { text: "repression.", why: "Repression is motivated forgetting of specific threatening memories, not a general failure to form new ones." }
    ],
    keyConcept: "Anterograde amnesia"
  },
  {
    id: "2.7-6", topic: "2.7", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Following a concussion, Nadia cannot remember the events of the week leading up to the accident, though she forms new memories normally. She has",
    stimulus: null,
    choices: [
      { text: "anterograde amnesia.", why: "Anterograde amnesia blocks new memories; Nadia forms new memories fine." },
      { text: "retrograde amnesia.", correct: true, why: "Losing access to memories formed before an injury is retrograde amnesia." },
      { text: "encoding failure.", why: "The pre-accident events were encoded; the injury impaired their retrieval, which is different." },
      { text: "the tip-of-the-tongue phenomenon.", why: "That is a momentary word-finding block, not the loss of a week of memories." }
    ],
    keyConcept: "Retrograde amnesia"
  },
  {
    id: "2.7-7", topic: "2.7", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "After watching a video of a car accident, witnesses asked how fast the cars were going when they 'smashed' later recalled seeing broken glass that was not actually present. This distortion illustrates",
    stimulus: null,
    choices: [
      { text: "proactive interference.", why: "Proactive interference is old learning blocking new, not memory altered by leading wording." },
      { text: "the misinformation effect.", correct: true, why: "Misleading post-event wording ('smashed') distorted the witnesses' memory — the misinformation effect." },
      { text: "encoding failure.", why: "The witnesses did encode the scene; their memory was later distorted, not never stored." },
      { text: "state-dependent memory.", why: "State-dependent memory concerns internal states at retrieval, not post-event misinformation." }
    ],
    keyConcept: "Misinformation effect (Loftus)"
  },
  {
    id: "2.7-8", topic: "2.7", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "Weeks later, Mia 'remembers' a friend telling her a rumor, when in fact she read it online. Misattributing where a memory came from is",
    stimulus: null,
    choices: [
      { text: "source amnesia (a source-monitoring error).", correct: true, why: "Misremembering the origin of a memory is source amnesia." },
      { text: "retroactive interference.", why: "That is new learning disrupting old memories, not confusing a memory's source." },
      { text: "the spacing effect.", why: "The spacing effect concerns study timing, not misattributing a memory's source." },
      { text: "anterograde amnesia.", why: "Mia formed the memory fine; she only got its source wrong." }
    ],
    keyConcept: "Source amnesia / source-monitoring error"
  },
  {
    id: "2.7-9", topic: "2.7", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "Ebbinghaus tested his own memory for nonsense syllables at increasing delays to chart how much he forgot over time. He used nonsense syllables mainly to",
    stimulus: null,
    choices: [
      { text: "avoid the influence of prior knowledge or meaning on memory.", correct: true, why: "Nonsense syllables minimize pre-existing associations, isolating pure retention over time." },
      { text: "make the material easier to remember.", why: "Nonsense syllables are harder, not easier; the goal was to control for meaning." },
      { text: "test recognition rather than recall.", why: "The choice of nonsense syllables addresses meaning, not the recall/recognition format." },
      { text: "study the misinformation effect.", why: "His work charted forgetting over time, not distortion by misleading information." }
    ],
    keyConcept: "Ebbinghaus's method (controlling for meaning)"
  },
  {
    id: "2.7-10", topic: "2.7", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "A researcher leads some participants to 'remember' a childhood event that never happened by repeatedly suggesting it. This finding most directly challenges the assumption that",
    stimulus: null,
    choices: [
      { text: "vivid, confidently held memories are always accurate records of real events.", correct: true, why: "Implanting false memories shows confidence and vividness do not guarantee accuracy." },
      { text: "people can never be misled about their past.", why: "The study shows the opposite — that people can be misled." },
      { text: "memory has unlimited storage capacity.", why: "The finding concerns accuracy and reconstruction, not storage capacity." },
      { text: "recognition is easier than recall.", why: "That distinction is unrelated to the implantation of false memories." }
    ],
    keyConcept: "Constructive memory / false memories"
  },
  {
    id: "2.7-11", topic: "2.7", unit: 2, practice: 3, difficulty: "Difficult",
    stem: "The graph plots the percentage of material retained at increasing delays after learning. Which statement best describes the pattern?",
    stimulus: {
      type: "scatter",
      caption: "Retention over time after learning (Ebbinghaus-style forgetting curve)",
      points: [[0, 100], [1, 58], [2, 44], [6, 36], [24, 28], [48, 25], [144, 21]],
      xLabel: "Hours since learning", yLabel: "% retained",
      alt: "Retention drops steeply in the first hours, then levels off into a shallow decline."
    },
    choices: [
      { text: "Forgetting is rapid at first and then levels off over time.", correct: true, why: "Retention drops steeply in the first hours (100% to about 44%) and then declines slowly — the classic forgetting curve." },
      { text: "Forgetting occurs at a constant, steady rate.", why: "The drop is far steeper early than later, so the rate is not constant." },
      { text: "Retention increases the longer time passes.", why: "Retention decreases over time, it does not increase." },
      { text: "Nothing is forgotten within the first day.", why: "Retention fell to about 28% by 24 hours, so much was forgotten within a day." }
    ],
    keyConcept: "Reading a forgetting curve"
  },
  {
    id: "2.7-12", topic: "2.7", unit: 2, practice: 3, difficulty: "Moderate",
    stem: "The table compares recall for participants who slept after learning a list versus those who learned two additional lists before the test. Which conclusion is best supported?",
    stimulus: {
      type: "table",
      caption: "Percent of an original word list recalled by condition",
      headers: ["Condition", "% recalled"],
      rows: [["Slept after learning (no new lists)", "72"], ["Learned two more lists after (interference)", "41"]],
      rowHeaders: true
    },
    choices: [
      { text: "Sleep harmed memory compared with more studying.", why: "The sleep group recalled more (72% vs 41%), so sleep did not harm memory." },
      { text: "Learning additional lists produced interference that lowered recall.", correct: true, why: "The group that learned more lists recalled far less (41% vs 72%), consistent with retroactive interference." },
      { text: "Both conditions produced the same recall.", why: "72% and 41% differ substantially, so they are not the same." },
      { text: "Interference improved recall of the original list.", why: "Recall dropped with the extra lists, so interference impaired rather than improved recall." }
    ],
    keyConcept: "Interpreting interference data"
  }
];

window.APSYCH.questions["2.8"] = [
  {
    id: "2.8-1", topic: "2.8", unit: 2, practice: 1, difficulty: "Easy",
    stem: "Spearman's concept of general intelligence (g) is the idea that",
    stimulus: null,
    choices: [
      { text: "a single underlying factor influences performance across many different mental tasks.", correct: true, why: "The g factor proposes one general ability underlying diverse cognitive tasks." },
      { text: "there are eight or nine independent intelligences.", why: "That is Gardner's multiple intelligences, not Spearman's single general factor." },
      { text: "intelligence is only practical street smarts.", why: "That reflects part of Sternberg's theory, not Spearman's general factor." },
      { text: "intelligence cannot be measured at all.", why: "Spearman used factor analysis of test scores, so he held intelligence to be measurable." }
    ],
    keyConcept: "General intelligence (g)"
  },
  {
    id: "2.8-2", topic: "2.8", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A student is a gifted musician and athlete but only average at academic tests. A psychologist who argues this student has real strengths that a single IQ score misses is drawing on",
    stimulus: null,
    choices: [
      { text: "Spearman's g factor.", why: "The g factor emphasizes a single general ability, which would not highlight separate strengths." },
      { text: "Gardner's theory of multiple intelligences.", correct: true, why: "Multiple-intelligences theory recognizes distinct abilities (e.g., musical, bodily) beyond a single IQ." },
      { text: "the concept of standardization.", why: "Standardization is a testing property, not a theory of separate intelligences." },
      { text: "the Flynn effect.", why: "The Flynn effect is the generational rise in scores, unrelated to multiple abilities." }
    ],
    keyConcept: "Gardner's multiple intelligences"
  },
  {
    id: "2.8-3", topic: "2.8", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "Renata is not the top student on written exams, but she is remarkably skilled at handling real-world situations and 'street-smart' problem-solving. In Sternberg's triarchic theory, this is",
    stimulus: null,
    choices: [
      { text: "analytical intelligence.", why: "Analytical intelligence is academic problem-solving, which is not her standout strength." },
      { text: "creative intelligence.", why: "Creative intelligence is generating novel ideas, not the practical savvy described." },
      { text: "practical intelligence.", correct: true, why: "Sternberg's practical intelligence is the ability to handle everyday, real-world tasks." },
      { text: "crystallized intelligence.", why: "Crystallized intelligence is accumulated knowledge, not Sternberg's practical category." }
    ],
    keyConcept: "Sternberg's practical intelligence"
  },
  {
    id: "2.8-4", topic: "2.8", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "As people age into later adulthood, which pattern is most typical?",
    stimulus: null,
    choices: [
      { text: "Fluid intelligence tends to decline while crystallized intelligence stays stable or rises.", correct: true, why: "Speed and novel reasoning (fluid) decline with age, while accumulated knowledge (crystallized) is maintained or grows." },
      { text: "Both fluid and crystallized intelligence decline sharply.", why: "Crystallized intelligence typically does not decline sharply and often increases." },
      { text: "Crystallized intelligence declines while fluid intelligence rises.", why: "This reverses the usual pattern; fluid declines and crystallized holds." },
      { text: "Neither type of intelligence changes with age.", why: "Fluid intelligence reliably changes (declines) with age." }
    ],
    keyConcept: "Fluid vs. crystallized intelligence"
  },
  {
    id: "2.8-5", topic: "2.8", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A bathroom scale reads exactly 5 pounds too high every single time you step on it. As a measure of your true weight, this scale is",
    stimulus: null,
    choices: [
      { text: "reliable but not valid.", correct: true, why: "Consistent identical readings make it reliable, but a constant 5-pound error means it does not measure true weight (not valid)." },
      { text: "valid but not reliable.", why: "It is not valid (always off by 5 lbs), though it is consistent, so 'valid but not reliable' is backwards." },
      { text: "both reliable and valid.", why: "A constant error means it is not valid, even though it is reliable." },
      { text: "neither reliable nor valid.", why: "It gives the same result every time, so it is reliable; 'neither' is wrong." }
    ],
    keyConcept: "Reliability vs. validity"
  },
  {
    id: "2.8-6", topic: "2.8", unit: 2, practice: 1, difficulty: "Moderate",
    stem: "A test designed to predict how well applicants will perform in a training program they have not yet begun is best described as a(n)",
    stimulus: null,
    choices: [
      { text: "achievement test.", why: "Achievement tests measure knowledge already learned, not future performance." },
      { text: "projective test.", why: "Projective tests assess personality via ambiguous stimuli, not aptitude for training." },
      { text: "reliability coefficient.", why: "That is a statistic describing consistency, not a type of test." },
      { text: "aptitude test.", correct: true, why: "Aptitude tests are designed to predict future performance or ability." }
    ],
    keyConcept: "Aptitude vs. achievement tests"
  },
  {
    id: "2.8-7", topic: "2.8", unit: 2, practice: 1, difficulty: "Difficult",
    stem: "Reminding students of a negative stereotype about their group right before a test causes them to score lower than when no such reminder is given. This effect is",
    stimulus: null,
    choices: [
      { text: "the Flynn effect.", why: "The Flynn effect is the generational rise in scores, not a within-test drop from a reminder." },
      { text: "stereotype threat.", correct: true, why: "Anxiety about confirming a negative stereotype can impair performance — stereotype threat." },
      { text: "standardization.", why: "Standardization is establishing norms, not a performance effect from stereotype cues." },
      { text: "the self-reference effect.", why: "The self-reference effect is a memory-encoding benefit, unrelated to stereotype-induced anxiety." }
    ],
    keyConcept: "Stereotype threat"
  },
  {
    id: "2.8-8", topic: "2.8", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "To check whether an intelligence test is reliable, a psychologist gives the same people the test twice, months apart, and correlates the two sets of scores. This assesses",
    stimulus: null,
    choices: [
      { text: "predictive validity.", why: "Predictive validity correlates scores with a future outcome, not the test with itself." },
      { text: "test-retest reliability.", correct: true, why: "Correlating the same test taken twice measures the consistency (reliability) of scores over time." },
      { text: "standardization.", why: "Standardization compares scores to a norm group, not the same test taken twice." },
      { text: "the representativeness heuristic.", why: "That is a judgment bias, unrelated to test reliability." }
    ],
    keyConcept: "Test-retest reliability"
  },
  {
    id: "2.8-9", topic: "2.8", unit: 2, practice: 2, difficulty: "Difficult",
    stem: "A college wants to know whether its admissions test has predictive validity. The best evidence would be",
    stimulus: null,
    choices: [
      { text: "a strong correlation between applicants' test scores and their later college GPAs.", correct: true, why: "Predictive validity is shown when scores correlate with the future outcome they are meant to predict." },
      { text: "that students who retake the test get similar scores.", why: "Consistent retest scores show reliability, not predictive validity." },
      { text: "that the test questions look relevant to professors.", why: "Appearing relevant is face validity, not evidence that scores predict outcomes." },
      { text: "that the average score matches the national average.", why: "Matching a norm relates to standardization, not to predicting future performance." }
    ],
    keyConcept: "Predictive validity"
  },
  {
    id: "2.8-10", topic: "2.8", unit: 2, practice: 2, difficulty: "Moderate",
    stem: "A researcher teaches one group of students that intelligence can grow with effort, gives another group no such message, and then tracks their grades. This study is testing",
    stimulus: null,
    choices: [
      { text: "the effect of a growth mindset on achievement.", correct: true, why: "Manipulating the belief that ability can grow and measuring grades tests the growth-mindset hypothesis." },
      { text: "the reliability of the grading system.", why: "The study varies mindset messaging, not the consistency of grading." },
      { text: "fluid versus crystallized intelligence.", why: "No comparison of novel reasoning versus accumulated knowledge is being made." },
      { text: "the misinformation effect.", why: "No misleading memory information is involved." }
    ],
    keyConcept: "Testing growth mindset"
  },
  {
    id: "2.8-11", topic: "2.8", unit: 2, practice: 3, difficulty: "Difficult",
    stem: "IQ scores form a normal curve with a mean of 100 and a standard deviation of 15. Based on the table, a person who scores 130 falls at about the",
    stimulus: {
      type: "table",
      caption: "IQ scores on a normal curve (mean = 100, SD = 15)",
      headers: ["IQ range", "Approx. % of people"],
      rows: [["85-115 (within 1 SD)", "68%"], ["70-130 (within 2 SD)", "95%"], ["Above 130", "about 2%"]],
      rowHeaders: true
    },
    choices: [
      { text: "98th percentile, since about 95% score below 130 and only ~2% score above it.", correct: true, why: "With ~95% within 2 SD and ~2% above 130, a score of 130 sits near the 98th percentile." },
      { text: "50th percentile, right at the average.", why: "The average is 100; 130 is two standard deviations above the mean, far above the 50th percentile." },
      { text: "68th percentile.", why: "The 68% figure refers to scores within 1 SD (85-115), not the standing of a 130." },
      { text: "2nd percentile, near the bottom.", why: "Only about 2% score above 130, so 130 is near the top, not the bottom." }
    ],
    keyConcept: "Normal curve and percentile rank"
  },
  {
    id: "2.8-12", topic: "2.8", unit: 2, practice: 3, difficulty: "Moderate",
    stem: "The scatterplot shows weekly study hours and test scores for eight students. The relationship is best described as",
    stimulus: {
      type: "scatter",
      caption: "Weekly study hours and test scores for eight students",
      points: [[1, 62], [2, 68], [3, 70], [4, 74], [5, 80], [6, 83], [7, 88], [8, 90]],
      xLabel: "Hours studied per week", yLabel: "Test score (%)",
      alt: "Points rise from lower-left to upper-right, showing a positive relationship."
    },
    choices: [
      { text: "a positive correlation: more study hours are associated with higher scores.", correct: true, why: "The points rise from lower-left to upper-right, indicating a positive correlation." },
      { text: "a negative correlation.", why: "A negative correlation would slope downward, but these points rise as study hours increase." },
      { text: "no correlation (r near 0).", why: "The clear upward trend indicates a strong relationship, not the absence of one." },
      { text: "proof that studying causes higher scores.", why: "Correlation alone cannot establish causation, even with a strong positive trend." }
    ],
    keyConcept: "Interpreting a correlation coefficient"
  }
];

