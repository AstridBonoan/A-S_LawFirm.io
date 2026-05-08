import { useState } from 'react'

const nav = [
  { label: 'Practice areas', href: '#practice' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Transactions', href: '#transactions' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/20 bg-parchment/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-navy-950 md:text-3xl"
        >
          A&amp;S Law
        </a>

        <nav
          className="hidden items-center gap-8 text-sm font-medium text-navy-800 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brass"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="tel:+12125550100"
            className="hidden rounded-sm bg-navy-900 px-4 py-2.5 text-sm font-semibold text-parchment shadow-sm transition-colors hover:bg-navy-800 lg:inline-block"
          >
            (212) 555-0100
          </a>
          <button
            type="button"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-sm border border-navy-800/25 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="h-0.5 w-5 bg-navy-900" />
            <span className="sr-only">Menu</span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-navy-800/15 bg-parchment px-4 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3 text-sm font-medium text-navy-800">
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
              className="mt-2 rounded-sm bg-navy-900 py-3 text-center font-semibold text-parchment"
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
