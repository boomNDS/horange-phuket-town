"use client"

import Image from "next/image"

import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { trackGaEvent } from "@/lib/analytics"
import { BLUR_DATA_URL } from "@/lib/image-placeholders"
import { BOOKING_URL, roomTypes, siteDetails } from "@/lib/site-data"

export function Accommodation() {
  return (
    <section id="rooms" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn as="div" className="text-center mb-12 sm:mb-16 md:mb-20" direction="up">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-navy mb-4 sm:mb-6">
            Accommodation
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            You will delight at the opportunities for adventure, romance, and relaxation available at Horange Phuket
            Town
          </p>
        </FadeIn>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 max-w-7xl mx-auto">
          {roomTypes.map((room, index) => {
            const isFeatured = room.name === "Studio Room"

            return (
              <FadeIn
                as="div"
                key={room.name}
                delay={index * 120}
                className={`group cursor-pointer snap-start min-w-[80%] sm:min-w-0 sm:bg-transparent bg-white/80 rounded-3xl sm:rounded-none p-4 sm:p-0 shadow-lg sm:shadow-none ${isFeatured ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden rounded-2xl mb-4 sm:mb-6 shadow-lg">
                  <Image
                    src={room.image}
                    alt={`${room.name} at ${siteDetails.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(min-width: 1024px) 372px, (min-width: 640px) 50vw, 90vw"
                    priority={room.name === "Standard Room"}
                    loading={room.name === "Standard Room" ? "eager" : "lazy"}
                    quality={85}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold">{room.name}</h3>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-copper hover:bg-copper/90 text-white shadow-md hover:shadow-lg transition-all rounded-full px-7 sm:px-9 text-base sm:text-lg py-2.5"
                  >
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackGaEvent({
                          action: "room_cta_click",
                          category: "CTA",
                          label: room.name,
                        })
                      }
                    >
                      See More
                    </a>
                  </Button>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
