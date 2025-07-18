// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip excluded routes early
  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || pathname === '/favicon.ico') {
    return NextResponse.next()
  }

  const protectedRoutes = ['/dashboard', '/profile', '/settings']
  const authRoutes = ['/login', '/register', '/forgot-password']
  const isProtected = protectedRoutes.some(r => pathname.startsWith(r))
  const isAuth = authRoutes.some(r => pathname.startsWith(r))

  const session = request.cookies.get('session')?.value

  if (session) {
    try {
      const res = await fetch(new URL('/api/auth/verify-session', request.url), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Cookie': `session=${session}` }
      })
      if (res.ok) {
        if (isAuth) return NextResponse.redirect(new URL('/dashboard', request.url))
        return NextResponse.next()
      }
    } catch (_err) {
      // ignore—treat as invalid session
    }
    // invalid session: clear cookie
    const resp = isProtected
      ? NextResponse.redirect(new URL('/login', request.url))
      : NextResponse.next()
    resp.cookies.delete('session')
    return resp
  }

  if (isProtected) {
    return NextResponse.redirect(new URL('/auth/signin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*|favicon\\.ico).*)',
  ],
}
