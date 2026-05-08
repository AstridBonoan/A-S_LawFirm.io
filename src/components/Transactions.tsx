const offerings = [
  'Initial and follow-on equity offerings (including private placements)',
  'Secondary offerings and shelf-registered programs where applicable',
  'Exchange listings and continued listing considerations',
  'Employee stock purchase and equity compensation plans',
  'Bridge, convertible, and recapitalization structures',
  'PIPE-style and other private-in-public financings where appropriate',
  'Friendly acquisitions, divestitures, and selected special committee paths',
] as const

const financeDistressed = [
  'Commercial loans, asset-based facilities, and covenant analysis for borrowers',
  'Landlord, vendor, and customer contract triage in stress scenarios',
  'Out-of-court workouts, forbearance, and orderly wind-down planning',
  'Coordination with restructuring and bankruptcy counsel when a filing is on the table',
] as const

export function Transactions() {
  return (
    <section id="transactions" className="scroll-mt-24 bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink-950 md:text-4xl">
          Offerings, financings, and special situations
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-800/90">
          The transaction list on a corporate practice page is not a promise
          that every structure fits every client — it is a map of the
          questions we are accustomed to seeing. We group them the way
          sophisticated firms often do:{' '}
          <strong className="font-medium text-ink-900">
            capital-raising and securities work
          </strong>{' '}
          in one lane, and{' '}
          <strong className="font-medium text-ink-900">
            lending, liquidity, and distress
          </strong>{' '}
          in another.
        </p>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink-900">
              Securities offerings and corporate financings
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-800/88">
              We represent issuers and selected investor-side parties in
              structuring and documenting raises — with realistic attention to
              disclosure, exemption analysis, and what your cap table will look
              like the day after closing.
            </p>
            <ul className="mt-6 space-y-3">
              {offerings.map((text) => (
                <li
                  key={text}
                  className="flex gap-3 text-sm leading-relaxed text-ink-800/90"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold text-ink-900">
              Lending, liquidity, and stressed-company matters
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-800/88">
              When cash gets tight, legal strategy and business strategy merge.
              We help leadership understand options short of litigation,
              preserve relationships where possible, and bring in restructuring
              counsel when a case filing or formal process is the right tool.
            </p>
            <ul className="mt-6 space-y-3">
              {financeDistressed.map((text) => (
                <li
                  key={text}
                  className="flex gap-3 text-sm leading-relaxed text-ink-800/90"
                >
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
