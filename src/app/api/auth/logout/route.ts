//api/auth/logout/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function POST(request: Request) {
  try {
    const { uid } = await request.json();

    console.log('🚪 Logout attempt:', { uid });

    if (!uid) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Revoke refresh tokens for the user
    await adminAuth.revokeRefreshTokens(uid);

    console.log('✅ Logout successful:', uid);

    return NextResponse.json({
      message: 'Logout successful'
    }, { status: 200 });

  } catch (err: any) {
    console.error('🛑 LOGOUT ERROR:', err);
    return NextResponse.json({ message: err.message || 'Internal Server Error' }, { status: 500 });
  }
}
