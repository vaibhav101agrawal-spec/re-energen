// filename: app/contact/page.tsx
"use client"

import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ContactPage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const PHONE_PRIMARY = "+91-9201962695"
  const PHONE_SECOND = "+91-7880109995"
  const EMAIL_PRIMARY = "info@re-energen.com"
  {/*const EMAIL_SECOND = "??@gmail.com"*/}
  const WHATSAPP = "https://wa.me/919201962695"
  const ADDRESS = "5th Floor, Currency Tower, V.I.P. Road, Raipur 492001"
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS + ", India")}`

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">{isEn ? "Contact" : "संपर्क करें"}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {isEn
                ? "Questions? Call, message or request a free site visit. We usually respond within 24 hours."
                : "प्रश्न? कॉल करें, संदेश भेजें या नि:शुल्क साइट विज़िट का अनुरोध करें। हम सामान्यतः 24 घंटे के भीतर उत्तर देते हैं।"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left: contact card */}
            <div className="md:col-span-1 space-y-4">
              <div className="bg-white rounded-md p-4 border border-border">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">{isEn ? "Visit Us" : "हमसे मिलें"}</div>
                    <div className="text-xs text-muted-foreground">{ADDRESS}</div>
                    <div className="mt-2">
                      <a href={mapsHref} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline">
                        {isEn ? "Open in Google Maps" : "Google मानचित्र पर खोलें"}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div>
                      <a href={`mailto:${EMAIL_PRIMARY}`} className="hover:underline">{EMAIL_PRIMARY}</a>
                    </div>
                    {/*<div>
                      <a href={`mailto:${EMAIL_SECOND}`} className="hover:underline">{EMAIL_SECOND}</a>
                    </div>*/}
                  </div>
                </div>

                <div className="mt-4 flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    <div>
                      <a href={`tel:${PHONE_PRIMARY}`} className="hover:underline">{PHONE_PRIMARY}</a>
                    </div>
                    <div>
                      <a href={`tel:${PHONE_SECOND}`} className="hover:underline">{PHONE_SECOND}</a>
                    </div>
                    <div className="mt-2">
                      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-primary">
                        {isEn ? "Chat on WhatsApp" : "WhatsApp पर चैट करें"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-md p-4 text-sm">
                <div className="font-semibold mb-2">{isEn ? "Support Hours" : "समर्थन समय"}</div>
                <div className="text-muted-foreground">Mon–Sat: 9:00 — 18:00</div>
                <div className="text-muted-foreground mt-2">{isEn ? "Emergency support available 24/7" : "आपातकालीन सहायता 24/7 उपलब्ध"}</div>
              </div>
            </div>

            {/* Right: CTAs + map */}
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border border-border rounded-md p-6">
                <h2 className="text-xl font-semibold mb-3">{isEn ? "Get in touch" : "संपर्क करें"}</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  {isEn
                    ? "Prefer to talk? Choose an option below: Call, WhatsApp or email us. If you'd like a site visit, click Request Site Visit and we'll reach out to schedule."
                    : "बात करना पसंद करते हैं? नीचे एक विकल्प चुनें: कॉल, WhatsApp या ईमेल। यदि आप साइट विज़िट चाहते हैं, तो 'Request Site Visit' पर क्लिक करें।"}
                </p>

                <div className="flex flex-col sm:flex-row items-stretch gap-3">
                  <a href={`tel:${PHONE_PRIMARY}`} className="w-full sm:w-auto">
                    <Button className="w-full inline-flex items-center gap-2 justify-center bg-primary text-primary-foreground">
                      <Phone className="w-4 h-4" /> {isEn ? "Call Now" : "कॉल करें"} • {PHONE_PRIMARY}
                    </Button>
                  </a>

                  <a href={WHATSAPP} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full inline-flex items-center justify-center">{isEn ? "Chat on WhatsApp" : "WhatsApp पर चैट करें"}</Button>
                  </a>

                  <a href={`mailto:${EMAIL_PRIMARY}`} className="w-full sm:w-auto">
                    <Button variant="ghost" className="w-full inline-flex items-center justify-center">{isEn ? "Email Us" : "हमें ईमेल करें"}</Button>
                  </a>
                </div>

                <div className="mt-4 text-sm text-muted-foreground">
                  {isEn
                    ? "If you'd like a free site visit, call or WhatsApp and mention 'site visit' — we'll take it from there."
                    : "यदि आप नि:शुल्क साइट विज़िट चाहते हैं, तो कॉल या WhatsApp करें और 'site visit' का उल्लेख करें।"}
                </div>
              </div>

              <div className="border border-border rounded-md overflow-hidden">
                <iframe
                  title="Akshat Sales location"
                  className="w-full h-64 md:h-80"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(ADDRESS + ", Raipur, India")}&output=embed`}
                  loading="lazy"
                />
              </div>

              <div className="bg-background/60 border border-border rounded-md p-4 text-sm text-muted-foreground">
                <div className="font-semibold mb-1">{isEn ? "Directions tip" : "दिशा-दर्शन सुझाव"}</div>
                <div>
                  {isEn
                    ? "We recommend scheduling a site visit before coming in person so our team can prepare and ensure availability."
                    : "आने से पहले साइट विज़िट शेड्यूल करने की सलाह देते हैं ताकि हमारी टीम तैयारी कर सके।"}
                </div>
                <div className="mt-3">
                  <Link href={mapsHref} className="text-primary hover:underline">{isEn ? "Open in Google Maps" : "Google मानचित्र पर खोलें"}</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
