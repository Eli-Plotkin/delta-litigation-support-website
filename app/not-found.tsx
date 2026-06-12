import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="delta-field bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start px-6 py-40">
        <p className="eyebrow text-brass">404</p>
        <h1 className="font-display mt-6 max-w-2xl text-5xl leading-[1.05] sm:text-6xl">
          This page settled out of court.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link href="/" className="btn btn-brass mt-10">
          Back to Home
          <span className="btn-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>
    </section>
  )
}
