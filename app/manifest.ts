import type { MetadataRoute } from "next"

import { SITE_ORIGIN, siteDetails } from "@/lib/site-data"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteDetails.seo.title,
    short_name: siteDetails.name,
    description: siteDetails.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#c37940",
    lang: "en",
    scope: "/",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    id: SITE_ORIGIN,
  }
}
