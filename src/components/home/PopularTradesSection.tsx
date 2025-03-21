"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PopularTradesSection() {
  return (
    <section className="py-12 md:py-16 bg-mb-light-gray">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Popular trades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Roofing</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you interested in price information about a job in this service/category? To give you an id
              <Link href="#" className="text-mb-purple hover:underline ml-1">
                Learn more
              </Link>
            </p>

            <div className="border-t pt-3 text-sm">
              <strong>15966 roofers</strong>
              <p className="text-gray-600">in The UK</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-4 w-full border-mb-purple text-mb-purple hover:bg-mb-purple hover:text-white"
            >
              <Link href="#">
                View all
              </Link>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Bathroom Fitting</h3>
            <p className="text-sm text-gray-600 mb-4">
              Are you interested in price information about a job in this service/category? To give you an id
              <Link href="#" className="text-mb-purple hover:underline ml-1">
                Learn more
              </Link>
            </p>

            <div className="border-t pt-3 text-sm">
              <strong>27490 bathroom fitters</strong>
              <p className="text-gray-600">in The UK</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-4 w-full border-mb-purple text-mb-purple hover:bg-mb-purple hover:text-white"
            >
              <Link href="#">
                View all
              </Link>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Plumbing</h3>
            <p className="text-sm text-gray-600 mb-4">
              Curious about the cost of plumbing services? Dive into our comprehensive guides to find pricing
              <Link href="#" className="text-mb-purple hover:underline ml-1">
                Learn more
              </Link>
            </p>

            <div className="border-t pt-3 text-sm">
              <strong>30081 plumbers</strong>
              <p className="text-gray-600">in The UK</p>
            </div>

            <Button
              asChild
              variant="outline"
              className="mt-4 w-full border-mb-purple text-mb-purple hover:bg-mb-purple hover:text-white"
            >
              <Link href="#">
                View all
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
