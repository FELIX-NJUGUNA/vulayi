import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vulayi - Book Rooms, Spaces & Host Events',
  description: 'Modern web application for booking rooms, event spaces, and hosting events. Browse suites, reserve spaces for podcasts, DJ shoots, weddings, and more.',
  keywords: ['room booking', 'event spaces', 'wedding venue', 'podcast studio', 'event hosting'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}