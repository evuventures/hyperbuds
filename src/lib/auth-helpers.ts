// /lib/auth-helpers.ts
import { adminAuth } from '@/lib/firebase-admin'
import { cookies } from 'next/headers'

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies()
    const sessionCookie = cookieStore.get('session')?.value

    if (!sessionCookie) {
      return null
    }

    const decodedClaims = await adminAuth.verifySessionCookie(sessionCookie, true)
    const userRecord = await adminAuth.getUser(decodedClaims.uid)

    return {
      uid: userRecord.uid,
      email: userRecord.email,
      username: userRecord.displayName,
      emailVerified: userRecord.emailVerified,
      phoneNumber: userRecord.phoneNumber,
      createdAt: userRecord.metadata.creationTime,
      lastSignIn: userRecord.metadata.lastSignInTime
    }
  } catch (error) {
    console.error('Error getting current user:', error)
    return null
  }
}

export async function requireAuth() {
  const user = await getCurrentUser()
  
  if (!user) {
    throw new Error('Authentication required')
  }
  
  return user
}