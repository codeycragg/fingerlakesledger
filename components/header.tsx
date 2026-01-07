"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { ContactFormModal } from "@/components/contact-form-modal"

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setMobileDropdownOpen(null)
  }

  const toggleMobileDropdown = (menu: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === menu ? null : menu)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2" onClick={() => setMobileMenuOpen(false)}>
          <span className="text-xl font-serif font-bold text-primary">Finger Lakes Ledger</span>
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
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors"
          >
            Schedule a Call
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2" onClick={toggleMobileMenu} aria-label="Toggle menu">
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            <Link
              href="/"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("about")}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                About Us
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${mobileDropdownOpen === "about" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileDropdownOpen === "about" && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/about#about"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link
                    href="/about#certifications"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Certifications
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              >
                Services
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform ${mobileDropdownOpen === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileDropdownOpen === "services" && (
                <div className="pl-4 mt-1 space-y-1">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Monthly Bookkeeping
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Rental Property Management
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Tax Preparation Support
                  </Link>
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground rounded-md transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Catch-Up Services
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog & Resources
            </Link>

            <Link
              href="/contact"
              className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-accent rounded-md transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                setIsModalOpen(true)
                setMobileMenuOpen(false)
              }}
              className="block w-full mt-4 px-6 py-3 bg-primary text-primary-foreground font-medium text-sm rounded-md hover:bg-primary/90 transition-colors text-center"
            >
              Schedule a Call
            </button>
          </nav>
        </div>
      )}

      <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  )
}
