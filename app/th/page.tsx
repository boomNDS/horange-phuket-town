import type { Metadata } from "next"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { Services } from "@/components/services"
import { Accommodation } from "@/components/accommodation"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { SITE_ORIGIN, absoluteUrl, siteDetails } from "@/lib/site-data"

export const metadata: Metadata = {
  title: siteDetails.seo.th.title,
  description: siteDetails.seo.th.description,
  keywords: siteDetails.seo.th.keywords,
  metadataBase: new URL(SITE_ORIGIN),
  alternates: {
    canonical: "/th",
    languages: {
      th: "/th",
      en: "/",
    },
  },
  openGraph: {
    locale: "th_TH",
    alternateLocale: ["en_US"],
    title: siteDetails.seo.th.title,
    description: siteDetails.seo.th.description,
    url: `${SITE_ORIGIN}/th`,
    siteName: siteDetails.name,
    images: [
      {
        url: absoluteUrl(siteDetails.metaImage),
        width: 1200,
        height: 630,
        alt: `${siteDetails.name} exterior`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.seo.th.title,
    description: siteDetails.seo.th.description,
    images: [absoluteUrl(siteDetails.metaImage)],
  },
}

export default function ThaiHotelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Highlights />
      <Services />
      <Accommodation />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}
