const areas = [
  {
    title: 'Entity formation & governance',
    body: 'Counsel on C-corps, S-corps, LLCs, and partnerships — from formation through operating agreements, shareholder arrangements, and board best practices.',
  },
  {
    title: 'Commercial contracts',
    body: 'Drafting and negotiation of licenses, services, supply, distribution, employment, confidentiality, and strategic alliance agreements tailored to your risk profile.',
  },
  {
    title: 'Mergers, acquisitions & divestitures',
    body: 'Buy-side and sell-side support for asset and stock deals, reorganizations, and post-closing integration planning for middle-market and emerging companies.',
  },
  {
    title: 'Capital raising & securities',
    body: 'Guidance on private placements, equity compensation, PIPEs and other financings, plus ongoing disclosure and compliance for issuers navigating SEC and exchange rules.',
  },
] as const

export function PracticeAreas() {
  return (
    <section id="practice" className="scroll-mt-24 bg-parchment py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-semibold text-navy-950 md:text-4xl">
          Corporate &amp; business law
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy-800/90">
          Inspired by full-service corporate practices, we focus on the matters
          that move companies forward: sound structure, clear agreements, and
          disciplined compliance — whether you are local to New York or
          operating nationally.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {areas.map((item) => (
            <li
              key={item.title}
              className="rounded-sm border border-navy-800/10 bg-white/60 p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <h3 className="font-display text-xl font-semibold text-navy-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-navy-800/85">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
