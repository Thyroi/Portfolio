'use client'

import Link from 'next/link'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

import { NotebookContent } from '@/components/notebook/notebook-content'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import type { NotebookDrawerPayload } from '@/types/content'

type NotebookDrawerContextValue = {
  openTool: (tool: string) => void
}

const NotebookDrawerContext = createContext<NotebookDrawerContextValue | null>(null)

export function NotebookDrawerProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [selectedTool, setSelectedTool] = useState<string | null>(null)
  const [payload, setPayload] = useState<NotebookDrawerPayload | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!open || !selectedTool) {
      return
    }

    let cancelled = false

    async function loadNotebook() {
      setIsLoading(true)
      setError(null)

      try {
        const response = await fetch(`/api/notebook/${selectedTool}`, {
          cache: 'no-store',
        })

        if (!response.ok) {
          throw new Error('Unable to load notebook content.')
        }

        const nextPayload = (await response.json()) as NotebookDrawerPayload

        if (!cancelled) {
          setPayload(nextPayload)
        }
      } catch (nextError) {
        if (!cancelled) {
          setError(
            nextError instanceof Error ? nextError.message : 'Unable to load notebook content.'
          )
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }
    }

    void loadNotebook()

    return () => {
      cancelled = true
    }
  }, [open, selectedTool])

  const value = useMemo(
    () => ({
      openTool: (tool: string) => {
        setSelectedTool(tool)
        setOpen(true)
      },
    }),
    []
  )

  return (
    <NotebookDrawerContext.Provider value={value}>
      {children}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="right"
          className="w-full overflow-y-auto border-l border-slate-900/10 bg-white p-0 text-slate-900 sm:max-w-2xl"
        >
          <SheetHeader className="border-b border-slate-900/10 bg-slate-50/80 p-6">
            <SheetTitle>Notebook drawer</SheetTitle>
            <SheetDescription>
              Open tool notes from any writeup without leaving the page.
            </SheetDescription>
          </SheetHeader>

          <div className="space-y-6 p-6">
            <NotebookContent payload={payload} isLoading={isLoading} error={error} />

            {selectedTool ? (
              <Link
                href={`/notebook/${selectedTool}`}
                className="inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Open full notebook page
              </Link>
            ) : null}
          </div>
        </SheetContent>
      </Sheet>
    </NotebookDrawerContext.Provider>
  )
}

export function useNotebookDrawer() {
  const context = useContext(NotebookDrawerContext)

  if (!context) {
    throw new Error('useNotebookDrawer must be used within NotebookDrawerProvider')
  }

  return context
}
