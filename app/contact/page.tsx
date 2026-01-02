import { Header } from "@/components/header"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Get In Touch</h1>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ready to streamline your bookkeeping? Let's talk about how we can help your business thrive.
          </p>
        </div>
        <CTASection />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto">
            <div className="space-y-6 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:contact@fingerlakesledgers.com" className="text-primary hover:underline">
                  contact@fingerlakesledgers.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:+15551234567" className="text-primary hover:underline">
                  (555) 123-4567
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Service Area</h3>
                <p className="text-muted-foreground">Finger Lakes Region, New York</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
