export default function ArtworkPage() {
  return (
    <div>
      <section className="min-h-[40vh] flex flex-col justify-center px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Gallery</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            Book Artwork
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            Feel free to use these images as you'd like (and of course we'd love some credit love). Illustrations by @FAKEGRIMLOCK.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: 'https://cvylyy.media.zestyio.com/brand-interface1.jpg', label: 'BRAND INTERFACE' },
              { src: 'https://cvylyy.media.zestyio.com/brand-invitation1.jpg', label: 'RALLY POINT' },
              { src: 'https://cvylyy.media.zestyio.com/the-brand-genius.jpg', label: 'THE BRAND GENIUS' },
              { src: 'https://cvylyy.media.zestyio.com/brand-meet-lean1.jpg', label: 'BRAND, MEET LEAN' },
              { src: 'https://cvylyy.media.zestyio.com/big-old-brands1.jpg', label: 'BIG OLD BRANDS' },
              { src: 'https://cvylyy.media.zestyio.com/break-the-chains2.jpg', label: 'BREAK THE CHAINS' },
              { src: 'https://cvylyy.media.zestyio.com/minimum-viable-brand.jpg', label: 'MINIMUM VIABLE BRAND' },
              { src: 'https://cvylyy.media.zestyio.com/brand-network2.jpg', label: 'BRAND NETWORK' },
              { src: 'https://cvylyy.media.zestyio.com/the-old-way1.jpg', label: 'THE OLD WAY' },
              { src: 'https://cvylyy.media.zestyio.com/the-old-way-fails1.jpg', label: 'THE OLD WAY FAILS' },
              { src: 'https://cvylyy.media.zestyio.com/focus1.jpg', label: 'FOCUS' },
              { src: 'https://cvylyy.media.zestyio.com/modern-marketing.jpg', label: 'MODERN MARKETING' },
              { src: 'https://cvylyy.media.zestyio.com/emotion-function-value1.jpg', label: 'VALUE CAKE' },
              { src: 'https://cvylyy.media.zestyio.com/emotional-value1.jpg', label: 'EMOTIONAL VALUE' },
              { src: 'https://cvylyy.media.zestyio.com/functional-value1.jpg', label: 'FUNCTIONAL VALUE' },
              { src: 'https://cvylyy.media.zestyio.com/product-brand-culture-value.jpg', label: 'PRODUCT BRAND CULTURE VALUE' },
              { src: 'https://cvylyy.media.zestyio.com/identifying-value1.jpg', label: 'IDENTIFYING VALUE' },
              { src: 'https://cvylyy.media.zestyio.com/many-paths-to-brand.jpg', label: 'MANY PATHS TO BRAND' },
              { src: 'https://cvylyy.media.zestyio.com/product-brand-market.jpg', label: 'PRODUCT MARKET BRAND FIT' },
              { src: 'https://cvylyy.media.zestyio.com/why-how-what.jpg', label: 'WHY HOW WHAT' },
              { src: 'https://cvylyy.media.zestyio.com/build-measure-learn1.jpg', label: 'BUILD MEASURE LEARN' },
              { src: 'https://cvylyy.media.zestyio.com/find-demand-for-your-story1.jpg', label: 'FIND DEMAND FOR YOUR STORY' },
              { src: 'https://cvylyy.media.zestyio.com/meet-us-at-tomrrow.jpg', label: 'MEET US AT TOMORROW' },
              { src: 'https://cvylyy.media.zestyio.com/jump-the-gaps1.jpg', label: 'JUMP THE GAPS' },
              { src: 'https://cvylyy.media.zestyio.com/everyone-some-few-one1.jpg', label: 'EVERYONE SOME FEW ONE' },
              { src: 'https://cvylyy.media.zestyio.com/all-of-it-is-brand1.jpg', label: 'ALL OF IT IS BRAND' },
              { src: 'https://cvylyy.media.zestyio.com/disrupt-sustain-stagnate1.jpg', label: 'DISRUPT SUSTAIN STAGNATE' },
              { src: 'https://cvylyy.media.zestyio.com/hype-vs-value1.jpg', label: 'HYPE VS. VALUE' },
              { src: 'https://cvylyy.media.zestyio.com/find-your-market1.jpg', label: 'CONNECT WITH YOUR MARKET' },
              { src: 'https://cvylyy.media.zestyio.com/stick-to-your-core-brand.jpg', label: 'STICK TO YOUR CORE' },
            ].map((art) => (
              <div key={art.label} className="group cursor-pointer">
                <div className="aspect-square overflow-hidden bg-[#F2EFE8] border border-[#D8D3CC] mb-3">
                  <img
                    src={art.src}
                    alt={art.label}
                    className="w-full h-full object-cover group-hover:opacity-80 transition-opacity duration-500"
                    loading="lazy"
                  />
                </div>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580]">{art.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
