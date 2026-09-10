import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: {
    default: "NaijaLearn — Learn Smarter, Pass Better | Primary 1 to SS3",
    template: "%s | NaijaLearn",
  },
  description:
    "NaijaLearn is Nigeria's all-in-one e-learning platform for Primary 1 to SS3, aligned to the NERDC curriculum with WAEC, NECO and JAMB/UTME exam preparation, CBT mock exams, and gamified lessons in English, Hausa, Igbo and Yoruba.",
  keywords: [
    "Nigeria e-learning",
    "WAEC past questions",
    "JAMB CBT practice",
    "NECO exam prep",
    "NERDC curriculum",
    "Primary school Nigeria",
    "Secondary school Nigeria online",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192.png",
  },
  openGraph: {
    title: "NaijaLearn — Learn Smarter, Pass Better",
    description:
      "Nigeria's all-in-one e-learning platform for Primary 1 to SS3 with WAEC/NECO/JAMB exam prep.",
    url: "/",
    siteName: "NaijaLearn",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NaijaLearn — Learn Smarter, Pass Better",
    description: "Nigeria's all-in-one e-learning platform for Primary 1 to SS3.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#128A4A" },
    { media: "(prefers-color-scheme: dark)", color: "#0A6636" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Providers>
          <div id="main-content" className="flex flex-col min-h-full">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
