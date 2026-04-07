export const siteConfig = {
  name: 'Thyroi',
  description:
    'Developer portfolio and technical blog scaffold for security-focused frontend work.',
  email: 'hello@example.dev',
  heroDescription:
    'A modern Next.js portfolio paired with a technical blog and tool notebook system. The foundation is built for long-form writeups, reusable security notes, and guided product tours.',
  navItems: [
    { label: 'Home', href: '/#hero' },
    { label: 'Stack', href: '/#stack' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Blog', href: '/#blog' },
    { label: 'Contact', href: '/#contact' },
  ],
  heroStats: [
    { label: 'Security writeups', value: '12+' },
    { label: 'Notebook entries', value: '30+' },
    { label: 'Years building UI', value: '8' },
  ],
  stackGroups: [
    {
      title: 'Application',
      items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    },
    {
      title: 'Content',
      items: ['MDX', 'gray-matter', 'next-mdx-remote', 'Path aliases'],
    },
    {
      title: 'Tooling',
      items: ['shadcn/ui', 'Driver.js', 'ESLint', 'App Router'],
    },
  ],
  projects: [
    {
      name: 'Ops Lens',
      category: 'Frontend platform',
      description:
        'A telemetry-heavy dashboard focused on clean navigation, layered states, and high-signal incident views.',
      tags: ['Next.js', 'Design systems', 'Analytics'],
      href: '/blog',
    },
    {
      name: 'Writeup Engine',
      category: 'Content system',
      description:
        'An MDX-native knowledge base that turns research notes into durable content with strong internal linking.',
      tags: ['MDX', 'Content architecture', 'Search'],
      href: '/notebook',
    },
    {
      name: 'Guided Onboarding',
      category: 'Developer UX',
      description:
        'A future-facing tour system powered by Driver.js for onboarding flows, demos, and product education.',
      tags: ['Driver.js', 'UX', 'Education'],
      href: '/#contact',
    },
  ],
  contactLinks: [
    { label: 'Email', href: 'mailto:hello@example.dev' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  ],
}
