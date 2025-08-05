import ContactSection from '@/components/ContactSection'
import { getContactPage } from '@/lib/cosmic'
import type { Page } from '@/types'

export const metadata = {
  title: 'Visit Our Sanctuary | Forest Sanctuary Yoga',
  description: 'Every journey begins with a single step through our door. Find your way to our peaceful forest sanctuary.',
}

export default async function ContactPage() {
  const contactPage = await getContactPage()
  const contactPageData = contactPage as Page | null

  return (
    <div className="pt-16">
      <ContactSection page={contactPageData} />
    </div>
  )
}