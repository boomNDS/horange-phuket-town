## Horange Phuket Town Hostel Landing Page

![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?style=flat&logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-20232a?style=flat&logo=react&logoColor=61DAFB)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind_CSS-4.1-38BDF8?style=flat&logo=tailwindcss&logoColor=white)
![TypeScript 5](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript&logoColor=white)
![Deploys on Vercel](https://img.shields.io/badge/Deploys_on-Vercel-000000?style=flat&logo=vercel&logoColor=white)

![Horange Phuket Town logo](logo.png)

### Overview
- Boutique hostel marketing site featuring room highlights, Summer Soul Café, and booking CTA coverage for Horange Phuket Town.
- Built on the Next.js App Router with strong SEO defaults, structured data, and Thai localization at `/th`.
- Component-driven layout powered by TypeScript data models so copy updates flow from a single source of truth.

### Highlights
- Navigation, hero storytelling, service grid, accommodation gallery, testimonials, FAQ, and contact/CTA sections tuned for conversions.
- Scroll-triggered reveals use the reusable `FadeIn` helper (`components/ui/fade-in.tsx`) paired with `tailwindcss-animated`.
- FAQ accordions reuse custom height keyframes in `app/globals.css`, mirroring the shadcn/ui motion behavior.
- Brand palette: `#FFFFFF` (background), `#C37940` (copper accent), `#262E40` (navy text). Typography: Playball (display), Rubik (primary sans-serif), Prompt (Thai).

### Tech Stack
- Next.js 15 App Router on React 19 with TypeScript strictness.
- Tailwind CSS v4 + `tailwindcss-animated` for utility-first styling and motion.
- Radix UI primitives (`Accordion`, `Slot`) and Lucide icons to keep components accessible.
- ESLint 9, Stylelint 16, and TypeScript 5 coordinate linting and type safety.

### Project Layout
- `app/` – route handlers, layouts, metadata, and localized pages.
- `components/` – presentational sections plus shared UI primitives (accordion, button, card, fade-in).
- `lib/site-data.ts` – central content model driving copy, links, SEO meta, testimonials, and schema.org JSON-LD.
- `public/` – drop web-ready imagery referenced via `/rooms/...`, `/highlights/...`, and `/icons/...`. Copy existing assets here before building.
- Root assets such as `logo.png`, `hotel-exterior.png`, and `/icons` seed favicons, Open Graph art, and hero imagery.

### Local Development
```bash
npm install
npm run dev
```
- Development server runs at `http://localhost:3000`.
- Copy `.env.local` from the provided template (not committed) if environment variables are required.

### Project Scripts
- `npm run dev` – start the Next.js development server.
- `npm run build` – create a production bundle (matches Vercel’s build step).
- `npm run start` – serve the production build locally.
- `npm run lint` – run ESLint + Stylelint in succession.
- `npm run lint:js` / `npm run lint:css` – run the respective linters separately.

### Deployment Workflow
- Target platform: Vercel. Import the repo, accept the Next.js preset, and let Vercel execute install/build/start steps.
- Configure environment variables (`NEXT_PUBLIC_GA_MEASUREMENT_ID` for analytics) under **Project → Settings → Environment Variables**.
- Reference `DEPLOYMENT.md` for a detailed checklist covering preview, production promotion, rollbacks, and optional notifications.

### Analytics & SEO
- `lib/site-data.ts` exposes Open Graph/Twitter card data and `hotelStructuredData` for schema.org coverage. Extend those objects as testimonials grow.
- Google Analytics 4 support is opt-in: set `NEXT_PUBLIC_GA_MEASUREMENT_ID` to enable the GA snippet injected in `app/layout.tsx`.
- CTA click tracking lives in `lib/analytics.ts` and powers hero, navigation, and room interactions.
- Update the placeholder Google Search Console verification meta tag in `app/layout.tsx` once a real token is available.

### Localization
- `/th` provides Thai copy and metadata. Add new locales by mirroring the `seo.th` namespace and extending content arrays in `lib/site-data.ts`.
- After adding locales, update `app/sitemap.ts` so search engines discover the additional routes.

### Asset Management
- Static imagery referenced by `/rooms/*`, `/highlights/*`, and `/icons/*` should live inside `public/`. Move freshly supplied photos into matching folders to avoid runtime 404s.
- Keep `logo.png` at the repository root as the source file and copy it to `public/logo.png` before regenerating icons.
- Regenerate favicons and PWA icons when the brand mark changes:
  ```bash
  mkdir -p public/icons
  sips -z 192 192 public/logo.png --out public/icons/icon-192.png
  sips -z 512 512 public/logo.png --out public/icons/icon-512.png
  cp public/logo.png app/icon.png
  cp public/logo.png app/apple-touch-icon.png
  magick convert public/logo.png app/favicon.ico
  ```

### Google Analytics 4 Setup
1. Create (or open) a GA4 property and add a **Web** data stream for the production domain.
2. Copy the Measurement ID (`G-XXXXXXXXXX` format).
3. For local testing:
   ```bash
   echo "NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX" >> .env.local
   npm run dev
   ```
   The `GaRouteTracker` client component replays `page_view` events on navigation, so single-page transitions register correctly.
4. In Vercel, add the variable to `Production` (and `Preview` if needed) before redeploying.
5. Verify events in GA Realtime after publishing.

### Client Handoff Checklist
1. Share the GA4 setup steps and confirm client access to the analytics property.
2. Provide `.env.local` guidance (without secrets committed) for anyone running the project locally.
3. Walk through content editing in `lib/site-data.ts`, pointing out repeatable collections (services, highlights, testimonials, FAQs, rooms).
4. Note where to replace imagery (`public/rooms`, `public/highlights`, hero art, icons) and how to regenerate favicons.
5. Ensure the client understands deployment via Vercel previews and how to promote/rollback builds.
