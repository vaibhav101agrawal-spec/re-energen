// components/product-gallery.tsx
"use client"
import React from "react"

type Props = {
  images?: string[]
  alt?: string
}

export function ProductGallery({ images = [], alt = "Product image" }: Props) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full h-64 bg-gray-100 border border-border rounded-md flex items-center justify-center">
        <div className="text-sm text-muted-foreground">Image coming soon</div>
      </div>
    )
  }

  return (
    <div>
      {/* main image */}
      <div className="w-full rounded-md overflow-hidden border border-border">
        <img
          src={images[0]}
          alt={alt}
          className="w-full h-64 md:h-96 object-cover"
          loading="eager"
        />
      </div>

      {/* thumbnails (scrollable) */}
      {images.length > 1 && (
        <div className="mt-3 flex gap-3 overflow-x-auto pb-2 -mx-2 px-2">
          {images.map((src, idx) => (
            <div key={idx} className="w-28 h-20 flex-shrink-0 rounded-md overflow-hidden border border-border">
              <img src={src} alt={`${alt} ${idx + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
