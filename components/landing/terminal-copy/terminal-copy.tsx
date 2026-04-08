'use client'

import type { TerminalCopyProps } from '@/components/landing/terminal-copy/types'
import { useTerminalSession } from '@/components/landing/terminal-copy/use-terminal-session'

export function TerminalCopy({
  stackLines,
  notebookEntries,
  writeupEntries,
  className,
}: TerminalCopyProps) {
  const lines = useTerminalSession({ stackLines, notebookEntries, writeupEntries })

  return (
    <div aria-hidden="true" className={className}>
      <div className="mb-3 flex items-center justify-between border-b border-white/6 pb-3 text-[0.68rem] uppercase tracking-[0.24em] text-slate-500/85">
        <span>Shell Preview</span>
        <span>Read Only</span>
      </div>
      <div className="flex min-h-full flex-col justify-end gap-1">
        {lines.map((line) => {
          if (line.type === 'command') {
            return (
              <p key={line.id} className="break-all text-slate-100/95">
                <span className="text-cyan-300/60">{line.prompt}</span>
                <span className="ml-3">{line.content}</span>
                {line.active ? (
                  <span
                    aria-hidden="true"
                    className="animate-terminal-caret ml-1 inline-block h-[1em] w-[0.65ch] translate-y-[0.12em] bg-cyan-200/80"
                  />
                ) : null}
              </p>
            )
          }

          return (
            <p
              key={line.id}
              className={[
                'truncate pl-1',
                line.tone === 'directory'
                  ? 'text-sky-200/80'
                  : line.tone === 'meta'
                    ? 'text-slate-500/90'
                    : 'text-slate-300/85',
              ].join(' ')}
            >
              {line.content}
            </p>
          )
        })}
      </div>
      <span className="sr-only">
        Terminal preview showing a stack command and short content listings.
      </span>
    </div>
  )
}
