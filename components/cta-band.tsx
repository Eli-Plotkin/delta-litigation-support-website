import Link from 'next/link'
import { Reveal } from './reveal'

export function CtaBand() {
  return (
    <section className="delta-field bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <Reveal>
          <p className="eyebrow text-brass">The 15-minute question</p>
          <h2 className="font-display mx-auto mt-6 max-w-3xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            What would it cost to eliminate half your pre&#8209;litigation payroll?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-mist">
            Schedule a 15-minute operational assessment. We&rsquo;ll walk your current caseload,
            your staffing, and show you exactly what the Delta model would look like for your firm.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/contact" className="btn btn-brass">
              Schedule an Assessment
              <span className="btn-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link href="/savings-calculator" className="btn btn-outline-light">
              Calculate Your Savings
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
