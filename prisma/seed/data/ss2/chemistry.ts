import { SeedSubjectContent } from "../content-types";

export const ss2Chemistry: SeedSubjectContent = {
  subjectSlug: "chemistry",
  classShortName: "SS2",
  stream: "SCIENCE",
  lessons: [
    {
      title: "Atomic Structure and the Periodic Table",
      summary: "Understand atomic structure (protons, neutrons, electrons) and how elements are arranged in the periodic table.",
      durationMins: 28,
      term: 1,
      topic: {
        title: "Atomic Structure",
        nerdcCode: "CHM-SS2-A1",
        waecTopic: "Structure of the Atom — WAEC Chemistry Syllabus",
        jambRelevance: "Atomic structure and periodic trends are core JAMB Chemistry topics.",
      },
      contentMd: `# Atomic Structure and the Periodic Table

## Structure of the Atom
An atom consists of three main particles:
- **Protons** — positively charged, found in the nucleus
- **Neutrons** — no charge (neutral), found in the nucleus
- **Electrons** — negatively charged, orbit the nucleus in shells

## Atomic Number and Mass Number
- **Atomic number (Z)** = number of protons
- **Mass number (A)** = number of protons + neutrons

## The Periodic Table
Elements are arranged in order of increasing atomic number into **periods** (horizontal rows) and **groups** (vertical columns).

- Elements in the same **group** have similar chemical properties because they have the same number of electrons in their outermost shell (valence electrons).
- Elements in the same **period** have the same number of electron shells.

## Worked Example
An atom has 11 protons and 12 neutrons. Find its atomic number and mass number.

**Solution:**
Atomic number = 11 (number of protons)
Mass number = 11 + 12 = 23
This is Sodium (Na).

## Nigerian Context
Nigeria has significant deposits of elements like tin (Sn) in Jos Plateau and columbite. Understanding atomic structure helps explain the properties that make these minerals valuable for various industrial applications.

## Practice
1. Define atomic number and mass number.
2. An atom has atomic number 17 and mass number 35. How many neutrons does it have?
3. Explain why elements in the same group have similar properties.

## Key Takeaways
- Atoms are made of protons, neutrons and electrons.
- The periodic table organises elements by atomic number into periods and groups.
- Elements in the same group share similar chemical behaviour.`,
    },
    {
      title: "Chemical Bonding: Ionic and Covalent Bonds",
      summary: "Understand how atoms combine through ionic and covalent bonding to form compounds.",
      durationMins: 26,
      term: 1,
      topic: {
        title: "Chemical Bonding",
        nerdcCode: "CHM-SS2-B2",
        waecTopic: "Chemical Combination — WAEC Chemistry Syllabus",
        jambRelevance: "Bonding types and properties of compounds are frequently tested in JAMB.",
      },
      contentMd: `# Chemical Bonding: Ionic and Covalent Bonds

## Why Atoms Bond
Atoms bond to achieve a stable electron configuration, usually resembling the nearest noble gas (a full outer shell).

## Ionic Bonding
Ionic bonds form when electrons are **transferred** from one atom (usually a metal) to another (usually a non-metal), creating oppositely charged ions that attract each other.

**Example:** Sodium chloride (NaCl) — Sodium (Na) loses one electron to become Na⁺, and Chlorine (Cl) gains that electron to become Cl⁻.

## Covalent Bonding
Covalent bonds form when atoms (usually non-metals) **share** electrons to achieve stability.

**Example:** Water (H₂O) — each hydrogen atom shares one electron with oxygen.

## Comparing Ionic and Covalent Compounds
| Property | Ionic Compounds | Covalent Compounds |
|---|---|---|
| Melting point | High | Usually low |
| Conducts electricity | Yes (when molten/dissolved) | No (usually) |
| State at room temp | Mostly solid | Solid, liquid, or gas |

## Nigerian Context
Table salt (sodium chloride) mined from salt flats in states like Benue and Ebonyi, or processed from seawater, is a common example of an ionic compound used daily in Nigerian kitchens.

## Practice
1. Explain the difference between ionic and covalent bonding.
2. Give one example each of an ionic and a covalent compound.
3. Why do ionic compounds generally have higher melting points than covalent compounds?

## Key Takeaways
- Ionic bonds involve electron transfer; covalent bonds involve electron sharing.
- Ionic compounds typically have high melting points and conduct electricity when molten/dissolved.
- Covalent compounds vary widely in properties and states of matter.`,
    },
    {
      title: "Acids, Bases and Salts",
      summary: "Learn the properties of acids and bases, the pH scale, and neutralisation reactions producing salts.",
      durationMins: 28,
      term: 2,
      topic: {
        title: "Acids, Bases and Salts",
        nerdcCode: "CHM-SS2-A5",
        waecTopic: "Acids, Bases and Salts — WAEC Chemistry Syllabus",
        jambRelevance: "Neutralisation reactions and pH concepts are common in JAMB Chemistry.",
      },
      contentMd: `# Acids, Bases and Salts

## Acids
Acids are substances that release hydrogen ions (H⁺) in water. They taste sour, turn blue litmus paper red, and have a pH less than 7.

**Examples:** Hydrochloric acid (HCl), citric acid (found in lemons/oranges), acetic acid (vinegar).

## Bases
Bases are substances that release hydroxide ions (OH⁻) in water. They taste bitter, feel slippery, turn red litmus paper blue, and have a pH greater than 7.

**Examples:** Sodium hydroxide (NaOH), calcium hydroxide (used in local "kaun" preparation for some traditional foods).

## The pH Scale
The pH scale ranges from 0 to 14:
- pH < 7 = acidic
- pH = 7 = neutral
- pH > 7 = basic (alkaline)

## Neutralisation
When an acid reacts with a base, they neutralise each other to form a **salt** and **water**.

$$\\text{Acid + Base} \\rightarrow \\text{Salt + Water}$$

**Example:** HCl + NaOH → NaCl + H₂O

## Nigerian Context
Farmers in Nigeria often test and adjust soil pH using lime (a base) to neutralise overly acidic soil, improving crop yields for crops like maize and cassava in regions with acidic soil conditions.

## Practice
1. Define an acid and a base in terms of ions released in water.
2. Write the general word equation for neutralisation.
3. Why might a farmer add lime to acidic farmland?

## Key Takeaways
- Acids release H⁺ ions; bases release OH⁻ ions in water.
- The pH scale measures acidity/alkalinity from 0-14.
- Neutralisation reactions between acids and bases produce salt and water.`,
    },
  ],
  quizQuestions: [
    { text: "The number of protons in an atom is called its:", optionA: "mass number", optionB: "atomic number", optionC: "isotope number", optionD: "valency", correctOption: "B", explanation: "Atomic number equals the number of protons in an atom." },
    { text: "Ionic bonds form through electron:", optionA: "sharing", optionB: "transfer", optionC: "destruction", optionD: "duplication", correctOption: "B", explanation: "Ionic bonding involves the transfer of electrons between atoms." },
    { text: "Water (H₂O) is held together by which type of bond?", optionA: "Ionic bond", optionB: "Covalent bond", optionC: "Metallic bond", optionD: "No bond", correctOption: "B", explanation: "Water molecules are held together by covalent bonds (shared electrons)." },
    { text: "An acid has a pH:", optionA: "greater than 7", optionB: "equal to 7", optionC: "less than 7", optionD: "equal to 14", correctOption: "C", explanation: "Acids have a pH value less than 7." },
    { text: "The products of a neutralisation reaction are:", optionA: "acid and base", optionB: "salt and water", optionC: "gas and metal", optionD: "oxide and hydrogen", correctOption: "B", explanation: "Neutralisation between an acid and a base produces salt and water." },
  ],
  examTitle: "SS2 Chemistry — First Term Examination",
  examQuestions: [
    { text: "An atom with 12 protons and 12 neutrons has a mass number of:", optionA: "12", optionB: "24", optionC: "0", optionD: "144", correctOption: "B", explanation: "Mass number = protons + neutrons = 12 + 12 = 24.", board: "WAEC" },
    { text: "Elements in the same group of the periodic table have similar properties because they have the same:", optionA: "number of neutrons", optionB: "number of valence electrons", optionC: "atomic mass", optionD: "number of shells", correctOption: "B", explanation: "Same group elements share the same number of valence (outer shell) electrons.", board: "WAEC" },
    { text: "Sodium chloride is an example of a compound with:", optionA: "covalent bonding", optionB: "ionic bonding", optionC: "metallic bonding only", optionD: "no bonding", correctOption: "B", explanation: "NaCl is formed via ionic bonding between Na⁺ and Cl⁻ ions.", board: "WAEC" },
    { text: "Which of these correctly describes a base?", optionA: "Releases H⁺ ions in water", optionB: "Releases OH⁻ ions in water", optionC: "Has a pH below 7", optionD: "Tastes sour", correctOption: "B", explanation: "Bases release hydroxide (OH⁻) ions when dissolved in water.", board: "NECO" },
    { text: "The pH of a neutral solution is:", optionA: "0", optionB: "7", optionC: "14", optionD: "10", correctOption: "B", explanation: "A pH of 7 indicates a neutral solution.", board: "JAMB" },
    { text: "In the reaction HCl + NaOH → NaCl + H₂O, NaCl is the:", optionA: "acid", optionB: "base", optionC: "salt", optionD: "solvent", correctOption: "C", explanation: "NaCl (sodium chloride) is the salt formed in this neutralisation reaction.", board: "WAEC" },
    { text: "Covalent compounds generally have:", optionA: "high melting points", optionB: "low melting points", optionC: "no melting point", optionD: "the same melting point as ionic compounds", correctOption: "B", explanation: "Covalent compounds typically have lower melting points than ionic compounds.", board: "NECO" },
    { text: "The vertical columns in the periodic table are called:", optionA: "periods", optionB: "groups", optionC: "series", optionD: "blocks", correctOption: "B", explanation: "Vertical columns in the periodic table are called groups.", board: "WAEC" },
    { text: "Litmus paper turns red in the presence of a(n):", optionA: "base", optionB: "acid", optionC: "salt", optionD: "neutral solution", correctOption: "B", explanation: "Acids turn blue litmus paper red.", board: "JAMB" },
    { text: "An element has atomic number 19 and mass number 39. The number of neutrons is:", optionA: "19", optionB: "20", optionC: "39", optionD: "58", correctOption: "B", explanation: "Neutrons = mass number − atomic number = 39 − 19 = 20.", board: "WAEC" },
    { text: "The horizontal rows of the periodic table are called:", optionA: "groups", optionB: "periods", optionC: "families", optionD: "blocks", correctOption: "B", explanation: "Horizontal rows are called periods.", board: "NECO" },
    { text: "A farmer adds lime to acidic soil mainly to:", optionA: "increase acidity", optionB: "neutralise the soil", optionC: "reduce crop yield", optionD: "add colour to the soil", correctOption: "B", explanation: "Lime, a base, neutralises excess acidity in farmland soil.", board: "WAEC" },
  ],
};
