import type { Metadata } from 'next'
import BookArtwork from '@/components/BookArtwork'

export const metadata: Metadata = { title: 'Book artwork' }

export default function ArtworkPage() {
  return (
    <div className="book-page">
      <section className="book-shell book-section subpage-intro" aria-labelledby="artwork-title">
        <p className="book-kicker">The Lean Brand</p>
        <h1 id="artwork-title">Book artwork<span>.</span></h1>
        <p>Cover artwork for the hardcover and paperback editions of The Lean Brand.</p>
        <div className="artwork-layout">
          <BookArtwork />
          <div>
            <h2>Cover images</h2>
            <ul>
              <li><a className="book-text-link" href="/images/lean-brand-cover.webp">Hardcover <span aria-hidden="true" className="book-external-arrow">→</span></a></li>
              <li><a className="book-text-link" href="https://cvylyy.media.zestyio.com/the_lean_brand_paperback_final_10001.png">Paperback <span aria-hidden="true" className="book-external-arrow">→</span></a></li>
            </ul>
            <p>Cover artwork subject to change.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
