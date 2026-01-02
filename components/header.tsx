"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (menu: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenDropdown(menu)
  }

  const handleMouseLeave = () => {
    closeTimerRef.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 200)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-serif font-bold text-primary">Finger Lakes Ledgers</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* Home */}
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Home
          </Link>

          {/* About Us Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter("about")} onMouseLeave={handleMouseLeave}>
            <Link
              href="/about"
              className="flex items-center px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              About Us
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {openDropdown === "about" && (
              <div className="absolute left-0 top-full mt-1 w-48 bg-background border rounded-md shadow-lg">
                <Link
                  href="/about#about"
                  className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/about#certifications"
                  className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Certifications
                </Link>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative" onMouseEnter={() => handleMouseEnter("services")} onMouseLeave={handleMouseLeave}>
            <Link
              href="/services"
              className="flex items-center px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </Link>
            {openDropdown === "services" && (
              <div className="absolute left-0 top-full mt-1 w-56 bg-background border rounded-md shadow-lg">
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Monthly Bookkeeping
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Rental Property Management
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Tax Preparation Support
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-sm text-foreground/80 hover:bg-accent hover:text-foreground transition-colors"
                >
                  Catch-Up Services
                </Link>
              </div>
            )}
          </div>

          {/* Pricing */}
          <Link
            href="/pricing"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Pricing
          </Link>

          {/* Blog & Resources */}
          <Link
            href="/blog"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Blog & Resources
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="px-6 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
