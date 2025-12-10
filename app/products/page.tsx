// filename: app/products/page.tsx
"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { getAllProducts } from "@/lib/products"
import { useLanguage } from "@/lib/language-context"
import { Footer } from "@/components/footer"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Phone } from "lucide-react"
import { Header } from "@/components/header"


export default function ProductsPage() {
  const { language } = useLanguage()
  const isEn = language === "en"

  const PHONE_1 = "+91-9201962695"
  const WHATSAPP = "https://wa.me/919201962695"

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [search, setSearch] = useState("")
  const products = getAllProducts() || []

  const filteredProducts = products.filter((p) => {
    // defensive: support name, title or short fields
    const searchable =
      (p.name ?? p.shortDescription ?? "").toString().toLowerCase()
    return searchable.includes((search ?? "").toLowerCase())
  })

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Sticky header - same structure as homepage */}
      <Header />

      {/* PAGE HEADER */}
      <section className="bg-muted border-b border-border py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Responsive header:
              - mobile: vertical stack (title, search, actions)
              - md+: single row with title left, controls right
          */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">{isEn ? "Our Products" : "हमारे उत्पाद"}</h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
              {/* Search - expand on mobile, compact on desktop */}
              <div className="flex-1 sm:flex-none">
                <label htmlFor="product-search" className="sr-only">
                  {isEn ? "Search products" : "उत्पाद खोजें"}
                </label>
                <input
                  id="product-search"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={isEn ? "Search products..." : "उत्पाद खोजें..."}
                  className="w-full px-3 py-2 border border-border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-primary bg-background"
                />
              </div>

              {/* Actions - keep button compact on larger screens, full width on mobile */}
              <div className="flex gap-2 items-center">
                <Link href="/">
                  <Button variant="outline" className="w-full sm:w-auto whitespace-nowrap" size="sm">
                    {isEn ? "Back to Home" : "होम पर जाएँ"}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="flex-1 py-10 sm:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center text-center py-20">
              <h2 className="text-lg font-semibold mb-2">
                {isEn ? "No products found" : "कोई उत्पाद नहीं मिला"}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {isEn ? "Try searching with a different keyword." : "कृपया अलग शब्द से खोजें।"}
              </p>
              <Link href="/">
                <Button>{isEn ? "Go Home" : "होम पर जाएँ"}</Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
