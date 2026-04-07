import Link from 'next/link'

import { siteConfig } from '@/config/site'

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 pt-10 sm:px-8 sm:pt-16">
      <div className="grid gap-10 rounded-[2.5rem] border border-white/10 bg-slate-950/72 px-8 py-12 shadow-[0_30px_90px_rgba(2,8,23,0.35)] backdrop-blur sm:px-12 sm:py-16 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
            Senior frontend engineer
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

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {siteConfig.heroStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-3xl font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
