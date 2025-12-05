import { Card } from "@/components/ui/card"
import { CheckCircle2, Clock } from "lucide-react"

export function CertificationsSection() {
  const certifications = [
    {
      name: "Intuit Certified Bookkeeping Professional",
      description: "Certified QuickBooks Bookkeeper",
      logo: "/intuit-certified-bookkeeping-professional.png",
      completed: true,
      credlyUrl: "https://www.credly.com/badges/5b06e284-5f4d-4474-a398-400810e32e28/public_url",
    },
    {
      name: "QuickBooks ProAdvisor",
      description: "Advanced QuickBooks Certification",
      logo: "/quickbooks-proadvisor-badge.jpg",
      completed: false,
      credlyUrl: undefined, // In progress, no link yet
    },
    {
      name: "QuickBooks Certified User Online",
      description: "QuickBooks Online Platform Certified",
      logo: "/quickbooks-certified-user-online.png",
      completed: true,
      credlyUrl: "https://www.credly.com/badges/5b06e284-5f4d-4474-a398-400810e32e28/public_url",
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
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

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => {
              const content = (
                <Card
                  key={cert.name}
                  className={`p-8 transition-shadow duration-300 border-border/50 relative ${
                    cert.credlyUrl ? "hover:shadow-lg cursor-pointer" : ""
                  }`}
                >
                  {!cert.completed && (
                    <div className="absolute top-3 right-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-500/10 text-amber-700 text-xs font-medium">
                      <Clock className="h-3 w-3" />
                      In Progress
                    </div>
                  )}
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative w-full h-20 flex items-center justify-center">
                      <img
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.name} certification`}
                        className={`max-h-16 w-auto object-contain transition-all duration-300 ${
                          cert.completed
                            ? "opacity-100"
                            : "filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>
                </Card>
              )

              return cert.credlyUrl ? (
                <a key={cert.name} href={cert.credlyUrl} target="_blank" rel="noopener noreferrer" className="block">
                  {content}
                </a>
              ) : (
                content
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
