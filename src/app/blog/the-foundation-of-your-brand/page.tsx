import SiteFooter from '@/components/SiteFooter'

export default function Page() {
  return (
    <div>
      <div style={{ backgroundColor: "#111", padding: "16px 24px" }}>
        <div style={{ maxWidth: "672px", margin: "0 auto", display: "flex", justifyContent: "center", gap: "32px", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#B89B5E" }}>Buy:</span>
          <a href="https://www.barnesandnoble.com/w/the-lean-brand-brandon-r-hottum/1141195208" style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", color: "#D8D3CC", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">B&amp;N</a>
          <a href="https://www.amazon.com/Lean-Brand-Brandon-Hottum/dp/1735477703" style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", color: "#D8D3CC", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">Amazon</a>
          <a href="https://play.google.com/store/books/details/Brandon_Hottum_The_Lean_Brand?id=6oF4DwAAQBAJ" style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", color: "#D8D3CC", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">Google Play</a>
          <a href="https://books.apple.com/us/book/lean-brand-brandon-hottum/id1612156231" style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "12px", color: "#D8D3CC", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">Apple Books</a>
        </div>
      </div>
      <section style={{ padding: "64px 24px 48px", borderBottom: "1px solid #D8D3CC" }}>
        <div style={{ maxWidth: "672px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#888", marginBottom: "16px" }}>Brand Foundation · July 2014</p>
          <h1 style={{ fontFamily: "Montserrat, sans-serif", fontSize: "30px", fontWeight: "bold", color: "#111", lineHeight: "1.25", marginBottom: "24px" }}>The Foundation of Your Brand</h1>
        </div>
      </section>
      <section style={{ padding: "48px 24px" }}>
        <div style={{ maxWidth: "672px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "16px", color: "#666", lineHeight: "1.625", marginBottom: "24px" }}>Before you build a brand, you need to know what you're building it on. Most brand development starts in the wrong place. Teams gather in conference rooms to brainstorm names, design logos, write taglines. They iterate on visual identities and debate color palettes. And somewhere in all of that, they lose sight of the fundamental question: what is this brand actually for? The Lean Brand starts from a different premise. A brand is the relationship between an organization and an audience. The question isn't 'what should our brand look like?' The question is 'what relationship are we building -- and is it worth building?' That question has to be answered before anything else. It shapes everything that follows. If you don't know what relationship you're trying to create, you can't know whether your logo is right, your copy is working, or your product experience is delivering what you promised. The foundation of your brand is not your visual identity. It's not your name or your tagline or your brand guidelines document. The foundation is the relationship you aspire to build with a specific group of people -- and the proof that that relationship has value to them. Everything else -- the words you use, the visual system you create, the stories you tell -- is an expression of that foundation. It can only be right if the foundation is right. And you can only know if the foundation is right by getting out of the building and testing it with real people.</p>
          <div style={{ marginTop: "48px", paddingTop: "32px", borderTop: "1px solid #D8D3CC" }}>
            <a href="/blog" style={{ fontFamily: "Helvetica Neue, sans-serif", fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "#111", textDecoration: "none" }}>&larr; Back to Field Notes</a>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  )
}