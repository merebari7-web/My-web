import { SeedSubjectContent } from "../content-types";

export const ss2Physics: SeedSubjectContent = {
  subjectSlug: "physics",
  classShortName: "SS2",
  stream: "SCIENCE",
  lessons: [
    {
      title: "Waves: Properties and Types",
      summary: "Understand transverse and longitudinal waves, and key wave properties like wavelength, frequency, and amplitude.",
      durationMins: 30,
      term: 1,
      topic: {
        title: "Waves",
        nerdcCode: "PHY-SS2-W1",
        waecTopic: "Waves — WAEC Physics Syllabus Section 5",
        necoTopic: "Wave Motion — NECO Physics Syllabus",
        jambRelevance: "Waves are heavily tested in JAMB Physics, including calculations of speed, frequency and wavelength.",
      },
      contentMd: `# Waves: Properties and Types

## What is a Wave?
A wave is a disturbance that transfers energy from one point to another without transferring matter.

## Types of Waves

### 1. Transverse Waves
Particles vibrate **perpendicular** (at right angles) to the direction of wave travel. Examples: water waves, light waves, waves on a rope.

### 2. Longitudinal Waves
Particles vibrate **parallel** to the direction of wave travel, forming compressions and rarefactions. Example: sound waves.

## Key Wave Properties
- **Wavelength (λ)**: distance between two successive crests (or compressions), measured in metres.
- **Frequency (f)**: number of complete waves passing a point per second, measured in Hertz (Hz).
- **Amplitude**: maximum displacement of a particle from its rest position.
- **Period (T)**: time taken for one complete wave cycle. T = 1/f

## The Wave Equation
$$v = f\\lambda$$
Where v = speed (m/s), f = frequency (Hz), λ = wavelength (m).

## Worked Example
A wave has a frequency of 50 Hz and a wavelength of 4m. Find its speed.

**Solution:**
v = f × λ = 50 × 4 = 200 m/s

## Nigerian Context
Radio and TV stations across Nigeria, such as Radio Nigeria and NTA, broadcast using electromagnetic waves at specific frequencies (e.g., FM radio operates between 88-108 MHz) — understanding wave frequency helps explain how different stations avoid interfering with each other.

## Practice
1. Distinguish between transverse and longitudinal waves with one example each.
2. A wave travels at 340 m/s with a wavelength of 0.5m. Find its frequency.
3. Define amplitude and period of a wave.

## Key Takeaways
- Waves transfer energy, not matter.
- Transverse waves vibrate perpendicular to travel direction; longitudinal waves vibrate parallel.
- v = fλ is the fundamental wave equation, essential for WAEC/JAMB calculations.`,
    },
    {
      title: "Reflection and Refraction of Light",
      summary: "Learn the laws of reflection and refraction, and how light behaves at boundaries between media.",
      durationMins: 28,
      term: 1,
      topic: {
        title: "Optics: Reflection and Refraction",
        nerdcCode: "PHY-SS2-O2",
        waecTopic: "Light — WAEC Physics Syllabus Section 6",
        necoTopic: "Geometric Optics — NECO Physics Syllabus",
        jambRelevance: "Refractive index calculations are common in JAMB Physics.",
      },
      contentMd: `# Reflection and Refraction of Light

## Reflection of Light
Reflection occurs when light bounces off a surface. The **Laws of Reflection** state:
1. The incident ray, reflected ray, and normal all lie on the same plane.
2. The angle of incidence equals the angle of reflection (∠i = ∠r).

## Refraction of Light
Refraction is the bending of light as it passes from one medium to another (e.g., from air into water or glass), due to a change in speed.

## Refractive Index
The refractive index (n) of a medium measures how much light bends when entering it.

$$n = \\frac{\\sin i}{\\sin r}$$

Where i = angle of incidence, r = angle of refraction.

## Worked Example
Light travels from air into glass. The angle of incidence is 30°, and refractive index of glass is 1.5. Find the angle of refraction.

**Solution:**
n = sin i / sin r
1.5 = sin 30° / sin r
sin r = sin 30° / 1.5 = 0.5 / 1.5 = 0.333
r = sin⁻¹(0.333) ≈ 19.5°

## Real-Life Applications in Nigeria
- Refraction explains why a straight stick appears bent when partly dipped in a clear stream or bucket of water.
- Eyeglasses prescribed at Nigerian hospitals and optical clinics use refraction principles to correct vision.
- Fibre optic cables (used in modern telecom networks, including those expanding across Nigerian cities) rely on total internal reflection, a special case of refraction.

## Practice
1. State the two laws of reflection.
2. Define refractive index and write its formula.
3. A ray of light enters water (n = 1.33) from air at an angle of incidence of 40°. Find the angle of refraction.

## Key Takeaways
- Reflection: angle of incidence = angle of reflection.
- Refraction: light bends when changing medium, governed by refractive index.
- These principles explain everyday phenomena and technologies like fibre optics and corrective lenses.`,
    },
    {
      title: "Current Electricity: Ohm's Law and Resistance",
      summary: "Understand electric current, potential difference, resistance and apply Ohm's Law to solve circuit problems.",
      durationMins: 30,
      term: 2,
      topic: {
        title: "Current Electricity",
        nerdcCode: "PHY-SS2-E3",
        waecTopic: "Current Electricity — WAEC Physics Syllabus Section 8",
        necoTopic: "Electricity — NECO Physics Syllabus",
        jambRelevance: "Ohm's Law and circuit calculations are among the most frequently tested JAMB Physics topics.",
      },
      contentMd: `# Current Electricity: Ohm's Law and Resistance

## Key Definitions
- **Electric current (I)**: the rate of flow of electric charge, measured in Amperes (A).
- **Potential difference (V)**: the work done in moving a unit charge between two points, measured in Volts (V).
- **Resistance (R)**: opposition to current flow, measured in Ohms (Ω).

## Ohm's Law
Ohm's Law states that the current through a conductor is directly proportional to the potential difference across it, provided temperature remains constant.

$$V = IR$$

## Worked Example
A circuit has a resistance of 20Ω and a current of 0.5A flowing through it. Find the potential difference.

**Solution:**
V = IR = 0.5 × 20 = 10V

## Resistors in Series and Parallel
- **Series**: Total resistance R = R₁ + R₂ + R₃ + ...
- **Parallel**: 1/R = 1/R₁ + 1/R₂ + 1/R₃ + ...

## Worked Example: Series Circuit
Two resistors of 4Ω and 6Ω are connected in series to a 20V battery. Find the total resistance and current flowing.

**Solution:**
R total = 4 + 6 = 10Ω
I = V/R = 20/10 = 2A

## Nigerian Context
Understanding resistance and Ohm's Law is essential for technicians who install and repair electrical wiring and inverter/solar systems, increasingly common in Nigerian homes due to unreliable public power supply (NEPA/PHCN, now the various DisCos).

## Practice
1. State Ohm's Law and write its formula.
2. Calculate the resistance of a conductor carrying 3A of current at 12V.
3. Two resistors, 5Ω and 10Ω, are connected in parallel. Find their combined resistance.

## Key Takeaways
- Ohm's Law: V = IR, connecting voltage, current and resistance.
- Series resistances add directly; parallel resistances combine reciprocally.
- These concepts underpin practical electrical work common across Nigeria.`,
    },
  ],
  quizQuestions: [
    { text: "In a transverse wave, particles vibrate:", optionA: "parallel to wave direction", optionB: "perpendicular to wave direction", optionC: "in circles only", optionD: "randomly", correctOption: "B", explanation: "Transverse waves have particle vibration perpendicular to the direction of travel." },
    { text: "The wave equation is given by:", optionA: "v = f/λ", optionB: "v = fλ", optionC: "v = λ/f", optionD: "v = f + λ", correctOption: "B", explanation: "The wave equation is v = fλ (speed = frequency × wavelength)." },
    { text: "According to the laws of reflection, the angle of incidence:", optionA: "is always 90°", optionB: "equals the angle of reflection", optionC: "is twice the angle of reflection", optionD: "is unrelated to the angle of reflection", correctOption: "B", explanation: "The angle of incidence equals the angle of reflection." },
    { text: "Ohm's Law is expressed as:", optionA: "V = I/R", optionB: "V = IR", optionC: "V = R/I", optionD: "I = VR", correctOption: "B", explanation: "Ohm's Law states V = IR." },
    { text: "The SI unit of electric current is the:", optionA: "Volt", optionB: "Ohm", optionC: "Ampere", optionD: "Watt", correctOption: "C", explanation: "Electric current is measured in Amperes (A)." },
  ],
  examTitle: "SS2 Physics — First Term Examination",
  examQuestions: [
    { text: "Sound waves are an example of:", optionA: "transverse waves", optionB: "longitudinal waves", optionC: "electromagnetic waves", optionD: "standing waves only", correctOption: "B", explanation: "Sound waves are longitudinal, with particles vibrating parallel to wave travel.", board: "WAEC" },
    { text: "A wave has a wavelength of 2m and frequency of 100Hz. Its speed is:", optionA: "50 m/s", optionB: "102 m/s", optionC: "200 m/s", optionD: "0.02 m/s", correctOption: "C", explanation: "v = fλ = 100 × 2 = 200 m/s.", board: "WAEC" },
    { text: "The bending of light as it passes from one medium to another is called:", optionA: "reflection", optionB: "refraction", optionC: "diffraction", optionD: "dispersion", correctOption: "B", explanation: "Refraction refers to light bending when changing medium.", board: "WAEC" },
    { text: "Refractive index is calculated using:", optionA: "n = sin i / sin r", optionB: "n = sin r / sin i", optionC: "n = i × r", optionD: "n = i / r", correctOption: "A", explanation: "Refractive index n = sin(angle of incidence) / sin(angle of refraction).", board: "WAEC" },
    { text: "A current of 2A flows through a 15Ω resistor. The potential difference across it is:", optionA: "7.5V", optionB: "17V", optionC: "30V", optionD: "13V", correctOption: "C", explanation: "V = IR = 2 × 15 = 30V.", board: "JAMB" },
    { text: "Two resistors of 3Ω and 6Ω are in series. Total resistance is:", optionA: "2Ω", optionB: "3Ω", optionC: "9Ω", optionD: "18Ω", correctOption: "C", explanation: "In series, resistances add: 3 + 6 = 9Ω.", board: "WAEC" },
    { text: "The unit of resistance is:", optionA: "Ampere", optionB: "Volt", optionC: "Ohm", optionD: "Watt", correctOption: "C", explanation: "Resistance is measured in Ohms (Ω).", board: "NECO" },
    { text: "Total internal reflection is used in the operation of:", optionA: "mirrors", optionB: "fibre optic cables", optionC: "resistors", optionD: "batteries", correctOption: "B", explanation: "Fibre optic cables rely on total internal reflection to transmit light signals.", board: "JAMB" },
    { text: "The frequency of a wave is measured in:", optionA: "metres", optionB: "seconds", optionC: "Hertz", optionD: "Newtons", correctOption: "C", explanation: "Frequency is measured in Hertz (Hz), representing cycles per second.", board: "WAEC" },
    { text: "Which of these correctly states Ohm's Law's condition?", optionA: "Temperature must increase", optionB: "Temperature must remain constant", optionC: "Resistance must be zero", optionD: "Current must be alternating", correctOption: "B", explanation: "Ohm's Law holds true only if temperature (and other physical conditions) remain constant.", board: "NECO" },
    { text: "The maximum displacement of a wave particle from rest is called:", optionA: "wavelength", optionB: "amplitude", optionC: "period", optionD: "frequency", correctOption: "B", explanation: "Amplitude is the maximum displacement from the rest position.", board: "WAEC" },
    { text: "Which combination of resistors gives the LOWEST total resistance?", optionA: "Series combination", optionB: "Parallel combination", optionC: "Both give the same", optionD: "Cannot be determined", correctOption: "B", explanation: "Parallel combinations always give a total resistance lower than the smallest individual resistor.", board: "JAMB" },
  ],
};
