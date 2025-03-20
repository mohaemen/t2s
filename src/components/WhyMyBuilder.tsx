"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function WhyMyBuilder() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-faktum font-semibold text-center mb-4">
          Why MyBuilder is the reliable way
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Hiring a tradesperson when you need one isn't always easy. MyBuilder is the reliable way, helping you hire the right tradesperson for your job.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">The tradespeople you need</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Post your job for free to access tradespeople with the skills you need and get responses from those who want to do it. You choose who you want to chat with.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">Genuine customer reviews</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Thanks to our robust feedback system, you can read genuine reviews from previous customers, allowing you to make an informed choice about who to hire.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold">You're in control</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Review profiles, work history and feedback before making a decision about who to chat with. Only tradespeople you have chosen can contact you.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/post-a-job"
            className="inline-block bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-8 rounded-md transition-colors"
          >
            Post your job
          </a>
        </div>
      </div>
    </section>
  );
}
