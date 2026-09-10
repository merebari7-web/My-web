import { SeedSubjectContent } from "../content-types";

export const p5French: SeedSubjectContent = {
  subjectSlug: "french",
  classShortName: "P5",
  lessons: [
    {
      title: "Se Présenter (Introducing Yourself)",
      summary: "Learn to introduce yourself in French: name, age, and where you are from.",
      durationMins: 16,
      term: 1,
      topic: { title: "Self Introduction", nerdcCode: "FRE-P5-1" },
      contentMd: `# Se Présenter (Introducing Yourself)

## Phrases Utiles (Useful Phrases)
- **Je m'appelle...** — My name is...
- **J'ai ... ans** — I am ... years old
- **Je viens du Nigéria** — I come from Nigeria
- **J'habite à Lagos** — I live in Lagos
- **Comment tu t'appelles?** — What is your name?

## Exemple de Dialogue
- A: Bonjour! Comment tu t'appelles?
- B: Je m'appelle Kemi. Et toi?
- A: Je m'appelle Musa. J'ai onze ans.

## Pratique (Practice)
1. Complete: "Je m'appelle ___" with your name.
2. Translate: "I am ten years old."
3. Ask a partner "Comment tu t'appelles?" and respond.

## Key Takeaways
- Basic self-introduction phrases are the foundation of French conversation.
- Practice speaking aloud to build confidence.`,
    },
    {
      title: "Les Nombres 1-20 (Numbers 1-20)",
      summary: "Learn to count from 1 to 20 in French.",
      durationMins: 16,
      term: 2,
      topic: { title: "Numbers", nerdcCode: "FRE-P5-3" },
      contentMd: `# Les Nombres 1-20

## Les Nombres (Numbers)
1 - un, 2 - deux, 3 - trois, 4 - quatre, 5 - cinq, 6 - six, 7 - sept, 8 - huit, 9 - neuf, 10 - dix, 11 - onze, 12 - douze, 13 - treize, 14 - quatorze, 15 - quinze, 16 - seize, 17 - dix-sept, 18 - dix-huit, 19 - dix-neuf, 20 - vingt

## Pratique (Practice)
1. Count from 1 to 10 in French aloud.
2. Write the French word for 15.
3. Translate: "I have five books" (J'ai cinq livres).

## Key Takeaways
- Numbers are essential building blocks for French conversation, including telling age and quantities.`,
    },
    {
      title: "La Famille (The Family)",
      summary: "Learn vocabulary for family members in French.",
      durationMins: 16,
      term: 3,
      topic: { title: "Family", nerdcCode: "FRE-P5-6" },
      contentMd: `# La Famille (The Family)

## Vocabulaire (Vocabulary)
- **le père** — father
- **la mère** — mother
- **le frère** — brother
- **la sœur** — sister
- **les parents** — parents
- **la famille** — family

## Exemple
"Ma famille est grande. J'ai un frère et deux sœurs." (My family is big. I have one brother and two sisters.)

## Pratique (Practice)
1. Translate: "my mother" and "my father."
2. How do you say "I have a sister" in French?
3. Describe your family in three simple French sentences.

## Key Takeaways
- Family vocabulary allows you to describe your household in French.`,
    },
  ],
  quizQuestions: [
    { text: "'Je m'appelle' means:", optionA: "I am from", optionB: "My name is", optionC: "I live in", optionD: "How are you", correctOption: "B", explanation: "'Je m'appelle' translates to 'My name is'." },
    { text: "The French word for 'five' is:", optionA: "quatre", optionB: "cinq", optionC: "six", optionD: "sept", correctOption: "B", explanation: "'Cinq' means five in French." },
    { text: "'Le père' means:", optionA: "mother", optionB: "father", optionC: "brother", optionD: "sister", correctOption: "B", explanation: "'Le père' means father in French." },
    { text: "'Dix' represents the number:", optionA: "5", optionB: "10", optionC: "15", optionD: "20", correctOption: "B", explanation: "'Dix' means ten in French." },
    { text: "'Comment tu t'appelles?' means:", optionA: "How old are you?", optionB: "What is your name?", optionC: "Where do you live?", optionD: "How are you?", correctOption: "B", explanation: "This phrase asks 'What is your name?'" },
  ],
  examTitle: "Primary 5 French — First Term Examination",
  examQuestions: [
    { text: "'J'ai dix ans' means:", optionA: "I am ten years old", optionB: "I have ten books", optionC: "I am from Nigeria", optionD: "My name is ten", correctOption: "A", explanation: "'J'ai dix ans' means 'I am ten years old'." },
    { text: "The French word for 'sister' is:", optionA: "le frère", optionB: "la sœur", optionC: "la mère", optionD: "le père", correctOption: "B", explanation: "'La sœur' means sister." },
    { text: "'Vingt' means:", optionA: "12", optionB: "15", optionC: "20", optionD: "10", correctOption: "C", explanation: "'Vingt' means twenty in French." },
    { text: "'Je viens du Nigéria' means:", optionA: "I live in Lagos", optionB: "I come from Nigeria", optionC: "My name is Nigeria", optionD: "I am Nigerian food", correctOption: "B", explanation: "This phrase means 'I come from Nigeria'." },
    { text: "The French word for 'family' is:", optionA: "la famille", optionB: "les parents", optionC: "le frère", optionD: "la sœur", correctOption: "A", explanation: "'La famille' means family in French." },
    { text: "'Trois' means:", optionA: "One", optionB: "Two", optionC: "Three", optionD: "Four", correctOption: "C", explanation: "'Trois' means three in French." },
    { text: "'Les parents' refers to:", optionA: "siblings", optionB: "parents", optionC: "grandparents", optionD: "cousins", correctOption: "B", explanation: "'Les parents' means parents in French." },
    { text: "'Bonjour' is used to say:", optionA: "Goodbye", optionB: "Hello/Good day", optionC: "Thank you", optionD: "Sorry", correctOption: "B", explanation: "'Bonjour' is a common greeting meaning 'Hello' or 'Good day'." },
    { text: "'Quatorze' represents the number:", optionA: "4", optionB: "14", optionC: "40", optionD: "44", correctOption: "B", explanation: "'Quatorze' means fourteen." },
    { text: "'Le frère' means:", optionA: "father", optionB: "mother", optionC: "brother", optionD: "sister", correctOption: "C", explanation: "'Le frère' means brother in French." },
  ],
};

