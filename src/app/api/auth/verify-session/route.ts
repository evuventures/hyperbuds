// /api/auth/verify-session/route.ts
import { NextResponse } from 'next/server'
import { adminAuth } from '@/lib/firebase-admin'
import { cookies } from 'next/headers'

/**
 * Retry verifySessionCookie up to N times if we encounter network-related binding issues.
 */
async function verifyWithRetry(cookie: string, retries = 3): Promise<import('firebase-admin').auth.DecodedIdToken> {
  let lastError: any
  for (let i = 0; i < retries; i++) {
    try {
      return await adminAuth.verifySessionCookie(cookie, true)
    } catch (err: any) {
      lastError = err
      if (err.code === 'EADDRNOTAVAIL' || err.message.includes('Local (0.0.0.0:0)')) {
        // Wait a bit before retrying
        await new Promise(resolve => setTimeout(resolve, 500))
        continue
      }
      throw err
    }
  }
  throw lastError
}

export async function POST() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')?.value

    if (!sessionCookie) {
      return NextResponse.json({ message: 'No session found' }, { status: 401 })
    }

    // Attempt to verify cookie with retry logic
    const decodedClaims = await verifyWithRetry(sessionCookie, 3)

    return NextResponse.json(
      { message: 'Session valid', uid: decodedClaims.uid },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('🛑 SESSION VERIFY ERROR:', error)
    return NextResponse.json({ message: 'Invalid session', error: error.message }, { status: 401 })
  }
}
