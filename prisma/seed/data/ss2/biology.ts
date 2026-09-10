import { SeedSubjectContent } from "../content-types";

export const ss2Biology: SeedSubjectContent = {
  subjectSlug: "biology",
  classShortName: "SS2",
  stream: "SCIENCE",
  lessons: [
    {
      title: "Cell Structure and Function",
      summary: "Understand the structure of plant and animal cells and the functions of key organelles.",
      durationMins: 26,
      term: 1,
      topic: { title: "The Cell", nerdcCode: "BIO-SS2-C1", waecTopic: "Cell Biology — WAEC Biology Syllabus", jambRelevance: "Cell structure is one of the most frequently tested JAMB Biology topics." },
      contentMd: `# Cell Structure and Function

## The Cell as the Basic Unit of Life
All living organisms are made of cells — the smallest structural and functional unit of life.

## Key Cell Organelles
- **Cell membrane**: controls movement of substances in and out of the cell.
- **Nucleus**: contains genetic material (DNA); controls cell activities.
- **Cytoplasm**: jelly-like substance where chemical reactions occur.
- **Mitochondria**: site of respiration; produces energy (ATP).
- **Cell wall** (plants only): made of cellulose; provides rigidity and support.
- **Chloroplast** (plants only): site of photosynthesis, contains chlorophyll.
- **Vacuole**: stores water, food, and waste products (large and permanent in plant cells).

## Plant Cell vs Animal Cell
| Feature | Plant Cell | Animal Cell |
|---|---|---|
| Cell wall | Present | Absent |
| Chloroplast | Present | Absent |
| Vacuole | Large, permanent | Small or absent |
| Shape | Fixed (rectangular) | Irregular (round) |

## Nigerian Context
Understanding chloroplasts and photosynthesis explains how staple Nigerian crops like cassava, maize, and yam produce the food energy stored in their leaves, stems, and tubers that we eat.

## Practice
1. List three organelles found in plant cells but not animal cells.
2. What is the function of the mitochondria?
3. Explain why plant cells have a fixed shape while animal cells do not.

## Key Takeaways
- Cells are the basic unit of all living things.
- Plant cells have a cell wall, chloroplast, and large vacuole; animal cells lack these.
- Each organelle has a specific function supporting the cell's survival.`,
    },
    {
      title: "Photosynthesis: The Food-Making Process in Plants",
      summary: "Learn how green plants make their own food through photosynthesis, and the factors affecting the rate of photosynthesis.",
      durationMins: 26,
      term: 1,
      topic: { title: "Photosynthesis", nerdcCode: "BIO-SS2-P3", waecTopic: "Nutrition in Plants — WAEC Biology Syllabus", jambRelevance: "Photosynthesis equations and factors are commonly tested in JAMB." },
      contentMd: `# Photosynthesis: The Food-Making Process in Plants

## Definition
Photosynthesis is the process by which green plants make their own food (glucose) using carbon dioxide, water, and sunlight energy, with chlorophyll as a catalyst.

## The Photosynthesis Equation
$$6CO_2 + 6H_2O \\xrightarrow{\\text{sunlight, chlorophyll}} C_6H_{12}O_6 + 6O_2$$

Carbon dioxide + Water → Glucose + Oxygen (in the presence of sunlight and chlorophyll)

## Where Photosynthesis Occurs
Photosynthesis occurs mainly in the leaves, within cells containing chloroplasts.

## Factors Affecting the Rate of Photosynthesis
1. **Light intensity** — more light generally increases the rate, up to a point.
2. **Carbon dioxide concentration** — higher CO₂ levels can increase the rate.
3. **Temperature** — photosynthesis is fastest within an optimal temperature range; too high or too low slows it down.
4. **Water availability** — insufficient water reduces the rate of photosynthesis.

## Nigerian Context
During the dry (harmattan) season, reduced water availability can limit photosynthesis in crops, which is why irrigation is important for farmers in northern Nigeria to maintain healthy crop yields for maize, rice and vegetables.

## Practice
1. Write the word equation for photosynthesis.
2. Name two factors that affect the rate of photosynthesis.
3. Explain why photosynthesis mainly occurs in the leaves.

## Key Takeaways
- Photosynthesis converts CO₂ and water into glucose and oxygen using light energy.
- Chlorophyll in chloroplasts captures the light energy needed for this process.
- Light, CO₂, temperature, and water availability all affect the rate of photosynthesis.`,
    },
    {
      title: "Genetics: Mendel's Laws and Inheritance",
      summary: "Understand basic principles of inheritance, dominant and recessive traits, and simple genetic crosses.",
      durationMins: 28,
      term: 2,
      topic: { title: "Genetics", nerdcCode: "BIO-SS2-G6", waecTopic: "Variation and Genetics — WAEC Biology Syllabus", jambRelevance: "Monohybrid crosses and genetic ratios are frequently tested in JAMB Biology." },
      contentMd: `# Genetics: Mendel's Laws and Inheritance

## Basic Genetic Terms
- **Gene**: a unit of heredity that determines a trait.
- **Allele**: different versions of a gene (e.g., tall or short allele for height).
- **Dominant allele**: expressed when present, represented by a capital letter (e.g., T).
- **Recessive allele**: only expressed when two copies are present (no dominant allele), represented by a lowercase letter (e.g., t).
- **Genotype**: the genetic makeup (e.g., Tt).
- **Phenotype**: the observable physical trait (e.g., tall).

## Mendel's Law of Segregation
Each parent passes only one allele for each trait to their offspring, and these alleles separate (segregate) during the formation of gametes.

## Monohybrid Cross Example
Cross a pure tall plant (TT) with a pure short plant (tt):
- All offspring (F1 generation) will be Tt (tall, since T is dominant).

Crossing two Tt plants (F1 x F1):
- Genotype ratio: 1 TT : 2 Tt : 1 tt
- Phenotype ratio: 3 tall : 1 short

## Nigerian Context
Understanding inheritance helps explain why sickle cell disease (a genetic condition prevalent in Nigeria) is inherited: a child needs to inherit the sickle cell allele (S) from both parents (SS) to have sickle cell disease, while carriers (AS) usually show no symptoms — this is why genotype compatibility testing before marriage is commonly encouraged in Nigeria.

## Practice
1. Define genotype and phenotype with an example.
2. In a cross between Aa and Aa, what is the expected genotype ratio of offspring?
3. Explain why two AS (carrier) parents can have a child with sickle cell disease (SS).

## Key Takeaways
- Genes carry hereditary information; alleles are gene variants (dominant or recessive).
- Monohybrid crosses predict genotype/phenotype ratios in offspring.
- Genetics explains important health topics in Nigeria, like sickle cell inheritance.`,
    },
  ],
  quizQuestions: [
    { text: "Which organelle is the site of photosynthesis?", optionA: "Mitochondria", optionB: "Nucleus", optionC: "Chloroplast", optionD: "Vacuole", correctOption: "C", explanation: "Chloroplasts contain chlorophyll and are the site of photosynthesis." },
    { text: "Which structure is found in plant cells but NOT animal cells?", optionA: "Nucleus", optionB: "Cell wall", optionC: "Cytoplasm", optionD: "Cell membrane", correctOption: "B", explanation: "The cell wall is present in plant cells but absent in animal cells." },
    { text: "The gases involved in photosynthesis are carbon dioxide and:", optionA: "nitrogen", optionB: "oxygen", optionC: "hydrogen", optionD: "helium", correctOption: "B", explanation: "Photosynthesis takes in carbon dioxide and releases oxygen." },
    { text: "An allele that is only expressed when two copies are present is called:", optionA: "dominant", optionB: "recessive", optionC: "genotype", optionD: "phenotype", correctOption: "B", explanation: "Recessive alleles require two copies to be expressed." },
    { text: "The observable physical trait of an organism is its:", optionA: "genotype", optionB: "phenotype", optionC: "allele", optionD: "gene pool", correctOption: "B", explanation: "Phenotype refers to the observable characteristics of an organism." },
  ],
  examTitle: "SS2 Biology — First Term Examination",
  examQuestions: [
    { text: "The function of the mitochondria is to:", optionA: "store water", optionB: "produce energy through respiration", optionC: "control cell activities", optionD: "carry out photosynthesis", correctOption: "B", explanation: "Mitochondria are the site of cellular respiration, producing ATP (energy).", board: "WAEC" },
    { text: "Which part of the cell controls what enters and leaves it?", optionA: "Nucleus", optionB: "Cell membrane", optionC: "Cytoplasm", optionD: "Chloroplast", correctOption: "B", explanation: "The cell membrane regulates the movement of substances in and out of the cell.", board: "WAEC" },
    { text: "The raw materials for photosynthesis are:", optionA: "glucose and oxygen", optionB: "carbon dioxide and water", optionC: "nitrogen and water", optionD: "oxygen and water", correctOption: "B", explanation: "Photosynthesis uses carbon dioxide and water as raw materials.", board: "WAEC" },
    { text: "A cross between Tt and Tt plants produces a phenotype ratio of:", optionA: "1:1", optionB: "1:2:1", optionC: "3:1", optionD: "9:3:3:1", correctOption: "C", explanation: "Tt x Tt gives a 3:1 phenotype ratio (3 dominant : 1 recessive).", board: "JAMB" },
    { text: "A child with sickle cell disease (SS) is born to two parents who are both:", optionA: "AA", optionB: "AS (carriers)", optionC: "SS", optionD: "Aa", correctOption: "B", explanation: "Two AS carrier parents can have children with SS (sickle cell disease), AS, or AA genotypes.", board: "WAEC" },
    { text: "Chlorophyll is mainly found in the:", optionA: "mitochondria", optionB: "chloroplast", optionC: "nucleus", optionD: "vacuole", correctOption: "B", explanation: "Chlorophyll, essential for photosynthesis, is located in the chloroplast.", board: "NECO" },
    { text: "The genetic makeup of an organism is called its:", optionA: "phenotype", optionB: "genotype", optionC: "allele", optionD: "chromosome", correctOption: "B", explanation: "Genotype refers to the genetic makeup of an organism.", board: "WAEC" },
    { text: "Which of these is a factor affecting the rate of photosynthesis?", optionA: "Soil colour", optionB: "Light intensity", optionC: "Farmer's age", optionD: "Plant height only", correctOption: "B", explanation: "Light intensity directly affects the rate of photosynthesis.", board: "JAMB" },
    { text: "In Mendel's law of segregation, alleles separate during the formation of:", optionA: "leaves", optionB: "gametes", optionC: "roots", optionD: "chlorophyll", correctOption: "B", explanation: "Alleles segregate during gamete formation (meiosis).", board: "WAEC" },
    { text: "The permanent, large structure that stores water in plant cells is the:", optionA: "nucleus", optionB: "vacuole", optionC: "mitochondria", optionD: "cell wall", correctOption: "B", explanation: "The vacuole, large and permanent in plant cells, stores water and other substances.", board: "NECO" },
    { text: "A cross between a pure tall (TT) and pure short (tt) plant produces offspring that are:", optionA: "all tall", optionB: "all short", optionC: "half tall, half short", optionD: "all TT", correctOption: "A", explanation: "All F1 offspring will be Tt, and since T is dominant, they will all be tall.", board: "WAEC" },
  ],
};
