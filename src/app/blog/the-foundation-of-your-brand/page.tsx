'use client'
import RetailerBar from '@/components/RetailerBar'

export default function Page() {
  return (
    <div>
      <RetailerBar />
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#888] mb-4">Brand Foundation · July 2014</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] leading-snug mb-6">The Foundation of Your Brand</h1>
        </div>
      </section>
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-base text-[#666] leading-relaxed mb-6">Before you build a brand, you need to know what you're building it on. Most brand development starts in the wrong place. Teams gather in conference rooms to brainstorm names, design logos, write taglines. They iterate on visual identities and debate color palettes. And somewhere in all of that, they lose sight of the fundamental question: what is this brand actually for? The Lean Brand starts from a different premise. A brand is the relationship between an organization and an audience. The question isn't 'what should our brand look like?' The question is 'what relationship are we building -- and is it worth building?' That question has to be answered before anything else. It shapes everything that follows. If you don't know what relationship you're trying to create, you can't know whether your logo is right, your copy is working, or your product experience is delivering what you promised. The foundation of your brand is not your visual identity. It's not your name or your tagline or your brand guidelines document. The foundation is the relationship you aspire to build with a specific group of people -- and the proof that that relationship has value to them. Everything else -- the words you use, the visual system you create, the stories you tell -- is an expression of that foundation. It can only be right if the foundation is right. And you can only know if the foundation is right by getting out of the building and testing it with real people.</p>
          <div className="mt-12 pt-8 border-t border-[#D8D3CC]">
            <a href="/blog" className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">&larr; Back to Field Notes</a>
          </div>
        </div>
      </section>
    </div>
  )
}
