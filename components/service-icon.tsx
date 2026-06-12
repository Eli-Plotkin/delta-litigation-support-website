const PATHS: Record<string, React.ReactNode> = {
  // clipboard + check — intake
  'intake-onboarding': (
    <>
      <rect x="7" y="5" width="18" height="23" rx="1.5" />
      <path d="M12 5h8v3h-8z" />
      <path d="M12 14l3 3 6-6" />
      <path d="M12 22h9" />
    </>
  ),
  // calendar + pulse — treatment
  'treatment-coordination': (
    <>
      <rect x="5" y="7" width="22" height="20" rx="1.5" />
      <path d="M5 13h22" />
      <path d="M11 5v4M21 5v4" />
      <path d="M9 20h4l2-4 3 7 2-3h4" />
    </>
  ),
  // stacked documents — records
  'medical-records': (
    <>
      <path d="M9 9V5.5A1.5 1.5 0 0 1 10.5 4H23l4 4v15.5a1.5 1.5 0 0 1-1.5 1.5H23" />
      <rect x="5" y="9" width="18" height="19" rx="1.5" />
      <path d="M9 16h10M9 20h10M9 24h6" />
    </>
  ),
  // timeline — chronology
  'medical-chronologies': (
    <>
      <path d="M6 16h20" />
      <circle cx="10" cy="16" r="2.5" />
      <circle cx="18" cy="16" r="2.5" />
      <circle cx="26" cy="16" r="2.5" />
      <path d="M10 13.5V8h6M18 18.5V24h6" />
    </>
  ),
  // document + seal — demand
  'demand-preparation': (
    <>
      <path d="M7 4h13l5 5v19H7z" />
      <path d="M20 4v5h5" />
      <circle cx="16" cy="17" r="3.5" />
      <path d="M14 20l-1.5 5 3.5-2 3.5 2-1.5-5" />
    </>
  ),
  // scales — liens
  'lien-resolution': (
    <>
      <path d="M16 5v22" />
      <path d="M8 9h16" />
      <path d="M8 9l-4 8h8l-4-8zM24 9l-4 8h8l-4-8z" />
      <path d="M11 27h10" />
    </>
  ),
  // handshake / closing — settlement
  'settlement-administration': (
    <>
      <path d="M4 11l6-3 6 3 6-3 6 3" />
      <path d="M10 8v12l6 5 6-5V8" />
      <path d="M13 17l3 3 5-5" />
    </>
  ),
}

export function ServiceIcon({ slug, className = 'h-8 w-8' }: { slug: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[slug]}
    </svg>
  )
}
