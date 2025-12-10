// filename: lib/products.ts
export type Product = {
  id: string
  slug?: string
  name: string
  price?: string
  description?: string
  short?: string
  image?: string
  images?: string[]
}

export function getAllProducts(): Product[] {
  // Keep this list in sync with homepage products (and update later
  // when you finalise categories/prices). Minimal fields only.
  return [
    {
      id: "residential",
      slug: "residential",
      name: "Residential Solar",
      price: "Custom Quote",
      short: "Perfect for homes",
      description:
        "Residential solar systems optimized for roofs and household usage. Includes panels, inverter, mounting, and installation support.",
      image: "/residential-solar-panel-system-for-home.jpg",
      images: ["/residential-solar-panel-system-for-home.jpg"],
    },
    {
      id: "commercial",
      slug: "commercial",
      name: "Commercial Solar",
      price: "Custom Quote",
      short: "For businesses",
      description:
        "Commercial PV systems designed for factories, shops and office rooftops. Scalable solutions with monitoring and maintenance packages.",
      image: "/commercial-solar-panels-on-business-building.jpg",
      images: ["/commercial-solar-panels-on-business-building.jpg"],
    },
    {
      id: "battery-storage",
      slug: "battery-storage",
      name: "Solar + Battery",
      price: "Custom Quote",
      short: "With storage backup",
      description:
        "Battery-backed systems that provide backup power and enable self-consumption and grid-forming operation where required.",
      image: "/home-battery-storage-system-with-solar.jpg",
      images: ["/home-battery-storage-system-with-solar.jpg"],
    },
  ]
}

export function getProductById(id?: string) {
  if (!id) return null
  const lower = id.toString().toLowerCase()
  return getAllProducts().find(
    (p) =>
      (p.id && p.id.toString().toLowerCase() === lower) ||
      (p.slug && p.slug.toString().toLowerCase() === lower)
  ) ?? null
}
