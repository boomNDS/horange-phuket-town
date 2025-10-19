import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Highlights } from "@/components/highlights"
import { Services } from "@/components/services"
import { Accommodation } from "@/components/accommodation"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function HotelPage() {
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
