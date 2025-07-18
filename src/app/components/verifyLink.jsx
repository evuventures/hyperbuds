'use client'

import { useEffect, useState } from 'react'

export default function VerifyEmail() {
  const [link, setLink] = useState('')
  const [email, setEmail] = useState('')
  const [isVerified, setIsVerified] = useState(false)
  const [checking, setChecking] = useState(false)

  useEffect(() => {
    const storedLink = sessionStorage.getItem('verificationLink')
    const storedEmail = sessionStorage.getItem('registeredEmail') // store this after register
    setLink(storedLink || '')
    setEmail(storedEmail || '')
  }, [])

  useEffect(() => {
    if (!email) return

    const interval = setInterval(async () => {
      try {
        setChecking(true)
        const res = await fetch(`/api/auth/check-verified?email=${encodeURIComponent(email)}`)
        const data = await res.json()
        if (data.emailVerified) {
          setIsVerified(true)
          clearInterval(interval)
        }
      } catch (err) {
        console.error('Polling failed', err)
      } finally {
        setChecking(false)
      }
    }, 5000) // every 5 sec

    return () => clearInterval(interval)
  }, [email])

  if (!link) return null

  return (
    <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-center">
      {isVerified ? (
        <p className="text-green-600 font-medium">✅ Email verified! You can now sign in 🎉</p>
      ) : (
        <>
          <p className="mb-2 text-yellow-800 text-sm">
            Almost done! Please verify your email.
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-colors"
          >
            Click here to verify your email
          </a>
          {checking && (
            <p className="mt-2 text-gray-500 text-xs animate-pulse">Checking verification...</p>
          )}
        </>
      )}
    </div>
  )
}
