"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, MapPin, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

interface MobileLayoutProps {
  PHONE_1: string
  PHONE_2: string
  EMAIL_1: string

  WHATSAPP: string
}

export function MobileLayout({ PHONE_1, PHONE_2, EMAIL_1 , WHATSAPP }: MobileLayoutProps) {
  const { language } = useLanguage()
  const isEn = language === "en"

  const [callbackOpen, setCallbackOpen] = useState(false)
  const [cbName, setCbName] = useState("")
  const [cbPhone, setCbPhone] = useState("")
  const [cbSending, setCbSending] = useState(false)
  const [cbSuccess, setCbSuccess] = useState(false)

  async function submitCallback(e: React.FormEvent) {
    e.preventDefault()
    if (!cbPhone) return
    setCbSending(true)
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: cbName || "Callback request",
          phone: cbPhone,
          source: "homepage-request-site-visit",
        }),
      })
      setCbSuccess(true)
      setCbName("")
      setCbPhone("")
      setTimeout(() => {
        setCbSuccess(false)
        setCallbackOpen(false)
      }, 1400)
    } catch (err) {
      console.error(err)
    } finally {
      setCbSending(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Hero - Stacked vertically */}
      <section className="bg-[linear-gradient(180deg,#f3f7f5,transparent)] py-8 px-4">
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/family-with-solar.png"
            alt={isEn ? "Family with solar panels" : "परिवार सौर पैनलों के साथ"}
            width={320}
            height={320}
            priority
            quality={85}
            className="w-72 h-72 object-cover rounded-full shadow-lg"
          />

          <div className="text-center">
            <h1 className="text-2xl font-extrabold leading-tight">
              {isEn ? "Cut your electricity bill\nSwitch to solar today." : "अपना बिजली का बिल घटाएँ\nआज ही सोलर अपनाएँ।"}
            </h1>
            <p className="mt-3 text-sm text-muted-foreground">
              {isEn
                ? "Reliable installations,\ngovernment-approved equipment,\nand local support.\nFree site visit available."
                : "भरोसेमंद इंस्टॉलेशन, सरकारी\nमान्यता प्राप्त उपकरण और लोकल\nसपोर्ट\nनि:शुल्क साइट विज़िट उपलब्ध।"}
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a href={`tel:${PHONE_1}`}>
                <Button className="bg-primary hover:bg-primary/90 flex items-center gap-3 px-4 w-full justify-center">
                  <Phone className="w-4 h-4" />
                  {isEn ? "Call Now" : "हमें कॉल करें"}
                </Button>
              </a>

              <button onClick={() => setCallbackOpen(true)}>
                <Button variant="outline" className="px-4 w-full justify-center bg-transparent">
                  {isEn ? "Request Free Site Visit" : "नि:शुल्क साइट विज़िट"}
                </Button>
              </button>
            </div>

            <div className="mt-6 bg-background/60 border border-border rounded-md p-3 inline-flex gap-6">
              <div className="text-center">
                <div className="font-bold text-lg">50+</div>
                <div className="text-xs text-muted-foreground">{isEn ? "Happy customers" : "संतुष्ट ग्राहक"}</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg">24/7</div>
                <div className="text-xs text-muted-foreground">{isEn ? "Support" : "सपोर्ट"}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar - Single column */}
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">{isEn ? "Why Solar?" : "सोलर क्यों?"}</h2>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{isEn ? "Save big on your electricity bills" : "बिजली बिल में भारी बचत"}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{isEn ? "Up to ₹1,08,000 government subsidy" : "₹1,08,000 तक सरकारी सब्सिडी"}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{isEn ? "24x7 power availability" : "24x7 बिजली की उपलब्धता"}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{isEn ? "No fear of rising electricity rates" : "बिजली की दरें बढ़ने का डर खत्म"}</span>
          </li>
          <li className="flex items-start gap-3">
            <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{isEn ? "Earn from selling excess power" : "अतिरिक्त बिजली बेचकर कमाई"}</span>
          </li>
        </ul>
      </section>

      {/* Before/After Chart */}
      <section className="px-4">
        <div className="bg-white border border-border rounded-md p-4">
          <div className="font-semibold text-lg mb-3 text-center">{isEn ? "Before / After" : "पहले / बाद"}</div>
          <Image
            src="/before-after-chart.png"
            alt={isEn ? "Before After chart" : "पहले बाद चार्ट"}
            width={500}
            height={300}
            quality={80}
            loading="lazy"
            className="w-full h-48 object-contain"
          />
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">{isEn ? "How It Works" : "प्रक्रिया"}</h2>
        <div className="space-y-4">
          {[
            {
              emoji: "🔎",
              title: isEn ? "Site Inspection" : "साइट निरीक्षण",
              desc: isEn ? "Free site visit & custom quote" : "नि:शुल्क साइट विज़िट और कस्टम कोट",
            },
            {
              emoji: "📄",
              title: isEn ? "Paperwork & Approval" : "फॉर्म और अप्रूवल",
              desc: isEn ? "We handle paperwork & approvals" : "हम फॉर्म और अप्रूवल संभालते हैं",
            },
            {
              emoji: "🔧",
              title: isEn ? "Installation" : "इंस्टॉलेशन",
              desc: isEn ? "Certified installers & fast setup" : "प्रमाणित इंस्टॉलर, तेज़ सेटअप",
            },
            {
              emoji: "💡",
              title: isEn ? "Savings Begin!" : "बचत शुरू",
              desc: isEn ? "Start saving from day one" : "दिन 1 से ही बचत शुरू",
            },
          ].map((step, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="bg-background border border-border w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0">
                {step.emoji}
              </div>
              <div>
                <div className="font-semibold text-sm">{step.title}</div>
                <div className="text-xs text-muted-foreground">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Logos */}
      <section className="py-8 px-4 bg-gray-50">
        <h3 className="text-xl font-bold mb-4 text-center">{isEn ? "Our Solar Range" : "हमारे सोलर ब्रैंड"}</h3>
        <div className="flex flex-col items-center gap-6">
          <Image
            src="/waaree-logo.png"
            alt="Waaree"
            width={160}
            height={70}
            quality={80}
            loading="lazy"
            className="max-h-12 object-contain"
          />
          <Image
            src="/tata-logo.png"
            alt="TATA"
            width={220}
            height={90}
            quality={80}
            loading="lazy"
            className="max-h-10 object-contain"
          />
          <Image
            src="/nova-logo.png"
            alt="Nova"
            width={140}
            height={60}
            quality={80}
            loading="lazy"
            className="max-h-12 object-contain"
          />
        </div>

        <div className="mt-6 text-center">
          <div className="text-sm font-medium text-muted-foreground mb-4">
            {isEn ? "All bank finance available" : "सभी बैंक फाइनेंस उपलब्ध"}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Image
              src="/sbi-logo.png"
              alt="SBI"
              width={100}
              height={40}
              quality={80}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/pnb-logo.png"
              alt="PNB"
              width={100}
              height={40}
              quality={80}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/bob-logo.png"
              alt="Bank of Baroda"
              width={100}
              height={40}
              quality={80}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/canara-logo.png"
              alt="Canara Bank"
              width={100}
              height={40}
              quality={80}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
            <Image
              src="/unionbank-logo.png"
              alt="Union Bank"
              width={100}
              height={40}
              quality={80}
              loading="lazy"
              className="h-8 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="px-4 py-8">
        <h3 className="text-2xl font-bold text-center mb-6">{isEn ? "Our Promise" : "हमारा वादा"}</h3>
        <Card className="p-4">
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {isEn ? "30-year panel warranty" : "30 वर्षों की पैनल वारंटी"}
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {isEn ? "Reliable local installation team" : "भरोसेमंद लोकल इंस्टॉलेशन टीम"}
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {isEn ? "Regular maintenance and support" : "नियमित रखरखाव और सपोर्ट"}
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {isEn ? "Honest guidance, no hidden costs" : "इमानदार मार्गदर्शन, कोई छिपा खर्च नहीं"}
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {isEn ? "Complete subsidy and net-metering help" : "सब्सिडी और नेट-मीटरिंग में मदद"}
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2.5 h-2.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {isEn ? "High-quality, government-approved equipment" : "उच्च गुणवत्ता वाले, सरकारी-स्वीकृत उपकरण"}
            </li>
          </ul>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-8 px-4">
        <h3 className="text-2xl font-bold mb-3">{isEn ? "Free Site Visit" : "नि:शुल्क साइट विज़िट"}</h3>
        <p className="text-sm mb-4">
          {isEn
            ? "Call or request a free site visit - we will provide a custom quote after inspection."
            : "कॉल करें या नि:शुल्क साइट विज़िट का अनुरोध करें\nनिरीक्षण के बाद हम कस्टम कोट देंगे।"}
        </p>

        <div className="flex flex-col gap-3 mb-4">
          <a href={`tel:${PHONE_1}`}>
            <Button className="bg-white text-primary font-semibold flex items-center gap-2 justify-center w-full shadow-sm hover:bg-white/90 transition">
              <Phone className="w-4 h-4" /> {isEn ? "Call Now" : "अभी कॉल करें"} • {PHONE_1}
            </Button>
          </a>

          <a href={WHATSAPP} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              className="bg-white text-primary font-semibold flex items-center gap-2 justify-center w-full shadow-sm hover:bg-white/90 transition"
            >
              {isEn ? "Chat on WhatsApp" : "WhatsApp पर चैट करें"}
            </Button>
          </a>
        </div>

        <div className="bg-white rounded-md p-3 border border-border text-foreground space-y-3">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="text-xs leading-relaxed">
              <div className="font-semibold">{isEn ? "Visit Us" : "हमसे मिलें"}</div>
              <div className="text-muted-foreground">5th Floor, Currency Tower, V.I.P. Road, Raipur 492001</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-primary flex-shrink-0" />
            <div className="text-xs space-y-1">
              <a href={`mailto:${EMAIL_1}`} className="hover:underline break-words block">
                {EMAIL_1}
              </a>
              
            </div>
          </div>
        </div>
      </section>

      {/* Callback Modal */}
      {callbackOpen && (
        <div className="fixed inset-0 z-70 flex items-center justify-center bg-black/40 p-4">
          <form onSubmit={submitCallback} className="w-full max-w-md bg-background border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-semibold">{isEn ? "Request Free Site Visit" : "नि:शुल्क साइट विज़िट अनुरोध"}</h3>
              <button
                type="button"
                onClick={() => setCallbackOpen(false)}
                aria-label="Close"
                className="text-muted-foreground"
              >
                ✕
              </button>
            </div>

            <label className="block text-xs text-muted-foreground mb-1">{isEn ? "Name" : "नाम (वैकल्पिक)"}</label>
            <input
              value={cbName}
              onChange={(e) => setCbName(e.target.value)}
              className="w-full mb-3 px-3 py-2 border border-border rounded"
              placeholder={isEn ? "Your name (optional)" : "आपका नाम (वैकल्पिक)"}
            />

            <label className="block text-xs text-muted-foreground mb-1">{isEn ? "Phone" : "फ़ोन"}</label>
            <input
              value={cbPhone}
              onChange={(e) => setCbPhone(e.target.value)}
              required
              className="w-full mb-3 px-3 py-2 border border-border rounded"
              placeholder={isEn ? "Mobile number" : "मोबाइल नंबर"}
            />

            <div className="flex gap-3">
              <Button type="submit" className="flex-1" disabled={cbSending}>
                {cbSending ? (isEn ? "Sending..." : "भेज रहे हैं...") : isEn ? "Request Visit" : "अनुरोध भेजें"}
              </Button>
              <Button variant="outline" type="button" onClick={() => setCallbackOpen(false)}>
                {isEn ? "Cancel" : "रद्द करें"}
              </Button>
            </div>

            {cbSuccess && (
              <div className="mt-3 text-sm text-green-600">{isEn ? "Request sent!" : "अनुरोध भेज दिया गया!"}</div>
            )}
          </form>
        </div>
      )}
    </div>
  )
}
