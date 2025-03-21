"use client"

import React from "react"

export function StatsSection() {
  return (
    <section className="bg-mb-light-gray py-8">
      <div className="container-custom">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-mb-purple">237,293</h2>
            <p className="text-sm md:text-base font-medium">tradespeople</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-mb-purple">40+</h2>
            <p className="text-sm md:text-base font-medium">trade categories</p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-mb-purple">2,535,916</h2>
            <p className="text-sm md:text-base font-medium">reviews</p>
          </div>
        </div>
      </div>
    </section>
  )
}
