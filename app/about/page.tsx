import { Header } from "@/components/header"
import { AboutSection } from "@/components/about-section"
import { CertificationsSection } from "@/components/certifications-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-12">About Finger Lakes Ledger</h1>
        </div>
        <AboutSection />
        <CertificationsSection />
      </main>
      <Footer />
    </>
  )
}
