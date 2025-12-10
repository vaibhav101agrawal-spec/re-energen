// filename: components/contact-form.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    if (!phone && !email) {
      setError("Please provide a phone number or email so we can contact you.")
      return
    }

    setSending(true)
    try {
      const payload = {
        name: name || "Website contact",
        phone,
        email,
        message,
        source: "contact-page",
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Failed to send request")

      setSuccess("Thanks. Your message was sent. We will contact you soon.")
      setName("")
      setPhone("")
      setEmail("")
      setMessage("")

      // hide after a short while
      setTimeout(() => setSuccess(null), 4500)
    } catch (err) {
      console.error(err)
      setError("Something went wrong. Please try again or call us.")
    } finally {
      setSending(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white border border-border rounded-lg p-5 space-y-4 max-w-md mx-auto"
      aria-label="Contact form"
    >
      <div>
        <label className="sr-only" htmlFor="contact-name">Your name (optional)</label>
        <input
          id="contact-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name (optional)"
          className="w-full px-4 py-3 border border-border rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="contact-phone">Phone number</label>
        <input
          id="contact-phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone number"
          inputMode="tel"
          className="w-full px-4 py-3 border border-border rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          required={false}
          aria-required="false"
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="contact-email">Email address</label>
        <input
          id="contact-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          type="email"
          className="w-full px-4 py-3 border border-border rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      <div>
        <label className="sr-only" htmlFor="contact-message">Message (optional)</label>
        <textarea
          id="contact-message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message (optional)"
          rows={4}
          className="w-full px-4 py-3 border border-border rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
        />
      </div>

      {error && <div role="alert" className="text-sm text-destructive">{error}</div>}
      {success && <div role="status" className="text-sm text-green-600">{success}</div>}

      <div className="pt-2">
        <Button
          type="submit"
          className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 py-3"
          disabled={sending}
        >
          {sending ? "Sending..." : "Send Message"}
        </Button>
      </div>

      <div className="text-xs text-muted-foreground pt-2">
        By contacting us you agree to be reached by phone or email for this inquiry.
      </div>
    </form>
  )
}
