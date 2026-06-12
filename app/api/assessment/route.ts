import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Best-effort per-IP rate limit. In-memory state resets on serverless cold
// starts, which is acceptable for a lead form — Gmail's own limits backstop it.
const submissions = new Map<string, number[]>()
const WINDOW_MS = 60 * 60 * 1000
const MAX_PER_WINDOW = 5

function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (submissions.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  if (recent.length >= MAX_PER_WINDOW) return true
  recent.push(now)
  submissions.set(ip, recent)
  return false
}

const MAX_FIELD = 200
const MAX_MESSAGE = 5000

export async function POST(request: Request) {
  const user = process.env.GMAIL_USER
  // App passwords are often copied with spaces ("abcd efgh ijkl mnop") — strip them.
  const pass = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, '')
  if (!user || !pass) {
    return NextResponse.json(
      { error: 'Email delivery is not configured.' },
      { status: 503 }
    )
  }
  const to = process.env.ASSESSMENT_TO_EMAIL || user

  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (rateLimited(ip)) {
    return NextResponse.json({ error: 'Too many requests. Try again later.' }, { status: 429 })
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }

  const field = (key: string, max = MAX_FIELD) =>
    typeof body[key] === 'string' ? (body[key] as string).trim().slice(0, max) : ''

  // Honeypot — bots fill it, humans never see it. Report success so bots move on.
  if (field('website')) {
    return NextResponse.json({ ok: true })
  }

  const name = field('name')
  const firm = field('firm')
  const email = field('email')
  const phone = field('phone')
  const volume = field('volume')
  const message = field('message', MAX_MESSAGE)

  if (!name || !firm || !email) {
    return NextResponse.json({ error: 'Name, firm, and email are required.' }, { status: 400 })
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 })
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  try {
    await transporter.sendMail({
      from: `"Delta Litigation Support" <${user}>`,
      to,
      replyTo: email,
      subject: `Assessment request — ${firm}`,
      text: [
        `Name: ${name}`,
        `Firm: ${firm}`,
        `Email: ${email}`,
        `Phone: ${phone || '—'}`,
        `New cases per month: ${volume || '—'}`,
        '',
        'Biggest operational bottleneck:',
        message || '—',
      ].join('\n'),
    })
  } catch (error) {
    console.error('Gmail SMTP error:', error)
    return NextResponse.json({ error: 'We couldn’t send your request.' }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
