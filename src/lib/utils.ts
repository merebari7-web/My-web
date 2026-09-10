import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNaira(kobo: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(kobo / 100);
}

export function formatDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(d);
}

export function formatDateTime(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("en-NG", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

export function gradeFromPercent(percent: number): string {
  if (percent >= 75) return "A1";
  if (percent >= 70) return "B2";
  if (percent >= 65) return "B3";
  if (percent >= 60) return "C4";
  if (percent >= 55) return "C5";
  if (percent >= 50) return "C6";
  if (percent >= 45) return "D7";
  if (percent >= 40) return "E8";
  return "F9";
}

export function remarkFromGrade(grade: string): string {
  const map: Record<string, string> = {
    A1: "Excellent",
    B2: "Very Good",
    B3: "Good",
    C4: "Credit",
    C5: "Credit",
    C6: "Credit",
    D7: "Pass",
    E8: "Pass",
    F9: "Fail",
  };
  return map[grade] ?? "N/A";
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function truncate(text: string, maxLen: number): string {
  return text.length > maxLen ? text.slice(0, maxLen).trim() + "…" : text;
}

export function secondsToClock(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.floor(totalSeconds % 60);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

export function xpForLevel(level: number): number {
  return 100 * level * level;
}

export function levelFromXp(xp: number): number {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  return level;
}
