"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl text-background mb-4">Finger Lakes Ledger</h3>
            <p className="text-background/70 leading-relaxed">
              Expert bookkeeping that keeps your business tax-ready and financially organized.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@fingerlakesledger.com"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contact@fingerlakesledger.com</span>
              </a>
              <a
                href="tel:+15853696208"
                className="flex items-center gap-3 text-background/70 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(585) 369-6208</span>
              </a>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5" />
                <span>Serving the Finger Lakes Region</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-background/70 hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="text-background/70 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-background/70 hover:text-accent transition-colors">
                  Blog & Resources
                </a>
              </li>
              <li>
                <a href="/contact" className="text-background/70 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            © {new Date().getFullYear()} Finger Lakes Ledger. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
