"use client";

import Image from "next/image";
import Link from "next/link";

export function AppDownload() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-faktum font-semibold">
              Download our app
            </h2>
            <p className="text-gray-600">
              Posting and managing your jobs is even easier with the MyBuilder app. Add photos and information in an instant and keep things moving with notifications and chat, allowing you to message tradespeople wherever you are. Once the job's done, leave a rating and review straight from your phone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://apps.apple.com/us/app/mybuilder-for-homeowners/id6477444314"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://ext.same-assets.com/2744607031/604676687.svg+xml"
                  alt="Download on the App Store"
                  width={135}
                  height={40}
                />
              </Link>
              <Link
                href="https://play.google.com/store/apps/details?id=com.instapro.homeownerapp.unitedkingdom"
                className="inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://ext.same-assets.com/738968395/1354368866.svg+xml"
                  alt="Get it on Google Play"
                  width={150}
                  height={40}
                />
              </Link>
            </div>
            <p className="text-sm text-gray-500">
              Looking for our tradesperson app? <Link href="/tradesperson/register#download-our-app" className="text-primary hover:text-accent">Find it here</Link>
            </p>
          </div>
          <div className="relative h-[500px] w-full max-w-[300px] mx-auto lg:ml-auto">
            <Image
              src="https://images.unsplash.com/photo-1605170439002-90845e8c0137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="MyBuilder App"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
