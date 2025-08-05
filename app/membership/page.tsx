import MembershipsSection from '@/components/MembershipsSection'
import { getAllMemberships } from '@/lib/cosmic'
import type { Membership } from '@/types'

export const metadata = {
  title: 'Join Our Community | Forest Sanctuary Yoga',
  description: 'Choose the membership path that feels right for your journey. Every option is designed with the flexibility of nature itself.',
}

export default async function MembershipPage() {
  const memberships = await getAllMemberships()
  const membershipsData = memberships as Membership[]

  return (
    <div className="pt-16">
      <MembershipsSection memberships={membershipsData} />
    </div>
  )
}