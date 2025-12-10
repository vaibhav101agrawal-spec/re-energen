"use client"

import { Card } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface Testimonial {
  author: string
  role: string
  content: string
  rating: number
  avatar?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
  title?: string
  description?: string
}

export function TestimonialsSection({
  testimonials,
  title = "What Our Customers Say",
  description,
}: TestimonialsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    checkScroll()
    window.addEventListener("resize", checkScroll)
    return () => window.removeEventListener("resize", checkScroll)
  }, [])

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-yellow-50 dark:bg-yellow-950/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 sm:mb-3 text-balance">
            {title}
          </h2>
          {description && <p className="text-sm sm:text-lg text-muted-foreground text-balance">{description}</p>}
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="overflow-x-auto pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 scroll-smooth"
          >
            <div className="flex gap-4 sm:gap-6 min-w-min">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className="flex-shrink-0 w-80 sm:w-96 p-4 sm:p-6 border border-border bg-card hover:shadow-lg transition flex flex-col"
                >
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6 flex-1 italic">
                    "{testimonial.content}"
                  </p>

                  <div className="border-t border-border pt-3 sm:pt-4">
                    <p className="font-bold text-sm sm:text-base text-foreground">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Scroll hints for mobile */}
          <div className="hidden sm:flex gap-2 mt-4 justify-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
