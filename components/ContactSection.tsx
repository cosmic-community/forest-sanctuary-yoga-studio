'use client'

import { motion } from 'framer-motion'
import type { Page } from '@/types'

interface ContactSectionProps {
  page: Page | null
}

export default function ContactSection({ page }: ContactSectionProps) {
  const content = page?.metadata?.content
  const heroImage = page?.metadata?.hero_image
  const heroMessage = page?.metadata?.hero_message

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-ghibli text-4xl md:text-5xl text-forest-800 mb-6">
            {page?.metadata?.page_title || 'Visit Our Sanctuary'}
          </h2>
          {heroMessage && (
            <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
              {heroMessage}
            </p>
          )}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {content && (
              <div
                className="prose prose-lg text-sage-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}

            {!content && (
              <div className="space-y-6">
                <div className="card-enchanted p-6">
                  <h3 className="font-ghibli text-xl text-forest-700 mb-4">Studio Address</h3>
                  <p className="text-sage-600">
                    42 Maple Grove Lane<br />
                    Willowbrook Village<br />
                    Just past the old oak tree with the rope swing
                  </p>
                </div>

                <div className="card-enchanted p-6">
                  <h3 className="font-ghibli text-xl text-forest-700 mb-4">Contact Us</h3>
                  <div className="space-y-2 text-sage-600">
                    <p><strong>Phone:</strong> (555) 123-YOGA</p>
                    <p><strong>Email:</strong> hello@forestsanctuaryyoga.com</p>
                  </div>
                </div>

                <div className="card-enchanted p-6">
                  <h3 className="font-ghibli text-xl text-forest-700 mb-4">Studio Hours</h3>
                  <div className="space-y-2 text-sage-600">
                    <p><strong>Monday - Friday:</strong> 6:30 AM - 9:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 6:00 PM</p>
                    <p><strong>Sunday:</strong> 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-magical flex-1">
                Book Your First Visit
              </button>
              <button className="btn-ghost flex-1">
                Call Us
              </button>
            </div>
          </motion.div>

          {/* Contact Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {heroImage ? (
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={`${heroImage.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                  alt="Studio Entrance"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            ) : (
              <div className="card-enchanted p-12 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-forest-300 to-sage-300 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="font-ghibli text-2xl text-forest-700 mb-4">
                  Welcome to Our Forest Sanctuary
                </h3>
                <p className="text-sage-600 leading-relaxed">
                  Step through our doors and into a world where time moves gently, 
                  breath flows freely, and every moment is an invitation to return home to yourself.
                </p>
              </div>
            )}
          </motion.div>
        </div>

        {/* Map or Additional Information */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="card-enchanted p-8 max-w-4xl mx-auto">
            <h3 className="font-ghibli text-2xl text-forest-700 mb-6">
              New to Our Community?
            </h3>
            <p className="text-sage-600 leading-relaxed mb-6">
              First-time visitors receive a complimentary cup of herbal tea and a gentle introduction 
              to our peaceful way of practicing. We recommend arriving 15 minutes early to settle in 
              and find your perfect spot in our sacred spaces.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-sage-500">
              <span className="flex items-center gap-2">
                <span>🧘‍♀️</span> All levels welcome
              </span>
              <span className="flex items-center gap-2">
                <span>🌱</span> Mats & props provided
              </span>
              <span className="flex items-center gap-2">
                <span>☕</span> Herbal tea included
              </span>
              <span className="flex items-center gap-2">
                <span>🅿️</span> Free parking
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}