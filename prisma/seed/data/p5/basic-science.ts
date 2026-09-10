import { SeedSubjectContent } from "../content-types";

export const p5BasicScience: SeedSubjectContent = {
  subjectSlug: "basic-science-technology",
  classShortName: "P5",
  lessons: [
    {
      title: "Living and Non-Living Things",
      summary: "Classify things in our environment as living or non-living, and identify the characteristics of living things.",
      durationMins: 18,
      term: 1,
      topic: { title: "Living and Non-Living Things", nerdcCode: "BST-P5-B1" },
      contentMd: `# Living and Non-Living Things

## Introduction
Everything around us can be grouped into two: **living things** and **non-living things**.

## Characteristics of Living Things
All living things:
1. **Breathe** (respire)
2. **Feed** (nutrition)
3. **Grow**
4. **Move**
5. **Reproduce** (produce young ones)
6. **Excrete** waste products
7. **Respond to stimuli** (sensitivity)
8. **Die** eventually

We can remember these using the acronym **MRS GREN**: Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.

## Examples
- **Living things:** humans, goats, mango trees, hibiscus flowers, fish in a pond
- **Non-living things:** stones, chairs, cars, water, iron rods

## Nigerian Context
A palm tree in a village compound is a living thing — it grows taller every year, produces palm fruits (reproduction), and needs water and sunlight (nutrition). A clay pot beside it is non-living — it does not grow, breathe, or reproduce.

## Practice
1. List three living things and three non-living things around your house.
2. Explain why a matchstick that can "burn" is still non-living.
3. Using MRS GREN, explain why a goat is a living thing.

## Key Takeaways
- Living things show all 8 characteristics (MRS GREN).
- Non-living things lack these characteristics, even if they can move (like a car) or seem active (like fire).`,
    },
    {
      title: "Simple Machines: Levers, Pulleys and Wheels",
      summary: "Understand simple machines used in daily life to make work easier, with examples from Nigerian homes and farms.",
      durationMins: 20,
      term: 2,
      topic: { title: "Simple Machines", nerdcCode: "BST-P5-T3" },
      contentMd: `# Simple Machines

## What is a Simple Machine?
A simple machine is a tool that makes work easier by changing the amount, direction, or speed of force needed to do a task.

## Types of Simple Machines

### 1. Lever
A rigid bar that turns around a fixed point called a **fulcrum**. Examples: a wheelbarrow, a see-saw, a pair of scissors, a crowbar used to lift heavy stones.

### 2. Pulley
A wheel with a groove for a rope, used to lift heavy loads. Example: a pulley used to draw water from a well, or to lift building materials at a construction site.

### 3. Wheel and Axle
A wheel attached to a rod (axle) that rotates together. Examples: bicycle wheels, car steering wheel, a door handle.

### 4. Inclined Plane
A flat, slanted surface used to move objects up or down with less force. Example: a ramp used to load goods onto a truck.

## Nigerian Context
At a local well in a village, women often use a pulley system with a rope and bucket to fetch water, reducing the effort compared to lifting the bucket straight up by hand.

## Practice
1. Name two simple machines you can find in your kitchen.
2. Explain how a wheelbarrow (a type of lever) makes farm work easier.
3. Give one example of an inclined plane used in your community.

## Key Takeaways
- Simple machines reduce the effort needed to do work.
- Common types: lever, pulley, wheel and axle, inclined plane.
- They are used widely in Nigerian homes, farms, and markets.`,
    },
    {
      title: "The Water Cycle",
      summary: "Learn how water moves through evaporation, condensation, and precipitation, and its importance to Nigerian agriculture.",
      durationMins: 20,
      term: 2,
      topic: { title: "The Water Cycle", nerdcCode: "BST-P5-B5", jambRelevance: "Basic environmental science concepts recur in JAMB Basic Science-linked subjects." },
      contentMd: `# The Water Cycle

## Introduction
The water cycle describes how water moves continuously between the earth and the atmosphere.

## Stages of the Water Cycle

### 1. Evaporation
The sun heats water in rivers, lakes, and oceans (like the Atlantic Ocean along Nigeria's coast), turning it into water vapour that rises into the air.

### 2. Condensation
As water vapour rises and cools, it turns into tiny water droplets, forming clouds.

### 3. Precipitation
When clouds become heavy with water droplets, the water falls back to earth as rain (or sometimes hail).

### 4. Collection
Rainwater collects in rivers, lakes, and underground, ready to evaporate again and continue the cycle.

## Why the Water Cycle Matters in Nigeria
- It brings **rainy seasons** that farmers depend on for growing crops like maize, cassava, and rice.
- It refills rivers like the Niger and Benue, which support fishing and transportation.
- Understanding it helps us prepare for floods during heavy rains and conserve water during the dry (harmattan) season.

## Practice
1. List the four stages of the water cycle in order.
2. Explain what happens during evaporation.
3. Why is the water cycle important to farmers in Nigeria?

## Key Takeaways
- The water cycle has four main stages: evaporation, condensation, precipitation, and collection.
- It is a continuous process that supports agriculture and freshwater supply in Nigeria.`,
    },
  ],
  quizQuestions: [
    { text: "Which of these is NOT a characteristic of living things?", optionA: "Growth", optionB: "Reproduction", optionC: "Rusting", optionD: "Respiration", correctOption: "C", explanation: "Rusting is a chemical change in non-living metals, not a life process." },
    { text: "The fixed point on which a lever turns is called the:", optionA: "axle", optionB: "fulcrum", optionC: "pulley", optionD: "incline", correctOption: "B", explanation: "The fulcrum is the pivot point of a lever." },
    { text: "Water vapour turning into tiny droplets to form clouds is called:", optionA: "evaporation", optionB: "precipitation", optionC: "condensation", optionD: "collection", correctOption: "C", explanation: "Condensation is the change from water vapour to liquid droplets." },
    { text: "A wheelbarrow is an example of a:", optionA: "pulley", optionB: "lever", optionC: "inclined plane", optionD: "screw", correctOption: "B", explanation: "A wheelbarrow works as a lever with the wheel acting as the fulcrum." },
    { text: "Which acronym helps us remember characteristics of living things?", optionA: "MRS GREN", optionB: "ABCDE", optionC: "PEMDAS", optionD: "ROYGBIV", correctOption: "A", explanation: "MRS GREN stands for Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition." },
  ],
  examTitle: "Primary 5 Basic Science & Technology — First Term Examination",
  examQuestions: [
    { text: "Which of these is a living thing?", optionA: "Stone", optionB: "Mango tree", optionC: "Iron rod", optionD: "Plastic chair", correctOption: "B", explanation: "A mango tree grows, reproduces and needs nutrition, so it is living." },
    { text: "The process by which liquid water turns into water vapour is:", optionA: "condensation", optionB: "evaporation", optionC: "precipitation", optionD: "freezing", correctOption: "B", explanation: "Evaporation is the change from liquid to vapour due to heat." },
    { text: "A pulley is mainly used to:", optionA: "cut objects", optionB: "lift heavy loads", optionC: "measure length", optionD: "store water", correctOption: "B", explanation: "A pulley uses a wheel and rope system to lift heavy loads with less effort." },
    { text: "Rain falling from clouds is an example of:", optionA: "evaporation", optionB: "condensation", optionC: "precipitation", optionD: "transpiration", correctOption: "C", explanation: "Precipitation is water falling from the atmosphere as rain, snow, or hail." },
    { text: "Which is an example of an inclined plane?", optionA: "A ramp", optionB: "A see-saw", optionC: "A bicycle wheel", optionD: "A well pulley", correctOption: "A", explanation: "A ramp is a slanted surface used to move objects — an inclined plane." },
    { text: "MRS GREN's 'R' for respiration means living things:", optionA: "run fast", optionB: "breathe", optionC: "reproduce", optionD: "rest often", correctOption: "B", explanation: "Respiration refers to the process of breathing/releasing energy from food." },
    { text: "Which body of water surrounds part of Nigeria's coast, contributing to evaporation?", optionA: "Sahara Desert", optionB: "Atlantic Ocean", optionC: "River Nile", optionD: "Lake Victoria", correctOption: "B", explanation: "The Atlantic Ocean borders southern Nigeria and contributes significantly to evaporation." },
    { text: "A door handle is an example of which simple machine?", optionA: "Lever", optionB: "Wheel and axle", optionC: "Pulley", optionD: "Screw", correctOption: "B", explanation: "A door handle rotates around a central rod, making it a wheel and axle." },
    { text: "Non-living things do NOT:", optionA: "have mass", optionB: "reproduce", optionC: "occupy space", optionD: "exist", correctOption: "B", explanation: "Non-living things cannot reproduce, which distinguishes them from living things." },
    { text: "The stage after condensation in the water cycle is:", optionA: "evaporation", optionB: "precipitation", optionC: "collection", optionD: "transpiration", correctOption: "B", explanation: "After clouds form (condensation), water falls as precipitation." },
  ],
};
