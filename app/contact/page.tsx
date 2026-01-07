import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactFormModal } from "@/components/contact-form-modal"
import { Phone, Mail, MapPin } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="bg-accent/30 text-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Let's Talk About Your Books</h1>
              <p className="text-lg md:text-xl text-muted-foreground text-pretty">
                Questions about bookkeeping or ready to get started? Reach out today.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info + FAQ Section */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:contact@fingerlakesledger.com" className="text-accent hover:underline">
                      contact@fingerlakesledger.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+15853696208" className="text-accent hover:underline">
                      (585) 369-6208
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Service Area</h3>
                    <p className="text-muted-foreground">Finger Lakes Region, New York</p>
                  </div>
                </div>

                <div className="pt-6">
                  <ContactFormModal />
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Do you work with clients outside the Finger Lakes?</AccordionTrigger>
                  <AccordionContent>
                    Yes! While I'm based in the Finger Lakes region, I offer virtual bookkeeping services to clients
                    throughout New York and beyond. We can work together remotely using secure cloud-based tools.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>What's your typical turnaround time?</AccordionTrigger>
                  <AccordionContent>
                    For monthly bookkeeping, I typically deliver reports within 5-7 business days after receiving all
                    necessary documents. Tax preparation timing varies based on complexity, but I always work to meet
                    your deadlines.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>What accounting software do you use?</AccordionTrigger>
                  <AccordionContent>
                    I use Intuit's ProAdvisor program, which is built around QuickBooks Online Accountant. This allows
                    seamless remote access to client books and works exclusively with QuickBooks Online. I can help you
                    with complete setup, configuration, and ongoing support to get everything running smoothly.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                  <AccordionTrigger>How do you handle sensitive financial information?</AccordionTrigger>
                  <AccordionContent>
                    All documents are shared through secure, encrypted platforms. I follow strict confidentiality
                    protocols and am happy to sign an NDA if required.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                  <AccordionTrigger>What if I'm behind on my books?</AccordionTrigger>
                  <AccordionContent>
                    No problem! Catch-up bookkeeping is one of my specialties. I'll work with you to get everything
                    organized and up-to-date, then we can establish an ongoing system to keep you current.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        {/* What Happens Next CTA */}
        <div className="bg-muted py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-4">What Happens Next?</h2>
              <p className="text-center text-muted-foreground mb-12">Getting started is simple and straightforward</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Schedule a Call</h3>
                  <p className="text-muted-foreground">Book a free consultation at a time that works for you</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Discuss Your Needs</h3>
                  <p className="text-muted-foreground">We'll talk about your business and bookkeeping goals</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Get Started</h3>
                  <p className="text-muted-foreground">Receive a custom quote and start working together</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
