"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Menu, X } from "@/components/icons";
import { trackGaEvent } from "@/lib/analytics";
import { BOOKING_URL, siteDetails } from "@/lib/site-data";

const menuLinks = [
  { href: "#services", label: "Highlights" },
  { href: "#rooms", label: "Rooms" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
  { href: "#location", label: "Contact" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuId = useId();
  const mobileMenuLabelId = `${mobileMenuId}-label`;
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (typeof document === "undefined") {
      return undefined;
    }

    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }

    document.body.style.overflow = "";
    return undefined;
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (typeof document === "undefined" || !mobileMenuOpen) {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      closeButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 rounded-full max-w-5xl w-[95%]">
        <nav
          className="flex items-center justify-between rounded-full border border-white/20 bg-white/70 px-5 md:px-9 py-2.5 md:py-3.5 text-navy shadow-2xl backdrop-blur-xl"
          aria-label="Primary"
        >
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
            aria-label={`${mobileMenuOpen ? "Close" : "Open"} navigation menu`}
            aria-controls={mobileMenuId}
            aria-expanded={mobileMenuOpen}
            aria-haspopup="dialog"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-navy" />
            ) : (
              <Menu className="w-5 h-5 text-navy" />
            )}
          </button>

          <a
            href="#hero"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt={`${siteDetails.name} logo`}
              width={220}
              height={88}
              className="h-[3rem] md:h-[4.5rem] w-auto object-contain"
              priority
            />
          </a>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {menuLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-copper transition-colors"
              >
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
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            id={mobileMenuId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={mobileMenuLabelId}
            className="absolute top-30 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-5 sm:p-6 animate-fade-down animate-duration-300 animate-ease-out animate-once animate-fill-forwards focus:outline-none"
          >
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-3 right-3 p-2.5 hover:bg-white/50 rounded-full transition-colors cursor-pointer"
              aria-label="Close navigation menu"
              ref={closeButtonRef}
            >
              <X className="w-6 h-6 text-navy" />
            </button>
            <p id={mobileMenuLabelId} className="sr-only">
              Mobile navigation
            </p>
            <nav className="flex flex-col gap-2 mt-10">
              {menuLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base sm:text-lg font-medium text-gray-700 hover:text-copper transition-colors py-4 border-b last:border-b-0 border-gray-100"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
