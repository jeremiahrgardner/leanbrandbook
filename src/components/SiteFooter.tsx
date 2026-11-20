import Link from 'next/link'
import { author } from '@/app/book'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="book-shell">
        <div className="site-footer-main">
          <Link className="site-wordmark" href="/">
            <span className="site-mark" aria-hidden="true"><i /><i /><i /></span>
            The Lean Brand
          </Link>
          <nav aria-label="Footer navigation">
            <Link href="/about">What you’ll learn</Link>
            <Link href="/order">Get the book</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/stack">Tools</Link>
            <Link href="/artwork">Artwork</Link>
            <Link href="/#field-notes">Field Notes</Link>
            <a href={author.website}>Author website</a>
            <a href="mailto:hello@theleanbrand.me">Contact</a>
          </nav>
        </div>
        <p>© Jeremiah Gardner. All rights reserved. <em>The Lean Brand</em> is a registered trademark of Jeremiah Gardner.</p>
      </div>
    </footer>
  )
}
