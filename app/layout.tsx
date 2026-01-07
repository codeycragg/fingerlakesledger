import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Updated fonts for professional bookkeeping aesthetic - Inter for body and DM Serif Display for elegant headings
const inter = Inter({ subsets: ["latin"] })
const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Finger Lakes Ledger - Professional Bookkeeping Services",
  description:
    "Expert bookkeeping services for the Finger Lakes region. QuickBooks certified and Microsoft Excel specialist.",
  generator: "v0.app",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${dmSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
