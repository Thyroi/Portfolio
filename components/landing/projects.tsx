import Link from "next/link";

import { siteConfig } from "@/config/site";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 pt-16 sm:px-8">
      <div className="space-y-8 rounded-[2.5rem] border border-white/10 bg-slate-950/74 p-8 shadow-[0_30px_90px_rgba(2,8,23,0.35)] backdrop-blur sm:p-12">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
            Projects
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Selected systems that mix design restraint with operator utility.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {siteConfig.projects.map((project) => (
            <article
              key={project.name}
              className="flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80">
                {project.category}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {project.name}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-300">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={project.href}
                className="mt-6 inline-flex text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
              >
                View details
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}