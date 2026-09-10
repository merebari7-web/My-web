// Maps each class level (by shortName) to the subject slugs offered.
// For SS levels, subjects are tagged per stream: "NONE" (core, all streams),
// "SCIENCE", "COMMERCIAL", "ARTS".

export interface ClassSubjectMap {
  classShortName: string;
  subjectSlug: string;
  stream: "NONE" | "SCIENCE" | "COMMERCIAL" | "ARTS";
  isCore: boolean;
}

const primarySubjects = [
  "english-studies",
  "mathematics",
  "basic-science-technology",
  "national-values-education",
  "pre-vocational-studies",
  "cultural-creative-arts",
  "christian-religious-studies",
  "islamic-religious-studies",
  "hausa-language",
  "igbo-language",
  "yoruba-language",
  "french",
  "history",
  "computer-studies",
  "physical-health-education",
];

const jssSubjects = [
  "english-studies",
  "mathematics",
  "basic-science",
  "basic-technology",
  "business-studies",
  "civic-education",
  "social-studies",
  "christian-religious-studies",
  "islamic-religious-studies",
  "cultural-creative-arts",
  "physical-health-education",
  "computer-studies",
  "agricultural-science",
  "home-economics",
  "hausa-language",
  "igbo-language",
  "yoruba-language",
  "french",
  "arabic",
  "history",
];

// SS core (all streams)
const ssCore = [
  "english-language",
  "mathematics",
  "civic-education",
  "hausa-language", // representative Nigerian language slot; igbo/yoruba also offered
  "igbo-language",
  "yoruba-language",
  "trade-entrepreneurship",
  "computer-studies",
];

const ssScience = [
  "physics",
  "chemistry",
  "biology",
  "further-mathematics",
  "agricultural-science",
  "technical-drawing",
  "geography",
];

const ssCommercial = [
  "financial-accounting",
  "commerce",
  "economics",
  "office-practice",
  "marketing",
  "insurance",
];

const ssArts = [
  "literature-in-english",
  "government",
  "history",
  "christian-religious-studies",
  "islamic-religious-studies",
  "visual-arts",
  "french",
  "music",
];

export const classSubjectsData: ClassSubjectMap[] = [];

for (const cls of ["P1", "P2", "P3", "P4", "P5", "P6"]) {
  for (const slug of primarySubjects) {
    classSubjectsData.push({
      classShortName: cls,
      subjectSlug: slug,
      stream: "NONE",
      isCore: ["english-studies", "mathematics", "basic-science-technology"].includes(slug),
    });
  }
}

for (const cls of ["JSS1", "JSS2", "JSS3"]) {
  for (const slug of jssSubjects) {
    classSubjectsData.push({
      classShortName: cls,
      subjectSlug: slug,
      stream: "NONE",
      isCore: ["english-studies", "mathematics", "basic-science"].includes(slug),
    });
  }
}

for (const cls of ["SS1", "SS2", "SS3"]) {
  for (const slug of ssCore) {
    classSubjectsData.push({ classShortName: cls, subjectSlug: slug, stream: "NONE", isCore: true });
  }
  for (const slug of ssScience) {
    classSubjectsData.push({ classShortName: cls, subjectSlug: slug, stream: "SCIENCE", isCore: true });
  }
  for (const slug of ssCommercial) {
    classSubjectsData.push({ classShortName: cls, subjectSlug: slug, stream: "COMMERCIAL", isCore: true });
  }
  for (const slug of ssArts) {
    classSubjectsData.push({ classShortName: cls, subjectSlug: slug, stream: "ARTS", isCore: true });
  }
}
