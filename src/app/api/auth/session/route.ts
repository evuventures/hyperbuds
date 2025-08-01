// /api/auth/session/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json({ message: 'ID token is required' }, { status: 400 });
    }

    // Set cookie expiration (5 days)
    const expiresIn = 60 * 60 * 24 * 5 * 1000;

    // Create session cookie
    const sessionCookie = await adminAuth.createSessionCookie(idToken, { expiresIn });

    const cookieStore = await cookies();
    cookieStore.set({
      name: 'session',
      value: sessionCookie,
      maxAge: expiresIn / 1000,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      sameSite: 'lax'
    });

    return NextResponse.json({ message: 'Session cookie set successfully' }, { status: 200 });
  } catch (error) {
    console.error('❌ SESSION COOKIE ERROR:', error);
    return NextResponse.json({ message: 'Failed to set session' }, { status: 500 });
  }
}
