"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 border-t border-border/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl text-background mb-4">Finger Lakes Ledger</h3>
            <p className="text-background/70 leading-relaxed">
              Expert bookkeeping that keeps your business tax-ready and financially organized.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-medium text-background mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@fingerlakesledger.com"
                className="flex items-center justify-center md:justify-start gap-3 text-background/70 hover:text-accent transition-colors min-h-[44px]"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="break-all">contact@fingerlakesledger.com</span>
              </a>
              <a
                href="tel:+15853696208"
                className="flex items-center justify-center md:justify-start gap-3 text-background/70 hover:text-accent transition-colors min-h-[44px]"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span>(585) 369-6208</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-3 text-background/70 min-h-[44px]">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span>Serving the Finger Lakes Region</span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-medium text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="block py-2 text-background/70 hover:text-accent transition-colors min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 text-background/70 hover:text-accent transition-colors min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block py-2 text-background/70 hover:text-accent transition-colors min-h-[44px] flex items-center justify-center md:justify-start"
                >
                  Blog & Resources
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 text-background/70 hover:text-accent transition-colors min-h-[44px] flex items-center justify-center md:justify-start"
                >
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
