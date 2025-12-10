"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function ResidentialGuidePage() {
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
              <h1 className="text-4xl font-bold">{isEn ? "How Residential Solar Works" : "घरेलू सोलर कैसे काम करता है"}</h1>
              <p className="text-lg text-muted-foreground">
                {isEn
                  ? "Learn how sunlight is turned into usable electricity for your home. This guide explains solar panels, inverters, batteries, and net metering in simple, practical terms."
                  : "जानें कि सूर्य की रोशनी आपके घर के लिए उपयोगी बिजली में कैसे बदलती है। यह गाइड सोलर पैनल, इन्वर्टर, बैटरी और नेट मीटरिंग को सरल शब्दों में समझाता है।"}
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              {/* Solar Panels */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "1. Solar Panels" : "1. सोलर पैनल"}</h2>
                <p>
                  {isEn
                    ? "Solar panels are made of photovoltaic (PV) cells that convert sunlight directly into electricity. When sunlight hits these silicon-based cells, electrons move, generating direct current (DC). A typical residential panel produces 540–650 watts of power."
                    : "सोलर पैनल फोटोवोल्टिक (PV) सेल से बने होते हैं जो सूर्य के प्रकाश को सीधे बिजली में बदलते हैं। जब सूर्य की रोशनी इन सिलिकॉन आधारित कोशिकाओं पर पड़ती है, तो इलेक्ट्रॉन गति करते हैं और सीधी धारा (DC) उत्पन्न होती है। एक सामान्य घरेलू पैनल 540–650 वॉट बिजली उत्पन्न करता है।"}
                </p>
              </section>

              {/* Inverters */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "2. Inverters" : "2. इन्वर्टर"}</h2>
                <p>
                  {isEn
                    ? "Inverters convert DC electricity from the panels into AC electricity, the type used by home appliances. They also track system performance and ensure grid synchronization. Most homes use either a single string inverter or multiple microinverters for better efficiency."
                    : "इन्वर्टर पैनल से उत्पन्न DC बिजली को AC में बदलते हैं  वही बिजली जो घर के उपकरणों में उपयोग होती है। वे सिस्टम के प्रदर्शन की निगरानी करते हैं और ग्रिड सिंक्रोनाइजेशन सुनिश्चित करते हैं। अधिकांश घर एक स्ट्रिंग इन्वर्टर या कई माइक्रोइन्वर्टर का उपयोग करते हैं ताकि दक्षता बेहतर हो सके।"}
                </p>
              </section>

              {/* Batteries */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "3. Batteries (Optional)" : "3. बैटरी (वैकल्पिक)"}</h2>
                <p>
                  {isEn
                    ? "Batteries store extra solar energy generated during the day, so you can use it at night or on cloudy days. Lithium-ion batteries are preferred for their long lifespan, fast charging, and higher efficiency. A typical home system uses 5–10 kWh of battery storage."
                    : "बैटरी दिन में उत्पन्न अतिरिक्त सौर ऊर्जा को संग्रहीत करती हैं ताकि आप रात में या बादल वाले दिनों में इसका उपयोग कर सकें। लिथियम-आयन बैटरी उनकी लंबी उम्र, तेज़ चार्जिंग और अधिक दक्षता के कारण लोकप्रिय हैं। एक सामान्य घरेलू सिस्टम में 5–10 kWh की बैटरी स्टोरेज होती है।"}
                </p>
              </section>

              {/* Net Metering */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "4. Net Metering" : "4. नेट मीटरिंग"}</h2>
                <p>
                  {isEn
                    ? "Net metering lets you send extra electricity back to the grid. When your panels produce more power than you use, your electricity meter runs backward, giving you credits that reduce your future bills."
                    : "नेट मीटरिंग आपको अतिरिक्त बिजली को ग्रिड में वापस भेजने की अनुमति देती है। जब आपके पैनल आपकी आवश्यकता से अधिक बिजली उत्पन्न करते हैं, तो आपका बिजली मीटर उल्टा चलता है और आपको भविष्य के बिलों पर क्रेडिट मिलता है।"}
                </p>
              </section>

              {/* System Design */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "5. System Design & Site Inspection" : "5. सिस्टम डिज़ाइन और साइट निरीक्षण"}</h2>
                <p>
                  {isEn
                    ? "A proper system design depends on your daily power usage, roof area, and local sunlight availability. During a site inspection, engineers assess roof strength, shadow areas, and electrical setup to recommend the most efficient and cost-effective system."
                    : "एक सही सिस्टम डिज़ाइन आपकी दैनिक बिजली खपत, छत के क्षेत्र और स्थानीय धूप की उपलब्धता पर निर्भर करता है। साइट निरीक्षण के दौरान, इंजीनियर छत की मजबूती, छाया वाले क्षेत्र और विद्युत सेटअप का मूल्यांकन करते हैं ताकि सबसे कुशल और किफायती सिस्टम सुझाया जा सके।"}
                </p>
              </section>

              {/* CTA box */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <p className="text-sm">
                  <strong>{isEn ? "Thinking about switching to solar?" : "क्या आप सोलर अपनाने के बारे में सोच रहे हैं?"}</strong>{" "}
                  {isEn
                    ? "Schedule a free site visit, our team will evaluate your roof, consumption pattern, and give a clear cost-saving estimate."
                    : "एक नि:शुल्क साइट विज़िट शेड्यूल करें, हमारी टीम आपकी छत, बिजली उपयोग और बचत का सटीक अनुमान देगी।"}
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:underline inline-block mt-3">
                  {isEn ? "Book a free consultation" : "मुफ्त परामर्श बुक करें"}
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
