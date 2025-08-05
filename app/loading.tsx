export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 via-sage-50 to-sky-50">
      <div className="text-center space-y-8">
        {/* Animated Logo */}
        <div className="w-20 h-20 bg-gradient-to-br from-forest-400 to-sage-400 rounded-full mx-auto flex items-center justify-center animate-pulse">
          <span className="text-white text-3xl">🌿</span>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="font-ghibli text-3xl text-forest-700">
            Preparing Your Sanctuary
          </h2>
          <p className="text-sage-600 max-w-md mx-auto">
            Like morning mist settling on ancient trees, we're gathering the peaceful moments that await you...
          </p>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-sage-400 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}