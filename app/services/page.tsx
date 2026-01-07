import { Header } from "@/components/header"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="bg-gradient-to-b from-muted/30 to-background py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Bookkeeping Services Built for Your Business
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From monthly maintenance to rental property management, I provide the financial clarity you need to make
              confident business decisions.
            </p>
          </div>
        </div>
        <ServicesSection />
      </main>
      <Footer />
    </>
  )
}
