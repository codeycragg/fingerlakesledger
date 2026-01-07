"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { ContactFormModal } from "./contact-form-modal"

export function CTASection({
  headline = "Take Bookkeeping Off Your Plate",
  description = "Get back to growing your business while I handle the numbers with accuracy and care. Schedule your free consultation today.",
}: {
  headline?: string
  description?: string
} = {}) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="contact" className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance px-4 md:px-0">
                {headline}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty px-4 md:px-0">
                {description}
              </p>
            </div>

            <div className="flex justify-center pt-4 px-4 md:px-0">
              <Button size="lg" className="group min-h-[48px] text-base" onClick={() => setIsModalOpen(true)}>
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground px-4 md:px-0">
                Serving businesses throughout the Finger Lakes region with integrity and expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
