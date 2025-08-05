import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Forest Sanctuary Yoga Studio',
  description: 'Find stillness in motion, magic in the ordinary. A peaceful yoga sanctuary inspired by nature.',
  keywords: ['yoga', 'meditation', 'wellness', 'nature', 'mindfulness', 'forest sanctuary'],
  openGraph: {
    title: 'Forest Sanctuary Yoga Studio',
    description: 'Find stillness in motion, magic in the ordinary. A peaceful yoga sanctuary inspired by nature.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}