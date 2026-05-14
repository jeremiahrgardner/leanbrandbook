'use client'
import ScrollReveal from '@/components/ScrollReveal'
import ArtworkGallery from '@/components/ArtworkGallery'

export default function ArtworkPage() {
  return (
    <div>
      <section className="min-h-[40vh] flex flex-col justify-center px-6 md:px-12 py-16 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-6">Gallery</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-6">
            Book Artwork
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            Illustrations by <a href="https://twitter.com/FAKEGRIMLOCK" target="_blank" rel="noopener noreferrer" className="hover:text-[#B89B5E] transition-colors">@FAKEGRIMLOCK</a>. Feel free to use these images.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <ArtworkGallery />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
