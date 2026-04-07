import { NextResponse } from 'next/server'

import { getNotebookByTool } from '@/lib/content-loader'

type RouteProps = {
  params: Promise<{ tool: string }>
}

export async function GET(_: Request, { params }: RouteProps) {
  const { tool } = await params
  const notebook = await getNotebookByTool(tool)

  if (!notebook) {
    return NextResponse.json({ message: 'Notebook not found' }, { status: 404 })
  }

  return NextResponse.json({
    tool: notebook.tool,
    title: notebook.title,
    description: notebook.description,
    category: notebook.category,
    tags: notebook.tags,
    source: notebook.source,
  })
}
