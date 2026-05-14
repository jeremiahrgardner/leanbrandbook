'use client'
import RetailerBar from '@/components/RetailerBar'

const ARTICLES = [
  { slug: 'what-is-lean-branding', label: 'Brand', date: 'March 2014', title: 'What Is Lean Branding?', desc: "Most branding is broken. Here&rsquo;s why &mdash; and what lean branding offers as an alternative." },
  { slug: 'brand-language-ecosystem', label: 'Brand Language', date: 'May 2014', title: 'The Brand Language Ecosystem', desc: "Your brand&rsquo;s words aren&rsquo;t decoration. They&rsquo;re the tissue of the relationship." },
  { slug: 'the-foundation-of-your-brand', label: 'Brand Foundation', date: 'July 2014', title: 'The Foundation of Your Brand', desc: "Before you build a brand, you need to know what you&rsquo;re building it on." },
  { slug: 'how-to-discover-who-you-are', label: 'Discovery', date: 'September 2014', title: 'How To Discover Who You Are...And Why You Matter', desc: "The hardest brand question is not &lsquo;what do we do?&rsquo; It is &lsquo;why should anyone care?&rsquo;" },
]

export default function BlogPage() {
  return (
    <div>
      <RetailerBar />
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-4">Field Notes</h1>
          <p className="font-serif text-base text-[#666] leading-relaxed">Thinking on brand, lean methodology, and building passionate relationships with your audience.</p>
        </div>
      </section>
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-5xl mx-auto space-y-0">
          {ARTICLES.map(({ slug, label, date, title, desc }) => (
            <div key={slug} className="border-t border-[#D8D3CC] py-8">
              <a href={`/blog/${slug}`} className="font-serif text-xl md:text-2xl text-[#111111] hover:text-[#B89B5E] transition-colors leading-snug block mb-2">{title}</a>
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#B89B5E] mb-2">{label}</p>
              <p className="font-serif text-base text-[#666] leading-relaxed">{desc}</p>
              <p className="font-sans text-[9px] text-[#888] mt-3">{date}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}