import { PostCard } from "@/components/blog/post-card";
import { Sidebar } from "@/components/layout/sidebar";
import { getAllNotebookSummaries, getAllWriteups } from "@/lib/content-loader";

export const metadata = {
  title: "Security Writeups",
};

export default async function BlogIndexPage() {
  const [posts, notebooks] = await Promise.all([
    getAllWriteups(),
    getAllNotebookSummaries(),
  ]);

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar notebooks={notebooks} posts={posts.slice(0, 4)} />
        <section className="space-y-8">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-[0_24px_80px_rgba(2,8,23,0.32)] backdrop-blur">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
              Security Blog
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Writeups, tradecraft, and field notes from real-world tooling.
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              Each post is sourced from local MDX content and can reference tool
              notebooks directly through the in-page drawer system.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}