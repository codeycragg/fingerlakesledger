import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      name: "Intuit QuickBooks",
      description: "Certified QuickBooks ProAdvisor",
      logo: "/intuit-quickbooks-logo.jpg",
    },
    {
      name: "Microsoft Excel",
      description: "Advanced Excel Specialist",
      logo: "/microsoft-excel-logo.jpg",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <CheckCircle2 className="h-4 w-4" />
              Certified & Trusted
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-normal text-foreground mb-4">
              Professional Certifications
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Backed by industry-leading certifications to ensure the highest quality service
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert) => (
              <Card key={cert.name} className="p-8 hover:shadow-lg transition-shadow duration-300 border-border/50">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative w-full h-20 flex items-center justify-center">
                    <img
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.name} certification`}
                      className="max-h-16 w-auto object-contain filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-foreground">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
