'use client'
export default function MVBCanvas() {
  return (
    <div className="border border-[#D8D3CC] overflow-hidden">
      {/* Header */}
      <div className="bg-[#111111] px-6 py-4 flex items-center justify-between">
        <p className="font-sans text-[9px] tracking-[0.4em] uppercase text-[#B89B5E]">Minimum Viable Brand Canvas</p>
        <p className="font-sans text-[9px] text-[#8a8580]">Build · Measure · Learn · Repeat</p>
      </div>

      {/* Three slices */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Story */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-[#D8D3CC] bg-[#F2EFE8]">
          <div className="w-8 h-8 rounded-full bg-[#B89B5E] flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 3h12M2 6h8M2 9h10M2 12h6" stroke="#F2EFE8" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#B89B5E] mb-2">Slice 1</p>
          <h3 className="font-serif text-xl text-[#111111] mb-3">Story</h3>
          <p className="font-serif text-sm text-[#8a8580] leading-relaxed mb-4">
            Who you are as founders. What you stand for. Why people should care about a relationship with you.
          </p>
          <div className="space-y-2">
            {['Founder story', 'Rallying point', 'What you fight for', 'What you aspire to become'].map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E] mt-1.5 flex-shrink-0" />
                <p className="font-serif text-xs text-[#8a8580]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Artifacts */}
        <div className="p-6 border-b md:border-b-0 md:border-r border-[#D8D3CC] bg-[#F2EFE8]">
          <div className="w-8 h-8 rounded-full bg-[#B89B5E] flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect x="2" y="2" width="12" height="12" rx="1" stroke="#F2EFE8" strokeWidth="1.5"/>
              <circle cx="6" cy="6" r="1.5" fill="#F2EFE8"/>
              <path d="M4 11l3-3 2 2 3-4" stroke="#F2EFE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#B89B5E] mb-2">Slice 2</p>
          <h3 className="font-serif text-xl text-[#111111] mb-3">Artifacts</h3>
          <p className="font-serif text-sm text-[#8a8580] leading-relaxed mb-4">
            Everything your brand leaves as a trail. The sensory signals that create memory structures.
          </p>
          <div className="space-y-2">
            {['Visual identity', 'Website & touchpoints', 'Written & verbal voice', 'Products & experiences'].map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E] mt-1.5 flex-shrink-0" />
                <p className="font-serif text-xs text-[#8a8580]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Invitation */}
        <div className="p-6 bg-[#F2EFE8]">
          <div className="w-8 h-8 rounded-full bg-[#B89B5E] flex items-center justify-center mb-4">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="#F2EFE8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="font-sans text-[8px] tracking-[0.4em] uppercase text-[#B89B5E] mb-2">Slice 3</p>
          <h3 className="font-serif text-xl text-[#111111] mb-3">Invitation</h3>
          <p className="font-serif text-sm text-[#8a8580] leading-relaxed mb-4">
            Active calls for people to join you. What you say, where you say it, and how you say it.
          </p>
          <div className="space-y-2">
            {['Tone of voice', 'Content channels', 'Specific words', 'Direct outreach'].map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B89B5E] mt-1.5 flex-shrink-0" />
                <p className="font-serif text-xs text-[#8a8580]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="px-6 py-3 bg-[#111111]">
        <p className="font-sans text-[9px] text-[#8a8580]">
          Start with Story → move to Artifacts → narrow to a single Invitation → test with your audience
        </p>
      </div>
    </div>
  )
}
