import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import type { ServiceAccount } from "firebase-admin";

let adminInitialized = false;

export function getAdminAuth() {
  if (!adminInitialized && !getApps().length) {
    const {
      FIREBASE_PROJECT_ID,
      FIREBASE_CLIENT_EMAIL,
      FIREBASE_PRIVATE_KEY,
    } = process.env;

    if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
      throw new Error("Missing Firebase env vars");
    }

    const serviceAccount: ServiceAccount = {
      projectId: FIREBASE_PROJECT_ID,
      clientEmail: FIREBASE_CLIENT_EMAIL,
      privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    };

    initializeApp({ credential: cert(serviceAccount) });
    adminInitialized = true;
  }

  return getAuth();
}

export const adminAuth = getAdminAuth();
