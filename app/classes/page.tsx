import ClassesSection from '@/components/ClassesSection'
import { getAllClasses } from '@/lib/cosmic'
import type { YogaClass } from '@/types'

export const metadata = {
  title: 'Sacred Practices | Forest Sanctuary Yoga',
  description: 'Discover our gentle yoga classes designed to help you find stillness in motion and connect with your inner wilderness.',
}

export default async function ClassesPage() {
  const classes = await getAllClasses()
  const classesData = classes as YogaClass[]

  return (
    <div className="pt-16">
      <ClassesSection classes={classesData} />
    </div>
  )
}