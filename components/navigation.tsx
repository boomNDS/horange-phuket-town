"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { trackGaEvent } from "@/lib/analytics";
import { BOOKING_URL, siteDetails } from "@/lib/site-data";

export function Navigation() {
  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50 rounded-full max-w-5xl w-[95%]">
        <nav
          className="flex items-center justify-between rounded-full border border-white/20 bg-white/70 px-5 md:px-9 py-3.5 md:py-4 text-navy shadow-2xl backdrop-blur-xl"
          aria-label="Primary"
        >
          <a
            href="#hero"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.png"
              alt={`${siteDetails.name} logo`}
              width={180}
              height={72}
              className="h-12 md:h-16 w-auto"
              priority
            />
          </a>

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
    </>
  );
}
