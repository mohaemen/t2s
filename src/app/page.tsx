import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowToHire } from "@/components/HowToHire";
import { WhyMyBuilder } from "@/components/WhyMyBuilder";
import { PopularTrades } from "@/components/PopularTrades";
import { LookingForLeads } from "@/components/LookingForLeads";
import { AppDownload } from "@/components/AppDownload";
import { ReviewsSection } from "@/components/ReviewsSection";
import { PostJobBanner } from "@/components/PostJobBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowToHire />
      <WhyMyBuilder />
      <PopularTrades />
      <LookingForLeads />
      <AppDownload />
      <ReviewsSection />
      <PostJobBanner />
      <Footer />
    </main>
  );
}
