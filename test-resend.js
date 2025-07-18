require('dotenv').config()
const { Resend } = require('resend')

const resend = new Resend(process.env.RESEND_API_KEY)
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
        <body style="margin:0;padding:0;font-family:sans-serif;background:#f9fafb;color:#374151;">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:auto;background:#ffffff;border:1px solid #e5e7eb;border-radius:8px;">
            <tr>
              <td style="padding:24px;text-align:center;">
                <h1 style="font-size:24px;color:#4f46e5;margin-bottom:0;">Welcome to YourApp 🚀</h1>
                <p style="margin-top:4px;font-size:14px;color:#6b7280;">
                  Hi Adedire, please verify your email address.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding:24px;text-align:center;">
                <a href="wwww.google.com"
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
async function test() {
  console.log('RESEND_API_KEY:', process.env.RESEND_API_KEY ? '✅ loaded' : '❌ missing')

  const { data, error } = await resend.emails.send({
     from: 'Hyperbuds <no-reply@resend.dev>',
      to: 'onaneyeayodeji@gmail.com',
    subject: 'Verify your email',
    html: htmlContent,
  })

  if (error) console.error('❌ RESEND ERROR:', error)
  else console.log('✅ Email sent!', data)
}

test()
