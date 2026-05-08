const points = [
  'Register and maintain good standing with the New York Department of State and industry-specific licensing where required.',
  'Align employment policies and contractor relationships with federal and New York labor standards.',
  'Map environmental, health-care, financial, or real-estate regulations that attach to your operations.',
  'Implement sensible data and privacy practices as your customer base and vendor network grow.',
] as const

export function Compliance() {
  return (
    <section
      id="compliance"
      className="scroll-mt-24 border-y border-navy-800/10 bg-parchment-dark/50 py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy-950 md:text-4xl">
              Corporate compliance in New York
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-800/90">
              Effective compliance keeps owners and stakeholders protected,
              reduces regulatory exposure, and preserves reputation. We help
              you see the obligations that actually apply to your business —
              not generic checklists — and build practical programs around them.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brass">
              Key focus areas
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-navy-800/90 marker:text-brass">
              {points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="mt-12 rounded-sm border border-navy-800/10 bg-navy-900 p-8 text-parchment md:p-10">
          <h3 className="font-display text-xl font-semibold text-brass-light md:text-2xl">
            How we support your compliance program
          </h3>
          <ul className="mt-6 grid gap-3 text-sm leading-relaxed text-parchment/90 sm:grid-cols-2">
            <li>Education on statutes and regulations that touch your sector</li>
            <li>Design and documentation of internal policies and playbooks</li>
            <li>Risk assessments tied to contracts, vendors, and operations</li>
            <li>Negotiation and review of high-stakes agreements</li>
            <li>Coordination with specialists when litigation or investigations arise</li>
            <li>Ongoing outside general counsel for leadership and boards</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
