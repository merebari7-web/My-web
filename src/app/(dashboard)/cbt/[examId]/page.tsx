import { CbtExamRunner } from "@/components/cbt/cbt-exam-runner";

export default async function CbtExamPage({ params }: { params: Promise<{ examId: string }> }) {
  const { examId } = await params;
  return <CbtExamRunner examId={examId} />;
}
