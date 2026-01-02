import { Header } from "@/components/header"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4">Blog & Resources</h1>
          <p className="text-lg text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tax tips, bookkeeping insights, and financial resources for landlords and small businesses
          </p>
        </div>
        <NewsletterSection />

        <div className="container mx-auto px-4 py-16">
          <div className="text-center text-muted-foreground">
            <p className="text-lg mb-4">Blog posts coming soon!</p>
            <p>Subscribe to our newsletter to get notified when we publish new content.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
