"use client"

import React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-mb-purple text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="mb-8">
          <Link href="/" className="mb-6 block">
            <img
              src="https://ext.same-assets.com/4131608513/2732382355.svg"
              alt="MyBuilder Logo"
              className="h-8"
            />
          </Link>
          <Button
            asChild
            className="bg-mb-purple hover:bg-mb-purple text-white border border-white rounded-md mt-4"
          >
            <Link href="/post-a-job" className="font-semibold">
              Post your job now
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4 text-sm">Post a job</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">How it works</Link></li>
              <li><Link href="#" className="hover:underline">Find trades</Link></li>
              <li><Link href="#" className="hover:underline">Post a job</Link></li>
              <li><Link href="#" className="hover:underline">Customer feedback</Link></li>
              <li><Link href="#" className="hover:underline">Ask a tradesperson</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Register as tradesperson</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Quality requirements</Link></li>
              <li><Link href="#" className="hover:underline">How it works</Link></li>
              <li><Link href="#" className="hover:underline">Membership</Link></li>
              <li><Link href="#" className="hover:underline">Tradesperson feedback</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">About us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">FAQ and contact</Link></li>
              <li><Link href="#" className="hover:underline">Press</Link></li>
              <li><Link href="#" className="hover:underline">Vacancies</Link></li>
              <li><Link href="#" className="hover:underline">Become a partner</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:underline">Painters</Link></li>
              <li><Link href="#" className="hover:underline">Plumbers</Link></li>
              <li><Link href="#" className="hover:underline">Electricians</Link></li>
              <li><Link href="#" className="hover:underline">Kitchen Fitters</Link></li>
              <li><Link href="#" className="hover:underline">All trades</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 pb-2 text-xs">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <Link href="#" className="hover:underline">© 2024 MyBuilder Ltd</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">Terms</Link>
              <span>|</span>
              <Link href="#" className="hover:underline">Privacy</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:underline">
                <span className="sr-only">Download on App Store</span>
                <img
                  src="https://ext.same-assets.com/4131608513/604676687.svg"
                  alt="App Store"
                  className="h-8"
                />
              </Link>
              <Link href="#" className="hover:underline">
                <span className="sr-only">Get it on Google Play</span>
                <img
                  src="https://ext.same-assets.com/4131608513/1354368866.svg"
                  alt="Google Play"
                  className="h-8"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
