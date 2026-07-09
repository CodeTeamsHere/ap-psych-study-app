/*
 * data/notes/unit-5.js — Study notes for Unit 5: Mental and Physical Health.
 * Original explanatory content. LO/EK statements are paraphrased from the College Board
 * AP Psychology CED; LO letters and EK numbers follow the CED numbering convention.
 * Disorders are described as academic classifications, not as diagnoses of the reader.
 */
window.APSYCH = window.APSYCH || {};
window.APSYCH.notes = window.APSYCH.notes || {};

window.APSYCH.notes["5.1"] = {
  topic: "5.1", unit: 5, title: "Introduction to Health Psychology",
  los: [
    {
      code: "5.1.A", text: "Explain how the biopsychosocial approach and the experience of stress relate to physical and mental health.",
      eks: [
        { code: "5.1.A.1", text: "Health psychology applies the biopsychosocial model, treating health as the product of interacting biological, psychological, and social/cultural factors rather than biology alone." },
        { code: "5.1.A.2", text: "Stress is the process by which people appraise and respond to events (stressors) they perceive as threatening or challenging.", subs: [
          { code: "5.1.A.2.i", text: "Stressors are commonly grouped as catastrophes (unpredictable large-scale events), significant life changes (e.g., moving, loss of a loved one), and daily hassles (small, repeated irritations)." },
          { code: "5.1.A.2.ii", text: "Stress can be positive and motivating (eustress) or negative and draining (distress)." }
        ] },
        { code: "5.1.A.3", text: "Hans Selye's general adaptation syndrome (GAS) describes the body's response to prolonged stress in three stages: alarm reaction, resistance, and exhaustion." },
        { code: "5.1.A.4", text: "People may react to stress with a fight-or-flight response or with tend-and-befriend (seeking social support and protecting others); prolonged stress can suppress the immune system and contribute to cardiovascular problems such as coronary heart disease." }
      ]
    },
    {
      code: "5.1.B", text: "Explain strategies people use to cope with stress.",
      eks: [
        { code: "5.1.B.1", text: "Problem-focused coping targets the stressor directly (changing the situation); emotion-focused coping manages one's emotional reaction to it." },
        { code: "5.1.B.2", text: "Perceived control, optimism, and social support buffer the harmful effects of stress on health." }
      ]
    }
  ],
  bigIdea: "<p><b>Health psychology</b> studies how the mind and body shape wellness and illness, and its core lens is the <b>biopsychosocial model</b>: health is never just biology. A person's genes and immune system (bio), their thoughts, habits, and stress appraisals (psycho), and their relationships, culture, and living conditions (social) all interact. The same virus, workload, or diagnosis affects two people differently because these three streams combine differently in each.</p>" +
    "<p><b>Stress</b> is best understood as a <em>process</em>, not an event: it is how we <em>appraise</em> and respond to <b>stressors</b> — catastrophes, major life changes, or the pile-up of daily hassles. Some stress energizes us (<b>eustress</b>); chronic stress wears us down (<b>distress</b>). Hans Selye mapped the body's response as the <b>general adaptation syndrome (GAS)</b>: an <b>alarm</b> reaction (sudden sympathetic arousal), a <b>resistance</b> phase (staying mobilized, stress hormones high), and finally <b>exhaustion</b> (reserves depleted, vulnerability to illness). Under threat we may show <b>fight-or-flight</b> or, alternatively, <b>tend-and-befriend</b> — nurturing others and seeking support.</p>" +
    "<p>Prolonged stress has real physical costs: it can <b>suppress the immune system</b> and raise the risk of <b>coronary heart disease</b>. But how we <b>cope</b> matters. <b>Problem-focused coping</b> tackles the stressor itself (make a plan, ask for an extension); <b>emotion-focused coping</b> manages feelings (exercise, reframing, leaning on friends). A sense of <b>perceived control</b>, optimism, and strong <b>social support</b> all cushion stress's impact.</p>",
  vocab: [
    { term: "Health psychology", def: "The subfield studying how biological, psychological, and social factors influence health, illness, and wellness." },
    { term: "Biopsychosocial model", def: "The view that health and behavior result from the interaction of biological, psychological, and social/cultural factors." },
    { term: "Stress", def: "The process of appraising and responding to events (stressors) perceived as threatening or challenging." },
    { term: "Stressor", def: "Any event or condition that triggers a stress response; grouped as catastrophes, significant life changes, and daily hassles." },
    { term: "Eustress / Distress", def: "Eustress is positive, motivating stress; distress is negative, harmful stress." },
    { term: "General adaptation syndrome (GAS)", def: "Selye's three-stage model of the body's stress response: alarm, resistance, and exhaustion." },
    { term: "Tend-and-befriend", def: "A stress response of seeking social support and caring for others rather than fighting or fleeing." },
    { term: "Problem-focused coping", def: "Reducing stress by directly changing or removing the stressor itself." },
    { term: "Emotion-focused coping", def: "Reducing stress by managing one's emotional reaction rather than the stressor." },
    { term: "Perceived control", def: "The belief that one can influence outcomes; higher perceived control buffers stress." }
  ],
  researchers: [
    { name: "Hans Selye", contribution: "Developed the general adaptation syndrome (GAS), describing stress in the alarm, resistance, and exhaustion stages." },
    { name: "Richard Lazarus", contribution: "Emphasized cognitive appraisal — that stress depends on how a person interprets an event, not the event alone." },
    { name: "Shelley Taylor", contribution: "Described the tend-and-befriend response, an alternative to fight-or-flight involving nurturing and social bonding." }
  ],
  examples: [
    "Two students receive the same difficult exam schedule. One appraises it as an exciting challenge and feels energized (eustress); the other appraises it as an overwhelming threat and feels drained (distress). The stressor is identical; the appraisal differs.",
    "A caregiver looking after a sick relative for months with no rest moves from alarm (initial surge) through resistance (running on stress hormones) into exhaustion, when they finally catch every cold going around — an illustration of GAS and stress-related immune suppression."
  ],
  mnemonic: { device: "GAS runs A-R-E: Alarm, Resistance, Exhaustion.", explain: "Selye's three GAS stages in order spell 'ARE' — ask 'ARE you stressed?' to recall alarm (surge), resistance (holding on), exhaustion (burnout)." },
  traps: [
    "Treating stress as an external event. On the exam, stress is the process of appraising and responding to a stressor — appraisal is central.",
    "Scrambling the GAS stages. The order is always alarm, then resistance, then exhaustion — exhaustion is the depleted final stage, not the first surge.",
    "Assuming everyone responds to stress with fight-or-flight. Tend-and-befriend is a recognized alternative response.",
    "Confusing problem-focused coping (change the situation) with emotion-focused coping (change your feelings about it).",
    "Thinking all stress is harmful. Moderate, motivating stress (eustress) can improve performance."
  ],
  exclusions: [
    "You do not need the biochemical details of the stress response (specific hormone pathways beyond the general role of stress hormones).",
    "Memorizing exact life-change scales or point values is not required; know the categories of stressors and their general link to health."
  ]
};

