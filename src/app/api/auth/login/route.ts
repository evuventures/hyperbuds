// app/api/auth/login/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = email?.trim().toLowerCase();

    console.log('🔐 Login attempt:', { normalizedEmail });

    if (!normalizedEmail || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 });
    }

    // Get the user from Firebase
    const userRecord = await adminAuth.getUserByEmail(normalizedEmail);

    if (!userRecord.emailVerified) {
      return NextResponse.json({
        message: 'Please verify your email before logging in',
        emailVerified: false
      }, { status: 403 });
    }

    // Generate a custom token
    const customToken = await adminAuth.createCustomToken(userRecord.uid);

    return NextResponse.json({
      message: 'Login successful',
      customToken,
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        username: userRecord.displayName,
        emailVerified: userRecord.emailVerified
      }
    }, { status: 200 });

  } catch (err: any) {
    console.error('🛑 LOGIN ERROR:', err);
    if (err.code === 'auth/user-not-found') {
      return NextResponse.json({ message: 'Invalid email or password' }, { status: 401 });
    }
    return NextResponse.json({ message: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
