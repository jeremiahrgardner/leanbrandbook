import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'

export default function Page() {
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
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #D8D3CC', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 16, fontFamily: 'Montserrat, Arial, sans-serif' }}>Discovery · September 2014</p>
          <h1 style={{ fontSize: 36, fontWeight: 'bold', color: '#111', lineHeight: 1.25, marginBottom: 24, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>How To Discover Who You Are&hellip;And Why You Matter</h1>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '48px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ maxWidth: 680, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>The hardest brand question is not &lsquo;what do we do?&rsquo; It is &lsquo;why should anyone care?&rsquo; Every organization knows what it does. Most know how it does it. Very few know why it matters &ndash; in the sense that the people it&rsquo;s trying to serve actually feel that it matters.</p>

            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>The lean approach to brand discovery starts with the assumption that you don&rsquo;t know. Not yet. You have hypotheses about who you are and why you&rsquo;re worth paying attention to, but they&rsquo;re hypotheses. They need to be tested.</p>

            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>The discovery process begins with the Lean Brand Framework: hypothesis, build, measure, learn. You synthesize your assumptions into a testable emotional-value hypothesis. You build a minimum viable brand &ndash; the smallest expression of your story, your artifacts, and your invitation that can still be recognized as you. You measure whether it creates the connection you expected. You learn what it means for your next iteration.</p>

            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>This is not a linear process. You&rsquo;ll cycle through the framework many times before you find Product-Market-Brand Fit. Each turn teaches you something new about who you are, who you&rsquo;re for, and why the relationship matters.</p>

            <p style={{ fontSize: 18, color: '#666', lineHeight: 1.7, marginBottom: 24 }}>The discovery isn&rsquo;t done when you have a brand. It&rsquo;s ongoing. The relationship changes as both parties evolve. What you discovered in 2014 may not be what you discover in 2016. The brand that worked for your first thousand customers may need to grow to work for your next ten thousand. Discovery isn&rsquo;t a phase. It&rsquo;s the work.</p>
          </div>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #D8D3CC' }}>
            <Link href="/blog" style={{ fontSize: 9, color: '#111', textTransform: 'uppercase', letterSpacing: '0.3em', textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>&larr; Back to Field Notes</Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}