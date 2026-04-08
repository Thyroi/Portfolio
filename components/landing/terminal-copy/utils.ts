import type { OutputLine, ShellEntry } from '@/components/landing/terminal-copy/types'

export const promptLabel = 'visitor@thyroi:~/portfolio$'

export function buildNotebookFiles(entries: string[]): ShellEntry[] {
  return entries.map((entry) => ({
    name: entry.endsWith('.mdx') ? entry : `${entry}.mdx`,
    kind: 'file',
  }))
}

export function buildWriteupDirectories(entries: string[]): ShellEntry[] {
  return entries.map((entry) => ({
    name: entry,
    kind: 'directory',
  }))
}

export function takeRotatingSlice(entries: ShellEntry[], cycle: number, size: number) {
  if (entries.length <= size) {
    return entries
  }

  const start = cycle % entries.length

  return Array.from({ length: size }, (_, index) => entries[(start + index) % entries.length])
}

export function renderHeadOutput(entries: ShellEntry[]): OutputLine[] {
  return entries.map<OutputLine>((entry) => ({
    content: entry.name,
    tone: entry.kind === 'directory' ? 'directory' : 'file',
  }))
}

export function renderStackOutput(lines: string[]): OutputLine[] {
  return lines.map((line) => ({
    content: line,
    tone: 'file',
  }))
}
