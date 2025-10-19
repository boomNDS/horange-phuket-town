# 🚀 Deployment Guide

This project is optimised for Vercel. Follow the steps below to ship updates safely.

## ✅ Prerequisites
- Git repository hosted on GitHub, GitLab, or Bitbucket
- Vercel account with access to the target organisation (if applicable)
- Node.js 20+ locally (only needed if you want to run builds before pushing)

## ⚙️ One-time Vercel Setup
1. Visit https://vercel.com/new and import the repository.
2. Accept the default Next.js framework preset. Vercel will run `npm install`, `npm run build`, and `npm run start` automatically.
3. In **Settings → Environment Variables**, add any required values:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional, enables GA4 tracking and route analytics)
   - `NEXT_PUBLIC_SITE_URL` (set to the canonical production URL so Open Graph images resolve)
4. Upload or confirm all static assets (logo, room photos, highlight imagery) live under `public/` so `/rooms/*` and `/highlights/*` paths resolve after deployment.
5. (Optional) Add your custom domain under **Settings → Domains**, then configure DNS before launch day.

## 🧪 Local Verification Before Pushing
```bash
npm install
npm run lint           # runs ESLint + Stylelint
npm run build          # optional: mimics Vercel’s build step
```
Fix any issues, commit, and push.

## 🔄 Preview Deployments
- Every push to a non-production branch triggers a preview deployment.
- Share the preview URL with stakeholders. Verify images, analytics, and SEO metadata.
- Confirm the localized `/th` route renders correctly and that structured data validates via the [Rich Results Test](https://search.google.com/test/rich-results).
- Capture feedback directly in the PR while the preview URL is live to keep production-ready history clean.

## 🚀 Promote to Production
1. Merge into the production branch (e.g., `main`). Vercel will build a production deployment.
2. Validate the production URL.
3. If using a custom domain, ensure DNS is configured to point at Vercel and the domain is assigned to the production deployment.

## 📋 Post-deployment Checks
- Confirm GA4 events are logging in Realtime reports (hero / nav / room CTAs).
- Spot-check structured data using Google’s Rich Results Test (`https://search.google.com/test/rich-results`).
- Review Vercel Analytics (if enabled) for Core Web Vitals.
- Visit key sections (hero, highlights, rooms, contact) to ensure images served from `/rooms/*` and `/highlights/*` resolve without 404s.
- Manually confirm the `/th` locale renders the correct metadata and navigation labels.

## ⏪ Rollbacks
- In Vercel → Deployments, click the ellipsis on a previous deployment and choose **Promote to Production** to revert.
- If code changes caused the regression, revert or cherry-pick in git, push the fix, and let Vercel redeploy automatically.

## 🔔 Automated Reminders (Optional)
- Enable Slack or email notifications in Vercel’s integrations to stay informed about deployment failures.
- Consider connecting Preview Deployments to GitHub checks so reviewers see status immediately.
