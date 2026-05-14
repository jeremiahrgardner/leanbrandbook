'use client'
import RetailerBar from '@/components/RetailerBar'

export default function AboutPage() {
  return (
    <div>
      <RetailerBar />

      {/* Header */}
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-serif text-xl md:text-2xl text-[#111111] leading-snug mb-4">
            Great brands do more than just satisfy customers, they create passionate ones.
          </h3>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            Thousands of startups, entrepreneurs, and enterprise corporations struggle to build passionate relationships with their audience. That&rsquo;s because the practice of branding has devolved into clever wordplay, spinning, distraction, and pricey deliverables. Companies who buy into the old way miss out on the most crucial element for their success &ndash; a relationship based on shared value.
          </p>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            Today, great brands must do more than just spin, wow, or satisfy their customers, they must create passionate ones. <em>The Lean Brand</em> teaches you how to build that relationship in a validated, iterative way. A passionate audience has connected to something more than just a product with a specific feature set, or a clever ad campaign. They&rsquo;ve engaged with who an organization is at its core and participates in the journey toward shared value.
          </p>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            As the first book to apply lean principles to brand development to teach you how to develop meaningful relationships with your audience based on a shared journey of value creation, <em>The Lean Brand</em> will teach you:
          </p>
          <ul className="list-none space-y-2 max-w-2xl mb-8">
            <li className="font-serif text-base text-[#666] leading-relaxed pl-4 border-l-2 border-[#D8D3CC]">The new <strong>definition</strong> of brand</li>
            <li className="font-serif text-base text-[#666] leading-relaxed pl-4 border-l-2 border-[#D8D3CC]">How to <strong>build passion</strong> with your customers using the <strong>Lean Brand Framework</strong></li>
            <li className="font-serif text-base text-[#666] leading-relaxed pl-4 border-l-2 border-[#D8D3CC]">How to use <strong>Viability Experiments</strong> with a <strong>Minimum Viable Brand</strong> to test and iterate your brand quickly to find Product-Market-Brand fit</li>
            <li className="font-serif text-base text-[#666] leading-relaxed pl-4 border-l-2 border-[#D8D3CC]">How to apply these principles effectively using a set of tools called The <strong>Lean Brand Stack</strong> which includes the <strong>Persona Grid</strong>, the <strong>MVB Canvas</strong>, the <strong>Experiment Map</strong> and the <strong>Value Stream Matrix</strong></li>
            <li className="font-serif text-base text-[#666] leading-relaxed pl-4 border-l-2 border-[#D8D3CC]">How successful startups like <strong>Buffer</strong> and <strong>SoulPancake</strong> have used lean branding to build a strong customer base</li>
          </ul>
          <a href="/order" className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-[#B89B5E] transition-colors duration-300">
            Get Your Copy Now
          </a>
        </div>
      </section>

      {/* Why / Who / Framework */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto space-y-12">
          <div>
            <h4 className="font-serif text-xl font-bold text-[#111111] mb-4">Why Write a Book?</h4>
            <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
              <em>The Lean Brand</em> was written to move our thinking, understanding, and practice of brand development forward. In short, <em>The Lean Brand</em> is about brand innovation. The intention is to help innovative startups, enterprises, and entrepreneurs fully develop emotional-value in their brand development efforts because truly great brands aren&rsquo;t strategically imagined ahead of time, they&rsquo;re discovered through experimentation, iteration, and validation on-the-go.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-[#111111] mb-4">Who Is It For?</h4>
            <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
              <em>The Lean Brand</em> joins and deepens the Lean Startup movement to contribute a framework for startups to integrate your brand development into the activities and ideas you&rsquo;re already employing as a lean startup. Whereas <em>The Lean Startup</em> and <em>The Lean Entrepreneur</em> provide techniques to create innovative products, <em>The Lean Brand</em> focuses on developing innovative relationships. When combined, the ideas and practices expressed in <em>The Lean Startup</em>, <em>The Lean Entrepreneur</em>, and <em>The Lean Brand</em> provide a dynamic platform for innovation and creation in our new marketplace.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-xl font-bold text-[#111111] mb-4">What is the Lean Brand Framework?</h4>
            <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
              The Lean Brand framework is about discovery. Through a process of solidifying your assumptions into hypotheses, you will learn to experiment to find validated learning in a &ldquo;live&rdquo; environment.
            </p>
            <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
              Lean branding uses an iterative and validated approach to the development of the relationship between an organization and an audience. The framework will introduce you to new concepts like the <strong>Emotional-Value Hypothesis</strong>, a <strong>Minimum Viable Brand</strong> and <strong>Product-Market-Brand Fit</strong>. The Lean Brand framework combines both theory and tools to provide an immediately useful framework for brand innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#888] mb-6">Read Some Popular Articles</p>
          <div className="space-y-4">
            {[
              { href: '/blog/what-is-lean-branding', title: 'What Is Lean Branding?' },
              { href: '/blog/brand-language-ecosystem', title: 'The Brand Language Ecosystem' },
              { href: '/blog/the-foundation-of-your-brand', title: 'The Foundation of Your Brand' },
              { href: '/blog/how-to-discover-who-you-are', title: 'How To Discover Who You Are...And Why You Matter' },
            ].map(({ href, title }) => (
              <a key={href} href={href} className="block font-serif text-base text-[#666] hover:text-[#B89B5E] transition-colors">
                {title}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}