import { SeedSubjectContent } from "../content-types";

export const ss2FurtherMathematics: SeedSubjectContent = {
  subjectSlug: "further-mathematics",
  classShortName: "SS2",
  stream: "SCIENCE",
  lessons: [
    {
      title: "Differentiation: Introduction to Calculus",
      summary: "Understand the concept of a derivative and basic differentiation rules.",
      durationMins: 30,
      term: 1,
      topic: { title: "Differentiation", nerdcCode: "FMT-SS2-C1", waecTopic: "Differentiation — WAEC Further Mathematics Syllabus", jambRelevance: "Basic differentiation rules are tested in JAMB Further Mathematics." },
      contentMd: `# Differentiation: Introduction to Calculus

## What is Differentiation?
Differentiation finds the **rate of change** of a function — essentially, the gradient of the curve at any given point.

## The Power Rule
For y = xⁿ, the derivative is:
$$\\frac{dy}{dx} = nx^{n-1}$$

## Worked Examples
1. If y = x³, then dy/dx = 3x²
2. If y = 5x⁴, then dy/dx = 20x³
3. If y = 7 (a constant), then dy/dx = 0 (constants have zero rate of change)

## Differentiating a Sum
If y = x³ + 2x² − 5x + 1, differentiate term by term:
dy/dx = 3x² + 4x − 5

## Application: Finding Gradient at a Point
Find the gradient of y = x² − 3x at x = 2.

dy/dx = 2x − 3
At x=2: dy/dx = 2(2) − 3 = 1

So the gradient of the curve at x=2 is 1.

## Nigerian Context
Engineers designing bridges (like the Third Mainland Bridge in Lagos) and civil structures use calculus to model stress, load distribution, and rates of change in materials under different conditions.

## Practice
1. Differentiate y = 4x³ − 2x + 9.
2. Find the gradient of y = 2x² + x at x = 3.
3. Differentiate y = x⁵ − 3x² + 7.

## Key Takeaways
- Differentiation finds the rate of change (gradient) of a function.
- The power rule: d/dx(xⁿ) = nxⁿ⁻¹ is the foundation for polynomial differentiation.`,
    },
    {
      title: "Vectors: Addition and Scalar Multiplication",
      summary: "Understand vector notation, addition, and scalar multiplication in two dimensions.",
      durationMins: 26,
      term: 1,
      topic: { title: "Vectors", nerdcCode: "FMT-SS2-V3", waecTopic: "Vectors — WAEC Further Mathematics Syllabus" },
      contentMd: `# Vectors: Addition and Scalar Multiplication

## What is a Vector?
A vector is a quantity with both **magnitude** and **direction**, unlike a scalar which has magnitude only.

## Vector Notation
A vector from point A to B can be written as a column vector:
$$\\vec{AB} = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$$

## Vector Addition
To add vectors, add their corresponding components.

**Example:** If a = (3, 2) and b = (1, 4), then a + b = (3+1, 2+4) = (4, 6)

## Scalar Multiplication
Multiplying a vector by a scalar (number) multiplies each component.

**Example:** If a = (3, 2), then 3a = (9, 6)

## Magnitude of a Vector
$$|\\vec{a}| = \\sqrt{x^2 + y^2}$$

**Example:** For a = (3, 4), |a| = √(9+16) = √25 = 5

## Nigerian Context
Pilots at Nigerian airports (like Murtala Muhammed International Airport) use vector concepts to calculate resultant velocity when accounting for wind speed and direction during flight navigation.

## Practice
1. Given a = (2, 5) and b = (4, -1), find a + b.
2. Find the magnitude of vector (6, 8).
3. If a = (3, -2), find 4a.

## Key Takeaways
- Vectors have both magnitude and direction, unlike scalars.
- Vector addition and scalar multiplication are done component-wise.
- Magnitude is found using the Pythagorean-based formula √(x² + y²).`,
    },
    {
      title: "Permutations and Combinations",
      summary: "Understand the difference between permutations and combinations and apply their formulas.",
      durationMins: 28,
      term: 2,
      topic: { title: "Permutations and Combinations", nerdcCode: "FMT-SS2-P6", waecTopic: "Permutations and Combinations — WAEC Further Mathematics Syllabus", jambRelevance: "Permutation/combination problems are common in JAMB Further Mathematics." },
      contentMd: `# Permutations and Combinations

## Permutations
A permutation is an arrangement of objects where **order matters**.

$$^nP_r = \\frac{n!}{(n-r)!}$$

**Example:** In how many ways can 3 students be selected and arranged from a class of 8 for 1st, 2nd, and 3rd position in a competition?

⁸P₃ = 8!/(8-3)! = 8!/5! = 8×7×6 = 336 ways

## Combinations
A combination is a selection of objects where **order does not matter**.

$$^nC_r = \\frac{n!}{r!(n-r)!}$$

**Example:** In how many ways can a committee of 3 be chosen from 8 students (order doesn't matter)?

⁸C₃ = 8!/(3!×5!) = 336/6 = 56 ways

## Key Difference
Use permutations when **order/position matters** (e.g., 1st, 2nd, 3rd place); use combinations when **only the group/selection matters** (e.g., choosing a committee).

## Nigerian Context
Permutations and combinations are used in analysing possible outcomes for Nigerian lottery/staking games, and in JAMB/WAEC probability-related questions involving selecting representatives or arranging items.

## Practice
1. In how many ways can 4 books be arranged on a shelf from a set of 6 books?
2. How many ways can a team of 5 be selected from 12 players?
3. Explain the key difference between a permutation and a combination.

## Key Takeaways
- Permutations count arrangements where order matters; combinations count selections where order doesn't matter.
- Both use factorial notation (n!) in their formulas.`,
    },
  ],
  quizQuestions: [
    { text: "The derivative of y = x⁴ is:", optionA: "4x³", optionB: "x³", optionC: "4x⁵", optionD: "x⁵/5", correctOption: "A", explanation: "Using the power rule: d/dx(x⁴) = 4x³." },
    { text: "The derivative of a constant is:", optionA: "1", optionB: "0", optionC: "the constant itself", optionD: "undefined", correctOption: "B", explanation: "Constants have a zero rate of change, so their derivative is 0." },
    { text: "Given a = (2,3) and b = (1,1), a + b equals:", optionA: "(3,4)", optionB: "(1,2)", optionC: "(2,3)", optionD: "(3,3)", correctOption: "A", explanation: "Adding component-wise: (2+1, 3+1) = (3,4)." },
    { text: "Permutations are used when:", optionA: "order does not matter", optionB: "order matters", optionC: "there is only one object", optionD: "objects are identical", correctOption: "B", explanation: "Permutations count arrangements where order matters." },
    { text: "The magnitude of vector (3,4) is:", optionA: "5", optionB: "7", optionC: "12", optionD: "25", correctOption: "A", explanation: "|v| = √(3²+4²) = √25 = 5." },
  ],
  examTitle: "SS2 Further Mathematics — First Term Examination",
  examQuestions: [
    { text: "Differentiate y = 3x² + 5x.", optionA: "6x + 5", optionB: "3x + 5", optionC: "6x² + 5x", optionD: "3x + 5x", correctOption: "A", explanation: "dy/dx = 6x + 5, applying the power rule term by term.", board: "WAEC" },
    { text: "Find the gradient of y = x² at x = 3.", optionA: "3", optionB: "6", optionC: "9", optionD: "2", correctOption: "B", explanation: "dy/dx = 2x, at x=3: gradient = 6.", board: "WAEC" },
    { text: "If a = (5, -2), then 2a equals:", optionA: "(10, -4)", optionB: "(7, 0)", optionC: "(5, -2)", optionD: "(10, 4)", correctOption: "A", explanation: "Scalar multiplication: 2 × (5,-2) = (10,-4).", board: "WAEC" },
    { text: "⁵P₂ equals:", optionA: "10", optionB: "20", optionC: "60", optionD: "120", correctOption: "B", explanation: "⁵P₂ = 5!/(5-2)! = 5×4 = 20.", board: "WAEC" },
    { text: "⁶C₂ equals:", optionA: "12", optionB: "15", optionC: "30", optionD: "6", correctOption: "B", explanation: "⁶C₂ = 6!/(2!×4!) = 15.", board: "WAEC" },
    { text: "The formula for magnitude of vector (x,y) is:", optionA: "x + y", optionB: "√(x² + y²)", optionC: "x² + y²", optionD: "xy", correctOption: "B", explanation: "Magnitude = √(x² + y²), based on the Pythagorean theorem.", board: "JAMB" },
    { text: "Differentiate y = 7 (a constant).", optionA: "7", optionB: "0", optionC: "1", optionD: "undefined", correctOption: "B", explanation: "The derivative of any constant is 0.", board: "WAEC" },
    { text: "Choosing a 3-person committee from 10 people (order doesn't matter) uses:", optionA: "permutation", optionB: "combination", optionC: "differentiation", optionD: "vector addition", correctOption: "B", explanation: "Since order doesn't matter for a committee, combinations are used.", board: "WAEC" },
    { text: "Differentiate y = 2x³ − x² + 4.", optionA: "6x² − 2x", optionB: "6x² − 2x + 4", optionC: "2x² − x", optionD: "6x − 2", correctOption: "A", explanation: "dy/dx = 6x² − 2x (the derivative of the constant 4 is 0).", board: "WAEC" },
    { text: "If vector a = (4,3), the magnitude of a is:", optionA: "3", optionB: "4", optionC: "5", optionD: "7", correctOption: "C", explanation: "|a| = √(16+9) = √25 = 5.", board: "NECO" },
  ],
};
