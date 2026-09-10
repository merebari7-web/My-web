"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./logo";
import { LanguageSwitcher } from "./language-switcher";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { useLanguageStore } from "@/stores/language-store";
import { cn } from "@/lib/utils";

const links = [
  { href: "/curriculum", key: "nav.curriculum" },
  { href: "/pricing", key: "nav.pricing" },
  { href: "/about", key: "nav.about" },
];

export function MarketingNavbar() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const { t } = useLanguageStore();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors hover:bg-muted",
                pathname === link.href ? "text-primary-700" : "text-foreground/80"
              )}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-1.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">{t("nav.login")}</Link>
          </Button>
          <Button size="sm" variant="accent" asChild>
            <Link href="/register">{t("nav.signup")}</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-muted"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="container py-4 flex flex-col gap-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-3.5 py-2.5 rounded-lg text-sm font-semibold hover:bg-muted"
                >
                  {t(link.key)}
                </Link>
              ))}
              <div className="flex items-center justify-between px-2 py-2">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="outline" asChild>
                  <Link href="/login">{t("nav.login")}</Link>
                </Button>
                <Button variant="accent" asChild>
                  <Link href="/register">{t("nav.signup")}</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