window.APSYCH.notes["5.2"] = {
  topic: "5.2", unit: 5, title: "Positive Psychology",
  los: [
    {
      code: "5.2.A", text: "Explain the aims and key concepts of positive psychology.",
      eks: [
        { code: "5.2.A.1", text: "Positive psychology is the scientific study of human strengths, well-being, and optimal functioning; it complements psychology's traditional focus on disorder and dysfunction." },
        { code: "5.2.A.2", text: "Subjective well-being combines a person's life satisfaction with the balance of positive over negative feelings." },
        { code: "5.2.A.3", text: "Positive psychology studies signature strengths and virtues, positive emotions, engagement and flow, gratitude, and a sense of meaning.", subs: [
          { code: "5.2.A.3.i", text: "Signature strengths are a person's most characteristic virtues (e.g., courage, kindness, curiosity) that, when used, promote engagement and well-being." },
          { code: "5.2.A.3.ii", text: "Flow is a state of deep, energized absorption in a challenging but manageable task." }
        ] },
        { code: "5.2.A.4", text: "Resilience is the capacity to recover from adversity; posttraumatic growth describes positive psychological change that can follow struggle with highly challenging events." }
      ]
    }
  ],
  bigIdea: "<p>For most of its history, psychology focused on what goes <em>wrong</em> — disorders, dysfunction, and repair. <b>Positive psychology</b>, championed by <b>Martin Seligman</b>, rebalances the field by asking what goes <em>right</em>: it is the scientific study of human strengths, well-being, and the conditions that let people and communities flourish. It does not deny suffering; it adds the study of what makes life worth living.</p>" +
    "<p>A central measure is <b>subjective well-being</b> — how satisfied people say they are with their lives, plus a favorable balance of positive over negative emotions. Positive psychologists study <b>signature strengths and virtues</b> (character traits such as courage, kindness, gratitude, and curiosity), the value of cultivating <b>positive emotions</b>, and <b>flow</b> — a term from <b>Mihaly Csikszentmihalyi</b> for the deep, timeless absorption you feel when a challenging task perfectly matches your skills. Practices like keeping a <b>gratitude</b> journal or using one's strengths in new ways are studied for their effects on happiness.</p>" +
    "<p>The field also examines how people thrive after hardship. <b>Resilience</b> is the ability to bounce back from stress, loss, or trauma, and <b>posttraumatic growth</b> describes the positive changes — deeper relationships, new priorities, greater appreciation for life — that some people report after struggling with adversity. The message is not that adversity is good, but that flourishing is a legitimate, measurable object of scientific study.</p>",
  vocab: [
    { term: "Positive psychology", def: "The scientific study of human strengths, well-being, and optimal functioning." },
    { term: "Subjective well-being", def: "A person's own evaluation of their life: life satisfaction plus a favorable balance of positive over negative emotions." },
    { term: "Signature strengths", def: "A person's most characteristic virtues (e.g., courage, kindness) that promote engagement when used." },
    { term: "Virtues", def: "Core positive character traits (such as wisdom, courage, humanity, justice, temperance, and transcendence) studied by positive psychology." },
    { term: "Flow", def: "Csikszentmihalyi's term for deep, energized absorption in a challenging but manageable activity." },
    { term: "Gratitude", def: "An appreciation for what one has received; deliberately practicing it is linked to greater well-being." },
    { term: "Resilience", def: "The capacity to adapt to and recover from stress, adversity, or trauma." },
    { term: "Posttraumatic growth", def: "Positive psychological change reported by some people following their struggle with highly challenging life events." }
  ],
  researchers: [
    { name: "Martin Seligman", contribution: "Founder of the positive psychology movement; shifted attention to strengths, well-being, and flourishing (and earlier studied learned helplessness)." },
    { name: "Mihaly Csikszentmihalyi", contribution: "Developed the concept of flow, the state of deep absorption when challenge meets skill." }
  ],
  examples: [
    "A musician practicing a piece that is just hard enough loses track of time and self-consciousness, fully absorbed — a classic example of flow.",
    "After surviving a serious illness, a person reports valuing relationships more deeply and reprioritizing their goals — an example of posttraumatic growth, distinct from simply returning to normal (resilience)."
  ],
  mnemonic: { device: "Positive psych studies STRENGTHS, not just symptoms.", explain: "Traditional psychology asks what's wrong (symptoms); positive psychology adds the study of strengths, well-being, and flourishing." },
  traps: [
    "Thinking positive psychology denies or ignores mental illness. It complements the study of disorder; it does not replace it.",
    "Confusing resilience (bouncing back to baseline after adversity) with posttraumatic growth (positive change that goes beyond the previous baseline).",
    "Treating flow as ordinary relaxation. Flow requires a challenging task that stretches — but matches — one's skills.",
    "Assuming subjective well-being is only about feeling good. It also includes a cognitive judgment of life satisfaction.",
    "Believing gratitude or strengths interventions are proven cure-alls; they are studied practices with modest, measured effects."
  ],
  exclusions: [
    "You are not expected to memorize the full catalog of character strengths and virtues or a specific well-being questionnaire.",
    "Detailed models of well-being (e.g., named acronyms) beyond the general concepts are not required."
  ]
};

