import { SeedSubjectContent } from "../content-types";

export const ss2CivicEducation: SeedSubjectContent = {
  subjectSlug: "civic-education",
  classShortName: "SS2",
  stream: "NONE",
  lessons: [
    {
      title: "Human Rights and the Nigerian Constitution",
      summary: "Understand fundamental human rights guaranteed by the 1999 Nigerian Constitution (as amended).",
      durationMins: 24,
      term: 1,
      topic: { title: "Human Rights", nerdcCode: "CIV-SS2-H1", waecTopic: "Human Rights — WAEC Civic Education Syllabus", jambRelevance: "Fundamental rights are a recurring JAMB Government/Civic topic." },
      contentMd: `# Human Rights and the Nigerian Constitution

## What are Human Rights?
Human rights are basic freedoms and protections that every person is entitled to, simply by being human, regardless of nationality, ethnicity, or religion.

## Fundamental Human Rights in Chapter IV of the 1999 Constitution
1. **Right to life** (Section 33)
2. **Right to dignity of the human person** (Section 34) — freedom from torture and inhuman treatment
3. **Right to personal liberty** (Section 35)
4. **Right to fair hearing** (Section 36)
5. **Right to private and family life** (Section 37)
6. **Freedom of thought, conscience and religion** (Section 38)
7. **Freedom of expression and the press** (Section 39)
8. **Right to peaceful assembly and association** (Section 40)
9. **Freedom of movement** (Section 41)
10. **Right to freedom from discrimination** (Section 42)

## Enforcement of Rights
Nigerians can approach the courts (High Court) to enforce their fundamental rights if violated, through what is called a "fundamental rights enforcement action."

## Nigerian Context
Organisations like the National Human Rights Commission (NHRC) work to protect and promote human rights across Nigeria, addressing issues such as police brutality, gender-based violence, and unlawful detention.

## Practice
1. List five fundamental human rights guaranteed by the Nigerian Constitution.
2. Where in the constitution are fundamental rights found?
3. How can a Nigerian citizen enforce their rights if violated?

## Key Takeaways
- Chapter IV of the 1999 Constitution guarantees fundamental human rights to all Nigerians.
- Citizens can seek legal redress through the courts if their rights are violated.`,
    },
    {
      title: "Corruption and Its Effects on National Development",
      summary: "Understand the meaning, types, causes, and effects of corruption, and anti-corruption agencies in Nigeria.",
      durationMins: 22,
      term: 2,
      topic: { title: "Corruption", nerdcCode: "CIV-SS2-C4", waecTopic: "Corruption — WAEC Civic Education Syllabus" },
      contentMd: `# Corruption and Its Effects on National Development

## What is Corruption?
Corruption is the abuse of entrusted power (public or private) for personal gain, undermining fairness and trust in institutions.

## Types of Corruption
1. **Bribery** — offering or accepting money/favours to influence decisions.
2. **Embezzlement** — stealing or misusing public funds entrusted to an official.
3. **Nepotism** — favouring family/friends in appointments regardless of merit.
4. **Examination malpractice** — cheating in exams, a form of academic corruption.
5. **Extortion** — forcing someone to pay money through threats or abuse of power.

## Effects of Corruption on Nigeria
- Slows infrastructural development (roads, hospitals, schools).
- Reduces foreign investment due to loss of investor confidence.
- Increases poverty and inequality.
- Weakens public trust in government institutions.

## Nigeria's Anti-Corruption Agencies
- **EFCC** (Economic and Financial Crimes Commission) — investigates financial crimes.
- **ICPC** (Independent Corrupt Practices and Other Related Offences Commission) — tackles corruption in public offices.

## Practice
1. Define corruption in your own words.
2. List three types of corruption.
3. Name two agencies fighting corruption in Nigeria and their roles.

## Key Takeaways
- Corruption undermines national development across multiple sectors.
- Nigeria has established agencies like EFCC and ICPC to combat corruption, though citizen vigilance also plays a role.`,
    },
    {
      title: "Democracy and Citizen Participation",
      summary: "Understand the meaning and features of democracy, and how citizens participate in Nigeria's democratic process.",
      durationMins: 22,
      term: 3,
      topic: { title: "Democracy", nerdcCode: "CIV-SS2-D7", waecTopic: "Democracy — WAEC Civic Education / Government Syllabus", jambRelevance: "Democratic principles and structures are tested in JAMB Government." },
      contentMd: `# Democracy and Citizen Participation

## What is Democracy?
Democracy is a system of government where power belongs to the people, who exercise it directly or through elected representatives.

## Features of Democracy
1. Regular, free and fair elections
2. Rule of law — everyone, including leaders, is subject to the law
3. Protection of fundamental human rights
4. Separation of powers among Executive, Legislature, and Judiciary
5. Freedom of the press and expression

## Ways Citizens Participate in Democracy
- **Voting** during elections (Presidential, Gubernatorial, National/State Assembly)
- **Vying for elective office**
- **Joining political parties**
- **Peaceful protests and advocacy**
- **Community town hall meetings**
- **Serving on juries or as electoral officials (e.g., INEC ad-hoc staff)**

## Nigerian Context
The Independent National Electoral Commission (INEC) conducts Nigeria's elections. Since 1999, Nigeria has practiced uninterrupted democratic governance — the longest stretch in its history — with active citizen participation through the Permanent Voter's Card (PVC) registration process.

## Practice
1. Define democracy in your own words.
2. List three features of a democratic government.
3. Name two ways young Nigerians can participate in the democratic process before reaching voting age.

## Key Takeaways
- Democracy empowers citizens through elections and protected rights.
- Nigeria's Fourth Republic (since 1999) represents its longest period of continuous democratic rule.`,
    },
  ],
  quizQuestions: [
    { text: "Which chapter of the 1999 Nigerian Constitution guarantees fundamental human rights?", optionA: "Chapter I", optionB: "Chapter II", optionC: "Chapter III", optionD: "Chapter IV", correctOption: "D", explanation: "Chapter IV of the 1999 Constitution guarantees fundamental human rights." },
    { text: "Stealing public funds entrusted to an official is called:", optionA: "bribery", optionB: "embezzlement", optionC: "nepotism", optionD: "extortion", correctOption: "B", explanation: "Embezzlement is the theft or misuse of entrusted public funds." },
    { text: "Which agency investigates financial crimes in Nigeria?", optionA: "INEC", optionB: "EFCC", optionC: "NHRC", optionD: "NYSC", correctOption: "B", explanation: "The EFCC investigates and prosecutes financial and economic crimes." },
    { text: "In a democracy, power belongs to:", optionA: "the military", optionB: "the people", optionC: "traditional rulers only", optionD: "foreign investors", correctOption: "B", explanation: "Democracy is defined by power belonging to the people." },
    { text: "Which body conducts elections in Nigeria?", optionA: "EFCC", optionB: "ICPC", optionC: "INEC", optionD: "NHRC", correctOption: "C", explanation: "INEC (Independent National Electoral Commission) conducts Nigeria's elections." },
  ],
  examTitle: "SS2 Civic Education — First Term Examination",
  examQuestions: [
    { text: "The right to fair hearing is guaranteed under which section of the 1999 Constitution?", optionA: "Section 33", optionB: "Section 34", optionC: "Section 36", optionD: "Section 40", correctOption: "C", explanation: "Section 36 of the 1999 Constitution guarantees the right to fair hearing.", board: "WAEC" },
    { text: "Favouring family and friends in appointments regardless of merit is called:", optionA: "bribery", optionB: "nepotism", optionC: "embezzlement", optionD: "extortion", correctOption: "B", explanation: "Nepotism involves favouritism toward relatives or friends.", board: "WAEC" },
    { text: "Which of these is NOT an effect of corruption?", optionA: "Reduced foreign investment", optionB: "Improved infrastructure", optionC: "Increased poverty", optionD: "Weakened public trust", correctOption: "B", explanation: "Corruption typically worsens, not improves, infrastructure development.", board: "WAEC" },
    { text: "ICPC stands for:", optionA: "Independent Corrupt Practices Commission", optionB: "International Crime Prevention Council", optionC: "Independent Civic Participation Commission", optionD: "Internal Corruption Prevention Committee", correctOption: "A", explanation: "ICPC stands for Independent Corrupt Practices and Other Related Offences Commission.", board: "WAEC" },
    { text: "Which of these is a feature of democracy?", optionA: "One-party rule", optionB: "Rule of law", optionC: "Military control", optionD: "Suppression of the press", correctOption: "B", explanation: "Rule of law, where all are subject to the law, is a key democratic feature.", board: "JAMB" },
    { text: "How can citizens participate in a democracy?", optionA: "By avoiding elections", optionB: "By voting and joining political parties", optionC: "By ignoring civic duties", optionD: "By breaking laws", correctOption: "B", explanation: "Voting and political party membership are direct forms of democratic participation.", board: "WAEC" },
    { text: "Nigeria's current unbroken period of democracy began in:", optionA: "1979", optionB: "1993", optionC: "1999", optionD: "2015", correctOption: "C", explanation: "Nigeria's Fourth Republic, its longest continuous democracy, began in 1999.", board: "JAMB" },
    { text: "The separation of powers divides government into which three arms?", optionA: "Executive, Legislature, Judiciary", optionB: "Federal, State, Local", optionC: "President, Governor, Chairman", optionD: "Police, Army, Navy", correctOption: "A", explanation: "The three arms of government are Executive, Legislature and Judiciary.", board: "WAEC" },
    { text: "Freedom of expression and the press is guaranteed under Section:", optionA: "37", optionB: "38", optionC: "39", optionD: "42", correctOption: "C", explanation: "Section 39 guarantees freedom of expression and the press.", board: "WAEC" },
    { text: "Examination malpractice is an example of corruption in the:", optionA: "judiciary", optionB: "education sector", optionC: "military", optionD: "banking sector", correctOption: "B", explanation: "Examination malpractice is a form of corruption within the education sector.", board: "NECO" },
  ],
};
