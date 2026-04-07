import { siteConfig } from '@/config/site'

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      <div className="space-y-8 rounded-[2.5rem] border border-slate-900/10 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Stack</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Production tools for interfaces, content systems, and research notes.
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {siteConfig.stackGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-[1.75rem] border border-slate-900/10 bg-slate-50 p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
                {group.title}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
