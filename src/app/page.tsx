export default function HomePage() {
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

      {/* HERO / BOOK VIEW */}
      <div style={{ backgroundColor: '#f93', boxShadow: 'inset 0 0 30px #ff8000', paddingBottom: 40 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* Left col */}
            <div style={{ flex: '0 0 60%', boxSizing: 'border-box', paddingRight: 20 }}>
              <h1 style={{ color: '#fff', marginTop: 60, marginBottom: 6, fontSize: 38, fontWeight: 'normal', lineHeight: 1.2 }}>Brand, Meet Lean.</h1>
              <div style={{ marginTop: 10 }}>
                <h4 style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 21, fontWeight: 'normal', lineHeight: 1.4 }}>
                  Discover the winning relationship with your audience.
                </h4>
                <p style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 18, lineHeight: 1.6, marginTop: 10, marginBottom: 20 }}>
                  <em>The Lean Brand</em> is the first book to apply the rigor of Lean Startup to the marketing black-box of brand development. Learn how to move fast, reduce risk, experiment often, and create value-based passionate relationships with your audience.
                </p>
              </div>
              <a
                href="/order"
                style={{
                  display: 'inline-block',
                  marginTop: 20,
                  padding: '15px 30px',
                  backgroundColor: '#ff8000',
                  color: '#fff',
                  border: '3px solid #fff',
                  fontFamily: 'Montserrat, Arial, sans-serif',
                  fontSize: 18,
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 400ms ease',
                }}
              >
                Order Your Copy
              </a>
              {/* Order from buttons */}
              <div style={{ marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 20 }}>
                <p style={{ color: '#fff', fontSize: 12, marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', textTransform: 'uppercase' }}>Order from:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                  <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#fff', color: '#333', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 11, textTransform: 'uppercase', textDecoration: 'none' }}>Barnes &amp; Noble</a>
                  <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#fff', color: '#333', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 11, textTransform: 'uppercase', textDecoration: 'none' }}>Amazon</a>
                </div>
              </div>
            </div>
            {/* Right col - book cover */}
            <div style={{ flex: '0 0 40%', boxSizing: 'border-box' }}>
              <img
                src="https://cvylyy.media.zestyio.com/the_lean_brand_hardcover_final_10002.png"
                alt="The Lean Brand book cover"
                style={{ width: '100%', marginTop: 50, display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN QUOTE */}
      <div style={{ backgroundColor: '#ff8c1a', padding: '20px' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 18, lineHeight: 1.6, color: '#fff', textShadow: '0 -1px 0 #c60', fontStyle: 'italic' }}>
          <em style={{ display: 'block', textAlign: 'right', fontSize: 24, marginBottom: 5 }}>
            &ldquo;A Brand is the relationship between an organization and an audience.&rdquo;
          </em>
          <span style={{ fontStyle: 'normal', fontSize: 16 }}>
            Not the butterfly-in-your-stomach type. The real and powerful relationship formed between an organization and people. Products create functional-value. Brands create emotional-value through the human connections they facilitate.
          </span>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <div style={{ backgroundColor: '#fff', padding: '40px 0' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap' }}>
          {[
            {
              img: 'https://cvylyy.media.zestyio.com/marty.jpg?width=150&height=150&fit=crop',
              quote: '"Gardner grabs hold of brand and gives it a good yank, redefining it as the relationship between an organization and its audience. If you appreciate the principles of lean management, read this provocative book."',
              author: 'Marty Neumeier',
              title: 'Author of The Brand Gap, Director of Transformation, Liquid Agency',
            },
            {
              img: 'https://cvylyy.media.zestyio.com/randy-hunt.jpg?width=150&height=150&fit=crop',
              quote: '"The problem with most approaches to branding is that they get in their own way. They\'ve managed to make the work of managing and building brands more opaque, more complicated, and less accessible. The Lean Brand takes the opposite approach: a manageable and understandable set of concepts, tools, and methodologies to make informed brand decisions."',
              author: 'Randy Hunt',
              title: 'Creative Director, Etsy',
            },
            {
              img: 'https://cvylyy.media.zestyio.com/randy-apuzzo.jpg?width=150&height=150&fit=crop',
              quote: '"Applying the Lean Brand methodology to software development and strategy has resulted in great positive responses externally from our customers and internally from our team."',
              author: 'Randy Apuzzo',
              title: 'CEO of Zesty.io',
            },
            {
              img: 'https://cvylyy.media.zestyio.com/brant-cooper.jpg?width=150&height=150&fit=crop',
              quote: '"Branding is the last bastion of old school, unaccountable marketing practices. But no more. The Lean Brand brings branding into our new world of value-creation, meaningful relationships with customers, and data-informed marketing decisions."',
              author: 'Brant Cooper',
              title: 'Author of The Lean Entrepreneur',
            },
          ].map((t, i) => (
            <div key={i} style={{ flex: '0 0 50%', boxSizing: 'border-box', padding: '20px 15px', minHeight: 140 }}>
              <img src={t.img} alt={t.author} style={{ float: 'left', marginTop: 5, borderRadius: '50%', width: '21%' }} />
              <p style={{ float: 'right', width: '69%', marginTop: 12, fontSize: 15, color: '#666', lineHeight: 1.4, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                {t.quote}
              </p>
              <p style={{ clear: 'both', fontSize: 14, fontWeight: 600, color: '#333', textAlign: 'right', paddingTop: 4, marginBottom: 4, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {t.author}
              </p>
              <p style={{ color: '#999', fontSize: 14, textAlign: 'right', fontFamily: 'Montserrat, Arial, sans-serif' }}>
                {t.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* AUTHOR SECTION */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '40px 0', borderTop: '1px solid #ccc' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e78c29', marginBottom: 0, marginLeft: 1, fontFamily: 'Montserrat, Arial, sans-serif' }}>About the Author</p>
          <h3 style={{ color: '#000', fontSize: 40, marginTop: 5, textTransform: 'uppercase', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal' }}>Jeremiah Gardner</h3>
          <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7, maxWidth: 600, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            Jeremiah Gardner is an author, speaker, lean brand practitioner, and bulldog lover. He helps startups, entrepreneurs and Fortune 500 organizations reframe the way they think about brand innovation, culture, and leadership. He is the author of <em>The Lean Brand</em>, the first book to apply lean principles to branding, is a sought after speaker, and has been featured in several media outlets including Lifehacker.com, The Guardian, Branding Magazine, and SayDaily. Reach him{' '}
            <a href="https://twitter.com/JeremiahGardner" target="_blank" rel="noopener" style={{ color: '#e78c29' }}>@JeremiahGardner</a> or <a href="https://jeremiahgardner.com" target="_blank" rel="noopener" style={{ color: '#e78c29' }}>jeremiahgardner.com</a>.
          </p>
          <a href="mailto:hello@theleanbrand.me?subject=Book Jeremiah To Speak" style={{ display: 'inline-block', marginTop: 15, color: '#343434', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 14, textDecoration: 'none', textTransform: 'uppercase' }}>
            Invite Jeremiah To Speak
          </a>
        </div>
      </div>

    </div>
  )
}