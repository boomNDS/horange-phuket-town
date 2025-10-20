const DEFAULT_SITE_ORIGIN = "https://horange-phuket-town.vercel.app"

export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_ORIGIN

export function absoluteUrl(path: string) {
  try {
    return new URL(path, SITE_ORIGIN).toString()
  } catch {
    return `${SITE_ORIGIN}${path}`
  }
}

export const BOOKING_URL = "https://hotels.cloudbeds.com/reservation/xwCU2d"

export const siteDetails = {
  name: "Horange Phuket Town",
  tagline: "Wake up in Phuket Old Town, enjoy cozy café downstairs, and plenty of parking nearby",
  hero: {
    title: "Stay in the Heart of Phuket Old Town",
    subtitle: "Wake up in Phuket Old Town, enjoy cozy café downstairs, and plenty of parking nearby",
  },
  description:
    "Experience boutique hotel comfort at Horange Phuket Town Hotel. Located 3 minutes walk from Phuket Old Town with free parking, Summer Soul Café, and modern amenities. Book direct for best rates.",
  seo: {
    title: "Horange Phuket Town Hotel | Boutique Hotel in Phuket Old Town",
    description:
      "Stay at Horange Phuket Town Hotel for boutique-style rooms, free parking, Summer Soul Café, and quick access to Phuket Old Town. Book direct for best rates and perks.",
    keywords: [
      "Horange Phuket Town Hotel",
      "boutique hotel Phuket",
      "Phuket Old Town hotel",
      "hotel with parking Phuket",
      "Summer Soul Café hotel",
      "Phuket boutique accommodation",
      "Old Town Phuket stay",
    ],
    th: {
      title: "โฮเรนจ์ ภูเก็ต ทาวน์ โฮเทล | ที่พักบูทีคใจกลางเมืองเก่าภูเก็ต",
      description:
        "พักสบายที่ Horange Phuket Town Hotel ห้องพักสไตล์บูทีค พร้อมที่จอดรถฟรี คาเฟ่ Summer Soul และใกล้เมืองเก่าภูเก็ตเพียง 3 นาที เดินทางสะดวกและคุ้มค่าที่สุดเมื่อจองโดยตรง",
      keywords: [
        "โฮเรนจ์ ภูเก็ต ทาวน์",
        "โฮเทลภูเก็ต",
        "ที่พักเมืองเก่าภูเก็ต",
        "โฮเทลมีที่จอดรถภูเก็ต",
        "Summer Soul คาเฟ่",
        "ที่พักบูทีคภูเก็ต",
        "ที่พักภูเก็ตทาวน์",
      ],
    },
  },
  bookingUrl: BOOKING_URL,
  priceRange: "$$",
  metaImage: "/hotel-exterior.png",
  address: {
    street: "57/3-9, Phuket Road, Talat Yai",
    city: "Mueang Phuket",
    province: "Phuket",
    postalCode: "83000",
    country: "Thailand",
    countryCode: "TH",
  },
  contact: {
    phone: "065 549 7738",
    phoneInternational: "+66-65-549-7738",
    email: "rsvn.horange@gmail.com",
  },
  socialLinks: [
    {
      label: "Facebook",
      abbreviation: "f",
      href: "https://www.facebook.com/horangeboutiqueroom/",
    },
    {
      label: "Instagram",
      abbreviation: "IG",
      href: "https://www.instagram.com/horange_phuket/",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.1211455773964!2d98.3915557!3d7.882391699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031fbaaf0ecd7%3A0xfb2343686f1c53dc!2sHorange%20Phuket%20Town!5e0!3m2!1sen!2sth!4v1760682099783!5m2!1sen!2sth",
}

export const navigationLinks = [
  { href: "#rooms", label: "Rooms" },
  { href: "#services", label: "Services" },
  { href: "#reviews", label: "Reviews" },
  { href: "#location", label: "Contact" },
]

export const highlightItems = [
  { icon: "map-pin", label: "3 Minutes to Phuket Old Town", image: "/highlights/old-town.jpg" },
  { icon: "coffee", label: "Summer Soul Café at Lobby", image: "/highlights/cafe.jpg" },
  { icon: "car", label: "50+ Free Parking Spaces", image: "/highlights/parking.jpg" },
] as const

export const services = [
  {
    icon: "home",
    title: "Peaceful & Private Stay",
    description: "Limited rooms mean every guest gets personalized attention. Your private retreat awaits.",
  },
  {
    icon: "wifi",
    title: "Free Wi-Fi",
    description: "Fast and stable connection for work or streaming. Stay connected effortlessly.",
  },
  {
    icon: "coffee",
    title: "In-Room Kitchenette",
    description: "Microwave, fridge, and sink — just like home. Cook your favorite meals anytime.",
  },
  {
    icon: "droplets",
    title: "Relaxing Private Balcony",
    description: "Enjoy sunset views and unwind directly from your balcony. Your personal outdoor space.",
  },
  {
    icon: "lock",
    title: "Safe Box & Hair Dryer",
    description: "Keep your valuables safe and look your best. Convenience meets security.",
  },
  {
    icon: "plane",
    title: "Easy Airport Access",
    description: "Reach the airport with ease — just 30 mins by shuttle. Stress-free travel guaranteed.",
  },
] as const

export const roomTypes = [
  { name: "Standard Room", image: "/rooms/standard.jpg" },
  { name: "Superior Room", image: "/rooms/superior.jpg" },
  { name: "Deluxe Room", image: "/rooms/deluxe.jpg" },
  { name: "Deluxe Room with Bathtub", image: "/rooms/deluxe-bathtub.jpg" },
  { name: "Studio Room", image: "/rooms/studio.jpg" },
] as const

export const reviewBadges = [
  { platform: "Agoda", score: "8.9/10" },
  { platform: "Trip.com", score: "8.9/10" },
  { platform: "Google", score: "4.5/5" },
] as const

export const testimonials = [
  {
    quote: '"Perfect location in Old Town! Walking distance to everything. The café downstairs is amazing."',
    author: "Sarah M.",
  },
  {
    quote: '"Clean, comfortable rooms with great parking. Staff were incredibly helpful and friendly!"',
    author: "James T.",
  },
  {
    quote: '"Loved the boutique feel and the Summer Soul Café. Will definitely stay here again!"',
    author: "Lisa K.",
  },
] as const

export const faqItems = [
  {
    question: "How far is Phuket Old Town from the hotel?",
    answer: "We're right in the heart of it — just a 3-minute walk to Old Town's main street and markets.",
  },
  {
    question: "When can I check in or check out?",
    answer: "Check-in starts at 2 PM, check-out before 12 PM.",
  },
  {
    question: "Is parking available?",
    answer: "Yes! Free on-site public parking with 50+ spaces for cars or scooters.",
  },
  {
    question: "Do you offer airport pickup?",
    answer: "Yes, we do. Just share your flight details with us before arrival.",
  },
  {
    question: "Do you provide extra beds?",
    answer: "Sorry, extra beds aren't available at our hotel.",
  },
  {
    question: "Where can I eat or grab coffee?",
    answer:
      "Our Summer Soul Café & Bistro opens daily 7 AM – 5 PM, serving local breakfast, good coffee, and homemade treats.",
  },
] as const

export const hotelStructuredData = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  name: siteDetails.name,
  description: siteDetails.seo.description,
  alternateName: siteDetails.seo.th.title,
  availableLanguage: ["en", "th"],
  image: absoluteUrl(siteDetails.metaImage),
  address: {
    "@type": "PostalAddress",
    streetAddress: siteDetails.address.street,
    addressLocality: siteDetails.address.city,
    addressRegion: siteDetails.address.province,
    postalCode: siteDetails.address.postalCode,
    addressCountry: siteDetails.address.countryCode,
  },
  telephone: siteDetails.contact.phoneInternational,
  email: siteDetails.contact.email,
  priceRange: siteDetails.priceRange,
  sameAs: siteDetails.socialLinks.map((link) => link.href),
  aggregateRating: {
    "@type": "Rating",
    ratingValue: "4.5",
    bestRating: "5",
    ratingCount: 120,
  },
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Free WiFi" },
    { "@type": "LocationFeatureSpecification", name: "Free Parking" },
    { "@type": "LocationFeatureSpecification", name: "Café" },
    { "@type": "LocationFeatureSpecification", name: "Air Conditioning" },
  ],
  review: testimonials.map((testimonial) => ({
    "@type": "Review",
    reviewBody: testimonial.quote.replace(/^"|"$/g, ""),
    author: {
      "@type": "Person",
      name: testimonial.author,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: 5,
      bestRating: 5,
    },
  })),
  url: SITE_ORIGIN,
}
