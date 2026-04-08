import { useEffect, useRef, useState } from 'react'

import type { OutputLine, TerminalLine } from '@/components/landing/terminal-copy/types'
import {
  buildNotebookFiles,
  buildWriteupDirectories,
  promptLabel,
  renderHeadOutput,
  renderStackOutput,
  takeRotatingSlice,
} from '@/components/landing/terminal-copy/utils'

const MAX_VISIBLE_ENTRIES = 4

const sessionTiming = {
  initialPause: 420,
  commandSpace: 58,
  commandCharacter: 74,
  commandSettle: 260,
  metaLine: 160,
  outputLine: 210,
  betweenCommands: 1650,
  cycleHold: 4200,
} as const

type UseTerminalSessionOptions = {
  stackLines: string[]
  notebookEntries: string[]
  writeupEntries: string[]
}

export function useTerminalSession({
  stackLines,
  notebookEntries,
  writeupEntries,
}: UseTerminalSessionOptions) {
  const [lines, setLines] = useState<TerminalLine[]>([])
  const lineCounter = useRef(0)
  const timeouts = useRef<number[]>([])
  const pendingResolvers = useRef<Array<() => void>>([])

  useEffect(() => {
    let cancelled = false
    const notebookFiles = buildNotebookFiles(notebookEntries)
    const writeupDirectories = buildWriteupDirectories(writeupEntries)

    const wait = (duration: number) =>
      new Promise<void>((resolve) => {
        let timeoutId = 0

        const complete = () => {
          timeouts.current = timeouts.current.filter((value) => value !== timeoutId)
          pendingResolvers.current = pendingResolvers.current.filter(
            (resolver) => resolver !== complete
          )
          resolve()
        }

        pendingResolvers.current.push(complete)

        timeoutId = window.setTimeout(complete, duration)
        timeouts.current.push(timeoutId)
      })

    const nextId = () => {
      lineCounter.current += 1

      return `terminal-line-${lineCounter.current}`
    }

    const typeCommand = async (command: string) => {
      const lineId = nextId()

      setLines((current) => [
        ...current,
        {
          id: lineId,
          type: 'command',
          prompt: promptLabel,
          content: '',
          active: true,
        },
      ])

      for (let index = 1; index <= command.length; index += 1) {
        await wait(
          command[index - 1] === ' ' ? sessionTiming.commandSpace : sessionTiming.commandCharacter
        )

        if (cancelled) {
          return
        }

        setLines((current) =>
          current.map((line) =>
            line.id === lineId && line.type === 'command'
              ? { ...line, content: command.slice(0, index) }
              : line
          )
        )
      }

      await wait(sessionTiming.commandSettle)

      if (cancelled) {
        return
      }

      setLines((current) =>
        current.map((line) =>
          line.id === lineId && line.type === 'command' ? { ...line, active: false } : line
        )
      )
    }

    const pushOutput = async (output: OutputLine[]) => {
      for (const entry of output) {
        await wait(entry.tone === 'meta' ? sessionTiming.metaLine : sessionTiming.outputLine)

        if (cancelled) {
          return
        }

        setLines((current) => [
          ...current,
          {
            id: nextId(),
            type: 'output',
            content: entry.content,
            tone: entry.tone,
          },
        ])
      }
    }

    const runSession = async () => {
      let cycle = 0

      while (!cancelled) {
        const activeDirectory = cycle % 2 === 0 ? 'notebooks' : 'writeups'
        const activeEntries =
          activeDirectory === 'notebooks'
            ? takeRotatingSlice(notebookFiles, cycle, MAX_VISIBLE_ENTRIES)
            : takeRotatingSlice(writeupDirectories, cycle, MAX_VISIBLE_ENTRIES)

        lineCounter.current = 0
        setLines([])

        await wait(sessionTiming.initialPause)

        if (cancelled) {
          return
        }

        await typeCommand('./stack')
        await pushOutput(renderStackOutput(stackLines))
        await wait(sessionTiming.betweenCommands)

        if (cancelled) {
          return
        }

        await typeCommand(`ls /${activeDirectory} | head -4`)
        await pushOutput(renderHeadOutput(activeEntries))
        await wait(sessionTiming.cycleHold)

        cycle += 1
      }
    }

    void runSession()

    return () => {
      cancelled = true
      timeouts.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
      timeouts.current = []
      pendingResolvers.current.forEach((resolve) => resolve())
      pendingResolvers.current = []
    }
  }, [notebookEntries, stackLines, writeupEntries])

  return lines
}