export const p5History: SeedSubjectContent = {
  subjectSlug: "history",
  classShortName: "P5",
  lessons: [
    {
      title: "Pre-Colonial Nigeria: Great Kingdoms and Empires",
      summary: "Learn about major pre-colonial Nigerian kingdoms including Oyo, Benin, and the Sokoto Caliphate.",
      durationMins: 20,
      term: 1,
      topic: { title: "Pre-Colonial Kingdoms", nerdcCode: "HIS-P5-1" },
      contentMd: `# Pre-Colonial Nigeria: Great Kingdoms and Empires

## Introduction
Long before European colonisation, the area now called Nigeria was home to powerful and organised kingdoms and empires.

## Major Kingdoms

### The Oyo Empire
Founded by the Yoruba people, the Oyo Empire became one of the most powerful West African states by the 17th century, known for its strong cavalry and centralised government led by the Alaafin.

### The Benin Kingdom
The Benin Kingdom, ruled by the Oba, was famous for its advanced bronze and brass artwork (the Benin Bronzes) and its well-organised city with massive walls and moats.

### The Sokoto Caliphate
Established in 1804 by Usman dan Fodio through the Fulani Jihad, the Sokoto Caliphate became one of the largest states in Africa, uniting many Hausa city-states under Islamic law.

## Why This Matters
These kingdoms show that Nigeria had rich systems of government, trade, art, and culture long before colonial rule, contributing to the strong sense of heritage many Nigerians hold today.

## Practice
1. Name three pre-colonial Nigerian kingdoms/empires.
2. Who founded the Sokoto Caliphate?
3. What was the Benin Kingdom famous for?

## Key Takeaways
- Nigeria's pre-colonial history includes sophisticated kingdoms like Oyo, Benin, and Sokoto.
- These kingdoms had organised governments, trade systems, and rich cultural achievements.`,
    },
    {
      title: "The Amalgamation of Nigeria (1914)",
      summary: "Understand how the Northern and Southern Protectorates were merged to form modern Nigeria.",
      durationMins: 18,
      term: 2,
      topic: { title: "Colonial Nigeria", nerdcCode: "HIS-P5-4" },
      contentMd: `# The Amalgamation of Nigeria (1914)

## Background
Before 1914, the area we now call Nigeria was divided into separate British-controlled territories: the Northern Protectorate and the Southern Protectorate (which included Lagos Colony).

## The Amalgamation
On 1st January 1914, Sir Frederick Lugard, the British colonial administrator, merged the Northern and Southern Protectorates into a single country called Nigeria, mainly for administrative and economic convenience.

## Effects of the Amalgamation
- Created one large country from many diverse ethnic groups and kingdoms.
- Set the stage for eventual Nigerian independence in 1960.
- Some historians argue it grouped very different cultures together too quickly, contributing to later political challenges.

## Practice
1. In what year did the amalgamation take place?
2. Who was the British administrator responsible for the amalgamation?
3. Name the two protectorates that were merged.

## Key Takeaways
- The 1914 amalgamation created the country now known as Nigeria.
- It combined diverse peoples and regions under one colonial administration.`,
    },
    {
      title: "Nigeria's Independence (1960)",
      summary: "Learn about the events leading to Nigeria's independence from British colonial rule on October 1, 1960.",
      durationMins: 18,
      term: 3,
      topic: { title: "Nigerian Independence", nerdcCode: "HIS-P5-7" },
      contentMd: `# Nigeria's Independence (1960)

## The Road to Independence
After decades of colonial rule, Nigerian nationalists like Nnamdi Azikiwe, Obafemi Awolowo, and Ahmadu Bello led movements demanding self-governance for Nigeria.

## Independence Day
On **October 1, 1960**, Nigeria gained independence from British colonial rule. Sir Abubakar Tafawa Balewa became the first Prime Minister of independent Nigeria, while Nigeria remained under a British monarch as a Commonwealth realm until 1963.

## Becoming a Republic
On **October 1, 1963**, Nigeria became a republic, with Nnamdi Azikiwe as the first President, fully removing the British monarch as head of state.

## Why We Celebrate
Every October 1st, Nigerians celebrate Independence Day with parades, cultural displays, and national reflection on the country's journey and progress since 1960.

## Practice
1. On what date did Nigeria gain independence?
2. Who was Nigeria's first Prime Minister?
3. When did Nigeria become a republic, and who was the first President?

## Key Takeaways
- Nigeria gained independence on October 1, 1960.
- Nigeria became a republic on October 1, 1963, with Nnamdi Azikiwe as the first President.`,
    },
  ],
  quizQuestions: [
    { text: "Which kingdom was famous for its bronze and brass artwork?", optionA: "Oyo Empire", optionB: "Benin Kingdom", optionC: "Sokoto Caliphate", optionD: "Kanem-Bornu", correctOption: "B", explanation: "The Benin Kingdom is renowned for its Benin Bronzes." },
    { text: "The Sokoto Caliphate was founded by:", optionA: "Usman dan Fodio", optionB: "Frederick Lugard", optionC: "Nnamdi Azikiwe", optionD: "Ahmadu Bello", correctOption: "A", explanation: "Usman dan Fodio founded the Sokoto Caliphate through the Fulani Jihad of 1804." },
    { text: "Nigeria's amalgamation took place in:", optionA: "1900", optionB: "1914", optionC: "1960", optionD: "1963", correctOption: "B", explanation: "The Northern and Southern Protectorates were merged in 1914." },
    { text: "Nigeria gained independence on:", optionA: "October 1, 1960", optionB: "January 1, 1914", optionC: "October 1, 1963", optionD: "May 29, 1999", correctOption: "A", explanation: "Nigeria gained independence from Britain on October 1, 1960." },
    { text: "Nigeria's first Prime Minister was:", optionA: "Nnamdi Azikiwe", optionB: "Obafemi Awolowo", optionC: "Abubakar Tafawa Balewa", optionD: "Ahmadu Bello", correctOption: "C", explanation: "Sir Abubakar Tafawa Balewa was Nigeria's first Prime Minister." },
  ],
  examTitle: "Primary 5 History — First Term Examination",
  examQuestions: [
    { text: "The Oyo Empire was founded by which ethnic group?", optionA: "Igbo", optionB: "Yoruba", optionC: "Hausa", optionD: "Fulani", correctOption: "B", explanation: "The Oyo Empire was founded by the Yoruba people." },
    { text: "Who merged the Northern and Southern Protectorates in 1914?", optionA: "Usman dan Fodio", optionB: "Frederick Lugard", optionC: "Herbert Macaulay", optionD: "Tafawa Balewa", correctOption: "B", explanation: "Sir Frederick Lugard carried out the 1914 amalgamation." },
    { text: "The Benin Kingdom was ruled by a leader known as the:", optionA: "Alaafin", optionB: "Oba", optionC: "Emir", optionD: "Sarki", correctOption: "B", explanation: "The Oba was the traditional ruler of the Benin Kingdom." },
    { text: "Nigeria became a republic in:", optionA: "1960", optionB: "1963", optionC: "1970", optionD: "1999", correctOption: "B", explanation: "Nigeria became a republic on October 1, 1963." },
    { text: "Nigeria's first President was:", optionA: "Abubakar Tafawa Balewa", optionB: "Nnamdi Azikiwe", optionC: "Obafemi Awolowo", optionD: "Ahmadu Bello", correctOption: "B", explanation: "Nnamdi Azikiwe became Nigeria's first President in 1963." },
    { text: "The Sokoto Caliphate was established through the:", optionA: "Fulani Jihad", optionB: "Berlin Conference", optionC: "British invasion", optionD: "Yoruba Civil War", correctOption: "A", explanation: "The Sokoto Caliphate arose from the Fulani Jihad led by Usman dan Fodio." },
    { text: "The Alaafin was the ruler of which empire?", optionA: "Benin Kingdom", optionB: "Oyo Empire", optionC: "Sokoto Caliphate", optionD: "Kanem-Bornu Empire", correctOption: "B", explanation: "The Alaafin was the traditional ruler title in the Oyo Empire." },
    { text: "Nigeria's amalgamation combined how many protectorates?", optionA: "One", optionB: "Two", optionC: "Three", optionD: "Four", correctOption: "B", explanation: "The Northern and Southern Protectorates (two) were merged in 1914." },
    { text: "Nigerian Independence Day is celebrated on:", optionA: "May 29", optionB: "October 1", optionC: "January 1", optionD: "December 25", correctOption: "B", explanation: "October 1 marks Nigeria's Independence Day, celebrated annually." },
    { text: "Which nationalist leader is associated with the Western Region?", optionA: "Obafemi Awolowo", optionB: "Ahmadu Bello", optionC: "Usman dan Fodio", optionD: "Frederick Lugard", correctOption: "A", explanation: "Obafemi Awolowo was a prominent nationalist leader from the Western Region." },
  ],
};

