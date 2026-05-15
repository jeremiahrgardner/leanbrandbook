export default function StackPage() {
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
      <div style={{ backgroundColor: '#efa24d', boxShadow: 'inset 0 0 30px rgba(0,0,0,0.15)', paddingBottom: 40 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ color: '#fff', marginTop: 60, marginBottom: 6, fontSize: 38, fontWeight: 'normal', lineHeight: 1.2 }}>The Lean Brand Stack</h1>
          <p style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 18, lineHeight: 1.6, marginTop: 10, marginBottom: 20, maxWidth: 600 }}>
            Four essential tools for building meaningful relationships with your audience through experimentation, iteration, and value-based connection.
          </p>
        </div>
      </div>

      {/* TOOLS SECTION */}
      <div style={{ maxWidth: 970, margin: '0 auto', padding: '40px 20px' }}>

        {/* PERSONA GRID */}
        <div className="tool-card">
          <h2>Persona Grid</h2>
          <p>
            The Persona Grid helps you move beyond assumptions and truly understand your audience. Rather than creating fictional characters, this tool guides you through identifying real people, their jobs-to-be-done, and the value they seek. Use it to shift from demographic guessing to empirical audience insight.
          </p>
          <h3>Key Elements</h3>
          <ul>
            <li>Identify the audience you want to build a relationship with</li>
            <li>Define jobs-to-be-done rather than demographic traits</li>
            <li>Map value expectations and emotional drivers</li>
            <li>Test assumptions through direct audience interaction</li>
            <li>Iterate based on real feedback, not internal consensus</li>
          </ul>
        </div>

        {/* VALUE PROPOSITION CANVAS */}
        <div className="tool-card">
          <h2>Value Proposition Canvas</h2>
          <p>
            The Value Proposition Canvas ensures your brand creates genuine value for your audience. It forces clarity around what problems you solve, what gains you create, and how you alleviate pain. Use it to align your offerings with actual audience needs.
          </p>
          <h3>Key Elements</h3>
          <ul>
            <li>Define the audience profile and their core objectives</li>
            <li>Identify pains and the emotional burden they create</li>
            <li>Articulate gains and the value they seek</li>
            <li>Map products and services that address pains and create gains</li>
            <li>Create fit between your value proposition and audience needs</li>
          </ul>
        </div>

        {/* BRAND LANGUAGE ECOSYSTEM */}
        <div className="tool-card">
          <h2>Brand Language Ecosystem</h2>
          <p>
            The Brand Language Ecosystem provides a framework for expressing your brand consistently across every touchpoint. It goes beyond logos and colors to encompass voice, tone, messaging architecture, and the emotional qualities that differentiate you. Use it to build recognizable, meaningful relationships.
          </p>
          <h3>Key Elements</h3>
          <ul>
            <li>Establish brand voice and tonal qualities</li>
            <li>Define messaging hierarchy from taglines to detailed copy</li>
            <li>Create visual language consistency across channels</li>
            <li>Build emotional association frameworks</li>
            <li>Enable team members to express the brand authentically</li>
          </ul>
        </div>

        {/* MINIMUM VIABLE BRAND CANVAS */}
        <div className="tool-card">
          <h2>Minimum Viable Brand Canvas</h2>
          <p>
            The Minimum Viable Brand Canvas synthesizes the other three tools into a single actionable framework. It helps you launch a brand with just enough definition to test your assumptions without over-investing. Use it to move fast, learn quickly, and build value-based relationships from day one.
          </p>
          <h3>Key Elements</h3>
          <ul>
            <li>Define your minimum viable brand in one page</li>
            <li>Integrate persona, value proposition, and language elements</li>
            <li>Identify riskiest assumptions to test first</li>
            <li>Create a feedback loop for continuous iteration</li>
            <li>Scale brand investments based on validated learning</li>
          </ul>
        </div>

      </div>

      <style>{`
        .tool-card {
          background-color: #fff;
          margin-bottom: 40px;
          padding: 30px;
        }

        .tool-card h2 {
          color: #343434;
          font-size: 28px;
          font-weight: normal;
          margin-top: 0;
          margin-bottom: 10px;
          border-bottom: 3px solid #efa24d;
          padding-bottom: 10px;
          display: inline-block;
        }

        .tool-card p {
          color: #555;
          font-size: 16px;
          line-height: 1.7;
          font-family: 'Helvetica Neue, Helvetica, Arial, sans-serif';
          margin-bottom: 20px;
        }

        .tool-card h3 {
          color: #efa24d;
          font-size: 14px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 15px;
          font-family: 'Montserrat', Arial, sans-serif;
        }

        .tool-card ul {
          color: #343434;
          font-size: 15px;
          line-height: 1.8;
          font-family: 'Helvetica Neue, Helvetica, Arial, sans-serif';
          padding-left: 20px;
        }

        /* Desktop: 2-column grid with shadow */
        @media (min-width: 768px) {
          .tool-card {
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .tool-card:nth-child(odd) {
            margin-right: 20px;
          }

          .tool-card {
            display: inline-block;
            width: calc(50% - 20px);
            vertical-align: top;
          }
        }
      `}</style>

    </div>
  )
}