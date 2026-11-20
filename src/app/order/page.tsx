import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies, chapters, editions } from '../book'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Get the book',
  description: 'Find hardcover, paperback, and digital editions of The Lean Brand by Jeremiah Gardner, and browse the table of contents.',
}

export default function OrderPage() {
  return (
    <div className="book-page">
      <section className="book-shell book-section subpage-intro" aria-labelledby="order-title">
        <p className="book-kicker">The Lean Brand</p>
        <h1 id="order-title">Get the book<span>.</span></h1>
        <p>Choose an edition, then order from your preferred bookseller.</p>
        <div className="edition-grid">
          {editions.map(({ name, description, isbn, retailers }) => (
            <article key={name} className="edition">
              <h2>{name}</h2>
              <p>{description}</p>
              <span className="book-isbn">ISBN {isbn}</span>
              <ul>
                {retailers.map(({ name: retailer, url }) => (
                  <li key={retailer}>
                    <a href={url} aria-label={`${retailer} — ${name}`}>
                      {retailer} <span aria-hidden="true" className="book-external-arrow">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="book-section book-contents" id="contents" aria-labelledby="contents-title">
        <div className="book-shell contents-grid">
          <div>
            <p className="book-kicker">Inside the book</p>
            <h2 id="contents-title">Table of contents</h2>
            <p>With case studies from {caseStudies.slice(0, -1).join(', ')}, and {caseStudies[caseStudies.length - 1]}.</p>
          </div>
          <div>
            <p className="contents-note">Foreword by Brant Cooper · Introduction</p>
            <ol className="chapter-list">
              {chapters.map((chapter, index) => (
                <li key={chapter}><span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>{chapter}</li>
              ))}
            </ol>
            <p className="contents-note">Appendix A — The Tools · Appendix B — Resources</p>
          </div>
        </div>
      </section>

      <div className="book-shell book-section book-end">
        <Link className="book-text-link" href="/about">Explore the Lean Brand framework <span aria-hidden="true">→</span></Link>
        <NewsletterSignup source="book-order" />
      </div>
    </div>
  )
}
