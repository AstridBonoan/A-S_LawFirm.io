const bullets = [
  'Equity and debt financings, bridge rounds, and recapitalizations',
  'Strategic combinations: mergers, stock and asset purchases, joint ventures',
  'Securities offerings, exchange listings, and periodic reporting obligations',
  'Distressed situations: workouts, restructurings, and orderly wind-downs',
  'Banking and commercial finance for borrowers and institutional lenders',
] as const

export function Transactions() {
  return (
    <section id="transactions" className="scroll-mt-24 bg-parchment py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="font-display text-3xl font-semibold text-navy-950 md:text-4xl">
          Transactions that scale with you
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-navy-800/90">
          From first institutional round to a transformative acquisition, we
          stay close to the business so documents match reality — and so
          governance, disclosure, and financing structures stay aligned with
          your goals.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {bullets.map((text) => (
            <li
              key={text}
              className="flex gap-3 rounded-sm border-l-4 border-brass bg-white/50 px-4 py-3 text-sm leading-relaxed text-navy-800/90"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brass" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
