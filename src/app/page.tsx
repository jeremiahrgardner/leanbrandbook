import Link from 'next/link'
import BookArtwork from '@/components/BookArtwork'
import NewsletterSignup from '@/components/NewsletterSignup'
import { author, endorsements, phases } from './book'

export default function HomePage() {
  return (
    <div className="book-page">
      <section className="book-shell book-hero" aria-labelledby="book-title">
        <div className="hero-copy">
          <p className="book-kicker">The entrepreneur’s guide to</p>
          <h1 id="book-title">The Lean<br />Brand<span>.</span></h1>
          <p className="hero-byline">By <a href="#author">Jeremiah Gardner</a> <span aria-hidden="true">/</span> Foreword by Brant Cooper</p>
          <p className="hero-description">Apply the rigor of Lean Startup to brand development. Test your assumptions, learn what matters to your audience, and build a brand people care about.</p>
          <div className="book-actions">
            <Link href="/order" className="book-button book-button-primary">Get the book <span aria-hidden="true">→</span></Link>
            <Link href="/about" className="book-text-link">Explore the framework <span aria-hidden="true">→</span></Link>
          </div>
          <p className="hero-formats">Hardcover <span>·</span> Paperback <span>·</span> eBook</p>
        </div>
        <BookArtwork />
      </section>

      <section className="book-feature-quote" aria-label="Praise for The Lean Brand">
        <div className="book-shell book-feature-inner">
          <span className="quote-mark" aria-hidden="true">“</span>
          <figure>
            <blockquote>Gardner grabs hold of brand and gives it a good yank, redefining it as the relationship between an organization and its audience.</blockquote>
            <figcaption><strong>{endorsements[0].name}</strong> <span>·</span> {endorsements[0].credit}</figcaption>
          </figure>
        </div>
      </section>

      <section className="book-shell book-section framework-section" aria-labelledby="framework-title">
        <div className="book-section-heading">
          <div>
            <p className="book-kicker">What you’ll learn</p>
            <h2 id="framework-title">Build a brand as<br /> you build a business.</h2>
          </div>
          <p>A brand is the relationship between an organization and its audience. The Lean Brand gives you four steps to discover what makes that relationship valuable and learn how to strengthen it.</p>
        </div>
        <ol className="phase-grid">
          {phases.map((phase, index) => (
            <li key={phase.name}>
              <span className="phase-number" aria-hidden="true">0{index + 1}</span>
              <h3>{phase.name}</h3>
              <p>{phase.description}</p>
            </li>
          ))}
        </ol>
        <Link className="book-text-link" href="/order#contents">View the table of contents <span aria-hidden="true">→</span></Link>
      </section>

      <section className="book-praise book-section" aria-labelledby="praise-title">
        <div className="book-shell">
          <h2 id="praise-title">Praise for <em>The Lean Brand</em></h2>
          <div className="book-praise-grid">
            {endorsements.slice(1).map(({ quote, name, credit }) => (
              <figure key={name}>
                <blockquote>“{quote}”</blockquote>
                <figcaption><strong>{name}</strong><br />{credit}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div className="book-shell book-section book-end">
        <section className="author-section" id="author" aria-labelledby="author-title">
          <div>
            <p className="book-kicker">About the author</p>
            <h2 id="author-title">{author.name}</h2>
            <img className="author-portrait" src="/images/jeremiah-gardner.webp" alt="Jeremiah Gardner" width={840} height={1050} loading="lazy" />
          </div>
          <div>
            {author.bio.map((paragraph) => <p key={paragraph} className="author-bio">{paragraph}</p>)}
            <div className="book-actions">
              <a className="book-text-link" href={author.website}>Author website <span aria-hidden="true" className="book-external-arrow">→</span></a>
              <a className="book-text-link" href={author.speaking}>Speaking inquiries <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
        <NewsletterSignup source="book-home" />
      </div>
    </div>
  )
}
