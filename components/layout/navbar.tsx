import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/65 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8">
        <Link href="/#hero" className="flex items-center gap-3 text-white">
          <span className="inline-flex size-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-200">
            TB
          </span>
          <span>
            <span className="block text-sm uppercase tracking-[0.3em] text-cyan-200/80">
              {siteConfig.name}
            </span>
            <span className="block text-xs text-slate-400">
              Portfolio and knowledge base
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-slate-200 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/blog"
            className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5 sm:inline-flex"
          >
            Browse writeups
          </Link>
          <Link
            href="/notebook"
            className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
          >
            Tool notebook
          </Link>
        </div>
      </div>
      <div className="scrollbar-none flex gap-5 overflow-x-auto border-t border-white/10 px-6 py-3 text-sm text-slate-300 md:hidden">
        {siteConfig.navItems.map((item) => (
          <Link key={item.label} href={item.href} className="whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}