"use client";

import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would redirect to search results
    console.log("Search for:", searchQuery);
  };

  return (
    <div className="relative bg-primary text-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-faktum font-semibold leading-tight">
              The reliable way to hire a tradesperson
            </h1>
            <div className="mt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="block text-lg font-medium">
                  What is your job?
                </label>
                <div className="flex">
                  <div className="relative flex-grow">
                    <Input
                      type="text"
                      placeholder="Bathroom fitting"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full h-12 pr-10 text-black rounded-l-md rounded-r-none border-0"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="h-12 px-6 bg-accent hover:bg-accent/90 text-white rounded-l-none rounded-r-md"
                  >
                    Go
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden lg:block relative h-[400px]">
            <Image
              src="/images/hero-image.jpg"
              alt="Tradesperson working on home renovation"
              fill
              className="object-cover rounded-md"
              priority
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-3xl font-bold">237,311</p>
            <p className="text-lg">tradespeople</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-3xl font-bold">40+</p>
            <p className="text-lg">trade categories</p>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <p className="text-3xl font-bold">2,534,544</p>
            <p className="text-lg">reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
