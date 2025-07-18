import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!);
export const ACCESS_TTL = 15 * 60;        // 15 minutes
export const REFRESH_TTL = 7 * 24 * 3600; // 7 days

export async function signToken(payload: object, ttl: number) {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(`${ttl}s`)
    .sign(SECRET);
}

export async function verifyToken(token: string) {
  const { payload } = await jwtVerify(token, SECRET);
  return payload;
}

export function setAuthCookies(res: NextResponse, accessToken: string, refreshToken: string) {
  const opts = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict' as const,
    path: '/'
  };
  res.cookies.set('accessToken', accessToken, { ...opts, maxAge: ACCESS_TTL });
  res.cookies.set('refreshToken', refreshToken, { ...opts, maxAge: REFRESH_TTL });
}

export async function getTokens() {
  const store = await cookies();
  return {
    accessToken: store.get('accessToken')?.value,
    refreshToken: store.get('refreshToken')?.value,
  };
}
