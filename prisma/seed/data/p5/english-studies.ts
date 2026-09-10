import { SeedSubjectContent } from "../content-types";

export const p5English: SeedSubjectContent = {
  subjectSlug: "english-studies",
  classShortName: "P5",
  lessons: [
    {
      title: "Nouns: Common, Proper, Collective and Abstract",
      summary: "Identify and use the four main types of nouns correctly in sentences.",
      durationMins: 18,
      term: 1,
      topic: { title: "Nouns", nerdcCode: "ENG-P5-G1", jambRelevance: "Word classes are tested in WAEC and JAMB Use of English." },
      contentMd: `# Nouns: Common, Proper, Collective and Abstract

## What is a Noun?
A noun is a naming word. It names a person, place, animal, or thing.

## Types of Nouns

### 1. Common Nouns
These name general people, places or things (not specific). Examples: *teacher, market, river, book*.

### 2. Proper Nouns
These name specific people, places or things, and always start with a capital letter. Examples: *Chidinma, Kano, River Niger, National Theatre*.

### 3. Collective Nouns
These name a group of people, animals or things. Examples: *a flock of sheep, a team of players, a family of five*.

### 4. Abstract Nouns
These name feelings, ideas or qualities that cannot be touched. Examples: *love, honesty, freedom, happiness*.

## Nigerian Context Examples
- Common noun: *market* — "My mother went to the market."
- Proper noun: *Onitsha* — "Onitsha is a big commercial city."
- Collective noun: *a herd of cattle* — "We saw a herd of cattle near Jos."
- Abstract noun: *unity* — "Unity is important for Nigeria's development."

## Practice
1. Pick out the common noun: *Lagos, teacher, honesty, team.*
2. Write a proper noun for a state in Nigeria.
3. What is the collective noun for a group of lions?
4. Give one example of an abstract noun.

## Key Takeaways
- Common nouns are general; proper nouns are specific and capitalised.
- Collective nouns name groups; abstract nouns name ideas or feelings.`,
    },
    {
      title: "Comprehension Passage: The Village Market Day",
      summary: "Practice reading comprehension skills with a passage about a Nigerian market day, and answer inference questions.",
      durationMins: 25,
      term: 1,
      topic: { title: "Reading Comprehension", nerdcCode: "ENG-P5-R2", jambRelevance: "Comprehension passages form a major part of WAEC/JAMB English papers." },
      contentMd: `# Comprehension Passage: The Village Market Day

## Passage
Every fifth day, the people of Umuobi village trooped to the popular market square. Traders arrived early with baskets of yams, plantains, and fresh vegetables. Fishermen brought smoked fish wrapped in large leaves, while women displayed colourful fabrics under wide umbrellas. Children ran between the stalls, tempted by roasted corn and groundnuts sold by the roadside.

By midday, the market was buzzing with the sound of bargaining. "Madam, reduce am small now!" a customer pleaded, trying to lower the price of a basket of tomatoes. The trader smiled and gave a small discount, knowing that a happy customer would return next market day.

As the sun began to set, traders packed their unsold goods into large baskets, ready to head home. Some would return in five days for the next market day, while others sold in different markets throughout the week, moving from town to town.

## Comprehension Questions
1. How often did the market hold?
2. Name three items sold at the market.
3. What does the word "trooped" mean in the passage?
4. Why did the trader give the customer a discount?
5. What lesson can we learn about bargaining from this passage?

## Vocabulary Focus
- **Trooped**: walked together in a group
- **Bargaining**: discussing the price of goods before buying
- **Buzzing**: full of activity and noise

## Key Takeaways
- Read the passage carefully before answering questions.
- Look for context clues to understand new vocabulary.
- Answers should be based on what is stated or clearly implied in the passage.`,
    },
    {
      title: "Verb Tenses: Simple Past and Simple Present",
      summary: "Understand how to correctly use simple past and simple present tense in everyday communication.",
      durationMins: 20,
      term: 2,
      topic: { title: "Verb Tenses", nerdcCode: "ENG-P5-G4", jambRelevance: "Tense agreement is a common WAEC/JAMB error-identification topic." },
      contentMd: `# Verb Tenses: Simple Past and Simple Present

## Simple Present Tense
Used for habits, facts, and routines.

**Structure:** Subject + base verb (add -s/-es for he/she/it)

**Examples:**
- I *walk* to school every day.
- She *cooks* jollof rice on Sundays.
- The sun *rises* in the east.

## Simple Past Tense
Used for actions that have already been completed.

**Structure:** Subject + verb + -ed (regular) OR irregular past form

**Examples:**
- I *walked* to school yesterday.
- She *cooked* jollof rice last Sunday.
- We *visited* our grandmother in Ibadan last week.

## Common Irregular Verbs
| Present | Past |
|---|---|
| go | went |
| eat | ate |
| see | saw |
| buy | bought |
| bring | brought |

## Nigerian Context Example
"Every year, we *travel* (present) to the village for Christmas. Last year, we *travelled* (past) by road and it took eight hours because of traffic in Ore."

## Practice
1. Change to past tense: "He *plays* football every evening."
2. Change to present tense: "They *went* to the market yesterday."
3. Fill the gap: Yesterday, my sister ______ (bring) akara for breakfast.

## Key Takeaways
- Simple present = habits and facts.
- Simple past = completed actions.
- Learn irregular verbs by heart — they don't follow the -ed rule.`,
    },
  ],
  quizQuestions: [
    { text: "Which of these is a proper noun?", optionA: "city", optionB: "Abuja", optionC: "market", optionD: "happiness", correctOption: "B", explanation: "Abuja names a specific place and starts with a capital letter, making it a proper noun." },
    { text: "What is the collective noun for a group of ships?", optionA: "a pride", optionB: "a fleet", optionC: "a flock", optionD: "a team", correctOption: "B", explanation: "A group of ships is called a fleet." },
    { text: "Which word is an abstract noun?", optionA: "honesty", optionB: "chair", optionC: "dog", optionD: "school", correctOption: "A", explanation: "Honesty is a quality that cannot be touched, making it abstract." },
    { text: "Choose the correct simple past tense of 'buy'.", optionA: "buyed", optionB: "bought", optionC: "buys", optionD: "buying", correctOption: "B", explanation: "'Buy' is irregular; its past tense is 'bought'." },
    { text: "'She ______ rice every Sunday.' Fill the gap with the correct present tense.", optionA: "cook", optionB: "cooking", optionC: "cooks", optionD: "cooked", correctOption: "C", explanation: "With 'she' (third person singular), we add -s: cooks." },
  ],
  examTitle: "Primary 5 English Studies — First Term Examination",
  examQuestions: [
    { text: "Which of the following is a common noun?", optionA: "Nigeria", optionB: "book", optionC: "Chioma", optionD: "Kaduna", correctOption: "B", explanation: "'Book' names a general object, making it a common noun." },
    { text: "The collective noun for a group of lions is:", optionA: "a herd", optionB: "a pride", optionC: "a flock", optionD: "a swarm", correctOption: "B", explanation: "A group of lions is called a pride." },
    { text: "Choose the abstract noun.", optionA: "freedom", optionB: "table", optionC: "river", optionD: "goat", correctOption: "A", explanation: "Freedom is an idea/quality, so it is an abstract noun." },
    { text: "Past tense of 'go' is:", optionA: "goed", optionB: "gone", optionC: "went", optionD: "going", correctOption: "C", explanation: "'Go' is irregular; simple past tense is 'went'." },
    { text: "'The sun ______ in the east every morning.' Choose the correct verb.", optionA: "rise", optionB: "rising", optionC: "rises", optionD: "rose", correctOption: "C", explanation: "Present tense fact requires 'rises' (adds -s for third person singular 'sun')." },
    { text: "Identify the proper noun in: 'We visited Yankari National Park last year.'", optionA: "visited", optionB: "Yankari National Park", optionC: "year", optionD: "last", correctOption: "B", explanation: "Yankari National Park is a specific place, hence a proper noun." },
    { text: "What does 'bargaining' mean, as used in a market passage?", optionA: "fighting over goods", optionB: "discussing price before buying", optionC: "stealing goods", optionD: "packing goods", correctOption: "B", explanation: "Bargaining means negotiating the price of an item before purchase." },
    { text: "Which sentence is in the simple past tense?", optionA: "I eat rice.", optionB: "I will eat rice.", optionC: "I ate rice.", optionD: "I am eating rice.", correctOption: "C", explanation: "'Ate' is the simple past tense of 'eat'." },
    { text: "The plural collective noun for 'family' when referring to several families is:", optionA: "families", optionB: "familys", optionC: "familie", optionD: "family's", correctOption: "A", explanation: "The correct plural is 'families'." },
    { text: "Choose the correctly spelt word.", optionA: "recieve", optionB: "receive", optionC: "receeve", optionD: "receve", correctOption: "B", explanation: "The correct spelling follows 'i before e except after c': receive." },
  ],
};