window.APSYCH.notes["5.3"] = {
  topic: "5.3", unit: 5, title: "Explaining and Classifying Psychological Disorders",
  los: [
    {
      code: "5.3.A", text: "Explain how psychologists define and explain psychological disorders.",
      eks: [
        { code: "5.3.A.1", text: "A psychological disorder is a clinically significant disturbance in thoughts, feelings, or behaviors, typically marked by some combination of dysfunction, distress, and deviation from cultural norms (maladaptive patterns)." },
        { code: "5.3.A.2", text: "The biopsychosocial model and the diathesis-stress model explain disorders as arising from interacting factors — a biological or psychological predisposition (diathesis) that is triggered or worsened by stress." },
        { code: "5.3.A.3", text: "Judgments about what is 'disordered' vary across cultures and historical periods, and diagnostic labels can carry stigma." }
      ]
    },
    {
      code: "5.3.B", text: "Explain how psychological disorders are classified.",
      eks: [
        { code: "5.3.B.1", text: "Standardized classification systems — the DSM-5-TR (used widely in the U.S.) and the ICD (published by the World Health Organization) — provide agreed diagnostic criteria that improve the reliability of diagnosis." },
        { code: "5.3.B.2", text: "Different perspectives (biological, behavioral, cognitive, psychodynamic, humanistic, and sociocultural) offer distinct explanations for why disorders develop." }
      ]
    }
  ],
  bigIdea: "<p>Before a disorder can be treated, psychologists must define what counts as one. A useful shorthand is the <b>three D's</b>: <b>dysfunction</b> (the pattern interferes with everyday functioning), <b>distress</b> (it causes significant suffering), and <b>deviance</b> (it departs markedly from a culture's norms). No single D is sufficient by itself — many disorders are best summarized as <b>maladaptive</b> patterns of thought, emotion, or behavior. Importantly, this topic is about <em>academic classification</em>, not diagnosing yourself or others; recognizing a description is not the same as having a condition.</p>" +
    "<p>Why do disorders arise? The <b>biopsychosocial model</b> answers 'from interacting biological, psychological, and social factors,' and the closely related <b>diathesis-stress model</b> adds timing: a person carries a <b>predisposition</b> (diathesis) — genetic, biological, or psychological — that a <b>stressful</b> environment can trigger. This explains why two people with a similar vulnerability can have very different outcomes depending on their experiences. Different <b>perspectives</b> then emphasize different causes: biological (brain and genes), behavioral (learned responses), cognitive (maladaptive thinking), psychodynamic (inner conflict), humanistic (blocked growth), and sociocultural (social conditions).</p>" +
    "<p>To communicate reliably, clinicians use shared <b>classification systems</b>. The <b>DSM-5-TR</b> (Diagnostic and Statistical Manual, current text revision) and the <b>ICD</b> (International Classification of Diseases, from the World Health Organization) list standardized criteria so that different clinicians tend to reach the same diagnosis — improving <b>reliability</b>. Classification has limits, though: what is judged 'disordered' shifts across <b>cultures and eras</b>, and a diagnostic <b>label</b> can create <b>stigma</b> that colors how others (and the person) interpret ordinary behavior.</p>",
  vocab: [
    { term: "Psychological disorder", def: "A clinically significant disturbance in cognition, emotion regulation, or behavior; usually maladaptive." },
    { term: "The three D's", def: "Common criteria for disorder: dysfunction, distress, and deviance from cultural norms." },
    { term: "Maladaptive", def: "Interfering with a person's ability to function or adapt to everyday demands." },
    { term: "Biopsychosocial model", def: "The view that disorders result from interacting biological, psychological, and social factors." },
    { term: "Diathesis-stress model", def: "The idea that disorders emerge when a predisposition (diathesis) is triggered by environmental stress." },
    { term: "Medical model", def: "The approach that treats disorders as illnesses with diagnosable causes, symptoms, and treatments." },
    { term: "DSM-5-TR", def: "The Diagnostic and Statistical Manual (5th edition, text revision), the standard U.S. classification of disorders." },
    { term: "ICD", def: "The International Classification of Diseases, the World Health Organization's global classification system." },
    { term: "Stigma", def: "Negative attitudes and labeling directed at people with psychological disorders." }
  ],
  researchers: [
    { name: "David Rosenhan", contribution: "Highlighted the power of diagnostic labels and stigma to shape how normal behavior is interpreted within institutions." }
  ],
  examples: [
    "A behavior considered a spiritual experience in one culture might be labeled a symptom in another. This cultural relativity is why 'deviance' alone is a weak criterion, and why the CED stresses context.",
    "Two siblings inherit a similar vulnerability to depression. One faces chronic stress and develops the disorder; the other, in a supportive environment, does not — an illustration of the diathesis-stress model."
  ],
  mnemonic: { device: "Three D's: Dysfunction, Distress, Deviance.", explain: "A quick checklist for what pushes a behavior toward being classified as disordered — remembering that context and culture always matter." },
  traps: [
    "Treating any one 'D' as proof of a disorder. Deviance, distress, or dysfunction alone is not enough; clinicians weigh the whole picture in context.",
    "Confusing the diathesis-stress model (predisposition plus stress trigger) with a purely genetic or purely environmental explanation.",
    "Assuming diagnostic categories are culture-free and timeless. What counts as disordered varies across cultures and history.",
    "Thinking the DSM explains the causes of disorders. It standardizes description and diagnosis to improve reliability, not to state a single cause.",
    "Reading these classifications as a self-diagnosis. They are academic categories, not a checklist for labeling yourself or others."
  ],
  exclusions: [
    "This material is for academic classification, not clinical diagnosis; you are not expected to diagnose real people.",
    "Memorizing the full DSM chapter list or exact diagnostic criteria and cutoffs is not required.",
    "Detailed history of past classification systems is beyond the scope of the exam."
  ]
};

