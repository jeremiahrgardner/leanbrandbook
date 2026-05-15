import type { Metadata } from 'next'
import './globals.css'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'The Lean Brand — by Jeremiah Gardner',
  description: 'The first book to apply lean principles to brand development. Discover how to build passionate relationships with your audience through experimentation, learning, and iteration.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Helvetica+Neue:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteNav />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}