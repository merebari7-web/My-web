import { SeedSubjectContent } from "../content-types";

export const p5Hausa: SeedSubjectContent = {
  subjectSlug: "hausa-language",
  classShortName: "P5",
  lessons: [
    {
      title: "Gaisuwa da Kalmomin Yau da Kullum (Greetings and Everyday Words)",
      summary: "Learn common Hausa greetings and everyday vocabulary used at home and school.",
      durationMins: 16,
      term: 1,
      topic: { title: "Greetings", nerdcCode: "HAU-P5-1" },
      contentMd: `# Gaisuwa da Kalmomin Yau da Kullum

## Gaisuwa (Greetings)
- **Sannu** — Hello
- **Ina kwana?** — Good morning (How was the night?)
- **Ina wuni?** — Good afternoon (How is the day?)
- **Barka da yamma** — Good evening
- **Sai an jima** — See you later

## Kalmomin Yau da Kullum (Everyday Words)
- **Ruwa** — Water
- **Abinci** — Food
- **Makaranta** — School
- **Malam/Malama** — Teacher (male/female)
- **Iyali** — Family

## Aiki (Practice)
1. Yaya za a ce "Good morning" a Hausa?
2. Menene ma'anar "Makaranta"?
3. Fassara: "My family is going to school."

## Key Takeaways
- Greetings are an important part of Hausa culture, shown before any conversation.
- Practicing daily vocabulary builds confidence in speaking Hausa.`,
    },
    {
      title: "Lambobi 1-100 (Numbers 1-100)",
      summary: "Count and read numbers from 1 to 100 in Hausa.",
      durationMins: 18,
      term: 2,
      topic: { title: "Numbers", nerdcCode: "HAU-P5-3" },
      contentMd: `# Lambobi 1-100

## Lambobi na Asali (Basic Numbers)
- 1 — Daya
- 2 — Biyu
- 3 — Uku
- 4 — Hudu
- 5 — Biyar
- 6 — Shida
- 7 — Bakwai
- 8 — Takwas
- 9 — Tara
- 10 — Goma

## Lambobi Manya (Bigger Numbers)
- 20 — Ashirin
- 30 — Talatin
- 50 — Hamsin
- 100 — Dari

## Aiki (Practice)
1. Rubuta lambobi 1 zuwa 10 a Hausa.
2. Menene "Ashirin" a Turanci (English)?
3. Fassara: "I have twenty naira."

## Key Takeaways
- Numbers are essential for counting money, age, and quantities in daily Hausa conversation.`,
    },
    {
      title: "Iyali da Alaka (Family and Relationships)",
      summary: "Learn vocabulary for family members and relationships in Hausa culture.",
      durationMins: 16,
      term: 3,
      topic: { title: "Family Vocabulary", nerdcCode: "HAU-P5-6" },
      contentMd: `# Iyali da Alaka

## Kalmomin Iyali (Family Words)
- **Uba** — Father
- **Uwa** — Mother
- **Dan'uwa** — Brother
- **'Yar'uwa** — Sister
- **Kaka** — Grandparent
- **Baba** — Uncle/Father (respectful term)

## Al'adar Iyali a Hausa (Family Culture)
In Hausa culture, respect for elders is highly valued. Children are taught to greet their parents and elders first thing in the morning, and extended family plays an important role in raising children.

## Aiki (Practice)
1. Menene kalmar Hausa don "Mother"?
2. Sunanta 'yan uwanka guda uku a Hausa.
3. Me ya sa ake girmama tsofaffi a al'adar Hausa?

## Key Takeaways
- Family vocabulary helps describe relationships within the household.
- Respect for elders is a core value in Hausa culture.`,
    },
  ],
  quizQuestions: [
    { text: "What does 'Sannu' mean in English?", optionA: "Goodbye", optionB: "Hello", optionC: "Thank you", optionD: "Sorry", correctOption: "B", explanation: "'Sannu' is a common Hausa greeting meaning 'Hello'." },
    { text: "What is the Hausa word for 'water'?", optionA: "Abinci", optionB: "Ruwa", optionC: "Makaranta", optionD: "Iyali", correctOption: "B", explanation: "'Ruwa' means water in Hausa." },
    { text: "What is 'Uku' in English?", optionA: "One", optionB: "Two", optionC: "Three", optionD: "Four", correctOption: "C", explanation: "'Uku' means three in Hausa." },
    { text: "The Hausa word for 'Father' is:", optionA: "Uwa", optionB: "Uba", optionC: "Kaka", optionD: "Baba only", correctOption: "B", explanation: "'Uba' means father in Hausa." },
    { text: "'Goma' means:", optionA: "Five", optionB: "Ten", optionC: "Twenty", optionD: "One hundred", correctOption: "B", explanation: "'Goma' means ten in Hausa." },
  ],
  examTitle: "Primary 5 Hausa Language — First Term Examination",
  examQuestions: [
    { text: "'Ina kwana?' is used to greet someone in the:", optionA: "morning", optionB: "afternoon", optionC: "evening", optionD: "night", correctOption: "A", explanation: "'Ina kwana?' is a morning greeting in Hausa." },
    { text: "The Hausa word for 'school' is:", optionA: "Iyali", optionB: "Makaranta", optionC: "Abinci", optionD: "Ruwa", correctOption: "B", explanation: "'Makaranta' means school." },
    { text: "'Biyar' means:", optionA: "Four", optionB: "Five", optionC: "Six", optionD: "Seven", correctOption: "B", explanation: "'Biyar' means five in Hausa." },
    { text: "The Hausa word for 'mother' is:", optionA: "Uwa", optionB: "Uba", optionC: "Dan'uwa", optionD: "Kaka", correctOption: "A", explanation: "'Uwa' means mother in Hausa." },
    { text: "'Dari' represents the number:", optionA: "10", optionB: "50", optionC: "100", optionD: "1000", correctOption: "C", explanation: "'Dari' means one hundred." },
    { text: "'Malam' refers to a:", optionA: "male teacher", optionB: "female student", optionC: "family member", optionD: "type of food", correctOption: "A", explanation: "'Malam' is the term for a male teacher in Hausa." },
    { text: "'Dan'uwa' means:", optionA: "sister", optionB: "brother", optionC: "father", optionD: "uncle", correctOption: "B", explanation: "'Dan'uwa' means brother in Hausa." },
    { text: "'Talatin' means:", optionA: "13", optionB: "20", optionC: "30", optionD: "40", correctOption: "C", explanation: "'Talatin' means thirty in Hausa." },
    { text: "'Barka da yamma' is a greeting used in the:", optionA: "morning", optionB: "afternoon", optionC: "evening", optionD: "night only", correctOption: "C", explanation: "'Barka da yamma' means 'Good evening'." },
    { text: "'Abinci' means:", optionA: "Water", optionB: "Food", optionC: "School", optionD: "Family", correctOption: "B", explanation: "'Abinci' means food in Hausa." },
  ],
};

