"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("[v0] Newsletter signup:", { email })

    setIsSubmitted(true)
    setEmail("")

    setTimeout(() => setIsSubmitted(false), 3000)
  }

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container max-width mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-balance">Free Monthly Tax Tips for Landlords</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Get expert bookkeeping insights, tax preparation strategies, and financial management tips delivered
            straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-primary/10 text-primary p-4 rounded-lg font-medium">
              Thanks for subscribing! Check your inbox for confirmation.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
              />
              <Button type="submit" size="lg" className="sm:w-auto">
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
