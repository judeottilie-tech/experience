import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/content'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { href: '#about', label: 'about' },
  { href: '#projects', label: 'projects' },
  // { href: '#design', label: 'design' }, // dormant Design section in App.jsx
  { href: '#experience', label: 'experience' },
  { href: '#skills', label: 'skills' },
  { href: '#contact', label: 'contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-xl font-semibold tracking-tight text-coral">
          Jude Ottilie Andersen
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink-soft transition hover:text-coral"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="gloss game-btn inline-flex items-center gap-1 rounded-full bg-sun px-4 py-2 text-sm font-bold text-[#2b1b3d]"
            style={{ '--btn-shadow': 'var(--color-coral-dark)' }}
          >
            resume <ArrowUpRight size={16} />
          </a>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            className="rounded-full p-2 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-line bg-cream px-6 py-6 md:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base font-semibold text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="gloss inline-flex w-fit items-center gap-1 rounded-full bg-sun px-4 py-2 text-sm font-bold text-[#2b1b3d]"
          >
            resume <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}
