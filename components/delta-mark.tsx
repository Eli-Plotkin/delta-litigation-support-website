/**
 * The Delta two-triangle mark, after the original Delta Legal Funding logo:
 * a continuous outlined triangle (currentColor — paper on ink, ink on paper)
 * with a solid brass triangle nested against its base, offset right of
 * center with its right edge parallel to the outline.
 */
export function DeltaMark({ className = 'h-8 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 104" fill="none" className={className} aria-hidden="true">
      <path d="M60 14 L106 88 L14 88 Z" stroke="currentColor" strokeWidth="9" />
      <path d="M72 50 L93 84 L54 84 Z" fill="var(--color-brass)" />
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
