// src/lib/firebase-client.ts
import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getAnalytics, isSupported as analyticsIsSupported, Analytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyAeZ3F5GCJgPkhzzlQeETf2CegRwsDb1A8",
  authDomain: "hyperbuds-69863.firebaseapp.com",
  projectId: "hyperbuds-69863",
  storageBucket: "hyperbuds-69863.firebasestorage.app",
  messagingSenderId: "255137667618",
  appId: "1:255137667618:web:6fd81d33e184845caf887b",
  measurementId: "G-83LMS4J8EK"
}

// Initialize app only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Auth can be used both server and client side
export const auth = getAuth(app)

// Analytics — only in browser and if supported
let analytics: Analytics | null = null

if (typeof window !== 'undefined') {
  analyticsIsSupported()
    .then(supported => {
      if (supported) {
        analytics = getAnalytics(app)
      } else {
        console.warn('Firebase Analytics not supported in this environment.')
      }
    })
    .catch(() => {
      console.warn('Error while checking Analytics support.')
    })
}

export { analytics }
