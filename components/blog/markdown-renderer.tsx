import { cn } from '@/lib/utils'
import { renderMdx } from '@/lib/mdx'

type MarkdownRendererProps = {
  source: string
  className?: string
}

export async function MarkdownRenderer({ source, className }: MarkdownRendererProps) {
  const content = await renderMdx(source)

  return <div className={cn('prose-shell', className)}>{content}</div>
}
