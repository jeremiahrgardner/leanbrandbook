export default function ArtworkPage() {
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

      {/* HEADER */}
      <div style={{ backgroundColor: '#f93', padding: '40px 0', boxShadow: 'inset 0 0 30px #ff8000' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: '#fff', fontSize: 38, fontWeight: 'normal', textTransform: 'uppercase', margin: 0 }}>Book Artwork</h1>
          <p style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 18, marginTop: 10, lineHeight: 1.6 }}>
            The Lean Brand cover artwork and interior graphics. <em>Cover artwork subject to change.</em>
          </p>
        </div>
      </div>

      {/* ARTWORK GRID */}
      <div style={{ backgroundColor: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
            {[
              { src: 'https://cvylyy.media.zestyio.com/the_lean_brand_hardcover_final_10002.png', alt: 'Hardcover Cover', label: 'Hardcover' },
              { src: 'https://cvylyy.media.zestyio.com/the_lean_brand_paperback_final_10001.png', alt: 'Paperback Cover', label: 'Paperback' },
            ].map((img) => (
              <div key={img.src} style={{ flex: '0 0 calc(50% - 10px)', boxSizing: 'border-box' }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{ width: '100%', display: 'block', border: '1px solid #ccc' }}
                />
                <p style={{ textAlign: 'center', fontSize: 12, color: '#888', marginTop: 8, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{img.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}