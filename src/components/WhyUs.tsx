const pillars = [
  {
    title: 'Relationship-first service',
    body: 'We invest in long-term partnerships with operators who value direct access to experienced counsel — not rotating junior teams.',
  },
  {
    title: 'Business fluency',
    body: 'Our advice is grounded in how deals, cap tables, and boards actually work, so guidance is actionable in the boardroom and on closing calls.',
  },
  {
    title: 'Transparent engagement',
    body: 'Clear scopes, predictable cadence, and pragmatic fee arrangements designed for growing companies and closely held enterprises.',
  },
] as const

export function WhyUs() {
  return (
    <section id="about" className="scroll-mt-24 bg-navy-900 py-20 text-parchment md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          What sets A&amp;S Law apart
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-parchment/85">
          We combine the depth you expect from a corporate practice with the
          responsiveness of a dedicated advisory team — a model shaped by firms
          that counsel entrepreneurs and middle-market leaders every day.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-brass/40 pt-6">
              <h3 className="font-display text-xl font-semibold text-brass-light">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-parchment/80">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
