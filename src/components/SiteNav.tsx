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
    <nav className="bg-[#f93] fixed top-0 left-0 w-full z-50 shadow-md" style={{ fontFamily: 'Montserrat, Arial, sans-serif' }}>
      <div className="max-w-[970px] mx-auto px-4">
        <div className="flex items-center justify-between h-[46px]">
          <Link href="/" className="flex items-center">
            <span style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontSize: 13, fontWeight: 700 }}>The Lean Brand</span>
          </Link>

          {/* Desktop */}
          <ul className="hidden md:flex items-center list-none m-0 p-0">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontSize: 12, padding: '0 10px', height: 46, display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-xl w-10 h-10 flex items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#f93] border-t border-[#eb8a1e]">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                style={{ color: '#fff', textTransform: 'uppercase', letterSpacing: '1px', fontSize: 12, display: 'block', padding: '12px 10px', borderBottom: '1px solid #eb8a1e', textDecoration: 'none' }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}