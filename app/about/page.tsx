// filename: app/about/page.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function AboutPage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const PHONE_1 = "+91-9201962695"
  const WHATSAPP = "https://wa.me/919201962695"

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Shared sticky header */}
      <Header />

      {/* HERO */}
      <section className="bg-[linear-gradient(180deg,#f3f7f5,transparent)] py-10 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
            {isEn ? "About Re-Energen" : "Re-Energen के बारे में"}
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            {isEn
              ? "Re-Energen (Akshat Sales and RR Unitrade) provides reliable rooftop solar solutions for homes and small businesses in and around Raipur. We focus on honest guidance, neat installation and long term support."
              : "Re-Energen (Akshat Sales और RR Unitrade) रायपुर और आसपास के क्षेत्र में घरों और छोटे व्यवसायों के लिए भरोसेमंद रूफटॉप सोलर समाधान प्रदान करता है। हमारा फोकस ईमानदार मार्गदर्शन, साफ सुथरा इंस्टॉलेशन और लंबे समय का सपोर्ट है।"}
          </p>
        </div>
      </section>

      {/* STORY + IMAGE */}
      <section className="py-10 sm:py-14 bg-white border-y border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 space-y-4">
            <h2 className="text-2xl font-bold">
              {isEn ? "Our Story" : "हमारी कहानी"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isEn
                ? "We started Re-Energen to make solar simple for families. Instead of confusing packages and hidden charges, we help you understand what size system you actually need, how much you can save and which subsidy you can get under the PM Surya Ghar Yojana."
                : "हमने Re-Energen की शुरुआत इसलिए की ताकि परिवारों के लिए सोलर आसान बनाया जा सके। जटिल पैकेज और छुपे हुए खर्चों की जगह, हम आपको साफ साफ बताते हैं कि आपको कितने किलोवाट की जरूरत है, कितनी बचत संभव है और PM Surya Ghar योजना के तहत आपको कितनी सब्सिडी मिल सकती है।"}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isEn
                ? "Our team handles everything from site visit and design to paperwork, installation and after sales service, so that you deal with a single trusted partner."
                : "हमारी टीम साइट विजिट और डिजाइन से लेकर पेपरवर्क, इंस्टॉलेशन और आफ्टर सेल्स सर्विस तक सब कुछ संभालती है, ताकि आपको हर चीज के लिए एक ही भरोसेमंद पार्टनर से बात करनी पड़े।"}
            </p>
          </div>

          <div className="order-1 md:order-2">
            <Image
              src="/family-with-solar.png"
              alt={isEn ? "Customer family with rooftop solar" : "रूफटॉप सोलर के साथ ग्राहक परिवार"}
              width={520}
              height={420}
              quality={85}
              loading="lazy"
              className="w-full rounded-xl shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="py-10 sm:py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-3">
              {isEn ? "Our Mission" : "हमारा मिशन"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isEn
                ? "To help families and small businesses cut their electricity bills with clean, government approved solar systems that are safe, dependable and easy to maintain."
                : "परिवारों और छोटे व्यवसायों को स्वच्छ, सरकारी स्वीकृत और सुरक्षित सोलर सिस्टम के माध्यम से बिजली का बिल कम करने में मदद करना, जिन्हें चलाना और मेंटेन करना आसान हो।"}
            </p>
          </div>

          <div className="bg-white border border-border rounded-lg p-6 shadow-sm">
            <h2 className="text-xl font-bold mb-3">
              {isEn ? "Our Vision" : "हमारा विज़न"}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              {isEn
                ? "Every suitable rooftop in Chhattisgarh should generate its own clean power, with Re-Energen known as the most trusted local partner for rooftop solar."
                : "छत्तीसगढ़ की हर उपयुक्त छत पर सोलर लगे और Re-Energen को सबसे भरोसेमंद लोकल रूफटॉप सोलर पार्टनर के रूप में जाना जाए।"}
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            {isEn ? "Why choose Re-Energen?" : "Re-Energen क्यों चुनें?"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: isEn ? "Government approved brands" : "सरकारी मान्यता प्राप्त ब्रांड",
                desc: isEn
                  ? "Panels, inverters and batteries from MNRE and DISCOM approved companies only."
                  : "केवल MNRE और DISCOM द्वारा स्वीकृत कंपनियों के पैनल, इन्वर्टर और बैटरी।",
              },
              {
                title: isEn ? "30 year panel warranty" : "30 वर्ष की पैनल वारंटी",
                desc: isEn
                  ? "Tier one panels with strong performance warranty and service support."
                  : "टियर वन पैनल जिन पर मजबूत परफॉर्मेंस वारंटी और सर्विस सपोर्ट मिलता है।",
              },
              {
                title: isEn ? "Neat installation" : "साफ सुथरा इंस्टॉलेशन",
                desc: isEn
                  ? "Trained local team, proper structure and tidy cable management on your roof."
                  : "प्रशिक्षित लोकल टीम, मजबूत स्ट्रक्चर और आपकी छत पर साफ सुथरा केबल मैनेजमेंट।",
              },
              {
                title: isEn ? "PM Surya Ghar guidance" : "PM Surya Ghar मार्गदर्शन",
                desc: isEn
                  ? "Help with online portal, documents and subsidy claim under PM Surya Ghar Yojana."
                  : "PM Surya Ghar योजना के तहत ऑनलाइन पोर्टल, दस्तावेज और सब्सिडी क्लेम में पूरी मदद।",
              },
              {
                title: isEn ? "Honest, simple quotes" : "साफ और ईमानदार कोट",
                desc: isEn
                  ? "Clear pricing without hidden charges so you know exactly what you are paying for."
                  : "बिना छुपे हुए चार्ज के साफ कीमत, ताकि आपको ठीक से पता हो कि आप किस चीज के लिए भुगतान कर रहे हैं।",
              },
              {
                title: isEn ? "Regular maintenance" : "नियमित रखरखाव",
                desc: isEn
                  ? "Annual service and on call support to keep your system running smoothly."
                  : "वार्षिक सर्विस और ऑन कॉल सपोर्ट ताकि आपका सिस्टम हमेशा सही चले।",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-border rounded-lg p-5 shadow-sm hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary text-primary-foreground py-10 sm:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {isEn ? "Ready to explore solar for your home?" : "क्या आप अपने घर के लिए सोलर लगवाना चाहते हैं?"}
          </h2>
          <p className="text-sm sm:text-base mb-6">
            {isEn
              ? "Call us or request a free site visit. We will inspect your roof, explain subsidy options and share a clear proposal."
              : "हमें कॉल करें या नि:शुल्क साइट विजिट का अनुरोध करें। हमारी टीम आपकी छत देख कर, सब्सिडी विकल्प समझाकर और साफ प्रस्ताव के साथ मार्गदर्शन करेगी।"}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href={`tel:${PHONE_1}`}>
              <button className="bg-white text-primary font-semibold py-2 px-5 rounded-md hover:bg-white/90 transition">
                {isEn ? "Call now" : "अभी कॉल करें"}
              </button>
            </a>

            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <button className="bg-transparent border border-white py-2 px-5 rounded-md hover:bg-white hover:text-primary transition">
                WhatsApp
              </button>
            </a>

            <Link href="/contact">
              <button className="bg-white/10 border border-white/40 py-2 px-5 rounded-md hover:bg-white hover:text-primary transition">
                {isEn ? "Go to contact page" : "संपर्क पेज पर जाएं"}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
