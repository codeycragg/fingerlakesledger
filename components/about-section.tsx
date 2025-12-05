import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-center mb-16 text-foreground">
            Who We Are
          </h2>

          <Card className="overflow-hidden border-border/50 shadow-lg">
            <div className="grid md:grid-cols-5 gap-8 p-8 md:p-10">
              <div className="md:col-span-2 flex items-start justify-center">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden ring-4 ring-primary/10">
                  <Image
                    src="/codey-cragg-headshot.jpeg"
                    alt="Codey Cragg - Founder"
                    fill
                    className="object-cover scale-125"
                    style={{
                      objectPosition: "50% 35%",
                    }}
                    priority
                  />
                </div>
              </div>

              <div className="md:col-span-3 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-serif text-foreground">Codey Cragg</h3>
                  <p className="text-muted-foreground text-sm">Founder & Principal Bookkeeper</p>
                </div>

                <div className="h-px bg-border/50" />

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With years of experience in bookkeeping and financial management, I specialize in helping landlords
                    and small businesses stay organized, tax-ready, and compliant.
                  </p>

                  <p>
                    I work seamlessly within your QuickBooks Online account, providing hands-on bookkeeping, monthly
                    reconciliations, and financial insights that keep you prepared for tax time.
                  </p>

                  <p>
                    Based in the beautiful Finger Lakes region, I understand the unique needs of local businesses and am
                    dedicated to supporting our community's economic growth.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
