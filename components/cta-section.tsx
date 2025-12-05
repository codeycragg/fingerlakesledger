"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"
import { ContactFormModal } from "./contact-form-modal"

export function CTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="py-20 md:py-28 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground text-balance">
                Ready to Streamline Your Finances?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
                Let's discuss how professional bookkeeping services can help your business grow. Schedule a free
                consultation today.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="group" onClick={() => setIsModalOpen(true)}>
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
              <Button size="lg" variant="outline" className="group bg-transparent" onClick={() => setIsModalOpen(true)}>
                <Phone className="mr-2 h-5 w-5" />
                Schedule a Call
              </Button>
            </div>

            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground">
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
