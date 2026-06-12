export function DeltaMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" className={className} aria-hidden="true">
      <path d="M20 5 L36 33 H4 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M20 14 L29.5 30.5 H10.5 Z" fill="var(--color-brass)" stroke="none" />
    </svg>
  )
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <DeltaMark className={`h-7 w-7 ${light ? 'text-paper' : 'text-ink'}`} />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[1.05rem] tracking-[0.08em] ${light ? 'text-paper' : 'text-ink'}`}
        >
          DELTA
        </span>
        <span className="eyebrow mt-0.5 text-[0.5rem] tracking-[0.3em] text-brass">
          Litigation Support
        </span>
      </span>
    </span>
  )
}
