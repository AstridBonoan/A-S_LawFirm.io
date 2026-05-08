import { useState } from 'react'

const nav = [
  { label: 'Overview', href: '#practice' },
  { label: 'Corporate & securities', href: '#corporate-securities' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Transactions', href: '#transactions' },
  { label: 'FAQs', href: '#faq' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-800/15 bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-ink-950 md:text-3xl"
        >
          A&amp;S Law
        </a>

        <nav
          className="hidden items-center gap-3 text-[13px] font-medium text-ink-800 lg:flex xl:gap-5 xl:text-sm"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12125550100"
            className="hidden rounded-sm bg-ink-900 px-4 py-2.5 text-sm font-semibold text-on-inverse shadow-sm transition-colors hover:bg-ink-800 lg:inline-block"
          >
            (212) 555-0100
          </a>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm border border-ink-800/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-5 bg-ink-900" />
            <span className="h-0.5 w-5 bg-ink-900" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-ink-800/12 bg-surface px-4 py-4 lg:hidden"
        >
          <nav className="flex flex-col gap-3 text-sm font-medium text-ink-800">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+12125550100"
              className="mt-2 rounded-sm bg-ink-900 py-3 text-center font-semibold text-on-inverse"
              onClick={() => setOpen(false)}
            >
              Call (212) 555-0100
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
