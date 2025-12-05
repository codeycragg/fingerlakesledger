import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-primary text-primary-foreground py-24 md:py-32 lg:py-40 overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-sm">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            Serving the Finger Lakes Region
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-balance">
            Expert Bookkeeping for Your Business
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed max-w-2xl mx-auto text-pretty">
            Expert bookkeeping that keeps your business tax-ready and financially organized.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" variant="secondary" className="group">
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/30 hover:bg-primary-foreground/10 text-primary-foreground hover:text-primary-foreground"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
