export interface SeedQuestion {
  text: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctOption: "A" | "B" | "C" | "D";
  explanation: string;
  difficulty?: number; // 1-5
  board?: "NERDC" | "WAEC" | "NECO" | "JAMB" | "SCHOOL";
}

export interface SeedLesson {
  title: string;
  summary: string;
  contentMd: string;
  durationMins?: number;
  term?: number;
  week?: number; // week within the term (1-13), per Nigerian school calendar
  // --- Formal NERDC-style lesson note fields (teacher-facing) ---
  learningObjectives?: string;
  entryBehaviour?: string;
  instructionalMaterials?: string;
  classActivities?: string;
  evaluationQuestions?: string;
  assignment?: string;
  topic: {
    title: string;
    nerdcCode?: string;
    waecTopic?: string;
    necoTopic?: string;
    jambRelevance?: string;
    week?: number;
  };
}

export interface SeedSubjectContent {
  subjectSlug: string;
  classShortName: string;
  stream?: "NONE" | "SCIENCE" | "COMMERCIAL" | "ARTS";
  lessons: SeedLesson[];
  quizQuestions: SeedQuestion[]; // attached to the 3rd lesson as an inline quiz
  examTitle: string;
  examQuestions: SeedQuestion[]; // term exam bank
}
