export default function AboutPage() {
  return (
    <div style={{ backgroundColor: '#f7f7f7', minHeight: '100vh', fontFamily: 'Montserrat, Arial, sans-serif' }}>

      <style>{`
        @media (max-width: 768px) {
          .retailer-bar-inner {
            justify-content: flex-start !important;
          }
          .retailer-bar-inner span.retailer-label,
          .retailer-bar-inner a {
            font-size: 9px !important;
          }
          .header-title {
            font-size: 28px !important;
          }
          .header-subtitle {
            font-size: 18px !important;
          }
          .framework-phase {
            flex: 0 0 50% !important;
          }
          .testimonial-item {
            flex: 0 0 100% !important;
            margin-bottom: 30px;
          }
          .author-content {
            flex-direction: column !important;
          }
          .author-text {
            margin-left: 0 !important;
            margin-top: 15px;
          }
          .popular-articles a {
            font-size: 14px !important;
          }
        }
        @media (max-width: 480px) {
          .framework-phase {
            flex: 0 0 100% !important;
          }
          .retailer-links {
            flex-direction: column !important;
            gap: 5px !important;
          }
          .retailer-bar-inner span.retailer-label {
            display: none !important;
          }
        }
      `}</style>

      {/* RETAILER BAR */}
      <div style={{ backgroundColor: '#111', padding: '12px 0', fontSize: 11 }}>
        <div className="retailer-bar-inner" style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px', display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }}>
          <span className="retailer-label" style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9 }}>Hardcopy Available On:</span>
          <div className="retailer-links" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px 20px', alignItems: 'center' }}>
            <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-brant-cooper/1134551364?ean=9780996100724" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes & Noble</a>
            <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Organizations/dp/0996100725/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.oleg4IpSzk4W5T9hLV-VHWJXr94n42q8RMohWke07n0_azYjRKUW8EyT-yhusqyUTQOkCA3tOBZp83aiFIXcrcz6xIHGtROWb6aoCq4SjYQ6xlPjTCEdWVDc_7MQNoJ1RjiMbOKGYHiEX3KjsLQjsmIUkjowPKpz4lwY1deVA_Sedwail8t0zNeY2nkhDkoyt4ANxz8cXTPheH4axTRNpQBz20UAzUEnTZbrPYJ5vpE.iitdqx7jdDmyam6POFexHtOnIbxsG84soRNJP2m2PzQ&qid=1778811685&sr=8-1" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Amazon</a>
            <span className="retailer-label" style={{ color: '#B89B5E', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: 9, marginLeft: 10 }}>eBook Available On:</span>
            <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Google Play</a>
            <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Apple Books</a>
            <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener" style={{ color: '#D8D3CC', fontSize: 10 }}>Barnes & Noble</a>
          </div>
        </div>
      </div>

      {/* HEADER SECTION */}
      <section style={{ backgroundColor: '#fff', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <h1 className="header-title" style={{ color: '#343434', fontSize: 40, fontWeight: 'normal', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>About the Book</h1>
          <h3 className="header-subtitle" style={{ color: '#343434', fontSize: 22, fontWeight: 'normal', lineHeight: 1.4, marginBottom: 15, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
            Great brands do more than just satisfy customers, they create passionate ones.
          </h3>
          <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>
            Thousands of startups, entrepreneurs, and enterprise corporations struggle to build passionate relationships with their audience. That&apos;s because the practice of branding has devolved into clever wordplay, spinning, distraction, and pricey deliverables. Companies who buy into the old way miss out on the most crucial element for their success &ndash; a relationship based on shared value.
          </p>
          <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 15 }}>
            Today, great brands must do more than just spin, wow, or satisfy their customers, they must create passionate ones. <em>The Lean Brand</em> teaches you how to build that relationship in a validated, iterative way. A passionate audience has connected to something more than just a product with a specific feature set, or a clever ad campaign. They&apos;ve engaged with who an organization is at its core and participates in the journey toward shared value.
          </p>
          <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 25 }}>
            As the first book to apply lean principles to brand development to teach you how to develop meaningful relationships with your audience based on a shared journey of value creation, <em>The Lean Brand</em> will teach you:
          </p>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN SECTION */}
      <section style={{ backgroundColor: '#fff', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e78c29', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>What You&apos;ll Learn</p>
          <div style={{ maxWidth: 700 }}>
            <div style={{ marginBottom: 20, paddingLeft: 15, borderLeft: '3px solid #efa24d' }}>
              <p style={{ color: '#343434', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                The new <strong>definition</strong> of brand
              </p>
            </div>
            <div style={{ marginBottom: 20, paddingLeft: 15, borderLeft: '3px solid #efa24d' }}>
              <p style={{ color: '#343434', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                How to <strong>build passion</strong> with your customers using the <strong>Lean Brand Framework</strong>
              </p>
            </div>
            <div style={{ marginBottom: 20, paddingLeft: 15, borderLeft: '3px solid #efa24d' }}>
              <p style={{ color: '#343434', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                How to use <strong>Viability Experiments</strong> with a <strong>Minimum Viable Brand</strong> to test and iterate your brand quickly to find Product-Market-Brand fit
              </p>
            </div>
            <div style={{ marginBottom: 20, paddingLeft: 15, borderLeft: '3px solid #efa24d' }}>
              <p style={{ color: '#343434', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                How to apply these principles effectively using a set of tools called The <strong>Lean Brand Stack</strong> which includes the <strong>Persona Grid</strong>, the <strong>MVB Canvas</strong>, the <strong>Experiment Map</strong> and the <strong>Value Stream Matrix</strong>
              </p>
            </div>
            <div style={{ marginBottom: 20, paddingLeft: 15, borderLeft: '3px solid #efa24d' }}>
              <p style={{ color: '#343434', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                How successful startups like <strong>Buffer</strong> and <strong>SoulPancake</strong> have used lean branding to build a strong customer base
              </p>
            </div>
          </div>
          <a href="/order" style={{ display: 'inline-block', marginTop: 10, padding: '15px 30px', backgroundColor: '#111', color: '#fff', fontFamily: 'Montserrat, Arial, sans-serif', fontSize: 12, textTransform: 'uppercase', textDecoration: 'none' }}>
            Get Your Copy Now
          </a>
        </div>
      </section>

      {/* THE LEAN BRAND FRAMEWORK SECTION */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e78c29', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>The Framework</p>
          <h2 style={{ color: '#343434', fontSize: 36, fontWeight: 'normal', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>The Lean Brand Framework</h2>
          <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 30 }}>
            The Lean Brand framework is about discovery. Through a process of solidifying your assumptions into hypotheses, you will learn to experiment to find validated learning in a &ldquo;live&rdquo; environment.
          </p>
          <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 30 }}>
            Lean branding uses an iterative and validated approach to the development of the relationship between an organization and an audience. The framework will introduce you to new concepts like the <strong>Emotional-Value Hypothesis</strong>, a <strong>Minimum Viable Brand</strong> and <strong>Product-Market-Brand Fit</strong>. The Lean Brand framework combines both theory and tools to provide an immediately useful framework for brand innovation and growth.
          </p>

          {/* 4 PHASES - responsive: 4-col desktop -> 2-col tablet -> 1-col mobile */}
          <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 30 }}>
            {/* Phase 1 */}
            <div className="framework-phase" style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '0 10px', marginBottom: 20 }}>
              <div style={{ backgroundColor: '#fff', padding: '25px 20px', height: '100%' }}>
                <p style={{ fontSize: 12, color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Phase 1</p>
                <h3 style={{ color: '#343434', fontSize: 20, fontWeight: 'normal', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Define</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  Discover your organization&apos;s core purpose, vision, mission, and values. Define the emotional-value hypothesis that will guide your brand.
                </p>
              </div>
            </div>
            {/* Phase 2 */}
            <div className="framework-phase" style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '0 10px', marginBottom: 20 }}>
              <div style={{ backgroundColor: '#fff', padding: '25px 20px', height: '100%' }}>
                <p style={{ fontSize: 12, color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Phase 2</p>
                <h3 style={{ color: '#343434', fontSize: 20, fontWeight: 'normal', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Validate</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  Create a Minimum Viable Brand to test your assumptions. Run viability experiments to validate or invalidate your emotional-value hypothesis.
                </p>
              </div>
            </div>
            {/* Phase 3 */}
            <div className="framework-phase" style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '0 10px', marginBottom: 20 }}>
              <div style={{ backgroundColor: '#fff', padding: '25px 20px', height: '100%' }}>
                <p style={{ fontSize: 12, color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Phase 3</p>
                <h3 style={{ color: '#343434', fontSize: 20, fontWeight: 'normal', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Build</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  Once validated, build out your brand identity, language, and experience. Iterate based on ongoing feedback and learning.
                </p>
              </div>
            </div>
            {/* Phase 4 */}
            <div className="framework-phase" style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '0 10px', marginBottom: 20 }}>
              <div style={{ backgroundColor: '#fff', padding: '25px 20px', height: '100%' }}>
                <p style={{ fontSize: 12, color: '#efa24d', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 10, fontFamily: 'Montserrat, Arial, sans-serif' }}>Phase 4</p>
                <h3 style={{ color: '#343434', fontSize: 20, fontWeight: 'normal', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Grow</h3>
                <p style={{ color: '#666', fontSize: 14, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  Scale your validated brand through systematic growth. Maintain the relationship while expanding your audience reach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY / WHO SECTION */}
      <section style={{ backgroundColor: '#fff', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <div style={{ marginBottom: 40 }}>
            <h4 style={{ color: '#343434', fontSize: 22, fontWeight: 'normal', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Why Write a Book?</h4>
            <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
              <em>The Lean Brand</em> was written to move our thinking, understanding, and practice of brand development forward. In short, <em>The Lean Brand</em> is about brand innovation. The intention is to help innovative startups, enterprises, and entrepreneurs fully develop emotional-value in their brand development efforts because truly great brands aren&rsquo;t strategically imagined ahead of time, they&rsquo;re discovered through experimentation, iteration, and validation on-the-go.
            </p>
          </div>
          <div style={{ marginBottom: 40 }}>
            <h4 style={{ color: '#343434', fontSize: 22, fontWeight: 'normal', marginBottom: 15, fontFamily: 'Montserrat, Arial, sans-serif' }}>Who Is It For?</h4>
            <p style={{ color: '#666', fontSize: 16, lineHeight: 1.7, maxWidth: 700, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
              <em>The Lean Brand</em> joins and deepens the Lean Startup movement to contribute a framework for startups to integrate your brand development into the activities and ideas you&apos;re already employing as a lean startup. Whereas <em>The Lean Startup</em> and <em>The Lean Entrepreneur</em> provide techniques to create innovative products, <em>The Lean Brand</em> focuses on developing innovative relationships. When combined, the ideas and practices expressed in <em>The Lean Startup</em>, <em>The Lean Entrepreneur</em>, and <em>The Lean Brand</em> provide a dynamic platform for innovation and creation in our new marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* AUTHOR SECTION */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e78c29', marginBottom: 0, fontFamily: 'Montserrat, Arial, sans-serif' }}>About the Author</p>
          <div className="author-content" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <h3 style={{ color: '#000', fontSize: 40, marginTop: 5, textTransform: 'uppercase', fontFamily: 'Montserrat, Arial, sans-serif', fontWeight: 'normal' }}>Jeremiah Gardner</h3>
            <div className="author-text" style={{ marginLeft: 30 }}>
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
      </section>

      {/* TESTIMONIALS SECTION */}
      <section style={{ backgroundColor: '#fff', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#e78c29', marginBottom: 30, fontFamily: 'Montserrat, Arial, sans-serif' }}>What People Are Saying</p>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
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
                img: 'https://cvylyy.media.zestyio.com/brant-cooper.jpg?width=150&height=150&fit=crop',
                quote: '"Branding is the last bastion of old school, unaccountable marketing practices. But no more. The Lean Brand brings branding into our new world of value-creation, meaningful relationships with customers, and data-informed marketing decisions."',
                author: 'Brant Cooper',
                title: 'Author of The Lean Entrepreneur',
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-item" style={{ flex: '0 0 33.333%', boxSizing: 'border-box', padding: '0 15px', marginBottom: 30 }}>
                <img src={t.img} alt={t.author} style={{ float: 'left', marginTop: 5, borderRadius: '50%', width: '21%', marginRight: '4%' }} />
                <p style={{ fontSize: 14, color: '#666', lineHeight: 1.5, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
                  {t.quote}
                </p>
                <p style={{ clear: 'both', fontSize: 14, fontWeight: 600, color: '#343434', paddingTop: 10, marginBottom: 2, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  {t.author}
                </p>
                <p style={{ color: '#999', fontSize: 12, fontFamily: 'Montserrat, Arial, sans-serif' }}>
                  {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ARTICLES SECTION */}
      <section style={{ backgroundColor: '#f7f7f7', padding: '40px 0', borderBottom: '1px solid #D8D3CC' }}>
        <div style={{ maxWidth: 970, margin: '0 auto', padding: '0 20px' }}>
          <p style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: 20, fontFamily: 'Montserrat, Arial, sans-serif' }}>Read Some Popular Articles</p>
          <div>
            {[
              { href: '/blog/what-is-lean-branding', title: 'What Is Lean Branding?' },
              { href: '/blog/brand-language-ecosystem', title: 'The Brand Language Ecosystem' },
              { href: '/blog/the-foundation-of-your-brand', title: 'The Foundation of Your Brand' },
              { href: '/blog/how-to-discover-who-you-are', title: 'How To Discover Who You Are...And Why You Matter' },
            ].map(({ href, title }) => (
              <a key={href} href={href} className="popular-articles" style={{ display: 'block', color: '#666', fontSize: 16, lineHeight: 1.6, fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif', marginBottom: 12, textDecoration: 'none' }}>
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}