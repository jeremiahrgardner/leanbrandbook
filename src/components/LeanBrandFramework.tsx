'use client'
export default function LeanBrandFramework() {
  return (
    <div className="w-full">
      {/* Phase labels */}
      <div className="grid grid-cols-4 gap-4 mb-4">
        {[
          { phase: 'I', title: 'Hypothesis', sub: 'Form your emotional-value hypothesis' },
          { phase: 'II', title: 'Build', sub: 'Story · Artifacts · Invitation' },
          { phase: 'III', title: 'Measure', sub: 'Test your MVB with real audience' },
          { phase: 'IV', title: 'Learn', sub: 'Iterate toward Product-Market-Brand Fit' },
        ].map(({ phase, title, sub }) => (
          <div key={phase} className="text-center">
            <div className="w-10 h-10 rounded-full border border-[#B89B5E] flex items-center justify-center mx-auto mb-3">
              <span className="font-serif text-sm text-[#B89B5E]">{phase}</span>
            </div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#111111] mb-1">{title}</p>
            <p className="font-serif text-xs text-[#8a8580] leading-relaxed">{sub}</p>
          </div>
        ))}
      </div>

      {/* Connecting arrows */}
      <div className="relative h-8 flex items-center">
        <div className="absolute left-[12.5%] right-[12.5%] top-1/2 h-px bg-[#D8D3CC]" />
        <div className="flex justify-between w-full px-[12.5%] relative">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-t-transparent border-b-transparent border-l-[#B89B5E]" />
          ))}
        </div>
      </div>

      {/* Gaps */}
      <div className="mt-6 p-4 border border-[#D8D3CC]">
        <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#8a8580] mb-3">The Three Gaps</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="font-serif text-sm text-[#111111] mb-1">Hypothesis Gap</p>
            <p className="font-serif text-xs text-[#8a8580]">Synthesize assumptions into testable emotional-value hypothesis</p>
          </div>
          <div>
            <p className="font-serif text-sm text-[#111111] mb-1">Validation Gap</p>
            <p className="font-serif text-xs text-[#8a8580]">Test whether your MVB creates the hypothesized emotional-value</p>
          </div>
          <div>
            <p className="font-serif text-sm text-[#111111] mb-1">Growth Gap</p>
            <p className="font-serif text-xs text-[#8a8580]">Scale validated relationships — audience, reach, culture</p>
          </div>
        </div>
      </div>
    </div>
  )
}
