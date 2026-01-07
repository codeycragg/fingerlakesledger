import { Header } from "@/components/header"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Schedule a Call</h3>
                  <p className="text-muted-foreground">Book a free consultation at a time that works for you</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Discuss Your Needs</h3>
                  <p className="text-muted-foreground">We'll talk about your business and bookkeeping goals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Get Started</h3>
                  <p className="text-muted-foreground">Receive a custom quote and start working together</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CTASection
          headline="Connect Today"
          description="Whether it's a quick question or setting up services, we'd love to help. Schedule a free call or send an email."
        />

        <div className="container mx-auto px-4 py-16">
          <div className="max-w-xl mx-auto">
            <div className="space-y-6 text-center">
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <a href="mailto:contact@fingerlakesledger.com" className="text-primary hover:underline">
                  contact@fingerlakesledger.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:+15853696208" className="text-primary hover:underline">
                  (585) 369-6208
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
