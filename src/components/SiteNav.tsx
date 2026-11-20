'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState } from 'react'

const navLinks = [
  { href: '/', label: 'The Book' },
  { href: '/about', label: 'What You’ll Learn' },
  { href: '/blog', label: 'Blog' },
  { href: '/stack', label: 'Tools' },
  { href: '/artwork', label: 'Artwork' },
]

export default function SiteNav() {
  const pathname = usePathname()
  const [openMenuPath, setOpenMenuPath] = useState<string | null>(null)
  const menuButton = useRef<HTMLButtonElement>(null)
  const menuOpen = openMenuPath === pathname

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          setOpenMenuPath(null)
          menuButton.current?.focus()
        }
      }}
    >
      <div className="book-shell site-header-inner">
        <Link href="/" className="site-wordmark" onClick={() => setOpenMenuPath(null)}>
          <span className="site-mark" aria-hidden="true"><i /><i /><i /></span>
          The Lean Brand
        </Link>
        <button
          ref={menuButton}
          className="site-menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
          onClick={() => setOpenMenuPath(menuOpen ? null : pathname)}
        >
          {menuOpen ? 'Close' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav id="site-navigation" aria-label="Main navigation" data-open={menuOpen}>
          {navLinks.map(({ href, label }) => (
            <Link
              href={href}
              key={href}
              aria-current={pathname === href ? 'page' : undefined}
              onClick={() => setOpenMenuPath(null)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/order"
            className="book-button book-button-nav"
            aria-current={pathname === '/order' ? 'page' : undefined}
            onClick={() => setOpenMenuPath(null)}
          >
            Get the book <span aria-hidden="true">→</span>
          </Link>
        </nav>
      </div>
    </header>
  )
}
