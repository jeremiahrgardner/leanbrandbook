'use client'
import RetailerBar from '@/components/RetailerBar'

export default function Page() {
  return (
    <div>
      <RetailerBar />
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#888] mb-4">Brand · March 2014</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] leading-snug mb-6">What Is Lean Branding?</h1>
        </div>
      </section>
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-base text-[#666] leading-relaxed mb-6">Most branding is broken. Here's why -- and what lean branding offers as an alternative. The word 'brand' gets used a lot. Redesign your brand. Rebrand the company. Protect your brand. We've turned one of the most powerful concepts in business into a catch-all that means almost nothing. Most approaches to branding suffer from the same fundamental problem: they treat brand as a noun to be crafted, rather than a relationship to be discovered. The lean approach starts from a different premise. A brand is the relationship between an organization and an audience. Like any relationship, it can't be designed in isolation and then handed to the other party. It has to be discovered through interaction, tested through experience, and refined through iteration. This is a fundamentally different way of thinking about what a brand is -- and what brand development actually involves. Instead of building a brand 'identity system' in a conference room and then deploying it outward, you're running experiments in the world and learning from what your audience does in response. The lean brand approach borrows directly from the Lean Startup methodology: build a minimum viable brand, measure whether it creates the emotional value you hypothesized, learn from the results, and iterate. Instead of spending six months and several hundred thousand dollars on a brand strategy document, you ship something small, learn fast, and adapt. The core question isn't 'what should our brand look like?' It's 'what relationship are we actually building with our audience -- and is that relationship something people genuinely want to be part of?'</p>
          <div className="mt-12 pt-8 border-t border-[#D8D3CC]">
            <a href="/blog" className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">&larr; Back to Field Notes</a>
          </div>
        </div>
      </section>
    </div>
  )
}
