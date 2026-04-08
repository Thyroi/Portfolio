import { Contact } from '@/components/landing/contact'
import { Hero } from '@/components/landing/hero'
import { LatestPosts } from '@/components/landing/latest-posts'
import { Projects } from '@/components/landing/projects'
import { Stack } from '@/components/landing/stack'
import { getAllNotebookSummaries, getAllWriteups } from '@/lib/content-loader'

export default async function Home() {
  const [writeups, notebooks] = await Promise.all([getAllWriteups(), getAllNotebookSummaries()])

  const latestPosts = writeups.slice(0, 3)
  const notebookEntries = notebooks.map((notebook) => notebook.tool)
  const writeupEntries = writeups.map((writeup) => writeup.slug)

  return (
    <div className="pb-24">
      <Hero notebookEntries={notebookEntries} writeupEntries={writeupEntries} />
      <Stack />
      <Projects />
      <LatestPosts posts={latestPosts} />
      <Contact />
    </div>
  )
}
