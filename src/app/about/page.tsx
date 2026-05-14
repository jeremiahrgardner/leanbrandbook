'use client'
import ScrollReveal from '@/components/ScrollReveal'
import LeanBrandFramework from '@/components/LeanBrandFramework'

export default function AboutPage() {
  return (
    <div>
      <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 py-20 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-6">What You&apos;ll Learn</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            Great brands do more than satisfy customers -- they create passionate ones.
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            Thousands of startups and enterprises struggle to build passionate relationships with their audience. The Lean Brand teaches you how to build that relationship in a validated, iterative way.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">The Book Covers</p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {[
              { title: 'The new definition of brand', desc: 'Brand is a relationship, not a logo. A brand is the relationship between an organization and an audience.' },
              { title: 'Build passion with the Lean Brand Framework', desc: 'Move from assumptions to validated emotional-value hypotheses through hypothesis, build, measure, and learn.' },
              { title: 'Viability Experiments with a Minimum Viable Brand', desc: 'Test your brand with real audience before committing full resources. Find Product-Market-Brand Fit through iteration.' },
              { title: 'The Lean Brand Stack', desc: 'Four practical tools: Persona Grid, MVB Canvas, Lean Experiment Map, and Value Stream Matrix.' },
              { title: 'Case studies from Airbnb, Buffer, SoulPancake', desc: 'Real-world examples of lean brand development in action at startups and Fortune 500 companies.' },
              { title: 'Big business gets lean', desc: 'GE Fastworks proves lean brand principles scale to enterprise organizations.' },
            ].map(({ title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 60}>
                <div className="border-l-2 border-[#D8D3CC] pl-6">
                  <h3 className="font-serif text-lg text-[#111111] mb-3">{title}</h3>
                  <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-8">The Method</p>
            <h2 className="font-serif text-3xl font-light text-[#F2EFE8] mb-12">The Lean Brand Framework</h2>
            <LeanBrandFramework />
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">Background</p>
            <h2 className="font-serif text-3xl font-light text-[#111111] mb-8">Why This Book?</h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-6">
              The Lean Brand was written to move our thinking, understanding, and practice of brand development forward. Truly great brands aren&apos;t strategically imagined ahead of time -- they&apos;re discovered through experimentation, iteration, and validation on-the-go.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-6">
              The Lean Brand joins and deepens the Lean Startup movement. While <em>The Lean Startup</em> and <em>The Lean Entrepreneur</em> provide techniques to create innovative products, The Lean Brand focuses on developing innovative relationships.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed">
              When combined, these books provide a dynamic platform for innovation and creation in our new marketplace.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">From the Blog</p>
            <h2 className="font-serif text-2xl font-light text-[#111111] mb-10">Popular Articles</h2>
          </ScrollReveal>
          <div className="space-y-8">
            {[
              { slug: 'what-is-lean-branding', label: 'Brand', title: 'What Is Lean Branding?', desc: 'An introduction to the core principles of lean brand development.' },
              { slug: 'brand-language-ecosystem', label: 'Brand Language', title: 'The Brand Language Ecosystem', desc: 'How your brand\'s language creates meaning and connection.' },
              { slug: 'the-foundation-of-your-brand', label: 'Brand Foundation', title: 'The Foundation of Your Brand', desc: 'Building on the relationship between organization and audience.' },
              { slug: 'how-to-discover-who-you-are', label: 'Discovery', title: 'How To Discover Who You Are...And Why You Matter', desc: 'The lean approach to uncovering your brand\'s core identity.' },
            ].map(({ slug, label, title, desc }, i) => (
              <ScrollReveal key={slug} delay={i * 80}>
                <div className="border-t border-[#D8D3CC] pt-6">
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#B89B5E] mb-2">{label}</p>
                  <a href={`/blog/${slug}`} className="block font-serif text-xl text-[#111111] hover:text-[#B89B5E] transition-colors mb-2">
                    {title}
                  </a>
                  <p className="font-serif text-base font-light text-[#8a8580]">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <a
              href="/order"
              className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#B89B5E] transition-colors duration-500"
            >
              Get Your Copy Now
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}