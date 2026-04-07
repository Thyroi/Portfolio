import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import type { NotebookDrawerPayload } from '@/types/content'

type NotebookContentProps = {
  payload: NotebookDrawerPayload | null
  isLoading: boolean
  error: string | null
}

export function NotebookContent({ payload, isLoading, error }: NotebookContentProps) {
  if (isLoading) {
    return (
      <div className="rounded-3xl border border-slate-900/10 bg-slate-50 p-6 text-sm text-slate-600">
        Loading notebook content...
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6 text-sm text-red-700">
        {error}
      </div>
    )
  }

  if (!payload) {
    return (
      <div className="rounded-3xl border border-slate-900/10 bg-slate-50 p-6 text-sm text-slate-600">
        Select a tool from any writeup to open the notebook drawer.
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          {payload.category}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
          {payload.title}
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{payload.description}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {payload.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="prose-shell text-slate-800">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{payload.source}</ReactMarkdown>
      </div>
    </div>
  )
}
