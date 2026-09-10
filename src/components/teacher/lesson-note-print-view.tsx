"use client";

import * as React from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import toast from "react-hot-toast";
import { ArrowLeft, Download, Loader2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";

interface LessonNoteData {
  id: string;
  title: string;
  summary?: string | null;
  subjectName: string;
  classLevelName: string;
  term: number;
  week: number;
  durationMins: number;
  topicTitle?: string | null;
  nerdcCode?: string | null;
  waecTopic?: string | null;
  necoTopic?: string | null;
  jambRelevance?: string | null;
  learningObjectives?: string | null;
  entryBehaviour?: string | null;
  instructionalMaterials?: string | null;
  contentMd: string;
  classActivities?: string | null;
  evaluationQuestions?: string | null;
  assignment?: string | null;
  authorName: string;
}

const TERM_LABEL = ["", "First", "Second", "Third"];

function NoteSection({ title, body }: { title: string; body?: string | null }) {
  if (!body) return null;
  return (
    <div className="mb-5 print:mb-4 break-inside-avoid">
      <h3 className="font-display font-bold text-sm uppercase tracking-wide text-primary-700 dark:text-primary-400 mb-1.5">
        {title}
      </h3>
      <div className="text-sm whitespace-pre-line leading-relaxed text-foreground/90">{body}</div>
    </div>
  );
}

export function LessonNotePrintView({ lesson }: { lesson: LessonNoteData }) {
  const [exporting, setExporting] = React.useState(false);
  const printRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = () => window.print();

  const handleDownloadPdf = async () => {
    if (!printRef.current) return;
    setExporting(true);
    try {
      const [{ default: html2canvas }, { jsPDF }] = await Promise.all([
        import("html2canvas"),
        import("jspdf"),
      ]);
      const canvas = await html2canvas(printRef.current, { scale: 2, backgroundColor: "#ffffff" });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({ orientation: "portrait", unit: "pt", format: "a4" });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`${lesson.title.replace(/[^\w\s-]/g, "")}-lesson-note.pdf`);
      toast.success("Lesson note downloaded as PDF!");
    } catch (e) {
      toast.error("Couldn't generate PDF. Try the Print option instead.");
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-3 print:hidden">
        <Link href="/teacher/lessons" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5">
          <ArrowLeft className="h-4 w-4" /> Back to Lesson Notes
        </Link>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handlePrint}>
            <Printer className="h-4 w-4" /> Print
          </Button>
          <Button size="sm" onClick={handleDownloadPdf} disabled={exporting}>
            {exporting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            Download PDF
          </Button>
        </div>
      </div>

      <div
        ref={printRef}
        className="bg-white text-black rounded-2xl border border-border shadow-sm p-8 sm:p-10 print:shadow-none print:border-none print:p-0"
      >
        {/* Header */}
        <div className="text-center border-b-2 border-black pb-4 mb-6">
          <p className="font-display text-lg font-extrabold">NaijaLearn — Lesson Note</p>
          <p className="text-xs text-gray-600 mt-1">NERDC-aligned lesson plan</p>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-sm mb-6 pb-4 border-b border-gray-300">
          <p><span className="font-semibold">Class:</span> {lesson.classLevelName}</p>
          <p><span className="font-semibold">Subject:</span> {lesson.subjectName}</p>
          <p><span className="font-semibold">Term:</span> {TERM_LABEL[lesson.term]} Term</p>
          <p><span className="font-semibold">Week:</span> {lesson.week}</p>
          <p><span className="font-semibold">Duration:</span> {lesson.durationMins} minutes</p>
          <p><span className="font-semibold">Date Generated:</span> {formatDate(new Date())}</p>
          {lesson.topicTitle && <p className="col-span-2"><span className="font-semibold">Topic:</span> {lesson.topicTitle}</p>}
          {lesson.nerdcCode && <p><span className="font-semibold">NERDC Code:</span> {lesson.nerdcCode}</p>}
          <p><span className="font-semibold">Prepared by:</span> {lesson.authorName}</p>
        </div>

        {(lesson.waecTopic || lesson.necoTopic || lesson.jambRelevance) && (
          <div className="mb-6 text-xs bg-gray-50 rounded-lg p-3 space-y-1">
            {lesson.waecTopic && <p><span className="font-semibold">WAEC syllabus mapping:</span> {lesson.waecTopic}</p>}
            {lesson.necoTopic && <p><span className="font-semibold">NECO syllabus mapping:</span> {lesson.necoTopic}</p>}
            {lesson.jambRelevance && <p><span className="font-semibold">JAMB/UTME relevance:</span> {lesson.jambRelevance}</p>}
          </div>
        )}

        <h1 className="font-display text-xl font-extrabold mb-1">{lesson.title}</h1>
        {lesson.summary && <p className="text-sm text-gray-600 mb-5 italic">{lesson.summary}</p>}

        <NoteSection title="Learning Objectives" body={lesson.learningObjectives} />
        <NoteSection title="Entry Behaviour / Previous Knowledge" body={lesson.entryBehaviour} />
        <NoteSection title="Instructional Materials" body={lesson.instructionalMaterials} />

        <div className="mb-5 break-inside-avoid">
          <h3 className="font-display font-bold text-sm uppercase tracking-wide text-primary-700 mb-1.5">
            Content / Presentation
          </h3>
          <div className="text-sm prose prose-sm max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{lesson.contentMd}</ReactMarkdown>
          </div>
        </div>

        <NoteSection title="Class Activities (Teacher & Pupil)" body={lesson.classActivities} />
        <NoteSection title="Evaluation" body={lesson.evaluationQuestions} />
        <NoteSection title="Assignment" body={lesson.assignment} />

        <div className="mt-10 pt-4 border-t border-gray-300 text-[11px] text-gray-500 text-center">
          Generated by NaijaLearn — naijalearn.ng
        </div>
      </div>
    </div>
  );
}
