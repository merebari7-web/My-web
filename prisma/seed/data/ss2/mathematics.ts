import { SeedSubjectContent } from "../content-types";

export const ss2Mathematics: SeedSubjectContent = {
  subjectSlug: "mathematics",
  classShortName: "SS2",
  stream: "NONE",
  lessons: [
    {
      title: "Quadratic Equations: Solving by Factorisation and Formula",
      summary: "Solve quadratic equations using factorisation and the quadratic formula, a core WAEC/JAMB topic.",
      durationMins: 30,
      term: 1,
      topic: { title: "Quadratic Equations", nerdcCode: "MATH-SS2-A2", waecTopic: "Quadratic Equations — WAEC Mathematics Syllabus", jambRelevance: "Quadratic equations appear almost every year in JAMB Mathematics." },
      contentMd: `# Quadratic Equations: Solving by Factorisation and Formula

## What is a Quadratic Equation?
A quadratic equation has the general form:
$$ax^2 + bx + c = 0$$
where a ≠ 0.

## Method 1: Solving by Factorisation
**Example:** Solve x² − 5x + 6 = 0

We need two numbers that multiply to give 6 and add to give −5: these are −2 and −3.

x² − 2x − 3x + 6 = 0
x(x − 2) − 3(x − 2) = 0
(x − 2)(x − 3) = 0

So x = 2 or x = 3.

## Method 2: The Quadratic Formula
When factorisation is difficult, use:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

**Example:** Solve 2x² + 3x − 5 = 0

Here a=2, b=3, c=−5.

x = [−3 ± √(9 − 4(2)(−5))] / (2×2)
x = [−3 ± √(9 + 40)] / 4
x = [−3 ± √49] / 4
x = [−3 ± 7] / 4

So x = 4/4 = 1, or x = −10/4 = −2.5

## Nigerian Context / JAMB Tip
Quadratic equations often appear in JAMB word problems involving area (e.g., a rectangular farmland problem) — always define your variable clearly and form the equation before solving.

## Practice
1. Solve by factorisation: x² − 7x + 12 = 0
2. Solve using the quadratic formula: 3x² − 2x − 8 = 0
3. The area of a rectangular field is 40m², and its length is 3m more than its width. Find the dimensions.

## Key Takeaways
- Quadratic equations can be solved by factorisation (when possible) or the quadratic formula (always works).
- Practice both methods since WAEC/JAMB questions may specify a required method.`,
    },
    {
      title: "Trigonometric Ratios and the Unit Circle",
      summary: "Understand sine, cosine, and tangent ratios and apply them to solve right-angled triangle problems.",
      durationMins: 28,
      term: 1,
      topic: { title: "Trigonometry", nerdcCode: "MATH-SS2-T3", waecTopic: "Trigonometry — WAEC Mathematics Syllabus", jambRelevance: "Trigonometric ratios and bearings are frequently tested in JAMB." },
      contentMd: `# Trigonometric Ratios and the Unit Circle

## The Three Basic Trigonometric Ratios
For a right-angled triangle, with reference to angle θ:

$$\\sin \\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}$$
$$\\cos \\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}$$
$$\\tan \\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}$$

**Mnemonic:** SOH-CAH-TOA

## Worked Example
A ladder leans against a wall, making an angle of 60° with the ground. If the ladder is 10m long, find the height it reaches on the wall.

**Solution:**
Height = opposite side, ladder = hypotenuse.
sin 60° = height / 10
height = 10 × sin 60° = 10 × 0.866 = 8.66m

## Special Angles Table
| Angle | 0° | 30° | 45° | 60° | 90° |
|---|---|---|---|---|---|
| sin | 0 | 1/2 | √2/2 | √3/2 | 1 |
| cos | 1 | √3/2 | √2/2 | 1/2 | 0 |
| tan | 0 | √3/3 | 1 | √3 | undefined |

## Nigerian Context
Trigonometry is used by surveyors mapping land for building projects across Nigerian cities, and by engineers calculating the height of telecommunication masts (common across both urban and rural Nigeria) using angle of elevation measurements.

## Practice
1. A tower casts a shadow of 15m when the angle of elevation of the sun is 40°. Find the height of the tower.
2. Find sin 30° + cos 60° without a calculator.
3. A surveyor measures the angle of elevation to the top of a building as 35° from a point 50m away. Find the height of the building.

## Key Takeaways
- SOH-CAH-TOA helps remember the three basic trigonometric ratios.
- These ratios solve real-world problems involving heights, distances and angles.`,
    },
    {
      title: "Statistics: Mean, Median, Mode and Standard Deviation",
      summary: "Calculate measures of central tendency and dispersion for grouped and ungrouped data.",
      durationMins: 28,
      term: 2,
      topic: { title: "Statistics", nerdcCode: "MATH-SS2-S4", waecTopic: "Statistics — WAEC Mathematics Syllabus", jambRelevance: "Statistics questions, especially mean and standard deviation, appear regularly in JAMB." },
      contentMd: `# Statistics: Mean, Median, Mode and Standard Deviation

## Measures of Central Tendency

### Mean
The average of a data set: Mean = (Sum of values) / (Number of values)

### Median
The middle value when data is arranged in order. If there are two middle values, average them.

### Mode
The value that occurs most frequently.

## Worked Example
Find the mean, median, and mode of: 4, 8, 6, 5, 8, 9, 8

**Sorted:** 4, 5, 6, 8, 8, 8, 9

Mean = (4+8+6+5+8+9+8)/7 = 48/7 ≈ 6.86
Median = 8 (the middle value, 4th out of 7)
Mode = 8 (appears three times)

## Standard Deviation
Standard deviation measures how spread out data values are from the mean.

$$\\sigma = \\sqrt{\\frac{\\sum (x - \\bar{x})^2}{n}}$$

## Nigerian Context
Statistics is used by NBS (National Bureau of Statistics) to calculate average household income, unemployment rates, and exam performance data (like average WAEC scores per state), helping guide government policy decisions.

## Practice
1. Find the mean, median, and mode of: 12, 15, 12, 18, 20, 12, 25.
2. Explain when the mode is more useful than the mean.
3. Calculate the range of this data set: 3, 7, 9, 15, 22.

## Key Takeaways
- Mean, median, and mode each describe data differently — choose based on context.
- Standard deviation shows how spread out values are, important for comparing consistency (e.g., exam scores across schools).`,
    },
  ],
  quizQuestions: [
    { text: "Solve x² − 5x + 6 = 0.", optionA: "x = 1, 6", optionB: "x = 2, 3", optionC: "x = -2, -3", optionD: "x = 5, 6", correctOption: "B", explanation: "Factorising gives (x-2)(x-3)=0, so x=2 or x=3." },
    { text: "sin θ is defined as:", optionA: "Adjacent/Hypotenuse", optionB: "Opposite/Hypotenuse", optionC: "Opposite/Adjacent", optionD: "Hypotenuse/Opposite", correctOption: "B", explanation: "sin θ = Opposite/Hypotenuse (SOH)." },
    { text: "Find the mean of: 2, 4, 6, 8, 10.", optionA: "5", optionB: "6", optionC: "7", optionD: "8", correctOption: "B", explanation: "Mean = (2+4+6+8+10)/5 = 30/5 = 6." },
    { text: "The quadratic formula is:", optionA: "x = -b ± √(b²-4ac) / 2a", optionB: "x = b ± √(b²+4ac) / a", optionC: "x = -b / 2a", optionD: "x = a ± √(b²-4ac)", correctOption: "A", explanation: "The standard quadratic formula is x = [-b ± √(b²-4ac)] / 2a." },
    { text: "The mode of the data set 3, 5, 5, 7, 9 is:", optionA: "3", optionB: "5", optionC: "7", optionD: "9", correctOption: "B", explanation: "5 appears most frequently (twice), so it is the mode." },
  ],
  examTitle: "SS2 Mathematics — First Term Examination",
  examQuestions: [
    { text: "Solve x² − 3x − 4 = 0.", optionA: "x = 4, -1", optionB: "x = -4, 1", optionC: "x = 4, 1", optionD: "x = -4, -1", correctOption: "A", explanation: "(x-4)(x+1)=0, so x=4 or x=-1.", board: "WAEC" },
    { text: "tan θ is defined as:", optionA: "Opposite/Hypotenuse", optionB: "Adjacent/Hypotenuse", optionC: "Opposite/Adjacent", optionD: "Hypotenuse/Adjacent", correctOption: "C", explanation: "tan θ = Opposite/Adjacent (TOA).", board: "WAEC" },
    { text: "sin 30° equals:", optionA: "0", optionB: "1/2", optionC: "√3/2", optionD: "1", correctOption: "B", explanation: "sin 30° = 1/2, a standard trigonometric value.", board: "JAMB" },
    { text: "Find the median of: 3, 7, 9, 15, 22.", optionA: "7", optionB: "9", optionC: "15", optionD: "11", correctOption: "B", explanation: "9 is the middle value when the data is arranged in order.", board: "WAEC" },
    { text: "Using the quadratic formula, solve x² + 2x − 8 = 0.", optionA: "x = 2, -4", optionB: "x = -2, 4", optionC: "x = 4, 8", optionD: "x = -4, -2", correctOption: "A", explanation: "a=1, b=2, c=-8: x = [-2 ± √(4+32)]/2 = [-2 ± 6]/2 = 2 or -4.", board: "JAMB" },
    { text: "A ladder 8m long leans against a wall at 45°. The height reached is approximately:", optionA: "4m", optionB: "5.66m", optionC: "8m", optionD: "6.93m", correctOption: "B", explanation: "Height = 8 × sin45° = 8 × 0.707 ≈ 5.66m.", board: "WAEC" },
    { text: "The range of the data set 5, 12, 8, 20, 3 is:", optionA: "12", optionB: "17", optionC: "20", optionD: "8", correctOption: "B", explanation: "Range = highest - lowest = 20 - 3 = 17.", board: "NECO" },
    { text: "Which measure of central tendency is most affected by extreme values (outliers)?", optionA: "Mode", optionB: "Median", optionC: "Mean", optionD: "Range", correctOption: "C", explanation: "The mean is most sensitive to extreme values since all values are included in its calculation.", board: "JAMB" },
    { text: "cos 60° equals:", optionA: "1", optionB: "1/2", optionC: "√3/2", optionD: "0", correctOption: "B", explanation: "cos 60° = 1/2, a standard trigonometric value.", board: "WAEC" },
    { text: "For a quadratic equation ax² + bx + c = 0, if the discriminant (b²-4ac) is negative, the equation has:", optionA: "two real roots", optionB: "one real root", optionC: "no real roots", optionD: "infinite roots", correctOption: "C", explanation: "A negative discriminant means the equation has no real roots (only complex roots).", board: "WAEC" },
    { text: "In a right triangle, the side opposite the right angle is called the:", optionA: "adjacent", optionB: "opposite", optionC: "hypotenuse", optionD: "base", correctOption: "C", explanation: "The hypotenuse is the side opposite the right angle, and the longest side.", board: "NECO" },
  ],
};