export const p5Igbo: SeedSubjectContent = {
  subjectSlug: "igbo-language",
  classShortName: "P5",
  lessons: [
    {
      title: "Ekele na Okwu Ndị A Na-Eji Kwa Ụbọchị (Greetings and Everyday Words)",
      summary: "Learn common Igbo greetings and everyday vocabulary.",
      durationMins: 16,
      term: 1,
      topic: { title: "Greetings", nerdcCode: "IGB-P5-1" },
      contentMd: `# Ekele na Okwu Ndị A Na-Eji Kwa Ụbọchị

## Ekele (Greetings)
- **Ndewo** — Hello
- **Ụtụtụ ọma** — Good morning
- **Ehihie ọma** — Good afternoon
- **Mgbede ọma** — Good evening
- **Ka ọ dị** — See you later / Take care

## Okwu Ndị A Na-Eji Kwa Ụbọchị (Everyday Words)
- **Mmiri** — Water
- **Nri** — Food
- **Ụlọ akwụkwọ** — School
- **Onye nkuzi** — Teacher
- **Ezinụlọ** — Family

## Omume (Practice)
1. Kedu ka ị ga-esi kwuo "Good morning" n'asụsụ Igbo?
2. Kedu ihe "Ezinụlọ" pụtara?
3. Tụgharịa: "My family loves rice."

## Key Takeaways
- Greetings show respect and are essential in Igbo culture.
- Learning everyday vocabulary builds a strong foundation in Igbo.`,
    },
    {
      title: "Ọnụọgụgụ 1-100 (Numbers 1-100)",
      summary: "Count and read numbers from 1 to 100 in Igbo.",
      durationMins: 18,
      term: 2,
      topic: { title: "Numbers", nerdcCode: "IGB-P5-3" },
      contentMd: `# Ọnụọgụgụ 1-100

## Ọnụọgụgụ Bụ Isi (Basic Numbers)
- 1 — Otu
- 2 — Abụọ
- 3 — Atọ
- 4 — Anọ
- 5 — Ise
- 6 — Isii
- 7 — Asaa
- 8 — Asatọ
- 9 — Itoolu
- 10 — Iri

## Ọnụọgụgụ Buru Ibu (Bigger Numbers)
- 20 — Iri abụọ
- 50 — Iri ise
- 100 — Otu narị

## Omume (Practice)
1. Dee ọnụọgụgụ 1 ruo 10 n'asụsụ Igbo.
2. Kedu ihe "Iri abụọ" pụtara na Bekee (English)?
3. Tụgharịa: "I have ten oranges."

## Key Takeaways
- Numbers are used daily for counting money, age, and items.`,
    },
    {
      title: "Ezinụlọ na Mmekọrịta (Family and Relationships)",
      summary: "Learn vocabulary for family members in Igbo and cultural values around family life.",
      durationMins: 16,
      term: 3,
      topic: { title: "Family Vocabulary", nerdcCode: "IGB-P5-6" },
      contentMd: `# Ezinụlọ na Mmekọrịta

## Okwu Ezinụlọ (Family Words)
- **Nna** — Father
- **Nne** — Mother
- **Nwanne nwoke** — Brother
- **Nwanne nwaanyị** — Sister
- **Nne/nna ochie** — Grandparent

## Omenala Ezinụlọ n'Ala Igbo (Family Culture)
In Igbo culture, the extended family (Ikwu na Ibe) plays a big role in raising children. Respect for elders and cooperation among family members are highly valued, often demonstrated during New Yam Festival (Iri ji ohuru) celebrations.

## Omume (Practice)
1. Kedu okwu Igbo maka "Mother"?
2. Kpọọ aha nwanne gị atọ n'asụsụ Igbo.
3. Gịnị bụ Iri ji ohuru?

## Key Takeaways
- Family vocabulary helps describe household relationships in Igbo.
- Extended family and respect for elders remain central Igbo values.`,
    },
  ],
  quizQuestions: [
    { text: "What does 'Ndewo' mean?", optionA: "Goodbye", optionB: "Hello", optionC: "Thank you", optionD: "Please", correctOption: "B", explanation: "'Ndewo' is a common Igbo greeting meaning 'Hello'." },
    { text: "The Igbo word for 'water' is:", optionA: "Nri", optionB: "Mmiri", optionC: "Ezinụlọ", optionD: "Iri", correctOption: "B", explanation: "'Mmiri' means water in Igbo." },
    { text: "'Atọ' means:", optionA: "One", optionB: "Two", optionC: "Three", optionD: "Four", correctOption: "C", explanation: "'Atọ' means three in Igbo." },
    { text: "The Igbo word for 'Father' is:", optionA: "Nne", optionB: "Nna", optionC: "Nwanne", optionD: "Nna ochie", correctOption: "B", explanation: "'Nna' means father in Igbo." },
    { text: "'Iri' means:", optionA: "Five", optionB: "Ten", optionC: "Twenty", optionD: "One hundred", correctOption: "B", explanation: "'Iri' means ten in Igbo." },
  ],
  examTitle: "Primary 5 Igbo Language — First Term Examination",
  examQuestions: [
    { text: "'Ụtụtụ ọma' is used to greet someone in the:", optionA: "morning", optionB: "afternoon", optionC: "evening", optionD: "night", correctOption: "A", explanation: "'Ụtụtụ ọma' means 'Good morning'." },
    { text: "The Igbo word for 'school' is:", optionA: "Ezinụlọ", optionB: "Ụlọ akwụkwọ", optionC: "Nri", optionD: "Mmiri", correctOption: "B", explanation: "'Ụlọ akwụkwọ' means school." },
    { text: "'Ise' means:", optionA: "Four", optionB: "Five", optionC: "Six", optionD: "Seven", correctOption: "B", explanation: "'Ise' means five in Igbo." },
    { text: "The Igbo word for 'mother' is:", optionA: "Nne", optionB: "Nna", optionC: "Nwanne", optionD: "Nna ochie", correctOption: "A", explanation: "'Nne' means mother in Igbo." },
    { text: "'Otu narị' represents the number:", optionA: "10", optionB: "50", optionC: "100", optionD: "1000", correctOption: "C", explanation: "'Otu narị' means one hundred." },
    { text: "'Onye nkuzi' means:", optionA: "student", optionB: "teacher", optionC: "family", optionD: "food", correctOption: "B", explanation: "'Onye nkuzi' means teacher in Igbo." },
    { text: "'Nwanne nwoke' means:", optionA: "sister", optionB: "brother", optionC: "father", optionD: "uncle", correctOption: "B", explanation: "'Nwanne nwoke' means brother in Igbo." },
    { text: "'Iri ise' means:", optionA: "15", optionB: "20", optionC: "50", optionD: "40", correctOption: "C", explanation: "'Iri ise' means fifty in Igbo." },
    { text: "'Mgbede ọma' is a greeting used in the:", optionA: "morning", optionB: "afternoon", optionC: "evening", optionD: "night only", correctOption: "C", explanation: "'Mgbede ọma' means 'Good evening'." },
    { text: "'Nri' means:", optionA: "Water", optionB: "Food", optionC: "School", optionD: "Family", correctOption: "B", explanation: "'Nri' means food in Igbo." },
  ],
};

