export default function AboutPage() {
  return (
    <div>
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">What You'll Learn</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            Great brands do more than just satisfy customers, they create passionate ones.
          </h1>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-16">
            <p className="font-serif text-xl font-light text-[#8a8580] leading-relaxed mb-10">
              Thousands of startups, entrepreneurs, and enterprise corporations struggle to build passionate relationships with their audience. That's because the practice of branding has devolved into clever wordplay, spinning, distraction, and pricey deliverables. Companies who buy into the old way miss out on the most crucial element for their success – a relationship based on shared value.
            </p>
            <p className="font-serif text-xl font-light text-[#8a8580] leading-relaxed mb-10">
              Today, great brands must do more than just spin, wow, or satisfy their customers, they must create passionate ones. The Lean Brand teaches you how to build that relationship in a validated, iterative way.
            </p>
          </div>

          <div className="border-t border-[#D8D3CC] pt-12 mb-16">
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-8">What You'll Learn</h2>
            <ul className="space-y-4">
              {[
                'The new <strong>definition of brand</strong>',
                'How to <strong>build passion</strong> with your customers using the <strong>Lean Brand Framework</strong>',
                'How to use <strong>Viability Experiments</strong> with a <strong>Minimum Viable Brand</strong> to test and iterate your brand quickly to find Product-Market-Brand fit',
                'How to apply these principles effectively using a set of tools called The <strong>Lean Brand Stack</strong> which includes the <strong>Persona Grid</strong>, the <strong>MVB Canvas</strong>, the <strong>Experiment Map</strong> and the <strong>Value Stream Matrix</strong>',
                'How successful startups like <strong>Buffer</strong> and <strong>SoulPancake</strong> have used lean branding to build a strong customer base',
              ].map((item, i) => (
                <li key={i} className="font-serif text-lg font-light text-[#8a8580] leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <div className="border-t border-[#D8D3CC] pt-12 mb-16">
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-6">Why Write a Book?</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-10">
              The Lean Brand was written to move our thinking, understanding, and practice of brand development forward. In short, The Lean Brand is about brand innovation. The intention is to help innovative startups, enterprises, and entrepreneurs fully develop emotional-value in their brand development efforts because truly great brands aren't strategically imagined ahead of time, they're discovered through experimentation, iteration, and validation on-the-go.
            </p>
          </div>

          <div className="border-t border-[#D8D3CC] pt-12 mb-16">
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-6">Who Is It For?</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-6">
              The Lean Brand joins and deepens the Lean Startup movement to contribute a framework for startups to integrate your brand development into the activities and ideas you're already employing as a lean startup.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-6">
              Whereas <em>The Lean Startup</em> and <em>The Lean Entrepreneur</em> provide techniques to create innovative products, <em>The Lean Brand</em> focuses on developing innovative relationships. When combined, these books provide a dynamic platform for innovation and creation in our new marketplace.
            </p>
          </div>

          <div className="border-t border-[#D8D3CC] pt-12 mb-16">
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-6">What is THE LEAN BRAND FRAMEWORK?</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-6">
              The Lean Brand framework is about discovery. Through a process of solidifying your assumptions into hypotheses, you will learn to experiment to find validated learning in a "live" environment.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-10">
              Lean branding uses an iterative and validated approach to the development of the relationship between an organization and an audience. The framework will introduce you to new concepts like the <strong>Emotional-Value Hypothesis</strong>, a <strong>Minimum Viable Brand</strong> and <strong>Product-Market-Brand Fit</strong>. The Lean Brand framework combines both theory and tools to provide an immediately useful framework for brand innovation and growth.
            </p>
            <a
              href="/order"
              className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#B89B5E] transition-colors duration-500"
            >
              Get Your Copy Now
            </a>
          </div>

          <div className="border-t border-[#D8D3CC] pt-12">
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-8">Read Some Popular Articles</h2>
            <div className="space-y-4">
              <a href="/blog/what-is-lean-branding" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">What Is Lean Branding?</a>
              <a href="/blog/brand-language-ecosystem" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">The Brand Language Ecosystem</a>
              <a href="/blog/the-foundation-of-your-brand" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">The Foundation of Your Brand</a>
              <a href="/blog/how-to-discover-who-you-are" className="block font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">How To Discover Who You Are...And Why You Matter</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
