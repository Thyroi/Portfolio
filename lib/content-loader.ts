import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";

import matter from "gray-matter";

import type {
  NotebookDocument,
  NotebookFrontmatter,
  NotebookSummary,
  WriteupDocument,
  WriteupFrontmatter,
  WriteupSummary,
} from "@/types/content";

const contentRoot = path.join(process.cwd(), "content");
const writeupsRoot = path.join(contentRoot, "writeups");
const notebooksRoot = path.join(contentRoot, "notebooks");

function normalizeDate(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }

  return typeof value === "string" ? value : "";
}

function sortByDateDescending<T extends { date?: string }>(items: T[]) {
  return [...items].sort((left, right) => {
    const leftDate = left.date ? new Date(left.date).getTime() : 0;
    const rightDate = right.date ? new Date(right.date).getTime() : 0;

    return rightDate - leftDate;
  });
}

export const getAllWriteups = cache(async (): Promise<WriteupSummary[]> => {
  const entries = await fs.readdir(writeupsRoot, { withFileTypes: true });
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isDirectory())
      .map(async (entry) => {
        const slug = entry.name;
        const source = await fs.readFile(
          path.join(writeupsRoot, slug, "index.mdx"),
          "utf8"
        );
        const { data } = matter(source);
        const frontmatter = data as WriteupFrontmatter;

        return {
          slug,
          title: frontmatter.title,
          description: frontmatter.description,
          date: normalizeDate(frontmatter.date),
          tags: frontmatter.tags ?? [],
          tools: frontmatter.tools ?? [],
        } satisfies WriteupSummary;
      })
  );

  return sortByDateDescending(posts);
});

export const getLatestWriteups = cache(async (limit = 3) => {
  const posts = await getAllWriteups();

  return posts.slice(0, limit);
});

export const getWriteupBySlug = cache(
  async (slug: string): Promise<WriteupDocument | null> => {
    try {
      const source = await fs.readFile(
        path.join(writeupsRoot, slug, "index.mdx"),
        "utf8"
      );
      const { content, data } = matter(source);
      const frontmatter = data as WriteupFrontmatter;

      return {
        slug,
        title: frontmatter.title,
        description: frontmatter.description,
        date: normalizeDate(frontmatter.date),
        tags: frontmatter.tags ?? [],
        tools: frontmatter.tools ?? [],
        source: content,
      };
    } catch {
      return null;
    }
  }
);

export const getAllNotebookSummaries = cache(
  async (): Promise<NotebookSummary[]> => {
    const entries = await fs.readdir(notebooksRoot, { withFileTypes: true });
    const notebooks = await Promise.all(
      entries
        .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
        .map(async (entry) => {
          const tool = entry.name.replace(/\.mdx$/, "");
          const source = await fs.readFile(path.join(notebooksRoot, entry.name), "utf8");
          const { data } = matter(source);
          const frontmatter = data as NotebookFrontmatter;

          return {
            tool,
            title: frontmatter.title,
            description: frontmatter.description,
            category: frontmatter.category,
            tags: frontmatter.tags ?? [],
          } satisfies NotebookSummary;
        })
    );

    return notebooks.sort((left, right) => left.title.localeCompare(right.title));
  }
);

export const getNotebookByTool = cache(
  async (tool: string): Promise<NotebookDocument | null> => {
    try {
      const source = await fs.readFile(path.join(notebooksRoot, `${tool}.mdx`), "utf8");
      const { content, data } = matter(source);
      const frontmatter = data as NotebookFrontmatter;

      return {
        tool,
        title: frontmatter.title,
        description: frontmatter.description,
        category: frontmatter.category,
        tags: frontmatter.tags ?? [],
        source: content,
      };
    } catch {
      return null;
    }
  }
);