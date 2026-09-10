import { SeedSubjectContent } from "../content-types";

export const p5PreVocational: SeedSubjectContent = {
  subjectSlug: "pre-vocational-studies",
  classShortName: "P5",
  lessons: [
    {
      title: "Introduction to Farming: Crop Production",
      summary: "Learn the basic steps of crop production practiced by Nigerian farmers.",
      durationMins: 18,
      term: 1,
      topic: { title: "Crop Production", nerdcCode: "PVS-P5-A1" },
      contentMd: `# Introduction to Farming: Crop Production

## Steps in Crop Production
1. **Land clearing** — removing bushes and trees from the farmland.
2. **Tilling** — loosening the soil using a hoe or tractor.
3. **Planting** — sowing seeds or seedlings like maize, cassava, or yam.
4. **Weeding** — removing unwanted plants that compete with crops.
5. **Harvesting** — gathering mature crops.

## Common Nigerian Crops
- **Yam** — a staple crop, especially in the South-East and North-Central.
- **Cassava** — used to make garri, fufu, and starch.
- **Maize** — grown widely across Nigeria, used for pap and animal feed.
- **Rice** — grown in states like Kebbi and Ebonyi.

## Practice
1. List the five steps in crop production.
2. Name three crops commonly grown in your region.
3. Why is weeding important?

## Key Takeaways
- Crop production follows a cycle: clear, till, plant, weed, harvest.
- Nigeria grows diverse staple crops suited to different regions and climates.`,
    },
    {
      title: "Home Management: Keeping a Tidy Home",
      summary: "Understand basic principles of home management and hygiene practiced in Nigerian households.",
      durationMins: 16,
      term: 2,
      topic: { title: "Home Management", nerdcCode: "PVS-P5-H2" },
      contentMd: `# Home Management: Keeping a Tidy Home

## Why Home Management Matters
A well-managed home is clean, organised, and promotes good health for the whole family.

## Daily Home Chores
- Sweeping and mopping floors
- Washing dishes after meals
- Making the bed
- Disposing of refuse properly
- Airing out rooms for fresh air

## Meal Planning
A good home manager plans balanced meals using local foods — combining carbohydrates (rice, yam), proteins (beans, fish, meat), vitamins (vegetables, fruits), and fats (palm oil, groundnut oil).

## Practice
1. List three daily home chores.
2. Name a balanced Nigerian meal and its food groups.
3. Why should refuse be disposed of properly?

## Key Takeaways
- Good home management keeps the family healthy and happy.
- Balanced meals combine different food groups using local ingredients.`,
    },
    {
      title: "Animal Rearing: Poultry and Livestock",
      summary: "Learn the basics of rearing chickens, goats and other livestock common in Nigerian farms.",
      durationMins: 18,
      term: 3,
      topic: { title: "Animal Husbandry", nerdcCode: "PVS-P5-A3" },
      contentMd: `# Animal Rearing: Poultry and Livestock

## Common Livestock in Nigeria
- **Poultry** (chickens, turkeys) — reared for eggs and meat.
- **Goats and sheep** — reared for meat and milk, common across Nigeria.
- **Cattle** — reared mostly in the Northern states for meat, milk, and hides.

## Basic Care for Animals
1. Provide clean water daily.
2. Feed animals with proper feed (grains, grasses, commercial feed).
3. Keep their shelter (pen, coop, or barn) clean to prevent disease.
4. Vaccinate animals regularly to prevent illness.

## Benefits of Animal Rearing
- Source of food (meat, eggs, milk)
- Source of income for farming families
- Provides manure for crop farming

## Practice
1. Name two animals commonly reared in Nigerian homes.
2. List two ways to keep farm animals healthy.
3. Give one economic benefit of rearing poultry.

## Key Takeaways
- Proper care (food, water, clean shelter, vaccination) keeps animals healthy.
- Animal rearing supports food security and income generation in Nigeria.`,
    },
  ],
  quizQuestions: [
    { text: "The first step in crop production is:", optionA: "harvesting", optionB: "land clearing", optionC: "weeding", optionD: "planting", correctOption: "B", explanation: "Land clearing comes first to prepare the ground for planting." },
    { text: "Garri is made from which crop?", optionA: "Maize", optionB: "Cassava", optionC: "Rice", optionD: "Yam", correctOption: "B", explanation: "Garri is a processed form of cassava." },
    { text: "Which of these is a daily home chore?", optionA: "Sweeping the floor", optionB: "Planting yam", optionC: "Vaccinating goats", optionD: "Weeding a farm", correctOption: "A", explanation: "Sweeping the floor is a basic daily home chore." },
    { text: "Cattle rearing is most common in which part of Nigeria?", optionA: "South-South", optionB: "Northern Nigeria", optionC: "South-East", optionD: "South-West only", correctOption: "B", explanation: "Cattle rearing is most prominent in Northern Nigeria due to the savanna grassland." },
    { text: "Why should animal pens be kept clean?", optionA: "To attract visitors", optionB: "To prevent disease", optionC: "To save money", optionD: "To reduce feeding", correctOption: "B", explanation: "Clean pens help prevent the spread of disease among animals." },
  ],
  examTitle: "Primary 5 Pre-Vocational Studies — First Term Examination",
  examQuestions: [
    { text: "Weeding is done to:", optionA: "add more crops", optionB: "remove unwanted plants", optionC: "harvest crops", optionD: "clear land", correctOption: "B", explanation: "Weeding removes unwanted plants competing with crops for nutrients." },
    { text: "Which crop is a major staple in South-Eastern Nigeria?", optionA: "Yam", optionB: "Wheat", optionC: "Barley", optionD: "Oats", correctOption: "A", explanation: "Yam is a major staple food in South-Eastern Nigeria." },
    { text: "A balanced meal should contain:", optionA: "only carbohydrates", optionB: "carbohydrates, proteins, vitamins and fats", optionC: "only proteins", optionD: "only fats", correctOption: "B", explanation: "A balanced meal includes all major food groups." },
    { text: "Poultry mainly provides:", optionA: "milk and wool", optionB: "eggs and meat", optionC: "hides and horns", optionD: "manure only", correctOption: "B", explanation: "Poultry (chickens, turkeys) are reared mainly for eggs and meat." },
    { text: "Vaccinating farm animals helps to:", optionA: "make them grow faster", optionB: "prevent diseases", optionC: "increase their price", optionD: "change their colour", correctOption: "B", explanation: "Vaccination protects animals from common diseases." },
    { text: "Rice is majorly grown in which Nigerian state?", optionA: "Kebbi", optionB: "Lagos", optionC: "Rivers", optionD: "Anambra", correctOption: "A", explanation: "Kebbi State is one of Nigeria's largest rice-producing states." },
    { text: "Tilling the soil means:", optionA: "watering crops", optionB: "loosening the soil", optionC: "harvesting crops", optionD: "spraying chemicals", correctOption: "B", explanation: "Tilling loosens the soil to prepare it for planting." },
    { text: "Which is a source of income from animal rearing?", optionA: "Selling eggs", optionB: "Selling clothes", optionC: "Selling books", optionD: "Selling electronics", correctOption: "A", explanation: "Selling eggs from reared poultry is a direct source of farm income." },
    { text: "Manure from animals is useful because it:", optionA: "pollutes the farm", optionB: "fertilizes crops", optionC: "kills weeds", optionD: "attracts pests", correctOption: "B", explanation: "Animal manure adds nutrients to soil, helping crops grow better." },
    { text: "A key reason for proper refuse disposal at home is to:", optionA: "attract flies", optionB: "prevent disease and keep the home healthy", optionC: "increase home value", optionD: "reduce visitors", correctOption: "B", explanation: "Proper refuse disposal prevents disease and keeps the environment clean." },
  ],
};
