import HeroSection from '@/components/HeroSection'
import ClassesSection from '@/components/ClassesSection'
import InstructorsSection from '@/components/InstructorsSection'
import StudioSpacesSection from '@/components/StudioSpacesSection'
import MembershipsSection from '@/components/MembershipsSection'
import ContactSection from '@/components/ContactSection'
import AnimatedBackground from '@/components/AnimatedBackground'
import { getHomePage, getAllClasses, getAllInstructors, getAllStudioSpaces, getAllMemberships, getContactPage } from '@/lib/cosmic'
import type { Page, YogaClass, Instructor, StudioSpace, Membership } from '@/types'

export default async function HomePage() {
  const [
    homePage,
    classes,
    instructors,
    studioSpaces,
    memberships,
    contactPage,
  ] = await Promise.all([
    getHomePage(),
    getAllClasses(),
    getAllInstructors(),
    getAllStudioSpaces(),
    getAllMemberships(),
    getContactPage(),
  ])

  const homePageData = homePage as Page | null
  const classesData = classes as YogaClass[]
  const instructorsData = instructors as Instructor[]
  const studioSpacesData = studioSpaces as StudioSpace[]
  const membershipsData = memberships as Membership[]
  const contactPageData = contactPage as Page | null

  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection page={homePageData} />
        <ClassesSection classes={classesData} />
        <InstructorsSection instructors={instructorsData} />
        <StudioSpacesSection spaces={studioSpacesData} />
        <MembershipsSection memberships={membershipsData} />
        <ContactSection page={contactPageData} />
      </div>
    </>
  )
}