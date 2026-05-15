'use client'
import Link from 'next/link'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: "What You'll Learn" },
  { href: '/blog', label: 'Blog' },
  { href: '/stack', label: 'Stack' },
  { href: '/artwork', label: 'Artwork' },
  { href: '/order', label: 'Order' },
]

export default function SiteNav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
      backgroundColor: '#f93', boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
      fontFamily: 'Montserrat, Arial, sans-serif',
    }}>
      <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 46 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontSize: 13, fontWeight: 700 }}>
              The Lean Brand
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{
            display: 'flex', alignItems: 'center', listStyle: 'none', margin: 0, padding: 0,
          }} className="desktop-nav">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    color: '#fff', textTransform: 'uppercase', letterSpacing: '1px',
                    fontSize: 12, padding: '0 10px', height: 46, display: 'flex',
                    alignItems: 'center', textDecoration: 'none',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', color: '#fff', fontSize: 22,
              cursor: 'pointer', width: 40, height: 40, display: 'flex',
              alignItems: 'center', justifyContent: 'center',
              padding: 0, appearance: 'none',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile dropdown */}
        <div style={{
          maxHeight: menuOpen ? 400 : 0,
          overflow: 'hidden',
          transition: 'max-height 300ms ease',
          borderTop: menuOpen ? '1px solid #eb8a1e' : 'none',
        }} className="mobile-dropdown">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: '#fff', textTransform: 'uppercase', letterSpacing: '1px',
                fontSize: 12, display: 'block', padding: '12px 10px',
                borderBottom: '1px solid #eb8a1e', textDecoration: 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .mobile-dropdown { display: block !important; }
        }
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
          .mobile-dropdown { display: none !important; }
        }
      `}</style>
    </nav>
  )
}