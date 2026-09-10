import { SeedSubjectContent } from "./content-types";
import { p5Mathematics } from "./p5/mathematics";
import { p5English } from "./p5/english-studies";
import { p5BasicScience } from "./p5/basic-science";
import { p5NationalValues } from "./p5/national-values";
import { p5PreVocational } from "./p5/others";
import { p5CCA, p5CRS } from "./p5/others2";
import { p5IRS, p5ComputerStudies } from "./p5/others3";
import { p5Hausa, p5Igbo, p5Yoruba } from "./p5/languages";
import { p5French, p5History, p5PHE } from "./p5/others4";

import { ss2Physics } from "./ss2/physics";
import { ss2Chemistry } from "./ss2/chemistry";
import { ss2Biology } from "./ss2/biology";
import { ss2EnglishLanguage } from "./ss2/english-language";
import { ss2Mathematics } from "./ss2/mathematics";
import { ss2CivicEducation } from "./ss2/civic-education";
import { ss2FinancialAccounting } from "./ss2/financial-accounting";
import { ss2Government } from "./ss2/government";
import { ss2FurtherMathematics } from "./ss2/further-mathematics";

export const fullSubjectContent: SeedSubjectContent[] = [
  // Primary 5 — full curriculum coverage
  p5Mathematics,
  p5English,
  p5BasicScience,
  p5NationalValues,
  p5PreVocational,
  p5CCA,
  p5CRS,
  p5IRS,
  p5ComputerStudies,
  p5Hausa,
  p5Igbo,
  p5Yoruba,
  p5French,
  p5History,
  p5PHE,

  // SS2 — full curriculum coverage across streams
  ss2Physics,
  ss2Chemistry,
  ss2Biology,
  ss2EnglishLanguage,
  ss2Mathematics,
  ss2CivicEducation,
  ss2FinancialAccounting,
  ss2Government,
  ss2FurtherMathematics,
];

export { jambUseOfEnglishMock } from "./jamb-mock";
export { classLevelsData } from "./class-levels";
export { subjectsData } from "./subjects";
export { classSubjectsData } from "./class-subjects";