window.APSYCH.notes["5.4"] = {
  topic: "5.4", unit: 5, title: "Selection of Categories of Psychological Disorders",
  los: [
    {
      code: "5.4.A", text: "Explain the characteristics used to classify selected categories of psychological disorders.",
      eks: [
        { code: "5.4.A.1", text: "Neurodevelopmental disorders (e.g., attention-deficit/hyperactivity disorder and autism spectrum disorder) begin early in development and affect attention, learning, or social communication." },
        { code: "5.4.A.2", text: "Anxiety disorders involve excessive, persistent fear or anxiety and include generalized anxiety disorder, panic disorder, specific phobias, agoraphobia, and social anxiety disorder." },
        { code: "5.4.A.3", text: "Obsessive-compulsive and related disorders (e.g., OCD, hoarding disorder) involve intrusive obsessions and/or repetitive compulsions; note that the DSM-5-TR classifies OCD separately from the anxiety disorders." },
        { code: "5.4.A.4", text: "Trauma- and stressor-related disorders, such as posttraumatic stress disorder (PTSD), follow exposure to a traumatic event and involve intrusive memories, avoidance, and hyperarousal." },
        { code: "5.4.A.5", text: "Dissociative disorders involve disruptions of consciousness, memory, or identity — for example, dissociative amnesia, dissociative identity disorder, and depersonalization/derealization." },
        { code: "5.4.A.6", text: "Depressive disorders (major depressive disorder and persistent depressive disorder) involve prolonged sadness, loss of interest (anhedonia), and related changes in sleep, energy, and thinking." },
        { code: "5.4.A.7", text: "Bipolar disorders involve alternating periods of depression and mania (or hypomania); the DSM-5-TR treats them as a category separate from the depressive disorders." },
        { code: "5.4.A.8", text: "Feeding and eating disorders include anorexia nervosa, bulimia nervosa, and binge-eating disorder, which involve disturbed eating patterns and related concerns." },
        { code: "5.4.A.9", text: "Schizophrenia spectrum disorders involve psychosis and are described in terms of positive symptoms (added experiences such as hallucinations and delusions) and negative symptoms (reduced functions such as flat affect and avolition)." },
        { code: "5.4.A.10", text: "Personality disorders (grouped into clusters A, B, and C) are enduring, inflexible patterns; examples include antisocial and borderline personality disorders." }
      ]
    }
  ],
  bigIdea: "<p>This topic surveys major <b>categories</b> of the DSM-5-TR. It is academic classification, not a tool for diagnosing yourself or others, and it is written to describe these conditions <em>respectfully</em>. The exam wants you to recognize the defining feature of each category and to avoid the classic mix-ups.</p>" +
    "<p><b>Anxiety disorders</b> center on excessive fear or worry: <b>generalized anxiety disorder</b> (free-floating, persistent worry), <b>panic disorder</b> (sudden, intense panic attacks), <b>specific phobia</b> (intense fear of a particular object or situation), <b>agoraphobia</b> (fear of situations where escape feels difficult), and <b>social anxiety disorder</b> (fear of scrutiny). Two categories are commonly — but incorrectly — lumped with anxiety: <b>obsessive-compulsive and related disorders</b> (<b>OCD</b> = intrusive <em>obsessions</em> plus repetitive <em>compulsions</em>) and <b>trauma- and stressor-related disorders</b> (<b>PTSD</b> = intrusive memories, avoidance, and hyperarousal <em>after</em> a traumatic event). In the DSM-5-TR, OCD and PTSD each have their own chapter.</p>" +
    "<p><b>Depressive disorders</b> (<b>major depressive disorder</b>; longer-lasting <b>persistent depressive disorder</b>) involve deep, prolonged sadness and loss of interest. <b>Bipolar disorders</b> are separate: they add episodes of <b>mania</b> (elevated mood, racing thoughts, risky behavior) alternating with depression. <b>Dissociative disorders</b> disrupt memory or identity — <b>dissociative amnesia</b>, <b>dissociative identity disorder</b> (two or more distinct identity states), and depersonalization/derealization. <b>Feeding and eating disorders</b> include <b>anorexia nervosa</b> (restricting intake, very low body weight, intense fear of weight gain) and <b>bulimia nervosa</b> (binge eating followed by compensatory behaviors).</p>" +
    "<p><b>Schizophrenia spectrum disorders</b> involve <b>psychosis</b> — a break from shared reality — and are described with two symptom types. <b>Positive symptoms</b> are experiences <em>added</em>: hallucinations, delusions, and disorganized speech (word salad). <b>Negative symptoms</b> are normal functions <em>reduced</em>: flat affect, avolition (lack of motivation), and social withdrawal. <b>Neurodevelopmental disorders</b> (e.g., <b>ADHD</b>, <b>autism spectrum disorder</b>) appear early in development. Finally, <b>personality disorders</b> are enduring, inflexible patterns grouped into three clusters (A: odd/eccentric; B: dramatic/erratic, e.g., <b>antisocial</b> and <b>borderline</b>; C: anxious/fearful).</p>",
  vocab: [
    { term: "Anxiety disorders", def: "A category marked by excessive, persistent fear or anxiety (e.g., GAD, panic disorder, specific phobia, social anxiety disorder)." },
    { term: "Generalized anxiety disorder", def: "Persistent, free-floating worry not tied to a specific object or situation." },
    { term: "Panic disorder", def: "Recurrent, unexpected panic attacks — sudden episodes of intense fear with physical symptoms." },
    { term: "Obsessive-compulsive disorder (OCD)", def: "Intrusive, unwanted thoughts (obsessions) and repetitive behaviors (compulsions) done to reduce anxiety; classified separately from anxiety disorders." },
    { term: "Posttraumatic stress disorder (PTSD)", def: "A trauma- and stressor-related disorder with intrusive memories, avoidance, and hyperarousal following a traumatic event." },
    { term: "Major depressive disorder", def: "A depressive disorder with prolonged depressed mood and/or loss of interest plus related changes in sleep, energy, and thinking." },
    { term: "Bipolar disorder", def: "A mood disorder involving episodes of mania (or hypomania) that alternate with depression; a category separate from depressive disorders." },
    { term: "Mania", def: "A period of abnormally elevated mood, high energy, racing thoughts, and impulsive or risky behavior." },
    { term: "Dissociative identity disorder", def: "A dissociative disorder involving two or more distinct identity states and gaps in memory." },
    { term: "Schizophrenia (positive vs. negative symptoms)", def: "A psychotic disorder; positive symptoms are added experiences (hallucinations, delusions), negative symptoms are reduced functions (flat affect, avolition)." },
    { term: "Anorexia nervosa / Bulimia nervosa", def: "Anorexia = restricting intake with very low weight and fear of weight gain; bulimia = binge eating followed by compensatory behaviors." },
    { term: "Personality disorders", def: "Enduring, inflexible patterns of inner experience and behavior (Clusters A, B, C; e.g., antisocial, borderline)." },
    { term: "Neurodevelopmental disorders", def: "Conditions beginning early in development, such as ADHD and autism spectrum disorder." }
  ],
  researchers: [],
  examples: [
    "A person who checks the locked door dozens of times to quiet an intrusive fear of a break-in shows the obsession (intrusive thought) and compulsion (repeated checking) pattern of OCD — not a phobia, which is fear of a specific object without the compulsive ritual.",
    "Someone who months after a car crash re-experiences the event in flashbacks, avoids driving, and startles easily fits the trauma-triggered pattern of PTSD, distinguishing it from generalized anxiety, which is not tied to a specific traumatic event."
  ],
  mnemonic: [
    { device: "Positive symptoms = ADDED; Negative symptoms = SUBTRACTED.", explain: "Think of a math sign: positive symptoms add abnormal experiences (hallucinations, delusions); negative symptoms subtract normal ones (flat affect, motivation)." },
    { device: "OCD and PTSD moved OUT of the anxiety chapter.", explain: "In the DSM-5-TR, OCD is in 'obsessive-compulsive and related disorders' and PTSD is in 'trauma- and stressor-related disorders' — each its own category." }
  ],
  traps: [
    "Calling OCD or PTSD 'anxiety disorders.' The DSM-5-TR places each in its own separate category, though both involve anxiety.",
    "Reversing schizophrenia's symptom types. Positive symptoms are ADDED experiences (hallucinations, delusions); negative symptoms are REDUCED functions (flat affect, avolition).",
    "Confusing bipolar disorder with major depressive disorder. Bipolar requires periods of mania; depression alone does not.",
    "Mixing up anorexia (restricting, very low weight) with bulimia (binge-and-compensate, often at a normal weight).",
    "Assuming dissociative identity disorder means 'split personality' in the pop-culture sense or confusing it with schizophrenia; they are entirely different categories."
  ],
  exclusions: [
    "This is academic classification, not clinical diagnosis; these descriptions are not a checklist for labeling yourself or anyone else.",
    "You are not required to memorize exact diagnostic thresholds, durations, or symptom counts from the DSM-5-TR.",
    "Rare or highly specialized subtypes beyond the listed categories are not required."
  ]
};

