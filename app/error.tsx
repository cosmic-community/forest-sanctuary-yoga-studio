'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-sage-50 to-sky-50 px-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Error Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mx-auto flex items-center justify-center">
          <span className="text-white text-3xl">🍃</span>
        </div>
        
        {/* Error Message */}
        <div className="space-y-4">
          <h2 className="font-ghibli text-3xl text-forest-700">
            A Gentle Pause
          </h2>
          <p className="text-sage-600 leading-relaxed">
            Even in our peaceful sanctuary, sometimes the path needs a moment to clear. 
            Like leaves settling after a gentle breeze, we'll restore the harmony in just a moment.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-magical"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="btn-ghost"
          >
            Return Home
          </button>
        </div>

        {/* Support Message */}
        <div className="card-enchanted p-6 text-left">
          <h3 className="font-ghibli text-lg text-forest-700 mb-2">
            Need Assistance?
          </h3>
          <p className="text-sage-600 text-sm leading-relaxed">
            If this gentle pause continues, please reach out to us. We're here to help 
            guide you back to your peaceful practice.
          </p>
          <p className="text-sage-500 text-xs mt-3">
            Contact: hello@forestsanctuaryyoga.com
          </p>
        </div>
      </div>
    </div>
  )
}