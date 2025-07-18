// app/auth/verify-email/VerifyEmailClient.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { applyActionCode } from 'firebase/auth'
import { auth } from '@/lib/firebase-client'

export default function VerifyEmail() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [message, setMessage] = useState('Verifying email...')

  useEffect(() => {
    const oobCode = searchParams.get('oobCode')
    if (!oobCode) {
      setMessage('Invalid verification link.')
      return
    }

    applyActionCode(auth, oobCode)
      .then(() => {
        setMessage('Email verified! Redirecting...')
        setTimeout(() => router.push('/dashboard'), 2000)
      })
      .catch(() => {
        setMessage('Verification failed or link expired.')
      })
  }, [router, searchParams])

  return <div className="p-6 text-center">{message}</div>
}
