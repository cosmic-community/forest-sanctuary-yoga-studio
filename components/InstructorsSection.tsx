'use client'

import { motion } from 'framer-motion'
import type { Instructor } from '@/types'

interface InstructorsSectionProps {
  instructors: Instructor[]
}

export default function InstructorsSection({ instructors }: InstructorsSectionProps) {
  if (!instructors || instructors.length === 0) {
    return (
      <section id="instructors" className="py-20 gradient-sky">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ghibli text-4xl text-forest-800 mb-8">Our Teachers</h2>
            <p className="text-sage-600">Instructor information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="instructors" className="py-20 gradient-sky">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-ghibli text-4xl md:text-5xl text-forest-800 mb-6">
            Our Gentle Guides
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Meet the souls who hold space for your journey, each carrying their own unique connection to the wisdom of stillness
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              className="card-enchanted p-8"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Profile Photo */}
                {instructor.metadata?.profile_photo && (
                  <div className="flex-shrink-0">
                    <img
                      src={`${instructor.metadata.profile_photo.imgix_url}?w=300&h=300&fit=crop&auto=format,compress`}
                      alt={instructor.metadata.name || instructor.title}
                      className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                )}

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-ghibli text-2xl text-forest-700 font-semibold mb-2">
                      {instructor.metadata?.name || instructor.title}
                    </h3>
                    
                    {instructor.metadata?.specialties && (
                      <p className="text-sage-600 font-medium">
                        {instructor.metadata.specialties}
                      </p>
                    )}

                    {instructor.metadata?.years_teaching && (
                      <p className="text-sm text-sage-500">
                        {instructor.metadata.years_teaching} years of teaching
                      </p>
                    )}
                  </div>

                  {instructor.metadata?.bio && (
                    <div
                      className="text-sage-600 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: instructor.metadata.bio }}
                    />
                  )}

                  {instructor.metadata?.nature_connection && (
                    <div className="bg-forest-50 p-4 rounded-lg border-l-4 border-forest-300">
                      <p className="text-forest-700 italic">
                        "{instructor.metadata.nature_connection}"
                      </p>
                    </div>
                  )}

                  {instructor.metadata?.favorite_quote && (
                    <div className="pt-4 border-t border-sage-100">
                      <p className="text-sage-600 italic text-center">
                        "{instructor.metadata.favorite_quote}"
                      </p>
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