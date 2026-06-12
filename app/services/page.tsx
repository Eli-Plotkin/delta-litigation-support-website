import type { Metadata } from 'next'
import Link from 'next/link'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { ServiceIcon } from '@/components/service-icon'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Seven litigation support disciplines for plaintiff law firms — intake, treatment coordination, records retrieval, chronologies, demand preparation, lien resolution, and settlement administration.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="delta-field bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Reveal>
            <p className="eyebrow text-brass">Services</p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
              The full pre-litigation pipeline. <em className="text-brass">One partner.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Seven defined disciplines, engaged individually or as a complete operations
              department — every one tied to specific files and supported by documented work
              product, delivered under your firm&rsquo;s brand.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="space-y-px border-y border-[var(--color-line)]">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={Math.min(i * 50, 200)}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid items-center gap-6 border-b border-[var(--color-line)] py-10 transition-colors last:border-b-0 sm:grid-cols-12"
              >
                <div className="flex items-center gap-6 sm:col-span-5">
                  <span className="font-mono text-sm text-brass-deep">{s.number}</span>
                  <ServiceIcon slug={s.slug} className="h-8 w-8 shrink-0 text-slate-ink transition-colors group-hover:text-brass-deep" />
                  <h2 className="font-display text-2xl transition-colors group-hover:text-brass-deep sm:text-3xl">
                    {s.navName}
                  </h2>
                </div>
                <p className="text-sm leading-relaxed text-slate-ink sm:col-span-4">{s.short}</p>
                <div className="sm:col-span-3 sm:text-right">
                  <span className="eyebrow inline-flex items-center gap-2 text-brass-deep">
                    <span className="hidden sm:inline">{s.stage}</span>
                    <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
