"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useLanguage } from "@/lib/language-context"

export default function SubsidyGuidePage() {
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
                {isEn ? "Subsidy & Paperwork Guide (PM Surya Ghar Yojana)" : "सब्सिडी और कागजी कार्य गाइड (पीएम सूर्य घर योजना)"}
              </h1>
              <p className="text-lg text-muted-foreground">
                {isEn
                  ? "Everything you need to know about claiming your subsidy under the Government of India’s PM Surya Ghar Muft Bijli Yojana, from eligibility to disbursement."
                  : "भारत सरकार की पीएम सूर्य घर मुफ्त बिजली योजना के तहत सब्सिडी प्राप्त करने के लिए आवश्यक सभी जानकारी, पात्रता से लेकर भुगतान तक।"}
              </p>
            </div>

            <div className="bg-white border border-border rounded-lg p-6 space-y-6">
              {/* Scheme Overview */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "About the PM Surya Ghar Yojana" : "पीएम सूर्य घर योजना के बारे में"}
                </h2>
                <p>
                  {isEn
                    ? "The PM Surya Ghar Muft Bijli Yojana is a national initiative promoting residential rooftop solar systems across India. Under this scheme, homeowners can receive a government subsidy of up to ₹1,08,000 depending on system size and capacity."
                    : "पीएम सूर्य घर मुफ्त बिजली योजना भारत भर में आवासीय रूफटॉप सोलर सिस्टम को बढ़ावा देने की एक राष्ट्रीय पहल है। इस योजना के तहत, घर-मालिक सिस्टम के आकार और क्षमता के अनुसार ₹1,08,000 तक की सरकारी सब्सिडी प्राप्त कर सकते हैं।"}
                </p>
              </section>

              {/* Eligibility */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "Step 1: Check Your Eligibility" : "चरण 1: अपनी पात्रता जांचें"}
                </h2>
                <p>
                  {isEn
                    ? "Any Indian household owning a residential property with a valid electricity connection can apply. The property must have sufficient roof space and a sanctioned load that matches solar installation capacity."
                    : "कोई भी भारतीय परिवार जिसके पास वैध बिजली कनेक्शन वाली आवासीय संपत्ति है, आवेदन कर सकता है। संपत्ति में पर्याप्त छत की जगह होनी चाहिए और सोलर इंस्टॉलेशन क्षमता के अनुरूप लोड स्वीकृत होना चाहिए।"}
                </p>
              </section>

              {/* Application Process */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "Step 2: Registration & Application" : "चरण 2: पंजीकरण और आवेदन"}
                </h2>
                <p>
                  {isEn
                    ? "Apply directly through the official PM Surya Ghar portal (pmsuryaghar.gov.in). You will need your electricity bill, bank details, property proof, and a photo of your rooftop. Alternatively, our team can assist with registration and documentation."
                    : "आधिकारिक पीएम सूर्य घर पोर्टल (pmsuryaghar.gov.in) के माध्यम से सीधे आवेदन करें। इसके लिए बिजली बिल, बैंक विवरण, संपत्ति प्रमाण और छत की तस्वीर आवश्यक है। वैकल्पिक रूप से, हमारी टीम पंजीकरण और दस्तावेज़ीकरण में आपकी सहायता कर सकती है।"}
                </p>
              </section>

              {/* Technical Inspection */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "Step 3: Technical Inspection & Approval" : "चरण 3: तकनीकी निरीक्षण और स्वीकृति"}
                </h2>
                <p>
                  {isEn
                    ? "After application, DISCOM or MNRE-approved representatives will visit your site for technical verification, ensuring structural safety, load matching, and panel placement suitability."
                    : "आवेदन के बाद, डिस्कॉम या MNRE-स्वीकृत प्रतिनिधि तकनीकी सत्यापन के लिए आपके स्थान का निरीक्षण करेंगे, जिसमें संरचनात्मक सुरक्षा, लोड मिलान और पैनल प्लेसमेंट की उपयुक्तता सुनिश्चित की जाती है।"}
                </p>
              </section>

              {/* Installation */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "Step 4: Installation & Net Metering" : "चरण 4: स्थापना और नेट मीटरिंग"}
                </h2>
                <p>
                  {isEn
                    ? "Once approved, installation is carried out by our certified technicians using government-approved equipment. Post-installation, a net meter is installed to record energy generation and grid export."
                    : "अनुमोदन के बाद, हमारे प्रमाणित तकनीशियन सरकार-स्वीकृत उपकरणों के साथ स्थापना करते हैं। स्थापना के बाद, ऊर्जा उत्पादन और ग्रिड निर्यात रिकॉर्ड करने के लिए नेट मीटर लगाया जाता है।"}
                </p>
              </section>

              {/* Subsidy Transfer */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "Step 5: Subsidy Disbursement" : "चरण 5: सब्सिडी भुगतान"}
                </h2>
                <p>
                  {isEn
                    ? "After final inspection and system activation, the MNRE transfers the subsidy amount directly to your registered bank account — typically within 30–45 days of system commissioning."
                    : "अंतिम निरीक्षण और सिस्टम सक्रिय होने के बाद, MNRE 30–45 दिनों के भीतर सब्सिडी राशि सीधे आपके पंजीकृत बैंक खाते में स्थानांतरित कर देता है।"}
                </p>
              </section>

              {/* Quick Highlights */}
              <section className="space-y-3">
                <h2 className="text-2xl font-bold">
                  {isEn ? "Quick Highlights" : "मुख्य विशेषताएँ"}
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>{isEn ? "Up to ₹1,08,000 subsidy under PM Surya Ghar Yojana" : "पीएम सूर्य घर योजना के तहत ₹1,08,000 तक सब्सिडी"}</li>
                  <li>{isEn ? "Complete documentation and approval support" : "पूर्ण दस्तावेज़ और अनुमोदन सहायता"}</li>
                  <li>{isEn ? "End-to-end installation by certified local team" : "प्रमाणित स्थानीय टीम द्वारा संपूर्ण स्थापना"}</li>
                  <li>{isEn ? "Hassle-free process managed by Akshat Sales" : "अक्षत सेल्स द्वारा झंझट-मुक्त प्रक्रिया"}</li>
                </ul>
              </section>

              {/* CTA */}
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 mt-6">
                <p className="text-sm">
                  <strong>{isEn ? "We’ll handle the paperwork for you!" : "हम आपके लिए पूरा कागजी कार्य संभालेंगे!"}</strong>{" "}
                  {isEn
                    ? "Our team helps you register, submit documents, and get your subsidy approved — saving you time and effort."
                    : "हमारी टीम आपको पंजीकरण, दस्तावेज़ जमा करने और आपकी सब्सिडी स्वीकृत कराने में मदद करती है — जिससे आपका समय और मेहनत दोनों बचते हैं।"}
                </p>
                <Link href="/contact" className="text-primary font-semibold hover:underline inline-block mt-3">
                  {isEn ? "Get subsidy assistance" : "सब्सिडी सहायता प्राप्त करें"}
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
