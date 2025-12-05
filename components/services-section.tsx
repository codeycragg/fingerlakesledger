"use client"

import { CheckCircle2 } from "lucide-react"

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
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">Services & Pricing</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent, affordable bookkeeping services tailored to your business needs. Starting at $150/month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-lg">
            Need a custom solution?{" "}
            <span className="text-primary font-medium">Let's talk about your specific needs.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
