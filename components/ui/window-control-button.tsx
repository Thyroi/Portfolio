'use client'

import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

type WindowControlButtonProps = {
  type: 'close' | 'minimize' | 'maximize'
}

const WindowControlButton = ({ type }: WindowControlButtonProps) => {
  let bgColor = ''
  switch (type) {
    case 'close':
      bgColor = 'bg-rose-400/85'
      break
    case 'minimize':
      bgColor = 'bg-yellow-400/85'
      break
    case 'maximize':
      bgColor = 'bg-green-400/85'
      break
  }

  return (
    <Tooltip>
      <TooltipTrigger
        type="button"
        aria-label={type}
        className={`inline-flex h-2.5 w-2.5 shrink-0 rounded-full ${bgColor}`}
      />
      <TooltipContent side="bottom" sideOffset={10}>
        <p>{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export default WindowControlButton
