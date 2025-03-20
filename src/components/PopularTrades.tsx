"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TradeCardProps {
  title: string;
  description: string;
  tradeCount: string;
  imageSrc: string;
  href: string;
}

function TradeCard({ title, description, tradeCount, imageSrc, href }: TradeCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-md">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardTitle className="text-lg font-semibold mb-2">{title}</CardTitle>
        <p className="text-sm text-gray-600 mb-4">
          {description}
        </p>
        <p className="text-xs text-gray-500 font-medium">
          {tradeCount} in The UK
        </p>
      </CardContent>
      <CardFooter className="pt-0">
        <Link
          href={href}
          className="text-primary font-semibold text-sm hover:text-accent transition-colors"
        >
          View all
        </Link>
      </CardFooter>
    </Card>
  );
}

export function PopularTrades() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-faktum font-semibold text-center mb-12">
          Popular trades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TradeCard
            title="Roofing"
            description="Are you interested in price information about a job in this service/category? To give you an idea of costs, explore our detailed guides."
            tradeCount="15977 roofers"
            imageSrc="https://images.unsplash.com/photo-1635424710928-22eb558fd588?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
            href="/roofing/roofer-tradespeople"
          />

          <TradeCard
            title="Bathroom Fitting"
            description="Are you interested in price information about a job in this service/category? To give you an idea of costs, explore our detailed guides."
            tradeCount="27523 bathroom fitters"
            imageSrc="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            href="/bathroom-fitting/bathroom-fitter-tradespeople"
          />

          <TradeCard
            title="Plumbing"
            description="Curious about the cost of plumbing services? Dive into our comprehensive guides to find pricing information that helps you plan your project."
            tradeCount="30099 plumbers"
            imageSrc="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
            href="/plumbing/plumber-tradespeople"
          />
        </div>
      </div>
    </section>
  );
}
