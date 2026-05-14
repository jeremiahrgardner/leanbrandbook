'use client'
import RetailerBar from '@/components/RetailerBar'

const TOOLS = [
  {
    id: 'personagrid',
    label: '01',
    title: 'Persona Grid',
    desc: 'The Persona Grid is about your audience. It gives you a simple, quick way to start to summarize the information you are learning about the audience you\'re addressing. The grid was designed to help you understand the needs of your audience and narrow your focus using two techniques: observation and interpretation.',
    details: [
      'On the left side of the grid, focus on what you can observe about your audience. Analyze their life and work to uncover the characteristics of your persona. Use the "Looks" and "Life" boxes on the left side of the grid.',
      'On the right side of the grid, focus on what you can interpret from your audience. Use intuition and empathy to try and understand what drives your audience. Use both the "Likes" and the "Love" boxes on the right side of the grid to gather intuitive data about the character of your audience.',
      'The combination of your persona\'s looks, life, likes, and loves will help to center decisions surrounding your MVB by adding a layer of real-world audience consideration to the conversation. For the persona grid to be most valuable, you must go out and find real people to validate that a persona actually exists.',
    ],
  },
  {
    id: 'mvbcanvas',
    label: '02',
    title: 'Minimum Viable Brand Canvas',
    desc: 'The Minimum Viable Brand Canvas is a tool you can use to dive into your MVB work. It will help you build successive iterations of your brand that enable full turns of the Build-Measure-Learn loop with a minimum amount of effort and the least amount of development time.',
    details: [
      'Story is your story. Who you are as founders. Who you are as a startup. Why people should care about a relationship with you. This is your unique rallying point defining what you\'re fighting against and what you\'re fighting for.',
      'Artifacts are projections of your story. The goal is to find artifacts that project your story and engage people with who you are. Great artifacts evoke emotion and reflect the relationship you are forming with your audience.',
      'Invitations are active calls for people to join you on a journey toward shared value. By sketching out what you say, where you say it, and how you say it, invitations impact the way people respond to you.',
    ],
  },
  {
    id: 'leanexperimentmap',
    label: '03',
    title: 'Lean Experiment Map',
    desc: 'The Lean Experiment Map is a structured approach to validated learning. It connects your brand hypotheses to specific experiments and measurable outcomes.',
    details: [
      'Hypothesis: your specific, testable belief about the emotional-value relationship you aim to build with your audience.',
      'Experiment: what you will test, how you will run it, and what data you will collect to validate or invalidate your hypothesis.',
      'Measure + Learn: what you observed and what it means for your next iteration of the MVB.',
    ],
  },
  {
    id: 'valuestreammatrix',
    label: '04',
    title: 'Value Stream Matrix',
    desc: 'The Value Stream Matrix maps the flow of emotional-value creation and delivery across the stages of audience relationship development.',
    details: [
      'Interaction: first touchpoints and how awareness becomes interest.',
      'Engagement: deepening through participation and what keeps people involved.',
      'Participation: co-creation and advocacy, where the audience becomes part of the brand story.',
    ],
  },
]

export default function StackPage() {
  return (
    <div>
      <RetailerBar />

      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#111111] mb-6">The Lean Brand Stack</h1>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            The Lean Brand Stack is a set of tools to help you iterate quickly, learn as much as you can, and build passionate relationships with your audience. The stack includes four tools: the <strong>Persona Grid</strong>, the <strong>Minimum Viable Brand Canvas</strong>, the <strong>Lean Experiment Map</strong>, and the <strong>Value Stream Matrix</strong>.
          </p>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            The four tools are intentionally organized into a stack to guide you as you rapidly sketch out brand ideas, put together new experiments, and measure their results.
          </p>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl">
            The tools work best when printed out large scale or projected onto a screen so you have plenty of room to explore. Use the Lean Brand Stack to work alone, with your team, with your board, or with anyone else who can be an asset to your efforts.
          </p>
        </div>
      </section>

      {/* Tools */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto space-y-16">
          {TOOLS.map(({ id, label, title, desc, details }) => (
            <div key={id} id={id} className="scroll-mt-8 border-t border-[#D8D3CC] pt-8">
              <p className="font-serif text-4xl font-bold text-[#D8D3CC] mb-2">{label}</p>
              <h2 className="font-serif text-2xl font-bold text-[#111111] mb-4">{title}</h2>
              <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-6">{desc}</p>
              <div className="space-y-4 max-w-2xl">
                {details.map((d, i) => (
                  <p key={i} className="font-serif text-base text-[#666] leading-relaxed pl-4 border-l-2 border-[#D8D3CC]">{d}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-base text-[#666] leading-relaxed mb-6">
            Get the complete Lean Brand Stack with the book &mdash; including printable PDFs of all four tools.
          </p>
          <a href="/order" className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-[#B89B5E] transition-colors duration-300">
            Order The Lean Brand
          </a>
        </div>
      </section>
    </div>
  )
}