'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'

export function AssessmentForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const subject = `Operational assessment request — ${data.get('firm')}`
    const body = [
      `Name: ${data.get('name')}`,
      `Firm: ${data.get('firm')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `New cases per month: ${data.get('volume')}`,
      '',
      `${data.get('message')}`,
    ].join('\n')
    window.location.href = `mailto:${SITE.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  if (sent) {
    return (
      <div className="border border-[var(--color-line)] bg-white p-10 text-center">
        <p className="font-display text-3xl">Almost there.</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-ink">
          Your email client should have opened with your assessment request. Just hit send —
          we&rsquo;ll reply within one business day. If it didn&rsquo;t open, email us directly at{' '}
          <a href={`mailto:${SITE.contactEmail}`} className="text-brass-deep underline">
            {SITE.contactEmail}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="field-label">
            Your name
          </label>
          <input id="name" name="name" required className="field-input mt-2" placeholder="Jane Smith" />
        </div>
        <div>
          <label htmlFor="firm" className="field-label">
            Firm name
          </label>
          <input
            id="firm"
            name="firm"
            required
            className="field-input mt-2"
            placeholder="Smith Injury Law"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field-input mt-2"
            placeholder="jane@smithinjurylaw.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="field-label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="field-input mt-2"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div>
        <label htmlFor="volume" className="field-label">
          New cases signed per month
        </label>
        <select id="volume" name="volume" className="field-input mt-2" defaultValue="10–25">
          <option>Under 10</option>
          <option>10–25</option>
          <option>25–50</option>
          <option>50–100</option>
          <option>100+</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="field-label">
          What&rsquo;s your biggest operational bottleneck?
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="field-input mt-2"
          placeholder="Treatment gaps, demand backlog, records turnaround…"
        />
      </div>

      <button type="submit" className="btn btn-brass w-full justify-center sm:w-auto">
        Request My Assessment
        <span className="btn-arrow" aria-hidden="true">
          →
        </span>
      </button>
    </form>
  )
}
