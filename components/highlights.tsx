import Image from "next/image";

import { Car, MapPin, Utensils } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { BLUR_DATA_URL } from "@/lib/image-placeholders";
import { highlightItems } from "@/lib/site-data";

const iconMap = {
  "map-pin": MapPin,
  car: Car,
  utensils: Utensils,
} as const;

type HighlightIcon = keyof typeof iconMap;

export function Highlights() {
  return (
    <section id="highlights" className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn
          as="div"
          direction="up"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto"
        >
          {highlightItems.map((item, index) => {
            const Icon = iconMap[item.icon as HighlightIcon];

            return (
              <FadeIn
                as="article"
                key={item.label}
                delay={index * 120}
                className="flex flex-col items-center text-center gap-4 group cursor-pointer"
              >
                <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 320px, (min-width: 768px) 33vw, 90vw"
                    loading="lazy"
                    quality={85}
                    placeholder="blur"
                    blurDataURL={BLUR_DATA_URL}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
                  <div className="absolute inset-4 flex items-start justify-start">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-copper/80 flex items-center justify-center shadow-lg">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                  </div>
                </div>
                <span className="text-base sm:text-lg font-semibold text-gray-800 group-hover:text-copper transition-colors px-2">
                  {item.label}
                </span>
              </FadeIn>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
