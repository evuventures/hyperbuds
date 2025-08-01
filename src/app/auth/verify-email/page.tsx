// app/auth/verify-email/page.tsx
import { Suspense } from 'react'
import VerifyEmail from './VerifyEmailClient'

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmail />
    </Suspense>
  )
}
