import { SeedSubjectContent } from "../content-types";

export const ss2Government: SeedSubjectContent = {
  subjectSlug: "government",
  classShortName: "SS2",
  stream: "ARTS",
  lessons: [
    {
      title: "Systems of Government: Federalism vs Unitary System",
      summary: "Compare federal and unitary systems of government, using Nigeria as a case study of federalism.",
      durationMins: 24,
      term: 1,
      topic: { title: "Systems of Government", nerdcCode: "GOV-SS2-1", waecTopic: "Systems of Government — WAEC Government Syllabus", jambRelevance: "Comparative government systems are a recurring JAMB Government topic." },
      contentMd: `# Systems of Government: Federalism vs Unitary System

## Unitary System
In a unitary system, all governmental power is concentrated in a central government, which may delegate limited powers to local authorities that can be revoked. Example: United Kingdom, France.

## Federal System
In a federal system, power is constitutionally divided between a central (federal) government and constituent states/regions, each with defined areas of authority. Example: Nigeria, United States, Brazil.

## Features of Nigerian Federalism
1. A written constitution (the 1999 Constitution, as amended) defining power-sharing.
2. Two/three levels of government: Federal, State, and Local Government.
3. An Exclusive Legislative List (only the Federal Government can legislate — e.g., defense, currency).
4. A Concurrent Legislative List (both Federal and State Governments can legislate — e.g., education, health).
5. Residual matters left to the States.
6. A Supreme Court to resolve disputes between different levels of government.

## Why Nigeria Adopted Federalism
Given Nigeria's ethnic and religious diversity (over 250 ethnic groups), federalism allows regions to manage local affairs while remaining united under one central government — reducing the risk of domination by any single group.

## Practice
1. Distinguish between a unitary and a federal system of government.
2. List three features of Nigerian federalism.
3. Why is federalism considered suitable for a diverse country like Nigeria?

## Key Takeaways
- Unitary systems concentrate power centrally; federal systems constitutionally divide power.
- Nigeria practices federalism due to its ethnic, religious, and cultural diversity.`,
    },
    {
      title: "The Legislature: Functions and Structure",
      summary: "Understand the structure and functions of Nigeria's bicameral National Assembly.",
      durationMins: 22,
      term: 1,
      topic: { title: "The Legislature", nerdcCode: "GOV-SS2-3", waecTopic: "Organs of Government: Legislature — WAEC Government Syllabus" },
      contentMd: `# The Legislature: Functions and Structure

## What is the Legislature?
The Legislature is the arm of government responsible for making laws. Nigeria practices a **bicameral legislature** at the federal level, called the National Assembly.

## Structure of Nigeria's National Assembly
1. **Senate** — the upper chamber, with 109 senators (3 from each of the 36 states, plus 1 from the FCT).
2. **House of Representatives** — the lower chamber, with 360 members, based on constituencies by population.

## Functions of the Legislature
1. **Law-making** — passing bills that become Acts once signed by the President.
2. **Representation** — representing the interests of their constituents.
3. **Oversight function** — checking the excesses of the Executive arm (e.g., screening ministerial nominees, investigating government agencies).
4. **Approval of budget** — the National Assembly must approve the national budget presented by the President.
5. **Constitutional amendment** — the power to amend the constitution, with required majorities.

## Nigerian Context
The National Assembly is located in Abuja. Each state also has a State House of Assembly (unicameral) responsible for making laws at the state level.

## Practice
1. What does "bicameral" mean?
2. How many senators make up Nigeria's Senate?
3. List three functions of the legislature.

## Key Takeaways
- Nigeria's National Assembly is bicameral: Senate and House of Representatives.
- The legislature makes laws, represents citizens, and checks the Executive through oversight functions.`,
    },
    {
      title: "Pressure Groups and Political Parties",
      summary: "Distinguish between pressure groups and political parties, and their roles in Nigerian politics.",
      durationMins: 22,
      term: 2,
      topic: { title: "Pressure Groups and Political Parties", nerdcCode: "GOV-SS2-6", waecTopic: "Political Parties and Pressure Groups — WAEC Government Syllabus" },
      contentMd: `# Pressure Groups and Political Parties

## Political Parties
A political party is an organised group of people who share similar political ideas and seek to win elections to control government and implement their policies.

**Examples in Nigeria:** All Progressives Congress (APC), Peoples Democratic Party (PDP), Labour Party (LP), New Nigeria Peoples Party (NNPP).

## Pressure Groups
A pressure group is an organisation that seeks to influence government policy without necessarily contesting elections or seeking to form the government.

**Examples in Nigeria:** Nigeria Labour Congress (NLC), Academic Staff Union of Universities (ASUU), Manufacturers Association of Nigeria (MAN).

## Key Differences
| Feature | Political Party | Pressure Group |
|---|---|---|
| Goal | Win elections, form government | Influence policy |
| Contests elections | Yes | No |
| Scope of interest | Broad (all areas of governance) | Often narrow/specific (e.g., labour rights) |

## Functions of Pressure Groups
1. Advocacy for members' interests (e.g., ASUU advocating for university funding and lecturer welfare).
2. Educating the public on specific issues.
3. Mobilising members for protests or strikes when necessary.

## Practice
1. Define a political party and a pressure group.
2. Give two examples each of Nigerian political parties and pressure groups.
3. Explain one key difference between a political party and a pressure group.

## Key Takeaways
- Political parties seek to win elections and govern; pressure groups seek to influence policy without contesting elections.
- Both play vital roles in Nigeria's democratic process.`,
    },
  ],
  quizQuestions: [
    { text: "In a unitary system of government, power is:", optionA: "divided between central and regional governments", optionB: "concentrated in a central government", optionC: "held only by the military", optionD: "shared equally among all citizens directly", correctOption: "B", explanation: "A unitary system concentrates power in a central government." },
    { text: "Nigeria's National Assembly consists of the Senate and:", optionA: "the Supreme Court", optionB: "the House of Representatives", optionC: "the State House of Assembly", optionD: "the Federal Executive Council", correctOption: "B", explanation: "Nigeria's bicameral National Assembly comprises the Senate and House of Representatives." },
    { text: "How many senators represent each Nigerian state?", optionA: "1", optionB: "2", optionC: "3", optionD: "4", correctOption: "C", explanation: "Each of the 36 states is represented by 3 senators." },
    { text: "Which of these is a pressure group in Nigeria?", optionA: "APC", optionB: "PDP", optionC: "NLC", optionD: "LP", correctOption: "C", explanation: "The Nigeria Labour Congress (NLC) is a pressure group, not a political party." },
    { text: "A key function of the legislature is:", optionA: "law enforcement", optionB: "law-making", optionC: "judicial interpretation", optionD: "military command", correctOption: "B", explanation: "Law-making is the primary function of the legislature." },
  ],
  examTitle: "SS2 Government — First Term Examination",
  examQuestions: [
    { text: "Nigeria practices which system of government?", optionA: "Unitary", optionB: "Federal", optionC: "Confederal", optionD: "Absolute monarchy", correctOption: "B", explanation: "Nigeria operates a federal system of government.", board: "WAEC" },
    { text: "The list containing matters only the Federal Government can legislate on is called the:", optionA: "Concurrent List", optionB: "Residual List", optionC: "Exclusive Legislative List", optionD: "State List", correctOption: "C", explanation: "The Exclusive Legislative List contains matters only the Federal Government can legislate on.", board: "WAEC" },
    { text: "The House of Representatives has how many members?", optionA: "109", optionB: "360", optionC: "469", optionD: "36", correctOption: "B", explanation: "The House of Representatives has 360 members.", board: "WAEC" },
    { text: "A political party's main goal is to:", optionA: "influence policy only", optionB: "win elections and form government", optionC: "avoid elections", optionD: "represent only one profession", correctOption: "B", explanation: "Political parties aim to win elections and control government.", board: "WAEC" },
    { text: "ASUU is an example of a:", optionA: "political party", optionB: "pressure group", optionC: "federal ministry", optionD: "electoral commission", correctOption: "B", explanation: "ASUU (Academic Staff Union of Universities) is a pressure group.", board: "WAEC" },
    { text: "The function of checking the Executive's excesses is called the legislature's:", optionA: "representation function", optionB: "oversight function", optionC: "budgeting function", optionD: "judicial function", correctOption: "B", explanation: "The oversight function allows the legislature to check the Executive.", board: "WAEC" },
    { text: "Nigeria's National Assembly is located in:", optionA: "Lagos", optionB: "Abuja", optionC: "Kano", optionD: "Port Harcourt", correctOption: "B", explanation: "Nigeria's National Assembly complex is located in Abuja, the capital.", board: "JAMB" },
    { text: "Matters that both Federal and State governments can legislate on fall under the:", optionA: "Exclusive List", optionB: "Concurrent List", optionC: "Residual List", optionD: "Judicial List", correctOption: "B", explanation: "The Concurrent Legislative List allows both levels to legislate on shared matters like education.", board: "WAEC" },
    { text: "Federalism is considered suitable for Nigeria mainly because of its:", optionA: "small population", optionB: "ethnic and cultural diversity", optionC: "single-language population", optionD: "small land area", correctOption: "B", explanation: "Nigeria's vast ethnic and cultural diversity makes federalism a suitable system.", board: "WAEC" },
    { text: "Which of these best distinguishes a pressure group from a political party?", optionA: "Pressure groups contest elections; parties do not", optionB: "Pressure groups influence policy without contesting elections", optionC: "Political parties have no members", optionD: "There is no difference", correctOption: "B", explanation: "Pressure groups seek to influence policy but do not contest elections, unlike political parties.", board: "WAEC" },
  ],
};
