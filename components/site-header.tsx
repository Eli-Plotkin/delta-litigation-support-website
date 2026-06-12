'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Wordmark } from './delta-mark'

const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/cost-recovery', label: 'Cost Recovery' },
  { href: '/savings-calculator', label: 'Savings Calculator' },
  { href: '/about', label: 'About' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line-light)] bg-ink/95 backdrop-blur-sm">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Delta Litigation Support — home">
          <Wordmark light />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`eyebrow transition-colors ${
                  active ? 'text-brass' : 'text-mist hover:text-paper'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/contact" className="btn btn-brass !px-5 !py-3">
            Schedule an Assessment
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span
            className={`block h-px w-6 bg-paper transition-transform ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`block h-px w-6 bg-paper transition-transform ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav
          className="fixed inset-x-0 top-[72px] bottom-0 z-40 flex flex-col gap-2 bg-ink px-6 pt-8 lg:hidden"
          aria-label="Mobile"
        >
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display border-b border-[var(--color-line-light)] py-5 text-3xl text-paper"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-brass mt-8 justify-center">
            Schedule an Assessment
          </Link>
        </nav>
      )}
    </header>
  )
}
