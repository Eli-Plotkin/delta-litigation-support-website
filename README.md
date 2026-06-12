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

The assessment form posts to `app/api/assessment/route.ts`, which emails submissions via Gmail SMTP (nodemailer). Copy `.env.example` to `.env.local` (and mirror in Vercel) and set:

```
GMAIL_USER           # Gmail address that sends the notifications
GMAIL_APP_PASSWORD   # App Password — myaccount.google.com/apppasswords (requires 2-Step Verification)
ASSESSMENT_TO_EMAIL  # optional — inbox that receives submissions; defaults to GMAIL_USER
```

Without these set, the route returns 503 and the form shows a direct-email fallback. (The site previously used Resend — restore from git history if branded-domain sending is ever needed.)

## Before launch

1. **`lib/site.ts`** — production values set: deltalit.com / LP@deltalegalfunding.com.
2. **Email delivery** — set the env vars above and send one test submission end-to-end.
3. **Cost Recovery page** (`app/cost-recovery/page.tsx`) — have counsel review the copy before launch, per the website strategy doc.
4. **Calculator assumptions** — per-case service fees live server-side only in `app/api/calculator/route.ts` (pricing not yet public; keep them out of client components). The payroll burden multiplier lives in `components/savings-calculator.tsx`.
5. **Email credential scope** — the Gmail App Password in Vercel grants full send+read access to its account's mailbox. Per the 2026-06-12 security review: create a dedicated `notifications@deltalegalfunding.com` Workspace user for sending (swap `GMAIL_USER`/`GMAIL_APP_PASSWORD`, set `ASSESSMENT_TO_EMAIL=LP@deltalegalfunding.com`) rather than leaving the primary inbox's credential deployed long-term.
5. **Testimonials** — intentionally omitted until real client quotes are approved (targets per strategy doc: PMR, Edward Law Group, Bush & Bush, Kelly Law).

## Design system

- **Palette:** deep navy ink `#0a1a2f` · warm paper `#faf7f1` · brass accent `#c5a35c` (deep brass `#8a6b33` for text on paper)
- **Type:** Instrument Serif (display) · Archivo (body) · IBM Plex Mono (eyebrow labels, numbers)
- **Motifs:** numbered disciplines (01–07), hairline rules, faint Δ triangle linework on ink sections
- Tokens live in `app/globals.css` under `@theme`.