export const p5PHE: SeedSubjectContent = {
  subjectSlug: "physical-health-education",
  classShortName: "P5",
  lessons: [
    {
      title: "Personal Hygiene and Health",
      summary: "Learn good hygiene habits that keep the body healthy and prevent disease.",
      durationMins: 16,
      term: 1,
      topic: { title: "Personal Hygiene", nerdcCode: "PHE-P5-1" },
      contentMd: `# Personal Hygiene and Health

## What is Personal Hygiene?
Personal hygiene means keeping your body clean to stay healthy and prevent diseases.

## Good Hygiene Habits
1. Bathing at least once (preferably twice) daily.
2. Brushing teeth morning and night.
3. Washing hands with soap before eating and after using the toilet.
4. Trimming fingernails and toenails regularly.
5. Wearing clean clothes.

## Why It Matters
Good hygiene prevents the spread of diseases like cholera, typhoid, and skin infections, which are common when handwashing and clean water practices are neglected.

## Practice
1. List three good personal hygiene habits.
2. When should you wash your hands with soap?
3. Name one disease that can be prevented through good hygiene.

## Key Takeaways
- Personal hygiene protects individual and public health.
- Simple daily habits like handwashing can prevent serious diseases.`,
    },
    {
      title: "Athletics: Running and Jumping Events",
      summary: "Learn the basic rules and techniques of common athletic events like sprinting and long jump.",
      durationMins: 20,
      term: 2,
      topic: { title: "Athletics", nerdcCode: "PHE-P5-4" },
      contentMd: `# Athletics: Running and Jumping Events

## Track Events
- **Sprints** (100m, 200m) — short, fast races requiring explosive speed.
- **Relay races** — a team event where runners pass a baton to each other.

## Field Events
- **Long jump** — jumping as far as possible from a takeoff board into a sand pit.
- **High jump** — jumping over a raised bar without knocking it down.

## Basic Techniques
For sprinting: start in a crouched position, push off explosively, and maintain a straight running posture.
For long jump: run up with speed, take off from one foot at the board, and land with both feet forward.

## Nigerian Context
Athletics is a proud part of Nigerian sporting culture, with legends like Blessing Okagbare (sprinting) and Chioma Ajunwa (Nigeria's first individual Olympic gold medallist, in long jump at the 1996 Atlanta Olympics) inspiring young athletes nationwide.

## Practice
1. Name two track events and two field events.
2. Describe the correct landing technique for long jump.
3. Who was Nigeria's first individual Olympic gold medallist, and in which event?

## Key Takeaways
- Athletics includes track events (running) and field events (jumping, throwing).
- Proper technique improves performance and reduces injury risk.`,
    },
    {
      title: "Team Sports: Rules of Football",
      summary: "Learn the basic rules of football (soccer), Nigeria's most popular sport.",
      durationMins: 18,
      term: 3,
      topic: { title: "Football", nerdcCode: "PHE-P5-7" },
      contentMd: `# Team Sports: Rules of Football

## Basic Rules
- A football match has two teams of 11 players each.
- The goal is to score more goals than the opposing team by getting the ball into their net.
- Players cannot use their hands or arms to touch the ball, except the goalkeeper within the penalty area.
- A match typically lasts 90 minutes, divided into two 45-minute halves.

## Common Fouls
- **Offside** — being in an illegal position ahead of the last defender when the ball is played to you.
- **Handball** — deliberately touching the ball with the hand or arm.
- **Foul tackle** — dangerous or unfair tackling of an opponent.

## Nigerian Football Pride
The Super Eagles, Nigeria's national football team, won the Africa Cup of Nations three times (1980, 1994, 2013) and famously won gold at the 1996 Atlanta Olympics football tournament.

## Practice
1. How many players are on a football team?
2. What is an "offside" in football?
3. Name one achievement of Nigeria's Super Eagles.

## Key Takeaways
- Football is played by two teams of 11, following clear rules on scoring and fouls.
- Nigeria has a strong football legacy through the Super Eagles.`,
    },
  ],
  quizQuestions: [
    { text: "Personal hygiene mainly helps to:", optionA: "make you popular", optionB: "prevent diseases", optionC: "make you taller", optionD: "improve exam scores directly", correctOption: "B", explanation: "Good hygiene practices prevent the spread of diseases." },
    { text: "The long jump is an example of a:", optionA: "track event", optionB: "field event", optionC: "team sport", optionD: "swimming event", correctOption: "B", explanation: "Long jump is classified as a field event in athletics." },
    { text: "How many players make up a football team on the pitch?", optionA: "9", optionB: "10", optionC: "11", optionD: "12", correctOption: "C", explanation: "A football team has 11 players on the pitch." },
    { text: "Chioma Ajunwa won Nigeria's first individual Olympic gold in:", optionA: "sprinting", optionB: "long jump", optionC: "football", optionD: "swimming", correctOption: "B", explanation: "Chioma Ajunwa won gold in long jump at the 1996 Atlanta Olympics." },
    { text: "In football, touching the ball deliberately with the hand is called:", optionA: "offside", optionB: "handball", optionC: "a foul tackle", optionD: "a corner kick", correctOption: "B", explanation: "Handball refers to illegal contact between the ball and a player's hand/arm." },
  ],
  examTitle: "Primary 5 Physical & Health Education — First Term Examination",
  examQuestions: [
    { text: "Which of these is a good hygiene habit?", optionA: "Skipping baths", optionB: "Washing hands before eating", optionC: "Wearing dirty clothes", optionD: "Avoiding toothbrushing", correctOption: "B", explanation: "Washing hands before eating is an essential hygiene practice." },
    { text: "A football match typically lasts:", optionA: "60 minutes", optionB: "90 minutes", optionC: "120 minutes", optionD: "45 minutes", correctOption: "B", explanation: "A standard football match lasts 90 minutes (two 45-minute halves)." },
    { text: "Sprint races like the 100m are classified as:", optionA: "field events", optionB: "track events", optionC: "team sports", optionD: "combat sports", correctOption: "B", explanation: "Sprints are track events in athletics." },
    { text: "The Super Eagles is the name of Nigeria's national:", optionA: "basketball team", optionB: "football team", optionC: "athletics team", optionD: "swimming team", correctOption: "B", explanation: "The Super Eagles is Nigeria's national football team." },
    { text: "In football, who is allowed to use their hands within the penalty area?", optionA: "Any player", optionB: "The goalkeeper", optionC: "The captain", optionD: "No one", correctOption: "B", explanation: "Only the goalkeeper may use their hands, and only within their penalty area." },
    { text: "Which disease can be prevented through good personal hygiene?", optionA: "Malaria", optionB: "Cholera", optionC: "Diabetes", optionD: "Asthma", correctOption: "B", explanation: "Cholera spreads through poor hygiene and contaminated water; good hygiene helps prevent it." },
    { text: "The high jump requires an athlete to:", optionA: "run the fastest", optionB: "jump over a raised bar", optionC: "throw a javelin", optionD: "swim across a pool", correctOption: "B", explanation: "High jump involves clearing a raised bar without knocking it down." },
    { text: "How many times has Nigeria won the Africa Cup of Nations (as of these lessons)?", optionA: "Once", optionB: "Twice", optionC: "Three times", optionD: "Never", correctOption: "C", explanation: "Nigeria won AFCON in 1980, 1994, and 2013." },
    { text: "Trimming nails regularly is part of:", optionA: "athletics training", optionB: "personal hygiene", optionC: "football rules", optionD: "team building", correctOption: "B", explanation: "Nail trimming is a basic personal hygiene practice." },
    { text: "A relay race involves:", optionA: "a single runner", optionB: "passing a baton between team members", optionC: "jumping over hurdles only", optionD: "swimming laps", correctOption: "B", explanation: "In relay races, team members pass a baton to each other in sequence." },
  ],
};
