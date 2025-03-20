"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HowToHire() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-faktum font-semibold text-center mb-12">
          How to hire the right tradesperson
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 bg-background rounded-full flex items-center justify-center mb-4">
              <Image
                src="/icons/post-your-job.svg"
                alt="Post your job"
                width={50}
                height={50}
              />
              <div className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                1
              </div>
            </div>
            <h3 className="text-lg font-semibold">Post your job for free</h3>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 bg-background rounded-full flex items-center justify-center mb-4">
              <Image
                src="/icons/tradespeople-respond.svg"
                alt="Tradespeople respond"
                width={50}
                height={50}
              />
              <div className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                2
              </div>
            </div>
            <h3 className="text-lg font-semibold">Tradespeople respond</h3>
          </div>

          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-24 h-24 bg-background rounded-full flex items-center justify-center mb-4">
              <Image
                src="/icons/review-and-choose.svg"
                alt="Review profiles and choose"
                width={50}
                height={50}
              />
              <div className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center">
                3
              </div>
            </div>
            <h3 className="text-lg font-semibold">Review profiles and choose</h3>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/how-it-works">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              See how it works
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
