"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  Timer,
  FileText,
  Trophy,
  MessageSquare,
  Bookmark,
  Download,
  Settings,
  Users,
  ClipboardList,
  ShieldCheck,
  NotebookPen,
  CalendarRange,
  CheckSquare,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import type { Role } from "@prisma/client";

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  roles?: Role[];
}

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/learn", label: "My Lessons", icon: BookOpen, roles: ["STUDENT"] },
  { href: "/cbt", label: "CBT Mock Exams", icon: Timer, roles: ["STUDENT"] },
  { href: "/exams", label: "Term Exams", icon: FileText, roles: ["STUDENT"] },
  { href: "/leaderboard", label: "Leaderboard", icon: Trophy, roles: ["STUDENT"] },
  { href: "/forum", label: "Discussion Forum", icon: MessageSquare },
  { href: "/bookmarks", label: "Bookmarks", icon: Bookmark, roles: ["STUDENT"] },
  { href: "/downloads", label: "Offline Downloads", icon: Download, roles: ["STUDENT"] },
  { href: "/teacher", label: "Teacher Tools", icon: ClipboardList, roles: ["TEACHER"] },
  { href: "/teacher/lessons", label: "Lesson Notes", icon: NotebookPen, roles: ["TEACHER"] },
  { href: "/teacher/scheme-of-work", label: "Scheme of Work", icon: CalendarRange, roles: ["TEACHER"] },
  { href: "/parent", label: "My Children", icon: Users, roles: ["PARENT"] },
  { href: "/admin", label: "Admin CMS", icon: ShieldCheck, roles: ["ADMIN"] },
  { href: "/admin/content", label: "Review Content", icon: CheckSquare, roles: ["ADMIN"] },
  { href: "/settings", label: "Settings", icon: Settings },
];

export function DashboardSidebar({
  role,
  mobileOpen,
  onClose,
}: {
  role?: Role;
  mobileOpen?: boolean;
  onClose?: () => void;
}) {
  const pathname = usePathname();

  const items = navItems.filter((item) => !item.roles || item.roles.includes(role ?? "STUDENT"));

  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-50 lg:z-0 h-screen w-64 shrink-0 border-r border-border bg-card flex flex-col transition-transform lg:translate-x-0",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="h-16 flex items-center justify-between px-5 border-b border-border">
          <Logo />
          <button className="lg:hidden p-1.5 rounded-lg hover:bg-muted" onClick={onClose} aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-3 space-y-1 scrollbar-thin">
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors",
                  active
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-foreground/75 hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className="h-4.5 w-4.5 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-border">
          <div className="rounded-xl bg-primary-50 dark:bg-primary-950 p-3.5 text-center">
            <p className="text-xs font-semibold text-primary-700 dark:text-primary-300">
              Go Premium
            </p>
            <p className="text-[11px] text-muted-foreground mt-0.5">
              Unlock all lessons & CBT banks
            </p>
            <Link
              href="/pricing"
              className="mt-2 inline-block text-xs font-bold text-white bg-accent-500 hover:bg-accent-600 rounded-lg px-3 py-1.5"
            >
              Upgrade — ₦1,500/mo
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
