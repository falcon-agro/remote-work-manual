"use client"

import { Button } from "@/components/ui/button"
import type { ReactNode } from "react"

interface ScrollButtonProps {
  targetId: string
  children: ReactNode
  className?: string
}

export function ScrollButton({ targetId, children, className }: ScrollButtonProps) {
  const handleClick = () => {
    const element = document.getElementById(targetId)
    if (!element) return

    const targetPosition = element.getBoundingClientRect().top + window.scrollY - 32
    const startPosition = window.scrollY
    const distance = targetPosition - startPosition
    const duration = 1200
    let startTime: number | null = null

    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo(0, startPosition + distance * easedProgress)

      if (timeElapsed < duration) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <Button
      size="lg"
      className={className}
      onClick={handleClick}
    >
      {children}
    </Button>
  )
}
