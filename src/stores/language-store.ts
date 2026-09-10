"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LangCode, t } from "@/i18n/translations";

interface LanguageState {
  lang: LangCode;
  setLang: (lang: LangCode) => void;
  t: (key: string) => string;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set, get) => ({
      lang: "en",
      setLang: (lang) => set({ lang }),
      t: (key: string) => t(get().lang, key),
    }),
    { name: "naijalearn-lang" }
  )
);
