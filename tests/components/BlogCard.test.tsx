import { render, screen } from '@testing-library/react'

import { PostCard } from '@/components/blog/post-card'

describe('BlogCard', () => {
  it('renders a post summary with tags and destination link', () => {
    render(
      <PostCard
        post={{
          slug: 'test-writeup',
          title: 'Test Writeup',
          description: 'A short security note.',
          date: '2026-04-07',
          tags: ['web', 'recon'],
          tools: ['nmap', 'ffuf'],
        }}
      />
    )

    expect(screen.getByText('Test Writeup')).toBeInTheDocument()
    expect(screen.getByText('A short security note.')).toBeInTheDocument()
    expect(screen.getByText('2026-04-07')).toBeInTheDocument()
    expect(screen.getByText('web')).toBeInTheDocument()
    expect(screen.getByText('recon')).toBeInTheDocument()
    expect(screen.getByText('2 tools referenced')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute('href', '/blog/test-writeup')
  })
})
