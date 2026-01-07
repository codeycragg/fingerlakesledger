"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"
import { useState } from "react"

export function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <section className="relative text-white py-24 md:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/finger-lakes-landscape.webp"
          alt="Finger Lakes landscape"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            Serving the Finger Lakes Region
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-balance px-4 md:px-0">
            Finger Lakes Ledger
          </h1>

          <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto text-pretty px-4 md:px-0">
            Expert bookkeeping that keeps your business tax-ready and financially organized.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 px-4 md:px-0">
            <Button
              size="lg"
              variant="secondary"
              className="group min-h-[48px] text-base"
              onClick={() => setIsContactOpen(true)}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      <ContactFormModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </section>
  )
}
