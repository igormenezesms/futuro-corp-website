import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, Building2 } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-95" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/abstract-financial-pattern.png')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Futuro Corp: Construindo o<span className="text-accent"> Futuro Financeiro</span>, Juntos
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            Rumo ao IPO 2035: Inovação e Impacto no Planejamento Financeiro através do nosso ecossistema integrado de
            soluções
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              Conheça Nossa Metodologia
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Nosso Ecossistema
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <TrendingUp className="h-8 w-8 text-accent mb-2" />
              <div className="text-2xl font-bold">R$ 15M</div>
              <div className="text-white/80">Meta 2025</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-8 w-8 text-accent mb-2" />
              <div className="text-2xl font-bold">500+</div>
              <div className="text-white/80">Planejadores</div>
            </div>
            <div className="flex flex-col items-center">
              <Building2 className="h-8 w-8 text-accent mb-2" />
              <div className="text-2xl font-bold">2035</div>
              <div className="text-white/80">IPO Target</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
