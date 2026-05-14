export default function StackPage() {
  return (
    <div>
      <section className="min-h-[60vh] flex flex-col justify-center px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Tools</p>
          <h1 className="font-serif text-4xl md:text-6xl font-light leading-[1.1] text-[#111111] mb-8">
            The Lean Brand Stack
          </h1>
          <p className="font-serif text-xl font-light text-[#8a8580] max-w-2xl leading-relaxed">
            The Lean Brand Stack is a set of tools to help you iterate quickly, learn as much as you can, and build passionate relationships with your audience.
          </p>
        </div>
      </section>

      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The stack includes four tools: the <strong>Persona Grid</strong>, the <strong>Minimum Viable Brand Canvas</strong>, the <strong>Lean Experiment Map</strong>, and the <strong>Value Stream Matrix</strong>.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The four tools are intentionally organized into a stack to guide you as you rapidly sketch out brand ideas, put together new experiments, and measure their results.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The tools work best when printed out large scale or projected onto a screen so you have plenty of room to explore. Use the Lean Brand Stack to work alone, with your team, with your board, or with anyone else who can be an asset to your efforts.
            </p>
          </div>

          {/* Persona Grid */}
          <div id="personagrid" className="border-t border-[#D8D3CC] pt-12 mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-light text-[#111111] mb-6">Persona Grid</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The Persona Grid is about your audience. It gives you a simple, quick way to start to summarize the information you are learning about the audience you're addressing. The grid was designed to help you understand the needs of your audience and narrow your focus using two techniques: observation and interpretation.
            </p>
            <div className="bg-[#111111] p-8 mb-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#B89B5E] mb-6">The Grid</p>
              <div className="grid grid-cols-2 gap-6 text-[#F2EFE8]">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Looks</p>
                  <p className="font-serif text-sm text-[#D8D3CC]">Observable characteristics</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Life</p>
                  <p className="font-serif text-sm text-[#D8D3CC]">Life context and situation</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Likes</p>
                  <p className="font-serif text-sm text-[#D8D3CC]">Interpretive observations</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Love</p>
                  <p className="font-serif text-sm text-[#D8D3CC]">Deep motivational drivers</p>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-light text-[#111111] mb-4">Using The Persona Grid</h3>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed">
              On the left side of the grid, focus on what you can observe about your audience. Analyze their life and work to uncover the characteristics of your persona. On the right side of the grid, focus on what you can interpret from your audience. Use intuition and empathy to try and understand what drives your audience. The combination of your persona's looks, life, likes, and loves will help to center decisions surrounding your MVB.
            </p>
          </div>

          {/* MVB Canvas */}
          <div id="mvbcanvas" className="border-t border-[#D8D3CC] pt-12 mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-light text-[#111111] mb-6">Minimum Viable Brand Canvas</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The Minimum Viable Brand Canvas is a tool you can use to dive into your MVB work. It will help you build successive iterations of your brand that enable full turns of the Build-Measure-Learn loop with a minimum amount of effort and the least amount of development time.
            </p>
            <div className="bg-[#111111] p-8 mb-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#B89B5E] mb-6">The Canvas — Three Slices</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-[#F2EFE8]">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#B89B5E] mb-3">Story</p>
                  <p className="font-serif text-sm text-[#D8D3CC] leading-relaxed">
                    Your story. Who you are as founders. Who you are as a startup. Why people should care about a relationship with you. This is your unique rallying point defining what you're fighting against and what you're fighting for.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#B89B5E] mb-3">Artifacts</p>
                  <p className="font-serif text-sm text-[#D8D3CC] leading-relaxed">
                    Projections of your story. The goal is to find artifacts that project your story and engage people with who you are. Great artifacts evoke emotion and reflect the relationship you are forming with your audience.
                  </p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#B89B5E] mb-3">Invitations</p>
                  <p className="font-serif text-sm text-[#D8D3CC] leading-relaxed">
                    Active calls for people to join you on a journey toward shared value. By sketching out what you say, where you say it, and how you say it, invitations impact the way people respond to you.
                  </p>
                </div>
              </div>
            </div>
            <h3 className="font-serif text-xl font-light text-[#111111] mb-4">Using The MVB Canvas</h3>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-4">
              Start with your story. Sketch out your ideas about your founder story, what you stand for as you startup, your rallying point, and what you aspire to become. Then try to narrow all of those ideas into a single, compelling story.
            </p>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed">
              Once you have your ideas for your story on the canvas, move on to your artifacts. Finally, move to the invitation slice. How will you best communicate your desire for a relationship with your audience? Narrow your choices down to a single, compelling invitation that you intend to test with your audience.
            </p>
          </div>

          {/* Lean Experiment Map */}
          <div id="leanexperimentmap" className="border-t border-[#D8D3CC] pt-12 mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-light text-[#111111] mb-6">Lean Experiment Map</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The Lean Experiment Map maps experiments to hypotheses to learnings. It provides a structured way to track your experiments, what you're testing, and what you learned.
            </p>
            <div className="bg-[#111111] p-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#B89B5E] mb-6">The Map</p>
              <div className="space-y-4 text-[#F2EFE8]">
                <div className="grid grid-cols-4 gap-4">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580]">Hypothesis</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580]">Experiment</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580]">Measure</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580]">Learn</p>
                </div>
                <div className="border-t border-[#333] pt-4">
                  <p className="font-serif text-sm text-[#D8D3CC]">Your specific, testable belief</p>
                </div>
              </div>
            </div>
          </div>

          {/* Value Stream Matrix */}
          <div id="valuestreammatrix" className="border-t border-[#D8D3CC] pt-12 mb-16 scroll-mt-24">
            <h2 className="font-serif text-3xl font-light text-[#111111] mb-6">Value Stream Matrix</h2>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8">
              The Value Stream Matrix maps the flow of emotional-value creation and delivery. It helps you understand how value moves from your organization to your audience.
            </p>
            <div className="bg-[#111111] p-8">
              <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#B89B5E] mb-6">The Matrix</p>
              <div className="grid grid-cols-3 gap-8 text-[#F2EFE8]">
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Interaction</p>
                  <p className="font-serif text-sm text-[#D8D3CC] leading-relaxed">First touchpoints and awareness building</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Engagement</p>
                  <p className="font-serif text-sm text-[#D8D3CC] leading-relaxed">Deepening the relationship through participation</p>
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580] mb-3">Participation</p>
                  <p className="font-serif text-sm text-[#D8D3CC] leading-relaxed">Co-creation and advocacy</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#D8D3CC] pt-12">
            <a
              href="/order"
              className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#B89B5E] transition-colors duration-500"
            >
              Get The Book
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
