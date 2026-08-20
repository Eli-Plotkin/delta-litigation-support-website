# Delta Litigation Support — Marketing Site

Marketing website for Delta Litigation Support, the litigation support arm of Delta Legal Funding. Built as a full-stack Next.js application with static-first marketing pages, data-driven service routes, server-side lead capture, and private server-side calculator logic.

See [deltalit.com](https://www.deltalit.com/)

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS 4

## Architecture

The website uses the Next.js App Router as a full-stack application framework.

- Static/server-rendered marketing pages for fast loads and SEO
- Backend API routes for lead capture and private calculator pricing
- Dynamic service pages generated from a centralized `SERVICES` data model
- Client components only where browser interactivity is required

## Data-Driven Content Model

Seven service pages are generated from `lib/services.ts`. Each service defines its slug, metadata, deliverables, benefits, stage, and objective in one place. The dynamic route at `app/services/[slug]/page.tsx` uses this source of truth to generate static pages and SEO metadata.

## Private Server-Side Calculations

Savings calculator keeps public assumptions in the client component while private per-case service fees live in `app/api/calculator/route.ts`.

The browser sends case volume and selected services to the API route, and the server returns the computed estimate. This keeps unpublished pricing out of the client JavaScript bundle.

## SEO & Deployment

The app includes global metadata, per-page metadata, dynamic service metadata, a generated sitemap, and robots configuration. It is designed for Vercel deployment with environment-specific email credentials.

## Production Considerations

- Server-only environment variables for email credentials
- Honeypot field to reduce bot submissions
- Lightweight per-IP rate limiting on lead form submissions
- Graceful fallback when email delivery is not configured
- Private calculator fee assumptions kept out of client-side code

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
```

## Structure

```
app/
  layout.tsx                # Root layout, global metadata, fonts, header/footer, analytics
  page.tsx                  # Homepage
  services/                 # Services index + 7 SEO service pages (driven by lib/services.ts)
  cost-recovery/            # Cost recovery framework
  savings-calculator/       # Interactive payroll vs. Delta model calculator
  attorney-funding/         # Attorney funding service page
  about/                    # Mission page
  contact/                  # 15-minute operational assessment form
  api/
    assessment/route.ts     # Server-side lead form endpoint; sends email through Gmail SMTP
    calculator/route.ts     # Server-side calculator pricing endpoint
  sitemap.ts                # Sitemap generated from SITE + SERVICES
  robots.ts                 # Robots policy + sitemap URL
components/                 # Header, footer, calculator, form, icons, reveal animations
lib/
  site.ts                   # Site constants
  services.ts               # Single source of truth for the seven service disciplines
```

## Environment

The assessment form posts to `app/api/assessment/route.ts`, which emails submissions via Gmail SMTP (nodemailer). Copy `.env.example` to `.env.local` (and mirror in Vercel) and set:

```
GMAIL_USER           # Gmail address that sends the notifications
GMAIL_APP_PASSWORD   # App Password — myaccount.google.com/apppasswords (requires 2-Step Verification)
ASSESSMENT_TO_EMAIL  # optional — inbox that receives submissions; defaults to GMAIL_USER
```

Without these set, the route returns 503 and the form shows a direct-email fallback. (The site previously used Resend — restore from git history if branded-domain sending is ever needed.)

## Operational Notes

1. **Email delivery** — set the env vars above.
2. **Calculator assumptions** — per-case service fees live server-side only in `app/api/calculator/route.ts`. The payroll burden multiplier lives in `components/savings-calculator.tsx`.

## Design system

- **Palette:** deep navy ink `#0a1a2f` · warm paper `#faf7f1` · brass accent `#c5a35c` (deep brass `#8a6b33` for text on paper)
- **Type:** Instrument Serif (display) · Archivo (body) · IBM Plex Mono (eyebrow labels, numbers)
- **Motifs:** numbered disciplines (01–07), hairline rules, faint Δ triangle linework on ink sections
- Tokens live in `app/globals.css` under `@theme`.
