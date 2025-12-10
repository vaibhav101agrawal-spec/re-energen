// filename: components/faq-section.tsx
import React from "react"

export function FAQSection({ items = [], title = "Frequently Asked Questions" }: { items?: { q: string; a: string }[]; title?: string }) {
  const faqs = items.length ? items : [
    { q: "How much can I save with solar panels?", a: "Savings vary by usage and location — many homeowners see significant savings over 10–25 years." },
    { q: "Do solar panels require maintenance?", a: "Panels need minimal maintenance — occasional cleaning and a yearly check are usually enough." },
    { q: "Is there a warranty?", a: "Yes — most systems come with 10–30 year panel warranties and 1–5 year workmanship support." },
  ]

  return (
    <section className="mt-8">
      <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 text-center">{title}</h3>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="bg-background border border-border rounded-md p-3">
            <summary className="cursor-pointer list-none text-sm font-semibold">{f.q}</summary>
            <div className="mt-2 text-xs text-muted-foreground">{f.a}</div>
          </details>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
