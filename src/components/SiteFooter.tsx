import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer style={{ textAlign: 'center', backgroundColor: '#eee', paddingTop: 10, paddingBottom: 30, marginTop: 0 }}>
      <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 20, marginBottom: 20 }}>
          <div>
            <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Pages</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <Link href="/order" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>Order</Link>
              <Link href="/about" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>What You&apos;ll Learn</Link>
              <Link href="/blog" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>Blog</Link>
              <Link href="/stack" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>Stack</Link>
              <Link href="/artwork" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>Artwork</Link>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Author</p>
            <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
              <a href="https://jeremiahgardner.com" target="_blank" rel="noopener" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>JeremiahGardner.com</a>
              <a href="https://twitter.com/JeremiahGardner" target="_blank" rel="noopener" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>@JeremiahGardner</a>
              <a href="mailto:hello@theleanbrand.me" style={{ color: '#efa24d', fontSize: 12, textDecoration: 'none', fontFamily: 'Montserrat, Arial, sans-serif' }}>hello@theleanbrand.me</a>
            </div>
          </div>
        </div>
        <hr style={{ border: 'none', borderBottom: '1px solid #ccc', margin: '20px 0' }} />
        <p style={{ fontSize: 10, color: '#666', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          &copy; 2013-2025 Jeremiah Gardner | All rights reserved. <em>The Lean Brand</em> is a registered Trademark of Jeremiah Gardner. <em>The Lean Brand</em> cover artwork subject to change.
        </p>
        <p style={{ fontSize: 10, color: '#666', fontFamily: 'Montserrat, Arial, sans-serif' }}>
          Site by <a href="https://www.zesty.io/" target="_blank" rel="noopener" style={{ color: '#efa24d', fontSize: 10 }}>Zesty.io</a>
        </p>
      </div>
    </footer>
  )
}