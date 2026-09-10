import { z } from "zod";

export const lessonNoteSchema = z.object({
  classSubjectId: z.string().cuid("Select a class & subject"),
  topicTitle: z.string().min(3, "Topic title is required").max(200),
  nerdcCode: z.string().max(60).optional().or(z.literal("")),
  waecTopic: z.string().max(200).optional().or(z.literal("")),
  necoTopic: z.string().max(200).optional().or(z.literal("")),
  jambRelevance: z.string().max(1000).optional().or(z.literal("")),

  title: z.string().min(3, "Lesson title is required").max(200),
  summary: z.string().max(500).optional().or(z.literal("")),
  contentMd: z.string().min(20, "Lesson content should be more detailed"),
  durationMins: z.coerce.number().int().min(5).max(180),
  term: z.coerce.number().int().min(1).max(3),
  week: z.coerce.number().int().min(1).max(13),

  // Formal NERDC lesson-note fields
  learningObjectives: z.string().max(2000).optional().or(z.literal("")),
  entryBehaviour: z.string().max(1000).optional().or(z.literal("")),
  instructionalMaterials: z.string().max(1000).optional().or(z.literal("")),
  classActivities: z.string().max(3000).optional().or(z.literal("")),
  evaluationQuestions: z.string().max(2000).optional().or(z.literal("")),
  assignment: z.string().max(2000).optional().or(z.literal("")),
});

export type LessonNoteInput = z.infer<typeof lessonNoteSchema>;

export const schemeOfWorkSchema = z.object({
  classSubjectId: z.string().cuid("Select a class & subject"),
  term: z.coerce.number().int().min(1).max(3),
  session: z.string().min(4).max(20),
  title: z.string().min(3).max(200),
  entries: z
    .array(
      z.object({
        week: z.coerce.number().int().min(1).max(13),
        topicTitle: z.string().min(2).max(200),
        contentSummary: z.string().max(1000).optional().or(z.literal("")),
        referenceMaterials: z.string().max(500).optional().or(z.literal("")),
      })
    )
    .min(1, "Add at least one week"),
});

export type SchemeOfWorkInput = z.infer<typeof schemeOfWorkSchema>;
