// src/app/api/auth/check-verified?email/route.ts

import { NextResponse } from 'next/server';
import { adminAuth } from '@/lib/firebase-admin';
import { UserRecord } from 'firebase-admin/auth';

export async function POST(request: Request) {
  try {
    const { uid, email } = await request.json();

    console.log('📧 Check verification:', { uid, email });

    if (!uid && !email) {
      return NextResponse.json({ message: 'User ID or email is required' }, { status: 400 });
    }

    let userRecord: UserRecord;
    if (uid) {
      userRecord = await adminAuth.getUser(uid);
    } else {
      userRecord = await adminAuth.getUserByEmail(email.trim().toLowerCase());
    }

    console.log('✅ Verification status:', userRecord.emailVerified);

    return NextResponse.json({
      emailVerified: userRecord.emailVerified,
      user: {
        uid: userRecord.uid,
        email: userRecord.email,
        username: userRecord.displayName
      }
    }, { status: 200 });

  } catch (err: any) {
    console.error('🛑 CHECK VERIFIED ERROR:', err);
    if (err.code === 'auth/user-not-found') {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json({ message: err.message || 'Internal Server Error' }, { status: 500 });
  }
}

