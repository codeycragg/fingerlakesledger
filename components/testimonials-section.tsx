"use client"

import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah",
      business: "Owner, 4 Rental Properties",
      quote:
        "Codey transformed my rental property bookkeeping from chaos to clarity. Tax season is now stress-free, and I actually understand my financials.",
      rating: 5,
    },
    {
      name: "James",
      business: "Small Business Owner",
      quote:
        "Codey is thorough and professional. The quality of work is excellent, and they saved me thousands in fees. Would definitely recommend.",
      rating: 4.5,
    },
    {
      name: "Emily",
      business: "Freelance Consultant",
      quote:
        "Professional, responsive, and incredibly detail-oriented. Codey caught errors my previous bookkeeper missed and saved me money on my taxes.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 px-4 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by landlords and small businesses across the Finger Lakes region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => {
                  const isFilled = i < Math.floor(testimonial.rating)
                  const isHalf = i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0
                  return (
                    <div key={i} className="relative">
                      {isHalf ? (
                        <>
                          <Star className="w-5 h-5 text-primary" />
                          <Star
                            className="w-5 h-5 fill-primary text-primary absolute top-0 left-0"
                            style={{ clipPath: "inset(0 50% 0 0)" }}
                          />
                        </>
                      ) : (
                        <Star className={`w-5 h-5 ${isFilled ? "fill-primary" : ""} text-primary`} />
                      )}
                    </div>
                  )
                })}
              </div>
              <p className="text-foreground text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>
              <div className="border-t border-border pt-4">
                <p className="font-medium text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.business}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
