'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import type { StudioSpace } from '@/types'

interface StudioSpacesSectionProps {
  spaces: StudioSpace[]
}

export default function StudioSpacesSection({ spaces }: StudioSpacesSectionProps) {
  const [selectedSpace, setSelectedSpace] = useState<string | null>(null)

  if (!spaces || spaces.length === 0) {
    return (
      <section id="spaces" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ghibli text-4xl text-forest-800 mb-8">Our Sacred Spaces</h2>
            <p className="text-sage-600">Studio space information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="spaces" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-ghibli text-4xl md:text-5xl text-forest-800 mb-6">
            Our Sacred Spaces
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Each room holds its own magic, carefully crafted to support different aspects of your practice journey
          </p>
        </motion.div>

        <div className="space-y-12">
          {spaces.map((space, index) => (
            <motion.div
              key={space.id}
              className="card-enchanted overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Images */}
                <div className="relative">
                  {space.metadata?.space_images && space.metadata.space_images.length > 0 && (
                    <div className="h-64 lg:h-80">
                      <img
                        src={`${space.metadata.space_images[0].imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
                        alt={space.metadata.space_name || space.title}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Additional images indicator */}
                      {space.metadata.space_images.length > 1 && (
                        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          +{space.metadata.space_images.length - 1} more
                        </div>
                      )}
                    </div>
                  )}

                  {/* Natural Light Badge */}
                  {space.metadata?.natural_light && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-forest-700">
                      {space.metadata.natural_light.value}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-ghibli text-3xl text-forest-700 font-semibold mb-4">
                        {space.metadata?.space_name || space.title}
                      </h3>
                      
                      {space.metadata?.capacity && (
                        <p className="text-sage-600 font-medium mb-4">
                          Capacity: {space.metadata.capacity} practitioners
                        </p>
                      )}
                    </div>

                    {space.metadata?.description && (
                      <div
                        className="text-sage-600 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: space.metadata.description }}
                      />
                    )}

                    {space.metadata?.special_features && (
                      <div className="bg-sage-50 p-6 rounded-lg">
                        <h4 className="font-medium text-forest-700 mb-3">Special Features</h4>
                        <p className="text-sage-600">{space.metadata.special_features}</p>
                      </div>
                    )}

                    {/* View Gallery Button */}
                    {space.metadata?.space_images && space.metadata.space_images.length > 1 && (
                      <button
                        onClick={() => setSelectedSpace(selectedSpace === space.id ? null : space.id)}
                        className="btn-ghost"
                      >
                        {selectedSpace === space.id ? 'Hide' : 'View'} Gallery
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Extended Gallery */}
              {selectedSpace === space.id && space.metadata?.space_images && space.metadata.space_images.length > 1 && (
                <motion.div
                  className="border-t border-sage-100 p-8"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {space.metadata.space_images.slice(1).map((image, imageIndex) => (
                      <img
                        key={imageIndex}
                        src={`${image.imgix_url}?w=400&h=300&fit=crop&auto=format,compress`}
                        alt={`${space.metadata?.space_name || space.title} - View ${imageIndex + 2}`}
                        className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}