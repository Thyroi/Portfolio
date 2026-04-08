import Link from 'next/link'

import { siteConfig } from '@/config/site'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-900/10 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-medium text-slate-900">{siteConfig.name}</p>
          <p>{siteConfig.description}</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/#hero" className="transition hover:text-slate-950">
            Home
          </Link>
          <Link href="/blog" className="transition hover:text-slate-950">
            Blog
          </Link>
          <Link href="/notebook" className="transition hover:text-slate-950">
            Notebook
          </Link>
          <a href={siteConfig.contactEmailHref} className="transition hover:text-slate-950">
            {siteConfig.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
