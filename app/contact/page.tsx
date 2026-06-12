import type { Metadata } from 'next'
import { AssessmentForm } from '@/components/assessment-form'
import { Reveal } from '@/components/reveal'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Schedule an Assessment',
  description:
    'Schedule a 15-minute operational assessment. We’ll walk your caseload and staffing and show you what the Delta model looks like for your firm.',
}

const STEPS = [
  {
    title: 'A 15-minute call',
    desc: 'We walk through your caseload, your staffing, your engagement agreements, and where files get stuck.',
  },
  {
    title: 'An operational snapshot',
    desc: 'You see exactly which disciplines fit your firm — one service or all seven.',
  },
  {
    title: 'A real number',
    desc: 'A side-by-side of your current payroll model versus the Delta model. No pressure, no retainer.',
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="delta-field bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Reveal>
            <p className="eyebrow text-brass">Schedule an assessment</p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
              Fifteen minutes. <em className="text-brass">One honest number.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Tell us a little about your firm and we&rsquo;ll schedule a 15-minute operational
              assessment — a straight look at what your pre-litigation operations cost today and
              what they could look like with Delta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-brass-deep">What to expect</p>
              <ul className="mt-8 space-y-8">
                {STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span className="font-mono text-sm text-brass-deep">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="font-display text-xl">{step.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-ink">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="rule mt-10" />
              <p className="mt-8 text-sm text-slate-ink">
                Prefer email?{' '}
                <a href={`mailto:${SITE.contactEmail}`} className="text-brass-deep underline">
                  {SITE.contactEmail}
                </a>
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={120}>
              <AssessmentForm />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
