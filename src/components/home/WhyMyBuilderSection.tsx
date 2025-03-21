"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function WhyMyBuilderSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why MyBuilder is the reliable way
        </h2>
        <p className="text-base mb-12 max-w-3xl">
          Hiring a tradesperson when you need one isn't always easy. MyBuilder is the reliable way, helping you hire the right tradesperson for your job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-mb-purple">The tradespeople you need</h3>
            <p className="text-base">
              Post your job for free to access tradespeople with the skills you need and get responses from those who want to do it. You choose who you want to chat with.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-mb-purple">Genuine customer reviews</h3>
            <p className="text-base">
              Thanks to our robust feedback system, you can read genuine reviews from previous customers, allowing you to make an informed choice about who to hire.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-mb-purple">You're in control</h3>
            <p className="text-base">
              Review profiles, work history and feedback before making a decision about who to chat with. Only tradespeople you have chosen can contact you.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Ready to hire a tradesperson?</h3>
          <Button
            asChild
            className="bg-mb-purple hover:bg-mb-purple/90"
          >
            <Link href="/post-a-job">
              Post your job
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
