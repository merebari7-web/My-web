import { SeedSubjectContent } from "../content-types";

export const p5IRS: SeedSubjectContent = {
  subjectSlug: "islamic-religious-studies",
  classShortName: "P5",
  lessons: [
    {
      title: "The Five Pillars of Islam",
      summary: "Learn the five fundamental acts of worship that form the foundation of a Muslim's faith and practice.",
      durationMins: 18,
      term: 1,
      topic: { title: "The Five Pillars of Islam", nerdcCode: "IRS-P5-1" },
      contentMd: `# The Five Pillars of Islam

## Introduction
The Five Pillars are the foundation of Muslim life, guiding worship and practice.

## The Five Pillars
1. **Shahada** — the declaration of faith: "There is no god but Allah, and Muhammad is His messenger."
2. **Salat** — performing the five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha).
3. **Zakat** — giving alms to the poor and needy, usually 2.5% of one's savings yearly.
4. **Sawm** — fasting during the month of Ramadan from dawn to sunset.
5. **Hajj** — the pilgrimage to Makkah, required once in a lifetime for those who are able.

## Practicing the Pillars in Nigeria
Nigerian Muslims observe Ramadan fasting together as a community, break their fast (Iftar) with family and neighbours, and celebrate Eid-el-Fitr at the end of the month with prayers and feasting.

## Practice
1. List the five pillars of Islam in order.
2. During which month do Muslims fast?
3. What does Zakat involve?

## Key Takeaways
- The Five Pillars form the core practices of Islam.
- They guide a Muslim's daily life, from prayer to charity to pilgrimage.`,
    },
    {
      title: "Respect and Kindness in Islam",
      summary: "Learn Islamic teachings on kindness to parents, neighbours and the less privileged.",
      durationMins: 16,
      term: 2,
      topic: { title: "Islamic Moral Teachings", nerdcCode: "IRS-P5-3" },
      contentMd: `# Respect and Kindness in Islam

## Kindness to Parents
Islam places great importance on honouring one's parents. The Prophet Muhammad (SAW) taught that paradise lies at the feet of one's mother, emphasising deep respect and care for parents.

## Kindness to Neighbours
The Prophet (SAW) said that a person is not a true believer if their neighbour is not safe from their harm, and encouraged sharing food and checking on neighbours' welfare.

## Charity to the Poor
Giving Sadaqah (voluntary charity) beyond the obligatory Zakat is highly encouraged, especially to orphans and the needy in the community.

## Nigerian Context
During Eid celebrations, many Nigerian Muslim families prepare extra food to share with neighbours and give gifts to children in the community, reflecting these values of kindness and charity.

## Practice
1. What did the Prophet say about paradise and mothers?
2. Name one way Muslims show kindness to neighbours.
3. What is Sadaqah?

## Key Takeaways
- Islam emphasises respect for parents and kindness to neighbours.
- Charity (Zakat and Sadaqah) is central to caring for the less privileged.`,
    },
    {
      title: "Stories of the Prophets: Prophet Yusuf (AS)",
      summary: "Learn the story of Prophet Yusuf (Joseph) and the lessons of patience and forgiveness.",
      durationMins: 18,
      term: 3,
      topic: { title: "Stories of the Prophets", nerdcCode: "IRS-P5-6" },
      contentMd: `# Stories of the Prophets: Prophet Yusuf (AS)

## The Story
Prophet Yusuf (AS) was thrown into a well by his jealous brothers and later sold into slavery in Egypt. Despite great hardship, including false accusation and imprisonment, Yusuf remained patient and trusted Allah. He was eventually elevated to a position of great authority in Egypt, and years later, forgave his brothers when they came seeking help during a famine.

## Lessons from the Story
1. **Patience (Sabr)** — Yusuf endured years of hardship without losing faith.
2. **Forgiveness** — He forgave his brothers instead of taking revenge.
3. **Trust in Allah** — He remained faithful through every trial.

## Application
This story, found in Surah Yusuf, teaches Muslims to remain patient during difficulties and to forgive those who wrong them, trusting that Allah rewards those who persevere.

## Practice
1. Who threw Yusuf into the well?
2. What quality did Yusuf show when he forgave his brothers?
3. In which Surah is this story found?

## Key Takeaways
- The story of Yusuf (AS) teaches patience, trust in Allah, and forgiveness.
- These values apply to overcoming challenges in everyday life.`,
    },
  ],
  quizQuestions: [
    { text: "How many pillars of Islam are there?", optionA: "Three", optionB: "Four", optionC: "Five", optionD: "Six", correctOption: "C", explanation: "There are Five Pillars of Islam." },
    { text: "Which pillar involves fasting?", optionA: "Shahada", optionB: "Sawm", optionC: "Zakat", optionD: "Hajj", correctOption: "B", explanation: "Sawm refers to fasting, especially during Ramadan." },
    { text: "Zakat is best described as:", optionA: "the declaration of faith", optionB: "the pilgrimage to Makkah", optionC: "giving alms to the poor", optionD: "the five daily prayers", correctOption: "C", explanation: "Zakat is obligatory almsgiving to the poor and needy." },
    { text: "Who threw Prophet Yusuf into the well?", optionA: "His father", optionB: "His brothers", optionC: "Strangers", optionD: "His friends", correctOption: "B", explanation: "Yusuf's jealous brothers threw him into the well." },
    { text: "The pilgrimage to Makkah is called:", optionA: "Hajj", optionB: "Salat", optionC: "Sawm", optionD: "Zakat", correctOption: "A", explanation: "Hajj is the pilgrimage to Makkah, one of the Five Pillars." },
  ],
  examTitle: "Primary 5 Islamic Religious Studies — First Term Examination",
  examQuestions: [
    { text: "The declaration of faith in Islam is called:", optionA: "Shahada", optionB: "Salat", optionC: "Sawm", optionD: "Hajj", correctOption: "A", explanation: "Shahada is the declaration of faith in Islam." },
    { text: "Muslims pray how many times a day?", optionA: "Three", optionB: "Four", optionC: "Five", optionD: "Seven", correctOption: "C", explanation: "Muslims perform five daily prayers (Salat)." },
    { text: "Ramadan is observed through:", optionA: "fasting", optionB: "pilgrimage", optionC: "almsgiving only", optionD: "declaration of faith", correctOption: "A", explanation: "Ramadan is the month of obligatory fasting (Sawm)." },
    { text: "Prophet Yusuf was eventually given a position of authority in:", optionA: "Makkah", optionB: "Egypt", optionC: "Madinah", optionD: "Syria", correctOption: "B", explanation: "Yusuf rose to a position of authority in Egypt." },
    { text: "Voluntary charity beyond Zakat is called:", optionA: "Sadaqah", optionB: "Hajj", optionC: "Shahada", optionD: "Salat", correctOption: "A", explanation: "Sadaqah refers to voluntary acts of charity." },
    { text: "The Prophet (SAW) said paradise lies at the feet of:", optionA: "teachers", optionB: "mothers", optionC: "kings", optionD: "friends", correctOption: "B", explanation: "This hadith emphasises the honour due to mothers." },
    { text: "What quality did Yusuf show by forgiving his brothers?", optionA: "Anger", optionB: "Forgiveness", optionC: "Pride", optionD: "Revenge", correctOption: "B", explanation: "Yusuf forgave his brothers instead of seeking revenge." },
    { text: "Eid-el-Fitr is celebrated at the end of:", optionA: "Hajj", optionB: "Ramadan", optionC: "the school term", optionD: "the farming season", correctOption: "B", explanation: "Eid-el-Fitr marks the end of the Ramadan fasting month." },
    { text: "A true believer, according to the Prophet, ensures their neighbour is safe from their:", optionA: "wealth", optionB: "harm", optionC: "kindness", optionD: "visits", correctOption: "B", explanation: "The Prophet taught that neighbours should be safe from one's harm." },
    { text: "The story of Yusuf is found in which Surah?", optionA: "Surah Yusuf", optionB: "Surah Baqarah", optionC: "Surah Ikhlas", optionD: "Surah Fatiha", correctOption: "A", explanation: "The story of Prophet Yusuf is detailed in Surah Yusuf." },
  ],
};

