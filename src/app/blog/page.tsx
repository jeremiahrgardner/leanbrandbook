export default function BlogPage() {
  return (
    <div>
      <section className="min-h-[40vh] flex flex-col justify-center px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            Field Notes
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            Articles and thinking on brand, lean methodology, and building passionate relationships with your audience.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="border-t border-[#D8D3CC] pt-12">
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-8">Popular Articles</h2>
            <div className="space-y-8">
              <article>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580] mb-2">Brand</p>
                <a href="/blog/what-is-lean-branding" className="block font-serif text-xl text-[#111111] hover:text-[#B89B5E] transition-colors mb-2">
                  What Is Lean Branding?
                </a>
                <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">
                  An introduction to the core principles of lean brand development.
                </p>
              </article>
              <div className="border-t border-[#D8D3CC] pt-8" />
              <article>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580] mb-2">Brand Language</p>
                <a href="/blog/brand-language-ecosystem" className="block font-serif text-xl text-[#111111] hover:text-[#B89B5E] transition-colors mb-2">
                  The Brand Language Ecosystem
                </a>
                <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">
                  How your brand's language creates meaning and connection.
                </p>
              </article>
              <div className="border-t border-[#D8D3CC] pt-8" />
              <article>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580] mb-2">Brand Foundation</p>
                <a href="/blog/the-foundation-of-your-brand" className="block font-serif text-xl text-[#111111] hover:text-[#B89B5E] transition-colors mb-2">
                  The Foundation of Your Brand
                </a>
                <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">
                  Building on the relationship between organization and audience.
                </p>
              </article>
              <div className="border-t border-[#D8D3CC] pt-8" />
              <article>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580] mb-2">Discovery</p>
                <a href="/blog/how-to-discover-who-you-are" className="block font-serif text-xl text-[#111111] hover:text-[#B89B5E] transition-colors mb-2">
                  How To Discover Who You Are...And Why You Matter
                </a>
                <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">
                  The lean approach to uncovering your brand's core identity.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
