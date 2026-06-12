import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { DeltaMark } from '@/components/delta-mark'
import { Reveal } from '@/components/reveal'
import { ServiceIcon } from '@/components/service-icon'
import { SERVICES } from '@/lib/services'

const PAIN_POINTS = [
  'Staffing shortages',
  'Rising payroll costs',
  'Constant turnover',
  'Treatment gaps',
  'Demand bottlenecks',
  'Delayed settlements',
]

const TRADITIONAL = ['Hire staff', 'Train staff', 'Manage staff', 'Replace staff', 'Absorb overhead']

const DELTA_MODEL = [
  'White-labeled support team',
  'Defined deliverables on every file',
  'Per-file invoicing structured for expense evaluation',
  'Reduced overhead',
  'Increased scalability',
  'No recruiting',
  'No HR headaches',
]

const CASE_TYPES = [
  'Auto Accidents',
  'Trucking Accidents',
  'Premises Liability',
  'Slip & Fall',
  'Wrongful Death',
  'Catastrophic Injury',
]

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="delta-field relative overflow-hidden bg-ink text-paper">
        <DeltaMark className="pointer-events-none absolute -right-24 -bottom-40 h-[34rem] w-[34rem] text-paper opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <Reveal>
            <p className="eyebrow text-brass">For plaintiff personal injury firms</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
              Your entire pre-litigation department. Fully managed.{' '}
              <em className="text-brass">Fully white-labeled.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Delta Litigation Support helps plaintiff law firms reduce overhead, improve case
              progression, and scale operations through a complete suite of litigation support
              services — from intake through settlement.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-brass">
                Schedule a Demo
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/savings-calculator" className="btn btn-outline-light">
                Calculate Your Savings
              </Link>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[var(--color-line-light)] pt-8">
              {['Seven operational disciplines', 'Intake → Settlement', 'Under your firm’s brand'].map(
                (item) => (
                  <span key={item} className="eyebrow text-mist">
                    {item}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- Problem ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass-deep">The problem</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                Stop hiring. <em>Start scaling.</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-ink">
                Most PI firms solve operational strain the same way: another hire, another salary,
                another seat to train and eventually replace. Overhead grows with the caseload — and
                profitability stalls.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-ink">
                Delta provides a complete operational solution{' '}
                <strong className="font-medium text-ink">without adding headcount.</strong>
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {PAIN_POINTS.map((point, i) => (
                <li key={point}>
                  <Reveal delay={i * 60}>
                    <div className="flex items-baseline gap-6 py-5">
                      <span className="font-mono text-xs text-brass-deep">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-display text-2xl">{point}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Seven disciplines ---------- */}
      <section className="border-y border-[var(--color-line)] bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow text-brass-deep">The platform</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
              One partner. <em>Seven operational disciplines.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group relative bg-paper p-8 transition-colors hover:bg-ink"
              >
                <Reveal delay={(i % 3) * 80}>
                  <div className="flex items-start justify-between">
                    <ServiceIcon
                      slug={s.slug}
                      className="h-9 w-9 text-brass-deep transition-colors group-hover:text-brass"
                    />
                    <span className="font-mono text-xs text-slate-ink/50 transition-colors group-hover:text-mist">
                      {s.number}
                    </span>
                  </div>
                  <h3 className="font-display mt-10 text-2xl transition-colors group-hover:text-paper">
                    {s.navName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-ink transition-colors group-hover:text-mist">
                    {s.short}
                  </p>
                  <span className="eyebrow mt-6 inline-flex items-center gap-2 text-brass-deep opacity-0 transition-opacity group-hover:text-brass group-hover:opacity-100">
                    Explore <span aria-hidden="true">→</span>
                  </span>
                </Reveal>
              </Link>
            ))}
            {/* Filler cell keeps the 2- and 3-col grids balanced (7 + this = even rows) */}
            <div className="hidden items-end bg-ink p-8 sm:flex lg:col-span-2">
              <p className="font-display text-2xl leading-snug text-paper">
                Engage one discipline — <em className="text-brass">or all seven.</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- The Delta Difference ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow text-brass-deep">The Delta difference</p>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
            Overhead is a choice. <em>Make a different one.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full border border-[var(--color-line)] bg-paper-2/60 p-10">
              <p className="eyebrow text-slate-ink">The traditional model</p>
              <ul className="mt-8 space-y-5">
                {TRADITIONAL.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg text-slate-ink">
                    <span className="font-mono text-sm" aria-hidden="true">
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-t border-[var(--color-line)] pt-6 text-sm leading-relaxed text-slate-ink">
                Fixed costs that grow with every case — whether or not the cases do.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="delta-field h-full border border-ink bg-ink p-10 text-paper">
              <p className="eyebrow text-brass">The Delta model</p>
              <ul className="mt-8 space-y-5">
                {DELTA_MODEL.map((item) => (
                  <li key={item} className="flex items-center gap-4 text-lg">
                    <span className="font-mono text-sm text-brass" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-10 border-t border-[var(--color-line-light)] pt-6 text-sm leading-relaxed text-mist">
                Defined services tied to specific files, supported by documented work product.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-3xl text-center text-base leading-relaxed text-slate-ink">
            Because every Delta service is engaged on a specific file, documented with identifiable
            work product, and invoiced per file, your firm gains something a salaried employee can
            never provide: a documented basis to evaluate expense treatment with your own counsel.
          </p>
          <p className="mt-5 text-center">
            <Link
              href="/cost-recovery"
              className="eyebrow inline-flex items-center gap-2 text-brass-deep transition-colors hover:text-ink"
            >
              Explore the Cost Recovery Framework <span aria-hidden="true">→</span>
            </Link>
          </p>
        </Reveal>
      </section>

      {/* ---------- Built for PI firms ---------- */}
      <section className="border-y border-[var(--color-line)] bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-brass-deep">Who we serve</p>
                <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                  Built for <em>plaintiff law firms.</em>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-slate-ink">
                  We aren&rsquo;t a generalist BPO. Every workflow, checklist, and report is
                  purpose-built for pre-litigation personal injury practice.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <div className="grid grid-cols-2 gap-px border border-[var(--color-line)] bg-[var(--color-line)]">
                {CASE_TYPES.map((type, i) => (
                  <div key={type} className="bg-paper px-6 py-8">
                    <Reveal delay={i * 50}>
                      <span className="font-mono text-[0.625rem] tracking-[0.2em] text-brass-deep uppercase">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="font-display mt-2 text-xl">{type}</p>
                    </Reveal>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Powered by Delta ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-brass-deep">Powered by Delta</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                Already funding with Delta? <em>You&rsquo;re halfway there.</em>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-ink">
                Delta Litigation Support is built on the same relationships, the same case
                understanding, and the same team that powers Delta Legal Funding. Funding,
                litigation support, and demand services — one complete operational platform.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <div className="space-y-px border border-[var(--color-line)] bg-[var(--color-line)]">
                <Link
                  href="/attorney-funding"
                  className="group flex items-center gap-5 bg-paper p-6 transition-colors hover:bg-paper-2"
                >
                  <DeltaMark className="h-8 w-8 shrink-0 text-ink" />
                  <div>
                    <p className="font-display text-xl">Delta Legal Funding</p>
                    <p className="text-sm text-slate-ink">
                      Plaintiff funding — and case-by-case attorney funding
                    </p>
                  </div>
                  <span
                    className="ml-auto text-brass-deep opacity-0 transition-opacity group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
                <div className="flex items-center gap-5 bg-ink p-6 text-paper">
                  <DeltaMark className="h-8 w-8 shrink-0 text-paper" />
                  <div>
                    <p className="font-display text-xl">Delta Litigation Support</p>
                    <p className="text-sm text-mist">Operations from intake to settlement</p>
                  </div>
                </div>
                <div className="flex items-center gap-5 bg-paper p-6">
                  <DeltaMark className="h-8 w-8 shrink-0 text-ink" />
                  <div>
                    <p className="font-display text-xl">Delta Demands</p>
                    <p className="text-sm text-slate-ink">Attorney-ready demand packages</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
