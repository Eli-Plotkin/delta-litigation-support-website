'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'

// Assumptions surfaced to the user in the panel below the results
const BURDEN_MULTIPLIER = 1.25 // payroll taxes, benefits, software seats, overhead

// Per-case service fees. Records retrieval is variable/pass-through, so it is
// excluded from the modeled mix and noted in the assumptions panel instead.
const SERVICE_MIX = [
  { key: 'intake', label: 'Intake & Onboarding', fee: 150 },
  { key: 'treatment', label: 'Treatment Coordination', fee: 400 },
  { key: 'chronology', label: 'Medical Chronology', fee: 350 },
  { key: 'demand', label: 'Demand Preparation', fee: 1000 },
  { key: 'lien', label: 'Lien Resolution', fee: 300 },
  { key: 'settlement', label: 'Settlement Administration', fee: 300 },
] as const

type ServiceKey = (typeof SERVICE_MIX)[number]['key']

function money(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

type Inputs = {
  casesPerMonth: number
  caseManagers: number
  intakeStaff: number
  demandWriters: number
  avgSalary: number
}

const FIELDS: {
  key: keyof Inputs
  label: string
  min: number
  max: number
  step: number
  format?: (n: number) => string
}[] = [
  { key: 'casesPerMonth', label: 'New cases signed per month', min: 1, max: 200, step: 1 },
  { key: 'caseManagers', label: 'Case managers on payroll', min: 0, max: 30, step: 1 },
  { key: 'intakeStaff', label: 'Intake staff on payroll', min: 0, max: 20, step: 1 },
  { key: 'demandWriters', label: 'Demand writers on payroll', min: 0, max: 20, step: 1 },
  {
    key: 'avgSalary',
    label: 'Average base salary',
    min: 35000,
    max: 120000,
    step: 2500,
    format: money,
  },
]

export function SavingsCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    casesPerMonth: 10,
    caseManagers: 3,
    intakeStaff: 1,
    demandWriters: 1,
    avgSalary: 60000,
  })
  const [mix, setMix] = useState<Record<ServiceKey, boolean>>({
    intake: true,
    treatment: true,
    chronology: true,
    demand: true,
    lien: true,
    settlement: true,
  })

  const perCase = useMemo(
    () => SERVICE_MIX.reduce((sum, s) => sum + (mix[s.key] ? s.fee : 0), 0),
    [mix]
  )

  const results = useMemo(() => {
    const headcount = inputs.caseManagers + inputs.intakeStaff + inputs.demandWriters
    const annualPayroll = Math.round(headcount * inputs.avgSalary * BURDEN_MULTIPLIER)
    const annualDelta = inputs.casesPerMonth * 12 * perCase
    const savings = annualPayroll - annualDelta
    return { headcount, annualPayroll, annualDelta, savings }
  }, [inputs, perCase])

  const maxBar = Math.max(results.annualPayroll, results.annualDelta, 1)

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Inputs */}
      <div className="space-y-8">
        <div>
          <p className="eyebrow text-brass-deep">Your firm today</p>
          <div className="mt-6 space-y-8">
            {FIELDS.map((f) => (
              <div key={f.key}>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor={f.key} className="field-label">
                    {f.label}
                  </label>
                  <span className="font-mono text-lg font-medium text-ink">
                    {f.format ? f.format(inputs[f.key]) : inputs[f.key]}
                  </span>
                </div>
                <input
                  id={f.key}
                  type="range"
                  min={f.min}
                  max={f.max}
                  step={f.step}
                  value={inputs[f.key]}
                  onChange={(e) => setInputs({ ...inputs, [f.key]: Number(e.target.value) })}
                  className="mt-3 w-full accent-[var(--color-brass-deep)]"
                />
                <div className="mt-1 flex justify-between font-mono text-[0.625rem] text-slate-ink/60">
                  <span>{f.format ? f.format(f.min) : f.min}</span>
                  <span>{f.format ? f.format(f.max) : f.max}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-brass-deep">Services you&rsquo;d engage</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-ink">
            Most firms engage by discipline — toggle the services that fit how your firm works.
          </p>
          <ul className="mt-5 divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
            {SERVICE_MIX.map((s) => (
              <li key={s.key}>
                <label className="flex cursor-pointer items-center gap-3 py-3.5">
                  <input
                    type="checkbox"
                    checked={mix[s.key]}
                    onChange={(e) => setMix({ ...mix, [s.key]: e.target.checked })}
                    className="h-4 w-4 accent-[var(--color-brass-deep)]"
                  />
                  <span className="text-sm">{s.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Results */}
      <div className="lg:sticky lg:top-24 lg:self-start">
        <div className="border border-[var(--color-line)] bg-white p-8 sm:p-10">
          <p className="eyebrow text-brass-deep">Your estimate</p>

          <dl className="mt-8 space-y-7">
            <div>
              <dt className="text-sm text-slate-ink">
                Estimated annual payroll · {results.headcount}{' '}
                {results.headcount === 1 ? 'employee' : 'employees'}
              </dt>
              <dd className="font-display mt-1 text-4xl">{money(results.annualPayroll)}</dd>
              <div className="mt-2 h-2 w-full bg-paper-2">
                <div
                  className="h-2 bg-slate-ink transition-all duration-500"
                  style={{ width: `${(results.annualPayroll / maxBar) * 100}%` }}
                />
              </div>
            </div>

            <div>
              <dt className="text-sm text-slate-ink">Estimated Delta model cost</dt>
              <dd className="font-display mt-1 text-4xl">{money(results.annualDelta)}</dd>
              <div className="mt-2 h-2 w-full bg-paper-2">
                <div
                  className="h-2 bg-brass transition-all duration-500"
                  style={{ width: `${(results.annualDelta / maxBar) * 100}%` }}
                />
              </div>
            </div>

            <div className="rule" />

            <div>
              <dt className="text-sm text-slate-ink">
                {results.savings >= 0 ? 'Potential annual savings' : 'Estimated annual difference'}
              </dt>
              <dd
                className={`font-display mt-1 text-5xl ${
                  results.savings >= 0 ? 'text-brass-deep' : 'text-ink'
                }`}
              >
                {money(Math.abs(results.savings))}
              </dd>
              {results.savings < 0 && (
                <p className="mt-3 text-sm leading-relaxed text-slate-ink">
                  At this volume and mix, Delta costs more than your current payroll on a gross
                  basis — but it converts fixed overhead into per-file services that scale down as
                  well as up. Try adjusting the service mix to the disciplines you&rsquo;d actually
                  hand off.
                </p>
              )}
            </div>
          </dl>

          <p className="mt-8 border-t border-[var(--color-line)] pt-6 text-xs leading-relaxed text-slate-ink">
            This calculator compares staffing costs only. It does not estimate, assume, or project
            any recovery of litigation support expenses. Whether any expense may be treated as
            case-specific depends on applicable law, ethics rules, and your firm&rsquo;s engagement
            agreements, and should be evaluated by your firm and its counsel.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-slate-ink">
            Curious how per-file invoicing supports that evaluation?{' '}
            <Link href="/cost-recovery" className="text-brass-deep underline">
              Explore the cost recovery framework
            </Link>
            .
          </p>

          <Link href="/contact" className="btn btn-ink mt-8 w-full justify-center">
            Get an Exact Number
            <span className="btn-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

        <div className="mt-6 border border-[var(--color-line)] bg-paper-2/60 p-6">
          <p className="eyebrow text-slate-ink">Assumptions</p>
          <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-ink">
            <li>
              Payroll includes a {Math.round((BURDEN_MULTIPLIER - 1) * 100)}% burden for taxes,
              benefits, and overhead on top of base salary.
            </li>
            <li>
              Delta cost assumes the selected service mix on every new case. In practice, cases
              that resolve early consume fewer services.
            </li>
            <li>
              Medical records &amp; bills retrieval is billed at cost as a variable pass-through
              and isn&rsquo;t included in the modeled mix.
            </li>
            <li>These figures are estimates for discussion purposes only — not a quote.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
