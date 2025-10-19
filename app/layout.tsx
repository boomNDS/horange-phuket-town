import type React from "react"
import type { Metadata } from "next"
import { Playball, Prompt, Rubik } from "next/font/google"
import Script from "next/script"

import { GaRouteTracker } from "@/components/analytics/ga-tracker"
import { SITE_ORIGIN, hotelStructuredData, siteDetails } from "@/lib/site-data"
import "./globals.css"

const playball = Playball({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-playball",
})

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
})

const prompt = Prompt({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
  variable: "--font-prompt",
})

export const metadata: Metadata = {
  title: siteDetails.seo.title,
  description: siteDetails.seo.description,
  keywords: siteDetails.seo.keywords,
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      th: "/th",
    },
  },
  authors: [{ name: siteDetails.name }],
  creator: siteDetails.name,
  publisher: siteDetails.name,
  category: "Hospitality > Hostel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_ORIGIN),
  openGraph: {
    locale: "en_US",
    alternateLocale: ["th_TH"],
    title: siteDetails.seo.title,
    description: siteDetails.seo.description,
    url: SITE_ORIGIN,
    siteName: siteDetails.name,
    images: [
      {
        url: siteDetails.metaImage,
        width: 1200,
        height: 630,
        alt: `${siteDetails.name} exterior`,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteDetails.seo.title,
    description: siteDetails.seo.description,
    images: [siteDetails.metaImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelStructuredData) }} />
        <meta name="description" content={siteDetails.seo.th.description} lang="th" />
        <meta name="keywords" content={siteDetails.seo.th.keywords.join(", ")} lang="th" />
        <link rel="alternate" hrefLang="th" href={`${SITE_ORIGIN}/th`} />
        <link rel="alternate" hrefLang="en" href={SITE_ORIGIN} />
      </head>
      <body suppressHydrationWarning className={`${rubik.variable} ${playball.variable} ${prompt.variable} font-sans antialiased`}>
        {GA_MEASUREMENT_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
              `}
            </Script>
            <GaRouteTracker measurementId={GA_MEASUREMENT_ID} />
          </>
        ) : null}
        {children}
      </body>
    </html>
  )
}
