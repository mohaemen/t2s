"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface Review {
  id: number;
  title: string;
  rating: number;
  review: string;
  author: string;
  tradesperson: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Fascia guttering move quotes",
    rating: 5,
    review: "Duncan and his team did a superb job clearing a front garden, dismantling crazy paving, and lowering the ground level.",
    author: "Homeowner",
    tradesperson: "D Spiers roofing",
  },
  {
    id: 2,
    title: "2 x 5ft fence panels and 1 wooden post needed",
    rating: 5,
    review: "Arrived on time, very polite and carried out the work to a great standard achieving everything I had asked for.",
    author: "Homeowner",
    tradesperson: "BBfencing/paving",
  },
  {
    id: 3,
    title: "Toilet not flushing",
    rating: 5,
    review: "Very efficient at his job and a good price. Would definitely recommend and use again.",
    author: "Homeowner",
    tradesperson: "David Astbury Plumbing",
  },
  {
    id: 4,
    title: "Broken toilet flush",
    rating: 5,
    review: "Radu replaced a broken toilet flush which proved more complicated than originally thought as the pipes had been installed incorrectly.",
    author: "Homeowner",
    tradesperson: "Radu Ruscan",
  },
  {
    id: 5,
    title: "Sewage backup and clean up",
    rating: 5,
    review: "Mehmet was well prepared, able to diagnose and resolve our drainage issue effectively and efficiently. He also provided excellent advice.",
    author: "Homeowner",
    tradesperson: "Fm draining ltd",
  },
];

function ReviewCard({ review }: { review: Review }) {
  return (
    <Card className="border-none shadow-sm h-full flex flex-col">
      <CardHeader>
        <CardTitle className="text-md">{review.title}</CardTitle>
        <div className="flex mt-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className={`text-2xl ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}>
              ★
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-gray-600">{review.review}</p>
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        <div className="font-bold">{review.tradesperson}</div>
      </CardFooter>
    </Card>
  );
}

export function ReviewsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl md:text-3xl font-faktum font-semibold mb-4">
              Millions of genuine reviews
            </h2>
            <p className="text-gray-600">
              Reviews on MyBuilder are written by customers like you
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link href="/post-a-job">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6">
                Post your job
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
