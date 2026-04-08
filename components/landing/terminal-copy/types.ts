export type TerminalCopyProps = {
  stackLines: string[]
  notebookEntries: string[]
  writeupEntries: string[]
  className?: string
}

export type TerminalTone = 'directory' | 'file' | 'meta'

export type TerminalLine =
  | {
      id: string
      type: 'command'
      prompt: string
      content: string
      active: boolean
    }
  | {
      id: string
      type: 'output'
      content: string
      tone: TerminalTone
    }

export type ShellEntry = {
  name: string
  kind: 'directory' | 'file'
}

export type OutputLine = {
  content: string
  tone: TerminalTone
}
