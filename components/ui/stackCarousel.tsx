export function StackCarousel() {
  const stack = [
    {
      name: 'React',
      icon: 'https://cdn.simpleicons.org/react',
      url: 'https://react.dev',
    },
    {
      name: 'Next.js',
      icon: 'https://cdn.simpleicons.org/nextdotjs',
      url: 'https://nextjs.org',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.simpleicons.org/nodedotjs',
      url: 'https://nodejs.org',
    },
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express', url: 'https://expressjs.com' },
    {
      name: 'Redux',
      icon: 'https://cdn.simpleicons.org/redux',
      url: 'https://redux.js.org',
    },
    {
      name: 'Spring Boot',
      icon: 'https://cdn.simpleicons.org/springboot',
      url: 'https://spring.io/projects/spring-boot',
    },
    {
      name: 'PostgreSQL',
      icon: 'https://cdn.simpleicons.org/postgresql',
      url: 'https://www.postgresql.org',
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.simpleicons.org/mongodb',
      url: 'https://www.mongodb.com',
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.simpleicons.org/typescript',
      url: 'https://www.typescriptlang.org',
    },
    {
      name: 'TailwindCSS',
      icon: 'https://cdn.simpleicons.org/tailwindcss',
      url: 'https://tailwindcss.com',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.simpleicons.org/docker',
      url: 'https://docker.com',
    },
  ]

  const items = [...stack, ...stack]

  return (
    <div className="relative overflow-hidden mt-15">
      <div className="flex w-max animate-stack-scroll">
        {items.map((tech, index) => (
          <a
            key={`${tech.name}-${index}`}
            href={tech.url}
            target="_blank"
            rel="noreferrer"
            className="mx-6 flex  flex-col shrink-0 items-center gap-3 text-slate-700 transition hover:text-slate-950"
          >
            <img src={tech.icon} alt={tech.name} className="h-20 w-20" />
            <span className="text-s font-medium">{tech.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}
