"use client"

import { useState } from "react"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const steps = [
  {
    id: 1,
    title: "Poupar Eficiente",
    description:
      "Estratégias inteligentes para maximizar sua capacidade de poupança e criar uma base sólida para seus investimentos.",
    subsidiaries: ["Futuro Consultoria", "Futuro HUB", "Meu Futuro App"],
    pillar: "Educação Financeira",
  },
  {
    id: 2,
    title: "Gestão Financeira",
    description: "Controle total sobre suas finanças pessoais com ferramentas e metodologias comprovadas.",
    subsidiaries: ["Futuro Consultoria", "Futuro HUB", "Meu Futuro App"],
    pillar: "Educação Financeira",
  },
  {
    id: 3,
    title: "Gestão de Risco",
    description: "Proteção inteligente do seu patrimônio através de seguros e estratégias de mitigação de riscos.",
    subsidiaries: ["Futuro Consultoria", "Futuro HUB"],
    pillar: "Proteção de Capital",
  },
  {
    id: 4,
    title: "Garantia de Renda Futura",
    description: "Planejamento previdenciário e estratégias para garantir renda na aposentadoria.",
    subsidiaries: ["Futuro Consultoria", "Futuro HUB", "Futuro Contabilize"],
    pillar: "Proteção de Capital",
  },
  {
    id: 5,
    title: "Reserva de Emergência",
    description: "Construção e manutenção de uma reserva sólida para imprevistos e oportunidades.",
    subsidiaries: ["Futuro Consultoria", "FTR Invest"],
    pillar: "Acúmulo de Capital",
  },
  {
    id: 6,
    title: "Prioridades e Objetivos",
    description: "Definição clara de metas financeiras e estratégias para alcançá-las de forma eficiente.",
    subsidiaries: ["Futuro Consultoria", "Meu Futuro App"],
    pillar: "Acúmulo de Capital",
  },
  {
    id: 7,
    title: "Gestão de Ativos",
    description: "Estratégias avançadas de investimento e diversificação de portfólio para maximizar retornos.",
    subsidiaries: ["Futuro Consultoria", "FTR Invest", "Meu Futuro App"],
    pillar: "Expansão de Capital",
  },
  {
    id: 8,
    title: "Planejamento Tributário e Sucessório",
    description: "Otimização fiscal e planejamento sucessório para preservar e transferir patrimônio.",
    subsidiaries: ["Futuro Consultoria", "Futuro Holdings", "Futuro Contabilize"],
    pillar: "Expansão de Capital",
  },
]

const subsidiaryLogos: { [key: string]: string } = {
  "Futuro Consultoria": "/images/logo-futuro-consultoria.png",
  "FTR Invest": "/images/logo-ftr-invest.png",
  "Futuro HUB": "/images/logo-futuro-hub.png",
  "Meu Futuro App": "/images/logo-meu-futuro-app.png",
  "Futuro Contabilize": "/images/logo-futuro-contabilize.png",
  "Futuro Holdings": "/images/logo-futuro-holdings.png",
}

export default function MetodologiaPage() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)

  const selectedStepData = selectedStep ? steps.find((s) => s.id === selectedStep) : null

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa Metodologia Exclusiva: Os <span className="text-accent">8 Passos</span> para a Liberdade Financeira
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              A metodologia da Futuro Consultoria é a base de todo o planejamento financeiro 360º, desenvolvida ao longo
              de mais de uma década de experiência no mercado financeiro.
            </p>
          </div>

          {/* Interactive Images */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">8 Passos em Símbolo do Infinito</h3>
              <div className="relative">
                <Image
                  src="/images/8-passos-liberdade-financeira.png"
                  alt="8 Passos para a Liberdade Financeira"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                {/* Interactive hotspots */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                  <button
                    key={step}
                    onClick={() => setSelectedStep(step)}
                    className="absolute w-8 h-8 bg-accent text-white rounded-full font-bold hover:scale-110 transition-transform"
                    style={{
                      top: step <= 4 ? "30%" : "60%",
                      left: `${20 + (step - 1) * 10}%`,
                    }}
                  >
                    {step}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">4 Pilares da Metodologia</h3>
              <Image
                src="/images/metodologia-planejamento-futuro.png"
                alt="Metodologia Planejamento Futuro"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <Card key={step.id} className="methodology-card cursor-pointer" onClick={() => setSelectedStep(step.id)}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {step.id}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{step.pillar}</p>
                  <Button variant="outline" size="sm">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStepData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                    {selectedStepData.id}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{selectedStepData.title}</h2>
                    <p className="text-accent font-medium">{selectedStepData.pillar}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setSelectedStep(null)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6">{selectedStepData.description}</p>

              <div>
                <h3 className="text-lg font-semibold mb-4">Como Nossas Subsidiárias Contribuem:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {selectedStepData.subsidiaries.map((subsidiary) => (
                    <div key={subsidiary} className="text-center p-4 border rounded-lg">
                      <Image
                        src={subsidiaryLogos[subsidiary] || "/placeholder.svg"}
                        alt={subsidiary}
                        width={80}
                        height={40}
                        className="h-8 w-auto mx-auto mb-2 object-contain"
                      />
                      <p className="text-sm font-medium">{subsidiary}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}
