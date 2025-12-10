"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function BatteryGuidePage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back link */}
          <Link href="/resources" className="inline-flex items-center gap-2 text-primary hover:underline mb-8">
            <span>←</span>
            {isEn ? "Back to Resources" : "संसाधन पर वापस जाएं"}
          </Link>

          <article className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold">{isEn ? "Choosing the Right Battery" : "सही बैटरी चुनना"}</h1>
              <p className="text-lg text-muted-foreground">
                {isEn
                  ? "Understand battery types, backup time, capacity, and lifecycle to make the best choice for your home."
                  : "अपने घर के लिए सही विकल्प बनाने के लिए बैटरी के प्रकार, बैकअप समय, क्षमता, और जीवनकाल को समझें।"}
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "Battery Types" : "बैटरी के प्रकार"}</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg">{isEn ? "Lithium-ion" : "लिथियम-आयन"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEn
                        ? "Most popular choice. Efficiency 95%, lifespan 10-15 years, compact size, minimal maintenance."
                        : "सबसे लोकप्रिय विकल्प। दक्षता 95%, जीवनकाल 10-15 साल, कॉम्पैक्ट आकार, न्यूनतम रखरखाव।"}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{isEn ? "Lead-acid" : "लेड-एसिड"}</h3>
                    <p className="text-sm text-muted-foreground">
                      {isEn
                        ? "Budget option. Efficiency 80%, lifespan 3-5 years, requires regular maintenance and larger space."
                        : "बजट विकल्प। दक्षता 80%, जीवनकाल 3-5 साल, नियमित रखरखाव की आवश्यकता।"}
                    </p>
                  </div>
                </div>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "Capacity Sizing" : "क्षमता आकार"}</h2>
                <p>
                  {isEn
                    ? "Battery capacity is measured in kWh (kilowatt-hours). A typical 3-5 kWh battery can power essential appliances (lights, fans, refrigerator) for 4-6 hours during outages. Larger homes may need 8-10 kWh for extended backup."
                    : "बैटरी क्षमता को kWh (किलोवाट-घंटे) में मापा जाता है। एक विशिष्ट 3-5 kWh बैटरी आउटेज के दौरान 4-6 घंटे के लिए आवश्यक उपकरणों क�� बिजली दे सकती है।"}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "Backup Time" : "बैकअप समय"}</h2>
                <p>
                  {isEn
                    ? "Backup time depends on battery capacity and daily consumption. With solar + battery: during day (all solar), at night (battery discharge), overcast days (combination). Most customers target 4-6 hours of backup to cover evening peak usage."
                    : "बैकअप समय बैटरी क्षमता और दैनिक खपत पर निर्भर करता है। सोलर + बैटरी के साथ: दिन में (सभी सोलर), रात में (बैटरी डिस्चार्ज), बादल के दिन (संयोजन)।"}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "Lifecycle & Warranty" : "जीवनकाल और वारंटी"}</h2>
                <p>
                  {isEn
                    ? "Lithium batteries typically come with 10-year warranties. Cycle life (charge-discharge cycles) is typically 3000-4000 for quality batteries. Proper installation and maintenance extend lifespan significantly."
                    : "लिथियम बैटरी आमतौर पर 10 साल की वारंटी के साथ आती हैं। चक्र जीवन (चार्ज-डिस्चार्ज चक्र) गुणवत्ता वाली बैटरी के लिए आमतौर पर 3000-4000 है।"}
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "Installation & Safety" : "स्थापना और सुरक्षा"}</h2>
                <p>
                  {isEn
                    ? "Batteries must be installed in a cool, dry, well-ventilated space. Professional installation ensures proper electrical connections and safety compliance. A working DCDB (Direct Current Distribution Box) and proper wiring are essential."
                    : "बैटरी को एक ठंडे, सूखे, अच्छी तरह हवादार स्थान पर स्थापित किया जाना चाहिए। व्यावसायिक स्थापन उचित विद्युत कनेक्शन और सुरक्षा अनुपालन सुनिश्चित करता है।"}
                </p>
              </section>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <p className="text-sm">
                  <strong>
                    {isEn
                      ? "Unsure which battery fits your needs?"
                      : "निश्चित नहीं हैं कि कौन सी बैटरी आपकी जरूरतों के अनुकूल है?"}
                  </strong>{" "}
                  {isEn
                    ? "Our energy experts will recommend the perfect battery system based on your consumption and budget."
                    : "हमारे ऊर्जा विशेषज्ञ आपकी खपत और बजट के आधार पर सही बैटरी सिस्टम की सिफारिश करेंगे।"}
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:underline inline-block mt-3">
                  {isEn ? "Get battery recommendation" : "बैटरी अनुशंसा प्राप्त करें"}
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  )
}