export const p5Yoruba: SeedSubjectContent = {
  subjectSlug: "yoruba-language",
  classShortName: "P5",
  lessons: [
    {
      title: "Ìkíni àti Àwọn Ọ̀rọ̀ Ojoojúmọ́ (Greetings and Everyday Words)",
      summary: "Learn common Yoruba greetings and everyday vocabulary.",
      durationMins: 16,
      term: 1,
      topic: { title: "Greetings", nerdcCode: "YOR-P5-1" },
      contentMd: `# Ìkíni àti Àwọn Ọ̀rọ̀ Ojoojúmọ́

## Ìkíni (Greetings)
- **Bawo ni** — Hello / How are you
- **Ẹ kú àárọ̀** — Good morning
- **Ẹ kú ọ̀sán** — Good afternoon
- **Ẹ kú alẹ́** — Good evening
- **Ó dàbọ̀** — Goodbye

## Àwọn Ọ̀rọ̀ Ojoojúmọ́ (Everyday Words)
- **Omi** — Water
- **Oúnjẹ** — Food
- **Ilé-ìwé** — School
- **Olùkọ́** — Teacher
- **Ẹbí** — Family

## Ìṣe (Practice)
1. Báwo ni a ṣe ń kí ẹnìkan ní òwúrọ̀ ní Yorùbá?
2. Kí ni "Ẹbí" túmọ̀ sí?
3. Túmọ̀: "My family is eating food."

## Key Takeaways
- Greetings reflect the deep respect embedded in Yoruba culture.
- Everyday vocabulary builds a foundation for fluency.`,
    },
    {
      title: "Àwọn Nọ́mbà 1-100 (Numbers 1-100)",
      summary: "Count and read numbers from 1 to 100 in Yoruba.",
      durationMins: 18,
      term: 2,
      topic: { title: "Numbers", nerdcCode: "YOR-P5-3" },
      contentMd: `# Àwọn Nọ́mbà 1-100

## Àwọn Nọ́mbà Kékeré (Basic Numbers)
- 1 — Ọ̀kan
- 2 — Èjì
- 3 — Ẹ̀ta
- 4 — Ẹ̀rin
- 5 — Àrún
- 6 — Ẹ̀fà
- 7 — Èje
- 8 — Ẹ̀jọ
- 9 — Ẹ̀sán
- 10 — Ẹ̀wá

## Àwọn Nọ́mbà Ńlá (Bigger Numbers)
- 20 — Ogún
- 50 — Àádọ́ta
- 100 — Ọgọ́rùn-ún

## Ìṣe (Practice)
1. Kọ àwọn nọ́mbà 1 sí 10 ní Yorùbá.
2. Kí ni "Ogún" túmọ̀ sí ní Gẹ̀ẹ́sì (English)?
3. Túmọ̀: "I have ten Naira."

## Key Takeaways
- Numbers are important for counting and everyday transactions in Yoruba communities.`,
    },
    {
      title: "Ẹbí àti Ìbáṣepọ̀ (Family and Relationships)",
      summary: "Learn vocabulary for family members and Yoruba cultural values on family life.",
      durationMins: 16,
      term: 3,
      topic: { title: "Family Vocabulary", nerdcCode: "YOR-P5-6" },
      contentMd: `# Ẹbí àti Ìbáṣepọ̀

## Àwọn Ọ̀rọ̀ Ẹbí (Family Words)
- **Bàbá** — Father
- **Ìyá** — Mother
- **Ẹ̀gbọ́n ọkùnrin** — Older brother
- **Ẹ̀gbọ́n obìnrin** — Older sister
- **Bàbá-àgbà / Ìyá-àgbà** — Grandfather / Grandmother

## Àṣà Ẹbí ní Ilẹ̀ Yorùbá (Family Culture)
In Yoruba culture, respect for elders is shown through prostrating (for boys) or kneeling (for girls) when greeting older relatives. The extended family plays a strong role in raising children and celebrating milestones together.

## Ìṣe (Practice)
1. Kí ni ọ̀rọ̀ Yorùbá fún "Mother"?
2. Dárúkọ àwọn ẹ̀gbọ́n rẹ mẹ́ta ní Yorùbá.
3. Kí ni àṣà ìkíni àgbà ní ilẹ̀ Yorùbá?

## Key Takeaways
- Family vocabulary helps describe relationships within Yoruba households.
- Respect for elders is a central value, shown through greeting customs.`,
    },
  ],
  quizQuestions: [
    { text: "What does 'Bawo ni' mean?", optionA: "Goodbye", optionB: "Hello/How are you", optionC: "Thank you", optionD: "Sorry", correctOption: "B", explanation: "'Bawo ni' is a common Yoruba greeting." },
    { text: "The Yoruba word for 'water' is:", optionA: "Oúnjẹ", optionB: "Omi", optionC: "Ilé-ìwé", optionD: "Ẹbí", correctOption: "B", explanation: "'Omi' means water in Yoruba." },
    { text: "'Ẹ̀ta' means:", optionA: "One", optionB: "Two", optionC: "Three", optionD: "Four", correctOption: "C", explanation: "'Ẹ̀ta' means three in Yoruba." },
    { text: "The Yoruba word for 'Father' is:", optionA: "Ìyá", optionB: "Bàbá", optionC: "Ẹ̀gbọ́n", optionD: "Bàbá-àgbà", correctOption: "B", explanation: "'Bàbá' means father in Yoruba." },
    { text: "'Ẹ̀wá' means:", optionA: "Five", optionB: "Ten", optionC: "Twenty", optionD: "One hundred", correctOption: "B", explanation: "'Ẹ̀wá' means ten in Yoruba." },
  ],
  examTitle: "Primary 5 Yoruba Language — First Term Examination",
  examQuestions: [
    { text: "'Ẹ kú àárọ̀' is used to greet someone in the:", optionA: "morning", optionB: "afternoon", optionC: "evening", optionD: "night", correctOption: "A", explanation: "'Ẹ kú àárọ̀' means 'Good morning'." },
    { text: "The Yoruba word for 'school' is:", optionA: "Ẹbí", optionB: "Ilé-ìwé", optionC: "Oúnjẹ", optionD: "Omi", correctOption: "B", explanation: "'Ilé-ìwé' means school." },
    { text: "'Àrún' means:", optionA: "Four", optionB: "Five", optionC: "Six", optionD: "Seven", correctOption: "B", explanation: "'Àrún' means five in Yoruba." },
    { text: "The Yoruba word for 'mother' is:", optionA: "Ìyá", optionB: "Bàbá", optionC: "Ẹ̀gbọ́n", optionD: "Bàbá-àgbà", correctOption: "A", explanation: "'Ìyá' means mother in Yoruba." },
    { text: "'Ọgọ́rùn-ún' represents the number:", optionA: "10", optionB: "50", optionC: "100", optionD: "1000", correctOption: "C", explanation: "'Ọgọ́rùn-ún' means one hundred." },
    { text: "'Olùkọ́' means:", optionA: "student", optionB: "teacher", optionC: "family", optionD: "food", correctOption: "B", explanation: "'Olùkọ́' means teacher in Yoruba." },
    { text: "'Ẹ̀gbọ́n ọkùnrin' means:", optionA: "older sister", optionB: "older brother", optionC: "father", optionD: "uncle", correctOption: "B", explanation: "'Ẹ̀gbọ́n ọkùnrin' means older brother in Yoruba." },
    { text: "'Àádọ́ta' means:", optionA: "15", optionB: "20", optionC: "50", optionD: "40", correctOption: "C", explanation: "'Àádọ́ta' means fifty in Yoruba." },
    { text: "'Ẹ kú alẹ́' is a greeting used in the:", optionA: "morning", optionB: "afternoon", optionC: "evening", optionD: "night only", correctOption: "C", explanation: "'Ẹ kú alẹ́' means 'Good evening'." },
    { text: "'Oúnjẹ' means:", optionA: "Water", optionB: "Food", optionC: "School", optionD: "Family", correctOption: "B", explanation: "'Oúnjẹ' means food in Yoruba." },
  ],
};
