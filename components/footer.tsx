import { siteDetails } from "@/lib/site-data"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-5">
          <h3 className="font-display text-5xl text-copper mb-6">{siteDetails.name}</h3>
          <p className="text-white/70 max-w-2xl mx-auto leading-relaxed text-lg sm:text-xl">{siteDetails.tagline}</p>
          <div className="pt-6 border-t border-white/10 mt-8 space-y-2">
            <p className="text-base text-white/60">
              Online Revenue Management by{" "}
              <a
                href="https://getguest.co"
                target="_blank"
                rel="noopener noreferrer"
                className="text-copper hover:underline font-medium"
              >
                GetGuest.co
              </a>
            </p>
            <p className="text-base text-white/60">
              © {currentYear} {siteDetails.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
