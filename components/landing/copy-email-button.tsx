'use client'

import { useEffect, useRef, useState } from 'react'

type CopyEmailButtonProps = {
  email: string
  mailtoHref: string
}

export function CopyEmailButton({ email, mailtoHref }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)

      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = window.setTimeout(() => {
        setCopied(false)
      }, 2200)
    } catch {
      window.location.href = mailtoHref
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
    >
      {copied ? 'Email copied' : 'Copy email'}
    </button>
  )
}
