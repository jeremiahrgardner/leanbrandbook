import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'The Lean Brand Stack' }

export default function StackPage() {
  return (
    <div className="book-page">
      <section className="book-shell book-section subpage-intro" aria-labelledby="tools-title">
        <p className="book-kicker">Tools</p>
        <h1 id="tools-title">The Lean Brand<br />Stack<span>.</span></h1>
        <p>Four tools to understand your audience, shape your brand, and test it with real people.</p>
        <div className="tools-grid">
          <article className="tool-entry">
              <h2>Persona Grid</h2>
              <p>
                The Persona Grid helps you move beyond assumptions and truly understand your audience. Rather than creating fictional characters, this tool guides you through identifying real people, their jobs-to-be-done, and the value they seek. Use it to shift from demographic guessing to empirical audience insight.
              </p>
              <h3>Key Elements</h3>
              <ul>
                <li>Identify the audience you want to build a relationship with</li>
                <li>Define jobs-to-be-done rather than demographic traits</li>
                <li>Map value expectations and emotional drivers</li>
                <li>Test assumptions through direct audience interaction</li>
                <li>Iterate based on real feedback, not internal consensus</li>
              </ul>
          </article>
          <article className="tool-entry">
              <h2>Value Proposition Canvas</h2>
              <p>
                The Value Proposition Canvas ensures your brand creates genuine value for your audience. It forces clarity around what problems you solve, what gains you create, and how you alleviate pain. Use it to align your offerings with actual audience needs.
              </p>
              <h3>Key Elements</h3>
              <ul>
                <li>Define the audience profile and their core objectives</li>
                <li>Identify pains and the emotional burden they create</li>
                <li>Articulate gains and the value they seek</li>
                <li>Map products and services that address pains and create gains</li>
                <li>Create fit between your value proposition and audience needs</li>
              </ul>
          </article>
          <article className="tool-entry">
              <h2>Brand Language Ecosystem</h2>
              <p>
                The Brand Language Ecosystem provides a framework for expressing your brand consistently across every touchpoint. It goes beyond logos and colors to encompass voice, tone, messaging architecture, and the emotional qualities that differentiate you. Use it to build recognizable, meaningful relationships.
              </p>
              <h3>Key Elements</h3>
              <ul>
                <li>Establish brand voice and tonal qualities</li>
                <li>Define messaging hierarchy from taglines to detailed copy</li>
                <li>Create visual language consistency across channels</li>
                <li>Build emotional association frameworks</li>
                <li>Enable team members to express the brand authentically</li>
              </ul>
          </article>
          <article className="tool-entry">
              <h2>Minimum Viable Brand Canvas</h2>
              <p>
                The Minimum Viable Brand Canvas synthesizes the other three tools into a single actionable framework. It helps you launch a brand with just enough definition to test your assumptions without over-investing. Use it to move fast, learn quickly, and build value-based relationships from day one.
              </p>
              <h3>Key Elements</h3>
              <ul>
                <li>Define your minimum viable brand in one page</li>
                <li>Integrate persona, value proposition, and language elements</li>
                <li>Identify riskiest assumptions to test first</li>
                <li>Create a feedback loop for continuous iteration</li>
                <li>Scale brand investments based on validated learning</li>
              </ul>
          </article>
        </div>
        <Link className="book-text-link" href="/about">Explore the Lean Brand Framework <span aria-hidden="true">→</span></Link>
      </section>
    </div>
  )
}
