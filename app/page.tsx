import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { B2B2CSection } from "@/components/b2b2c-section"
import { EcosystemOverview } from "@/components/ecosystem-overview"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <B2B2CSection />
      <EcosystemOverview />
      <Footer />
    </main>
  )
}
