export function Footer() {
  return (
    <footer className="border-t border-ink-800/15 bg-ink-950 py-12 text-on-inverse/72">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-on-inverse">
              A&amp;S Law
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              Corporate and securities counsel for companies building lasting
              value in the New York metropolitan area and beyond.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#practice" className="hover:text-accent-muted">
              Overview
            </a>
            <a href="#corporate-securities" className="hover:text-accent-muted">
              Corporate &amp; securities
            </a>
            <a href="#compliance" className="hover:text-accent-muted">
              Compliance
            </a>
            <a href="#transactions" className="hover:text-accent-muted">
              Transactions
            </a>
            <a href="#faq" className="hover:text-accent-muted">
              FAQs
            </a>
            <a href="#contact" className="hover:text-accent-muted">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs leading-relaxed text-on-inverse/52">
          Attorney advertising. Prior results do not guarantee a similar
          outcome. The information on this website is for general informational
          purposes only, is not legal advice, and does not create an
          attorney–client relationship. Contact A&amp;S Law to discuss your
          specific situation.
        </p>
        <p className="mt-4 text-xs text-on-inverse/42">
          © {new Date().getFullYear()} A&amp;S Law. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
