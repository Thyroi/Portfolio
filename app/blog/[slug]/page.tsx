import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarkdownRenderer } from "@/components/blog/markdown-renderer";
import { Sidebar } from "@/components/layout/sidebar";
import {
  getAllNotebookSummaries,
  getAllWriteups,
  getWriteupBySlug,
} from "@/lib/content-loader";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = await getAllWriteups();

  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWriteupBySlug(slug);

  if (!post) {
    return { title: "Post not found" };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const [post, posts, notebooks] = await Promise.all([
    getWriteupBySlug(slug),
    getAllWriteups(),
    getAllNotebookSummaries(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8">
      <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
        <Sidebar notebooks={notebooks} posts={posts.slice(0, 4)} />
        <article className="rounded-[2rem] border border-white/10 bg-slate-950/72 p-8 shadow-[0_24px_80px_rgba(2,8,23,0.32)] backdrop-blur sm:p-10">
          <div className="mb-8 space-y-4 border-b border-white/10 pb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">
              {post.date}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {post.title}
            </h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium tracking-wide text-cyan-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <MarkdownRenderer source={post.source} />
        </article>
      </div>
    </div>
  );
}