export const p5ComputerStudies: SeedSubjectContent = {
  subjectSlug: "computer-studies",
  classShortName: "P5",
  lessons: [
    {
      title: "Parts of a Computer System",
      summary: "Identify the main hardware components of a computer and their functions.",
      durationMins: 18,
      term: 1,
      topic: { title: "Computer Hardware", nerdcCode: "CMP-P5-1" },
      contentMd: `# Parts of a Computer System

## Main Components
1. **Monitor** — displays what the computer is doing (output device).
2. **Keyboard** — used to type letters, numbers and commands (input device).
3. **Mouse** — used to point, click and select items on screen (input device).
4. **System Unit (CPU box)** — the "brain" of the computer that processes information.
5. **Speakers** — output sound from the computer.
6. **Printer** — produces a paper (hard) copy of digital documents.

## Input vs Output Devices
- **Input devices** send information INTO the computer (e.g., keyboard, mouse, scanner).
- **Output devices** show information FROM the computer (e.g., monitor, printer, speaker).

## Practice
1. Name two input devices.
2. Name two output devices.
3. What is the function of the system unit?

## Key Takeaways
- A computer system is made of hardware parts working together.
- Devices are classified as input or output based on their function.`,
    },
    {
      title: "Introduction to Microsoft Word",
      summary: "Learn the basic tools in Microsoft Word used for typing and formatting documents.",
      durationMins: 20,
      term: 2,
      topic: { title: "Word Processing", nerdcCode: "CMP-P5-4" },
      contentMd: `# Introduction to Microsoft Word

## What is Microsoft Word?
Microsoft Word is a word processing application used to create, edit, and format text documents like letters, essays, and reports.

## Basic Tools
- **Font** — changes the style of your text (e.g., Arial, Times New Roman).
- **Bold, Italic, Underline** — used to emphasise text.
- **Font Size** — increases or decreases the size of the text.
- **Alignment** — arranges text to the left, right, centre, or justified.
- **Save button** — saves your document so you don't lose your work.

## Practice
1. Name two formatting tools found in Microsoft Word.
2. Why is it important to save your document regularly?
3. Type your name and make it bold and centred.

## Key Takeaways
- Microsoft Word helps us create and format professional documents.
- Regularly saving your work prevents loss of data.`,
    },
    {
      title: "Introduction to Coding: Sequencing with Scratch",
      summary: "Understand the basic idea of coding as giving a computer step-by-step instructions, using simple block-based logic.",
      durationMins: 20,
      term: 3,
      topic: { title: "Introduction to Coding", nerdcCode: "CMP-P5-7", jambRelevance: "Foundational coding concepts build toward JSS/SS computer studies." },
      contentMd: `# Introduction to Coding: Sequencing with Scratch

## What is Coding?
Coding means giving a computer a set of instructions (called a program) to perform a task, step-by-step, in the correct order (sequence).

## Block-Based Coding
Programs like Scratch let you build code by snapping together blocks, without typing complex text — perfect for beginners.

## Example: Moving a Character
To make a cat character walk across the screen and say "Hello Nigeria!", you would arrange these blocks in order:
1. "When green flag clicked" (start block)
2. "Move 10 steps" (movement block)
3. "Say 'Hello Nigeria!' for 2 seconds" (looks block)

## Why Sequencing Matters
If you swap the order of these blocks, the program may not work as expected. Just like following a recipe, the order of instructions in coding matters!

## Practice
1. What is coding?
2. Why is the order of instructions (sequencing) important?
3. Write three simple steps to "code" how you would prepare a cup of tea.

## Key Takeaways
- Coding is giving a computer clear, ordered instructions.
- Sequencing errors can cause a program to behave incorrectly.`,
    },
  ],
  quizQuestions: [
    { text: "Which of these is an input device?", optionA: "Monitor", optionB: "Printer", optionC: "Keyboard", optionD: "Speaker", correctOption: "C", explanation: "A keyboard is used to send information into the computer, making it an input device." },
    { text: "Which tool in MS Word makes text thicker?", optionA: "Italic", optionB: "Bold", optionC: "Underline", optionD: "Align", correctOption: "B", explanation: "The Bold tool makes text appear thicker/darker." },
    { text: "The 'brain' of the computer is the:", optionA: "monitor", optionB: "system unit (CPU)", optionC: "mouse", optionD: "keyboard", correctOption: "B", explanation: "The system unit houses the CPU, which processes all computer instructions." },
    { text: "Coding means giving a computer:", optionA: "electricity", optionB: "step-by-step instructions", optionC: "a new screen", optionD: "internet access", correctOption: "B", explanation: "Coding involves writing ordered instructions for a computer to follow." },
    { text: "A printer is an example of a(n):", optionA: "input device", optionB: "output device", optionC: "processing device", optionD: "storage device", correctOption: "B", explanation: "A printer produces (outputs) a paper copy of digital content." },
  ],
  examTitle: "Primary 5 Computer Studies — First Term Examination",
  examQuestions: [
    { text: "Which device is used to point and click on the screen?", optionA: "Mouse", optionB: "Speaker", optionC: "Monitor", optionD: "Printer", correctOption: "A", explanation: "A mouse is used to point, click, and select items on screen." },
    { text: "Microsoft Word is mainly used for:", optionA: "playing games", optionB: "word processing", optionC: "browsing the internet", optionD: "watching videos", correctOption: "B", explanation: "Microsoft Word is a word processing application." },
    { text: "Which is an output device?", optionA: "Keyboard", optionB: "Mouse", optionC: "Monitor", optionD: "Scanner", correctOption: "C", explanation: "A monitor displays (outputs) information from the computer." },
    { text: "In coding, arranging instructions in the correct order is called:", optionA: "sequencing", optionB: "formatting", optionC: "printing", optionD: "saving", correctOption: "A", explanation: "Sequencing means arranging instructions in the correct step-by-step order." },
    { text: "The Save button in MS Word is used to:", optionA: "delete a document", optionB: "store your document", optionC: "print a document", optionD: "close the application", correctOption: "B", explanation: "The Save button stores your document so your work is not lost." },
    { text: "Scratch is an example of:", optionA: "a hardware device", optionB: "block-based coding software", optionC: "a printer", optionD: "an operating system", correctOption: "B", explanation: "Scratch is a block-based visual coding platform for beginners." },
    { text: "Which of these best changes the size of text in MS Word?", optionA: "Font size tool", optionB: "Save tool", optionC: "Mouse", optionD: "Printer", correctOption: "A", explanation: "The font size tool increases or decreases text size." },
    { text: "A scanner is classified as a(n):", optionA: "output device", optionB: "input device", optionC: "storage device", optionD: "processing device", correctOption: "B", explanation: "A scanner captures (inputs) images/documents into the computer." },
    { text: "If coding instructions are given out of order, the program may:", optionA: "run faster", optionB: "work perfectly", optionC: "not work as expected", optionD: "delete itself", correctOption: "C", explanation: "Wrong sequencing can cause a program to behave incorrectly." },
    { text: "Which part of the computer processes data?", optionA: "CPU", optionB: "Keyboard", optionC: "Monitor", optionD: "Mouse", correctOption: "A", explanation: "The CPU (Central Processing Unit) processes data in a computer." },
  ],
};
