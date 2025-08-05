'use client'

export default function BackButton() {
  const handleGoBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back()
    } else {
      // Fallback to home page if no history
      window.location.href = '/'
    }
  }

  return (
    <button
      onClick={handleGoBack}
      className="btn-ghost"
    >
      Go Back
    </button>
  )
}