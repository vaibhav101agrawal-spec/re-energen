// filename: components/footer.tsx
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    // predictable padding instead of CSS-var; keeps footer tight and avoids big blank band
    <footer className="bg-muted border-t border-border relative pb-6">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Company Info */}
          <div className="space-y-3 sm:space-y-4 order-2 sm:order-1">
            <div className="flex items-center gap-2">
              <div className="w-12 h-6 sm:w-8 sm:h-8 bg-primary rounded flex items-center justify-center text-xs text-primary-foreground font-bold">
                AS | RR
              </div>
              <span className="text-base sm:text-lg font-bold text-foreground">Akshat Sales | RR Unitrade</span>
            </div>
            
            <div className="flex gap-3 sm:gap-4 pt-2 sm:pt-4">
              <a href="https://instagram.com/re_energen" className="text-muted-foreground hover:text-primary transition" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.948.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
                </svg>
              </a>

              <a href="tel:+91-9201962695" className="text-muted-foreground hover:text-primary transition" aria-label="Phone">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>

              <a href="mailto:info@re-energen.com" className="text-muted-foreground hover:text-primary transition" aria-label="Email">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Combined Quick Links & Resources */}
          <div className="space-y-3 sm:space-y-4 order-3 sm:order-2">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-primary transition">Products</Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3 sm:space-y-4 order-4 sm:order-3">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">Resources</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition">Solar Guide</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition">Savings Calculator</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition">Blog</Link></li>
              <li><Link href="/resources" className="text-muted-foreground hover:text-primary transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 sm:space-y-4 order-1 sm:order-4">
            <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground">Contact</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="tel:+91 9201962695" className="hover:text-primary transition">+91 9201962695</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0 text-primary" />
                <a href="mailto:info@re-energen.com" className="hover:text-primary transition">info@re-energen.com</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                <span>5th Floor, Currency Tower, V.I.P. Road, Raipur 492001</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-background relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
          <p>&copy; 2025 Re-Energen. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
