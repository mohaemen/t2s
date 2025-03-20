"use client";

import Link from "next/link";

export function PostJobBanner() {
  return (
    <section className="bg-primary text-white py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-faktum font-semibold">
          Post your job now
        </h2>
        <Link
          href="/post-a-job"
          className="bg-white text-primary hover:bg-accent hover:text-white transition-colors px-6 py-3 rounded-md font-semibold"
        >
          Get started
        </Link>
      </div>
    </section>
  );
}
