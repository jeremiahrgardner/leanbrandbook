'use client'
import ScrollReveal from '@/components/ScrollReveal'

const ARTICLES = [
  { slug: 'what-is-lean-branding', label: 'Brand', date: 'March 2014', title: 'What Is Lean Branding?', desc: "Most branding is broken. Here's why -- and what lean branding offers as an alternative." },
  { slug: 'brand-language-ecosystem', label: 'Brand Language', date: 'May 2014', title: 'The Brand Language Ecosystem', desc: "Your brand's words aren't decoration. They're the tissue of the relationship." },
  { slug: 'the-foundation-of-your-brand', label: 'Brand Foundation', date: 'July 2014', title: 'The Foundation of Your Brand', desc: "Before you build a brand, you need to know what you're building it on." },
  { slug: 'how-to-discover-who-you-are', label: 'Discovery', date: 'September 2014', title: 'How To Discover Who You Are...And Why You Matter', desc: "The hardest brand question is not 'what do we do?' It is 'why should anyone care?'" },
]

export default function BlogPage() {
  return (
    <div>
      <section className="min-h-[40vh] flex flex-col justify-center px-6 md:px-12 py-16 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Journal</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-6">Field Notes</h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">Thinking on brand, lean methodology, and building passionate relationships with your audience.</p>
        </div>
      </section>
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {ARTICLES.map(({ slug, label, date, title, desc }, i) => (
              <ScrollReveal key={slug} delay={i * 80}>
                <article className="border-t border-[#D8D3CC] py-8">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <a href={`/blog/${slug}`} className="font-serif text-xl md:text-2xl text-[#111111] hover:text-[#B89B5E] transition-colors leading-snug">{title}</a>
                    <p className="font-sans text-[9px] text-[#8a8580] flex-shrink-0 mt-2">{date}</p>
                  </div>
                  <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#B89B5E] mb-3">{label}</p>
                  <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">{desc}</p>
                  <a href={`/blog/${slug}`} className="inline-block mt-4 font-sans text-[9px] tracking-[0.25em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">Read &rarr;</a>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
