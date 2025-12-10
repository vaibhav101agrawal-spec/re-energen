// filename: components/header.tsx
"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone } from "lucide-react"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const { language } = useLanguage()
  const isEn = language === "en"
  const PHONE = "+91-9201962695"
  const WHATSAPP = "https://wa.me/919201962695"
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-60 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <img
            src="/logofin.png"
            alt="Re Energen"
            
            className="h-20 sm:h-24 w-auto object-contain"
           
          />
        </Link>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/products"
            className="text-sm text-foreground hover:text-primary transition"
          >
            {isEn ? "Products" : "उत्पाद"}
          </Link>

          <Link
            href="/resources"
            className="text-sm text-foreground hover:text-primary transition"
          >
            {isEn ? "Resources" : "संसाधन"}
          </Link>

          <Link
            href="/about"
            className="text-sm text-foreground hover:text-primary transition"
          >
            {isEn ? "About" : "हमारे बारे में"}
          </Link>

          <Link
            href="/contact"
            className="text-sm text-foreground hover:text-primary transition"
          >
            {isEn ? "Contact" : "संपर्क"}
          </Link>

          <a
            href={`tel:${PHONE}`}
            className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-2"
            aria-label={isEn ? `Call ${PHONE}` : `कॉल ${PHONE}`}
          >
            <Phone className="w-4 h-4" /> {PHONE}
          </a>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground hover:text-primary"
          >
            WhatsApp
          </a>

          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/"
              className="block text-foreground hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Home" : "होम"}
            </Link>

            <Link
              href="/products"
              className="block text-foreground hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Products" : "उत्पाद"}
            </Link>

            <Link
              href="/resources"
              className="block text-foreground hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Resources" : "संसाधन"}
            </Link>

            <Link
              href="/about"
              className="block text-foreground hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "About" : "हमारे बारे में"}
            </Link>

            <Link
              href="/contact"
              className="block text-foreground hover:text-primary py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {isEn ? "Contact" : "संपर्क"}
            </Link>

            <div className="pt-2 border-t border-border mt-2">
              <a
                href={`tel:${PHONE}`}
                className="block text-foreground hover:text-primary py-2 inline-flex items-center gap-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-4 h-4" />
                {isEn ? "Call Us" : "हमें कॉल करें"}
              </a>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="block text-foreground hover:text-primary py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
