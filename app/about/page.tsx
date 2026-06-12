import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { DeltaMark } from '@/components/delta-mark'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About',
  description:
    'We believe plaintiff firms should focus on practicing law. Delta handles the operational burden so attorneys can focus on advocacy.',
}

const NOT_THIS = [
  'Chasing records',
  'Tracking appointments',
  'Following up with providers',
  'Building demands',
]

export default function AboutPage() {
  return (
    <>
      {/* Manifesto hero */}
      <section className="delta-field relative overflow-hidden bg-ink text-paper">
        <DeltaMark className="pointer-events-none absolute -right-20 -top-32 h-[28rem] w-[28rem] text-paper opacity-[0.04]" />
        <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <Reveal>
            <p className="eyebrow text-brass">Our mission</p>
            <h1 className="font-display mt-8 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              We believe plaintiff firms should focus on <em className="text-brass">practicing law.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Not this */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass-deep">Not this</p>
              <ul className="mt-8 space-y-1">
                {NOT_THIS.map((item, i) => (
                  <li key={item}>
                    <Reveal delay={i * 80}>
                      <p className="font-display border-b border-[var(--color-line)] py-4 text-3xl text-slate-ink/70 line-through decoration-brass-deep/60 decoration-1 sm:text-4xl">
                        {item}
                      </p>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={150}>
              <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl">
                We handle the operational burden so attorneys can focus on <em>advocacy.</em>
              </h2>
              <p className="mt-8 text-base leading-relaxed text-slate-ink">
                The best plaintiff lawyers we know didn&rsquo;t go to law school to manage staffing
                plans, chase medical records, or babysit treatment calendars. But somewhere along
                the way, running a PI firm became an operations job — and the legal work started
                competing with the logistics.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-ink">
                Delta Litigation Support exists to take that burden off the firm. Not by renting
                you bodies, but by delivering defined services on specific files — intake,
                treatment coordination, records, chronologies, demands, liens, and settlement
                administration — all under your firm&rsquo;s brand.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-ink">
                Our goal isn&rsquo;t to be another vendor. It&rsquo;s to be the operational backbone
                of the modern plaintiff law firm.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How we're built */}
      <section className="border-y border-[var(--color-line)] bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <Reveal>
            <p className="eyebrow text-brass-deep">How we&rsquo;re built</p>
            <h2 className="font-display mt-6 max-w-2xl text-4xl leading-[1.08] sm:text-5xl">
              One seamless team, <em>under your brand.</em>
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] lg:grid-cols-3">
            <Reveal>
              <div className="h-full bg-paper p-10">
                <span className="font-mono text-xs text-brass-deep">01</span>
                <h3 className="font-display mt-4 text-2xl">U.S.-based leadership</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                  Client success, attorney communication, quality assurance, demand review, and
                  escalation management — handled stateside by people who know PI practice.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="h-full bg-paper p-10">
                <span className="font-mono text-xs text-brass-deep">02</span>
                <h3 className="font-display mt-4 text-2xl">Global execution team</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                  Trained specialists handling intake, treatment coordination, records retrieval,
                  chronologies, demand assembly, lien support, and settlement administration.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="delta-field h-full bg-ink p-10 text-paper">
                <span className="font-mono text-xs text-brass">03</span>
                <h3 className="font-display mt-4 text-2xl">Your firm&rsquo;s brand</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">
                  Clients and providers experience one integrated team operating under your
                  firm&rsquo;s name. The infrastructure is ours; the relationship is yours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Roots */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-brass-deep">Where we come from</p>
              <h2 className="font-display mt-6 text-4xl leading-[1.08] sm:text-5xl">
                Born inside the <em>Delta platform.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={100}>
              <p className="text-base leading-relaxed text-slate-ink">
                Delta Litigation Support grew out of Delta Legal Funding&rsquo;s work alongside
                plaintiff firms nationwide. Years of funding cases gave us an unusual vantage
                point: we watched the same operational bottlenecks slow down case after case, firm
                after firm.
              </p>
              <p className="mt-4 text-base leading-relaxed text-slate-ink">
                So we built the department firms kept needing — and made it available on a per-file
                basis. Capital, operations, and demand preparation, from one platform that already
                understands your cases.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
