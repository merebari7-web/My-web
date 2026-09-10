/* eslint-disable no-console */
import { PrismaClient, Stream, SchoolStage } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  classLevelsData,
  subjectsData,
  classSubjectsData,
  fullSubjectContent,
  jambUseOfEnglishMock,
} from "./seed/data";
import { slugify } from "../src/lib/utils";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting NaijaLearn database seed...\n");

  // ---------------------------------------------------------------------
  // 1. Class Levels (P1 - SS3)
  // ---------------------------------------------------------------------
  console.log("📚 Seeding class levels...");
  const classLevelMap = new Map<string, string>(); // shortName -> id

  for (const cl of classLevelsData) {
    const created = await prisma.classLevel.upsert({
      where: { shortName: cl.shortName },
      update: {},
      create: {
        name: cl.name,
        shortName: cl.shortName,
        stage: cl.stage as SchoolStage,
        order: cl.order,
        description: cl.description,
      },
    });
    classLevelMap.set(cl.shortName, created.id);
  }
  console.log(`   ✓ ${classLevelsData.length} class levels seeded (P1-P6, JSS1-3, SS1-3)\n`);

  // ---------------------------------------------------------------------
  // 2. Subjects
  // ---------------------------------------------------------------------
  console.log("📖 Seeding subjects...");
  const subjectMap = new Map<string, string>(); // slug -> id

  for (const s of subjectsData) {
    const created = await prisma.subject.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        name: s.name,
        slug: s.slug,
        description: s.description,
        icon: s.icon,
        colorToken: s.colorToken,
        category: s.category,
      },
    });
    subjectMap.set(s.slug, created.id);
  }
  console.log(`   ✓ ${subjectsData.length} subjects seeded\n`);

  // ---------------------------------------------------------------------
  // 3. Class-Subject mappings (curriculum structure for all 12 levels)
  // ---------------------------------------------------------------------
  console.log("🔗 Mapping subjects to class levels & streams...");
  const classSubjectMap = new Map<string, string>(); // `${classShortName}|${subjectSlug}|${stream}` -> id

  for (const mapping of classSubjectsData) {
    const classLevelId = classLevelMap.get(mapping.classShortName);
    const subjectId = subjectMap.get(mapping.subjectSlug);
    if (!classLevelId || !subjectId) continue;

    const created = await prisma.classSubject.upsert({
      where: {
        classLevelId_subjectId_stream: {
          classLevelId,
          subjectId,
          stream: mapping.stream as Stream,
        },
      },
      update: {},
      create: {
        classLevelId,
        subjectId,
        stream: mapping.stream as Stream,
        isCore: mapping.isCore,
      },
    });
    classSubjectMap.set(
      `${mapping.classShortName}|${mapping.subjectSlug}|${mapping.stream}`,
      created.id
    );
  }
  console.log(`   ✓ ${classSubjectsData.length} class-subject links created\n`);

  // ---------------------------------------------------------------------
  // 4. Demo Users (Student, Teacher, Parent, Admin)
  // ---------------------------------------------------------------------
  console.log("👤 Seeding demo users...");
  const demoPassword = await bcrypt.hash("Password123", 12);

  const adminUser = await prisma.user.upsert({
    where: { email: "admin@naijalearn.ng" },
    update: {},
    create: {
      name: "Admin User",
      email: "admin@naijalearn.ng",
      password: demoPassword,
      role: "ADMIN",
      emailVerified: new Date(),
    },
  });

  const teacherUser = await prisma.user.upsert({
    where: { email: "teacher@naijalearn.ng" },
    update: {},
    create: {
      name: "Mrs. Folake Adebayo",
      email: "teacher@naijalearn.ng",
      password: demoPassword,
      role: "TEACHER",
      emailVerified: new Date(),
    },
  });
  const teacherProfile = await prisma.teacherProfile.upsert({
    where: { userId: teacherUser.id },
    update: {},
    create: {
      userId: teacherUser.id,
      bio: "Passionate Mathematics and Physics teacher with 12 years of experience preparing students for WAEC and JAMB.",
      qualification: "B.Sc Physics, PGDE (University of Ibadan)",
      yearsExperience: 12,
    },
  });

  const parentUser = await prisma.user.upsert({
    where: { email: "parent@naijalearn.ng" },
    update: {},
    create: {
      name: "Mr. Emeka Okafor",
      email: "parent@naijalearn.ng",
      password: demoPassword,
      role: "PARENT",
      emailVerified: new Date(),
    },
  });
  const parentProfile = await prisma.parentProfile.upsert({
    where: { userId: parentUser.id },
    update: {},
    create: { userId: parentUser.id },
  });

  const studentUser = await prisma.user.upsert({
    where: { email: "student@naijalearn.ng" },
    update: {},
    create: {
      name: "Chiamaka Nwosu",
      email: "student@naijalearn.ng",
      password: demoPassword,
      role: "STUDENT",
      emailVerified: new Date(),
    },
  });

  const ss2Id = classLevelMap.get("SS2")!;
  const studentProfile = await prisma.studentProfile.upsert({
    where: { userId: studentUser.id },
    update: {},
    create: {
      userId: studentUser.id,
      classLevelId: ss2Id,
      stream: "SCIENCE",
      school: "Federal Government College, Enugu",
      xp: 1250,
      level: 3,
      currentStreak: 14,
      longestStreak: 21,
      lastActiveDate: new Date(),
    },
  });

  await prisma.subscription.upsert({
    where: { studentId: studentProfile.id },
    update: {},
    create: { studentId: studentProfile.id, tier: "PREMIUM", status: "ACTIVE" },
  });

  // Link parent to student (demo family)
  await prisma.parentStudentLink.upsert({
    where: { parentId_studentId: { parentId: parentProfile.id, studentId: studentProfile.id } },
    update: {},
    create: {
      parentId: parentProfile.id,
      studentId: studentProfile.id,
      relationship: "Father",
    },
  });

  // A second demo student for P5 (for testing primary content)
  const p5Id = classLevelMap.get("P5")!;
  const studentUser2 = await prisma.user.upsert({
    where: { email: "tobi.p5@naijalearn.ng" },
    update: {},
    create: {
      name: "Tobi Balogun",
      email: "tobi.p5@naijalearn.ng",
      password: demoPassword,
      role: "STUDENT",
      emailVerified: new Date(),
    },
  });
  const studentProfile2 = await prisma.studentProfile.upsert({
    where: { userId: studentUser2.id },
    update: {},
    create: {
      userId: studentUser2.id,
      classLevelId: p5Id,
      school: "Bright Stars Primary School, Ibadan",
      xp: 340,
      level: 2,
      currentStreak: 5,
      longestStreak: 9,
    },
  });
  await prisma.subscription.upsert({
    where: { studentId: studentProfile2.id },
    update: {},
    create: { studentId: studentProfile2.id, tier: "FREE", status: "ACTIVE" },
  });

  console.log("   ✓ Demo users created: admin, teacher, parent, 2 students\n");

  // ---------------------------------------------------------------------
  // 5. Badges (gamification)
  // ---------------------------------------------------------------------
  console.log("🏆 Seeding badges...");
  const badgesData = [
    { name: "First Step", description: "Completed your first lesson", icon: "🎯", criteria: "Complete 1 lesson", xpReward: 20 },
    { name: "Quiz Whiz", description: "Scored 100% on a quiz", icon: "🧠", criteria: "Score 100% on any quiz", xpReward: 50 },
    { name: "7-Day Streak", description: "Studied for 7 days in a row", icon: "🔥", criteria: "Maintain a 7-day streak", xpReward: 70 },
    { name: "30-Day Streak", description: "Studied for 30 days in a row", icon: "⚡", criteria: "Maintain a 30-day streak", xpReward: 300 },
    { name: "Maths Wizard", description: "Completed all Mathematics lessons for your class", icon: "🧮", criteria: "Complete all Mathematics lessons", xpReward: 150 },
    { name: "CBT Champion", description: "Completed 10 CBT mock exams", icon: "🏅", criteria: "Complete 10 CBT exams", xpReward: 200 },
    { name: "Bookworm", description: "Read 20 lessons", icon: "📚", criteria: "Complete 20 lessons", xpReward: 100 },
    { name: "Top of the Class", description: "Reached #1 on your class leaderboard", icon: "👑", criteria: "Reach rank #1 in class leaderboard", xpReward: 250 },
  ];
  for (const b of badgesData) {
    await prisma.badge.upsert({ where: { name: b.name }, update: {}, create: b });
  }
  const allBadges = await prisma.badge.findMany();
  // Award a few badges to demo student
  for (const badgeName of ["First Step", "Quiz Whiz", "7-Day Streak"]) {
    const badge = allBadges.find((b) => b.name === badgeName);
    if (badge) {
      await prisma.studentBadge.upsert({
        where: { studentId_badgeId: { studentId: studentProfile.id, badgeId: badge.id } },
        update: {},
        create: { studentId: studentProfile.id, badgeId: badge.id },
      });
    }
  }
  console.log(`   ✓ ${badgesData.length} badges seeded\n`);

  // ---------------------------------------------------------------------
  // 6. Full lesson/quiz/exam content for P5 & SS2 subjects
  // ---------------------------------------------------------------------
  console.log("📝 Seeding full lesson content, quizzes, and term exams (P5 & SS2)...");
  let lessonCount = 0;
  let questionCount = 0;
  let examCount = 0;

  for (const subjectContent of fullSubjectContent) {
    const stream = subjectContent.stream ?? "NONE";
    const classSubjectId = classSubjectMap.get(
      `${subjectContent.classShortName}|${subjectContent.subjectSlug}|${stream}`
    );
    const subjectId = subjectMap.get(subjectContent.subjectSlug);

    if (!classSubjectId || !subjectId) {
      console.warn(
        `   ⚠ Skipping ${subjectContent.subjectSlug} for ${subjectContent.classShortName} (${stream}) — mapping not found`
      );
      continue;
    }

    const createdLessons = [];
    for (let i = 0; i < subjectContent.lessons.length; i++) {
      const lessonSeed = subjectContent.lessons[i];

      const topic = await prisma.topic.upsert({
        where: {
          classSubjectId_slug: {
            classSubjectId,
            slug: slugify(lessonSeed.topic.title),
          },
        },
        update: {},
        create: {
          classSubjectId,
          title: lessonSeed.topic.title,
          slug: slugify(lessonSeed.topic.title),
          order: i,
          nerdcCode: lessonSeed.topic.nerdcCode,
          waecTopic: lessonSeed.topic.waecTopic,
          necoTopic: lessonSeed.topic.necoTopic,
          jambRelevance: lessonSeed.topic.jambRelevance,
          term: lessonSeed.term ?? 1,
        },
      });

      const lesson = await prisma.lesson.upsert({
        where: {
          classSubjectId_slug: {
            classSubjectId,
            slug: slugify(lessonSeed.title),
          },
        },
        update: {},
        create: {
          title: lessonSeed.title,
          slug: slugify(lessonSeed.title),
          summary: lessonSeed.summary,
          contentMd: lessonSeed.contentMd,
          durationMins: lessonSeed.durationMins ?? 20,
          order: i,
          term: lessonSeed.term ?? 1,
          subjectId,
          classSubjectId,
          topicId: topic.id,
          authorId: teacherUser.id,
          status: "PUBLISHED",
        },
      });
      createdLessons.push(lesson);
      lessonCount++;
    }

    // Attach quiz questions to the last lesson created (as an inline quiz)
    const quizLesson = createdLessons[createdLessons.length - 1];
    if (quizLesson) {
      for (const q of subjectContent.quizQuestions) {
        await prisma.question.create({
          data: {
            type: "MULTIPLE_CHOICE",
            text: q.text,
            optionA: q.optionA,
            optionB: q.optionB,
            optionC: q.optionC,
            optionD: q.optionD,
            correctOption: q.correctOption,
            explanation: q.explanation,
            difficulty: q.difficulty ?? 2,
            board: q.board ?? "NERDC",
            subjectId,
            authorId: teacherUser.id,
            lessonQuizId: quizLesson.id,
          },
        });
        questionCount++;
      }
    }

    // Create term exam with its own question bank
    const exam = await prisma.exam.upsert({
      where: {
        classSubjectId_slug: {
          classSubjectId,
          slug: slugify(subjectContent.examTitle),
        },
      },
      update: {},
      create: {
        title: subjectContent.examTitle,
        slug: slugify(subjectContent.examTitle),
        type: "TERM_EXAM",
        board: "SCHOOL",
        description: `Official first term examination covering all topics taught this term.`,
        durationMins: 45,
        totalMarks: subjectContent.examQuestions.length * 2,
        passMarkPercent: 40,
        negativeMarking: false,
        term: 1,
        subjectId,
        classSubjectId,
        authorId: teacherUser.id,
        status: "PUBLISHED",
      },
    });

    for (let i = 0; i < subjectContent.examQuestions.length; i++) {
      const q = subjectContent.examQuestions[i];
      const question = await prisma.question.create({
        data: {
          type: "MULTIPLE_CHOICE",
          text: q.text,
          optionA: q.optionA,
          optionB: q.optionB,
          optionC: q.optionC,
          optionD: q.optionD,
          correctOption: q.correctOption,
          explanation: q.explanation,
          difficulty: q.difficulty ?? 2,
          marks: 2,
          board: q.board ?? "SCHOOL",
          subjectId,
          authorId: teacherUser.id,
        },
      });
      questionCount++;

      await prisma.examQuestion.upsert({
        where: { examId_questionId: { examId: exam.id, questionId: question.id } },
        update: {},
        create: { examId: exam.id, questionId: question.id, order: i },
      });
    }
    examCount++;
  }
  console.log(
    `   ✓ ${lessonCount} lessons, ${questionCount} questions, ${examCount} term exams seeded\n`
  );

  // ---------------------------------------------------------------------
  // 7. JAMB Mock Exam (30 questions, Use of English) for SS3
  // ---------------------------------------------------------------------
  console.log("🎯 Seeding JAMB UTME mock exam (Use of English) for SS3...");
  const ss3Id = classLevelMap.get("SS3")!;
  const englishSubjectId = subjectMap.get("english-language")!;

  const ss3EnglishClassSubject = await prisma.classSubject.upsert({
    where: {
      classLevelId_subjectId_stream: {
        classLevelId: ss3Id,
        subjectId: englishSubjectId,
        stream: "NONE",
      },
    },
    update: {},
    create: { classLevelId: ss3Id, subjectId: englishSubjectId, stream: "NONE", isCore: true },
  });

  const jambExam = await prisma.exam.upsert({
    where: {
      classSubjectId_slug: {
        classSubjectId: ss3EnglishClassSubject.id,
        slug: "jamb-utme-mock-use-of-english-2026",
      },
    },
    update: {},
    create: {
      title: "JAMB UTME Mock Exam — Use of English (2026)",
      slug: "jamb-utme-mock-use-of-english-2026",
      type: "CBT_MOCK",
      board: "JAMB",
      description:
        "A full 30-question JAMB UTME-style mock examination for Use of English, covering vocabulary, grammar, comprehension and oral forms. Timed at 30 minutes, matching real JAMB pacing (roughly 1 minute per question in the English section).",
      durationMins: 30,
      totalMarks: 30,
      passMarkPercent: 50,
      negativeMarking: false,
      shuffleQuestions: true,
      term: 1,
      subjectId: englishSubjectId,
      classSubjectId: ss3EnglishClassSubject.id,
      authorId: teacherUser.id,
      status: "PUBLISHED",
      isPremium: false,
    },
  });

  for (let i = 0; i < jambUseOfEnglishMock.length; i++) {
    const q = jambUseOfEnglishMock[i];
    const question = await prisma.question.create({
      data: {
        type: "MULTIPLE_CHOICE",
        text: q.text,
        optionA: q.optionA,
        optionB: q.optionB,
        optionC: q.optionC,
        optionD: q.optionD,
        correctOption: q.correctOption,
        explanation: q.explanation,
        difficulty: q.difficulty ?? 3,
        marks: 1,
        board: "JAMB",
        year: 2026,
        subjectId: englishSubjectId,
        authorId: teacherUser.id,
      },
    });
    await prisma.examQuestion.upsert({
      where: { examId_questionId: { examId: jambExam.id, questionId: question.id } },
      update: {},
      create: { examId: jambExam.id, questionId: question.id, order: i },
    });
  }
  console.log(`   ✓ JAMB mock exam seeded with ${jambUseOfEnglishMock.length} questions\n`);

  // ---------------------------------------------------------------------
  // 8. Public Holidays (Nigerian calendar)
  // ---------------------------------------------------------------------
  console.log("📅 Seeding Nigerian public holidays...");
  const holidays = [
    { name: "New Year's Day", date: new Date("2026-01-01") },
    { name: "Good Friday", date: new Date("2026-04-03") },
    { name: "Easter Monday", date: new Date("2026-04-06") },
    { name: "Workers' Day", date: new Date("2026-05-01") },
    { name: "Democracy Day", date: new Date("2026-06-12") },
    { name: "Eid-el-Kabir (Estimated)", date: new Date("2026-06-06") },
    { name: "Independence Day", date: new Date("2026-10-01") },
    { name: "Eid-el-Maulud (Estimated)", date: new Date("2026-08-25") },
    { name: "Christmas Day", date: new Date("2026-12-25") },
    { name: "Boxing Day", date: new Date("2026-12-26") },
  ];
  for (const h of holidays) {
    const existing = await prisma.publicHoliday.findFirst({ where: { name: h.name, date: h.date } });
    if (!existing) {
      await prisma.publicHoliday.create({ data: h });
    }
  }
  console.log(`   ✓ ${holidays.length} public holidays seeded\n`);

  // ---------------------------------------------------------------------
  // 9. Announcements
  // ---------------------------------------------------------------------
  console.log("📢 Seeding announcements...");
  const announcementsData = [
    {
      title: "Welcome to NaijaLearn! 🎉",
      body: "We're excited to have you join thousands of Nigerian students learning smarter. Explore your dashboard, start your first lesson, and try our CBT mock exams today!",
      audience: null,
    },
    {
      title: "First Term Exams Now Live",
      body: "First term examinations for Primary 5 and SS2 are now available across all subjects. Log in to your dashboard to attempt them before the term ends.",
      audience: "STUDENT" as const,
    },
    {
      title: "New JAMB UTME Mock Exam Added",
      body: "A full 30-question JAMB-style mock exam for Use of English is now available for SS3 students. Practice under real exam timing conditions!",
      audience: "STUDENT" as const,
    },
  ];
  for (const a of announcementsData) {
    await prisma.announcement.create({
      data: { title: a.title, body: a.body, audience: a.audience, authorId: adminUser.id },
    });
  }
  console.log(`   ✓ ${announcementsData.length} announcements seeded\n`);

  // ---------------------------------------------------------------------
  // 10. Sample lesson progress + exam attempt for demo student (SS2)
  // ---------------------------------------------------------------------
  console.log("📊 Seeding sample progress data for demo student...");
  const ss2PhysicsClassSubject = await prisma.classSubject.findFirst({
    where: {
      classLevelId: ss2Id,
      subjectId: subjectMap.get("physics"),
      stream: "SCIENCE",
    },
  });

  if (ss2PhysicsClassSubject) {
    const physicsLessons = await prisma.lesson.findMany({
      where: { classSubjectId: ss2PhysicsClassSubject.id },
      orderBy: { order: "asc" },
    });

    for (const [idx, lesson] of physicsLessons.entries()) {
      await prisma.lessonProgress.upsert({
        where: { studentId_lessonId: { studentId: studentProfile.id, lessonId: lesson.id } },
        update: {},
        create: {
          studentId: studentProfile.id,
          lessonId: lesson.id,
          completed: idx < 2,
          progressPercent: idx < 2 ? 100 : 45,
          quizScore: idx === 0 ? 90 : idx === 1 ? 80 : null,
          completedAt: idx < 2 ? new Date() : null,
        },
      });
    }

    const physicsExam = await prisma.exam.findFirst({
      where: { classSubjectId: ss2PhysicsClassSubject.id, type: "TERM_EXAM" },
      include: { questions: { include: { question: true } } },
    });

    if (physicsExam) {
      const attempt = await prisma.examAttempt.create({
        data: {
          studentId: studentProfile.id,
          examId: physicsExam.id,
          status: "GRADED",
          score: 16,
          totalMarks: physicsExam.totalMarks,
          percentage: (16 / physicsExam.totalMarks) * 100,
          grade: "B2",
          timeSpentSecs: 1800,
          startedAt: new Date(Date.now() - 3600 * 1000),
          submittedAt: new Date(),
        },
      });

      for (const [idx, eq] of physicsExam.questions.entries()) {
        const isCorrect = idx % 5 !== 4; // ~80% correct for demo
        await prisma.studentAnswer.create({
          data: {
            attemptId: attempt.id,
            questionId: eq.questionId,
            selectedOption: isCorrect ? eq.question.correctOption : "A",
            isCorrect,
            marksAwarded: isCorrect ? eq.question.marks : 0,
            timeSpentSecs: 60,
          },
        });
      }
    }
  }
  console.log("   ✓ Sample progress & exam attempt seeded for demo student\n");

  // ---------------------------------------------------------------------
  // 11. Forum seed posts
  // ---------------------------------------------------------------------
  console.log("💬 Seeding forum posts...");
  const forumPost1 = await prisma.forumPost.create({
    data: {
      title: "How do I remember the quadratic formula easily?",
      body: "I keep forgetting the quadratic formula during exams. Does anyone have a good way to memorize it? We use it a lot in SS2 Maths.",
      authorId: studentUser.id,
      subjectSlug: "mathematics",
      classLevelId: ss2Id,
      isApproved: true,
    },
  });
  await prisma.forumReply.create({
    data: {
      postId: forumPost1.id,
      authorId: teacherUser.id,
      body: "Great question! Try singing it to the tune of 'Pop Goes the Weasel': 'x equals negative b, plus or minus the square root, of b squared minus 4ac, all over 2a'. It really helps during WAEC/JAMB revision!",
      isApproved: true,
    },
  });

  const forumPost2 = await prisma.forumPost.create({
    data: {
      title: "Best way to prepare for JAMB CBT?",
      body: "SS3 students, how are you preparing for the JAMB CBT this year? Any tips on managing exam time?",
      authorId: studentUser.id,
      subjectSlug: "english-language",
      classLevelId: ss3Id,
      isApproved: true,
    },
  });
  await prisma.forumReply.create({
    data: {
      postId: forumPost2.id,
      authorId: adminUser.id,
      body: "Practice with our CBT mock exams daily, and always review the explanations for questions you got wrong. Time management improves a lot with consistent practice!",
      isApproved: true,
    },
  });
  console.log("   ✓ Forum posts & replies seeded\n");

  console.log("✅ Seed completed successfully!\n");
  console.log("Demo accounts (password for all: Password123):");
  console.log("  👨‍🎓 Student: student@naijalearn.ng (SS2 Science)");
  console.log("  👦 Student: tobi.p5@naijalearn.ng (Primary 5)");
  console.log("  👩‍🏫 Teacher: teacher@naijalearn.ng");
  console.log("  👨‍👩‍👧 Parent: parent@naijalearn.ng");
  console.log("  🛡️  Admin: admin@naijalearn.ng");
}

main()
  .catch((e) => {
    console.error("❌ Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
