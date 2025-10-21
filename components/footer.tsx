import { siteDetails } from "@/lib/site-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-5">
          <div className="pt-6 space-y-2">
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
  );
}
