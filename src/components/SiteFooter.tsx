export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-[#D8D3CC]">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <p className="font-serif text-xs tracking-[0.3em] uppercase text-[#111111] mb-3">The Lean Brand™</p>
            <p className="font-sans text-[10px] text-[#8a8580] leading-relaxed">
              The first book to apply lean principles to brand development.
            </p>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580] mb-3">Pages</p>
            <div className="space-y-2">
              <a href="/order" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">Order</a>
              <a href="/about" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">What You'll Learn</a>
              <a href="/blog" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">Blog</a>
              <a href="/stack" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">Stack</a>
              <a href="/artwork" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">Artwork</a>
            </div>
          </div>
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580] mb-3">Author</p>
            <div className="space-y-2">
              <a href="https://jeremiahgardner.com" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">JeremiahGardner.com</a>
              <a href="https://twitter.com/JeremiahGardner" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">@JeremiahGardner</a>
              <a href="mailto:hello@theleanbrand.me" className="block font-sans text-[10px] text-[#8a8580] hover:text-[#111111] transition-colors">hello@theleanbrand.me</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#D8D3CC]">
          <p className="font-sans text-[9px] text-[#8a8580]">
            &copy; 2013-2025 Jeremiah Gardner | All rights reserved. The Lean Brand&trade; is a registered Trademark of Jeremiah Gardner. The Lean Brand&trade; cover artwork subject to change.
          </p>
          <p className="font-sans text-[9px] text-[#8a8580] mt-2">
            Site by <a href="https://www.zesty.io" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89B5E]">Zesty.io</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
