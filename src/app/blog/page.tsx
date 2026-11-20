import type { Metadata } from 'next'
import Link from 'next/link'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = { title: 'Articles on lean branding' }

const ARTICLES = [
  { slug: 'what-is-lean-branding', label: 'Brand', date: 'March 2014', title: 'What Is Lean Branding?', desc: "Most branding is broken. Here\u2019s why \u2014 and what lean branding offers as an alternative." },
  { slug: 'brand-language-ecosystem', label: 'Brand Language', date: 'May 2014', title: 'The Brand Language Ecosystem', desc: "Your brand\u2019s words aren\u2019t decoration. They\u2019re the tissue of the relationship." },
  { slug: 'the-foundation-of-your-brand', label: 'Brand Foundation', date: 'July 2014', title: 'The Foundation of Your Brand', desc: "Before you build a brand, you need to know what you\u2019re building it on." },
  { slug: 'how-to-discover-who-you-are', label: 'Discovery', date: 'September 2014', title: 'How To Discover Who You Are\u2026And Why You Matter', desc: "The hardest brand question is not \u2018what do we do?\u2019 It is \u2018why should anyone care?\u2019" },
]

export default function BlogPage() {
  return (
    <div className="book-page">
      <section className="book-shell book-section subpage-intro" aria-labelledby="articles-title">
        <p className="book-kicker">The Lean Brand</p>
        <h1 id="articles-title">Articles<span>.</span></h1>
        <p>Ideas and practical approaches for building better relationships with your audience.</p>
        <div className="article-list">
          {ARTICLES.map(({ slug, label, date, title, desc }) => (
            <article key={slug}>
              <p className="book-kicker">{label} · {date}</p>
              <h2><Link href={`/blog/${slug}`}>{title} <span aria-hidden="true" className="book-external-arrow">→</span></Link></h2>
              <p>{desc}</p>
            </article>
          ))}
        </div>
        <NewsletterSignup source="book-blog" />
      </section>
    </div>
  )
}
