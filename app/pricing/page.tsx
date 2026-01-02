import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Transparent Pricing</h1>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Clear, straightforward pricing for professional bookkeeping services
          </p>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
