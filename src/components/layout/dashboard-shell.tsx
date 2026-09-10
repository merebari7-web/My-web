"use client";

import * as React from "react";
import { DashboardSidebar } from "./dashboard-sidebar";
import { DashboardTopbar } from "./dashboard-topbar";
import type { Role } from "@prisma/client";

export function DashboardShell({
  role,
  userName,
  userImage,
  streak,
  children,
}: {
  role?: Role;
  userName: string;
  userImage?: string | null;
  streak?: number;
  children: React.ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-secondary/20">
      <DashboardSidebar role={role} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardTopbar
          userName={userName}
          userImage={userImage}
          streak={streak}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1400px] w-full mx-auto">{children}</main>
      </div>
    </div>
  );
}
