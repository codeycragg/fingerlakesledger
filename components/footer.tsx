"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-accent py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl text-foreground mb-4">Finger Lakes Ledgers</h3>
            <p className="text-muted-foreground leading-relaxed">
              Expert bookkeeping that keeps your business tax-ready and financially organized.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:codey@fingerlakesledgers.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>codey@fingerlakesledgers.com</span>
              </a>
              <a
                href="tel:+15551234567"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(555) 123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Serving the Finger Lakes Region</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#newsletter" className="text-muted-foreground hover:text-primary transition-colors">
                  Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Finger Lakes Ledgers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
