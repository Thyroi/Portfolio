'use client'

import { NotebookDrawerProvider } from '@/components/notebook/notebook-drawer'

export function Providers({ children }: { children: React.ReactNode }) {
  return <NotebookDrawerProvider>{children}</NotebookDrawerProvider>
}
