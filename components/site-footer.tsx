import Link from 'next/link'
import { SERVICES } from '@/lib/services'
import { DISCLAIMER, SITE } from '@/lib/site'
import { DeltaMark } from './delta-mark'

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <DeltaMark className="h-10 w-10 text-paper" />
            <p className="font-display mt-6 max-w-xs text-2xl leading-snug">
              The operational backbone of the modern plaintiff law firm.
            </p>
            <a
              href={`mailto:${SITE.contactEmail}`}
              className="eyebrow mt-8 inline-block text-brass hover:text-paper"
            >
              {SITE.contactEmail}
            </a>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <p className="eyebrow text-mist">Services</p>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-paper/80 transition-colors hover:text-brass"
                  >
                    {s.navName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-mist">Company</p>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/attorney-funding"
                  className="text-sm text-paper/80 transition-colors hover:text-brass"
                >
                  Attorney Funding
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-paper/80 transition-colors hover:text-brass">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/cost-recovery"
                  className="text-sm text-paper/80 transition-colors hover:text-brass"
                >
                  Cost Recovery
                </Link>
              </li>
              <li>
                <Link
                  href="/savings-calculator"
                  className="text-sm text-paper/80 transition-colors hover:text-brass"
                >
                  Savings Calculator
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-paper/80 transition-colors hover:text-brass">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow text-mist">Delta Platform</p>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={SITE.parentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-paper/80 transition-colors hover:text-brass"
                >
                  Delta Legal Funding ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="rule-light mt-16" />

        <p className="mt-8 max-w-4xl text-xs leading-relaxed text-mist/80">{DISCLAIMER}</p>

        <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="eyebrow text-mist/60">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <p className="eyebrow text-mist/60">Intake through settlement</p>
        </div>
      </div>
    </footer>
  )
}
