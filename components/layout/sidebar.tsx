import Link from "next/link";

import type { NotebookSummary, WriteupSummary } from "@/types/content";

type SidebarProps = {
  notebooks: NotebookSummary[];
  posts: WriteupSummary[];
};

export function Sidebar({ notebooks, posts }: SidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-6">
        <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/68 p-6 shadow-[0_18px_60px_rgba(2,8,23,0.25)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/75">
            Quick Links
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/#hero" className="transition hover:text-white">
              Landing page
            </Link>
            <Link href="/blog" className="transition hover:text-white">
              All writeups
            </Link>
            <Link href="/notebook" className="transition hover:text-white">
              Tool notebook
            </Link>
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/68 p-6 shadow-[0_18px_60px_rgba(2,8,23,0.25)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/75">
            Notebook Tools
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {notebooks.map((notebook) => (
              <Link
                key={notebook.tool}
                href={`/notebook/${notebook.tool}`}
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100 transition hover:border-cyan-300/40"
              >
                {notebook.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[1.75rem] border border-white/10 bg-slate-950/68 p-6 shadow-[0_18px_60px_rgba(2,8,23,0.25)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.3em] text-cyan-300/75">
            Recent Posts
          </p>
          <div className="mt-4 space-y-4 text-sm">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block rounded-2xl border border-white/5 bg-white/5 p-4 text-slate-300 transition hover:border-white/10 hover:text-white"
              >
                <p className="font-medium text-white">{post.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.25em] text-slate-400">
                  {post.date}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </aside>
  );
}