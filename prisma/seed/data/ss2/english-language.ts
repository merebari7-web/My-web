import { SeedSubjectContent } from "../content-types";

export const ss2EnglishLanguage: SeedSubjectContent = {
  subjectSlug: "english-language",
  classShortName: "SS2",
  stream: "NONE",
  lessons: [
    {
      title: "Essay Writing: The Argumentative Essay",
      summary: "Master the structure and techniques of writing a persuasive argumentative essay for WAEC and JAMB.",
      durationMins: 28,
      term: 1,
      topic: { title: "Essay Writing", nerdcCode: "ENGL-SS2-W1", waecTopic: "Essay Writing — WAEC English Language Paper 1", jambRelevance: "Argumentative essay structure informs JAMB comprehension and grammar sections." },
      contentMd: `# Essay Writing: The Argumentative Essay

## What is an Argumentative Essay?
An argumentative essay presents a clear position on a topic and supports it with logical reasoning and evidence, while also acknowledging opposing views.

## Structure of an Argumentative Essay
1. **Introduction**: State the topic and your position (thesis statement).
2. **Body paragraphs** (3-4): Each paragraph presents one argument with supporting evidence/examples.
3. **Counter-argument paragraph**: Acknowledge and refute an opposing view.
4. **Conclusion**: Restate your position and summarise key points.

## Sample Topic
"Should social media be banned for students under 18 in Nigeria?"

## Sample Introduction
"In recent years, social media has become deeply embedded in the lives of Nigerian teenagers, offering both opportunities and risks. While some argue that a ban would protect young minds from harmful content, this essay contends that banning social media for under-18s is impractical and would deny students valuable educational and social benefits."

## Useful Linking Words
- To introduce a point: *Firstly, moreover, in addition*
- To show contrast: *However, on the other hand, nevertheless*
- To conclude: *In conclusion, to sum up, therefore*

## Practice
1. Write a thesis statement for the topic: "Should JAMB CBT centres be made free for all Nigerian students?"
2. List three linking words used to introduce an argument.
3. Write one body paragraph supporting a position of your choice on any current Nigerian social issue.

## Key Takeaways
- A strong argumentative essay has a clear thesis, logical body paragraphs, and addresses counter-arguments.
- Linking words improve the flow and coherence of your essay — a key WAEC marking criterion.`,
    },
    {
      title: "Figures of Speech in Literature and Language",
      summary: "Identify and use common figures of speech such as simile, metaphor, personification, and hyperbole.",
      durationMins: 24,
      term: 1,
      topic: { title: "Figures of Speech", nerdcCode: "ENGL-SS2-L3", waecTopic: "Figures of Speech — WAEC English Language Syllabus", jambRelevance: "Figures of speech are commonly tested in JAMB Use of English." },
      contentMd: `# Figures of Speech in Literature and Language

## Common Figures of Speech

### 1. Simile
Compares two things using "like" or "as".
Example: "Her smile was as bright as the Nigerian sun."

### 2. Metaphor
Describes something by directly stating it is something else (no "like"/"as").
Example: "The classroom was a zoo during break time."

### 3. Personification
Gives human qualities to non-human things.
Example: "The harmattan wind whispered through the trees."

### 4. Hyperbole
An exaggerated statement not meant to be taken literally.
Example: "I've told you a million times to clean your room!"

### 5. Proverb
A short, traditional saying expressing wisdom, common in Nigerian languages and culture.
Example: "A stitch in time saves nine" or the Yoruba proverb translated as "It is a wise child that knows their father."

## Nigerian Context
Nigerian literature, from Chinua Achebe's *Things Fall Apart* to modern spoken-word poetry, frequently uses proverbs and vivid imagery rooted in local culture to enrich storytelling.

## Practice
1. Identify the figure of speech: "The rain drummed angrily on the roof."
2. Write your own simile comparing something to Nigerian jollof rice.
3. Explain the difference between a simile and a metaphor.

## Key Takeaways
- Figures of speech add colour and depth to writing and speech.
- Recognising them is essential for literary analysis in WAEC Literature-in-English and comprehension in JAMB.`,
    },
    {
      title: "Common Errors in English Usage",
      summary: "Identify and correct commonly confused words and grammar mistakes made by Nigerian English learners.",
      durationMins: 24,
      term: 2,
      topic: { title: "Common Errors", nerdcCode: "ENGL-SS2-G5", waecTopic: "Lexis and Structure — WAEC English Language Paper 1", jambRelevance: "Error identification is a major JAMB Use of English question type." },
      contentMd: `# Common Errors in English Usage

## Frequently Confused Words

| Incorrect | Correct | Note |
|---|---|---|
| "He is more taller than me" | "He is taller than me" | Don't combine "more" with -er adjectives |
| "I have less books" | "I have fewer books" | Use "fewer" for countable nouns, "less" for uncountable |
| "Everybody have arrived" | "Everybody has arrived" | "Everybody" is singular, takes "has" |
| "I am understanding you" | "I understand you" | Stative verbs (understand, know, love) are rarely used in continuous form |
| "She don't like rice" | "She doesn't like rice" | Third person singular requires "doesn't" |

## Common Nigerian English Errors
- "I want to off the light" → "I want to turn off the light"
- "Enter the car" (to mean 'get into') → "Get into the car"
- "Take permission" → "Ask for permission" or "Seek permission"

## Subject-Verb Agreement Rule
A singular subject takes a singular verb; a plural subject takes a plural verb. Collective nouns like "team" and "family" typically take a singular verb when acting as a unit.

## Practice
1. Correct this sentence: "The news are shocking."
2. Correct this sentence: "Each of the students have their own book."
3. Identify the error: "She don't know the answer."

## Key Takeaways
- Careful subject-verb agreement prevents common grammar errors.
- Awareness of "Nigerian English" expressions helps distinguish informal speech from formal Standard English required in WAEC/JAMB exams.`,
    },
  ],
  quizQuestions: [
    { text: "Which figure of speech compares two things using 'like' or 'as'?", optionA: "Metaphor", optionB: "Simile", optionC: "Hyperbole", optionD: "Personification", correctOption: "B", explanation: "A simile uses 'like' or 'as' to compare two things." },
    { text: "Choose the sentence with correct subject-verb agreement.", optionA: "The team are playing well.", optionB: "The team is playing well.", optionC: "The team be playing well.", optionD: "The team playing well.", correctOption: "B", explanation: "'Team' as a unit takes the singular verb 'is'." },
    { text: "Which part of an argumentative essay states your position?", optionA: "Conclusion", optionB: "Counter-argument", optionC: "Thesis statement (introduction)", optionD: "Bibliography", correctOption: "C", explanation: "The thesis statement, found in the introduction, states your position." },
    { text: "'The wind whispered through the trees' is an example of:", optionA: "simile", optionB: "personification", optionC: "hyperbole", optionD: "proverb", correctOption: "B", explanation: "Giving the wind the human quality of 'whispering' is personification." },
    { text: "Choose the correct sentence.", optionA: "I have fewer money than you.", optionB: "I have less money than you.", optionC: "I have fewer moneys than you.", optionD: "I have lesser money than you.", correctOption: "B", explanation: "'Money' is uncountable, so 'less' is correct." },
  ],
  examTitle: "SS2 English Language — First Term Examination",
  examQuestions: [
    { text: "An essay that presents a position and supports it with reasoning is called a(n):", optionA: "narrative essay", optionB: "argumentative essay", optionC: "descriptive essay", optionD: "expository essay only", correctOption: "B", explanation: "An argumentative essay presents and defends a clear position.", board: "WAEC" },
    { text: "'I've told you a million times' is an example of:", optionA: "simile", optionB: "hyperbole", optionC: "metaphor", optionD: "personification", correctOption: "B", explanation: "This is an exaggeration (hyperbole), not meant to be taken literally.", board: "WAEC" },
    { text: "Choose the grammatically correct sentence.", optionA: "She don't like fufu.", optionB: "She doesn't like fufu.", optionC: "She not like fufu.", optionD: "She isn't liking fufu.", correctOption: "B", explanation: "Third person singular subjects require 'doesn't'.", board: "JAMB" },
    { text: "'Everybody has submitted their assignment.' The verb 'has' agrees with:", optionA: "a plural subject", optionB: "a singular subject (everybody)", optionC: "no subject", optionD: "a compound subject", correctOption: "B", explanation: "'Everybody' is grammatically singular, requiring 'has'.", board: "WAEC" },
    { text: "A short traditional saying expressing wisdom is called a:", optionA: "metaphor", optionB: "simile", optionC: "proverb", optionD: "hyperbole", correctOption: "C", explanation: "A proverb is a traditional saying that expresses wisdom or truth.", board: "WAEC" },
    { text: "Which linking word is used to show contrast?", optionA: "Moreover", optionB: "However", optionC: "Firstly", optionD: "Therefore", correctOption: "B", explanation: "'However' is used to introduce a contrasting idea.", board: "WAEC" },
    { text: "'The classroom was a zoo' is an example of a:", optionA: "simile", optionB: "metaphor", optionC: "hyperbole", optionD: "proverb", correctOption: "B", explanation: "This directly equates the classroom to a zoo, making it a metaphor.", board: "WAEC" },
    { text: "Choose the sentence with correct word usage.", optionA: "He is more taller than his brother.", optionB: "He is taller than his brother.", optionC: "He is much more tall than his brother.", optionD: "He is tallest than his brother.", correctOption: "B", explanation: "'Taller' already shows comparison; adding 'more' is incorrect.", board: "JAMB" },
    { text: "A counter-argument paragraph in an essay serves to:", optionA: "introduce the topic", optionB: "acknowledge and refute opposing views", optionC: "conclude the essay", optionD: "list references", correctOption: "B", explanation: "The counter-argument paragraph addresses and refutes opposing viewpoints.", board: "WAEC" },
    { text: "Identify the error: 'The news are very shocking today.'", optionA: "'news' should take a singular verb", optionB: "'shocking' is misspelt", optionC: "'today' is unnecessary", optionD: "there is no error", correctOption: "A", explanation: "'News' is treated as singular in English, so it should be 'The news is shocking'.", board: "WAEC" },
  ],
};
