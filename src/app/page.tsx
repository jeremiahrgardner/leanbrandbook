'use client'
import { useEffect, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import LeanBrandFramework from '@/components/LeanBrandFramework'

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

function HeroText() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <p className="font-sans text-[9px] tracking-[0.6em] uppercase text-[#B89B5E] mb-8">Brand, Meet Lean.</p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.0] text-[#111111] mb-8">
          Discover the winning<br />relationship with your<br />audience.
        </h1>
        <p className="font-serif text-lg md:text-xl font-light text-[#8a8580] max-w-xl leading-relaxed mb-10">
          The Lean Brand is the first book to apply the rigor of Lean Startup to brand development. Move fast, reduce risk, experiment often, create value-based passionate relationships.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/order"
            className="inline-block bg-[#111111] text-[#F2EFE8] font-sans text-[9px] tracking-[0.3em] uppercase px-8 py-4 hover:bg-[#B89B5E] transition-colors duration-500"
          >
            Order Your Copy
          </a>
          <a
            href="/about"
            className="inline-block border border-[#111111] text-[#111111] font-sans text-[9px] tracking-[0.3em] uppercase px-8 py-4 hover:border-[#B89B5E] hover:text-[#B89B5E] transition-colors duration-500"
          >
            What You'll Learn
          </a>
        </div>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center px-6 md:px-12 py-20 border-b border-[#D8D3CC]">
        <HeroText />
      </section>

      {/* Core Definition */}
      <section className="py-24 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-6">The Core Idea</p>
            <blockquote className="font-serif text-3xl md:text-5xl font-light leading-[1.15] text-[#111111]">
              "A Brand is the relationship<br />between an organization<br />and an audience."
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mt-8 max-w-2xl">
              Not the butterfly-in-your-stomach type. The real and powerful relationship formed between an organization and people. Products create <em>functional-value</em>. Brands create <em>emotional-value</em> through the human connections they facilitate.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Framework */}
      <section className="py-24 px-6 md:px-12 bg-[#111111]">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#B89B5E] mb-6">The Framework</p>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#F2EFE8] mb-12">How Lean Brand Development Works</h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <LeanBrandFramework />
          </ScrollReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-12">Praise</p>
          <div className="space-y-16">
            {TESTIMONIALS.map(({ quote, author, title }, i) => (
              <ScrollReveal key={author} delay={i * 100}>
                <blockquote className="border-l-2 border-[#B89B5E] pl-8">
                  <p className="font-serif text-xl md:text-2xl font-light text-[#111111] leading-relaxed mb-6">
                    "{quote}"
                  </p>
                  <footer>
                    <p className="font-serif text-lg text-[#111111] mb-1">{author}</p>
                    <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-[#8a8580]">{title}</p>
                  </footer>
                </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-24 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '12', label: 'Chapters' },
              { number: '4', label: 'Tools in the Stack' },
              { number: '2014', label: 'First Published' },
              { number: '1st', label: 'Lean + Brand Book' },
            ].map(({ number, label }, i) => (
              <ScrollReveal key={label} delay={i * 80}>
                <div className="text-center md:text-left">
                  <p className="font-serif text-5xl md:text-6xl font-light text-[#111111] mb-2">{number}</p>
                  <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-[#8a8580]">{label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-24 px-6 md:px-12 border-b border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <ScrollReveal>
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">About the Author</p>
              <h2 className="font-serif text-3xl font-light text-[#111111] mb-6">Jeremiah Gardner</h2>
              <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed mb-6">
                Author, speaker, and lean brand practitioner. Jeremiah helps startups, entrepreneurs and Fortune 500 organizations reframe the way they think about brand innovation, culture, and leadership.
              </p>
              <p className="font-serif text-base font-light text-[#8a8580] leading-relaxed mb-8">
                His writing has appeared in Lifehacker.com, The Guardian, Branding Magazine, and SayDaily. When not working, he's typically found with his bulldog.
              </p>
              <div className="space-y-3">
                <a href="https://twitter.com/JeremiahGardner" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">
                  <span className="w-px h-4 bg-[#D8D3CC]" />
                  @JeremiahGardner
                </a>
                <a href="https://jeremiahgardner.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">
                  <span className="w-px h-4 bg-[#D8D3CC]" />
                  jeremiahgardner.com
                </a>
                <a href="mailto:hello@theleanbrand.me" className="flex items-center gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors">
                  <span className="w-px h-4 bg-[#D8D3CC]" />
                  Invite Jeremiah To Speak
                </a>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div>
                <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Case Studies Include</p>
                <div className="grid grid-cols-2 gap-y-4">
                  {['Airbnb', 'Warby Parker', 'Buffer', 'SoulPancake', 'GE Fastworks', 'Betabrand', 'Zesty.io', 'Code for America'].map(c => (
                    <p key={c} className="font-serif text-base text-[#8a8580]">{c}</p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Purchase */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">Hardcopy</p>
              <div className="space-y-2">
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes & Noble</a>
                <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Amazon</a>
              </div>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">eBook</p>
              <div className="space-y-2">
                <a href="https://play.google.com/store/books/details/Jeremiah_Gardner_Entrepreneur_s_Guide_To_The_Lean?id=B6JECQAAQBAJ" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Google Play</a>
                <a href="https://itunes.apple.com/us/book/entrepreneurs-guide-to-lean/id995087864" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Apple Books</a>
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-gardner-jeremiah/1121934784?ean=9780996100700" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes & Noble</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
