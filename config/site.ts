const email = 'juan-salgado@upc.edu.co'

const contactEmailQuery = new URLSearchParams({
  subject: 'Opportunity from your portfolio',
  body: [
    'Hi Thyroi,',
    '',
    "I found your portfolio and I'd like to talk about a role or collaboration.",
    '',
    'Company:',
    'Role:',
    'Timeline:',
    '',
    'Best,',
  ].join('\n'),
}).toString()

export const siteConfig = {
  name: 'Thyroi',
  description:
    'Portfolio and security blog focused on frontend systems, practical writeups, and reusable tooling.',
  email,
  contactEmailHref: `mailto:${email}?${contactEmailQuery}`,
  phone: '+57 311 217 3328',
  phoneHref: 'tel:+573112173328',
  location: 'Bogota, Colombia',
  heroDescription:
    'Portfolio and blog focused on frontend engineering, security-minded product work, and practical notes that stay useful beyond the first read.',
  contactHeadline: 'Open to frontend, platform, and security-focused engineering opportunities.',
  contactDescription:
    'I am based in Bogota and available for remote-friendly roles, contract work, and conversations with teams building serious product and engineering systems.',
  contactFocus: [
    'Frontend architecture and design systems',
    'Security-aware product engineering',
    'Technical writing and developer education',
  ],
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
    { label: 'Email', href: `mailto:${email}?${contactEmailQuery}` },
    { label: 'Call', href: 'tel:+573112173328' },
    { label: 'GitHub', href: 'https://github.com/Thyroi' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ijuansalgado/' },
  ],
}
