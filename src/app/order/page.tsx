export default function OrderPage() {
  return (
    <div style={{ paddingTop: 46, backgroundColor: '#f7f7f7', minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif' }}>

      <style>{`
        @media (max-width: 600px) {
          .edition-card {
            flex-direction: column !important;
          }
          .edition-card img, .edition-card .ebook-placeholder {
            width: 100% !important;
            max-width: 160px !important;
            margin: 0 auto !important;
          }
          .toc-columns {
            column-count: 1 !important;
          }
          .case-studies-row {
            flex-direction: column !important;
            gap: 12px !important;
          }
          .retailer-bar {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
          }
        }
      `}</style>

      {/* RETAILER BAR - DARK (#111) */}
      <div style={{ backgroundColor: '#111', padding: '12px 0', fontSize: 11 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }} className="retailer-bar">
          <span style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9 }}>Hardcopy Available On:</span>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-brant-cooper/1134551364?ean=9780996100724" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes & Noble</a>
          <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations/dp/0996100725/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Amazon</a>
          <span style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9, marginLeft: 10 }}>eBook Available On:</span>
          <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Google Play</a>
          <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Apple Books</a>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes & Noble</a>
        </div>
      </div>

      {/* PAGE HEADER */}
      <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #ccc', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ fontSize: 38, fontWeight: 'normal', color: '#efa24d', marginBottom: 10, textTransform: 'uppercase', fontFamily: 'Montserrat, Arial, sans-serif' }}>Order Your Copy</h1>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7, maxWidth: 600, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            The Lean Brand is the first book to apply lean principles to brand development to help organizations create value-based, passionate relationships with their audience. The Lean Brand is not new jargon for old thinking, but an entirely new approach to brand development to help your company adapt to an evolving marketplace.
          </p>
        </div>
      </div>

      {/* ORDER OPTIONS - 3 EDITION CARDS */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>

          {/* Hardcover card */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: 30, marginBottom: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }} className="edition-card">
              <img
                src="https://cvylyy.media.zestyio.com/the_lean_brand_hardcover_final_10002.png"
                alt="The Lean Brand Hardcover"
                style={{ width: 140, height: 'auto', display: 'block' }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 22, color: '#343434', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal', marginBottom: 6, textTransform: 'uppercase' }}>Hardcover</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>
                  The full book in print. Use the Lean Brand Stack tools in your team sessions, annotate, and share. 12 chapters, 224 pages.
                </p>
                <p style={{ fontSize: 12, color: '#888', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>ISBN 978-0-9961007-4-8</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-brant-cooper/1134551364?ean=9780996100724" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Barnes & Noble</a>
                  <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations/dp/0996100725/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Amazon</a>
                </div>
              </div>
            </div>
          </div>

          {/* Paperback card */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: 30, marginBottom: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }} className="edition-card">
              <img
                src="https://cvylyy.media.zestyio.com/the_lean_brand_paperback_final_10001.png"
                alt="The Lean Brand Paperback"
                style={{ width: 140, height: 'auto', display: 'block' }}
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 22, color: '#343434', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal', marginBottom: 6, textTransform: 'uppercase' }}>Paperback</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>
                  The full book in print, paperback edition. Same content, lighter weight.
                </p>
                <p style={{ fontSize: 12, color: '#888', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>ISBN 978-0-9961007-3-1</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100731" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Barnes & Noble</a>
                  <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100738" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Amazon</a>
                </div>
              </div>
            </div>
          </div>

          {/* eBook card */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: 30, marginBottom: 20 }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }} className="edition-card">
              <div style={{ width: 140, height: 180, backgroundColor: '#f93', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="ebook-placeholder">
                <span style={{ color: '#fff', fontSize: 48, fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>eBook</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: 22, color: '#343434', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal', marginBottom: 6, textTransform: 'uppercase' }}>eBook</h3>
                <p style={{ fontSize: 16, color: '#555', lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>
                  Instant delivery. Searchable, portable, and always accessible. Optimized for Kindle, iPad, and all e-readers.
                </p>
                <p style={{ fontSize: 12, color: '#888', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>ISBN 978-0-9961007-0-0</p>
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                  <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations-ebook/dp/B00NG0M1G2/ref=tmm_kin_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Amazon Kindle</a>
                  <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Apple Books</a>
                  <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Google Play</a>
                  <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '10px 20px', backgroundColor: '#ff8000', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>Barnes & Noble</a>
                </div>
              </div>
            </div>
          </div>

          {/* Table of Contents - 2 cols desktop, 1 col mobile via CSS columns */}
          <div style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: 30, marginTop: 30 }}>
            <h2 style={{ fontSize: 28, color: '#343434', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal', marginBottom: 20, textTransform: 'uppercase' }}>Table of Contents</h2>
            <div style={{ columnCount: 2, columnGap: 40 }} className="toc-columns">
              {[
                'Foreword by Brant Cooper',
                'Introduction',
                'Chapter 1: Brand, Meet Lean',
                'Chapter 2: The Brand Revolution',
                'Chapter 3: The Anatomy of a Brand',
                'Chapter 4: Brand Language',
                'Chapter 5: The Lean Brand Framework',
                'Chapter 6: The Persona Grid',
                'Chapter 7: The Value Proposition Canvas',
                'Chapter 8: The Brand Language Ecosystem',
                'Chapter 9: The Minimum Viable Brand',
                'Chapter 10: Brand Learning',
                'Chapter 11: The Lean Brand Stack',
                'Chapter 12: Lean Branding in Practice',
                'Appendix A: The Tools',
                'Appendix B: Resources',
              ].map((item) => (
                <p key={item} style={{ fontSize: 14, color: '#555', lineHeight: 1.8, marginBottom: 4, breakInside: 'avoid', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Case Studies Row */}
          <div style={{ marginTop: 40, padding: '20px 0', borderTop: '1px solid #ccc' }}>
            <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Case Studies Include:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px' }} className="case-studies-row">
              {['Airbnb', 'Warby Parker', 'Buffer', 'SoulPancake', 'GE Fastworks', 'Betabrand', 'Zesty.io', 'Code for America', 'The Moth', 'Netflix'].map(c => (
                <span key={c} style={{ fontSize: 14, color: '#555', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>{c}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}