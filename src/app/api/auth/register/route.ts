import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { registerSchema } from "@/lib/validations/auth";
import { rateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const { success } = rateLimit(`register:${ip}`, 5, 15 * 60 * 1000);
    if (!success) {
      return NextResponse.json(
        { error: "Too many registration attempts. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = registerSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid input", issues: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, password, role, classLevelId } = parsed.data;
    const normalizedEmail = email.toLowerCase().trim();

    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
        role,
      },
    });

    if (role === "STUDENT") {
      if (!classLevelId) {
        return NextResponse.json({ error: "Class level is required for students." }, { status: 400 });
      }
      const studentProfile = await prisma.studentProfile.create({
        data: { userId: user.id, classLevelId },
      });
      await prisma.subscription.create({
        data: { studentId: studentProfile.id, tier: "FREE", status: "ACTIVE" },
      });
    } else if (role === "TEACHER") {
      await prisma.teacherProfile.create({ data: { userId: user.id } });
    } else if (role === "PARENT") {
      await prisma.parentProfile.create({ data: { userId: user.id } });
    }

    await prisma.auditLog.create({
      data: { userId: user.id, action: "USER_REGISTERED", entity: "User", entityId: user.id },
    });

    return NextResponse.json(
      { message: "Account created successfully", userId: user.id },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
