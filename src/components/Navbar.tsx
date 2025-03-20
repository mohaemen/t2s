"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="w-full bg-primary text-white py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-light.svg"
            alt="MyBuilder"
            width={100}
            height={30}
            priority
          />
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-primary text-white p-6">
              <nav className="flex flex-col space-y-6 mt-10">
                <Link
                  href="/post-a-job"
                  className="text-lg font-medium hover:text-accent"
                >
                  Post a job
                </Link>
                <Link
                  href="/login"
                  className="text-lg font-medium hover:text-accent"
                >
                  Log in
                </Link>
                <Link
                  href="/tradesperson/register"
                  className="text-lg font-medium hover:text-accent"
                >
                  Sign up as a tradesperson
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/post-a-job"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Post a job
          </Link>
          <Link
            href="/login"
            className="text-sm font-medium hover:text-accent transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/tradesperson/register"
            className="text-sm font-medium hover:text-accent transition-colors py-2 px-4 border border-white rounded-md hover:bg-white hover:text-primary"
          >
            Sign up as a tradesperson
          </Link>
        </nav>
      </div>
    </header>
  );
}
