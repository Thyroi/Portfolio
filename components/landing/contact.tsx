import { CopyEmailButton } from '@/components/landing/copy-email-button'
import { siteConfig } from '@/config/site'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      <div className="grid gap-6 rounded-[2.5rem] border border-white/10 bg-slate-950/74 p-8 shadow-[0_30px_90px_rgba(2,8,23,0.35)] backdrop-blur sm:p-12 lg:grid-cols-[1fr_0.75fr]">
        <div className="space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80 mb-5">Contact</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {siteConfig.contactHeadline}
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-slate-300 py-5">
            {siteConfig.contactDescription}
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
          <div className="space-y-4 text-sm text-slate-200">
            <p>
              Email:{' '}
              <a href={siteConfig.contactEmailHref} className="transition hover:text-cyan-200">
                {siteConfig.email}
              </a>
            </p>
            <p>
              Phone:{' '}
              <a href={siteConfig.phoneHref} className="transition hover:text-cyan-200">
                {siteConfig.phone}
              </a>
            </p>
            <p>Location: {siteConfig.location}</p>
            <div>
              <p className="mb-2">Focus:</p>
              <ul className="space-y-2 text-slate-300">
                {siteConfig.contactFocus.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <CopyEmailButton email={siteConfig.email} mailtoHref={siteConfig.contactEmailHref} />
            {siteConfig.contactLinks
              .filter((link) => link.label !== 'Email')
              .map((link) => (
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
  )
}
