const pillars = [
  {
    title: 'Senior attention, start to finish',
    body: 'You work with lawyers who own the file — the same approach highlighted on sophisticated corporate practice pages where clients expect partner-level involvement on material decisions.',
  },
  {
    title: 'Built for operators, not just closings',
    body: 'We care about what happens Monday morning after the signature blocks dry: integration, messaging to employees, and the operational clauses that determine whether a contract is usable.',
  },
  {
    title: 'Integrated with specialists when it matters',
    body: 'Corporate issues rarely arrive alone. We collaborate with employment, tax, litigation, and industry regulatory counsel so you are not translating between siloed advisors.',
  },
  {
    title: 'Relationships and predictable cost',
    body: 'Like many business-law boutiques serving the New York metro, we emphasize long-term relationships, transparent scopes, and fee arrangements that respect growing companies.',
  },
] as const

export function WhyUs() {
  return (
    <section id="about" className="scroll-mt-24 bg-ink-900 py-20 text-on-inverse md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          What sets A&amp;S Law apart
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-on-inverse/85">
          Large full-service firms advertise breadth; local business counsel
          often emphasizes accessibility. We try to deliver both: depth on
          corporate and securities questions, with the responsiveness of a
          team that knows your company’s history.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="border-t border-accent/35 pt-6">
              <h3 className="font-display text-lg font-semibold text-accent-muted md:text-xl">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-on-inverse/78">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
