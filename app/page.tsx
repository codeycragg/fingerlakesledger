import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CertificationsSection } from "@/components/certifications-section"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <CTASection />
    </main>
  )
}
