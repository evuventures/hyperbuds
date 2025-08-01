// /api/auth/forgot-password/route.ts
import { NextResponse } from 'next/server'
import { adminAuth } from '@/lib/firebase-admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const normalizedEmail = email?.trim().toLowerCase()

    if (!normalizedEmail) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      )
    }

    // Check if user exists
    let userRecord
    try {
      userRecord = await adminAuth.getUserByEmail(normalizedEmail)
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        // For security, don't reveal if email exists or not
        return NextResponse.json(
          { message: 'If an account with this email exists, a password reset link has been sent.' },
          { status: 200 }
        )
      }
      throw error
    }

    // Generate password reset link
    const resetLink = await adminAuth.generatePasswordResetLink(normalizedEmail)
    console.log('✅ Generated password reset link:', resetLink)

    // Build HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <body style="margin:0;padding:0;font-family:sans-serif;background:#f9fafb;color:#374151;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;">
            <tr>
              <td style="padding:24px;text-align:center;">
                <h1 style="font-size:24px;color:#4f46e5;margin-bottom:0;">Reset Your Password 🔒</h1>
                <p style="margin-top:4px;font-size:14px;color:#6b7280;">
                  Hi ${userRecord.displayName || 'there'}, we received a request to reset your password.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;text-align:center;">
                <a href="${resetLink}"
                  style="display:inline-block;padding:12px 24px;background:linear-gradient(to right,#ef4444,#dc2626);color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;">
                  Reset Password
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px;text-align:center;">
                <p style="font-size:12px;color:#9ca3af;">
                  This link will expire in 1 hour. If you didn't request a password reset, you can safely ignore this email.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px;text-align:center;">
                <p style="font-size:12px;color:#9ca3af;">
                  &copy; 2025 YourApp. All rights reserved.
                </p>
              </td>
            </tr>
          </table>
        </body>
      </html>
    `

    // Send email via Resend
    const { error, data } = await resend.emails.send({
      from: 'Onboarding <onboarding@hyperbuds.com>', // must be verified sender in Resend
      to: normalizedEmail,
      subject: 'Reset your password',
      html: htmlContent,
    })

    if (error) {
      console.error('🛑 RESEND ERROR:', error)
      return NextResponse.json(
        { message: 'Failed to send password reset email.' },
        { status: 500 }
      )
    }

    console.log('✅ Password reset email sent to:', normalizedEmail)

    return NextResponse.json(
      { message: 'If an account with this email exists, a password reset link has been sent.' },
      { status: 200 }
    )
  } catch (err: any) {
    console.error('🛑 FORGOT PASSWORD ERROR:', err)
    return NextResponse.json(
      { message: err.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}