import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CoveragesSection } from "@/components/coverages-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { QuoteForm } from "@/components/quote-form"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <CoveragesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  )
}
