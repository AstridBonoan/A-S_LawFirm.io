export function Hero() {
  return (
    <section
      id="top"
      className="relative box-border flex h-full min-h-0 flex-col justify-center overflow-hidden bg-ink-950 px-4 pb-4 pt-[4.5rem] text-on-inverse md:px-6 md:pb-5 md:pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-45"
        style={{
          backgroundImage:
            'radial-gradient(ellipse 75% 55% at 72% 18%, rgba(100,148,190,0.22), transparent 58%), radial-gradient(ellipse 45% 42% at 12% 78%, rgba(47,79,115,0.45), transparent 52%)',
        }}
      />
      <div className="relative z-[1] mx-auto w-full max-w-6xl">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-muted sm:mb-2 sm:text-xs sm:tracking-[0.2em]">
          New York metropolitan corporate counsel
        </p>
        <h1 className="font-display text-[clamp(1.45rem,1.35vw+1rem,2.55rem)] font-semibold leading-[1.1] tracking-tight lg:leading-[1.12]">
          Corporate and securities counsel for companies that are{' '}
          <span className="text-accent-muted">
            starting, scaling, or restructuring
          </span>
        </h1>
        <p className="mt-2 max-w-2xl text-sm leading-snug text-on-inverse/88 sm:mt-3 sm:text-base sm:leading-relaxed md:text-lg">
          Whether you are filing your first formation documents or preparing for
          a transformative financing, A&amp;S Law works alongside founders,
          in-house teams, and boards — with the same lifecycle-minded approach
          you would expect from a dedicated corporate practice.
        </p>
        <p className="mt-2 max-w-2xl text-xs font-medium leading-snug text-on-inverse sm:mt-2.5 sm:text-sm md:text-base">
          <a
            href="tel:+12125550100"
            className="text-accent-muted underline decoration-accent-muted/40 underline-offset-2 transition-colors hover:decoration-accent-muted sm:underline-offset-4"
          >
            Call (212) 555-0100
          </a>{' '}
          to request a consultation. We can help you understand how New York
          and federal rules apply to your operations before issues become
          crises.
        </p>
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3 md:mt-5">
          <a
            href="#contact"
            className="inline-flex rounded-sm bg-on-inverse px-4 py-2.5 text-xs font-semibold text-ink-950 shadow-sm transition-opacity hover:opacity-90 sm:px-5 sm:py-3 sm:text-sm"
          >
            Request a consultation
          </a>
          <a
            href="#corporate-securities"
            className="inline-flex rounded-sm border border-on-inverse/35 px-4 py-2.5 text-xs font-semibold text-on-inverse transition-colors hover:bg-on-inverse/8 sm:px-5 sm:py-3 sm:text-sm"
          >
            Read our corporate &amp; securities practice
          </a>
        </div>
      </div>
    </section>
  )
}
