"use client";

import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-light.svg"
                alt="MyBuilder"
                width={120}
                height={40}
              />
            </Link>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/post-a-job" className="hover:text-accent">
                Post a job
              </Link>
              <Link href="/how-it-works" className="hover:text-accent">
                How it works
              </Link>
              <Link href="/find-trades" className="hover:text-accent">
                Find trades
              </Link>
              <Link href="/customer-helpdesk" className="hover:text-accent">
                Customer helpdesk
              </Link>
              <Link href="/questions" className="hover:text-accent">
                Ask a tradesperson
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">For Tradespeople</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link
                href="/tradesperson/register"
                className="hover:text-accent"
              >
                Register as tradesperson
              </Link>
              <Link href="/quality-standard" className="hover:text-accent">
                Quality requirements
              </Link>
              <Link href="/reviews-policy" className="hover:text-accent">
                Reviews policy
              </Link>
              <Link href="/tradesperson-helpdesk" className="hover:text-accent">
                Tradespeople helpdesk
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">About</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/about-us" className="hover:text-accent">
                About us
              </Link>
              <Link href="/blog" className="hover:text-accent">
                Press and media
              </Link>
              <Link
                href="https://careers.instapro.group/"
                className="hover:text-accent"
              >
                Vacancies
              </Link>
              <Link href="/blog/become-a-partner" className="hover:text-accent">
                Become a partner
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Categories</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <Link href="/trades" className="hover:text-accent">
                Trades
              </Link>
              <Link href="/services" className="hover:text-accent">
                Services
              </Link>
              <Link href="/projects" className="hover:text-accent">
                Projects
              </Link>
              <Link href="/all-cities" className="hover:text-accent">
                Cities
              </Link>
              <Link href="/price-guides" className="hover:text-accent">
                Pricing guides
              </Link>
            </nav>
          </div>

          <div className="space-y-4 col-span-1 md:col-span-4 lg:col-span-1">
            <div className="flex space-x-3">
              <Link
                href="https://www.facebook.com/MyBuilder"
                aria-label="Facebook"
                className="hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/user/TeamMyBuilder"
                aria-label="YouTube"
                className="hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </Link>
              <Link
                href="https://twitter.com/mybuilder"
                aria-label="Twitter/X"
                className="hover:text-accent"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
            </div>
            <div className="space-y-2">
              <Link
                href="https://apps.apple.com/us/app/mybuilder-for-homeowners/id6477444314"
                className="inline-block"
              >
                <Image
                  src="https://ext.same-assets.com/2744607031/604676687.svg+xml"
                  alt="Download on the App Store"
                  width={120}
                  height={40}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.instapro.homeownerapp.unitedkingdom"
                className="inline-block"
              >
                <Image
                  src="https://ext.same-assets.com/738968395/1354368866.svg+xml"
                  alt="Get it on Google Play"
                  width={135}
                  height={40}
                />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6 bg-gray-700" />

        <div className="flex flex-wrap gap-4 justify-between text-xs">
          <div className="flex space-x-4">
            <Link href="/privacy-policy" className="hover:text-accent">
              Privacy
            </Link>
            <Link href="/cookie-policy" className="hover:text-accent">
              Cookie policy
            </Link>
            <button className="hover:text-accent">Cookie settings</button>
            <Link href="/terms-conditions" className="hover:text-accent">
              Terms and conditions
            </Link>
          </div>
          <div>© 2008-2025 MyBuilder Limited</div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-4">Find tradespeople in your area</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <Link href="/find-trades/london" className="hover:text-accent">London</Link>
            <Link href="/find-trades/manchester" className="hover:text-accent">Manchester</Link>
            <Link href="/find-trades/glasgow" className="hover:text-accent">Glasgow</Link>
            <Link href="/find-trades/bristol" className="hover:text-accent">Bristol</Link>
            <Link href="/find-trades/birmingham" className="hover:text-accent">Birmingham</Link>
            <Link href="/find-trades/nottingham" className="hover:text-accent">Nottingham</Link>
            <Link href="/find-trades/leeds" className="hover:text-accent">Leeds</Link>
            <Link href="/find-trades/liverpool" className="hover:text-accent">Liverpool</Link>
            <Link href="/all-cities" className="hover:text-accent text-accent">More cities +</Link>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-sm font-semibold mb-4">Our tradespeople's professions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            <Link href="/handyman/handyman-tradespeople" className="hover:text-accent">Handymen</Link>
            <Link href="/painting-decorating/painter-decorator-tradespeople" className="hover:text-accent">Painters and Decorators</Link>
            <Link href="/extensions/builder-tradespeople" className="hover:text-accent">Builders</Link>
            <Link href="/gardening-landscaping/landscaper-tradespeople" className="hover:text-accent">Landscape Gardeners</Link>
            <Link href="/carpentry-joinery/carpenter-joiner-tradespeople" className="hover:text-accent">Carpenters</Link>
            <Link href="/plastering-rendering/plasterer-tradespeople" className="hover:text-accent">Plasterers</Link>
            <Link href="/trades" className="hover:text-accent text-accent">More trades +</Link>
          </div>
        </div>

        <div className="mt-8 text-xs">
          <p className="mb-2 font-semibold">Part of the Instapro Group and Angi family</p>
          <div className="flex flex-wrap gap-1">
            <span>USA:</span>
            <Link href="https://www.homeadvisor.com/" className="hover:text-accent">HomeAdvisor</Link>
            <span>&</span>
            <Link href="https://www.angi.com/" className="hover:text-accent">Angi</Link>
            <span>&</span>
            <Link href="https://www.instapro.com/" className="hover:text-accent">Instapro</Link>

            <span className="ml-2">Canada:</span>
            <Link href="https://www.homestars.com/" className="hover:text-accent">HomeStars</Link>

            <span className="ml-2">The Netherlands:</span>
            <Link href="https://www.werkspot.nl/" className="hover:text-accent">Werkspot</Link>

            <span className="ml-2">France:</span>
            <Link href="https://www.travaux.com/" className="hover:text-accent">Travaux</Link>

            <span className="ml-2">Germany:</span>
            <Link href="https://www.my-hammer.de/" className="hover:text-accent">MyHammer</Link>

            <span className="ml-2">Austria:</span>
            <Link href="https://www.my-hammer.at/" className="hover:text-accent">MyHammer</Link>

            <span className="ml-2">Italy:</span>
            <Link href="https://www.instapro.it/" className="hover:text-accent">Instapro</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
