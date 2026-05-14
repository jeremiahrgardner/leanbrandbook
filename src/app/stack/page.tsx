'use client'
import ScrollReveal from '@/components/ScrollReveal'
import LeanBrandFramework from '@/components/LeanBrandFramework'
import MVBCanvas from '@/components/MVBCanvas'

const TOOLS = [
  {
    id: 'personagrid',
    label: '01',
    title: 'Persona Grid',
    desc: 'Understand your audience through observation and interpretation. The grid centers on what you can see (Looks, Life) and what you can intuit (Likes, Love).',
    details: [
      'Observes observable characteristics and life context',
      'Interprets motivational drivers through empathy',
      'Validates persona hypotheses with real people',
    ],
  },
  {
    id: 'mvbcanvas',
    label: '02',
    title: 'Minimum Viable Brand Canvas',
    desc: 'Build successive iterations of your brand that enable full turns of the Build-Measure-Learn loop with minimum effort.',
    details: [
      'Story: your founding narrative and rallying point',
      'Artifacts: the sensory trail your brand leaves behind',
      'Invitation: a single, compelling call to join the journey',
    ],
  },
  {
    id: 'experimentmap',
    label: '03',
    title: 'Lean Experiment Map',
    desc: 'Map experiments to hypotheses to learnings. Structured tracking for validated learning across every test.',
    details: [
      'Hypothesis: your specific, testable belief',
      'Experiment: what you will test and how',
      'Measure + Learn: what you observed and what it means',
    ],
  },
  {
    id: 'valuestream',
    label: '04',
    title: 'Value Stream Matrix',
    desc: 'Map the flow of emotional-value creation and delivery across three stages of audience relationship.',
    details: [
      'Interaction: first touchpoints and awareness',
      'Engagement: deepening through participation',
      'Participation: co-creation and advocacy',
    ],
  },
]

export default function StackPage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-20 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-6">The Toolkit</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            The Lean Brand Stack
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            Four tools for iterating fast, learning deeply, and building passionate relationships with your audience.
          </p>
        </div>
      </section>

      {/* Framework */}
      <section className="py-20 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">The Framework</p>
            <LeanBrandFramework />
          </ScrollReveal>
        </div>
      </section>

      {/* MVB Canvas */}
      <section className="py-20 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">Core Tool</p>
            <h2 className="font-serif text-3xl font-light text-[#111111] mb-8">The MVB Canvas</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-10">
              The centerpiece of the Lean Brand Stack. Sketch out your ideas, test them with real audience, measure emotional response, and iterate.
            </p>
            <MVBCanvas />
          </ScrollReveal>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-12">All Four Tools</p>
          <div className="space-y-16">
            {TOOLS.map(({ id, label, title, desc, details }, i) => (
              <ScrollReveal key={id} delay={i * 80}>
                <div id={id} className="scroll-mt-24 border-t border-[#D8D3CC] pt-12">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                      <p className="font-serif text-5xl font-light text-[#D8D3CC] mb-4">{label}</p>
                      <h3 className="font-serif text-2xl font-light text-[#111111] mb-4">{title}</h3>
                      <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed">{desc}</p>
                    </div>
                    <div className="md:col-span-2">
                      <ul className="space-y-3">
                        {details.map(d => (
                          <li key={d} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E] mt-2 flex-shrink-0" />
                            <p className="font-serif text-base text-[#8a8580]">{d}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 md:px-12 border-t border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-2xl font-light text-[#111111] mb-2">Get the book to use the stack</p>
            <p className="font-serif text-base text-[#8a8580]">Includes the full toolkit as downloadable PDFs</p>
          </div>
          <a
            href="/order"
            className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#B89B5E] transition-colors duration-500 flex-shrink-0"
          >
            Order The Lean Brand
          </a>
        </div>
      </section>
    </div>
  )
}
