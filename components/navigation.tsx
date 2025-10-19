"use client"

import { useEffect, useId, useRef, useState } from "react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Menu, X } from "@/components/icons"
import { trackGaEvent } from "@/lib/analytics"
import { BOOKING_URL, navigationLinks, siteDetails } from "@/lib/site-data"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const mobileMenuId = useId()
  const mobileMenuLabelId = `${mobileMenuId}-label`
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined
    }

    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"

      return () => {
        document.body.style.overflow = originalOverflow
      }
    }

    document.body.style.overflow = ""
    return undefined
  }, [mobileMenuOpen])

  useEffect(() => {
    if (typeof document === "undefined" || !mobileMenuOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      closeButtonRef.current?.focus()
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 rounded-full max-w-5xl w-[95%]">
        <nav
          className="flex items-center justify-between rounded-full border border-gray-100/80 bg-white/95 px-5 md:px-9 py-3.5 md:py-4 text-navy shadow-xl backdrop-blur-md"
          aria-label="Primary"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label={`${mobileMenuOpen ? "Close" : "Open"} navigation menu`}
            aria-controls={mobileMenuId}
            aria-expanded={mobileMenuOpen}
            aria-haspopup="dialog"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-navy" /> : <Menu className="w-5 h-5 text-navy" />}
          </button>

          <a href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image
              src="/logo.png"
              alt={`${siteDetails.name} logo`}
              width={180}
              height={72}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navigationLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-base font-medium text-gray-700 hover:text-copper transition-colors">
                {link.label}
              </a>
            ))}
          </div>

          <Button
            asChild
            className="bg-copper hover:bg-copper/90 text-white shadow-md hover:shadow-lg transition-all rounded-full px-4 md:px-6 text-sm md:text-base py-2.5 md:py-3.5"
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackGaEvent({
                  action: "book_now_click",
                  category: "CTA",
                  label: "navigation",
                })
              }
            >
              Book Now
            </a>
          </Button>
        </nav>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={mobileMenuLabelId}
            className="absolute top-20 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-3xl shadow-2xl p-6 animate-fade-down animate-duration-300 animate-ease-out animate-once animate-fill-forwards focus:outline-none"
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
              aria-label="Close navigation menu"
              ref={closeButtonRef}
            >
              <X className="w-5 h-5 text-navy" />
            </button>
            <p id={mobileMenuLabelId} className="sr-only">
              Mobile navigation
            </p>
            <nav className="flex flex-col gap-4 mt-8">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium text-gray-700 hover:text-copper transition-colors py-3 border-b last:border-b-0 border-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
