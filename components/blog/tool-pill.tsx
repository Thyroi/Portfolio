'use client'

import { Badge } from '@/components/ui/badge'
import { useNotebookDrawer } from '@/components/notebook/notebook-drawer'
import { getToolDefinition } from '@/lib/tool-registry'

type ToolPillProps = {
  tool: string
  label?: string
}

export function ToolPill({ tool, label }: ToolPillProps) {
  const { openTool } = useNotebookDrawer()
  const definition = getToolDefinition(tool)

  return (
    <button type="button" onClick={() => openTool(tool)} className="inline-flex align-middle">
      <Badge
        variant="outline"
        className="cursor-pointer border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-400/15"
      >
        {label ?? definition?.label ?? tool}
      </Badge>
    </button>
  )
}
