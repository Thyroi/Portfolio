import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { vi } from 'vitest'

import { NotebookDrawerProvider, useNotebookDrawer } from '@/components/notebook/notebook-drawer'

function DrawerTrigger() {
  const { openTool } = useNotebookDrawer()

  return <button onClick={() => openTool('nmap')}>Open Nmap</button>
}

describe('NotebookDrawer', () => {
  it('loads and renders notebook content after interaction', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        tool: 'nmap',
        title: 'Nmap',
        description: 'Service discovery notes.',
        category: 'Imported Documentation',
        tags: ['network', 'recon'],
        source: '## Quick start\nUse Nmap for initial host enumeration.',
      }),
    })

    vi.stubGlobal('fetch', fetchMock)

    render(
      <NotebookDrawerProvider>
        <DrawerTrigger />
      </NotebookDrawerProvider>
    )

    fireEvent.click(screen.getByRole('button', { name: 'Open Nmap' }))

    expect(await screen.findByText('Loading notebook content...')).toBeInTheDocument()

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/notebook/nmap', {
        cache: 'no-store',
      })
    })

    expect(await screen.findByText('Nmap')).toBeInTheDocument()
    expect(screen.getByText('Service discovery notes.')).toBeInTheDocument()
    expect(screen.getByText('Imported Documentation')).toBeInTheDocument()
    expect(screen.getByText('network')).toBeInTheDocument()
    expect(screen.getByText('recon')).toBeInTheDocument()
    expect(screen.getByText('Quick start')).toBeInTheDocument()
    expect(screen.getByText('Use Nmap for initial host enumeration.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Open full notebook page' })).toHaveAttribute(
      'href',
      '/notebook/nmap'
    )
  })
})
