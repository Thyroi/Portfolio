import { Contact } from '@/components/landing/contact'
import { Hero } from '@/components/landing/hero'
import { LatestPosts } from '@/components/landing/latest-posts'
import { Projects } from '@/components/landing/projects'
import { Stack } from '@/components/landing/stack'
import { getLatestWriteups } from '@/lib/content-loader'

export default async function Home() {
  const latestPosts = await getLatestWriteups(3)

  return (
    <div className="pb-24 pt-20">
      <Hero />
      <Stack />
      <Projects />
      <LatestPosts posts={latestPosts} />
      <Contact />
    </div>
  )
}
