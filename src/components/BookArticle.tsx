import Link from 'next/link'

export default function BookArticle({
  title, category, date, children,
}: {
  title: string
  category: string
  date: string
  children: React.ReactNode
}) {
  return (
    <div className="book-page">
      <article className="book-shell book-section book-article">
        <Link className="book-text-link" href="/blog"><span aria-hidden="true">←</span> All articles</Link>
        <header>
          <p className="book-kicker">{category} · {date}</p>
          <h1>{title}</h1>
        </header>
        <div className="book-article-body">{children}</div>
        <Link className="book-text-link" href="/order">Get The Lean Brand <span aria-hidden="true">→</span></Link>
      </article>
    </div>
  )
}
