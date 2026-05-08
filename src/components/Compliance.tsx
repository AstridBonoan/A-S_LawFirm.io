const points = [
  'Register and maintain good standing with the New York Department of State and secure industry licenses where your sector requires them.',
  'Align workforce policies, classification decisions, and contractor relationships with federal and New York labor standards.',
  'Identify environmental, health-care, financial services, or real-estate overlays that attach to how and where you operate.',
  'Build proportionate data governance and privacy practices as your customer and vendor networks expand.',
] as const

export function Compliance() {
  return (
    <section
      id="compliance"
      className="scroll-mt-24 border-y border-ink-800/10 bg-surface-muted/60 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold text-ink-950 md:text-4xl">
              Corporate compliance in New York
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-800/90">
              The point of a compliance program is straightforward: help the
              business operate lawfully, protect owners and stakeholders, and
              reduce the chance of penalties, private claims, and reputational
              harm. That idea — common to business-law resources across the
              metro area — is the lens we use when we prioritize your legal
              spend.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-800/90">
              We do not hand every client the same template. We start from your
              industry, your contracts, and your governance structure, then
              build practical policies and playbooks you can actually follow.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Compliance themes we map for clients
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-ink-800/90 marker:text-accent">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-12 rounded-sm border border-ink-800/10 bg-ink-900 p-8 text-on-inverse md:p-10">
          <h3 className="font-display text-xl font-semibold text-accent-muted md:text-2xl">
            How we support your program day to day
          </h3>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-on-inverse/90 sm:grid-cols-2">
            <li>Plain-language guidance on the statutes and rules that touch your sector</li>
            <li>Written policies, approval matrices, and escalation paths tailored to your size</li>
            <li>Contract and vendor risk reviews tied to real operational data flows</li>
            <li>Board and committee education on recurring fiduciary and disclosure themes</li>
            <li>Coordination with litigation or investigations counsel when exposure appears</li>
            <li>Ongoing outside general counsel for leadership, finance, and operations</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
