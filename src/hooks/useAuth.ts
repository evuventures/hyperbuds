'use client'

import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase-client'
import { 
  signInWithEmailAndPassword, 
  signOut,
  onAuthStateChanged,
  User
} from 'firebase/auth'

interface AuthUser {
  uid: string
  email: string | null
  username: string | null
  emailVerified: boolean
  phoneNumber: string | null
  createdAt: string
  lastSignIn: string
}

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        // Get ID token and create session
        const idToken = await firebaseUser.getIdToken()
        
        try {
          const response = await fetch('/api/auth/session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken })
          })

          if (response.ok) {
            const data = await response.json()
            setUser(data.user)
          }
        } catch (error) {
          console.error('Session creation failed:', error)
        }
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const idToken = await userCredential.user.getIdToken()
      
      const response = await fetch('/api/auth/session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken })
      })

      if (!response.ok) {
        throw new Error('Failed to create session')
      }

      const data = await response.json()
      setUser(data.user)
      return data
    } catch (error: any) {
      throw new Error(error.message || 'Login failed')
    }
  }

  const logout = async () => {
    try {
      // Sign out from Firebase
      await signOut(auth)
      
      // Clear server session
      await fetch('/api/auth/session', {
        method: 'DELETE'
      })
      
      setUser(null)
    } catch (error) {
      console.error('Logout error:', error)
    }
  }

  const register = async (userData: {
    firstName: string
    lastName: string
    username: string
    email: string
    phone?: string
    password: string
  }) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      return data
    } catch (error: any) {
      throw new Error(error.message || 'Registration failed')
    }
  }

  const forgotPassword = async (email: string) => {
    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send reset email')
      }

      return data
    } catch (error: any) {
      throw new Error(error.message || 'Failed to send reset email')
    }
  }

  const refreshSession = async () => {
    try {
      const response = await fetch('/api/auth/session', {
        method: 'GET'
      })

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
        return data.user
      } else {
        setUser(null)
        return null
      }
    } catch (error) {
      console.error('Session refresh failed:', error)
      setUser(null)
      return null
    }
  }

  return {
    user,
    loading,
    login,
    logout,
    register,
    forgotPassword,
    refreshSession
  }
}