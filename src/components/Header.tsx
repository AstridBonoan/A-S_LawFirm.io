import { useEffect, useState } from 'react'

const nav = [
  { label: 'Overview', href: '#practice' },
  { label: 'Corporate & securities', href: '#corporate-securities' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Transactions', href: '#transactions' },
  { label: 'FAQs', href: '#faq' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

function CloseIcon() {
  return (
    <svg
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  )
}

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ink-800/15 bg-surface/95 backdrop-blur-md">
      <div className="relative z-[45] mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:h-16 md:gap-4 md:px-6">
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
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="h-0.5 w-5 bg-ink-900" />
            <span className="h-0.5 w-5 bg-ink-900" />
          </button>
        </div>
      </div>

      {/* Mobile: backdrop + side drawer (kept mounted for enter/exit transitions) */}
      <div className="lg:hidden" aria-hidden={!open}>
        <button
          type="button"
          tabIndex={open ? 0 : -1}
          className={`fixed inset-0 z-40 bg-ink-950/45 transition-opacity duration-300 ease-out ${
            open
              ? 'pointer-events-auto opacity-100'
              : 'pointer-events-none opacity-0'
          }`}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          inert={!open ? true : undefined}
          className={`fixed right-0 top-0 z-[60] flex h-[100dvh] w-[min(88vw,20rem)] flex-col border-l border-ink-800/15 bg-surface shadow-2xl transition-transform duration-300 ease-out ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex shrink-0 items-center justify-between border-b border-ink-800/12 px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))]">
            <span className="font-display text-lg font-semibold tracking-tight text-ink-950">
              Menu
            </span>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-sm border border-ink-800/20 text-ink-900 transition-colors hover:bg-ink-800/5 hover:text-accent"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>
          <nav
            className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto px-4 py-4 text-sm font-medium text-ink-800"
            aria-label="Primary mobile"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-sm py-2.5 pl-1 transition-colors hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+12125550100"
              className="mt-3 rounded-sm bg-ink-900 py-3 text-center font-semibold text-on-inverse"
              onClick={() => setOpen(false)}
            >
              Call (212) 555-0100
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
