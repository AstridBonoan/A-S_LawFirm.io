import { useState } from 'react'
import type { FormEvent } from 'react'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-parchment py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl font-semibold text-navy-950 md:text-4xl">
              Contact A&amp;S Law
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-navy-800/90">
              Share a short description of your company and how we can help. We
              will respond promptly to schedule an introductory call. This form is
              for demonstration; connect your preferred intake workflow or CRM
              before collecting live client data.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-semibold text-navy-950">Phone</dt>
                <dd>
                  <a
                    href="tel:+12125550100"
                    className="text-navy-800 underline decoration-brass/50 underline-offset-2 hover:text-brass"
                  >
                    (212) 555-0100
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-950">Email</dt>
                <dd>
                  <a
                    href="mailto:hello@aslaw.example"
                    className="text-navy-800 underline decoration-brass/50 underline-offset-2 hover:text-brass"
                  >
                    hello@aslaw.example
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-navy-950">Office</dt>
                <dd className="text-navy-800/90">
                  1200 Avenue of the Americas
                  <br />
                  Suite 400
                  <br />
                  New York, NY 10036
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-sm border border-navy-800/10 bg-white/70 p-6 shadow-sm md:p-8">
            {sent ? (
              <p className="text-center text-navy-800">
                Thank you. In a production site, this message would be routed to
                your intake team.
              </p>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-xs font-semibold uppercase tracking-wide text-navy-800/80">
                    First name
                    <input
                      required
                      name="firstName"
                      autoComplete="given-name"
                      className="mt-1.5 w-full rounded-sm border border-navy-800/20 bg-parchment px-3 py-2.5 text-sm text-navy-900 outline-none ring-brass/30 focus:ring-2"
                    />
                  </label>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-navy-800/80">
                    Last name
                    <input
                      required
                      name="lastName"
                      autoComplete="family-name"
                      className="mt-1.5 w-full rounded-sm border border-navy-800/20 bg-parchment px-3 py-2.5 text-sm text-navy-900 outline-none ring-brass/30 focus:ring-2"
                    />
                  </label>
                </div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-navy-800/80">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-sm border border-navy-800/20 bg-parchment px-3 py-2.5 text-sm text-navy-900 outline-none ring-brass/30 focus:ring-2"
                  />
                </label>
                <label className="block text-xs font-semibold uppercase tracking-wide text-navy-800/80">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-sm border border-navy-800/20 bg-parchment px-3 py-2.5 text-sm text-navy-900 outline-none ring-brass/30 focus:ring-2"
                  />
                </label>
                <label className="block text-xs font-semibold uppercase tracking-wide text-navy-800/80">
                  How can we help?
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full resize-y rounded-sm border border-navy-800/20 bg-parchment px-3 py-2.5 text-sm text-navy-900 outline-none ring-brass/30 focus:ring-2"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-sm bg-navy-900 py-3.5 text-sm font-semibold text-parchment transition-colors hover:bg-navy-800"
                >
                  Send message
                </button>
                <p className="text-xs leading-relaxed text-navy-800/70">
                  Submitting this form does not create an attorney–client
                  relationship. Do not include confidential information until we
                  have agreed to represent you.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
