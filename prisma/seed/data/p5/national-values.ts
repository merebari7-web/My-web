import { SeedSubjectContent } from "../content-types";

export const p5NationalValues: SeedSubjectContent = {
  subjectSlug: "national-values-education",
  classShortName: "P5",
  lessons: [
    {
      title: "Being a Good Citizen of Nigeria",
      summary: "Understand the rights and responsibilities of a good Nigerian citizen at home, school, and in the community.",
      durationMins: 18,
      term: 1,
      topic: { title: "Citizenship", nerdcCode: "NVE-P5-C1" },
      contentMd: `# Being a Good Citizen of Nigeria

## Who is a Citizen?
A citizen is a person who legally belongs to a country and enjoys rights while carrying out duties to that country. Every Nigerian child, by birth, is a citizen of the Federal Republic of Nigeria.

## Rights of a Nigerian Child
- The right to education
- The right to good health care
- The right to protection from abuse
- The right to express opinions respectfully

## Responsibilities of a Good Citizen
1. Obeying the laws of the land
2. Respecting elders and constituted authority
3. Keeping the environment clean
4. Being honest and hardworking
5. Paying taxes (as an adult) and using public property with care
6. Promoting peace and unity among different ethnic groups

## Nigerian Context
Nigeria has three major ethnic groups — Hausa, Igbo, and Yoruba — and hundreds of smaller ones. A good citizen respects all cultures and works together with people from different backgrounds for national unity, just as depicted in our National Pledge: "...to be faithful, loyal and honest, to serve Nigeria with all my strength..."

## Practice
1. State two responsibilities of a good citizen.
2. Recite the Nigerian National Pledge.
3. Explain one way you can promote unity in your school.

## Key Takeaways
- Citizenship comes with both rights and responsibilities.
- Good citizens respect laws, elders, and diverse cultures.
- National unity strengthens Nigeria's development.`,
    },
    {
      title: "Our Community and Local Government",
      summary: "Learn the structure of local government and how community leaders serve the people.",
      durationMins: 20,
      term: 2,
      topic: { title: "Community and Government", nerdcCode: "NVE-P5-S2" },
      contentMd: `# Our Community and Local Government

## What is a Community?
A community is a group of people living together in the same area, sharing common interests, culture, and resources — like a village, town, or estate.

## Levels of Government in Nigeria
Nigeria practices a **federal system** with three levels of government:
1. **Federal Government** — headed by the President, based in Abuja
2. **State Government** — headed by a Governor, one for each of the 36 states
3. **Local Government** — headed by a Chairman, serving towns and villages

## Role of Local Government
The Local Government Area (LGA) is the government closest to the people. It is responsible for:
- Building and maintaining local markets and motor parks
- Registering births and deaths
- Primary health care centres
- Maintaining local roads and drainage
- Environmental sanitation

## Traditional Rulers
Traditional rulers like the Emir, Oba, and Eze also play important roles in community leadership, settling disputes, and preserving culture, even though they are not part of the formal three-tier government.

## Practice
1. Name the three levels of government in Nigeria.
2. What is the name of your Local Government Area?
3. List two services provided by your local government.

## Key Takeaways
- Nigeria has a federal system with Federal, State, and Local Government levels.
- Local government is closest to the people and manages community services.
- Traditional rulers support community leadership alongside government structures.`,
    },
    {
      title: "Staying Safe: Basic Security Education",
      summary: "Learn basic personal safety rules to protect yourself at home, school, and in public places.",
      durationMins: 18,
      term: 3,
      topic: { title: "Security Education", nerdcCode: "NVE-P5-SEC1" },
      contentMd: `# Staying Safe: Basic Security Education

## Why Security Education Matters
Knowing how to stay safe helps protect you from danger at home, in school, and in public places like the market or motor park.

## Safety Rules at Home
- Never open the door for strangers when alone.
- Keep sharp objects, matches, and chemicals out of reach.
- Know your parents'/guardians' phone numbers and home address.

## Safety Rules at School
- Do not accept gifts or follow strangers, even if they claim to know your parents.
- Report bullying or unsafe situations to a trusted teacher immediately.
- Follow fire and emergency drills carefully.

## Safety in Public Places
- Stay close to a trusted adult in crowded places like markets or motor parks.
- Avoid displaying money or valuable items openly.
- Know the emergency numbers: Nigeria Police (112 or 767), Fire Service, and Ambulance.

## Nigerian Context
During festive periods like Christmas or Sallah, markets and motor parks become very crowded. Children should hold an adult's hand and agree on a meeting point in case they get separated.

## Practice
1. List two safety rules for staying safe at home.
2. What should you do if a stranger offers you a gift?
3. What is Nigeria's emergency police number?

## Key Takeaways
- Personal safety starts with awareness and following simple rules.
- Always inform a trusted adult about unsafe situations.
- Know key emergency contacts for quick help.`,
    },
  ],
  quizQuestions: [
    { text: "A person who legally belongs to a country is called a:", optionA: "visitor", optionB: "citizen", optionC: "tourist", optionD: "immigrant", correctOption: "B", explanation: "A citizen is someone who legally belongs to and has rights/duties in a country." },
    { text: "Which level of government is headed by a Chairman?", optionA: "Federal", optionB: "State", optionC: "Local Government", optionD: "National Assembly", correctOption: "C", explanation: "Local Government Areas are headed by an elected Chairman." },
    { text: "Nigeria's emergency police number is:", optionA: "911", optionB: "199", optionC: "112", optionD: "123", correctOption: "C", explanation: "112 is the general emergency number in Nigeria." },
    { text: "Which is a responsibility of a good citizen?", optionA: "Littering the environment", optionB: "Obeying the laws", optionC: "Avoiding elders", optionD: "Ignoring public property", correctOption: "B", explanation: "Obeying laws is a key responsibility of every good citizen." },
    { text: "Who typically heads a State in Nigeria?", optionA: "President", optionB: "Governor", optionC: "Chairman", optionD: "Emir", correctOption: "B", explanation: "A Governor heads each of Nigeria's 36 states." },
  ],
  examTitle: "Primary 5 National Values Education — First Term Examination",
  examQuestions: [
    { text: "Nigeria practices which system of government?", optionA: "Unitary", optionB: "Federal", optionC: "Confederate", optionD: "Monarchy", correctOption: "B", explanation: "Nigeria operates a federal system with three tiers of government." },
    { text: "The National Pledge asks citizens to be:", optionA: "faithful, loyal and honest", optionB: "rich and famous", optionC: "silent and obedient", optionD: "isolated and independent", correctOption: "A", explanation: "The pledge includes being 'faithful, loyal and honest' to Nigeria." },
    { text: "Which is NOT a right of a Nigerian child?", optionA: "Right to education", optionB: "Right to abuse others", optionC: "Right to health care", optionD: "Right to protection from abuse", correctOption: "B", explanation: "Abusing others is not a right; it violates others' rights." },
    { text: "The government closest to the people is the:", optionA: "Federal Government", optionB: "State Government", optionC: "Local Government", optionD: "United Nations", correctOption: "C", explanation: "Local Government directly manages community-level services." },
    { text: "A traditional ruler in Yorubaland is called:", optionA: "Emir", optionB: "Oba", optionC: "Eze", optionD: "Chief Justice", correctOption: "B", explanation: "Oba is the title of a traditional ruler among the Yoruba people." },
    { text: "If a stranger offers you a gift and asks you to follow them, you should:", optionA: "follow them quietly", optionB: "accept the gift secretly", optionC: "refuse and inform a trusted adult", optionD: "ignore and walk alone", correctOption: "C", explanation: "Always refuse and tell a trusted adult to stay safe." },
    { text: "Which of these promotes national unity?", optionA: "Tribalism", optionB: "Respecting all cultures", optionC: "Favouring one ethnic group", optionD: "Avoiding other communities", correctOption: "B", explanation: "Respecting all cultures helps build unity among Nigeria's diverse ethnic groups." },
    { text: "How many states make up Nigeria?", optionA: "30", optionB: "36", optionC: "40", optionD: "25", correctOption: "B", explanation: "Nigeria has 36 states plus the Federal Capital Territory (FCT), Abuja." },
    { text: "One key duty of the local government is to:", optionA: "print national currency", optionB: "register births and deaths", optionC: "declare war", optionD: "control the armed forces", correctOption: "B", explanation: "Registering births and deaths is a local government responsibility." },
    { text: "Personal safety rules help us to:", optionA: "avoid all people", optionB: "protect ourselves from danger", optionC: "become famous", optionD: "stop going to school", correctOption: "B", explanation: "Security education teaches rules that help protect us from harm." },
  ],
};
