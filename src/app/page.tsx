export default function HomePage() {
  return (
    <div style={{ paddingTop: 46, backgroundColor: '#f7f7f7', minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif' }}>

      {/* RETAILER BAR */}
      <div style={{ backgroundColor: '#111', padding: '12px 0', fontSize: 11 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }}>
          <span style={{ color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9 }}>Hardcopy Available On:</span>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-brant-cooper/1134551364?ean=9780996100724" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes &amp; Noble</a>
          <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations/dp/0996100725/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Amazon</a>
          <span style={{ color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9, marginLeft: 10 }}>eBook Available On:</span>
          <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Google Play</a>
          <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Apple Books</a>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes &amp; Noble</a>
        </div>
      </div>

      {/* HERO / BOOK VIEW */}
      <div style={{ backgroundColor: '#f93', boxShadow: 'inset 0 0 30px #ff8000', paddingBottom: 40 }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div className="hero-grid">
            {/* Left col */}
            <div className="hero-text">
              <h1 style={{ color: '#fff', marginTop: 60, marginBottom: 6, fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: 'normal', lineHeight: 1.2 }}>
                Brand, Meet Lean.
              </h1>
              <h4 style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 'clamp(16px, 2.5vw, 21px)', fontWeight: 'normal', lineHeight: 1.4, marginTop: 10 }}>
                Discover the winning relationship with your audience.
              </h4>
              <p style={{ color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 18, lineHeight: 1.6, marginTop: 10, marginBottom: 20 }}>
                <em>The Lean Brand</em> is the first book to apply the rigor of Lean Startup to the marketing black-box of brand development. Learn how to move fast, reduce risk, experiment often, and create value-based passionate relationships with your audience.
              </p>
              <a
                href="/order"
                style={{
                  display: 'inline-block', marginTop: 20,
                  padding: '15px 30px', backgroundColor: '#ff8000', color: '#fff',
                  border: '3px solid #fff', fontFamily: 'Montserrat, Arial, sans-serif',
                  fontSize: 18, textTransform: 'uppercase', textDecoration: 'none',
                }}
              >
                Order Your Copy
              </a>
              {/* Order from buttons */}
              <div style={{ marginTop: 40, borderTop: '1px solid rgba(255,255,255,0.3)', paddingTop: 20 }}>
                <p style={{ color: '#fff', fontSize: 12, marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif', textTransform: 'uppercase' }}>Order from:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                  <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-brant-cooper/1134551364?ean=9780996100724" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#fff', color: '#333', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 11, textTransform: 'uppercase', textDecoration: 'none' }}>Barnes &amp; Noble</a>
                  <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations/dp/0996100725/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ display: 'inline-block', padding: '8px 16px', backgroundColor: '#fff', color: '#333', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 11, textTransform: 'uppercase', textDecoration: 'none' }}>Amazon</a>
                </div>
              </div>
            </div>
            {/* Right col - book cover */}
            <div className="hero-book">
              <img
                src="https://cvylyy.media.zestyio.com/the_lean_brand_hardcover_final_10002.png"
                alt="The Lean Brand book cover"
                style={{ width: '100%', marginTop: 50, display: 'block', maxWidth: 340 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MAIN QUOTE */}
      <div style={{ backgroundColor: '#ff8c1a', padding: '20px' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', fontSize: 18, lineHeight: 1.6, color: '#fff', textShadow: '0 -1px 0 #c60' }}>
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
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div className="testimonial-grid">
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
              <div key={i} className="testimonial-card">
                <img src={t.img} alt={t.author} className="testimonial-avatar" />
                <p className="testimonial-quote">{t.quote}</p>
                <p className="testimonial-author">{t.author}</p>
                <p className="testimonial-title">{t.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AUTHOR SECTION */}
      <div style={{ backgroundColor: '#f7f7f7', padding: '40px 0', borderTop: '1px solid #ccc' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div className="author-grid">
            <div className="author-text">
              <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e78c29', marginBottom: 0, marginLeft: 1, fontFamily: 'Montserrat, Arial, sans-serif' }}>About the Author</p>
              <h3 style={{ color: '#000', fontSize: 'clamp(28px, 4vw, 40px)', marginTop: 5, textTransform: 'uppercase', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal' }}>Jeremiah Gardner</h3>
              <p style={{ color: '#555', fontSize: 16, lineHeight: 1.7, maxWidth: 600, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                Jeremiah Gardner is an author, speaker, lean brand practitioner, and bulldog lover. He helps startups, entrepreneurs and Fortune 500 organizations reframe the way they think about brand innovation, culture, and leadership. He is the author of <em>The Lean Brand</em>, the first book to apply lean principles to branding, is a sought after speaker, and has been featured in several media outlets including Lifehacker.com, The Guardian, Branding Magazine, and SayDaily. Reach him{' '}
                <a href="https://twitter.com/JeremiahGardner" target="_blank" rel="noopener" style={{ color: '#e78c29' }}>@JeremiahGardner</a> or <a href="https://jeremiahrgardner.com" target="_blank" rel="noopener" style={{ color: '#e78c29' }}>jeremiahrgardner.com</a>.
              </p>
              <a href="mailto:hello@theleanbrand.me?subject=Book Jeremiah To Speak" style={{ display: 'inline-block', marginTop: 15, color: '#343434', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 14, textDecoration: 'none', textTransform: 'uppercase' }}>
                Invite Jeremiah To Speak
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 60% 40%;
          gap: 0;
          align-items: start;
        }
        .hero-text { padding-right: 24px; }
        .hero-book { padding-left: 0; }
        .testimonial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .testimonial-card {
          padding: 20px 15px;
          min-height: 140;
        }
        .testimonial-avatar {
          float: left;
          margin-top: 5;
          border-radius: 50%;
          width: 21%;
          margin-right: 4%;
        }
        .testimonial-quote {
          float: right;
          width: 69%;
          margin-top: 12;
          font-size: 15;
          color: #666;
          line-height: 1.4;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          margin-bottom: 4px;
        }
        .testimonial-author {
          clear: both;
          font-size: 14;
          font-weight: 600;
          color: #333;
          text-align: right;
          padding-top: 4;
          margin-bottom: 4;
          font-family: 'Montserrat', Arial, sans-serif;
        }
        .testimonial-title {
          color: #999;
          font-size: 14;
          text-align: right;
          font-family: 'Montserrat', Arial, sans-serif;
        }
        .author-grid {
          display: grid;
          grid-template-columns: 1fr;
        }
        @media (max-width: 767px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
          .hero-text { padding-right: 0; }
          .hero-book { display: none; }
          .testimonial-grid {
            grid-template-columns: 1fr;
          }
          .testimonial-avatar,
          .testimonial-quote {
            float: none;
            width: 100%;
            margin-right: 0;
          }
          .testimonial-author,
          .testimonial-title {
            text-align: left;
          }
        }
      `}</style>
    </div>
  )
}