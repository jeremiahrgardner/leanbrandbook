export default function OrderPage() {
  return (
    <div>
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Order</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            Order Your Copy
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            The Lean Brand is the first book to apply lean principles to brand development to help organizations create value-based, passionate relationships with their audience. The Lean Brand is not new jargon for old thinking, but an entirely new approach to brand development to help your company adapt to an evolving marketplace.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Purchase Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Softcover */}
            <div className="border border-[#D8D3CC] p-8">
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">Hardcopy</p>
              <h2 className="font-serif text-2xl font-light text-[#111111] mb-6">Softcover Edition</h2>
              <div className="space-y-3 mb-8">
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes & Noble</a>
                <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Amazon</a>
              </div>
              <p className="font-sans text-[9px] text-[#8a8580]">ISBN: 9780996100748</p>
            </div>

            {/* eBook */}
            <div className="border border-[#D8D3CC] p-8">
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">eBook</p>
              <h2 className="font-serif text-2xl font-light text-[#111111] mb-6">Digital Edition</h2>
              <div className="space-y-3 mb-8">
                <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Google Play</a>
                <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Apple Books</a>
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes & Noble</a>
              </div>
              <p className="font-sans text-[9px] text-[#8a8580]">ISBN: 9780996100700</p>
            </div>
          </div>

          {/* Case Studies */}
          <div className="border-t border-[#D8D3CC] pt-12">
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">Including Case Studies From</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Buffer', 'SoulPancake', 'Airbnb', 'Warby Parker', 'GE Fastworks', 'Betabrand', 'Zesty.io', 'Code for America'].map((company) => (
                <p key={company} className="font-serif text-lg font-light text-[#8a8580]">{company}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
