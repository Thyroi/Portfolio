import type { WriteupSummary } from "@/types/content";

import { PostCard } from "@/components/blog/post-card";

type LatestPostsProps = {
  posts: WriteupSummary[];
};

export function LatestPosts({ posts }: LatestPostsProps) {
  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      <div className="space-y-8 rounded-[2.5rem] border border-slate-900/10 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Latest Posts
            </p>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Recent security notes and workflow writeups.
            </h2>
          </div>
          <a
            href="/blog"
            className="inline-flex text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            View all posts
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}