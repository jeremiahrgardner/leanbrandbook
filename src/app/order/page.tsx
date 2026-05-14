'use client'
import ScrollReveal from '@/components/ScrollReveal'

const EDITIONS = [
  {
    title: 'Softcover',
    price: '~$19-24',
    desc: 'The full book in print. Use the Lean Brand Stack tools in your team sessions, annotate, and share.',
    links: [
      { label: 'Barnes & Noble', href: 'https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748' },
      { label: 'Amazon', href: 'https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746' },
    ],
    isbn: 'ISBN 9780996100748',
  },
  {
    title: 'eBook',
    price: '~$9-14',
    desc: 'Instant delivery. Searchable, portable, and always accessible.',
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ' },
      { label: 'Apple Books', href: 'https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864' },
      { label: 'Barnes & Noble', href: 'https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700' },
    ],
    isbn: 'ISBN 9780996100700',
  },
]

const CASE_STUDIES = ['Buffer', 'SoulPancake', 'Airbnb', 'Warby Parker', 'GE Fastworks', 'Betabrand', 'Zesty.io', 'Code for America', 'The Moth', 'Netflix', 'Along', 'Sharethrough']

export default function OrderPage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-20 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-6">Order</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            Get Your Copy
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            The first book to apply lean principles to brand development. Not new jargon for old thinking — an entirely new approach to building value-based, passionate relationships with your audience.
          </p>
        </div>
      </section>

      {/* Editions */}
      <section className="py-20 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDITIONS.map(({ title, price, desc, links, isbn }, i) => (
              <ScrollReveal key={title} delay={i * 100}>
                <div className="border border-[#D8D3CC] p-8 flex flex-col h-full">
                  <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-2">{title}</p>
                  <p className="font-serif text-3xl font-light text-[#111111] mb-4">{price}</p>
                  <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed mb-6">{desc}</p>
                  <div className="space-y-3 mb-6 flex-grow">
                    {links.map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#B89B5E]" />
                        {label}
                      </a>
                    ))}
                  </div>
                  <p className="font-sans text-[9px] text-[#8a8580]">{isbn}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">Featured Case Studies</p>
          </ScrollReveal>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {CASE_STUDIES.map(c => (
              <ScrollReveal key={c}>
                <p className="font-serif text-base font-light text-[#8a8580]">{c}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">Inside the Book</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                '12 chapters from "What Is A Brand?" to "Theory & Tools"',
                'The Lean Brand Framework: 4 phases, 3 gaps',
                'The MVB Canvas: Story, Artifacts, Invitation',
                'Viability experiments: smoke tests, landing pages, crowdfunding',
                'Product-Market-Brand Fit: the full validation equation',
                'The Lean Brand Stack: 4 downloadable tools',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E] mt-2 flex-shrink-0" />
                  <p className="font-serif text-base text-[#8a8580] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
