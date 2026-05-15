import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'

const ARTICLES = [
  { slug: 'what-is-lean-branding', label: 'Brand', date: 'March 2014', title: 'What Is Lean Branding?', desc: "Most branding is broken. Here\u2019s why \u2014 and what lean branding offers as an alternative." },
  { slug: 'brand-language-ecosystem', label: 'Brand Language', date: 'May 2014', title: 'The Brand Language Ecosystem', desc: "Your brand\u2019s words aren\u2019t decoration. They\u2019re the tissue of the relationship." },
  { slug: 'the-foundation-of-your-brand', label: 'Brand Foundation', date: 'July 2014', title: 'The Foundation of Your Brand', desc: "Before you build a brand, you need to know what you\u2019re building it on." },
  { slug: 'how-to-discover-who-you-are', label: 'Discovery', date: 'September 2014', title: 'How To Discover Who You Are\u2026And Why You Matter', desc: "The hardest brand question is not \u2018what do we do?\u2019 It is \u2018why should anyone care?\u2019" },
]

export default function BlogPage() {
  return (
    <div style={{ paddingTop: 46, backgroundColor: '#f7f7f7', minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif' }}>

      {/* RETAILER BAR */}
      <div style={{ backgroundColor: '#111', padding: '12px 0', fontSize: 11 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }}>
          <span style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9 }}>Hardcopy Available On:</span>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes &amp; Noble</a>
          <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Amazon</a>
          <span style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9, marginLeft: 10 }}>eBook Available On:</span>
          <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Google Play</a>
          <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Apple Books</a>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes &amp; Noble</a>
        </div>
      </div>

      {/* PAGE HEADER */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #ccc', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: 38, fontWeight: 'normal', color: '#efa24d', marginBottom: 10, textTransform: 'uppercase', fontFamily: 'Montserrat, Arial, sans-serif' }}>Field Notes</h1>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            Thinking on brand, lean methodology, and building passionate relationships with your audience.
          </p>
        </div>
      </div>

      {/* ARTICLE LIST */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          {ARTICLES.map(({ slug, label, date, title, desc }) => (
            <div key={slug} style={{ borderTop: '1px solid #D8D3CC', padding: '30px 0' }}>
              <Link href={`/blog/${slug}`} style={{ fontSize: 22, color: '#343434', textDecoration: 'none', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 'normal', lineHeight: 1.3, display: 'block', marginBottom: 8 }}>
                {title}
              </Link>
              <p style={{ fontSize: 10, color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6, fontFamily: 'Montserrat, Arial, sans-serif' }}>{label}</p>
              <p style={{ fontSize: 16, color: '#666', lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>{desc}</p>
              <p style={{ fontSize: 11, color: '#999', marginTop: 8, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>{date}</p>
            </div>
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}