import type { MetadataRoute } from "next"

import { SITE_ORIGIN } from "@/lib/site-data"

const ROUTES: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/th", priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map((route) => ({
    url: `${SITE_ORIGIN}${route.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route.priority,
  }))
}
