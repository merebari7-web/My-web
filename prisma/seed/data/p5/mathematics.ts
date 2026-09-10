import { SeedSubjectContent } from "../content-types";

export const p5Mathematics: SeedSubjectContent = {
  subjectSlug: "mathematics",
  classShortName: "P5",
  lessons: [
    {
      title: "Whole Numbers: Place Value up to 1,000,000",
      summary: "Understand place value, expanded form, and reading large numbers used in everyday Nigerian life.",
      durationMins: 20,
      term: 1,
      topic: {
        title: "Whole Numbers and Place Value",
        nerdcCode: "MATH-P5-N1",
        jambRelevance: "Foundation for number theory questions in JAMB/WAEC.",
      },
      contentMd: `# Whole Numbers: Place Value up to 1,000,000

## Introduction
In Primary 5, we work with bigger numbers than before — numbers up to one million (1,000,000). You will see numbers like this in real life: the population of a Local Government Area, the price of a car in Naira, or the number of students in a state.

## Place Value Chart
Every digit in a number has a **place value** depending on its position.

| Millions | Hundred Thousands | Ten Thousands | Thousands | Hundreds | Tens | Units |
|---|---|---|---|---|---|---|
| 1 | 2 | 3 | 4 | 5 | 6 | 7 |

The number **1,234,567** is read as: **One million, two hundred and thirty-four thousand, five hundred and sixty-seven.**

## Expanded Form
We can break a number into its place values. For example:

345,678 = 300,000 + 40,000 + 5,000 + 600 + 70 + 8

## Worked Example
**Question:** Write 502,090 in words.

**Solution:** Five hundred and two thousand, and ninety.

Notice: when the hundreds digit is 0, we still say "and" before the last part if there is a remaining value.

## Nigerian Context
The 2023 population of Lagos State was estimated at over 15,000,000 (fifteen million) people. Being able to read and write such numbers correctly is an important life skill, especially when discussing national statistics, budgets in Naira, and census data.

## Practice
1. Write 89,345 in expanded form.
2. Write 3,004,201 in words.
3. Arrange these numbers from smallest to biggest: 456,700; 465,700; 456,007.

## Key Takeaways
- Every digit's value depends on its position (place value).
- Large numbers are grouped in 3s using commas: millions, thousands, units.
- Practice reading Naira amounts and population figures to master this skill.`,
    },
    {
      title: "Fractions: Addition and Subtraction of Fractions",
      summary: "Add and subtract fractions with the same and different denominators using real-life examples.",
      durationMins: 25,
      term: 1,
      topic: {
        title: "Fractions",
        nerdcCode: "MATH-P5-N4",
        jambRelevance: "Fractions are tested extensively in JAMB and WAEC numeracy sections.",
      },
      contentMd: `# Fractions: Addition and Subtraction

## What is a Fraction?
A fraction shows a part of a whole. It has a **numerator** (top number) and a **denominator** (bottom number). For example, in 3/4, 3 is the numerator and 4 is the denominator.

## Adding Fractions with the Same Denominator
When denominators are the same, add the numerators and keep the denominator.

**Example:** 2/7 + 3/7 = 5/7

## Adding Fractions with Different Denominators
First find the **Lowest Common Denominator (LCD)**, then convert each fraction before adding.

**Example:** 1/3 + 1/4
- LCD of 3 and 4 is 12.
- 1/3 = 4/12, 1/4 = 3/12
- 4/12 + 3/12 = 7/12

## Subtracting Fractions
Follow the same rule but subtract the numerators.

**Example:** 5/6 − 1/3
- LCD of 6 and 3 is 6.
- 1/3 = 2/6
- 5/6 − 2/6 = 3/6 = 1/2 (simplified)

## Nigerian Context Example
Mama Chidi shared a bag of garri: she gave 1/4 to her neighbour and 2/5 to her sister. What fraction of the garri did she give away in total?
- LCD of 4 and 5 is 20.
- 1/4 = 5/20, 2/5 = 8/20
- 5/20 + 8/20 = 13/20 of the garri was given away.

## Practice
1. 3/8 + 1/4
2. 5/6 − 1/2
3. A tailor used 2/5 of a piece of Ankara fabric for a gown and 1/3 for a blouse. What fraction of the fabric was used in total?

## Key Takeaways
- Same denominator: add/subtract numerators only.
- Different denominators: find the LCD first.
- Always simplify your final answer if possible.`,
    },
    {
      title: "Perimeter and Area of Rectangles and Squares",
      summary: "Calculate the perimeter and area of rectangular and square shapes, including farmland and classroom examples.",
      durationMins: 22,
      term: 2,
      topic: {
        title: "Mensuration: Perimeter and Area",
        nerdcCode: "MATH-P5-M2",
        jambRelevance: "Mensuration is a recurring topic in JAMB Mathematics.",
      },
      contentMd: `# Perimeter and Area of Rectangles and Squares

## Perimeter
The **perimeter** is the total distance around a shape.

For a rectangle: Perimeter = 2 × (Length + Breadth)
For a square: Perimeter = 4 × Side

**Example:** A rectangular school field is 80m long and 50m wide.
Perimeter = 2 × (80 + 50) = 2 × 130 = 260 metres.

## Area
The **area** is the amount of space inside a shape, measured in square units (e.g. m²).

For a rectangle: Area = Length × Breadth
For a square: Area = Side × Side

**Example:** Using the same field: Area = 80 × 50 = 4,000 m².

## Worked Example: Farmland
A farmer in Benue State has a square farm with sides of 60 metres.
- Perimeter = 4 × 60 = 240 metres (length of fence needed).
- Area = 60 × 60 = 3,600 m² (land available for planting).

## Practice
1. Find the perimeter and area of a rectangular garden 15m by 9m.
2. A square mat has a side of 2.5m. Find its area.
3. Mr. Okoro wants to fence his rectangular compound measuring 30m by 22m. How many metres of fencing wire does he need?

## Key Takeaways
- Perimeter = distance around a shape (use for fencing, borders).
- Area = space inside a shape (use for tiling, farming, carpeting).
- Always state your final answer with the correct unit (m, m²).`,
    },
  ],
  quizQuestions: [
    { text: "What is the value of the digit 4 in 342,671?", optionA: "4", optionB: "40", optionC: "40,000", optionD: "400,000", correctOption: "C", explanation: "The digit 4 is in the ten-thousands place, so its value is 40,000." },
    { text: "1/2 + 1/4 = ?", optionA: "1/6", optionB: "2/6", optionC: "3/4", optionD: "1/4", correctOption: "C", explanation: "LCD is 4: 1/2 = 2/4, so 2/4 + 1/4 = 3/4." },
    { text: "Find the perimeter of a rectangle with length 12cm and breadth 5cm.", optionA: "17cm", optionB: "34cm", optionC: "60cm", optionD: "30cm", correctOption: "B", explanation: "Perimeter = 2(12+5) = 2 x 17 = 34cm." },
    { text: "Find the area of a square with side 9m.", optionA: "18m²", optionB: "36m²", optionC: "81m²", optionD: "72m²", correctOption: "C", explanation: "Area = side x side = 9 x 9 = 81m²." },
    { text: "3/5 − 1/5 = ?", optionA: "2/5", optionB: "2/10", optionC: "4/5", optionD: "1/5", correctOption: "A", explanation: "Same denominator: subtract numerators, 3-1=2, so 2/5." },
  ],
  examTitle: "Primary 5 Mathematics — First Term Examination",
  examQuestions: [
    { text: "Write 705,040 in words.", optionA: "Seven hundred and five thousand and forty", optionB: "Seventy five thousand and four", optionC: "Seven million five hundred and forty", optionD: "Seven hundred thousand and five hundred forty", correctOption: "A", explanation: "705,040 = seven hundred and five thousand, and forty." },
    { text: "What is the place value of 6 in 1,684,203?", optionA: "6,000", optionB: "60,000", optionC: "600,000", optionD: "6", correctOption: "C", explanation: "6 is in the hundred-thousands place: 600,000." },
    { text: "2/3 + 1/6 = ?", optionA: "3/9", optionB: "5/6", optionC: "1/2", optionD: "3/6", correctOption: "B", explanation: "LCD 6: 2/3=4/6, 4/6+1/6=5/6." },
    { text: "7/8 − 3/4 = ?", optionA: "1/8", optionB: "4/4", optionC: "1/4", optionD: "3/8", correctOption: "A", explanation: "LCD 8: 3/4=6/8, 7/8-6/8=1/8." },
    { text: "Find the perimeter of a square field of side 45m.", optionA: "90m", optionB: "180m", optionC: "2025m", optionD: "45m", correctOption: "B", explanation: "Perimeter = 4 x 45 = 180m." },
    { text: "A rectangular room is 6m long and 4m wide. Find its area.", optionA: "10m²", optionB: "20m²", optionC: "24m²", optionD: "12m²", correctOption: "C", explanation: "Area = 6 x 4 = 24m²." },
    { text: "Round 68,472 to the nearest thousand.", optionA: "68,000", optionB: "69,000", optionC: "68,500", optionD: "70,000", correctOption: "A", explanation: "The hundreds digit is 4, which is less than 5, so we round down. 68,472 rounds to 68,000.", difficulty: 3 },
    { text: "Which of these fractions is the largest?", optionA: "1/2", optionB: "2/5", optionC: "3/8", optionD: "1/3", correctOption: "A", explanation: "1/2 = 0.5, which is bigger than 2/5(0.4), 3/8(0.375), and 1/3(0.33)." },
    { text: "A trader has 500,000 Naira and spends 125,000 Naira. How much is left?", optionA: "375,000", optionB: "425,000", optionC: "325,000", optionD: "625,000", correctOption: "A", explanation: "500,000 - 125,000 = 375,000." },
    { text: "Find the perimeter of a rectangle 25cm by 10cm.", optionA: "35cm", optionB: "70cm", optionC: "250cm", optionD: "50cm", correctOption: "B", explanation: "Perimeter = 2(25+10) = 2 x 35 = 70cm." },
  ],
};
