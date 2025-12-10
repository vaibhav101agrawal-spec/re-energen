// filename: app/products/[id]/page.tsx
"use client"
import Link from "next/link"
import Image from "next/image"
import { Phone } from "lucide-react"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/lib/language-context"
import { getProductById } from "@/lib/products"
import { Header } from "@/components/header"

type Props = {
  params: { id: string }
}

export default function ProductPage({ params }: Props) {
  const { language } = useLanguage()
  const isEn = language === "en"

  const productId = params?.id ?? ""
  const product = getProductById(productId)

  const SITE_TITLE = isEn ? "Re-Energen" : "अक्षत सेल्स"
  const PHONE = "+91-9201962695"
  const WHATSAPP = "https://wa.me/919201962695"

  if (!product) {
    return (
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Sticky header */}
        <Header />

        <section className="py-12">
          <div className="max-w-3xl mx-auto px-4">
            <h1 className="text-2xl font-bold">{isEn ? "Product not found" : "उत्पाद मौजूद नहीं है"}</h1>
            <p className="mt-3 text-muted-foreground">
              {isEn
                ? "We couldn't find this product. Try browsing other products or contact us for details."
                : "हम यह उत्पाद नहीं ढूँढ पाए। कृपया अन्य उत्पाद देखें या विवरण के लिए हमसे संपर्क करें।"}
            </p>

            <div className="mt-6 flex gap-3">
              <Link href="/products">
                <Button>{isEn ? "Back to products" : "उत्पादों पर वापस जाएँ"}</Button>
              </Link>

              <a href={`tel:${PHONE}`}>
                <Button variant="outline">{isEn ? "Call us" : "हमें कॉल करें"}</Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    )
  }

  const title = product.name ?? (isEn ? "Product" : "उत्पाद")
  const image = product.image ?? "/placeholder.svg"
  const price = product.price ?? ""
  const short = product.short ?? product.description ?? (isEn ? "No description provided." : "विवरण उपलब्ध नहीं है।")

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Sticky header */}
      <nav className="sticky top-0 z-60 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt={SITE_TITLE}
                width={180}
                height={40}
                quality={85}
                priority
                className="h-8 sm:h-10 w-auto object-contain"
                style={{ maxWidth: 180 }}
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={`tel:${PHONE}`}
              className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> {PHONE}
            </a>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {isEn ? "WhatsApp" : "WhatsApp"}
            </a>

            <LanguageSwitcher />
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button aria-label="Toggle menu" className="p-2 hover:bg-muted rounded-lg transition">
              ☰
            </button>
          </div>
        </div>
      </nav>

      <section className="py-8 sm:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={380}
              quality={85}
              loading="lazy"
              className="w-full h-[300px] sm:h-[380px] object-cover"
            />
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div className="sm:pr-6">
              <h1 className="text-2xl sm:text-3xl font-extrabold leading-tight">{title}</h1>
              <p className="mt-2 text-sm text-muted-foreground">{short}</p>
            </div>

            <div className="flex-shrink-0">
              {price ? (
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{isEn ? "From" : "से"}</div>
                  <div className="text-lg sm:text-xl font-bold text-accent mt-1">{price}</div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            <Card className="p-4">
              <h2 className="font-semibold text-lg mb-2">{isEn ? "Overview" : "परिचय"}</h2>
              <p className="text-sm text-muted-foreground">{short}</p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a href={`tel:${PHONE}`} className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto flex items-center gap-2 justify-center">
                    <Phone className="w-4 h-4" /> {isEn ? "Call to discuss" : "चर्चा के लिए कॉल करें"}
                  </Button>
                </a>

                <button
                  className="w-full sm:w-auto"
                  onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
                >
                  <Button variant="outline" className="w-full sm:w-auto justify-center bg-transparent">
                    {isEn ? "Request Site Visit" : "साइट विज़िट का अनुरोध"}
                  </Button>
                </button>

                <a href={WHATSAPP} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                  <Button variant="ghost" className="w-full sm:w-auto justify-center">
                    {isEn ? "Chat on WhatsApp" : "WhatsApp पर चैट"}
                  </Button>
                </a>
              </div>
            </Card>
          </div>

          <div className="mt-6 space-y-4">
            <Card className="p-4">
              <h3 className="font-semibold mb-2">{isEn ? "Specifications" : "विनिर्देश"}</h3>
              <p className="text-sm text-muted-foreground">
                {isEn
                  ? "Add spec list here. Keep lines short for mobile."
                  : "यहाँ विनिर्देश जोड़ें। मोबाइल के लिए पंक्तियाँ कम रखें।"}
              </p>
            </Card>

            <Card className="p-4">
              <h3 className="font-semibold mb-2">{isEn ? "What's included" : "शामिल चीज़ें"}</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>{isEn ? "Panels" : "पैनल"}</li>
                <li>{isEn ? "Inverter" : "इन्वर्टर"}</li>
                <li>{isEn ? "Mounting structure" : "माउंटिंग स्ट्रक्चर"}</li>
                <li>{isEn ? "Warranty & installation" : "वारंटी और इंस्टॉलेशन"}</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
