import type { Metadata } from 'next'
import BookArticle from '@/components/BookArticle'

export const metadata: Metadata = { title: 'How To Discover Who You Are…And Why You Matter' }

export default function Page() {
  return (
    <BookArticle title="How To Discover Who You Are…And Why You Matter" category="Discovery" date="September 2014">
      <p>The hardest brand question is not &lsquo;what do we do?&rsquo; It is &lsquo;why should anyone care?&rsquo; Every organization knows what it does. Most know how it does it. Very few know why it matters &ndash; in the sense that the people it&rsquo;s trying to serve actually feel that it matters.</p>
      <p>The lean approach to brand discovery starts with the assumption that you don&rsquo;t know. Not yet. You have hypotheses about who you are and why you&rsquo;re worth paying attention to, but they&rsquo;re hypotheses. They need to be tested.</p>
      <p>The discovery process begins with the Lean Brand Framework: hypothesis, build, measure, learn. You synthesize your assumptions into a testable emotional-value hypothesis. You build a minimum viable brand &ndash; the smallest expression of your story, your artifacts, and your invitation that can still be recognized as you. You measure whether it creates the connection you expected. You learn what it means for your next iteration.</p>
      <p>This is not a linear process. You&rsquo;ll cycle through the framework many times before you find Product-Market-Brand Fit. Each turn teaches you something new about who you are, who you&rsquo;re for, and why the relationship matters.</p>
      <p>The discovery isn&rsquo;t done when you have a brand. It&rsquo;s ongoing. The relationship changes as both parties evolve. What you discovered in 2014 may not be what you discover in 2016. The brand that worked for your first thousand customers may need to grow to work for your next ten thousand. Discovery isn&rsquo;t a phase. It&rsquo;s the work.</p>
    </BookArticle>
  )
}
