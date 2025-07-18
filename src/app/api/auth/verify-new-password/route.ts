//api/auth/verify-reset-token/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { oobCode, newPassword } = await request.json();

    console.log('🔑 Verify reset token:', { oobCode: oobCode?.substring(0, 10) + '...' });

    if (!oobCode || !newPassword) {
      return NextResponse.json({ message: 'Reset code and new password are required' }, { status: 400 });
    }

    // The Firebase Admin SDK does not support verifyPasswordResetCode or confirmPasswordReset.
    // You need to handle password resets on the client side using the Firebase Client SDK.
    // If you want to update a user's password using the Admin SDK, you need the user's UID and new password.

    return NextResponse.json({
      message: 'Password reset must be handled on the client using Firebase Client SDK.',
    }, { status: 400 });

  } catch (err: any) {
    console.error('🛑 VERIFY RESET TOKEN ERROR:', err);
    if (err.code === 'auth/invalid-action-code') {
      return NextResponse.json({ message: 'Invalid or expired reset code' }, { status: 400 });
    }
    if (err.code === 'auth/expired-action-code') {
      return NextResponse.json({ message: 'Reset code has expired' }, { status: 400 });
    }
    if (err.code === 'auth/weak-password') {
      return NextResponse.json({ message: 'Password is too weak' }, { status: 400 });
    }
    return NextResponse.json({ message: err.message || 'Internal Server Error' }, { status: 500 });
  }
}