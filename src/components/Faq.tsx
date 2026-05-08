const faqs = [
  {
    q: 'What kinds of corporate matters do you handle most often?',
    a: 'Entity design and maintenance, commercial contracts, governance for closely held and sponsored companies, private financings, M&A support for middle-market deals, and compliance programs that scale with headcount and revenue.',
  },
  {
    q: 'Do you work with companies that are not headquartered in New York?',
    a: 'Yes. Many clients have operations or investors in the New York metro area even when they are incorporated elsewhere. We focus on New York and federal overlays that affect those businesses and coordinate local counsel when another state’s law drives a transaction.',
  },
  {
    q: 'Can you act as SEC counsel for a public company?',
    a: 'We support disclosure, governance, and transactional questions for issuers and help manage relationships with specialists when a filing, comment letter, or enforcement matter requires dedicated securities litigation or SEC regulatory counsel.',
  },
  {
    q: 'How do you price engagements?',
    a: 'We typically use a mix of monthly outside-counsel retainers, project-based estimates for transactions, and capped phases for compliance build-outs. We will spell out assumptions up front so leadership can budget with confidence.',
  },
  {
    q: 'What should I bring to an initial consultation?',
    a: 'A short description of the company, cap table or ownership chart if available, any pending term sheet or LOI, and the specific decision you are trying to make in the next thirty to sixty days. Avoid sharing truly confidential materials until we have cleared conflicts and agreed on an engagement.',
  },
] as const

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">
          Questions
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-ink-950 md:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-800/90">
          Straight answers to the questions prospective clients tend to ask
          before they retain corporate counsel — similar in purpose to FAQ
          sections on large-firm practice pages, but specific to how A&amp;S
          Law works.
        </p>
        <div className="mt-10 divide-y divide-ink-800/12 rounded-sm border border-ink-800/10 bg-white/60">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group px-5 py-4 md:px-6 md:py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="cursor-pointer list-none font-display text-lg font-semibold text-ink-900 outline-none ring-accent/0 transition-colors marker:content-none group-open:text-accent">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span
                    className="mt-1 shrink-0 text-accent transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-ink-800/88 md:pr-8">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
