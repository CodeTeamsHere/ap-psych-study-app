/*
 * data/notes/unit-2.js — Study notes for Unit 2: Cognition.
 * Original explanatory content. LO/EK statements are paraphrased from the College Board
 * AP Psychology CED; LO letters and EK numbers follow the CED numbering convention.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.notes = window.APSYCH.notes || {};

window.APSYCH.notes["2.1"] = {
  topic: "2.1", unit: 2, title: "Perception",
  los: [
    {
      code: "2.1.A", text: "Explain how perceptual processes influence how people interpret sensory information.",
      eks: [
        { code: "2.1.A.1", text: "Perception can flow in two directions.", subs: [
          { code: "2.1.A.1.i", text: "Bottom-up processing builds a perception from the raw sensory data upward, starting with the stimulus itself." },
          { code: "2.1.A.1.ii", text: "Top-down processing uses prior knowledge, expectations, and schemas to interpret incoming sensory information." }
        ] },
        { code: "2.1.A.2", text: "A perceptual set is a mental predisposition, shaped by schemas and context, to perceive one thing rather than another." },
        { code: "2.1.A.3", text: "Attention shapes what we perceive: selective attention narrows awareness (the cocktail party effect), while inattentional blindness and change blindness show that unattended stimuli often go unnoticed." },
        { code: "2.1.A.4", text: "Gestalt principles describe how the mind organizes sensations into meaningful wholes: figure-ground, proximity, similarity, and closure." }
      ]
    },
    {
      code: "2.1.B", text: "Explain how depth perception and perceptual constancies allow people to perceive a stable, three-dimensional world.",
      eks: [
        { code: "2.1.B.1", text: "Binocular depth cues use both eyes: retinal (binocular) disparity and convergence." },
        { code: "2.1.B.2", text: "Monocular depth cues need only one eye: relative size, interposition, linear perspective, texture gradient, and relative clarity." },
        { code: "2.1.B.3", text: "Perceptual constancies let us perceive objects as unchanging in size, shape, and color/lightness even as the retinal image changes." }
      ]
    }
  ],
  bigIdea: "<p>Sensation (Topic 1.6) is the raw detection of stimuli; <b>perception</b> is how your brain <em>organizes and interprets</em> that raw data into a meaningful experience. Two directions of processing work together. <b>Bottom-up processing</b> starts with the incoming features and builds upward — useful when a stimulus is brand new. <b>Top-down processing</b> runs the other way: your <b>schemas</b>, expectations, and context tell you what to expect, which is why you can read a sloppy handwritten note or why a <b>perceptual set</b> makes you 'see' what you were primed to see.</p>" +
    "<p><b>Attention</b> is the gatekeeper. Because of <b>selective attention</b>, you consciously process only a sliver of everything hitting your senses (the <b>cocktail party effect</b> lets you tune into one voice, yet still catch your name across the room). When attention is elsewhere, <b>inattentional blindness</b> and <b>change blindness</b> let obvious things slip by unnoticed. The <b>Gestalt</b> psychologists showed the whole is different from the sum of its parts: we automatically group input using <b>figure-ground</b>, <b>proximity</b>, <b>similarity</b>, and <b>closure</b>. Finally, to build a 3-D world from flat retinal images we use <b>binocular cues</b> (retinal disparity, convergence) and <b>monocular cues</b> (relative size, interposition, linear perspective, texture gradient), and <b>perceptual constancies</b> keep objects looking stable in size, shape, and color even as the image on the retina shifts.</p>",
  vocab: [
    { term: "Bottom-up processing", def: "Building a perception from raw sensory input upward, beginning with the stimulus." },
    { term: "Top-down processing", def: "Using prior knowledge, expectations, and schemas to interpret sensory information." },
    { term: "Perceptual set", def: "A mental predisposition to perceive one thing and not another, based on expectations and context." },
    { term: "Schema", def: "A mental framework that organizes and interprets information, guiding top-down perception." },
    { term: "Selective attention", def: "Focusing conscious awareness on one particular stimulus while filtering out others." },
    { term: "Cocktail party effect", def: "The ability to attend to one voice among many, yet still notice personally significant stimuli (like your name)." },
    { term: "Inattentional blindness", def: "Failing to notice a fully visible object because attention is directed elsewhere." },
    { term: "Change blindness", def: "Failing to detect a change in the environment when attention is diverted." },
    { term: "Gestalt principles", def: "Rules (figure-ground, proximity, similarity, closure) by which the mind organizes sensations into whole forms." },
    { term: "Binocular cues", def: "Depth cues that require both eyes: retinal disparity and convergence." },
    { term: "Retinal disparity", def: "A binocular cue using the slightly different images from each eye to judge distance; greater difference means closer." },
    { term: "Monocular cues", def: "Depth cues available to each eye alone, such as relative size, interposition, linear perspective, and texture gradient." },
    { term: "Perceptual constancy", def: "Perceiving objects as stable in size, shape, and color despite changes in the retinal image." }
  ],
  researchers: [
    { name: "Max Wertheimer", contribution: "A founder of Gestalt psychology, which argued that we perceive organized wholes rather than isolated parts." }
  ],
  examples: [
    "Reading a text with autocorrect typos, you barely notice the errors because top-down processing fills in the expected words from context.",
    "In the famous 'invisible gorilla' style demonstration, viewers counting basketball passes fail to notice a person in a gorilla suit walk through — a striking case of inattentional blindness driven by selective attention.",
    "A movie feels three-dimensional on a flat screen because it packs monocular cues — objects that overlap others (interposition) and railroad tracks converging (linear perspective) read as depth even with one eye closed."
  ],
  mnemonic: [
    { device: "Top-down = Thoughts first; Bottom-up = Begins with the stimulus.", explain: "Top-down leads with prior knowledge; bottom-up leads with the raw data." },
    { device: "Gestalt = 'the whole is greater' — Proximity, Similarity, Closure, Figure-ground.", explain: "Gestalt principles group parts into a unified whole." }
  ],
  traps: [
    "Confusing sensation (raw detection) with perception (organization and interpretation).",
    "Mixing up bottom-up (data-driven) and top-down (knowledge-driven) processing.",
    "Assuming inattentional blindness means the eyes failed. The stimulus reaches the eyes fine; the failure is attentional.",
    "Calling retinal disparity a monocular cue. It is binocular because it depends on comparing both eyes' images.",
    "Treating a perceptual set as a permanent trait. It is a temporary expectation set by context or priming."
  ],
  exclusions: [
    "You are not required to memorize every named depth cue or Gestalt principle in exhaustive detail; focus on recognizing and applying the major ones.",
    "Detailed theories of color vision or fine visual-pathway anatomy are covered under sensation and are not the focus here."
  ]
};

window.APSYCH.notes["2.2"] = {
  topic: "2.2", unit: 2, title: "Thinking, Problem-Solving, Judgments, and Decision-Making",
  los: [
    {
      code: "2.2.A", text: "Explain how people use concepts and strategies to think and solve problems.",
      eks: [
        { code: "2.2.A.1", text: "Concepts are mental groupings; a prototype is the best, most typical example of a concept used to judge new cases." },
        { code: "2.2.A.2", text: "We update schemas through assimilation (fitting new info into existing schemas) and accommodation (adjusting schemas to fit new info)." },
        { code: "2.2.A.3", text: "Algorithms are step-by-step procedures that guarantee a solution; heuristics are faster mental shortcuts that are efficient but error-prone." },
        { code: "2.2.A.4", text: "Obstacles to problem-solving include mental set (sticking with past strategies), functional fixedness (seeing objects only in their usual use), and priming; insight is a sudden realization of a solution." },
        { code: "2.2.A.5", text: "Executive functions guide goal-directed thinking; convergent thinking narrows to one answer while divergent thinking generates many, supporting creativity." }
      ]
    },
    {
      code: "2.2.B", text: "Explain how judgments and decisions can be systematically biased.",
      eks: [
        { code: "2.2.B.1", text: "The representativeness heuristic judges likelihood by resemblance to a prototype, often ignoring base rates." },
        { code: "2.2.B.2", text: "The availability heuristic judges likelihood by how easily examples come to mind." },
        { code: "2.2.B.3", text: "Other biases include overconfidence, framing effects, the gambler's fallacy, and the sunk-cost fallacy." }
      ]
    }
  ],
  bigIdea: "<p>To think efficiently, the mind organizes knowledge into <b>concepts</b> (mental categories) anchored by <b>prototypes</b> (the best example — a robin is a prototypical 'bird,' a penguin is not). When we solve problems, we can use an <b>algorithm</b>, a slow but foolproof step-by-step method, or a <b>heuristic</b>, a fast shortcut that usually works but can misfire. Sometimes solutions arrive as sudden <b>insight</b>. Progress gets blocked by a <b>mental set</b> (defaulting to strategies that worked before) or <b>functional fixedness</b> (seeing a box only as a container, never as a shelf).</p>" +
    "<p>Two shortcuts drive most predictable errors. The <b>representativeness heuristic</b> judges how likely something is by how well it matches a stereotype or prototype, which makes people ignore <b>base rates</b> (assuming a quiet reader is 'probably a librarian' when there are far more salespeople). The <b>availability heuristic</b> judges likelihood by how easily examples spring to mind, so vivid news coverage makes rare events feel common. Add <b>overconfidence</b>, <b>framing</b> (the same facts stated as '90% survive' vs. '10% die' feel different), the <b>gambler's fallacy</b> (thinking a coin is 'due' for heads), and the <b>sunk-cost fallacy</b> (throwing good money after bad), and you have the toolkit Kahneman and Tversky used to show that human judgment is systematically, not randomly, biased.</p>",
  vocab: [
    { term: "Concept", def: "A mental grouping of similar objects, events, ideas, or people." },
    { term: "Prototype", def: "The best or most typical example of a concept, used as a mental benchmark." },
    { term: "Algorithm", def: "A methodical, step-by-step procedure that guarantees a solution but can be slow." },
    { term: "Heuristic", def: "A fast mental shortcut for problem-solving or judgment that is efficient but error-prone." },
    { term: "Representativeness heuristic", def: "Judging likelihood by how well something matches a prototype, often neglecting base rates." },
    { term: "Availability heuristic", def: "Judging likelihood by how readily instances come to mind." },
    { term: "Mental set", def: "The tendency to approach a problem with a strategy that worked in the past." },
    { term: "Functional fixedness", def: "The inability to see an object as useful for anything other than its usual function." },
    { term: "Insight", def: "A sudden, novel realization of a problem's solution." },
    { term: "Convergent vs. divergent thinking", def: "Convergent narrows to a single best answer; divergent generates many possibilities and fuels creativity." },
    { term: "Framing", def: "How an issue is worded or presented, which can sway decisions even when the facts are identical." },
    { term: "Gambler's fallacy", def: "The mistaken belief that a random event is 'due' based on prior independent outcomes." },
    { term: "Sunk-cost fallacy", def: "Continuing an endeavor because of already-invested resources rather than future value." }
  ],
  researchers: [
    { name: "Amos Tversky & Daniel Kahneman", contribution: "Demonstrated that people rely on heuristics (representativeness, availability) and are swayed by framing, producing systematic judgment errors." }
  ],
  examples: [
    "Told that 'Steve is shy, tidy, and detail-oriented,' most people guess he is a librarian rather than a farmer — the representativeness heuristic overriding the far higher base rate of farmers.",
    "After seeing news coverage of a plane crash, travelers overestimate the danger of flying and drive instead — the availability heuristic making a vivid but rare event feel common.",
    "A person keeps paying to repair an old car because they have 'already put so much into it' — the sunk-cost fallacy, since past spending should not dictate the future decision."
  ],
  mnemonic: {
    device: "Availability = what's Available in memory; Representativeness = how well it Resembles the stereotype.",
    explain: "Availability keys on ease of recall; representativeness keys on resemblance to a prototype."
  },
  traps: [
    "Swapping the two big heuristics: availability = ease of recall; representativeness = match to a prototype/stereotype.",
    "Confusing an algorithm (guaranteed, exhaustive) with a heuristic (shortcut, fallible).",
    "Mixing up mental set (over-relying on a past strategy) with functional fixedness (fixating on an object's usual use).",
    "Thinking framing changes the facts. Framing changes only the presentation, yet still shifts choices.",
    "Treating the gambler's fallacy as valid. Independent events have no memory; a fair coin is never 'due.'"
  ],
  exclusions: [
    "Formal logic notation and detailed decision-theory mathematics are beyond the scope; focus on recognizing and applying the named biases and strategies."
  ]
};

window.APSYCH.notes["2.3"] = {
  topic: "2.3", unit: 2, title: "Introduction to Memory",
  los: [
    {
      code: "2.3.A", text: "Explain the major models that describe how memory operates.",
      eks: [
        { code: "2.3.A.1", text: "The three-box (Atkinson-Shiffrin) model describes memory as a flow through sensory memory, short-term memory, and long-term memory.", subs: [
          { code: "2.3.A.1.i", text: "Information moves through three stages: encoding (getting it in), storage (keeping it), and retrieval (getting it back out)." }
        ] },
        { code: "2.3.A.2", text: "The working memory model (Baddeley & Hitch) describes active short-term processing using a central executive, a phonological loop, and a visuospatial sketchpad." },
        { code: "2.3.A.3", text: "The levels-of-processing model holds that deep (semantic) processing produces stronger memories than shallow (structural or phonemic) processing." }
      ]
    },
    {
      code: "2.3.B", text: "Explain the different types of memory and their characteristics.",
      eks: [
        { code: "2.3.B.1", text: "Explicit (declarative) memory is consciously recalled and includes episodic (events) and semantic (facts) memory." },
        { code: "2.3.B.2", text: "Implicit (nondeclarative) memory is unconscious and includes procedural memory (skills) and effects of conditioning." },
        { code: "2.3.B.3", text: "Sensory memory holds fleeting impressions: iconic (visual) and echoic (auditory) memory." },
        { code: "2.3.B.4", text: "Processing can be automatic (effortless, e.g., space, time, frequency) or effortful (requiring attention and rehearsal)." }
      ]
    }
  ],
  bigIdea: "<p>Memory is not one thing but a <b>system</b> with three jobs: <b>encoding</b> (getting information in), <b>storage</b> (holding it), and <b>retrieval</b> (getting it back out). The classic <b>three-box / Atkinson-Shiffrin model</b> pictures information flowing from brief <b>sensory memory</b>, into limited <b>short-term memory</b>, and, if rehearsed, into durable <b>long-term memory</b>. A more active update, the <b>working memory model</b> (Baddeley & Hitch), replaces passive short-term storage with a mental workspace: a <b>central executive</b> directs attention while a <b>phonological loop</b> juggles sounds/words and a <b>visuospatial sketchpad</b> handles images.</p>" +
    "<p>How <em>deeply</em> you process matters. The <b>levels-of-processing model</b> shows that <b>deep (semantic)</b> encoding — thinking about meaning — builds far stronger memories than <b>shallow</b> encoding of how a word looks or sounds. Memories also come in types. <b>Explicit (declarative)</b> memories are consciously known and split into <b>episodic</b> (personal events) and <b>semantic</b> (general facts). <b>Implicit (nondeclarative)</b> memories operate without awareness, especially <b>procedural</b> skills like riding a bike. And the whole system begins with <b>sensory memory</b> — a fraction-of-a-second photographic <b>iconic</b> store and a few-second <b>echoic</b> (auditory) store.</p>",
  vocab: [
    { term: "Encoding / Storage / Retrieval", def: "The three core memory processes: getting information in, holding it, and getting it back out." },
    { term: "Three-box (Atkinson-Shiffrin) model", def: "A model of memory as a flow through sensory, short-term, and long-term stores." },
    { term: "Sensory memory", def: "A brief, large-capacity store of raw sensory impressions." },
    { term: "Short-term memory", def: "A limited store holding a few items for about 20-30 seconds without rehearsal." },
    { term: "Long-term memory", def: "The relatively permanent, essentially unlimited store of knowledge and experience." },
    { term: "Working memory model", def: "Baddeley & Hitch's model of active processing via a central executive, phonological loop, and visuospatial sketchpad." },
    { term: "Levels of processing", def: "The idea that deep, meaningful (semantic) encoding creates stronger memories than shallow encoding." },
    { term: "Explicit (declarative) memory", def: "Consciously retrieved memory of facts (semantic) and experiences (episodic)." },
    { term: "Implicit (nondeclarative) memory", def: "Unconscious memory, including procedural skills and conditioned responses." },
    { term: "Episodic vs. semantic memory", def: "Episodic = personally experienced events; semantic = general knowledge and facts." },
    { term: "Iconic vs. echoic memory", def: "Iconic = a momentary visual sensory memory; echoic = a brief (a few seconds) auditory sensory memory." },
    { term: "Automatic vs. effortful processing", def: "Automatic encoding happens without conscious effort; effortful encoding requires attention and rehearsal." }
  ],
  researchers: [
    { name: "Richard Atkinson & Richard Shiffrin", contribution: "Proposed the three-stage (sensory, short-term, long-term) model of memory." },
    { name: "Alan Baddeley & Graham Hitch", contribution: "Developed the working memory model, reframing short-term memory as an active processing system." },
    { name: "Fergus Craik & Robert Lockhart", contribution: "Proposed the levels-of-processing framework: deeper (semantic) processing yields better memory." }
  ],
  examples: [
    "Recalling what you ate for breakfast is episodic (explicit) memory; knowing that Paris is the capital of France is semantic (explicit); tying your shoes without thinking is procedural (implicit).",
    "Repeating a phone number to yourself uses the phonological loop of working memory; picturing a route through your house uses the visuospatial sketchpad."
  ],
  mnemonic: [
    { device: "Encode → Store → Retrieve = 'in, keep, out.'", explain: "The three memory processes in order: get it in, hold it, pull it back out." },
    { device: "EpisoDic = Diary (events); SemanTic = Textbook (facts).", explain: "Episodic memory is your personal diary; semantic memory is your mental textbook." }
  ],
  traps: [
    "Confusing the three processes (encoding, storage, retrieval) with the three stores (sensory, short-term, long-term).",
    "Treating working memory as just a synonym for short-term memory. Working memory adds active manipulation, not just holding.",
    "Swapping episodic (events) and semantic (facts) memory.",
    "Mixing up iconic (visual) and echoic (auditory) sensory memory.",
    "Assuming all long-term memory is conscious. Implicit/procedural memories are long-term but unconscious."
  ],
  exclusions: [
    "You are not required to know detailed neural-network or connectionist models of memory; focus on the three-box, working memory, and levels-of-processing frameworks."
  ]
};

window.APSYCH.notes["2.4"] = {
  topic: "2.4", unit: 2, title: "Encoding Memories",
  los: [
    {
      code: "2.4.A", text: "Explain how information is encoded into memory and which strategies improve encoding.",
      eks: [
        { code: "2.4.A.1", text: "Encoding can be effortful (requiring attention and active rehearsal) or automatic (effortless processing of information like space, time, and frequency)." },
        { code: "2.4.A.2", text: "Mnemonic devices (such as the method of loci and acronyms), chunking, and organizing material into hierarchies or categories improve encoding." },
        { code: "2.4.A.3", text: "The spacing effect shows that distributed practice produces better long-term retention than massed practice (cramming)." },
        { code: "2.4.A.4", text: "Deep (semantic) processing of meaning encodes information more durably than shallow processing; the self-reference effect strengthens encoding further." },
        { code: "2.4.A.5", text: "The serial position effect (primacy plus recency) describes superior recall for items at the beginning and end of a list." }
      ]
    }
  ],
  bigIdea: "<p><b>Encoding</b> is the front door of memory — getting information in. Some encoding is <b>automatic</b> (you effortlessly register where you sat or what happened this morning), but most academic learning is <b>effortful</b>, requiring attention and active <b>rehearsal</b>. The good news: encoding can be made dramatically more efficient. <b>Chunking</b> groups items into meaningful units (a phone number as three chunks, not ten digits), <b>mnemonic devices</b> like the <b>method of loci</b> hang new facts on vivid imagery, and organizing material into <b>hierarchies</b> gives memories a structure to hang on.</p>" +
    "<p><em>How</em> and <em>when</em> you study matters as much as how long. The <b>levels-of-processing</b> principle says <b>deep (semantic)</b> encoding — focusing on meaning — beats shallow encoding of appearance or sound, and the <b>self-reference effect</b> (relating material to yourself) is one of the deepest forms of all. The <b>spacing effect</b> is the most exam-relevant finding here: <b>distributed practice</b> (spreading study over days) crushes <b>massed practice</b> (cramming) for long-term retention. Finally, the <b>serial position effect</b> shows we best remember the <b>first</b> items (<b>primacy</b>, because they got the most rehearsal into long-term memory) and the <b>last</b> items (<b>recency</b>, because they are still in short-term memory), while the middle sags.</p>",
  vocab: [
    { term: "Encoding", def: "The process of getting information into the memory system." },
    { term: "Effortful processing", def: "Encoding that requires attention and conscious effort, such as rehearsal." },
    { term: "Automatic processing", def: "Effortless encoding of information such as space, time, and frequency." },
    { term: "Chunking", def: "Organizing items into familiar, manageable units to expand what short-term memory can hold." },
    { term: "Mnemonic devices", def: "Memory aids, such as the method of loci or acronyms, often using imagery and organization." },
    { term: "Method of loci", def: "A mnemonic that associates items to be remembered with locations along a familiar route." },
    { term: "Hierarchies", def: "Organizing information into broad categories subdivided into finer concepts to aid encoding and retrieval." },
    { term: "Spacing effect", def: "The tendency for distributed study over time to yield better long-term retention than massed study." },
    { term: "Distributed vs. massed practice", def: "Distributed = spreading study across sessions; massed = cramming it all at once." },
    { term: "Deep (semantic) processing", def: "Encoding based on meaning, which produces stronger, longer-lasting memories than shallow encoding." },
    { term: "Self-reference effect", def: "Better memory for information relevant to oneself, a very deep form of encoding." },
    { term: "Serial position effect", def: "The tendency to best recall the first (primacy) and last (recency) items in a list." }
  ],
  researchers: [
    { name: "Hermann Ebbinghaus", contribution: "Pioneered experimental memory research, documenting the benefits of spaced repetition and overlearning." }
  ],
  examples: [
    "A student who studies vocabulary for 20 minutes on five different days remembers far more on the final than one who crams 100 minutes the night before — the spacing effect in action.",
    "Memorizing a grocery list by picturing each item in a room of your house (method of loci) works because vivid imagery and organization deepen encoding.",
    "After hearing a 15-word list once, most people recall the first few and last few words best but forget the middle — the serial position effect."
  ],
  mnemonic: {
    device: "Space it, don't cram it; go Deep, not shallow.",
    explain: "Two research-backed rules for encoding: distribute practice over time and process meaning, not surface features."
  },
  traps: [
    "Confusing the spacing effect (distributed practice wins) with simply studying longer. It is about timing, not total hours.",
    "Assuming rereading (shallow) equals deep processing. Elaborating on meaning encodes far better than passive rereading.",
    "Mixing up primacy (first items, via long-term memory) and recency (last items, via short-term memory) within the serial position effect.",
    "Thinking chunking increases short-term memory's item limit. It repackages items into fewer, larger units.",
    "Believing cramming and distributed practice produce equal long-term retention. They do not."
  ],
  exclusions: [
    "Memorizing exhaustive lists of every mnemonic technique is not required; understand the principle that organization and imagery improve encoding."
  ]
};

window.APSYCH.notes["2.5"] = {
  topic: "2.5", unit: 2, title: "Storing Memories",
  los: [
    {
      code: "2.5.A", text: "Explain how memories are stored across the components of the memory system.",
      eks: [
        { code: "2.5.A.1", text: "The stores differ in capacity and duration: sensory memory is large but lasts under a few seconds; short-term memory holds about seven (plus or minus two) items for roughly 20-30 seconds; long-term memory is essentially unlimited and can be permanent." },
        { code: "2.5.A.2", text: "Working memory actively holds and manipulates a limited amount of information during a task." },
        { code: "2.5.A.3", text: "Long-term potentiation (LTP) is the strengthening of neural connections that forms the biological basis of long-term memory." },
        { code: "2.5.A.4", text: "Memory consolidation stabilizes new memories over time, aided by sleep." },
        { code: "2.5.A.5", text: "Different brain regions store different memories: the hippocampus is central to forming explicit memories, the cerebellum to implicit/procedural memories, and the amygdala to emotional memories." }
      ]
    }
  ],
  bigIdea: "<p>Each store has a very different <b>capacity</b> and <b>duration</b>. <b>Sensory memory</b> is huge but vanishes almost instantly (iconic visual memory lasts a fraction of a second; echoic auditory memory a few seconds). <b>Short-term memory</b> is famously limited: George Miller's <b>'magic number seven, plus or minus two'</b> items, held only about 20-30 seconds without rehearsal. <b>Long-term memory</b>, by contrast, is effectively <b>unlimited</b> and can last a lifetime. <b>Working memory</b> is the active version of short-term storage, holding and manipulating a small amount of information while you think.</p>" +
    "<p>Storage is physical. Repeated stimulation strengthens the connections between neurons through <b>long-term potentiation (LTP)</b>, widely regarded as the neural basis of learning and memory. New memories also need <b>consolidation</b> — a stabilizing process, heavily supported by sleep, that moves fragile new traces into durable storage. And memory is not filed in one place: the <b>hippocampus</b> is essential for forming new <b>explicit</b> memories, the <b>cerebellum</b> stores <b>implicit/procedural</b> and classically conditioned memories, and the <b>amygdala</b> tags <b>emotional</b> memories, which is why frightening or thrilling events are often remembered so vividly.</p>",
  vocab: [
    { term: "Sensory memory capacity/duration", def: "Very large capacity but extremely brief duration (a fraction of a second for iconic, a few seconds for echoic)." },
    { term: "Short-term memory capacity", def: "About seven items, plus or minus two (Miller's magic number), for roughly 20-30 seconds without rehearsal." },
    { term: "Long-term memory", def: "A store of essentially unlimited capacity that can hold information permanently." },
    { term: "Working memory", def: "The active holding and manipulation of a limited amount of information during a cognitive task." },
    { term: "Long-term potentiation (LTP)", def: "The lasting strengthening of neural connections with repeated stimulation; the biological basis of memory." },
    { term: "Memory consolidation", def: "The process, aided by sleep, that stabilizes new memories into durable long-term storage." },
    { term: "Hippocampus", def: "Brain structure essential for forming and consolidating new explicit (declarative) memories." },
    { term: "Cerebellum", def: "Brain structure that stores implicit/procedural memories and classically conditioned responses." },
    { term: "Amygdala", def: "Brain structure that encodes the emotional significance of memories, strengthening emotional ones." },
    { term: "Flashbulb memory", def: "A vivid, emotionally charged memory of a surprising, significant moment, often felt as highly accurate." }
  ],
  researchers: [
    { name: "George A. Miller", contribution: "Proposed that short-term memory holds about seven items, plus or minus two (the 'magic number')." },
    { name: "George Sperling", contribution: "Demonstrated the large capacity but rapid decay of iconic (visual) sensory memory using partial-report experiments." }
  ],
  examples: [
    "You can hold a 7-digit phone number just long enough to dial it, but a 10-digit number usually requires chunking (area code as one unit) to fit short-term memory.",
    "A person may vividly recall exactly where they were during a shocking national event — a flashbulb memory — because the amygdala tagged the moment with strong emotion.",
    "After a hippocampal injury a patient can still learn new motor skills (cerebellum-based procedural memory) even though they cannot form new conscious memories of learning them."
  ],
  mnemonic: [
    { device: "Miller's Magic 7 (±2).", explain: "Short-term memory holds about seven items, give or take two." },
    { device: "Hippocampus = explicit; Cerebellum = skills; Amygdala = emotion.", explain: "Match each structure to the memory type it stores." }
  ],
  traps: [
    "Overstating short-term memory duration. Without rehearsal it fades in roughly 20-30 seconds.",
    "Confusing capacity with duration when comparing the stores.",
    "Saying the hippocampus 'stores' long-term memories permanently. It forms and consolidates them; consolidated memories reside in the cortex.",
    "Assuming emotional (flashbulb) memories are perfectly accurate. They feel vivid but are still subject to distortion.",
    "Mixing up the cerebellum (implicit/procedural) and hippocampus (explicit) roles in storage."
  ],
  exclusions: [
    "You do not need the molecular biochemistry of long-term potentiation; understand it as the strengthening of neural connections underlying memory."
  ]
};

window.APSYCH.notes["2.6"] = {
  topic: "2.6", unit: 2, title: "Retrieving Memories",
  los: [
    {
      code: "2.6.A", text: "Explain how stored memories are retrieved and what improves retrieval.",
      eks: [
        { code: "2.6.A.1", text: "Recall requires producing information without cues (a fill-in-the-blank), whereas recognition requires only identifying it among options (multiple choice)." },
        { code: "2.6.A.2", text: "Retrieval cues, including priming, are associations that help access stored memories." },
        { code: "2.6.A.3", text: "Encoding specificity underlies context-dependent memory (matching external context) and state-dependent and mood-congruent memory (matching internal state or mood)." },
        { code: "2.6.A.4", text: "The testing effect (retrieval practice) shows that actively retrieving information strengthens memory more than restudying it." },
        { code: "2.6.A.5", text: "Metacognition (thinking about one's own knowing) shapes how people monitor and judge their memory." }
      ]
    }
  ],
  bigIdea: "<p>A memory is useless if you cannot get it back out — that is <b>retrieval</b>. It comes in two difficulties. <b>Recall</b> means producing information from scratch (an essay or fill-in-the-blank), while <b>recognition</b> means merely identifying the right answer among options (multiple choice), which is why recognition usually feels easier. Retrieval is powered by <b>retrieval cues</b>: associations that lead back to a stored memory, sometimes triggered unconsciously through <b>priming</b>.</p>" +
    "<p>The <b>encoding specificity principle</b> explains why cues work: we retrieve best when the retrieval situation matches the encoding situation. Matching the external setting gives <b>context-dependent memory</b> (recalling more in the room where you studied); matching your internal condition gives <b>state-dependent memory</b>, and matching your emotion gives <b>mood-congruent memory</b> (a sad mood cues sad memories). The single most useful study takeaway is the <b>testing effect</b>, also called <b>retrieval practice</b>: actively pulling information out (self-quizzing) builds far stronger memory than passively rereading it. Wrapped around all of this is <b>metacognition</b> — your awareness and judgment of what you actually know, which is often overconfident.</p>",
  vocab: [
    { term: "Retrieval", def: "The process of getting stored information back out of memory." },
    { term: "Recall", def: "Retrieving information without cues, as in a fill-in-the-blank or essay question." },
    { term: "Recognition", def: "Identifying previously learned information among options, as in multiple choice." },
    { term: "Retrieval cue", def: "Any stimulus (word, place, emotion) associated with a memory that helps bring it to mind." },
    { term: "Priming", def: "The activation, often unconscious, of associations that predispose retrieval or perception." },
    { term: "Encoding specificity principle", def: "Memory is best when retrieval conditions match the conditions present at encoding." },
    { term: "Context-dependent memory", def: "Improved retrieval when the external environment matches the one at encoding." },
    { term: "State-dependent memory", def: "Improved retrieval when one's internal physiological state matches that at encoding." },
    { term: "Mood-congruent memory", def: "The tendency to retrieve memories consistent with one's current mood." },
    { term: "Testing effect (retrieval practice)", def: "Enhanced long-term memory from actively retrieving information rather than restudying it." },
    { term: "Metacognition", def: "Thinking about and monitoring one's own thinking and knowledge." },
    { term: "Tip-of-the-tongue phenomenon", def: "The temporary inability to retrieve a word that feels just out of reach, a retrieval failure." }
  ],
  researchers: [
    { name: "Endel Tulving", contribution: "Advanced the encoding specificity principle and the distinction between recall and recognition and between episodic and semantic memory." }
  ],
  examples: [
    "A multiple-choice question is often easier than an essay on the same material because it requires only recognition, not full recall.",
    "Divers who learned a word list underwater recalled more of it underwater than on land — a classic demonstration of context-dependent memory.",
    "Students who quiz themselves on flashcards (retrieval practice) outperform students who simply reread their notes the same number of times — the testing effect."
  ],
  mnemonic: [
    { device: "Recognition = Re-cognize (you just have to know it when you see it).", explain: "Recognition only requires identifying the answer; recall requires generating it." },
    { device: "Context cues: same place, same case.", explain: "Matching the encoding context (place, state, mood) boosts retrieval." }
  ],
  traps: [
    "Confusing recall (produce it) with recognition (identify it). Recognition tasks are generally easier.",
    "Treating the testing effect as mere 'test anxiety' practice. It is a genuine memory-strengthening effect of retrieval.",
    "Mixing up context-dependent (external setting) and state-dependent (internal condition) memory.",
    "Assuming a retrieval failure (tip-of-the-tongue) means the memory is gone. The information is stored but momentarily inaccessible.",
    "Thinking rereading equals retrieval practice. Only active retrieval produces the testing effect."
  ],
  exclusions: [
    "Detailed spreading-activation network diagrams are not required; focus on cues, encoding specificity, and the recall/recognition distinction."
  ]
};

window.APSYCH.notes["2.7"] = {
  topic: "2.7", unit: 2, title: "Forgetting and Other Memory Challenges",
  los: [
    {
      code: "2.7.A", text: "Explain why forgetting occurs and how memory can fail.",
      eks: [
        { code: "2.7.A.1", text: "Forgetting can result from encoding failure (information never entered long-term memory) or storage decay, as illustrated by Ebbinghaus's forgetting curve." },
        { code: "2.7.A.2", text: "Retrieval failure includes the tip-of-the-tongue phenomenon and interference.", subs: [
          { code: "2.7.A.2.i", text: "Proactive interference is when older learning disrupts the recall of newer learning." },
          { code: "2.7.A.2.ii", text: "Retroactive interference is when newer learning disrupts the recall of older learning." }
        ] },
        { code: "2.7.A.3", text: "Motivated forgetting (repression, in psychodynamic theory) proposes that people block threatening memories from awareness." },
        { code: "2.7.A.4", text: "Amnesia includes anterograde amnesia (cannot form new memories) and retrograde amnesia (cannot recall old memories); Alzheimer's disease progressively destroys memory." }
      ]
    },
    {
      code: "2.7.B", text: "Explain how memory is reconstructed and can be distorted.",
      eks: [
        { code: "2.7.B.1", text: "Memory is reconstructive, so recalling a memory can alter it; the misinformation effect shows that misleading post-event information distorts memory (Loftus)." },
        { code: "2.7.B.2", text: "Source amnesia (source-monitoring error) is misattributing where a memory came from; imagination inflation and constructive processes can create false memories." }
      ]
    }
  ],
  bigIdea: "<p>Forgetting is not one failure but several. Sometimes information never got encoded in the first place (<b>encoding failure</b> — you can't recall a penny's exact design because you never truly attended to it). Sometimes stored memories fade with time, as <b>Ebbinghaus's forgetting curve</b> shows: retention drops sharply at first, then levels off. Often the memory is intact but temporarily inaccessible — a <b>retrieval failure</b> like the <b>tip-of-the-tongue</b> feeling. A major cause of retrieval failure is <b>interference</b>: <b>proactive</b> interference is when <em>old</em> learning blocks <em>new</em> (your old password keeps coming to mind), while <b>retroactive</b> interference is when <em>new</em> learning blocks <em>old</em> (this year's schedule crowds out last year's).</p>" +
    "<p>Memory is also fragile because it is <b>reconstructive</b> — each time you recall something, you rebuild rather than replay it, leaving room for distortion. Elizabeth <b>Loftus</b> showed the <b>misinformation effect</b>: misleading information encountered <em>after</em> an event gets woven into the memory (witnesses who heard cars 'smashed' rather than 'hit' later 'remembered' broken glass that was never there). <b>Source amnesia</b> misremembers where information came from, and <b>imagination inflation</b> can grow entirely <b>false memories</b>. On the clinical side, <b>anterograde amnesia</b> blocks forming new memories, <b>retrograde amnesia</b> erases old ones, and <b>Alzheimer's disease</b> progressively destroys memory and cognition.</p>",
  vocab: [
    { term: "Encoding failure", def: "Forgetting because information never entered long-term memory in the first place." },
    { term: "Storage decay", def: "The fading of stored memories over time, as depicted by the forgetting curve." },
    { term: "Forgetting curve", def: "Ebbinghaus's finding that retention drops rapidly at first and then levels off." },
    { term: "Retrieval failure", def: "An inability to access a stored memory, as in the tip-of-the-tongue phenomenon." },
    { term: "Proactive interference", def: "When previously learned information disrupts the recall of newly learned information (old blocks new)." },
    { term: "Retroactive interference", def: "When newly learned information disrupts the recall of previously learned information (new blocks old)." },
    { term: "Repression (motivated forgetting)", def: "In psychodynamic theory, unconsciously blocking anxiety-provoking memories from awareness." },
    { term: "Anterograde amnesia", def: "The inability to form new long-term memories after an injury or onset." },
    { term: "Retrograde amnesia", def: "The inability to retrieve memories formed before an injury or onset." },
    { term: "Misinformation effect", def: "The distortion of a memory by misleading information encountered after the event (Loftus)." },
    { term: "Source amnesia (source monitoring error)", def: "Misattributing the origin of a memory to the wrong source." },
    { term: "Constructive memory / imagination inflation", def: "Memory is rebuilt at recall, so imagination and suggestion can create or inflate false memories." }
  ],
  researchers: [
    { name: "Hermann Ebbinghaus", contribution: "Charted the forgetting curve, showing that most forgetting happens soon after learning, then slows." },
    { name: "Elizabeth Loftus", contribution: "Demonstrated the misinformation effect and the ease of creating false memories, with major implications for eyewitness testimony." }
  ],
  examples: [
    "After switching to a new phone number, you keep reciting the old one when asked — proactive interference, where older learning intrudes on the new.",
    "Eyewitnesses asked how fast cars were going when they 'smashed' (vs. 'hit') gave higher speed estimates and were more likely to falsely recall broken glass — the misinformation effect.",
    "The patient known as H.M., after hippocampal surgery, could not form new conscious memories (anterograde amnesia) yet retained memories from before the operation."
  ],
  mnemonic: [
    { device: "PRO-active = the PRIOR (old) stuff interferes forward; RETRO = the RECENT (new) stuff interferes backward.", explain: "Proactive: old disrupts new. Retroactive: new disrupts old." },
    { device: "anteroGrade = can't make new memories Going forward.", explain: "Anterograde amnesia blocks new memory formation after the onset." }
  ],
  traps: [
    "Swapping proactive (old blocks new) and retroactive (new blocks old) interference.",
    "Confusing anterograde (no new memories) with retrograde (lost old memories) amnesia.",
    "Treating memory as a video recording. It is reconstructive and prone to distortion.",
    "Assuming vivid, confident memories must be accurate. The misinformation effect shows confidence does not guarantee accuracy.",
    "Calling encoding failure a type of decay. In encoding failure the memory was never stored, so it cannot 'decay.'"
  ],
  exclusions: [
    "Debates over recovered-memory therapy and detailed clinical amnesia subtypes go beyond the required scope; focus on the core mechanisms of forgetting and distortion."
  ]
};

window.APSYCH.notes["2.8"] = {
  topic: "2.8", unit: 2, title: "Intelligence and Achievement",
  los: [
    {
      code: "2.8.A", text: "Explain the major theories and definitions of intelligence.",
      eks: [
        { code: "2.8.A.1", text: "Spearman proposed a general intelligence factor (g) underlying performance across mental tasks." },
        { code: "2.8.A.2", text: "Gardner's theory of multiple intelligences and Sternberg's triarchic theory (analytical, creative, practical) argue intelligence is not a single ability." },
        { code: "2.8.A.3", text: "Emotional intelligence is the ability to perceive, understand, manage, and use emotions." },
        { code: "2.8.A.4", text: "Fluid intelligence (reasoning about novel problems) tends to decline with age, while crystallized intelligence (accumulated knowledge) tends to hold or rise." }
      ]
    },
    {
      code: "2.8.B", text: "Explain how intelligence and achievement are measured and evaluated for quality.",
      eks: [
        { code: "2.8.B.1", text: "Aptitude tests predict future performance, while achievement tests measure what has already been learned." },
        { code: "2.8.B.2", text: "Good tests are standardized and yield a normal distribution; they must be reliable (consistent, e.g., test-retest and split-half) and valid (measuring what they claim, e.g., construct and predictive validity)." },
        { code: "2.8.B.3", text: "The Flynn effect is the rise in average intelligence-test scores over generations." },
        { code: "2.8.B.4", text: "Stereotype threat can depress performance, and a growth mindset (vs. fixed mindset) supports achievement." }
      ]
    }
  ],
  bigIdea: "<p>Psychologists disagree about what <b>intelligence</b> even is. <b>Spearman</b> argued for a single underlying <b>general intelligence (g)</b> — people good at one mental task tend to be good at others. Others fractured that idea: <b>Gardner's multiple intelligences</b> proposes distinct kinds (linguistic, spatial, musical, and more), <b>Sternberg's triarchic theory</b> names <b>analytical</b>, <b>creative</b>, and <b>practical</b> intelligence, and <b>emotional intelligence</b> adds the ability to read and manage emotions. Age matters too: <b>fluid intelligence</b> (quick reasoning about novel problems) declines in later adulthood, while <b>crystallized intelligence</b> (accumulated knowledge and vocabulary) stays strong or grows.</p>" +
    "<p>Measuring intelligence requires good tests, and two properties are non-negotiable. <b>Reliability</b> means the test is <em>consistent</em> (a person scores similarly on <b>test-retest</b> or across <b>split-half</b> comparisons). <b>Validity</b> means it measures <em>what it claims</em> to (<b>predictive validity</b> if scores forecast real outcomes). A test must be <b>standardized</b> against a representative group, producing scores that fall along the bell-shaped <b>normal curve</b> (mean IQ set to 100). Watch for two subtler ideas: the <b>Flynn effect</b> (average scores have risen over generations) and <b>stereotype threat</b> (anxiety about confirming a negative stereotype can lower performance). Finally, Carol Dweck's work shows a <b>growth mindset</b> — believing ability can grow with effort — supports achievement better than a <b>fixed mindset</b>. Distinguish <b>aptitude tests</b> (predict future ability) from <b>achievement tests</b> (measure current knowledge).</p>",
  vocab: [
    { term: "General intelligence (g)", def: "Spearman's proposed single factor underlying performance across diverse mental tasks." },
    { term: "Multiple intelligences", def: "Gardner's theory that intelligence comprises several independent abilities rather than one." },
    { term: "Triarchic theory", def: "Sternberg's model of three intelligences: analytical, creative, and practical." },
    { term: "Emotional intelligence", def: "The ability to perceive, understand, manage, and use emotions effectively." },
    { term: "Fluid vs. crystallized intelligence", def: "Fluid = reasoning about novel problems (declines with age); crystallized = accumulated knowledge (stable or rising)." },
    { term: "Aptitude vs. achievement test", def: "Aptitude predicts future performance; achievement measures what has already been learned." },
    { term: "Standardization", def: "Defining meaningful scores by comparison to a pretested, representative sample." },
    { term: "Normal curve", def: "The symmetric, bell-shaped distribution where most scores cluster near the mean (IQ mean = 100)." },
    { term: "Reliability", def: "The consistency of a test's results, assessed by test-retest and split-half methods." },
    { term: "Validity", def: "The degree to which a test measures what it is intended to measure (e.g., predictive validity)." },
    { term: "Flynn effect", def: "The observed rise in average intelligence-test scores across generations." },
    { term: "Stereotype threat", def: "A self-confirming concern that one will be judged by a negative stereotype, which can impair performance." },
    { term: "Growth vs. fixed mindset", def: "Dweck's contrast: believing abilities can develop with effort (growth) vs. believing they are set (fixed)." }
  ],
  researchers: [
    { name: "Charles Spearman", contribution: "Proposed general intelligence (g) using factor analysis." },
    { name: "Howard Gardner", contribution: "Proposed the theory of multiple, relatively independent intelligences." },
    { name: "Robert Sternberg", contribution: "Proposed the triarchic theory: analytical, creative, and practical intelligence." },
    { name: "Alfred Binet", contribution: "Developed the first practical intelligence test and the concept of mental age to identify students needing help." },
    { name: "David Wechsler", contribution: "Created the widely used WAIS and WISC intelligence scales." },
    { name: "Carol Dweck", contribution: "Distinguished growth from fixed mindsets and linked growth mindset to achievement." }
  ],
  examples: [
    "A student who struggles with textbook problems but brilliantly fixes cars and navigates social situations illustrates Sternberg's practical intelligence, which a narrow g-based test might miss.",
    "An older adult may solve a novel logic puzzle more slowly than a teenager (fluid intelligence) yet have a far larger vocabulary and store of knowledge (crystallized intelligence).",
    "A test that gives very different scores each time a student takes it under the same conditions has low reliability, no matter how relevant its questions seem."
  ],
  mnemonic: [
    { device: "Reliable = Repeatable; Valid = Value what you claim to measure.", explain: "Reliability is consistency; validity is accuracy of what is measured. A test can be reliable but not valid." },
    { device: "Sternberg's 3: 'Analytical, Creative, Practical' = A-C-P.", explain: "The triarchic theory's three intelligences." },
    { device: "Fluid Flows fast but fades; Crystallized keeps growing.", explain: "Fluid intelligence declines with age; crystallized knowledge accumulates." }
  ],
  traps: [
    "Confusing reliability (consistency) with validity (accuracy). A broken scale that always reads 5 lbs high is reliable but not valid.",
    "Swapping fluid (novel reasoning, declines with age) and crystallized (accumulated knowledge, stable) intelligence.",
    "Mixing up aptitude tests (predict future) and achievement tests (measure past learning).",
    "Assuming a normal curve guarantees a test is valid. Standardization and validity are separate properties.",
    "Treating multiple-intelligence or triarchic theories as identical to Spearman's single g. They explicitly reject one general factor."
  ],
  exclusions: [
    "You are not required to compute IQ scores by formula or to know the full history of specific test batteries; focus on theories, key properties (reliability, validity, standardization), and score interpretation on the normal curve."
  ]
};
