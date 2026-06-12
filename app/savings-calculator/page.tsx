import type { Metadata } from 'next'
import { CtaBand } from '@/components/cta-band'
import { Reveal } from '@/components/reveal'
import { SavingsCalculator } from '@/components/savings-calculator'

export const metadata: Metadata = {
  title: 'Savings Calculator',
  description:
    'Estimate what your firm spends on pre-litigation payroll today — and what the Delta model would cost instead.',
}

export default function SavingsCalculatorPage() {
  return (
    <>
      <section className="delta-field bg-ink text-paper">
        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
          <Reveal>
            <p className="eyebrow text-brass">Savings calculator</p>
            <h1 className="font-display mt-6 max-w-3xl text-5xl leading-[1.05] sm:text-6xl">
              What does your pre-litigation department <em className="text-brass">actually cost?</em>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mist">
              Salaries are only the start — add payroll taxes, benefits, software seats, training,
              and turnover. Slide in your numbers and compare against the Delta model.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <SavingsCalculator />
      </section>

      <CtaBand />
    </>
  )
}
