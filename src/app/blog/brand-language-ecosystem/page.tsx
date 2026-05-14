'use client'
import RetailerBar from '@/components/RetailerBar'

export default function Page() {
  return (
    <div>
      <RetailerBar />
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#888] mb-4">Brand Language · May 2014</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] leading-snug mb-6">The Brand Language Ecosystem</h1>
        </div>
      </section>
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-base text-[#666] leading-relaxed mb-6">Your brand's words aren't decoration. They're the tissue of the relationship. Every brand speaks. Whether it's through your website copy, your product descriptions, your email newsletters, or the way your sales team describes what you do -- your brand is constantly generating language. And that language is either building the relationship or eroding it. Most companies don't think about brand language systematically. They write copy when they need copy, revise when the copy sounds wrong, and trust that the message will eventually come together. It rarely does. A brand language ecosystem is the full set of words, phrases, stories, and messages that define how an organization speaks to its audience. It includes your positioning statement and your elevator pitch. It includes the words your CEO uses in investor meetings and the tone your support team uses in help desk responses. It includes the metaphors you reach for when explaining what you do and the stories you tell about your customers. All of it is language. All of it shapes the relationship. The lean approach to brand language starts with the same question the lean approach to brand starts with: what relationship are we actually building? From there, you work backward to the words that would make that relationship real. You then test those words in the world -- in your website, in your pitch deck, in your onboarding flow -- and measure whether they create the connection you hypothesized. Iterate. Learn. Adapt. Brand language isn't a deliverable. It's a living system that grows and evolves as the relationship deepens.</p>
          <div className="mt-12 pt-8 border-t border-[#D8D3CC]">
            <a href="/blog" className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">&larr; Back to Field Notes</a>
          </div>
        </div>
      </section>
    </div>
  )
}
