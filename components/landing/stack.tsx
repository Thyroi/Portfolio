import { StackCarousel } from '@/components/ui/stackCarousel'

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      <div className="space-y-8 rounded-[2.5rem] border border-slate-900/10 bg-white/82 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur sm:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Stack</p>
          <h2 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            Technologies I use to design, build, and ship production systems.
          </h2>
        </div>
        <StackCarousel />
      </div>
    </section>
  )
}
