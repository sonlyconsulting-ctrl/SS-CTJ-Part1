import { CheckpointDefinition, DayDefinition } from './types';

export const APP_VERSION = '2.0-CANDIDATE';
export const STORAGE_KEY_STATE = 'ctj.part1.state.v2';
export const STORAGE_KEY_SETTINGS = 'ctj.part1.settings.v2';

export const DAYS: DayDefinition[] = [
  {
    day: 1,
    week: 1,
    title: 'What Is Logic?',
    theme: 'Logic is the structured framework that separates fact from opinion and belief from proof, improving decision-making in daily life.',
    frameworkName: 'IF-THEN Statements',
    framework: 'Break situations into cause-and-effect relationships by naming a condition and the outcome you expect to follow.',
    logicTip: 'Logic is not about being right; it is about being consistent and clear.',
    prompts: [
      { id: 'd1-map', kind: 'map', label: 'Map the Situation', text: 'Describe a real-life situation where an IF-THEN flow would clarify a decision, process, or troubleshooting step. Name the IF condition and THEN outcome, then reflect on what becomes clearer.', guide: 'Up to 100 words' },
      { id: 'd1-p1', kind: 'core', label: 'Prompt 1', text: 'What does logic mean to you personally?', guide: 'Up to 25 words' },
      { id: 'd1-p2', kind: 'core', label: 'Prompt 2', text: 'Using IF-THEN statements, outline a recent decision. What evidence supported the connection between the condition and expected outcome?', guide: '75 to 100 words' },
      { id: 'd1-p3', kind: 'core', label: 'Prompt 3', text: 'For a complex situation you face, how could IF-THEN reasoning help you clarify elements, dependencies, or possible solutions?', guide: '50 to 100 words' },
      { id: 'd1-bonus', kind: 'optional', label: 'Bonus', text: 'Reflect on the idea that an unexamined life is not worth living. How does that connect to logic?', guide: 'Short summary plus explanation' },
      { id: 'd1-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Explain logic to a 10-year-old using an everyday example.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 2,
    week: 1,
    title: 'Thinking in Statements',
    theme: 'Thoughts are often unspoken statements. Converting them into clear, testable statements makes the reasoning easier to examine.',
    frameworkName: 'Declarative Sentences',
    framework: 'Use “I think... because...” to make the claim and supporting reason visible.',
    logicTip: 'Every belief can become a statement, and every statement can be tested.',
    prompts: [
      { id: 'd2-map', kind: 'map', label: 'Map the Belief', text: 'Choose a belief about work, relationships, life, or a daily habit. Put it into the form “I think... because...” and reflect on what becomes clearer when the reason is stated.', guide: 'Up to 100 words' },
      { id: 'd2-p1', kind: 'core', label: 'Prompt 1', text: 'Write one strong belief you hold about work, relationships, or life.', guide: 'Up to 25 words' },
      { id: 'd2-p2', kind: 'core', label: 'Prompt 2', text: 'Convert that belief into a declarative statement. What experience or data supports it, and what counter-argument could weaken it?', guide: '50 to 75 words' },
      { id: 'd2-p3', kind: 'core', label: 'Prompt 3', text: 'How might your experience or bias influence the way you frame the statement or choose evidence?', guide: '50 to 100 words' },
      { id: 'd2-bonus', kind: 'optional', label: 'Bonus', text: 'Convert the belief into a simple syllogism and explain where the reasoning could fail.', guide: 'Syllogism plus explanation' },
      { id: 'd2-deeper', kind: 'optional', label: 'Today’s Challenge', text: 'Diagram the thought process using boxes, arrows, or a written sequence.', guide: '50 to 75 words or equivalent outline' }
    ]
  },
  {
    day: 3,
    week: 1,
    title: 'Truth vs Belief',
    theme: 'Truth exists independently of what we believe. Separating facts, assumptions, and conclusions helps expose where confidence may exceed evidence.',
    frameworkName: 'Logic Ladder',
    framework: 'Start with a fact, add the assumption being made, then identify the conclusion that follows.',
    logicTip: 'Ask whether you believe something because it is true, or think it is true because you believe it.',
    prompts: [
      { id: 'd3-map', kind: 'map', label: 'Build a Logic Ladder', text: 'Choose a personal belief or common assumption. Identify the fact at the base, the assumption built on it, and the resulting conclusion.', guide: 'Up to 100 words' },
      { id: 'd3-p1', kind: 'core', label: 'Prompt 1', text: 'Write a strong belief you cannot prove with certainty.', guide: 'Up to 25 words' },
      { id: 'd3-p2', kind: 'core', label: 'Prompt 2', text: 'Using the Logic Ladder, identify the facts and assumptions that lead to the conclusion. What evidence supports each step?', guide: '50 to 75 words' },
      { id: 'd3-p3', kind: 'core', label: 'Prompt 3', text: 'How might distinguishing truth from belief have changed a past decision?', guide: '50 to 100 words' },
      { id: 'd3-bonus', kind: 'optional', label: 'Bonus', text: 'Reflect on the idea that belief does not make something true. Where is that distinction useful to you?', guide: 'Short summary plus explanation' },
      { id: 'd3-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Compare your view on this topic today with your view a year ago.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 4,
    week: 1,
    title: 'Deductive & Inductive Reasoning',
    theme: 'Deductive reasoning moves from general principles to specific conclusions. Inductive reasoning builds probable conclusions from observations.',
    frameworkName: 'Reasoning Type Identifier',
    framework: 'Ask whether the reasoning moves from observations to a pattern, or from a principle to a conclusion.',
    logicTip: 'Deduction can be certain if its premises are true. Induction offers probability rather than certainty.',
    prompts: [
      { id: 'd4-map', kind: 'map', label: 'Identify the Reasoning Type', text: 'Describe a situation where you used inductive or deductive reasoning. Show the observations and pattern, or the principle and conclusion, then reflect on how identifying the type affects confidence.', guide: 'Up to 100 words' },
      { id: 'd4-p1', kind: 'core', label: 'Prompt 1', text: 'Write about a pattern you have noticed in life or work.', guide: 'Up to 25 words' },
      { id: 'd4-p2', kind: 'core', label: 'Prompt 2', text: 'Is your reasoning inductive or deductive? List the observations or state the principle that supports your answer.', guide: '50 to 75 words' },
      { id: 'd4-p3', kind: 'core', label: 'Prompt 3', text: 'How might bias influence your interpretation of those observations or principles?', guide: '50 to 100 words' },
      { id: 'd4-bonus', kind: 'optional', label: 'Bonus', text: 'Predict an outcome based on the pattern and explain why the prediction is justified.', guide: 'Prediction plus explanation' },
      { id: 'd4-deeper', kind: 'optional', label: 'Today’s Challenge', text: 'Ask someone else how they interpret the same pattern and why.', guide: '50 to 75 words' }
    ]
  },
  {
    day: 5,
    week: 1,
    title: 'The Power of a Premise',
    theme: 'Premises are the starting points of reasoning. Weak premises can undermine a conclusion even when the steps that follow are internally consistent.',
    frameworkName: 'Point-Evidence-Reason',
    framework: 'State the point, identify the evidence that supports it, and explain the reason or premise connecting the evidence to the point.',
    logicTip: 'Question the premise. A conclusion is only as strong as the reasoning it depends on.',
    prompts: [
      { id: 'd5-map', kind: 'map', label: 'Map a Decision', text: 'Choose a recent confident decision. State the point, evidence, and underlying reason or premise. Reflect on what becomes clearer when the premise is explicit.', guide: 'Up to 100 words' },
      { id: 'd5-p1', kind: 'core', label: 'Prompt 1', text: 'Write one recent decision you made with confidence.', guide: 'Up to 25 words' },
      { id: 'd5-p2', kind: 'core', label: 'Prompt 2', text: 'Using Point-Evidence-Reason, state the decision, the evidence, and the premise connecting them.', guide: '50 to 75 words' },
      { id: 'd5-p3', kind: 'core', label: 'Prompt 3', text: 'If one premise proved false, how would the reasoning change? What new premise would you need to examine?', guide: '50 to 100 words' },
      { id: 'd5-bonus', kind: 'optional', label: 'Bonus', text: 'Challenge one premise and describe how the conclusion changes.', guide: 'Premise plus explanation' },
      { id: 'd5-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Apply premise-checking to a current public claim or news event without assuming the claim is true or false.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 6,
    week: 2,
    title: 'What Is Bias?',
    theme: 'Bias is a tendency to favor certain interpretations or perspectives. Recognizing its influence can improve the quality of judgment.',
    frameworkName: 'What If, So What, Now What?',
    framework: 'Explore an assumption, its implications, and the action that follows if the assumption changes.',
    logicTip: 'The goal is not to pretend bias disappears. The goal is to notice when it may be shaping judgment.',
    prompts: [
      { id: 'd6-map', kind: 'map', label: 'Belief vs Broader Facts', text: 'Describe a situation where bias may have influenced your perception or decision. Separate the initial belief from broader facts or alternative evidence, then reflect on the difference.', guide: 'Up to 100 words' },
      { id: 'd6-p1', kind: 'core', label: 'Prompt 1', text: 'Write about a time you realized you were wrong about something important.', guide: 'Up to 25 words' },
      { id: 'd6-p2', kind: 'core', label: 'Prompt 2', text: 'What if you had recognized it earlier? What consequence or action might have changed, and what facts led to the shift?', guide: '50 to 75 words' },
      { id: 'd6-p3', kind: 'core', label: 'Prompt 3', text: 'Where did preconceptions shape your interpretation of the facts?', guide: '50 to 100 words' },
      { id: 'd6-bonus', kind: 'optional', label: 'Bonus', text: 'Reflect on the idea that people often see the world through their own frame. How does that relate to bias?', guide: 'Short summary plus explanation' },
      { id: 'd6-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Explain the realization in a way that would invite discussion rather than defensiveness.', guide: '50 to 100 words' }
    ]
  },
  {
    day: 7,
    week: 2,
    title: 'Confirmation Bias',
    theme: 'Confirmation bias favors information that supports an existing belief and can make contradictory evidence easier to dismiss.',
    frameworkName: 'Seek Disconfirming Evidence',
    framework: 'Actively look for evidence that would weaken, revise, or overturn your preferred conclusion.',
    logicTip: 'Strong reasoning survives contact with counter-evidence.',
    prompts: [
      { id: 'd7-map', kind: 'map', label: 'Counter-Evidence Map', text: 'Choose a strong opinion. Describe the type of counter-evidence that could challenge it and how deliberately seeking that evidence could strengthen or modify your understanding.', guide: 'Up to 100 words' },
      { id: 'd7-p1', kind: 'core', label: 'Prompt 1', text: 'Write one strong opinion on a public, social, personal, or professional issue.', guide: 'Up to 25 words' },
      { id: 'd7-p2', kind: 'core', label: 'Prompt 2', text: 'List the reasons and sources that support the opinion. Then identify weaknesses or credible counter-arguments.', guide: '50 to 75 words' },
      { id: 'd7-p3', kind: 'core', label: 'Prompt 3', text: 'What disconfirming evidence would you seek before becoming more certain?', guide: '50 to 100 words' },
      { id: 'd7-bonus', kind: 'optional', label: 'Bonus', text: 'How does precise language affect the way you form or defend a conclusion?', guide: 'Short summary plus explanation' },
      { id: 'd7-deeper', kind: 'optional', label: 'Today’s Challenge', text: 'Describe your thought process with imagery, a metaphor, or a simple written map.', guide: '50 to 75 words' }
    ]
  },
  {
    day: 8,
    week: 2,
    title: 'Availability Heuristic',
    theme: 'The availability heuristic can make easily remembered examples feel more common or likely than the broader evidence supports.',
    frameworkName: 'Evidence Balancer',
    framework: 'List evidence that supports the concern and evidence that challenges or contextualizes it.',
    logicTip: 'Easy to remember does not automatically mean more likely.',
    prompts: [
      { id: 'd8-map', kind: 'map', label: 'Memories vs Broader Evidence', text: 'Choose a fear or concern influenced by memorable examples. Separate the memories that make it vivid from broader facts, base rates, or other evidence that could change the probability you assign to it.', guide: 'Up to 100 words' },
      { id: 'd8-p1', kind: 'core', label: 'Prompt 1', text: 'Write one fear or concern that feels especially real right now.', guide: 'Up to 25 words' },
      { id: 'd8-p2', kind: 'core', label: 'Prompt 2', text: 'Using the Evidence Balancer, list evidence that supports the concern and evidence that counters or contextualizes it.', guide: '50 to 75 words' },
      { id: 'd8-p3', kind: 'core', label: 'Prompt 3', text: 'How might recent experiences or memorable examples be exaggerating the concern?', guide: '50 to 100 words' },
      { id: 'd8-bonus', kind: 'optional', label: 'Bonus', text: 'Convert the concern into an IF-THEN statement and test whether the connection is actually supported.', guide: 'IF-THEN statement plus explanation' },
      { id: 'd8-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Compare your view today with your view a year ago. What changed and why?', guide: '50 to 100 words' }
    ]
  },
  {
    day: 9,
    week: 2,
    title: 'Ad Hominem & Straw Man',
    theme: 'Ad hominem attacks the person instead of the argument. Straw man reasoning misrepresents a position so the weaker version is easier to attack.',
    frameworkName: 'Argument Focus',
    framework: 'Separate the person from the claim and restate the opposing position in a form the other person would recognize as fair.',
    logicTip: 'Challenge ideas directly and represent competing views accurately.',
    prompts: [
      { id: 'd9-map', kind: 'map', label: 'Reframe the Disagreement', text: 'Describe a heated disagreement. Reframe it so the focus stays on the idea or claim rather than the person, and represent each side as fairly as you can.', guide: 'Up to 100 words' },
      { id: 'd9-p1', kind: 'core', label: 'Prompt 1', text: 'Write about one heated disagreement.', guide: 'Up to 25 words' },
      { id: 'd9-p2', kind: 'core', label: 'Prompt 2', text: 'Identify the key ideas. Did anyone attack the person or misrepresent the opposing position?', guide: '50 to 75 words' },
      { id: 'd9-p3', kind: 'core', label: 'Prompt 3', text: 'What is the first logical step that would make the disagreement clearer?', guide: '50 to 100 words' },
      { id: 'd9-bonus', kind: 'optional', label: 'Bonus', text: 'How can understanding another person’s reasoning reduce the temptation to attack the person instead of the argument?', guide: 'Short summary plus explanation' },
      { id: 'd9-deeper', kind: 'optional', label: 'Today’s Challenge', text: 'Ask someone else how they see the disagreement and what evidence matters most to them.', guide: '50 to 75 words' }
    ]
  },
  {
    day: 10,
    week: 2,
    title: 'False Dilemmas & Red Herrings',
    theme: 'False dilemmas present too few options. Red herrings distract attention with information that does not resolve the actual question.',
    frameworkName: 'Third-Option Scan',
    framework: 'State the apparent either-or choice, identify at least one credible third option, and remove information that does not bear on the decision.',
    logicTip: 'When a choice is framed as either-or, deliberately look for an unmentioned third path and irrelevant distractions.',
    prompts: [
      { id: 'd10-map', kind: 'map', label: 'Open the Choice', text: 'Recall a situation framed as only Option 1 or Option 2. Describe those options, identify a viable third path, and name any distracting issue that does not actually resolve the choice.', guide: 'Up to 100 words' },
      { id: 'd10-p1', kind: 'core', label: 'Prompt 1', text: 'Write one choice that currently feels like it has only two options.', guide: 'Up to 25 words' },
      { id: 'd10-p2', kind: 'core', label: 'Prompt 2', text: 'State the reasoning for the two options. Identify a third option or a situation in which neither original option applies. What evidence strengthens or weakens the original frame?', guide: '50 to 75 words' },
      { id: 'd10-p3', kind: 'core', label: 'Prompt 3', text: 'Does your background, incentive, or prior commitment make one option feel more natural than it deserves?', guide: '50 to 100 words' },
      { id: 'd10-bonus', kind: 'optional', label: 'Bonus', text: 'Choose the strongest third option and explain why it is genuinely viable rather than merely different.', guide: 'Third option plus explanation' },
      { id: 'd10-deeper', kind: 'optional', label: 'Dig Deeper', text: 'Apply the same scan to a current public claim or debate. What third option or red herring appears?', guide: '50 to 100 words' }
    ]
  }
];

export const CHECKPOINTS: CheckpointDefinition[] = [
  {
    id: 'week1',
    afterDay: 5,
    title: 'Week 1 Checkpoint',
    prompt: 'Reflect on your progress in building logical foundations. Which mini-framework has been most useful, and how has your understanding of logic changed?',
    guide: '100 to 150 words'
  },
  {
    id: 'week2',
    afterDay: 10,
    title: 'Week 2 Checkpoint',
    prompt: 'Reflect on spotting biases and fallacies. Which framework helped most? What bias, fallacy, or thinking habit surprised you?',
    guide: '100 to 150 words'
  }
];

export const FINAL_REFLECTION_PROMPT =
  'Review Part 1. What is your biggest insight, how will you apply these tools, and where could clearer reasoning help you or someone you support next?';
