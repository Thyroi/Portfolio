import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getAllNotebookSummaries } from "@/lib/content-loader";

export const metadata = {
  title: "Tool Notebook",
};

export default async function NotebookIndexPage() {
  const notebooks = await getAllNotebookSummaries();

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20 pt-28 sm:px-8">
      <div className="space-y-6 rounded-[2rem] border border-slate-900/10 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
          Notebook Library
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Reusable tool notes for enumeration, validation, and fast recall.
        </h1>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          These pages are powered by MDX and the same content also appears in the
          right-side drawer when a tool pill is clicked inside a writeup.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {notebooks.map((notebook) => (
          <Link key={notebook.tool} href={`/notebook/${notebook.tool}`}>
            <Card className="h-full border-slate-900/10 bg-white/82 transition-transform duration-200 hover:-translate-y-1 hover:ring-slate-900/20">
              <CardHeader>
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-slate-500">
                  {notebook.category}
                </p>
                <CardTitle className="text-slate-950">
                  {notebook.title}
                </CardTitle>
                <CardDescription>{notebook.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {notebook.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}