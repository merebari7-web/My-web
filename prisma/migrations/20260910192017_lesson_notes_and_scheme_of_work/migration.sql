-- AlterTable
ALTER TABLE "Lesson" ADD COLUMN     "assignment" TEXT,
ADD COLUMN     "classActivities" TEXT,
ADD COLUMN     "entryBehaviour" TEXT,
ADD COLUMN     "evaluationQuestions" TEXT,
ADD COLUMN     "instructionalMaterials" TEXT,
ADD COLUMN     "learningObjectives" TEXT,
ADD COLUMN     "week" INTEGER NOT NULL DEFAULT 1;

-- AlterTable
ALTER TABLE "Topic" ADD COLUMN     "week" INTEGER NOT NULL DEFAULT 1;

-- CreateTable
CREATE TABLE "SchemeOfWork" (
    "id" TEXT NOT NULL,
    "classSubjectId" TEXT NOT NULL,
    "term" INTEGER NOT NULL,
    "session" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "createdById" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SchemeOfWork_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchemeOfWorkEntry" (
    "id" TEXT NOT NULL,
    "schemeId" TEXT NOT NULL,
    "week" INTEGER NOT NULL,
    "topicTitle" TEXT NOT NULL,
    "contentSummary" TEXT,
    "referenceMaterials" TEXT,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "SchemeOfWorkEntry_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SchemeOfWork_classSubjectId_term_session_key" ON "SchemeOfWork"("classSubjectId", "term", "session");

-- CreateIndex
CREATE UNIQUE INDEX "SchemeOfWorkEntry_schemeId_week_key" ON "SchemeOfWorkEntry"("schemeId", "week");

-- AddForeignKey
ALTER TABLE "SchemeOfWork" ADD CONSTRAINT "SchemeOfWork_classSubjectId_fkey" FOREIGN KEY ("classSubjectId") REFERENCES "ClassSubject"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchemeOfWork" ADD CONSTRAINT "SchemeOfWork_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchemeOfWorkEntry" ADD CONSTRAINT "SchemeOfWorkEntry_schemeId_fkey" FOREIGN KEY ("schemeId") REFERENCES "SchemeOfWork"("id") ON DELETE CASCADE ON UPDATE CASCADE;
