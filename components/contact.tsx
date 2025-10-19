import Image from "next/image"
import { Facebook, Instagram, type LucideIcon } from "lucide-react"

import { FadeIn } from "@/components/ui/fade-in"
import { BLUR_DATA_URL } from "@/lib/image-placeholders"
import { siteDetails } from "@/lib/site-data"

const { address, contact, socialLinks, mapEmbedUrl, name } = siteDetails

const socialIconMap: Record<string, LucideIcon> = {
  Facebook,
  Instagram,
}

export function Contact() {
  return (
    <section id="location" className="py-0 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - Contact Info */}
        <div className="relative order-1 min-h-[440px] sm:min-h-[520px] md:min-h-[600px] flex items-center justify-center px-6 sm:px-10 py-16 sm:py-24 overflow-hidden">
          <Image
            src="/hotel-exterior.png"
            alt="Facade of Horange Phuket Town"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
            quality={85}
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
          />
          <div className="absolute inset-0 bg-navy/75" />
          <FadeIn as="div" className="relative z-10 text-white max-w-lg" direction="up">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8">Contact us</h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
              <p className="leading-relaxed">
                {address.street}, {address.city}, {address.province} {address.postalCode}
              </p>
              <div className="space-y-2">
                <a
                  className="inline-flex gap-2 items-center font-semibold hover:text-copper transition-colors"
                  href={`tel:${contact.phoneInternational}`}
                >
                  <span>Tel:</span>
                  <span className="font-normal">{contact.phone}</span>
                </a>
              </div>
              <p>
                <a href={`mailto:${contact.email}`} className="hover:text-copper transition-colors underline break-all">
                  {contact.email}
                </a>
              </p>
              <div className="flex gap-4 sm:gap-6 pt-4">
                {socialLinks.map((social, index) => {
                  const Icon = socialIconMap[social.label]
                  return (
                    <FadeIn
                      as="a"
                      key={social.href}
                      delay={index * 120}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-10 items-center justify-center rounded-full bg-white/20 text-white transition-all hover:bg-copper"
                      aria-label={social.label}
                    >
                      {Icon ? <Icon className="size-5" aria-hidden="true" /> : <span className="text-sm font-bold">{social.abbreviation}</span>}
                    </FadeIn>
                  )
                })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right side - Map */}
        <FadeIn as="div" className="order-2 min-h-[360px] md:min-h-[600px] bg-muted-foreground/10" direction="up" delay={150}>
          <iframe
            src={mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title={`${name} location`}
          />
        </FadeIn>
      </div>
    </section>
  )
}
