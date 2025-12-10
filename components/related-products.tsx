// components/related-products.tsx
"use client"
import React from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"

type Product = {
  id: string
  name: string
  price?: string
  images?: string[]
}

export function RelatedProducts({ products = [] }: { products?: Product[] }) {
  if (!products || products.length === 0) return null

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Related products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {products.slice(0, 3).map((p) => (
          <Link key={p.id} href={`/products/${p.id}`} className="group">
            <Card className="h-full overflow-hidden hover:shadow-lg transition">
              <div className="h-36 w-full bg-gray-100 overflow-hidden flex items-center justify-center">
                {p.images && p.images[0] ? (
                  <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-sm text-muted-foreground">No image</div>
                )}
              </div>
              <div className="p-3">
                <div className="font-semibold text-foreground">{p.name}</div>
                {p.price && <div className="text-sm text-accent mt-1">{p.price}</div>}
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
