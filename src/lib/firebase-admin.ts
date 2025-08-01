import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

let adminInitialized = false;

export function getAdminAuth() {
  if (!adminInitialized && !getApps().length) {
    const raw = process.env.GOOGLE_CREDENTIALS_JSON;
    if (!raw) throw new Error("Missing GOOGLE_CREDENTIALS_JSON");

    const serviceAccount = JSON.parse(raw);
    initializeApp({ credential: cert(serviceAccount) });
    adminInitialized = true;
  }

  return getAuth();
}


export const adminAuth = getAuth();
