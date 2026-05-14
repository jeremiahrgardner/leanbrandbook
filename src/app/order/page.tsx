'use client'
import RetailerBar from '@/components/RetailerBar'

export default function OrderPage() {
  return (
    <div>
      <RetailerBar />

      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-6">Order Your Copy</h1>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            The Lean Brand is the first book to apply lean principles to brand development to help organizations create value-based, passionate relationships with their audience.
          </p>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl">
            The Lean Brand is not new jargon for old thinking, but an entirely new approach to brand development to help your company adapt to an evolving marketplace.
          </p>
        </div>
      </section>

      {/* Order options */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-[#111111] mb-8">Order your copy of The Lean Brand</h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#111111] mb-2">Softcover</h3>
              <p className="font-serif text-base text-[#666] leading-relaxed mb-3">The full book in print. Use the Lean Brand Stack tools in your team sessions, annotate, and share.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes &amp; Noble</a>
                <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Amazon</a>
              </div>
              <p className="font-sans text-[9px] text-[#888] mt-2">ISBN 9780996100748</p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-[#111111] mb-2">eBook</h3>
              <p className="font-serif text-base text-[#666] leading-relaxed mb-3">Instant delivery. Searchable, portable, and always accessible.</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Google Play</a>
                <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Apple Books</a>
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1121934784?ean=9780996100700" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes &amp; Noble</a>
              </div>
              <p className="font-sans text-[9px] text-[#888] mt-2">ISBN 9780996100700</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#888] mb-6">Including Case Studies From:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Buffer', 'SoulPancake', 'Airbnb', 'Warby Parker', 'GE Fastworks', 'Betabrand', 'Zesty.io', 'Code for America', 'The Moth', 'Netflix', 'Along', 'Sharethrough'].map(c => (
              <span key={c} className="font-serif text-base text-[#666]">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}