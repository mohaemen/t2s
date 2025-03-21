"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="w-full bg-mb-purple text-white">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Mobile notification */}
            <div className="hidden md:block text-sm">
              Tradesperson looking for leads? <Link href="#" className="font-semibold underline">Join for free</Link>
            </div>
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <img
                src="https://ext.same-assets.com/4131608513/2732382355.svg"
                alt="MyBuilder Logo"
                className="h-8"
              />
            </Link>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/post-a-job">
              <Button variant="link" className="text-white hover:text-white/80">
                Post a job
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="link" className="text-white hover:text-white/80">
                Log in
              </Button>
            </Link>
            <Link href="/tradesperson/register">
              <Button variant="link" className="text-white hover:text-white/80">
                Sign up as a tradesperson
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
