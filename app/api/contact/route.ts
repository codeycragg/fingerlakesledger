import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message, contactPreference } = body

    console.log("[v0] Contact form submission received:", { name, email, contactPreference })

    // Validate required fields
    if (!name || !email || !message || !contactPreference) {
      console.log("[v0] Validation failed - missing fields")
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
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

    console.log("[v0] Attempting to send email via Resend...")

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Finger Lakes Ledger <noreply@fingerlakesledger.com>",
      to: ["contact@fingerlakesledger.com"],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactPreference}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json(
        {
          error: "Failed to send email. Please try emailing contact@fingerlakesledger.com directly.",
        },
        { status: 500 },
      )
    }

    console.log("[v0] Email sent successfully:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Contact form error:", error)
    return NextResponse.json(
      {
        error: "An error occurred. Please email contact@fingerlakesledger.com directly.",
      },
      { status: 500 },
    )
  }
}
