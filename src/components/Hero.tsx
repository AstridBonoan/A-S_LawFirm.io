export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-950 text-parchment"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(184,149,106,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(21,58,92,0.6), transparent 50%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass-light">
          New York corporate counsel
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Help your business thrive —{' '}
          <span className="text-brass-light">with counsel built for growth</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-parchment/85 md:text-xl">
          A&amp;S Law advises founders, executives, and boards on entity structure,
          day-to-day corporate matters, and complex transactions — so you can
          focus on building value while staying compliant with New York and
          federal law.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex rounded-sm bg-brass px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-sm transition-opacity hover:opacity-90"
          >
            Request a consultation
          </a>
          <a
            href="#practice"
            className="inline-flex rounded-sm border border-parchment/40 px-6 py-3.5 text-sm font-semibold text-parchment transition-colors hover:bg-parchment/10"
          >
            Explore practice areas
          </a>
        </div>
      </div>
    </section>
  )
}
