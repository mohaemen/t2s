"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-mb-purple text-white relative overflow-hidden">
      <div className="container-custom relative z-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              The reliable way to hire a tradesperson
            </h1>

            <div className="mb-6">
              <label htmlFor="job-search" className="block text-lg font-medium mb-2">
                What is your job?
              </label>
              <div className="flex">
                <Input
                  id="job-search"
                  placeholder="Describe your job..."
                  className="rounded-l-md bg-white text-black h-12"
                />
                <Button
                  className="bg-mb-green hover:bg-mb-green/90 text-black font-semibold rounded-l-none rounded-r-md h-12 px-6"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-search"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Image
              src="/home/en-GB/ho-hero-mobile.jpg"
              alt="Tradesperson working"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
