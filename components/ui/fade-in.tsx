"use client"

import type { CSSProperties, ReactHTML, ReactNode } from "react"
import { useEffect, useMemo, useRef, useState } from "react"

import { cn } from "@/lib/utils"

const animationClassMap = {
  up: "animate-fade-up",
  down: "animate-fade-down",
  left: "animate-fade-left",
  right: "animate-fade-right",
} as const

type FadeDirection = keyof typeof animationClassMap

type FadeInProps = {
  as?: keyof ReactHTML
  children: ReactNode
  className?: string
  delay?: number
  direction?: FadeDirection
  duration?: number
  once?: boolean
  threshold?: number
  style?: CSSProperties
} & Omit<React.HTMLAttributes<HTMLElement>, "children">

export function FadeIn({
  as,
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
  once = true,
  threshold = 0.25,
  style,
  ...rest
}: FadeInProps) {
  const Component = (as ?? "div") as keyof ReactHTML
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (typeof window === "undefined") {
      setIsVisible(true)
      return undefined
    }

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (reduceMotionQuery.matches) {
      setIsVisible(true)
      return undefined
    }

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return undefined
    }

    const node = elementRef.current
    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.disconnect()
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold])

  const inlineStyle = useMemo<CSSProperties>(() => {
    const animationProperties: CSSProperties = {
      animationDelay: `${delay}ms`,
      animationDuration: `${duration}ms`,
    }

    return style ? { ...animationProperties, ...style } : animationProperties
  }, [delay, duration, style])

  const animationClass = animationClassMap[direction] ?? animationClassMap.up

  return (
    <Component
      ref={(node: HTMLElement | null) => {
        elementRef.current = node
      }}
      className={cn(
        "opacity-0 will-change-[transform,opacity]",
        !isVisible && "pointer-events-none",
        isVisible && animationClass,
        isVisible && "animate-duration-700 animate-ease-out animate-once animate-fill-forwards motion-reduce:animate-none",
        className
      )}
      style={inlineStyle}
      {...(rest as Record<string, unknown>)}
    >
      {children}
    </Component>
  )
}
