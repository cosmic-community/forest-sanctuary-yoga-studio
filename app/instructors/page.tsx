import InstructorsSection from '@/components/InstructorsSection'
import { getAllInstructors } from '@/lib/cosmic'
import type { Instructor } from '@/types'

export const metadata = {
  title: 'Our Gentle Guides | Forest Sanctuary Yoga',
  description: 'Meet the compassionate teachers who hold space for your journey, each carrying their own unique connection to the wisdom of stillness.',
}

export default async function InstructorsPage() {
  const instructors = await getAllInstructors()
  const instructorsData = instructors as Instructor[]

  return (
    <div className="pt-16">
      <InstructorsSection instructors={instructorsData} />
    </div>
  )
}