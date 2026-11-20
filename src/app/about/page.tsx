import type { Metadata } from 'next'
import Link from 'next/link'
import { phases } from '../book'

export const metadata: Metadata = {
  title: 'What you’ll learn',
  description: 'Explore the four phases of the Lean Brand Framework and the tools for putting it into practice.',
}

export default function AboutPage() {
  return (
    <div className="book-page">
      <section className="book-shell book-section subpage-intro" aria-labelledby="about-title">
        <p className="book-kicker">What you’ll learn</p>
        <h1 id="about-title">The Lean Brand<br />Framework<span>.</span></h1>
        <p>Find out what your audience values by testing the assumptions behind your brand. Then use what you learn to build a relationship worth keeping.</p>
        <ol className="phase-grid phase-grid-detail">
          {phases.map(({ name, description }, index) => (
            <li key={name}>
              <span className="phase-number" aria-hidden="true">0{index + 1}</span>
              <h2>{name}</h2>
              <p>{description}</p>
            </li>
          ))}
        </ol>
        <p>The book pairs these phases with viability experiments, a Minimum Viable Brand, and case studies from teams including Buffer and SoulPancake. You’ll learn how to use audience feedback to find Product-Market-Brand Fit.</p>
        <Link href="/order#contents" className="book-text-link">View the table of contents <span aria-hidden="true">→</span></Link>
      </section>

      <section className="book-section book-contents" aria-labelledby="tools-title">
        <div className="book-shell contents-grid">
          <div>
            <p className="book-kicker">The Lean Brand Stack</p>
            <h2 id="tools-title">Put the ideas to work.</h2>
          </div>
          <div>
            <p>Use tools like the Persona Grid, Value Proposition Canvas, and Brand Language Ecosystem to design a Minimum Viable Brand and test it with real people.</p>
            <div className="book-actions">
              <Link href="/stack" className="book-text-link">Explore the tools <span aria-hidden="true">→</span></Link>
              <Link href="/order" className="book-button book-button-primary">Get the book <span aria-hidden="true" className="book-external-arrow">→</span></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
