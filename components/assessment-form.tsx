'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export function AssessmentForm() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: { preventDefault(): void; currentTarget: HTMLFormElement }) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus('sending')
    setErrorMessage('')

    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data.entries())),
      })
      if (res.ok) {
        setStatus('sent')
        return
      }
      const payload = (await res.json().catch(() => null)) as { error?: string } | null
      setErrorMessage(payload?.error ?? 'Something went wrong sending your request.')
      setStatus('error')
    } catch {
      setErrorMessage('Something went wrong sending your request.')
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="border border-[var(--color-line)] bg-white p-10 text-center">
        <p className="font-display text-3xl">Request received.</p>
        <p className="mt-4 text-sm leading-relaxed text-slate-ink">
          Thanks — your assessment request is in our inbox. We&rsquo;ll reply within one business
          day to schedule your 15 minutes.
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

      {/* Honeypot — hidden from humans, bots fill it and get silently dropped */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === 'error' && (
        <p className="border border-[var(--color-line)] bg-paper-2/60 p-4 text-sm leading-relaxed text-slate-ink">
          {errorMessage} You can also reach us directly at{' '}
          <a href={`mailto:${SITE.contactEmail}`} className="text-brass-deep underline">
            {SITE.contactEmail}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn btn-brass w-full justify-center disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending…' : 'Request My Assessment'}
        {status !== 'sending' && (
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        )}
      </button>
    </form>
  )
}
