// /api/auth/register/route.ts
import { NextResponse } from 'next/server'
import { adminAuth } from '@/lib/firebase-admin'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const {
      firstName,
      lastName,
      username,
      email,
      phone,
      password
    } = await request.json()

    const normalizedEmail = email?.trim().toLowerCase()
    const normalizedUsername = username?.trim().toLowerCase()

    if (!normalizedEmail || !password || !normalizedUsername) {
      return NextResponse.json(
        { message: 'Email, username and password are required' },
        { status: 400 }
      )
    }

    // ✅ Create user in Firebase
    const userRecord = await adminAuth.createUser({
      email: normalizedEmail,
      password,
      displayName: normalizedUsername,
      phoneNumber: phone?.trim(),
    })

    console.log('✅ User created in Firebase:', userRecord.uid)

  const actionCodeSettings = {
  url: 'http://localhost:3000/auth/verify-email', //  custom frontend route
  handleCodeInApp: true,
  }

const verificationLink = await adminAuth.generateEmailVerificationLink(normalizedEmail, actionCodeSettings)
    console.log('✅ Generated verification link:', verificationLink)

    // ✅ Build HTML email content
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <body style="margin:0;padding:0;font-family:sans-serif;background:#f9fafb;color:#374151;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;">
            <tr>
              <td style="padding:24px;text-align:center;">
                <h1 style="font-size:24px;color:#4f46e5;margin-bottom:0;">Welcome to YourApp 🚀</h1>
                <p style="margin-top:4px;font-size:14px;color:#6b7280;">
                  Hi ${firstName || normalizedUsername}, please verify your email address.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;text-align:center;">
                <a href="${verificationLink}"
                  style="display:inline-block;padding:12px 24px;background:linear-gradient(to right,#6366f1,#3b82f6);color:#ffffff;text-decoration:none;border-radius:6px;font-weight:600;">
                  Verify Email
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 24px;text-align:center;">
                <p style="font-size:12px;color:#9ca3af;">
                  If you did not create this account, you can safely ignore this email.
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

    // ✅ Send email via Resend
    const { error, data } = await resend.emails.send({
      from: 'Hyperbuds <no-reply@hyperbuds.com>', // must be verified sender in Resend
      to: normalizedEmail,
      subject: 'Verify your email',
      html: htmlContent,
    })

    if (error) {
      console.error('🛑 RESEND ERROR:', error)
      return NextResponse.json(
        { message: 'Failed to send verification email.' },
        { status: 500 }
      )
    }

    console.log('✅ Verification email sent to:', normalizedEmail)

    return NextResponse.json(
      {
        message: 'User created successfully. Verification email sent.',
        user: {
          uid: userRecord.uid,
          email: userRecord.email,
          username: userRecord.displayName
        }
      },
      { status: 201 }
    )
  } catch (err: any) {
    console.error('🛑 REGISTER ERROR:', err)
    if (err.code === 'auth/email-already-exists') {
      return NextResponse.json({ message: 'Email already exists' }, { status: 409 })
    }
    return NextResponse.json(
      { message: err.message || 'Internal Server Error' },
      { status: 500 }
    )
  }
}