window.APSYCH.notes["5.5"] = {
  topic: "5.5", unit: 5, title: "Treatment of Psychological Disorders",
  los: [
    {
      code: "5.5.A", text: "Explain the major psychological (psychotherapeutic) approaches to treating disorders.",
      eks: [
        { code: "5.5.A.1", text: "Psychodynamic therapy seeks insight into unconscious conflicts using techniques such as free association, dream interpretation, and interpreting transference and resistance." },
        { code: "5.5.A.2", text: "Humanistic therapy (Rogers's client-centered/person-centered therapy) fosters growth through unconditional positive regard, empathy, genuineness, and active listening." },
        { code: "5.5.A.3", text: "Behavioral therapies apply conditioning: counterconditioning techniques (systematic desensitization, exposure, aversion therapy) and operant techniques (token economies) change maladaptive behavior directly." },
        { code: "5.5.A.4", text: "Cognitive and cognitive-behavioral therapies change maladaptive thinking; examples include Beck's cognitive therapy, Ellis's rational-emotive behavior therapy (REBT), CBT, and dialectical behavior therapy (DBT)." },
        { code: "5.5.A.5", text: "Therapy can be delivered individually or in group/family formats; many clinicians use an eclectic, evidence-based approach and rely on a strong therapeutic alliance." }
      ]
    },
    {
      code: "5.5.B", text: "Explain the biological (biomedical) approaches to treating disorders.",
      eks: [
        { code: "5.5.B.1", text: "Psychopharmacology uses drugs — antianxiety, antidepressant (e.g., SSRIs), antipsychotic, and mood-stabilizing (e.g., lithium) medications — to alter brain chemistry." },
        { code: "5.5.B.2", text: "Brain-based treatments include electroconvulsive therapy (ECT) for severe depression and transcranial magnetic stimulation (TMS); psychosurgery is now rare." }
      ]
    }
  ],
  bigIdea: "<p>Treatments fall into two broad families: <b>psychotherapies</b> (talk-based) and <b>biomedical</b> therapies (biological). Within psychotherapy, four approaches recur. <b>Psychodynamic</b> therapy, descended from Freud, seeks <b>insight</b> into unconscious conflicts through <b>free association</b>, <b>dream interpretation</b>, and analyzing <b>transference</b> (feelings the client redirects onto the therapist) and <b>resistance</b>. <b>Humanistic</b> therapy — Carl Rogers's <b>client-centered</b> approach — assumes people grow when accepted, so the therapist offers <b>unconditional positive regard</b>, <b>empathy</b>, <b>genuineness</b>, and <b>active listening</b>.</p>" +
    "<p><b>Behavioral</b> therapies ignore deep insight and target the behavior itself using conditioning. <b>Systematic desensitization</b> and <b>exposure therapy</b> countercondition fear — pairing a feared stimulus with relaxation — and are the go-to for <b>phobias</b>. <b>Aversion therapy</b> pairs an unwanted behavior with an unpleasant stimulus, and <b>token economies</b> use operant reinforcement to build desired behavior. <b>Cognitive</b> therapies target maladaptive <em>thinking</em>: <b>Aaron Beck's</b> cognitive therapy challenges the negative thought patterns behind <b>depression</b>, while <b>Albert Ellis's REBT</b> disputes irrational beliefs. Combining the two, <b>cognitive-behavioral therapy (CBT)</b> is a leading, well-supported treatment for <b>anxiety and depression</b>, and <b>DBT</b> is used for borderline personality disorder.</p>" +
    "<p><b>Biomedical</b> treatments change biology directly. <b>Psychopharmacology</b> includes <b>antianxiety</b> drugs, <b>antidepressants</b> (often <b>SSRIs</b>, which block serotonin reuptake), <b>antipsychotics</b> (which typically reduce dopamine activity and target the positive symptoms of schizophrenia), and <b>mood stabilizers</b> such as <b>lithium</b> for <b>bipolar disorder</b>. For severe depression that has not responded to other treatments, <b>electroconvulsive therapy (ECT)</b> can help, and newer options include <b>transcranial magnetic stimulation (TMS)</b>. Many clinicians blend methods in an <b>eclectic</b>, <b>evidence-based</b> way, and across all approaches a strong <b>therapeutic alliance</b> predicts better outcomes. The key exam skill is matching the approach to the problem: exposure for phobias, CBT for anxiety and depression, antipsychotics for schizophrenia, lithium for bipolar disorder.</p>",
  vocab: [
    { term: "Psychodynamic therapy", def: "Insight therapy (from Freud) that explores unconscious conflicts via free association, dream interpretation, transference, and resistance." },
    { term: "Free association", def: "A psychodynamic technique in which the client says whatever comes to mind, however trivial, to reveal unconscious material." },
    { term: "Transference", def: "In psychodynamic therapy, the client's redirection of emotions from past relationships onto the therapist." },
    { term: "Client-centered therapy", def: "Rogers's humanistic therapy that promotes growth through a genuine, accepting, empathic environment." },
    { term: "Unconditional positive regard", def: "Rogers's attitude of full, nonjudgmental acceptance of the client, regardless of what they say or do." },
    { term: "Systematic desensitization", def: "A behavioral technique that gradually pairs relaxation with an increasingly feared stimulus to reduce anxiety (a form of exposure/counterconditioning)." },
    { term: "Aversion therapy", def: "A behavioral technique that pairs an unwanted behavior with an unpleasant stimulus to discourage it." },
    { term: "Token economy", def: "An operant technique in which desired behaviors earn tokens exchangeable for rewards." },
    { term: "Cognitive therapy", def: "Beck's approach that identifies and changes the negative, distorted thinking underlying disorders such as depression." },
    { term: "Rational-emotive behavior therapy (REBT)", def: "Ellis's directive cognitive therapy that disputes and replaces irrational beliefs." },
    { term: "Cognitive-behavioral therapy (CBT)", def: "A widely used therapy combining cognitive restructuring with behavioral techniques; strong support for anxiety and depression." },
    { term: "Antipsychotic drugs", def: "Medications that typically reduce dopamine activity and target the positive symptoms of schizophrenia." },
    { term: "Antidepressant drugs (SSRIs)", def: "Medications (e.g., selective serotonin reuptake inhibitors) that increase available serotonin to treat depression and anxiety." },
    { term: "Mood stabilizers (lithium)", def: "Medications such as lithium used to reduce the mood swings of bipolar disorder." },
    { term: "Electroconvulsive therapy (ECT)", def: "A biomedical treatment using brief electrical stimulation of the brain, used mainly for severe, treatment-resistant depression." }
  ],
  researchers: [
    { name: "Sigmund Freud", contribution: "Originated psychoanalysis/psychodynamic therapy, using free association and dream interpretation to surface unconscious conflict." },
    { name: "Carl Rogers", contribution: "Developed client-centered (person-centered) therapy built on unconditional positive regard, empathy, and genuineness." },
    { name: "Aaron Beck", contribution: "Founded cognitive therapy, targeting the negative thought patterns behind depression." },
    { name: "Albert Ellis", contribution: "Created rational-emotive behavior therapy (REBT), which disputes irrational beliefs." },
    { name: "Joseph Wolpe", contribution: "Developed systematic desensitization, a graded exposure technique for reducing phobic anxiety." }
  ],
  examples: [
    "A client with a severe fear of flying works up a hierarchy from looking at a photo of a plane to sitting on one, staying relaxed at each step. This graded exposure is systematic desensitization — a behavioral therapy matched to a phobia.",
    "A person with depression learns in therapy to catch and challenge automatic thoughts like 'I always fail,' testing them against evidence. This targets maladaptive thinking — Beck's cognitive therapy, a core part of CBT."
  ],
  mnemonic: [
    { device: "Match the therapy: phobia to exposure, depression to CBT, schizophrenia to antipsychotics, bipolar to lithium.", explain: "The most common exam task is fitting a treatment to a disorder — memorize these four pairings." },
    { device: "Beck the Brain (cognitive), Rogers the Relationship (humanistic), Freud the Unconscious (psychodynamic), behaviorists the Behavior.", explain: "Links each founder to what their therapy targets." }
  ],
  traps: [
    "Confusing the approaches: psychodynamic targets unconscious conflict, humanistic targets acceptance/growth, behavioral targets behavior, cognitive targets thoughts.",
    "Mismatching treatment to disorder. Exposure/systematic desensitization fits phobias; antipsychotics (not antidepressants) fit schizophrenia; lithium fits bipolar disorder.",
    "Thinking antipsychotics increase dopamine. They typically reduce dopamine activity to ease positive symptoms.",
    "Assuming ECT is an outdated or first-line treatment. It is used carefully today, mainly for severe, treatment-resistant depression.",
    "Believing biomedical drugs 'cure' disorders outright. They manage symptoms and often work best combined with psychotherapy."
  ],
  exclusions: [
    "You are not expected to know specific drug names, dosages, or detailed pharmacology beyond the general drug categories and what they treat.",
    "Detailed neurosurgical procedures or the history of specific institutions are beyond the scope of the exam."
  ]
};
