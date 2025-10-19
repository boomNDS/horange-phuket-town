"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/fade-in";
import { trackGaEvent } from "@/lib/analytics";
import { BLUR_DATA_URL } from "@/lib/image-placeholders";
import { BOOKING_URL, roomTypes, siteDetails } from "@/lib/site-data";

export function Accommodation() {
  return (
    <section id="rooms" className="py-12 sm:py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn
          as="div"
          className="text-center mb-10 sm:mb-16 md:mb-20"
          direction="up"
        >
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-navy mb-3 sm:mb-6">
            Accommodation
          </h2>
          <p className="text-gray-600 text-base sm:text-xl max-w-3xl mx-auto leading-relaxed px-2 sm:px-4">
            You will delight at the opportunities for adventure, romance, and
            relaxation available at Horange Phuket Town
          </p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {roomTypes.map((room, index) => {
            const isFeatured = room.name === "Studio Room";

            return (
              <FadeIn
                as="div"
                key={room.name}
                delay={index * 120}
                className="group cursor-pointer bg-white/80 md:bg-transparent rounded-3xl md:rounded-none p-4 sm:p-5 md:p-0 shadow-lg md:shadow-none"
              >
                <div className="relative h-56 sm:h-72 md:h-80 overflow-hidden rounded-2xl mb-3 sm:mb-6 shadow-lg">
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
                  <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 text-white">
                    <h3 className="text-lg sm:text-2xl font-bold">
                      {room.name}
                    </h3>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    asChild
                    className="bg-copper hover:bg-copper/90 text-white shadow-md hover:shadow-lg transition-all rounded-full px-6 sm:px-9 text-sm sm:text-lg py-2.5 sm:py-3"
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
