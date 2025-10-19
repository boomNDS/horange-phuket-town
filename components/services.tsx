import { Coffee, Droplets, Home, Lock, Plane, Wifi } from "@/components/icons"
import { FadeIn } from "@/components/ui/fade-in"
import { services as serviceItems } from "@/lib/site-data"
import { cn } from "@/lib/utils"

const iconMap = {
  home: Home,
  wifi: Wifi,
  coffee: Coffee,
  droplets: Droplets,
  lock: Lock,
  plane: Plane,
} as const

type ServiceIcon = keyof typeof iconMap

export function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn as="div" className="text-center mb-12 sm:mb-16 md:mb-20" direction="up">
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-navy mb-4 sm:mb-6 px-4">
            Elevate your stay with our services
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Experience unparalleled comfort and convenience with our thoughtfully curated amenities designed for the
            modern traveler
          </p>
        </FadeIn>
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-6 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 md:gap-12 max-w-6xl mx-auto">
          {serviceItems.map((service, index) => {
            const Icon = iconMap[service.icon as ServiceIcon]
            const isTopRow = index < 3

            return (
              <FadeIn
                as="div"
                key={service.title}
                delay={index * 120}
                direction={isTopRow ? "up" : "down"}
                className={cn(
                  "flex cursor-pointer flex-col items-center text-center gap-5 sm:gap-7 group snap-start min-w-[80%] sm:min-w-0 bg-white sm:bg-transparent rounded-3xl sm:rounded-none shadow-lg sm:shadow-none p-6 sm:p-0 transition-transform duration-300 ease-out hover:-translate-y-1.5",
                  isTopRow ? "pt-10 sm:pt-12" : "pt-8 sm:pt-10"
                )}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-copper/10 flex items-center justify-center group-hover:bg-copper group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-copper group-hover:text-white transition-colors" />
                </div>
                <div className="px-4">
                  <h3 className="font-bold text-xl sm:text-2xl mb-2 sm:mb-3 text-navy group-hover:text-copper transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">{service.description}</p>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
