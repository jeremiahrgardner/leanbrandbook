'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Order', href: '/order' },
  { label: "What You'll Learn", href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Stack', href: '/stack' },
  { label: 'Artwork', href: '/artwork' },
]

export default function SiteNav({ current }: { current?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="py-6 px-6 md:px-12 border-b border-[#D8D3CC]">
      <nav aria-label="Site navigation" className="max-w-4xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-[9px] tracking-[0.5em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors duration-700">
          The Lean Brand™
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link key={label} href={href} className={['font-sans text-[9px] tracking-[0.2em] uppercase transition-colors duration-700', current === href ? 'text-[#111111]' : 'text-[#8a8580] hover:text-[#111111]'].join(' ')}>
              {label}
            </Link>
          ))}
        </div>
        {/* Mobile hamburger */}
        <button className="md:hidden p-2" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block h-px w-5 bg-[#111111] mb-1" />
          <span className="block h-px w-5 bg-[#111111]" />
        </button>
      </nav>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#D8D3CC] mt-4 pt-6 pb-2">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link key={label} href={href} className="block py-2 font-sans text-[10px] tracking-[0.25em] uppercase">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}
