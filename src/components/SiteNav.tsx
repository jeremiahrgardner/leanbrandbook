'use client'
import { useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'Order', href: '/order' },
  { label: 'What You\'ll Learn', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Stack', href: '/stack' },
  { label: 'Artwork', href: '/artwork' },
]

export default function SiteNav({ current }: { current?: string }) {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="px-6 md:px-12 py-5 border-b border-[#D8D3CC]">
      <nav aria-label="Site navigation" className="max-w-5xl mx-auto flex items-center justify-between">
        <Link href="/" className="font-serif text-xs text-[#111111] hover:text-[#B89B5E] transition-colors">
          The Lean Brand&trade;
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link key={label} href={href} className={[
              'font-sans text-[10px] text-[#666] hover:text-[#111111] transition-colors',
              current === href ? 'text-[#111111]' : ''
            ].join(' ')}>
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
        <div className="md:hidden border-t border-[#D8D3CC] mt-4 pt-4 pb-2">
          {NAV_ITEMS.map(({ label, href }) => (
            <Link key={label} href={href} className="block py-2 font-sans text-[10px] text-[#666]">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}