# Delta Litigation Support — Marketing Site

Marketing website for Delta Litigation Support, the litigation support arm of Delta Legal Funding. White-labeled pre-litigation operations for plaintiff personal injury firms.

**Stack:** Next.js (App Router) · TypeScript · Tailwind CSS 4

## Commands

```bash
npm run dev      # development server
npm run build    # production build
npm run start    # serve production build
```

## Structure

```
app/
  page.tsx                  # Homepage
  services/                 # Services index + 7 SEO service pages (driven by lib/services.ts)
  cost-recovery/            # Cost recovery framework (carefully-worded — review with counsel)
  savings-calculator/       # Interactive payroll vs. Delta model calculator
  about/                    # Mission page
  contact/                  # 15-minute operational assessment form
components/                 # Header, footer, calculator, form, icons, reveal animations
lib/
  site.ts                   # Site constants — UPDATE contactEmail + url before launch
  services.ts               # Single source of truth for the seven service disciplines
```

## Environment

The assessment form posts to `app/api/assessment/route.ts`, which emails submissions via Resend. Copy `.env.example` to `.env.local` (and mirror in Vercel) and set:

```
RESEND_API_KEY           # server-only — from resend.com/api-keys
ASSESSMENT_TO_EMAIL      # inbox that receives form submissions
NOTIFICATION_FROM_EMAIL  # "Name <email>" on a Resend-verified domain; omit for onboarding@resend.dev (testing)
```

Without these set, the route returns 503 and the form shows a direct-email fallback.

## Before launch

1. **`lib/site.ts`** — replace `url` and `contactEmail` with production values.
2. **Email delivery** — set the env vars above; verify the sending domain in Resend for production.
3. **Cost Recovery page** (`app/cost-recovery/page.tsx`) — have counsel review the copy before launch, per the website strategy doc.
4. **Calculator assumptions** (`components/savings-calculator.tsx`) — `BURDEN_MULTIPLIER` (1.25) and `DELTA_FULL_STACK_PER_CASE` ($2,500) are the two constants behind the estimate.
5. **Testimonials** — intentionally omitted until real client quotes are approved (targets per strategy doc: PMR, Edward Law Group, Bush & Bush, Kelly Law).

## Design system

- **Palette:** deep navy ink `#0a1a2f` · warm paper `#faf7f1` · brass accent `#c5a35c` (deep brass `#8a6b33` for text on paper)
- **Type:** Instrument Serif (display) · Archivo (body) · IBM Plex Mono (eyebrow labels, numbers)
- **Motifs:** numbered disciplines (01–07), hairline rules, faint Δ triangle linework on ink sections
- Tokens live in `app/globals.css` under `@theme`.
