import type { Metadata } from 'next'
import BookArticle from '@/components/BookArticle'

export const metadata: Metadata = { title: 'What Is Lean Branding?' }

export default function Page() {
  return (
    <BookArticle title="What Is Lean Branding?" category="Brand" date="March 2014">
      <p>Most branding is broken. Here's why -- and what lean branding offers as an alternative. The word 'brand' gets used a lot. Redesign your brand. Rebrand the company. Protect your brand. We've turned one of the most powerful concepts in business into a catch-all that means almost nothing. Most approaches to branding suffer from the same fundamental problem: they treat brand as a noun to be crafted, rather than a relationship to be discovered. The lean approach starts from a different premise. A brand is the relationship between an organization and an audience. Like any relationship, it can't be designed in isolation and then handed to the other party. It has to be discovered through interaction, tested through experience, and refined through iteration. This is a fundamentally different way of thinking about what a brand is -- and what brand development actually involves. Instead of building a brand 'identity system' in a conference room and then deploying it outward, you're running experiments in the world and learning from what your audience does in response. The lean brand approach borrows directly from the Lean Startup methodology: build a minimum viable brand, measure whether it creates the emotional value you hypothesized, learn from the results, and iterate. Instead of spending six months and several hundred thousand dollars on a brand strategy document, you ship something small, learn fast, and adapt. The core question isn't 'what should our brand look like?' It's 'what relationship are we actually building with our audience -- and is that relationship something people genuinely want to be part of?'</p>
    </BookArticle>
  )
}
