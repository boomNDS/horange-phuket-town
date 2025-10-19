"use client"

import type { CSSProperties } from "react"
import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { trackGaEvent } from "@/lib/analytics"
import { BLUR_DATA_URL } from "@/lib/image-placeholders"
import { BOOKING_URL, siteDetails } from "@/lib/site-data"

const PARALLAX_RANGE = 120

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const [parallaxEnabled, setParallaxEnabled] = useState(false)
  const [parallaxOffset, setParallaxOffset] = useState(0)

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handlePreferenceChange = () => {
      setParallaxEnabled(!mediaQuery.matches)
    }

    handlePreferenceChange()

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handlePreferenceChange)
      return () => mediaQuery.removeEventListener("change", handlePreferenceChange)
    }

    if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handlePreferenceChange)
      return () => mediaQuery.removeListener(handlePreferenceChange)
    }

    return undefined
  }, [])

  useEffect(() => {
    if (!parallaxEnabled || typeof window === "undefined") {
      setParallaxOffset(0)
      return undefined
    }

    let frame = 0

    const updateOffset = () => {
      if (!sectionRef.current) {
        return
      }

      const rect = sectionRef.current.getBoundingClientRect()
      const viewportHeight = window.innerHeight || 1
      const progress = Math.min(Math.max((viewportHeight - rect.top) / (viewportHeight + rect.height), 0), 1)
      const nextOffset = Math.round(((progress - 0.5) * PARALLAX_RANGE) * 100) / 100

      setParallaxOffset((previous) => (previous === nextOffset ? previous : nextOffset))
    }

    const handleScroll = () => {
      if (frame) {
        window.cancelAnimationFrame(frame)
      }

      frame = window.requestAnimationFrame(updateOffset)
    }

    handleScroll()

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
      if (frame) {
        window.cancelAnimationFrame(frame)
      }
    }
  }, [parallaxEnabled])

  const backgroundStyle = useMemo<CSSProperties | undefined>(() => {
    if (!parallaxEnabled) {
      return undefined
    }

    return {
      transform: `translate3d(0, ${parallaxOffset}px, 0)`,
    }
  }, [parallaxEnabled, parallaxOffset])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[85vh] h-auto sm:min-h-screen sm:h-screen flex items-center justify-center overflow-hidden py-24 sm:py-0"
    >
      <div className="absolute inset-0 z-0 will-change-transform" style={backgroundStyle} aria-hidden="true">
        <Image
          src="/hotel-exterior.png"
          alt="Exterior of Horange Phuket Town boutique hotel"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={85}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy/60 via-navy/40 to-copper/50" />
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 animate-fade-up animate-duration-1000 animate-ease-out animate-once animate-fill-both">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6 drop-shadow-2xl leading-tight">
          {siteDetails.name}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-10 font-light tracking-wide drop-shadow-lg max-w-3xl mx-auto px-4 leading-relaxed sm:leading-relaxed">
          {siteDetails.tagline}
        </p>
        <Button
          size="lg"
          asChild
          className="bg-copper text-white hover:bg-copper/90 text-base sm:text-lg px-8 sm:px-12 py-6 sm:py-8 shadow-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-full mb-4 sm:mb-6"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackGaEvent({
                action: "book_now_click",
                category: "CTA",
                label: "hero",
              })
            }
          >
            Book Your Stay
          </a>
        </Button>
        <p className="text-xs sm:text-sm font-semibold tracking-wider">✨ Best Price Guarantee</p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  )
}
