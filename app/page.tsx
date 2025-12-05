import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { CertificationsSection } from "@/components/certifications-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CTASection />
      <CertificationsSection />
      <NewsletterSection />
    </main>
  )
}
