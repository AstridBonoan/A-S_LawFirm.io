export function Footer() {
  return (
    <footer className="border-t border-navy-800/15 bg-navy-950 py-12 text-parchment/75">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-xl font-semibold text-parchment">
              A&amp;S Law
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed">
              Corporate and business law for companies building lasting value in
              New York and beyond.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <a href="#practice" className="hover:text-brass-light">
              Practice areas
            </a>
            <a href="#compliance" className="hover:text-brass-light">
              Compliance
            </a>
            <a href="#contact" className="hover:text-brass-light">
              Contact
            </a>
          </nav>
        </div>
        <p className="mt-10 text-xs leading-relaxed text-parchment/55">
          Attorney advertising. Prior results do not guarantee a similar
          outcome. The information on this website is for general informational
          purposes only, is not legal advice, and does not create an
          attorney–client relationship. Contact A&amp;S Law to discuss your
          specific situation.
        </p>
        <p className="mt-4 text-xs text-parchment/45">
          © {new Date().getFullYear()} A&amp;S Law. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
