'use client'
import RetailerBar from '@/components/RetailerBar'

const TESTIMONIALS = [
  {
    quote: "Gardner grabs hold of brand and gives it a good yank, redefining it as the relationship between an organization and its audience. If you appreciate the principles of lean management, read this provocative book.",
    author: "Marty Neumeier",
    title: "Author of The Brand Gap, Director of Transformation, Liquid Agency",
  },
  {
    quote: "The problem with most approaches to branding is that they get in their own way. They've managed to make the work of managing and building brands more opaque, more complicated, and less accessible. The Lean Brand takes the opposite approach: a manageable and understandable set of concepts, tools, and methodologies to make informed brand decisions.",
    author: "Randy Hunt",
    title: "Creative Director, Etsy",
  },
  {
    quote: "Applying the Lean Brand methodology to software development and strategy has resulted in great positive responses externally from our customers and internally from our team.",
    author: "Randy Apuzzo",
    title: "CEO, Zesty.io",
  },
  {
    quote: "Branding is the last bastion of old school, unaccountable marketing practices. But no more. The Lean Brand brings branding into our new world of value-creation, meaningful relationships with customers, and data-informed marketing decisions.",
    author: "Brant Cooper",
    title: "Author of The Lean Entrepreneur",
  },
]

export default function HomePage() {
  return (
    <div>
      <RetailerBar />

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 pb-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#111111] leading-[1.05] mb-6">
            Brand, Meet Lean.
          </h1>
          <p className="font-serif text-xl md:text-2xl text-[#111111] leading-snug mb-4">
            Discover the winning relationship with your audience.
          </p>
          <p className="font-serif text-base md:text-lg text-[#666] leading-relaxed max-w-xl mb-8">
            The Lean Brand is the first book to apply the rigor of Lean Startup to the marketing black-box of brand development. Learn how to move fast, reduce risk, experiment often, and create value-based passionate relationships with your audience.
          </p>
          <a href="/order" className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-6 py-3 hover:bg-[#B89B5E] transition-colors duration-300">
            Order Your Copy
          </a>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-serif text-base md:text-lg text-[#666] leading-relaxed max-w-2xl mb-4">
            &ldquo;A Brand is the relationship between an organization and an audience.&rdquo;
          </p>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl">
            Not the butterfly-in-your-stomach type. The real and powerful relationship formed between an organization and people. Products create functional-value. Brands create emotional-value through the human connections they facilitate.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto space-y-10">
          {TESTIMONIALS.map(({ quote, author, title }) => (
            <div key={author} className="border-l-2 border-[#D8D3CC] pl-6">
              <p className="font-serif text-base md:text-lg text-[#111111] leading-relaxed mb-3">
                &ldquo;{quote}&rdquo;
              </p>
              <p className="font-serif text-base text-[#111111]">{author}</p>
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#888]">{title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '12', label: 'Chapters' },
              { number: '4', label: 'Tools in the Stack' },
              { number: '2014', label: 'First Published' },
              { number: '1st', label: 'Lean + Brand Book' },
            ].map(({ number, label }) => (
              <div key={label}>
                <p className="font-serif text-4xl md:text-5xl font-bold text-[#111111]">{number}</p>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#888] mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#888] mb-2">About the Author</p>
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#111111] mb-4">Jeremiah Gardner</h2>
          <p className="font-serif text-base text-[#666] leading-relaxed max-w-2xl mb-4">
            Jeremiah Gardner is an author, speaker, lean brand practitioner, and bulldog lover. He helps startups, entrepreneurs and Fortune 500 organizations reframe the way they think about brand innovation, culture, and leadership. He is the author of The Lean Brand, the first book to apply lean principles to branding, is a sought after speaker, and has been featured in several media outlets including Lifehacker.com, The Guardian, Branding Magazine, and SayDaily. Reach him{' '}
            <a href="https://twitter.com/JeremiahGardner" target="_blank" rel="noopener noreferrer" className="text-[#B89B5E] hover:underline">@JeremiahGardner</a> or{' '}
            <a href="https://jeremiahgardner.com" target="_blank" rel="noopener noreferrer" className="text-[#B89B5E] hover:underline">jeremiahgardner.com</a>.
          </p>
          <a href="mailto:hello@theleanbrand.me?subject=Book Jeremiah To Speak" className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">
            Invite Jeremiah To Speak
          </a>
        </div>
      </section>

      {/* Case Studies */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#888] mb-4">Case Studies Include</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {['Airbnb', 'Warby Parker', 'Buffer', 'SoulPancake', 'GE Fastworks', 'Betabrand', 'Zesty.io', 'Code for America'].map(c => (
              <span key={c} className="font-serif text-base text-[#666]">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase links */}
      <section className="px-6 md:px-12 py-12 border-b border-[#D8D3CC]">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#888] mb-4">Hardcopy Available On:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes &amp; Noble</a>
            <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Amazon</a>
          </div>
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#888] mb-4">eBook Available On:</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Google Play</a>
            <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Apple Books</a>
            <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1121934784?ean=9780996100700" target="_blank" rel="noopener" className="font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes &amp; Noble</a>
          </div>
        </div>
      </section>
    </div>
  )
}