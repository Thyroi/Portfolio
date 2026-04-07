import Link from 'next/link'
import { createElement, type ComponentPropsWithoutRef } from 'react'

import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'

import { ToolPill } from '@/components/blog/tool-pill'
import { cn } from '@/lib/utils'

function createMdxComponents(includeToolPill: boolean) {
  return {
    h1: (props: ComponentPropsWithoutRef<'h1'>) =>
      createElement('h1', {
        className: 'mt-10 text-4xl font-semibold tracking-tight text-inherit first:mt-0',
        ...props,
      }),
    h2: (props: ComponentPropsWithoutRef<'h2'>) =>
      createElement('h2', {
        className: 'mt-12 text-2xl font-semibold tracking-tight text-inherit',
        ...props,
      }),
    h3: (props: ComponentPropsWithoutRef<'h3'>) =>
      createElement('h3', {
        className: 'mt-10 text-xl font-semibold tracking-tight text-inherit',
        ...props,
      }),
    p: (props: ComponentPropsWithoutRef<'p'>) =>
      createElement('p', {
        className: 'mt-5 text-base leading-8 text-inherit/90',
        ...props,
      }),
    a: ({ className, href = '', ...props }: ComponentPropsWithoutRef<'a'>) => {
      const sharedClassName = cn('font-medium text-cyan-400 hover:text-cyan-300', className)

      if (href.startsWith('/')) {
        return createElement(Link, {
          href,
          className: sharedClassName,
          ...props,
        })
      }

      return createElement('a', {
        className: sharedClassName,
        href,
        rel: 'noreferrer',
        target: '_blank',
        ...props,
      })
    },
    ul: (props: ComponentPropsWithoutRef<'ul'>) =>
      createElement('ul', {
        className: 'mt-5 list-disc space-y-3 pl-6 text-base leading-8 text-inherit/90',
        ...props,
      }),
    ol: (props: ComponentPropsWithoutRef<'ol'>) =>
      createElement('ol', {
        className: 'mt-5 list-decimal space-y-3 pl-6 text-base leading-8 text-inherit/90',
        ...props,
      }),
    li: (props: ComponentPropsWithoutRef<'li'>) =>
      createElement('li', { className: 'pl-1', ...props }),
    pre: (props: ComponentPropsWithoutRef<'pre'>) =>
      createElement('pre', {
        className:
          'mt-6 overflow-x-auto rounded-[1.5rem] bg-slate-950 px-5 py-4 text-sm text-slate-100',
        ...props,
      }),
    code: ({ className, ...props }: ComponentPropsWithoutRef<'code'>) =>
      createElement('code', {
        className: cn(
          'rounded bg-slate-950/8 px-1.5 py-0.5 font-mono text-[0.95em] text-inherit',
          className
        ),
        ...props,
      }),
    blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) =>
      createElement('blockquote', {
        className:
          'mt-6 border-l-2 border-cyan-400/40 pl-5 text-base italic leading-8 text-inherit/80',
        ...props,
      }),
    ...(includeToolPill ? { ToolPill } : {}),
  }
}

export async function renderMdx(source: string) {
  const { content } = await compileMDX({
    source,
    components: createMdxComponents(true),
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
      parseFrontmatter: false,
    },
  })

  return content
}
