'use client'

import { motion } from 'framer-motion'
import type { YogaClass } from '@/types'

interface ClassesSectionProps {
  classes: YogaClass[]
}

export default function ClassesSection({ classes }: ClassesSectionProps) {
  if (!classes || classes.length === 0) {
    return (
      <section id="classes" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ghibli text-4xl text-forest-800 mb-8">Our Classes</h2>
            <p className="text-sage-600">Classes information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="classes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-ghibli text-4xl md:text-5xl text-forest-800 mb-6">
            Our Sacred Practices
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Each class is a gentle journey into presence, where ancient wisdom meets the peaceful rhythm of nature
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {classes.map((yogaClass, index) => (
            <motion.div
              key={yogaClass.id}
              className="card-enchanted p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Class Image */}
              {yogaClass.metadata?.class_image && (
                <div className="mb-6 overflow-hidden rounded-2xl">
                  <img
                    src={`${yogaClass.metadata.class_image.imgix_url}?w=600&h=300&fit=crop&auto=format,compress`}
                    alt={yogaClass.metadata.class_name || yogaClass.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="font-ghibli text-2xl text-forest-700 font-semibold">
                    {yogaClass.metadata?.class_name || yogaClass.title}
                  </h3>
                  {yogaClass.metadata?.difficulty_level && (
                    <span className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm font-medium">
                      {yogaClass.metadata.difficulty_level.value}
                    </span>
                  )}
                </div>

                {yogaClass.metadata?.description && (
                  <div
                    className="text-sage-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: yogaClass.metadata.description }}
                  />
                )}

                <div className="space-y-3 pt-4 border-t border-sage-100">
                  {yogaClass.metadata?.schedule && (
                    <div className="flex items-center text-forest-600">
                      <span className="w-5 h-5 mr-3">📅</span>
                      <span className="font-medium">{yogaClass.metadata.schedule}</span>
                    </div>
                  )}

                  {yogaClass.metadata?.duration && (
                    <div className="flex items-center text-forest-600">
                      <span className="w-5 h-5 mr-3">⏰</span>
                      <span className="font-medium">{yogaClass.metadata.duration}</span>
                    </div>
                  )}

                  {yogaClass.metadata?.instructor && (
                    <div className="flex items-center text-forest-600">
                      <span className="w-5 h-5 mr-3">🧘‍♀️</span>
                      <span className="font-medium">
                        with {yogaClass.metadata.instructor.metadata?.name || yogaClass.metadata.instructor.title}
                      </span>
                    </div>
                  )}

                  {yogaClass.metadata?.studio_space && (
                    <div className="flex items-center text-forest-600">
                      <span className="w-5 h-5 mr-3">🏠</span>
                      <span className="font-medium">
                        {yogaClass.metadata.studio_space.metadata?.space_name || yogaClass.metadata.studio_space.title}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}