import Link from 'next/link'
import SiteFooter from '@/components/SiteFooter'

export default function Page() {
  return (
    <div style={{ paddingTop: 46, backgroundColor: '#f7f7f7', minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif' }}>

      {/* RETAILER BAR */}
      <div style={{ backgroundColor: '#111', padding: '12px 0', fontSize: 11 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }}>
          <span style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9 }}>Hardcopy Available On:</span>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-brant-cooper/1134551364?ean=9780996100724" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes &amp; Noble</a>
          <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations/dp/0996100725/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Amazon</a>
          <span style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9, marginLeft: 10 }}>eBook Available On:</span>
          <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Google Play</a>
          <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Apple Books</a>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes &amp; Noble</a>
        </div>
      </div>

      {/* PAGE HEADER */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #D8D3CC', padding: '64px 0 48px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: 16, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>Brand &middot; March 2014</p>
          <h1 style={{ fontSize: 36, fontWeight: 'bold', color: '#111', marginBottom: 24, lineHeight: 1.2, fontFamily: 'Montserrat, Arial, sans-serif' }}>What Is Lean Branding?</h1>
        </div>
      </div>

      {/* ARTICLE CONTENT */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '48px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 17, color: '#666', lineHeight: 1.7, marginBottom: 24, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>Most branding is broken. Here's why -- and what lean branding offers as an alternative. The word 'brand' gets used a lot. Redesign your brand. Rebrand the company. Protect your brand. We've turned one of the most powerful concepts in business into a catch-all that means almost nothing. Most approaches to branding suffer from the same fundamental problem: they treat brand as a noun to be crafted, rather than a relationship to be discovered. The lean approach starts from a different premise. A brand is the relationship between an organization and an audience. Like any relationship, it can't be designed in isolation and then handed to the other party. It has to be discovered through interaction, tested through experience, and refined through iteration. This is a fundamentally different way of thinking about what a brand is -- and what brand development actually involves. Instead of building a brand 'identity system' in a conference room and then deploying it outward, you're running experiments in the world and learning from what your audience does in response. The lean brand approach borrows directly from the Lean Startup methodology: build a minimum viable brand, measure whether it creates the emotional value you hypothesized, learn from the results, and iterate. Instead of spending six months and several hundred thousand dollars on a brand strategy document, you ship something small, learn fast, and adapt. The core question isn't 'what should our brand look like?' It's 'what relationship are we actually building with our audience -- and is that relationship something people genuinely want to be part of?'</p>

          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #D8D3CC' }}>
            <Link href="/blog" style={{ fontSize: 9, color: '#111', textTransform: 'uppercase', letterSpacing: '0.3em', textDecoration: 'none', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', transition: 'color 0.2s' }}>&larr; Back to Field Notes</Link>
          </div>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}