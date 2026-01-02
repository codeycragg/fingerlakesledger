"use client"

import { CheckCircle2, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesSection() {
  const services = [
    {
      title: "Monthly Bookkeeping",
      description: "Full-service bookkeeping with monthly reconciliations, categorization, and financial reports.",
      features: [
        "Bank & credit card reconciliation",
        "Transaction categorization",
        "Monthly financial statements",
        "QuickBooks Online management",
      ],
      pricing: "Starting at $150/month",
      featured: false,
    },
    {
      title: "Rental Property Bookkeeping",
      description: "Specialized bookkeeping for landlords with multiple properties and complex income streams.",
      features: [
        "Property-by-property tracking",
        "Rental income management",
        "Expense categorization for tax deductions",
        "Year-end reports for accountants",
      ],
      pricing: "Starting at $200/month",
      featured: true,
    },
    {
      title: "Tax Preparation Support",
      description: "Year-round bookkeeping that keeps you organized and ready for tax season.",
      features: [
        "Tax-ready financial records",
        "Quarterly reports for estimated taxes",
        "Collaboration with your CPA",
        "Maximize deduction tracking",
      ],
      pricing: "Starting at $175/month",
      featured: false,
    },
    {
      title: "Catch-Up Bookkeeping",
      description: "Behind on your books? I can help get you caught up and back on track.",
      features: [
        "Historical transaction cleanup",
        "Multi-month reconciliation",
        "Financial record reconstruction",
        "Get current quickly",
      ],
      pricing: "Custom pricing",
      featured: false,
    },
  ]

  return (
    <section id="services" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Choose the Service That Fits Your Needs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Flexible, transparent pricing with no hidden fees. All services include direct QuickBooks Online access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative bg-card border rounded-xl p-8 transition-all hover:shadow-xl ${
                service.featured
                  ? "border-primary ring-2 ring-primary/20 lg:scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>

              <div className="flex items-baseline gap-2 mb-6 pb-6 border-b border-border">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-2xl font-bold text-foreground">{service.pricing}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={service.featured ? "default" : "outline"}
                className="w-full"
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-muted/50 border border-border rounded-xl p-8 md:p-12 text-center">
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">Need Something Different?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Every business is unique. Let's build a custom bookkeeping solution that fits your specific needs and
            budget.
          </p>
          <Button size="lg" onClick={() => (window.location.href = "/contact")}>
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
