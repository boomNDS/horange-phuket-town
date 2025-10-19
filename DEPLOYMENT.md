# Deployment Guide

This project is optimised for Vercel. Follow the steps below to ship updates safely.

## 1. Prerequisites
- Git repository hosted on GitHub, GitLab, or Bitbucket
- Vercel account with access to the target organisation (if applicable)
- Node.js 20+ locally (only needed if you want to run builds before pushing)

## 2. One-time Vercel setup
1. Visit https://vercel.com/new and import the repository.
2. Accept the default Next.js framework preset. Vercel will run `npm install`, `npm run build`, and `npm run start` automatically.
3. In **Settings → Environment Variables**, add any required values:
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional, for GA4 tracking)
4. (Optional) Add your custom domain under **Settings → Domains**.

## 3. Local verification before pushing
```bash
npm install
npm run lint           # runs ESLint + Stylelint
npm run build          # optional: mimics Vercel’s build step
```
Fix any issues, commit, and push.

## 4. Preview deployments
- Every push to a non-production branch triggers a preview deployment.
- Share the preview URL with stakeholders. Verify images, analytics, and SEO metadata.

## 5. Promote to production
1. Merge into the production branch (e.g., `main`). Vercel will build a production deployment.
2. Validate the production URL.
3. If using a custom domain, ensure DNS is configured to point at Vercel and the domain is assigned to the production deployment.

## 6. Post-deployment checks
- Confirm GA4 events are logging in Realtime reports (hero / nav / room CTAs).
- Spot-check structured data using Google’s Rich Results Test (`https://search.google.com/test/rich-results`).
- Review Vercel Analytics (if enabled) for Core Web Vitals.

## 7. Rollbacks
- In Vercel → Deployments, click the ellipsis on a previous deployment and choose **Promote to Production** to revert.

## 8. Automated reminders (optional)
- Enable Slack or email notifications in Vercel’s integrations to stay informed about deployment failures.
