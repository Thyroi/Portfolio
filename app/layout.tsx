import type { Metadata } from 'next'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import 'driver.js/dist/driver.css'

import { Footer } from '@/components/layout/footer'
import { Navbar } from '@/components/layout/navbar'
import { Providers } from '@/app/providers'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'

const sans = Space_Grotesk({
  variable: '--font-sans',
  subsets: ['latin'],
})

const mono = IBM_Plex_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} h-full`}>
      <body className="min-h-full bg-background text-foreground antialiased">
        <Providers>
          <div className="relative min-h-screen overflow-x-hidden">
            <div className="pointer-events-none fixed inset-0 -z-10" />
            <Navbar />
            <main className="relative z-10">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
