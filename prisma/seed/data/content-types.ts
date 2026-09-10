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
  topic: {
    title: string;
    nerdcCode?: string;
    waecTopic?: string;
    necoTopic?: string;
    jambRelevance?: string;
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
