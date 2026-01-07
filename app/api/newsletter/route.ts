import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email } = body

    console.log("[v0] Newsletter signup received:", { email })

    // Validate email
    if (!email) {
      console.log("[v0] Validation failed - missing email")
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[v0] RESEND_API_KEY is not configured")
      return NextResponse.json(
        {
          error: "Email service not configured. Please contact the site administrator.",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Attempting to send newsletter signup notification via Resend...")

    // Send email notification using Resend
    const { data, error } = await resend.emails.send({
      from: "Finger Lakes Ledger <noreply@fingerlakesledger.com>",
      to: ["contact@fingerlakesledger.com"],
      subject: "New Newsletter Subscription",
      html: `
        <h2>New Newsletter Subscriber</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Signed up at:</strong> ${new Date().toLocaleString()}</p>
        <hr />
        <p><em>Add this email to your newsletter mailing list.</em></p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        {
          error: "Failed to process subscription. Please try again later.",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Newsletter notification sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Newsletter signup error:", error)
    return NextResponse.json(
      {
        error: "An error occurred. Please try again later.",
      },
      { status: 500 },
    )
  }
}
