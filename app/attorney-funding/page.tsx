import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { DeltaMark } from '@/components/delta-mark'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'Attorney Funding',
  description:
    'Case-by-case capital for plaintiff law firms — independently underwritten, repaid at resolution, with no firm-level risk. Fund the case, then put the capital to work on it.',
}

const STEPS = [
  {
    title: 'Submit cases',
    desc: 'Send a list of eligible cases for review. Minimal documentation: retainer, client ID, and a police report or liability confirmation.',
  },
  {
    title: 'Fast underwriting',
    desc: 'Each case is evaluated individually, on its own merits. No firm financials, no portfolio entanglement.',
  },
  {
    title: 'Receive funding',
    desc: 'Capital deploys quickly, tied directly to each case — not to your practice.',
  },
  {
    title: 'Repayment at resolution',
    desc: 'Each advance is repaid only when that case settles. Cases stand alone: one outcome never encumbers another.',
  },
]

const FLYWHEEL = [
  {
    title: 'Capital attaches to the file',
    desc: 'Delta advances against an individual case — independently underwritten, with no personal guarantees and no liens across your practice.',
  },
  {
    title: 'Operations attach to the same file',
    desc: 'Deploy that capital on Delta’s litigation support services — intake, treatment coordination, records, chronologies, demands. Every service is engaged on the file, documented, and invoiced per file.',
  },
  {
    title: 'Everything resolves at settlement',
    desc: 'The advance is repaid when the case resolves. And because every service was engaged per file with documented work product, your firm has the structure it needs to evaluate expense treatment with its counsel.',
  },
]

const WHY = [
  {
    title: 'No firm-level risk',
    desc: 'No personal guarantees. No UCC filings. No cross-collateralization. Your practice stays unencumbered.',
  },
  {
    title: 'True case-by-case',
    desc: 'Every case lives independently — one file’s outcome never exposes another.',
  },
  {
    title: 'Deep MVA expertise',
    desc: 'Specialized in motor vehicle and commercial MVA cases — the same cases our litigation support team works every day.',
  },
  {
    title: 'Fast turnaround',
    desc: 'Predictable underwriting and reliable funding timelines, so you can plan around real dates.',
  },
  {
    title: 'Minimal documentation',
    desc: 'Retainer, client ID, and a police report or liability confirmation. That’s the list.',
  },
  {
    title: 'Aligned incentives',
    desc: 'We’re repaid when your case resolves — and when our team also works the file, we’re doubly invested in keeping it moving.',
  },
]

const USES = [
  {
    title: 'Scale marketing',
    desc: 'Fund client acquisition and grow signed-case volume without starving active files.',
  },
  {
    title: 'Cover case costs',
    desc: 'Experts, depositions, records, filing fees — pay for case development when the case needs it.',
  },
  {
    title: 'Strengthen retention',
    desc: 'Well-resourced cases keep clients engaged, treating, and confident in your firm.',
  },
  {
    title: 'Maintain leverage',
    desc: 'Never take an early, low offer because of cash pressure. Resolve on the merits.',
  },
]

const FIT = [
  {
    title: 'Plaintiff PI firms',
    desc: 'Practices with motor vehicle and commercial MVA cases as a core focus.',
  },
  {
    title: 'Growth-stage practices',
    desc: 'Firms scaling signed-case volume without taking on traditional debt.',
  },
  {
    title: 'Liquidity-focused operators',
    desc: 'Teams that want predictable, case-based access to capital — not another credit line.',
  },
]

