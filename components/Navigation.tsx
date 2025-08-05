'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-forest-400 to-sage-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🌿</span>
            </div>
            <span className="font-ghibli text-xl text-forest-700 font-semibold">
              Forest Sanctuary
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-forest-600 hover:text-forest-800 transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('classes')}
              className="text-forest-600 hover:text-forest-800 transition-colors font-medium"
            >
              Classes
            </button>
            <button 
              onClick={() => scrollToSection('instructors')}
              className="text-forest-600 hover:text-forest-800 transition-colors font-medium"
            >
              Instructors
            </button>
            <button 
              onClick={() => scrollToSection('spaces')}
              className="text-forest-600 hover:text-forest-800 transition-colors font-medium"
            >
              Spaces
            </button>
            <button 
              onClick={() => scrollToSection('membership')}
              className="text-forest-600 hover:text-forest-800 transition-colors font-medium"
            >
              Membership
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-magical text-sm"
            >
              Visit Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-forest-600 hover:text-forest-800 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}