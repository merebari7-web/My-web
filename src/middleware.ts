import NextAuth from "next-auth";
import { authConfig } from "@/lib/auth.config";

export const { auth: middleware } = NextAuth(authConfig);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/learn/:path*",
    "/lesson/:path*",
    "/cbt/:path*",
    "/exams/:path*",
    "/forum/:path*",
    "/leaderboard/:path*",
    "/progress/:path*",
    "/bookmarks/:path*",
    "/downloads/:path*",
    "/settings/:path*",
    "/teacher/:path*",
    "/parent/:path*",
    "/admin/:path*",
  ],
};
