/**
 * Recreation of the original Delta Legal Funding triangle mark, recolored to
 * the site palette: primary strokes follow currentColor (ink on paper, paper
 * on ink), the solid inner triangle + bottom-right corner segment are brass.
 * The angled gaps between strokes are intentional — they mirror the cut
 * joints in the original logo.
 */
export function DeltaMark({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 100" fill="none" className={className} aria-hidden="true">
      {/* left edge + thin parallel accent line */}
      <path d="M12 88 L60 9" stroke="currentColor" strokeWidth="9" />
      <path d="M27 50 L53 7" stroke="currentColor" strokeWidth="2.5" />
      {/* upper segment of the right edge */}
      <path d="M62 12 L82 46" stroke="currentColor" strokeWidth="9" />
      {/* base */}
      <path d="M22 84.5 L79 84.5" stroke="currentColor" strokeWidth="9" />
      {/* solid inner triangle */}
      <path d="M72 41 L93 80 L56 80 Z" fill="var(--color-brass)" />
      {/* bottom-right corner segment, mitered to the right edge angle */}
      <path d="M82 80 L102.6 80 L108 89 L82 89 Z" fill="var(--color-brass)" />
    </svg>
  )
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <DeltaMark className={`h-9 w-auto ${light ? 'text-paper' : 'text-ink'}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.25rem] leading-none font-bold tracking-[-0.01em] ${light ? 'text-paper' : 'text-ink'}`}
        >
          Delta
        </span>
        <span className="eyebrow mt-1 text-[0.52rem] tracking-[0.26em] text-brass">
          Litigation Support
        </span>
      </span>
    </span>
  )
}
