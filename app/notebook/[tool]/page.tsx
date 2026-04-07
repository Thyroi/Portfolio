import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { getAllNotebookSummaries, getNotebookByTool } from "@/lib/content-loader";

type NotebookPageProps = {
  params: Promise<{ tool: string }>;
};

export async function generateStaticParams() {
  const notebooks = await getAllNotebookSummaries();

  return notebooks.map((notebook) => ({ tool: notebook.tool }));
}

export async function generateMetadata({
  params,
}: NotebookPageProps): Promise<Metadata> {
  const { tool } = await params;
  const notebook = await getNotebookByTool(tool);

  if (!notebook) {
    return { title: "Notebook not found" };
  }

  return {
    title: notebook.title,
    description: notebook.description,
  };
}

export default async function NotebookPage({ params }: NotebookPageProps) {
  const { tool } = await params;
  const notebook = await getNotebookByTool(tool);

  if (!notebook) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:px-8">
      <div className="space-y-8 rounded-[2rem] border border-slate-900/10 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-10">
        <div className="space-y-4 border-b border-slate-900/10 pb-8">
          <Link
            href="/notebook"
            className="inline-flex text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Back to notebooks
          </Link>
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
            {notebook.category}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {notebook.title}
          </h1>
          <p className="max-w-2xl text-base leading-7 text-slate-600">
            {notebook.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {notebook.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <MarkdownRenderer className="text-slate-800" source={notebook.source} />
      </div>
    </div>
  );
}