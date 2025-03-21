import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"
import { HeroSection } from "@/components/home/HeroSection"
import { StatsSection } from "@/components/home/StatsSection"
import { HowItWorksSection } from "@/components/home/HowItWorksSection"
import { WhyMyBuilderSection } from "@/components/home/WhyMyBuilderSection"
import { PopularTradesSection } from "@/components/home/PopularTradesSection"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <StatsSection />
      <HowItWorksSection />
      <WhyMyBuilderSection />
      <PopularTradesSection />
      <Footer />
    </main>
  )
}
