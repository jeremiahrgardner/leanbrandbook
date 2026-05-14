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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-serif antialiased">
        <SiteNav current="/" />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
