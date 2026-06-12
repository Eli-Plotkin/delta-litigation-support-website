import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { DISCLAIMER } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Cost Recovery Framework',
  description:
    'Delta’s service model is built around documented litigation support activities tied to individual files — with the documentation framework firms need to evaluate expense treatment under applicable law.',
}

const FAQ = [
  {
    q: 'Can we bill these services to our clients as case expenses?',
    a: 'That’s a determination only your firm can make, together with your counsel, based on your jurisdiction’s rules and your engagement agreements. What Delta provides is the structure that makes the evaluation possible: defined services tied to specific files, documented work product, and per-file invoices. Without that structure, there’s nothing to evaluate.',
  },
  {
    q: 'Does Delta guarantee that these expenses are recoverable?',
    a: 'No, and you should be skeptical of any vendor who does. Expense treatment varies by state, by ethics authority, and by the language in each client engagement. Delta’s role is to deliver the services and the paper trail. The determination belongs to your firm.',
  },
  {
    q: 'How is this different from billing clients for staff time?',
    a: 'A salaried case manager’s time is general overhead spread across your whole caseload, with no file-level record of work performed. Delta services are engaged on individual files with defined deliverables and itemized invoices from a third-party provider. That distinction is the foundation of the entire framework, and it’s why the structure exists.',
  },
]

const FRAMEWORK = [
  {
    title: 'State-by-state legal analysis',
    desc: 'Research summaries on how litigation support expenses are addressed across jurisdictions.',
  },
  {
    title: 'Ethics guidance summaries',
    desc: 'Relevant ethics opinions and authorities for your firm and counsel to review.',
  },
  {
    title: 'Sample engagement language',
    desc: 'Example retainer provisions addressing litigation support services, for review by your counsel.',
  },
  {
    title: 'Sample settlement statement language',
    desc: 'Example line-item formats for presenting file-specific services at disbursement.',
  },
  {
    title: 'Service documentation standards',
    desc: 'Defined deliverables and documented work product on every file, for every service.',
  },
  {
    title: 'Per-file invoice templates',
    desc: 'Invoices itemized by file and by service — never lump-sum staffing bills.',
  },
  {
    title: 'Cost recovery guidelines',
    desc: 'A structured process for evaluating and documenting services on a file-by-file basis.',
  },
]

export default function CostRecoveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="delta-field bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Reveal>
            <p className="eyebrow text-brass">Cost recovery framework</p>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.05] sm:text-6xl">
              Convert operational overhead into{' '}
              <em className="text-brass">file-specific litigation support services.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Delta&rsquo;s service model is designed around documented litigation support
              activities tied to individual files. We provide the service-level documentation and
              work product that may assist firms in evaluating the treatment of litigation support
              expenses under applicable law and engagement agreements.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The distinction */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass-deep">The distinction</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                Overhead is general. <em>Services are specific.</em>
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-slate-ink">
                When a salaried case manager works across dozens of files, that cost is general
                firm overhead — it isn&rsquo;t attributable to any single case.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-ink">
                Delta is structured differently. Each service is engaged on a specific file,
                performed against defined deliverables, documented with identifiable work product,
                and invoiced per file. That structure gives firms a documented basis to evaluate —
                with their own counsel — whether a given service may be treated as a case-specific
                expense under applicable law, ethics rules, and their engagement agreements.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-ink">
                We don&rsquo;t make that determination for you, and no outcome is guaranteed. What
                we provide is the structure and the paper trail that make the evaluation possible.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Side-by-side */}
        <div className="mt-20 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-2">
          <Reveal>
            <div className="h-full bg-paper-2/60 p-10">
              <p className="eyebrow text-slate-ink">In-house staffing</p>
              <ul className="mt-8 space-y-4 text-base text-slate-ink">
                <li>One salary spread across the entire caseload</li>
                <li>No file-level record of work performed</li>
                <li>Cost absorbed as general overhead</li>
                <li>Nothing to evaluate at settlement</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="delta-field h-full bg-ink p-10 text-paper">
              <p className="eyebrow text-brass">The Delta structure</p>
              <ul className="mt-8 space-y-4 text-base">
                <li>Defined services engaged per file</li>
                <li>Documented deliverables and work product</li>
                <li>Per-file, per-service invoicing</li>
                <li>A documented basis for expense evaluation</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* The framework */}
      <section className="border-y border-[var(--color-line)] bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow text-brass-deep">What Delta provides</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
              A complete documentation framework. <em>Not a promise.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORK.map((item, i) => (
              <div key={item.title} className="bg-paper p-8">
                <Reveal delay={(i % 3) * 70}>
                  <span className="font-mono text-xs text-brass-deep">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-4 text-xl leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-ink">{item.desc}</p>
                </Reveal>
              </div>
            ))}
            <div className="hidden bg-ink p-8 sm:flex sm:items-end lg:col-span-2">
              <p className="font-display text-xl leading-snug text-paper">
                Built to withstand scrutiny — <em className="text-brass">file by file.</em>
              </p>
            </div>
          </div>
          <Reveal>
            <p className="mt-8 max-w-3xl text-sm leading-relaxed text-slate-ink">
              Sample language, state-by-state analysis, and ethics summaries are shared with
              engaged firms for review by the firm&rsquo;s own counsel — we don&rsquo;t publish
              them publicly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 pt-24 sm:pt-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-brass-deep">Straight answers</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                The questions partners <em>actually ask.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {FAQ.map((item, i) => (
                <li key={item.q}>
                  <Reveal delay={i * 80}>
                    <div className="py-8">
                      <h3 className="font-display text-2xl leading-snug">{item.q}</h3>
                      <p className="mt-4 text-base leading-relaxed text-slate-ink">{item.a}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Plain-language disclaimer */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <Reveal>
          <div className="border-l-2 border-brass-deep bg-paper-2/60 p-8 sm:p-10">
            <p className="eyebrow text-brass-deep">Read this part carefully</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-ink">{DISCLAIMER}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-ink">
              Treatment of litigation support expenses varies by jurisdiction and by the terms of
              each client engagement. Your firm — together with its own counsel — makes every
              determination. Delta&rsquo;s role is to deliver defined services and the documentation
              that supports your analysis.
            </p>
            <Link href="/contact" className="btn btn-ink mt-8">
              Discuss the Framework With Us
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      <CtaBand />
    </>
  )
}
