import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { ServiceIcon } from '@/components/service-icon'
import { SERVICES, getService } from '@/lib/services'

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.subheadline,
  }
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const index = SERVICES.findIndex((s) => s.slug === service.slug)
  const prev = SERVICES[(index - 1 + SERVICES.length) % SERVICES.length]
  const next = SERVICES[(index + 1) % SERVICES.length]

  return (
    <>
      {/* Hero */}
      <section className="delta-field bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="eyebrow text-brass">Service {service.number}</span>
              <span className="rule-light w-10" />
              <span className="eyebrow text-mist">{service.stage}</span>
            </div>
            <h1 className="font-display mt-8 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
              {service.headline}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">{service.subheadline}</p>
            <div className="mt-10">
              <Link href="/contact" className="btn btn-brass">
                Schedule an Assessment
                <span className="btn-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Deliverables + benefits */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-brass-deep">What&rsquo;s included</p>
              <ul className="mt-8 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
                {service.deliverables.map((d, i) => (
                  <li key={d} className="flex items-baseline gap-5 py-4">
                    <span className="font-mono text-xs text-brass-deep">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base">{d}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <Reveal delay={120}>
              <div className="border border-[var(--color-line)] bg-paper-2/60 p-8">
                <ServiceIcon slug={service.slug} className="h-10 w-10 text-brass-deep" />
                <p className="eyebrow mt-8 text-slate-ink">The objective</p>
                <p className="font-display mt-3 text-2xl leading-snug">{service.objective}</p>
              </div>
              <div className="mt-8">
                <p className="eyebrow text-brass-deep">What your firm gets</p>
                <ul className="mt-5 space-y-4">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-4 text-base leading-relaxed">
                      <span className="font-mono mt-1 text-sm text-brass-deep" aria-hidden="true">
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Per-file structure module — identical across all seven service pages */}
      <section className="mx-auto max-w-6xl px-6 pb-20 sm:pb-28">
        <Reveal>
          <div className="delta-field bg-ink p-10 text-paper sm:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <h2 className="font-display text-3xl leading-snug sm:text-4xl">
                  Engaged per file. Documented per file. <em className="text-brass">Invoiced per file.</em>
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-mist">
                  This service is engaged on a specific case, performed against defined
                  deliverables, and supported by identifiable work product. Your firm receives a
                  per-file invoice for every engagement — never a lump-sum staffing bill.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <Link
                  href="/cost-recovery"
                  className="eyebrow inline-flex items-center gap-2 text-brass transition-colors hover:text-paper"
                >
                  How this supports cost recovery evaluation <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* White-label note */}
      <section className="border-y border-[var(--color-line)] bg-paper-2/50">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-display text-3xl leading-snug sm:text-4xl">
                  Your brand on every call. <em>Your name on every letter.</em>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-ink">
                  Delta operates as a seamless extension of your firm. Clients, providers, and
                  carriers experience your team — backed by our infrastructure.
                </p>
              </div>
              <div className="lg:col-span-4 lg:col-start-9">
                <Link href="/services" className="btn btn-outline-dark w-full justify-center">
                  View All Seven Services
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Prev / next */}
      <nav className="mx-auto max-w-6xl px-6 py-14" aria-label="More services">
        <div className="grid gap-px border border-[var(--color-line)] bg-[var(--color-line)] sm:grid-cols-2">
          <Link href={`/services/${prev.slug}`} className="group bg-paper p-8 transition-colors hover:bg-ink">
            <span className="eyebrow text-slate-ink group-hover:text-mist">← Previous · {prev.number}</span>
            <p className="font-display mt-3 text-2xl group-hover:text-paper">{prev.navName}</p>
          </Link>
          <Link
            href={`/services/${next.slug}`}
            className="group bg-paper p-8 transition-colors hover:bg-ink sm:text-right"
          >
            <span className="eyebrow text-slate-ink group-hover:text-mist">{next.number} · Next →</span>
            <p className="font-display mt-3 text-2xl group-hover:text-paper">{next.navName}</p>
          </Link>
        </div>
      </nav>

      <CtaBand />
    </>
  )
}
