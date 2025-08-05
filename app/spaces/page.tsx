import StudioSpacesSection from '@/components/StudioSpacesSection'
import { getAllStudioSpaces } from '@/lib/cosmic'
import type { StudioSpace } from '@/types'

export const metadata = {
  title: 'Sacred Spaces | Forest Sanctuary Yoga',
  description: 'Explore our magical practice rooms, each carefully crafted to support different aspects of your yoga journey.',
}

export default async function SpacesPage() {
  const spaces = await getAllStudioSpaces()
  const spacesData = spaces as StudioSpace[]

  return (
    <div className="pt-16">
      <StudioSpacesSection spaces={spacesData} />
    </div>
  )
}