import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Re-Energen - Solar Solutions",
  description: "Premium solar panel systems and clean energy solutions for residential and commercial properties",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Set a single CSS variable for the sticky bottom CTA height.
          Change this value if you adjust the sticky bar height. */}
      <body
        className={`font-sans antialiased`}
        style={
          // use a CSS variable so pages/components can reference exact height
          { ["--sticky-bar-height" as any]: "72px" }
        }
      >
        <LanguageProvider>
          {/* children render the site pages */}
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
