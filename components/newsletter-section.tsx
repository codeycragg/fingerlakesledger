"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setIsSubmitted(true)
      setEmail("")

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to subscribe. Please try again.")
      setTimeout(() => setError(""), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="newsletter" className="py-20 px-4 bg-muted/30">
      <div className="container max-width mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-4 text-balance">Free Monthly Tax Tips</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            Get expert bookkeeping insights, tax preparation strategies, and financial management tips delivered
            straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="bg-primary/10 text-primary p-4 rounded-lg font-medium">
              Thanks for subscribing! Check your inbox for confirmation.
            </div>
          ) : error ? (
            <div className="bg-destructive/10 text-destructive p-4 rounded-lg font-medium mb-4">{error}</div>
          ) : null}

          {!isSubmitted && (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1"
                disabled={isLoading}
              />
              <Button type="submit" size="lg" className="sm:w-auto" disabled={isLoading}>
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
