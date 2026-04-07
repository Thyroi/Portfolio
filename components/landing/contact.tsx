import { siteConfig } from "@/config/site";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-slate-950/74 p-8 shadow-[0_30px_90px_rgba(2,8,23,0.35)] backdrop-blur sm:p-12 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Contact
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Available for product engineering, security education, and platform work.
          </h2>
          <p className="max-w-2xl text-base leading-7 text-slate-300">
            This scaffold is ready for your real profile details, projects, and
            production content. For now, the callouts below are placeholders with
            working structure and responsive layout.
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="space-y-4 text-sm text-slate-200">
            <p>
              Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </p>
            <p>Location: Remote-friendly, UTC+0 to UTC+4 overlap</p>
            <p>Focus: Frontend architecture, content systems, developer UX</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {siteConfig.contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}