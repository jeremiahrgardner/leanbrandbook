'use client'
import RetailerBar from '@/components/RetailerBar'

export default function Page() {
  return (
    <div>
      <RetailerBar />
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-2xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-[#888] mb-4">Discovery · September 2014</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#111111] leading-snug mb-6">How To Discover Who You Are...And Why You Matter</h1>
        </div>
      </section>
      <section className="px-6 md:px-12 py-12">
        <div className="max-w-2xl mx-auto">
          <p className="font-serif text-base text-[#666] leading-relaxed mb-6">The hardest brand question is not 'what do we do?' It is 'why should anyone care?' Every organization knows what it does. Most know how it does it. Very few know why it matters -- in the sense that the people it's trying to serve actually feel that it matters. The lean approach to brand discovery starts with the assumption that you don't know. Not yet. You have hypotheses about who you are and why you're worth paying attention to, but they're hypotheses. They need to be tested. The discovery process begins with the Lean Brand Framework: hypothesis, build, measure, learn. You synthesize your assumptions into a testable emotional-value hypothesis. You build a minimum viable brand -- the smallest expression of your story, your artifacts, and your invitation that can still be recognized as you. You measure whether it creates the connection you expected. You learn what it means for your next iteration. This is not a linear process. You'll cycle through the framework many times before you find Product-Market-Brand Fit. Each turn teaches you something new about who you are, who you're for, and why the relationship matters. The discovery isn't done when you have a brand. It's ongoing. The relationship changes as both parties evolve. What you discovered in 2014 may not be what you discover in 2016. The brand that worked for your first thousand customers may need to grow to work for your next ten thousand. Discovery isn't a phase. It's the work.</p>
          <div className="mt-12 pt-8 border-t border-[#D8D3CC]">
            <a href="/blog" className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">&larr; Back to Field Notes</a>
          </div>
        </div>
      </section>
    </div>
  )
}
