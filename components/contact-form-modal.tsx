"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    contactPreference: "email",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", phone: "", message: "", contactPreference: "email" })
      onClose()
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const isPhoneRequired = formData.contactPreference === "phone" || formData.contactPreference === "text"

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div
        className="bg-background border border-border rounded-lg shadow-lg max-w-md w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="font-serif text-2xl mb-2 text-foreground">Get in Touch</h3>
        <p className="text-sm text-muted-foreground mb-6">
          Fill out the form below and I'll get back to you within 24 hours.
        </p>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-serif text-xl mb-2">Thank You!</h4>
            <p className="text-muted-foreground text-sm">Your message has been received. I'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                Name *
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                Email *
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
                Phone Number {isPhoneRequired && "*"}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required={isPhoneRequired}
                value={formData.phone}
                onChange={handleChange}
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Contact Method *</label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="email"
                    checked={formData.contactPreference === "email"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="text-sm">Email</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="phone"
                    checked={formData.contactPreference === "phone"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="text-sm">Phone Call</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="contactPreference"
                    value="text"
                    checked={formData.contactPreference === "text"}
                    onChange={handleChange}
                    className="w-4 h-4 text-primary border-border focus:ring-primary"
                  />
                  <span className="text-sm">Text Message</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                Message *
              </label>
              <Textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your bookkeeping needs..."
                rows={4}
              />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        )}
      </div>
    </div>
  )
}
