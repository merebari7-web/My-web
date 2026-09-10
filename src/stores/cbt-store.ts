"use client";
import { create } from "zustand";

export interface CbtQuestionView {
  id: string;
  text: string;
  imageUrl?: string | null;
  optionA?: string | null;
  optionB?: string | null;
  optionC?: string | null;
  optionD?: string | null;
  marks: number;
}

interface CbtState {
  examId: string | null;
  attemptId: string | null;
  questions: CbtQuestionView[];
  currentIndex: number;
  answers: Record<string, string>; // questionId -> "A"|"B"|"C"|"D"
  flagged: Set<string>;
  secondsRemaining: number;
  isSubmitted: boolean;

  startExam: (examId: string, attemptId: string, questions: CbtQuestionView[], durationSecs: number) => void;
  setAnswer: (questionId: string, option: string) => void;
  toggleFlag: (questionId: string) => void;
  goTo: (index: number) => void;
  next: () => void;
  previous: () => void;
  tick: () => void;
  reset: () => void;
  markSubmitted: () => void;
}

export const useCbtStore = create<CbtState>((set, get) => ({
  examId: null,
  attemptId: null,
  questions: [],
  currentIndex: 0,
  answers: {},
  flagged: new Set(),
  secondsRemaining: 0,
  isSubmitted: false,

  startExam: (examId, attemptId, questions, durationSecs) =>
    set({
      examId,
      attemptId,
      questions,
      currentIndex: 0,
      answers: {},
      flagged: new Set(),
      secondsRemaining: durationSecs,
      isSubmitted: false,
    }),

  setAnswer: (questionId, option) =>
    set((state) => ({ answers: { ...state.answers, [questionId]: option } })),

  toggleFlag: (questionId) =>
    set((state) => {
      const newFlagged = new Set(state.flagged);
      if (newFlagged.has(questionId)) newFlagged.delete(questionId);
      else newFlagged.add(questionId);
      return { flagged: newFlagged };
    }),

  goTo: (index) =>
    set((state) => ({
      currentIndex: Math.max(0, Math.min(index, state.questions.length - 1)),
    })),

  next: () => get().goTo(get().currentIndex + 1),
  previous: () => get().goTo(get().currentIndex - 1),

  tick: () =>
    set((state) => ({
      secondsRemaining: Math.max(0, state.secondsRemaining - 1),
    })),

  markSubmitted: () => set({ isSubmitted: true }),

  reset: () =>
    set({
      examId: null,
      attemptId: null,
      questions: [],
      currentIndex: 0,
      answers: {},
      flagged: new Set(),
      secondsRemaining: 0,
      isSubmitted: false,
    }),
}));
