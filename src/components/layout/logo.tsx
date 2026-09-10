import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 group", className)}>
      <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white">
          <path
            d="M12 3L2 8l10 5 8-4.2V15h1.5V8L12 3z"
            fill="currentColor"
          />
          <path
            d="M6 12.2V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-3.8l-6 3.15-6-3.15z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      </div>
      <span className="font-display font-extrabold text-lg tracking-tight">
        Naija<span className="text-primary-600">Learn</span>
      </span>
    </Link>
  );
}
