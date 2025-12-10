"use client"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { MobileLayout } from "@/components/MobileLayout"
import { TabletLayout } from "@/components/TabletLayout"
import { DesktopLayout } from "@/components/DesktopLayout"

export default function HomePage() {
  const PHONE_1 = "+91-9201962695"
  const PHONE_2 = "+91-7880109995"
  const EMAIL_1 = "info@re-energen.com"

  const WHATSAPP = "https://wa.me/919201962695"

  const layoutProps = {
    PHONE_1,
    PHONE_2,
    EMAIL_1,
    WHATSAPP,
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Mobile: width < 768px */}
      <div className="md:hidden">
        <MobileLayout {...layoutProps} />
      </div>

      {/* Tablet: 768px to < 1024px */}
      <div className="hidden md:block lg:hidden">
        <TabletLayout {...layoutProps} />
      </div>

      {/* Desktop: width ≥ 1024px */}
      <div className="hidden lg:block">
        <DesktopLayout {...layoutProps} />
      </div>

      <Footer />
    </main>
  )
}
