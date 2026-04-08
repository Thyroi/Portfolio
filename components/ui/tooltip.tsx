'use client'

import { Tooltip as TooltipPrimitive } from '@base-ui/react/tooltip'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Tooltip({ ...props }: TooltipPrimitive.Root.Props) {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />
}

function TooltipProvider({ ...props }: TooltipPrimitive.Provider.Props) {
  return <TooltipPrimitive.Provider data-slot="tooltip-provider" {...props} />
}

type TooltipTriggerProps<Payload = unknown> = TooltipPrimitive.Trigger.Props<Payload> & {
  asChild?: boolean
}

function TooltipTrigger<Payload = unknown>({
  asChild = false,
  children,
  ...props
}: TooltipTriggerProps<Payload>) {
  if (asChild && React.isValidElement(children)) {
    return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" render={children} {...props} />
  }

  return (
    <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props}>
      {children}
    </TooltipPrimitive.Trigger>
  )
}

function TooltipContent({
  className,
  side = 'top',
  sideOffset = 8,
  align = 'center',
  children,
  ...props
}: TooltipPrimitive.Popup.Props &
  Pick<TooltipPrimitive.Positioner.Props, 'align' | 'side' | 'sideOffset'>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Positioner
        data-slot="tooltip-positioner"
        className="z-9999"
        align={align}
        side={side}
        sideOffset={sideOffset}
      >
        <TooltipPrimitive.Popup
          data-slot="tooltip-content"
          className={cn(
            'overflow-hidden rounded-md border border-white/10 bg-slate-950 px-2.5 py-1.5 text-xs text-slate-100 shadow-[0_12px_40px_rgba(2,8,23,0.35)] transition-[transform,opacity] duration-150 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[side=bottom]:data-ending-style:translate-y-1 data-[side=bottom]:data-starting-style:translate-y-1 data-[side=left]:data-ending-style:-translate-x-1 data-[side=left]:data-starting-style:-translate-x-1 data-[side=right]:data-ending-style:translate-x-1 data-[side=right]:data-starting-style:translate-x-1 data-[side=top]:data-ending-style:-translate-y-1 data-[side=top]:data-starting-style:-translate-y-1',
            className
          )}
          {...props}
        >
          {children}
        </TooltipPrimitive.Popup>
      </TooltipPrimitive.Positioner>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger }
