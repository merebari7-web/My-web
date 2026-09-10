import type { NextAuthConfig } from "next-auth";

// Edge-compatible config (no Prisma adapter here) used by middleware.
export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const protectedPrefixes = [
        "/dashboard",
        "/learn",
        "/lesson",
        "/cbt",
        "/exams",
        "/forum",
        "/leaderboard",
        "/progress",
        "/bookmarks",
        "/downloads",
        "/settings",
        "/teacher",
        "/parent",
        "/admin",
      ];
      const isProtected = protectedPrefixes.some((p) =>
        nextUrl.pathname.startsWith(p)
      );

      if (isProtected && !isLoggedIn) {
        const redirectUrl = new URL("/login", nextUrl);
        redirectUrl.searchParams.set("callbackUrl", nextUrl.pathname);
        return Response.redirect(redirectUrl);
      }

      // Admin area role guard
      if (nextUrl.pathname.startsWith("/admin") && auth?.user?.role !== "ADMIN") {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      if (
        nextUrl.pathname.startsWith("/teacher") &&
        !["TEACHER", "ADMIN"].includes(auth?.user?.role ?? "")
      ) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      if (
        nextUrl.pathname.startsWith("/parent") &&
        !["PARENT", "ADMIN"].includes(auth?.user?.role ?? "")
      ) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },
  session: { strategy: "jwt" },
};
