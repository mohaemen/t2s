"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function LookingForLeads() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-64 lg:h-96 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1582560475038-0996ead9c7fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
              alt="Tradesperson"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 max-w-xl">
            <h2 className="text-2xl md:text-3xl font-faktum font-semibold">
              Looking for leads?
            </h2>
            <h3 className="text-xl font-semibold text-primary">
              Grow your business with MyBuilder
            </h3>
            <p className="text-gray-600">
              MyBuilder is the reliable way to get more of the work you want. Sign up for free to receive a steady stream of local job opportunities that match your skills. Take on big jobs or smaller gap fillers - it's up to you.
            </p>
            <Link href="/tradesperson/register" className="inline-block">
              <Button
                className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5"
              >
                Tradespeople join for free
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
