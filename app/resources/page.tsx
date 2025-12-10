// filename: app/resources/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/faq-section"
import { useLanguage } from "@/lib/language-context"
import translations from "@/lib/translations"
import { SolarCalculatorBill } from "@/components/solar-calculator-bill"

export default function ResourcesPage() {
  const { language } = useLanguage()
  const isEn = language === "en"
  const t = translations[language]

 
  function runCalc(e: React.FormEvent) {
    e.preventDefault()
    if (!monthlyBill || !systemSize) return
    // naive assumptions:
    // - system produces ~1200 kWh per kW per year (varies by location)
    // - electricity price ~ ₹9 / kWh (placeholder)
    const yearlyProductionKwh = Number(systemSize) * 1200
    const pricePerKwh = 9
    const yearlySaving = yearlyProductionKwh * pricePerKwh
    // system cost estimate per kW - placeholder ₹60,000 per kW
    const systemCost = Number(systemSize) * 60000
    const paybackYears = systemCost / yearlySaving
    setCalcResult({ yearlySaving: Math.round(yearlySaving), paybackYears: Number(paybackYears.toFixed(1)) })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-extrabold">{isEn ? "Resources & FAQ" : "संसाधन और पूछे जाने वाले प्रश्न"}</h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl mx-auto">
              {isEn ? "Guides, FAQs and a quick savings calculator to help you decide" : "निर्णय में मदद के लिए गाइड, FAQ और त्वरित बचत कैलकुलेटर"}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Articles */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white border border-border rounded-md p-6">
                <h2 className="text-xl font-semibold mb-3">{isEn ? "Starter Guides" : "शुरूआती गाइड"}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <article className="p-4 border border-border rounded-md hover:shadow-sm transition">
                    <h3 className="font-semibold mb-2">{isEn ? "How residential solar works" : "घरेलू सोलर कैसे काम करता है"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEn
                        ? "A short overview of panels, inverters, batteries and net metering."
                        : "पैनल, इन्वर्टर, बैटरी और नेट मीटरिंग का संक्षिप्त परिचय।"}
                    </p>
                    <div className="mt-3">
                      <Link href="/resources/residential-guide" className="text-primary hover:underline">{isEn ? "Read guide" : "गाइड पढ़ें"}</Link>
                    </div>
                  </article>

                  <article className="p-4 border border-border rounded-md hover:shadow-sm transition">
                    <h3 className="font-semibold mb-2">{isEn ? "Subsidy & paperwork" : "सब्सिडी और कागजी कार्य"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEn ? "Practical steps for subsidy applications and approvals." : "सब्सिडी आवेदन और अप्रूवल के लिए व्यावहारिक कदम।"}
                    </p>
                    <div className="mt-3">
                      <Link href="/resources/subsidy-guide" className="text-primary hover:underline">{isEn ? "Read guide" : "गाइड पढ़ें"}</Link>
                    </div>
                  </article>

                  <article className="p-4 border border-border rounded-md hover:shadow-sm transition">
                    <h3 className="font-semibold mb-2">{isEn ? "Choosing the right battery" : "सही बैटरी चुनना"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEn ? "Battery types, backup time and lifecycle explained." : "बैटरी प्रकार, बैकअप समय और जीवनकाल समझाया गया।"}
                    </p>
                    <div className="mt-3">
                      <Link href="/resources/battery-guide" className="text-primary hover:underline">{isEn ? "Read guide" : "गाइड पढ़ें"}</Link>
                    </div>
                  </article>

                  <article className="p-4 border border-border rounded-md hover:shadow-sm transition">
                    <h3 className="font-semibold mb-2">{isEn ? "Maintenance tips" : "रखरखाव सुझाव"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEn ? "Simple checks to keep your system performing well." : "सिस्टम का प्रदर्शन बनाए रखने के सरल जांच।"}
                    </p>
                    <div className="mt-3">
                      <Link href="/resources/maintenance" className="text-primary hover:underline">{isEn ? "Read guide" : "गाइड पढ़ें"}</Link>
                    </div>
                  </article>
                </div>
              </div>

              {/* FAQ Section - reuses component */}
              <div>
                <FAQSection items={t.faq.items} title={t.faq.title} />
              </div>
            </div>

            {/* Right column - Calculator + Downloads */}
            <SolarCalculatorBill />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
