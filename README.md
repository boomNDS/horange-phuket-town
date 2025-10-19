## Horange Phuket Town Hostel Landing Page

Marketing site for Horange Phuket Town Hostel built with Next.js 15 and Tailwind CSS 4. The page features navigation, hero messaging, highlights, services, accommodation gallery, testimonials, FAQ, contact details, and footer content tailored to the hostel experience.

### Tech Stack
- Next.js App Router on React 19
- Tailwind CSS v4 with `tailwindcss-animated`
- Radix UI primitives (`Accordion`, `Slot`)
- Lucide React icon set
- TypeScript

### Animations
- Scroll-triggered reveals reuse the `FadeIn` helper (`components/ui/fade-in.tsx`) which toggles `tailwindcss-animated` utilities once an element enters the viewport.
- FAQ accordions lean on custom height keyframes in `app/globals.css` so expanding/collapsing sections mirrors the shadcn/ui example.

### Brand Design
- **Color palette:** `#FFFFFF` (background), `#C37940` (copper accent), `#262E40` (navy text)
- **Typography:** Playball (primary display), Rubik (secondary sans-serif), Prompt (Thai support)

### Content Management
- Structured content lives in `lib/site-data.ts`. Update booking links, contact info, copy, and repeatable items (services, highlights, testimonials, FAQs, rooms) from this single source of truth.
- Section components under `components/` consume that data and remain presentation-focused.
- Image assets should be placed in `public/`, matching the paths referenced in `lib/site-data.ts`.

### Scripts
- `npm run dev` – start the development server at `http://localhost:3000`
- `npm run build` – build the production bundle
- `npm run start` – run the production server
- `npm run lint` – run both ESLint and Stylelint
- `npm run lint:js` – run only ESLint
- `npm run lint:css` – run Stylelint across `*.css`

### Getting Started
```bash
npm install
npm run dev
```

### Deployment Notes
- Ensure `public/logo.png` and hero/room imagery exist to avoid runtime 404s in the `<Image />` components.
- The icon set is generated from that same logo and lives under `app/icon.png`, `app/apple-touch-icon.png`, and `public/icons/`. Update the base logo and rerun the sizing commands below if the artwork changes.
- PWA metadata (`app/manifest.ts`) and crawl controls (`app/robots.ts`, `app/sitemap.ts`) are generated automatically during the build.
- After updating dependencies, regenerate the lockfile with `npm install --package-lock-only`.
- Confirm the hostel logo favicon renders by testing `favicon.ico`, `apple-touch-icon.png`, and the PWA manifest icons after deployment.

### Localization
- A Thai variant of the landing page is exposed at `/th` with localized metadata to satisfy hreflang requirements.
- To expand localized content, duplicate the copy in `lib/site-data.ts` under the `seo.th` namespace (and add new data arrays as needed) before adapting the section components.
- Update the sitemap (`app/sitemap.ts`) with any additional locale routes so search engines discover them automatically.
- Shared image placeholders live in `lib/image-placeholders.ts`; generate a new base64 blur if you swap hero or gallery assets to keep LCP snappy.

- Structured hostel metadata, JSON-LD, and OpenGraph/Twitter cards are driven from `lib/site-data.ts`.
- `hotelStructuredData` includes aggregate ratings, amenity features, and testimonial reviews; extend it if you add more social proof.
- `app/robots.ts` and `app/sitemap.ts` expose crawl hints for search engines; extend `ROUTES` in the sitemap if you add more pages.
- Replace the placeholder Google site verification code in `app/layout.tsx` when integrating with Search Console.
- Google Analytics 4 support is built in—set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable tracking (details below). CTA clicks (hero, navigation, room cards) report as GA events through `lib/analytics.ts`.

### Google Analytics 4 Setup
1. In Google Analytics, create a GA4 property (or open your existing property) and add a **Web** data stream for the production hostname.
2. Copy the Measurement ID (format `G-XXXXXXXXXX`) from the stream details.
3. Add the ID locally for testing:
   ```bash
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" >> .env.local
   npm run dev
   ```
   When this env var is present, the GA snippet in `app/layout.tsx` injects the gtag script and disables the automatic page view.
4. In Vercel, open **Project → Settings → Environment Variables** and add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to `Production` (and `Preview` if desired), then trigger a redeploy.
5. After deployment, visit the live site and confirm the session appears in GA4 **Realtime**. Because `GaRouteTracker` replays `page_view` events on client navigation, route changes should register without a full reload.

### Client Handoff Checklist
1. Share the GA4 Measurement ID instructions above with the client and confirm they have access to the GA property.
2. In Vercel, grant the client access or walk them through adding the environment variable and triggering a redeploy.
3. Provide the `.env.local` template (without secrets committed) if the client plans to run the project locally.
4. Confirm the client understands how to update content via `lib/site-data.ts` and where to replace imagery in `public/`.

### Deployment
- Follow `DEPLOYMENT.md` for a step-by-step Vercel setup (env variables, preview checks, rollbacks).

### Regenerating Icons
```bash
mkdir -p public/icons
sips -z 192 192 public/logo.png --out public/icons/icon-192.png
sips -z 512 512 public/logo.png --out public/icons/icon-512.png
cp public/logo.png app/icon.png
cp public/logo.png app/apple-touch-icon.png
magick convert public/logo.png app/favicon.ico
```
