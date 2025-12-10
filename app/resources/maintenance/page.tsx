"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function MaintenancePage() {
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
              <h1 className="text-4xl font-bold">
                {isEn ? "Solar System Maintenance Guide" : "सोलर सिस्टम रखरखाव गाइड"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {isEn
                  ? "Simple and practical maintenance steps to help your solar system stay efficient, safe, and long-lasting — for you and the planet."
                  : "आपके सोलर सिस्टम को कुशल, सुरक्षित और टिकाऊ बनाए रखने के लिए सरल और व्यावहारिक रखरखाव सुझाव — आपके और पर्यावरण के लिए।"}
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              {/* Monthly Checks */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "1. Monthly Health Check" : "1. मासिक स्वास्थ्य जांच"}</h2>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>
                    {isEn
                      ? "Monitor daily energy generation using your solar app or inverter display, especially on sunny days."
                      : "धूप वाले दिनों में अपने सोलर ऐप या इन्वर्टर डिस्प्ले पर दैनिक बिजली उत्पादन की निगरानी करें।"}
                  </li>
                  <li>
                    {isEn
                      ? "Check inverter screen for any warning or error codes."
                      : "इन्वर्टर स्क्रीन पर किसी भी चेतावनी या त्रुटि कोड की जांच करें।"}
                  </li>
                  <li>
                    {isEn
                      ? "Inspect visible wiring and junction boxes for wear, loose connections, or animal interference."
                      : "दिखाई देने वाली वायरिंग और जंक्शन बॉक्स की ढीले कनेक्शन या जानवरों के हस्तक्षेप के लिए जांच करें।"}
                  </li>
                  <li>
                    {isEn
                      ? "If you have batteries, monitor voltage and state-of-health indicators."
                      : "यदि आपके पास बैटरी हैं, तो वोल्टेज और स्वास्थ्य संकेतकों की निगरानी करें।"}
                  </li>
                </ul>
              </section>

              {/* Panel Cleaning */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "2. Panel Cleaning" : "2. पैनल की सफाई"}</h2>
                <p>
                  {isEn
                    ? "Dust, bird droppings, and pollution can reduce efficiency by up to 25%. Clean panels every 2–3 months or when visible dust appears. Use soft water and a microfiber cloth — never use soap, harsh brushes, or during peak sunlight hours."
                    : "धूल, पक्षियों की बीट और प्रदूषण दक्षता को 25% तक कम कर सकते हैं। हर 2–3 महीने में या जब धूल दिखाई दे, तब पैनल की सफाई करें। मुलायम पानी और माइक्रोफाइबर कपड़े का उपयोग करें — साबुन या कठोर ब्रश का उपयोग न करें और दोपहर की धूप में सफाई न करें।"}
                </p>
              </section>

              {/* Battery Maintenance */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "3. Battery Care" : "3. बैटरी की देखभाल"}</h2>
                <p>
                  {isEn
                    ? "Modern lithium-ion batteries are largely maintenance-free, but ensure proper ventilation around the unit. Keep the area dry, clean, and shaded from direct sunlight. Ideal operating temperature is between 15°C and 30°C."
                    : "आधुनिक लिथियम-आयन बैटरी लगभग रखरखाव-मुक्त होती हैं, लेकिन यूनिट के आसपास उचित वेंटिलेशन सुनिश्चित करें। क्षेत्र को सूखा, स्वच्छ और सीधी धूप से दूर रखें। आदर्श तापमान 15°C से 30°C के बीच होता है।"}
                </p>
              </section>

              {/* Inverter Maintenance */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "4. Inverter Maintenance" : "4. इन्वर्टर रखरखाव"}</h2>
                <p>
                  {isEn
                    ? "Your inverter is the brain of the solar system. Keep it dust-free and ensure open airflow. Clean air vents monthly. If you notice unusual noises, flickering lights, or frequent shutdowns — call a technician immediately."
                    : "इन्वर्टर सोलर सिस्टम का मस्तिष्क है। इसे धूल-मुक्त रखें और पर्याप्त वायु प्रवाह सुनिश्चित करें। हवा के वेंट्स की मासिक सफाई करें। यदि असामान्य आवाज़, झपकती लाइटें या बार-बार बंद होना दिखे — तुरंत तकनीशियन से संपर्क करें।"}
                </p>
              </section>

              {/* Electrical Safety */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">{isEn ? "5. Electrical Safety" : "5. विद्युत सुरक्षा"}</h2>
                <p>
                  {isEn
                    ? "Never open or touch any live electrical part. Turn off the system during heavy rain, lightning, or maintenance work. Check earthing points annually — proper grounding is essential for both safety and performance."
                    : "कभी भी किसी जीवित विद्युत भाग को न छुएं। भारी बारिश, बिजली गिरने या रखरखाव के दौरान सिस्टम बंद कर दें। अर्थिंग पॉइंट्स की वार्षिक जांच करें — सही अर्थिंग सुरक्षा और प्रदर्शन दोनों के लिए आवश्यक है।"}
                </p>
              </section>

              {/* Annual Maintenance */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "6. Annual Professional Check-up" : "6. वार्षिक व्यावसायिक जांच"}
                </h2>
                <p>
                  {isEn
                    ? "A professional inspection once a year helps ensure your system runs efficiently. Technicians verify wiring, insulation, inverter calibration, and system output. Regular servicing prevents long-term damage and maintains your warranty."
                    : "वर्ष में एक बार पेशेवर निरीक्षण सुनिश्चित करता है कि आपका सिस्टम कुशलता से काम कर रहा है। तकनीशियन वायरिंग, इंसुलेशन, इन्वर्टर कैलिब्रेशन और सिस्टम आउटपुट की जांच करते हैं। नियमित सेवा दीर्घकालिक क्षति को रोकती है और आपकी वारंटी बनाए रखती है।"}
                </p>
              </section>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <p className="text-sm">
                  <strong>{isEn ? "Want a hassle-free maintenance plan?" : "बिना झंझट रखरखाव चाहते हैं?"}</strong>{" "}
                  {isEn
                    ? "Our team provides affordable annual maintenance contracts, including system inspection, cleaning, and performance testing — keeping your solar investment protected all year."
                    : "हमारी टीम सस्ती वार्षिक रखरखाव सेवाएं प्रदान करती है — जिसमें सिस्टम निरीक्षण, सफाई और प्रदर्शन परीक्षण शामिल हैं, ताकि आपका सोलर निवेश पूरे साल सुरक्षित रहे।"}
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:underline inline-block mt-3">
                  {isEn ? "Book a service visit" : "सेवा विजिट बुक करें"}
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
