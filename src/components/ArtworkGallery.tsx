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

export default function ArtworkGallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ARTWORKS.map(({ src, label }) => (
          <button
            key={label}
            onClick={() => setLightbox(src)}
            className="group cursor-pointer block w-full text-left focus:outline-none focus:ring-2 focus:ring-[#B89B5E]"
          >
            <div className="aspect-square overflow-hidden bg-[#F2EFE8] border border-[#D8D3CC] mb-2">
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
            </div>
            <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-[#8a8580]">{label}</p>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-[#111111]/95 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase hover:text-[#B89B5E] transition-colors"
            onClick={() => setLightbox(null)}
          >
            Close
          </button>
          <img
            src={lightbox}
            alt="Artwork"
            className="max-w-full max-h-[80vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
