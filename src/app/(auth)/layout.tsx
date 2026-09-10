import Link from "next/link";
import { Logo } from "@/components/layout/logo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center px-6 sm:px-12 py-10 relative">
        <div className="absolute top-6 left-6 sm:left-12">
          <Logo />
        </div>
        <div className="w-full max-w-sm mx-auto mt-16">{children}</div>
        <p className="text-center text-xs text-muted-foreground mt-8">
          <Link href="/" className="hover:text-primary-600">← Back to home</Link>
        </p>
      </div>
      <div className="hidden lg:flex relative bg-hero-gradient pattern-adire items-center justify-center p-12 overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative text-white max-w-md">
          <h2 className="font-display text-3xl font-extrabold leading-tight text-balance">
            "NaijaLearn helped me move from 210 to 267 in my JAMB mock exams."
          </h2>
          <p className="mt-4 text-white/85">— Chiamaka O., SS3 Student, Enugu</p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {[
              { label: "Class Levels", value: "12" },
              { label: "Lessons", value: "3,500+" },
              { label: "Questions", value: "40k+" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 border border-white/20 p-3 text-center">
                <p className="font-display font-extrabold text-lg">{s.value}</p>
                <p className="text-[11px] text-white/80">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
