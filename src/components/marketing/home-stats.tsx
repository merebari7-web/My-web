"use client";

import { motion } from "framer-motion";
import { useLanguageStore } from "@/stores/language-store";

const stats = [
  { value: "120,000+", key: "hero.stat.students" },
  { value: "3,500+", key: "hero.stat.lessons" },
  { value: "40,000+", key: "hero.stat.questions" },
  { value: "12", label: "Class Levels (P1–SS3)" },
];

export function HomeStats() {
  const { t } = useLanguageStore();
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-center"
          >
            <p className="font-display text-2xl sm:text-3xl font-extrabold text-primary-700 dark:text-primary-400">
              {s.value}
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground mt-1">
              {s.key ? t(s.key) : s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