export default function AttorneyFundingPage() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="delta-field relative overflow-hidden bg-ink text-paper">
        <DeltaMark className="pointer-events-none absolute -right-24 -bottom-40 h-[34rem] w-[34rem] text-paper opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <Reveal>
            <p className="eyebrow text-brass">Attorney funding · Not traditional financing</p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.04] sm:text-6xl lg:text-7xl">
              Capital that works like your cases do. <em className="text-brass">One file at a time.</em>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Delta funds plaintiff firms on a case-by-case basis — no debt on your balance sheet,
              no dilution, no firm-level risk. Each advance is independently underwritten, attached
              to a single case, and repaid only when that case resolves.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-brass">
                Build Your Funding Program
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <a href="#how-it-works" className="btn btn-outline-light">
                See How It Works
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <div className="mt-20 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-[var(--color-line-light)] pt-8">
              {['Independently underwritten', 'No personal guarantees', 'Repaid at resolution'].map(
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

      {/* ---------- How it works ---------- */}
      <section id="how-it-works" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow text-brass-deep">How it works</p>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
            Simple. Predictable. <em>Scalable.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
          {STEPS.map((step, i) => (
            <div key={step.title} className="bg-paper p-10">
              <Reveal delay={(i % 2) * 80}>
                <span className="font-mono text-xs text-brass-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-ink">{step.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- The flywheel ---------- */}
      <section className="delta-field bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow text-brass">Where capital meets operations</p>
            <h2 className="font-display mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl">
              Fund the case. Work the case. <em className="text-brass">Resolve the case.</em>
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-mist">
              Funding alone buys breathing room. Funding plus operations changes the economics of
              your practice. Because Delta provides both, the same platform that advances capital
              against a case can put that capital to work on it.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-px border border-[var(--color-line-light)] bg-[var(--color-line-light)] lg:grid-cols-3">
            {FLYWHEEL.map((item, i) => (
              <div key={item.title} className="bg-ink p-10">
                <Reveal delay={i * 100}>
                  <span className="font-mono text-xs text-brass">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display mt-4 text-2xl leading-snug">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{item.desc}</p>
                </Reveal>
              </div>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mist">
              Whether any litigation support expense may be treated as a case-specific expense is a
              determination your firm makes with its counsel — Delta provides the per-file
              structure and the paper trail.{' '}
              <Link href="/cost-recovery" className="text-brass underline hover:text-paper">
                Explore the Cost Recovery Framework
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why Delta ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <Reveal>
          <p className="eyebrow text-brass-deep">Why Delta</p>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
            Built for plaintiff firms. <em>By people in your cases every day.</em>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map((item, i) => (
            <div key={item.title} className="bg-paper p-8">
              <Reveal delay={(i % 3) * 60}>
                <span className="font-mono text-xs text-brass-deep">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display mt-4 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-ink">{item.desc}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- What firms use it for ---------- */}
      <section className="border-y border-[var(--color-line)] bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow text-brass-deep">What firms use it for</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
              Capital that fuels growth <em>at every stage.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <div className="delta-field flex h-full flex-col justify-between bg-ink p-10 text-paper">
                <div>
                  <span className="eyebrow text-brass">The Delta move</span>
                  <h3 className="font-display mt-5 text-3xl leading-snug">
                    Power your per-file operations.
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-mist">
                    Deploy funding on Delta&rsquo;s litigation support services — so the capital,
                    the work, and the documentation all attach to the same case. Your firm builds
                    operational capacity without adding a dollar of payroll.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="eyebrow mt-8 inline-flex items-center gap-2 text-brass hover:text-paper"
                >
                  See the Seven Services <span aria-hidden="true">→</span>
                </Link>
              </div>
            </Reveal>
            <div className="grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2 lg:col-span-7">
              {USES.map((item, i) => (
                <div key={item.title} className="bg-paper p-8">
                  <Reveal delay={(i % 2) * 70}>
                    <h3 className="font-display text-xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-ink">{item.desc}</p>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Right fit ---------- */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass-deep">Is Delta the right fit?</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                Our program is built for <em>operators.</em>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-ink">
                Whether you&rsquo;re funding a small batch of cases or scaling a large portfolio,
                the structure is the same — and it starts with a conversation about your caseload.
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
              {FIT.map((item, i) => (
                <li key={item.title}>
                  <Reveal delay={i * 70}>
                    <div className="flex items-baseline gap-6 py-6">
                      <span className="font-mono text-xs text-brass-deep">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <p className="font-display text-2xl">{item.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-ink">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <Reveal delay={200}>
              <p className="mt-8 text-xs leading-relaxed text-slate-ink">
                Attorney funding is provided through Delta Legal Funding. All advances are subject
                to underwriting and applicable law; structures and terms vary by case and
                jurisdiction. Nothing on this page is legal or financial advice.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
