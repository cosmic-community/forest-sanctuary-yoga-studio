import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-sage-50 to-sky-50 px-4">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* Mystical Icon */}
        <div className="w-24 h-24 bg-gradient-to-br from-forest-300 to-sage-300 rounded-full mx-auto flex items-center justify-center">
          <span className="text-3xl">🗺️</span>
        </div>
        
        {/* 404 Message */}
        <div className="space-y-4">
          <h1 className="font-ghibli text-4xl text-forest-700">
            Lost in the Woods?
          </h1>
          <p className="text-sage-600 leading-relaxed">
            It seems you've wandered off the familiar forest paths. Even the most experienced 
            wanderers sometimes find themselves in uncharted territory.
          </p>
        </div>

        {/* Navigation Help */}
        <div className="card-enchanted p-6 space-y-4">
          <h3 className="font-ghibli text-lg text-forest-700">
            Let us guide you back
          </h3>
          <div className="space-y-2 text-sm text-sage-600">
            <p>• Return to our sanctuary homepage</p>
            <p>• Explore our peaceful class offerings</p>
            <p>• Meet our gentle guides and teachers</p>
            <p>• Discover our sacred practice spaces</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-magical text-center">
            Return Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="btn-ghost"
          >
            Go Back
          </button>
        </div>

        {/* Peaceful Quote */}
        <div className="text-center pt-8 border-t border-sage-100">
          <p className="text-sage-500 italic">
            "Not all those who wander are lost"
          </p>
        </div>
      </div>
    </div>
  )
}