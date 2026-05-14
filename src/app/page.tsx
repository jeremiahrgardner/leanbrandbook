export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 py-16">
        <div className="max-w-4xl mx-auto w-full">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-6">Brand, Meet Lean.</p>
          <h1 className="font-serif text-5xl md:text-7xl font-light leading-[1.1] text-[#111111] mb-6">
            Discover the winning relationship<br />with your audience.
          </h1>
          <p className="font-serif text-xl md:text-2xl font-light text-[#8a8580] max-w-2xl leading-relaxed mb-10">
            The Lean Brand is the first book to apply the rigor of Lean Startup to the marketing black-box of brand development. Learn how to move fast, reduce risk, experiment often, and create value-based passionate relationships with your audience.
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
      </section>

      {/* Testimonials */}
      <section className="bg-[#111111] py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            <blockquote className="border-l-2 border-[#B89B5E] pl-8">
              <p className="font-serif text-xl md:text-2xl font-light text-[#F2EFE8] leading-relaxed mb-6">
                "Gardner grabs hold of brand and gives it a good yank, redefining it as the relationship between an organization and its audience. If you appreciate the principles of lean management, read this provocative book."
              </p>
              <footer className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8a8580]">
                Marty Neumeier — Author of <em>The Brand Gap</em> and Director of Transformation, Liquid Agency
              </footer>
            </blockquote>
            <blockquote className="border-l-2 border-[#B89B5E] pl-8">
              <p className="font-serif text-xl md:text-2xl font-light text-[#F2EFE8] leading-relaxed mb-6">
                "The problem with most approaches to branding is that they get in their own way. They've managed to make the work of managing and building brands more opaque, more complicated, and less accessible. The Lean Brand takes the opposite approach."
              </p>
              <footer className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8a8580]">
                Randy Hunt — Creative Director, Etsy
              </footer>
            </blockquote>
            <blockquote className="border-l-2 border-[#B89B5E] pl-8">
              <p className="font-serif text-xl md:text-2xl font-light text-[#F2EFE8] leading-relaxed mb-6">
                "Applying the Lean Brand methodology to software development and strategy has resulted in great positive responses externally from our customers and internally from our team."
              </p>
              <footer className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8a8580]">
                Randy Apuzzo — CEO, Zesty.io
              </footer>
            </blockquote>
            <blockquote className="border-l-2 border-[#B89B5E] pl-8">
              <p className="font-serif text-xl md:text-2xl font-light text-[#F2EFE8] leading-relaxed mb-6">
                "Branding is the last bastion of old school, unaccountable marketing practices. But no more. The Lean Brand brings branding into our new world of value-creation, meaningful relationships with customers, and data-informed marketing decisions."
              </p>
              <footer className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#8a8580]">
                Brant Cooper — Author of <em>The Lean Entrepreneur</em>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* About Author */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-8">About the Author</p>
          <h2 className="font-serif text-3xl md:text-4xl font-light text-[#111111] mb-6">Jeremiah Gardner</h2>
          <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-6 max-w-2xl">
            Jeremiah Gardner is an author, speaker, lean brand practitioner, and bulldog lover. He helps startups, entrepreneurs and Fortune 500 organizations reframe the way they think about brand innovation, culture, and leadership.
          </p>
          <p className="font-serif text-lg font-light text-[#8a8580] leading-relaxed mb-8 max-w-2xl">
            He is the author of <em>The Lean Brand</em>, the first book to apply lean principles to branding, is a sought after speaker, and has been featured in several media outlets including Lifehacker.com, The Guardian, Branding Magazine, and SayDaily.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="https://twitter.com/JeremiahGardner"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors"
            >
              @JeremiahGardner
            </a>
            <a
              href="https://jeremiahgardner.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors"
            >
              jeremiahgardner.com
            </a>
            <a
              href="mailto:hello@theleanbrand.me?subject=Book Jeremiah To Speak"
              className="font-sans text-[10px] tracking-[0.2em] uppercase text-[#111111] hover:text-[#B89B5E] transition-colors"
            >
              Invite Jeremiah To Speak
            </a>
          </div>
        </div>
      </section>

      {/* Purchase Links */}
      <section className="py-16 px-6 md:px-12 border-t border-[#D8D3CC]">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">Hardcopy Available On</p>
              <div className="space-y-2">
                <a href="https://www.barnesandnoble.com/w/entrepreneurs-guide-to-the-lean-brand-jeremiah-gardner/1120544524?ean=9780996100748" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Barnes & Noble</a>
                <a href="https://www.amazon.com/Entrepreneurs-Guide-Lean-Brand-Gardner/dp/0996100746" target="_blank" rel="noopener noreferrer" className="block font-sans text-[10px] text-[#111111] hover:text-[#B89B5E] transition-colors">Amazon</a>
              </div>
            </div>
            <div>
              <p className="font-sans text-[9px] tracking-[0.5em] uppercase text-[#8a8580] mb-4">Ebook Available On</p>
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
