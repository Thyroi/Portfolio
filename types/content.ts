export type WriteupFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  tools?: string[];
};

export type WriteupSummary = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  tools: string[];
};

export type WriteupDocument = WriteupSummary & {
  source: string;
};

export type NotebookFrontmatter = {
  title: string;
  description: string;
  category: string;
  tags?: string[];
};

export type NotebookSummary = {
  tool: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
};

export type NotebookDocument = NotebookSummary & {
  source: string;
};

export type NotebookDrawerPayload = NotebookSummary & {
  source: string;
};