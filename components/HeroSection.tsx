'use client'

import { motion } from 'framer-motion'
import type { Page } from '@/types'

interface HeroSectionProps {
  page: Page | null
}

export default function HeroSection({ page }: HeroSectionProps) {
  const heroImage = page?.metadata?.hero_image
  const heroMessage = page?.metadata?.hero_message || 'Find stillness in motion'
  const content = page?.metadata?.content

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {heroImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={`${heroImage.imgix_url}?w=1920&h=1080&fit=crop&auto=format,compress`}
            alt="Forest Sanctuary Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
          <div className="absolute inset-0 bg-forest-900/10" />
        </div>
      )}

      {/* Fallback Background */}
      {!heroImage && (
        <div className="absolute inset-0 z-0 gradient-forest" />
      )}

      {/* Floating Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 4}px`,
              height: `${Math.random() * 8 + 4}px`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 4 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="font-ghibli text-5xl md:text-7xl font-light text-white mb-6 leading-tight">
            {page?.metadata?.page_title || 'Forest Sanctuary'}
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl text-cream-100 mb-8 font-light text-glow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            {heroMessage}
          </motion.p>

          {content && (
            <motion.div
              className="max-w-2xl mx-auto text-cream-200 text-lg leading-relaxed mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          )}

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <button
              onClick={() => {
                const element = document.getElementById('classes')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-magical text-lg px-8 py-4"
            >
              Explore Classes
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="btn-ghost text-lg px-8 py-4 text-white border-white hover:bg-white/10"
            >
              Visit Us
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}