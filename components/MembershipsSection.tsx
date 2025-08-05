'use client'

import { motion } from 'framer-motion'
import type { Membership } from '@/types'

interface MembershipsSectionProps {
  memberships: Membership[]
}

export default function MembershipsSection({ memberships }: MembershipsSectionProps) {
  if (!memberships || memberships.length === 0) {
    return (
      <section id="membership" className="py-20 gradient-moonlight">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-ghibli text-4xl text-forest-800 mb-8">Membership</h2>
            <p className="text-sage-600">Membership information will be available soon.</p>
          </div>
        </div>
      </section>
    )
  }

  // Sort memberships to show featured ones first
  const sortedMemberships = [...memberships].sort((a, b) => {
    if (a.metadata?.featured && !b.metadata?.featured) return -1
    if (!a.metadata?.featured && b.metadata?.featured) return 1
    return 0
  })

  return (
    <section id="membership" className="py-20 gradient-moonlight">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-ghibli text-4xl md:text-5xl text-forest-800 mb-6">
            Join Our Forest Community
          </h2>
          <p className="text-xl text-sage-600 max-w-3xl mx-auto leading-relaxed">
            Choose the path that feels right for your journey. Every option is designed to support your practice with the flexibility of nature itself
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {sortedMemberships.map((membership, index) => (
            <motion.div
              key={membership.id}
              className={`card-enchanted p-8 relative ${
                membership.metadata?.featured 
                  ? 'ring-2 ring-forest-300 shadow-xl scale-105' 
                  : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {membership.metadata?.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-forest-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-ghibli text-2xl text-forest-700 font-semibold mb-2">
                    {membership.metadata?.membership_name || membership.title}
                  </h3>
                  
                  {membership.metadata?.price && (
                    <div className="text-3xl font-bold text-forest-800 mb-4">
                      {membership.metadata.price}
                    </div>
                  )}
                </div>

                {membership.metadata?.description && (
                  <div
                    className="text-sage-600 leading-relaxed text-center"
                    dangerouslySetInnerHTML={{ __html: membership.metadata.description }}
                  />
                )}

                {membership.metadata?.benefits && (
                  <div className="space-y-3">
                    <h4 className="font-medium text-forest-700 text-center">What's Included</h4>
                    <div
                      className="text-sage-600 space-y-2"
                      dangerouslySetInnerHTML={{ __html: membership.metadata.benefits }}
                    />
                  </div>
                )}

                {membership.metadata?.best_for && (
                  <div className="bg-sage-50 p-4 rounded-lg text-center">
                    <h4 className="font-medium text-forest-700 mb-2">Perfect For</h4>
                    <p className="text-sage-600 text-sm">
                      {membership.metadata.best_for}
                    </p>
                  </div>
                )}

                <div className="pt-6 text-center">
                  <button className={`w-full ${
                    membership.metadata?.featured 
                      ? 'btn-magical' 
                      : 'btn-ghost'
                  }`}>
                    Choose This Path
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sage-600 max-w-2xl mx-auto">
            All memberships include access to our peaceful community, complimentary herbal tea, and the gentle guidance 
            of our experienced teachers. Payment plans and family options available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  )
}