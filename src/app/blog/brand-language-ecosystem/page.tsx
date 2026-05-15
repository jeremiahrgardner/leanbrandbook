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
        </div>
      </div>

      {/* PAGE HEADER */}
      <section style={{ backgroundColor: '#fff', borderBottom: '1px solid #D8D3CC', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#888', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Brand Language · May 2014</p>
          <h1 style={{ fontSize: 32, fontWeight: 'bold', color: '#343434', marginBottom: 0, lineHeight: 1.2, fontFamily: 'Montserrat, Arial, sans-serif' }}>The Brand Language Ecosystem</h1>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <section style={{ backgroundColor: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 24 }}>
            Your brand's words aren't decoration. They're the tissue of the relationship. Every brand speaks. Whether it's through your website copy, your product descriptions, your email newsletters, or the way your sales team describes what you do -- your brand is constantly generating language. And that language is either building the relationship or eroding it.
          </p>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 24 }}>
            Most companies don't think about brand language systematically. They write copy when they need copy, revise when the copy sounds wrong, and trust that the message will eventually come together. It rarely does.
          </p>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 24 }}>
            A brand language ecosystem is the full set of words, phrases, stories, and messages that define how an organization speaks to its audience. It includes your positioning statement and your elevator pitch. It includes the words your CEO uses in investor meetings and the tone your support team uses in help desk responses. It includes the metaphors you reach for when explaining what you do and the stories you tell about your customers. All of it is language. All of it shapes the relationship.
          </p>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 24 }}>
            The lean approach to brand language starts with the same question the lean approach to brand starts with: what relationship are we actually building? From there, you work backward to the words that would make that relationship real. You then test those words in the world -- in your website, in your pitch deck, in your onboarding flow -- and measure whether they create the connection you hypothesized. Iterate. Learn. Adapt.
          </p>
          <p style={{ fontSize: 16, color: '#666', lineHeight: 1.7, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 0 }}>
            Brand language isn't a deliverable. It's a living system that grows and evolves as the relationship deepens.
          </p>
          <div style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #D8D3CC' }}>
            <a href="/blog" style={{ fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.3em', color: '#343434', textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>&larr; Back to Field Notes</a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}