const areas = [
  {
    title: 'Entity formation & governance',
    body: 'From C corporations and S elections through LLCs, limited partnerships, and joint ventures — charter documents, shareholder and operating agreements, board processes, and officer authority that match how you actually run the business.',
  },
  {
    title: 'Commercial contracts & strategic deals',
    body: 'Negotiation and drafting across the agreement types that show up in operating companies every day: services, supply, licensing, distribution, employment, consulting, confidentiality, non-competition, and partnership structures.',
  },
  {
    title: 'Mergers, acquisitions & reorganizations',
    body: 'Buy-side and sell-side work for stock and asset transactions, roll-ups, divestitures, and internal reorganizations — with an eye toward integration risk, earn-outs, and post-closing obligations.',
  },
  {
    title: 'Capital markets & securities readiness',
    body: 'Private placements, bridge and convertible structures, equity compensation, PIPE-style financings where appropriate, and groundwork for periodic reporting, proxy season, and exchange listing standards when you step into the public markets.',
  },
] as const

export function PracticeAreas() {
  return (
    <section id="practice" className="scroll-mt-24 bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          At a glance
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-950 md:text-4xl">
          How we support your business
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-800/90">
          Our model follows how sophisticated New York corporate practices
          typically organize their public-facing materials: a through-line from
          entity design and contracts to financings, M&amp;A, and compliance,
          with room to go deep when a transaction or regulatory question
          demands it — the same informational architecture you will find on
          long-form corporate and securities pages at full-service firms (for
          example,{' '}
          <a
            href="https://dhclegal.com/law-practice-areas/corporate-law/"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            DHC&apos;s corporate &amp; securities overview
          </a>
          ) alongside the compliance-first framing common to metro business-law
          sites (for example,{' '}
          <a
            href="https://www.surilawpllc.com/queens-business-lawyer/corporate-law/"
            className="font-medium text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suri Law&apos;s corporate compliance page
          </a>
          ). A&amp;S Law is independent and not affiliated with those firms;
          they are cited only as structural references for how clients research
          counsel online.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {areas.map((item) => (
            <li
              key={item.title}
              className="rounded-sm border border-ink-800/10 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-800/85">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
