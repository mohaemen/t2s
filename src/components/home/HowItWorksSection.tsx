"use client"

import React from "react"
import Link from "next/link"

export function HowItWorksSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          How to hire the right tradesperson
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-mb-light-gray p-6 rounded-lg text-center">
            <div className="mb-4">
              <img
                src="https://ext.same-assets.com/4131608513/2648975043.svg"
                alt="Post your job"
                className="h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">STEP 1</h3>
            <p className="text-xl font-semibold text-mb-purple">Post your job for free</p>
          </div>

          <div className="bg-mb-light-gray p-6 rounded-lg text-center">
            <div className="mb-4">
              <img
                src="https://ext.same-assets.com/4131608513/360011931.svg"
                alt="Tradespeople respond"
                className="h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">STEP 2</h3>
            <p className="text-xl font-semibold text-mb-purple">Tradespeople respond</p>
          </div>

          <div className="bg-mb-light-gray p-6 rounded-lg text-center">
            <div className="mb-4">
              <img
                src="https://ext.same-assets.com/4131608513/2326847135.svg"
                alt="Review profiles and choose"
                className="h-16 mx-auto"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">STEP 3</h3>
            <p className="text-xl font-semibold text-mb-purple">Review profiles and choose</p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/how-it-works"
            className="text-mb-purple hover:underline font-semibold inline-flex items-center"
          >
            See how it works
          </Link>
        </div>
      </div>
    </section>
  )
}
