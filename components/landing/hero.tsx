import Link from 'next/link'

import { TerminalCopy } from '@/components/landing/terminal-copy'
import { siteConfig } from '@/config/site'
import WindowControlButton from '../ui/window-control-button'

type HeroProps = {
  notebookEntries: string[]
  writeupEntries: string[]
}

export function Hero({ notebookEntries, writeupEntries }: HeroProps) {
  const stackLines = siteConfig.stackGroups.map((group) => {
    const label = group.title.toLowerCase().padEnd(12, ' ')

    return `${label}${group.items.join(' ').toLowerCase()}`
  })

  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 pt-10 sm:px-8 sm:pt-16">
      <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-slate-950/72 px-8 py-12 shadow-[0_30px_90px_rgba(2,8,23,0.35)] backdrop-blur sm:px-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Fullstack Developer
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Building security-focused interfaces and durable technical systems.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {siteConfig.heroDescription}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/blog"
              className="rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Read the writeups
            </Link>
            <Link
              href="/#projects"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            >
              Explore projects
            </Link>
          </div>
        </div>
        <div className="max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/80 shadow-[0_24px_70px_rgba(2,8,23,0.28),inset_0_1px_0_rgba(255,255,255,0.05)]">
          <div className="flex items-center gap-2 border-b border-white/8 bg-white/2 px-5 py-3">
            <WindowControlButton type="close" />
            <WindowControlButton type="minimize" />
            <WindowControlButton type="maximize" />
            <span className="ml-3 font-mono text-xs text-slate-400">~/portfolio/hero.sh</span>
            <span className="ml-auto rounded-full border border-white/8 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-slate-500">
              session
            </span>
          </div>
          <div className="min-h-70 px-5 py-4 font-mono text-sm text-cyan-100 sm:min-h-70 sm:text-base">
            <TerminalCopy
              stackLines={stackLines}
              notebookEntries={notebookEntries}
              writeupEntries={writeupEntries}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
