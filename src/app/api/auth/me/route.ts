// /api/auth/me/route.ts
import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ message: 'Authorization token required' }, { status: 401 });
    }

    const token = authHeader.split(' ')[1];
    
    // Verify the ID token
    const decodedToken = await adminAuth.verifyIdToken(token);
    const userRecord = await adminAuth.getUser(decodedToken.uid);

    console.log('✅ User profile retrieved:', userRecord.uid);

    return NextResponse.json({
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        username: userRecord.displayName,
        emailVerified: userRecord.emailVerified,
        phoneNumber: userRecord.phoneNumber,
        photoURL: userRecord.photoURL,
        createdAt: userRecord.metadata.creationTime,
        lastSignIn: userRecord.metadata.lastSignInTime
      }
    }, { status: 200 });

  } catch (err: any) {
    console.error('🛑 GET USER ERROR:', err);
    if (err.code === 'auth/id-token-expired') {
      return NextResponse.json({ message: 'Token expired' }, { status: 401 });
    }
    if (err.code === 'auth/id-token-revoked') {
      return NextResponse.json({ message: 'Token revoked' }, { status: 401 });
    }
    return NextResponse.json({ message: err.message || 'Unauthorized' }, { status: 401 });
  }
}
