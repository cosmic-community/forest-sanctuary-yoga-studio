'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([])
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth)

    // Handle window resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Generate floating particles
    const newParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 10 + 5,
        delay: Math.random() * 5,
      })
    }
    setParticles(newParticles)
  }, [])

  // Don't render until we have window width
  if (windowWidth === 0) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-sage-50 to-sky-50 opacity-50" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-sage-50 to-sky-50 opacity-50" />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-sage-200/20 to-forest-200/20 blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle moving clouds */}
      <motion.div
        className="absolute top-20 -left-64 w-96 h-32 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, windowWidth + 256],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-40 -right-64 w-80 h-28 bg-gradient-to-r from-transparent via-sage-100/20 to-transparent rounded-full blur-3xl"
        animate={{
          x: [0, -(windowWidth + 256)],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
          delay: 20,
        }}
      />

      {/* Gentle light rays */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-sage-200/30 to-transparent transform rotate-12 blur-sm" />
      <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-transparent via-forest-200/30 to-transparent transform -rotate-12 blur-sm" />
    </div>
  )
}