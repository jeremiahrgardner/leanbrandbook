'use client'
import { useState } from 'react'

const ARTWORKS = [
  { src: 'https://cvylyy.media.zestyio.com/brand-interface1.jpg', label: 'Brand Interface' },
  { src: 'https://cvylyy.media.zestyio.com/brand-invitation1.jpg', label: 'Rally Point' },
  { src: 'https://cvylyy.media.zestyio.com/the-brand-genius.jpg', label: 'The Brand Genius' },
  { src: 'https://cvylyy.media.zestyio.com/brand-meet-lean1.jpg', label: 'Brand, Meet Lean' },
  { src: 'https://cvylyy.media.zestyio.com/big-old-brands1.jpg', label: 'Big Old Brands' },
  { src: 'https://cvylyy.media.zestyio.com/break-the-chains2.jpg', label: 'Break the Chains' },
  { src: 'https://cvylyy.media.zestyio.com/minimum-viable-brand.jpg', label: 'Minimum Viable Brand' },
  { src: 'https://cvylyy.media.zestyio.com/brand-network2.jpg', label: 'Brand Network' },
  { src: 'https://cvylyy.media.zestyio.com/the-old-way1.jpg', label: 'The Old Way' },
  { src: 'https://cvylyy.media.zestyio.com/the-old-way-fails1.jpg', label: 'The Old Way Fails' },
  { src: 'https://cvylyy.media.zestyio.com/focus1.jpg', label: 'Focus' },
  { src: 'https://cvylyy.media.zestyio.com/modern-marketing.jpg', label: 'Modern Marketing' },
  { src: 'https://cvylyy.media.zestyio.com/emotion-function-value1.jpg', label: 'Value Cake' },
  { src: 'https://cvylyy.media.zestyio.com/emotional-value1.jpg', label: 'Emotional Value' },
  { src: 'https://cvylyy.media.zestyio.com/functional-value1.jpg', label: 'Functional Value' },
  { src: 'https://cvylyy.media.zestyio.com/product-brand-culture-value.jpg', label: 'Product Brand Culture Value' },
  { src: 'https://cvylyy.media.zestyio.com/identifying-value1.jpg', label: 'Identifying Value' },
  { src: 'https://cvylyy.media.zestyio.com/many-paths-to-brand.jpg', label: 'Many Paths to Brand' },
  { src: 'https://cvylyy.media.zestyio.com/product-brand-market.jpg', label: 'Product Market Brand Fit' },
  { src: 'https://cvylyy.media.zestyio.com/why-how-what.jpg', label: 'Why How What' },
  { src: 'https://cvylyy.media.zestyio.com/build-measure-learn1.jpg', label: 'Build Measure Learn' },
  { src: 'https://cvylyy.media.zestyio.com/find-demand-for-your-story1.jpg', label: 'Find Demand for Your Story' },
  { src: 'https://cvylyy.media.zestyio.com/meet-us-at-tomrrow.jpg', label: 'Meet Us at Tomorrow' },
  { src: 'https://cvylyy.media.zestyio.com/jump-the-gaps1.jpg', label: 'Jump the Gaps' },
  { src: 'https://cvylyy.media.zestyio.com/everyone-some-few-one1.jpg', label: 'Everyone Some Few One' },
  { src: 'https://cvylyy.media.zestyio.com/all-of-it-is-brand1.jpg', label: 'All of It Is Brand' },
  { src: 'https://cvylyy.media.zestyio.com/disrupt-sustain-stagnate1.jpg', label: 'Disrupt Sustain Stagnate' },
  { src: 'https://cvylyy.media.zestyio.com/hype-vs-value1.jpg', label: 'Hype vs. Value' },
  { src: 'https://cvylyy.media.zestyio.com/find-your-market1.jpg', label: 'Connect With Your Market' },
  { src: 'https://cvylyy.media.zestyio.com/stick-to-your-core-brand.jpg', label: 'Stick to Your Core' },
]

export default function ArtworkPage() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <div>
      {/* Retailer bar */}
      <section className="bg-[#111111] px-6 py-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-x-8 gap-y-2 items-center">
          <span className="text-[#B89B5E] font-sans text-[9px] tracking-[0.25em] uppercase">Hardcopy Available On:</span>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener" className="text-[#D8D3CC] font-sans text-[10px] hover:text-[#B89B5E] transition-colors">Barnes &amp; Noble</a>
          <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener" className="text-[#D8D3CC] font-sans text-[10px] hover:text-[#B89B5E] transition-colors">Amazon</a>
          <span className="text-[#B89B5E] font-sans text-[9px] tracking-[0.25em] uppercase ml-4">eBook Available On:</span>
          <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" className="text-[#D8D3CC] font-sans text-[10px] hover:text-[#B89B5E] transition-colors">Google Play</a>
          <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" className="text-[#D8D3CC] font-sans text-[10px] hover:text-[#B89B5E] transition-colors">Apple Books</a>
          <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1121934784?ean=9780996100700" target="_blank" rel="noopener" className="text-[#D8D3CC] font-sans text-[10px] hover:text-[#B89B5E] transition-colors">Barnes &amp; Noble</a>
        </div>
      </section>

      {/* Page header */}
      <section className="bg-[#F2EFE8] px-6 py-10 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-3xl font-bold text-[#111111] mb-3">Book Artwork</h1>
          <p className="font-sans text-sm text-[#555]">
            Illustrations by <a href="https://twitter.com/FAKEGRIMLOCK" target="_blank" rel="noopener noreferrer" className="text-[#B89B5E] hover:underline">@FAKEGRIMLOCK</a>. Feel free to use these images (credit appreciated).
          </p>
        </div>
      </section>

      {/* Artwork grid */}
      <section className="bg-[#F2EFE8] px-6 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {ARTWORKS.map(({ src, label }) => (
              <button
                key={label}
                onClick={() => setLightbox(src)}
                className="group cursor-pointer text-left block w-full focus:outline-none"
              >
                <div className="aspect-square overflow-hidden bg-[#E8E4DC] mb-2 relative">
                  <img
                    src={src}
                    alt={label}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#555] group-hover:text-[#B89B5E] transition-colors">{label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-[#111111]/97 z-50 flex flex-col"
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <div className="flex justify-end p-4">
            <button
              className="text-[#D8D3CC] font-sans text-[9px] tracking-[0.3em] uppercase hover:text-[#B89B5E] transition-colors"
              onClick={() => setLightbox(null)}
            >
              Close
            </button>
          </div>
          {/* Image */}
          <div className="flex-1 flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox}
              alt="Artwork"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}