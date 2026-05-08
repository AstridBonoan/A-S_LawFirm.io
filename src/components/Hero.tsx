export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-ink-950 text-on-inverse"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 75% 55% at 72% 18%, rgba(100,148,190,0.22), transparent 58%), radial-gradient(ellipse 45% 42% at 12% 78%, rgba(47,79,115,0.45), transparent 52%)',
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:px-6 md:py-28">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-muted">
          New York metropolitan corporate counsel
        </p>
        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
          Corporate and securities counsel for companies that are{' '}
          <span className="text-accent-muted">starting, scaling, or restructuring</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-inverse/88 md:text-xl">
          Whether you are filing your first formation documents or preparing for
          a transformative financing, A&amp;S Law works alongside founders,
          in-house teams, and boards — with the same lifecycle-minded approach
          you would expect from a dedicated corporate practice.
        </p>
        <p className="mt-5 max-w-2xl text-base font-medium leading-relaxed text-on-inverse md:text-lg">
          <a
            href="tel:+12125550100"
            className="text-accent-muted underline decoration-accent-muted/40 underline-offset-4 transition-colors hover:decoration-accent-muted"
          >
            Call (212) 555-0100
          </a>{' '}
          to request a consultation. We can help you understand how New York
          and federal rules apply to your operations before issues become
          crises.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex rounded-sm bg-on-inverse px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-sm transition-opacity hover:opacity-90"
          >
            Request a consultation
          </a>
          <a
            href="#corporate-securities"
            className="inline-flex rounded-sm border border-on-inverse/35 px-6 py-3.5 text-sm font-semibold text-on-inverse transition-colors hover:bg-on-inverse/8"
          >
            Read our corporate &amp; securities practice
          </a>
        </div>
      </div>
    </section>
  )
}
