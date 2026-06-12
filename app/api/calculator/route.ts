import { NextResponse } from 'next/server'

// Per-case service fees. Server-only on purpose: pricing isn't finalized, so
// these must never ship in a client bundle. Keep in sync with the service
// keys in components/savings-calculator.tsx.
const FEES: Record<string, number> = {
  intake: 150,
  treatment: 400,
  chronology: 350,
  demand: 1000,
  lien: 300,
  settlement: 300,
}

function clamp(n: number, min: number, max: number): number {
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : min
}

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const casesPerMonth = clamp(Number(body.casesPerMonth), 1, 200)
  const mix = Array.isArray(body.mix) ? body.mix.filter((k): k is string => typeof k === 'string') : []
  const perCase = mix.reduce((sum, key) => sum + (FEES[key] ?? 0), 0)

  return NextResponse.json({ annualDelta: Math.round(casesPerMonth * 12 * perCase) })
}
