import type { Metadata } from 'next'
import './globals.css'
import './book.css'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: {
    default: 'The Lean Brand — by Jeremiah Gardner',
    template: '%s | The Lean Brand',
  },
  description: 'Jeremiah Gardner’s practical guide to applying Lean Startup principles to brand development and building relationships that matter to your audience.',
  icons: { icon: '/favicon.svg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="site-skip-link" href="#main-content">Skip to content</a>
        <SiteNav />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
