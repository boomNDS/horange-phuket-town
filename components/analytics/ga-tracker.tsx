"use client"

import { useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

type GaRouteTrackerProps = {
  measurementId: string
}

export function GaRouteTracker({ measurementId }: GaRouteTrackerProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if (!measurementId || typeof window === "undefined") {
      return
    }

    const pageUrl = searchParams && searchParams.toString() ? `${pathname}?${searchParams}` : pathname

    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return
    }

    window.gtag?.("event", "page_view", {
      page_path: pageUrl,
      page_location: window.location.href,
    })
  }, [measurementId, pathname, searchParams])

  return null
}
