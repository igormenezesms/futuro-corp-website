import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const subsidiaries = [
  {
    name: "Futuro Consultoria",
    logo: "/images/logo-futuro-consultoria.png",
    description: "Planejamento financeiro 360º e consultoria especializada",
  },
  {
    name: "FTR Invest",
    logo: "/images/logo-ftr-invest.png",
    description: "Assessoria de investimentos e gestão de patrimônio",
  },
  {
    name: "Futuro HUB",
    logo: "/images/logo-futuro-hub.png",
    description: "Soluções financeiras integradas e inovadoras",
  },
  {
    name: "Meu Futuro App",
    logo: "/images/logo-meu-futuro-app.png",
    description: "Aplicativo de gestão financeira pessoal",
  },
  {
    name: "Futuro Contabilize",
    logo: "/images/logo-futuro-contabilize.png",
    description: "Serviços contábeis e tributários especializados",
  },
  {
    name: "Futuro Holdings",
    logo: "/images/logo-futuro-holdings.png",
    description: "Gestão estratégica do ecossistema corporativo",
  },
]

export function EcosystemOverview() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visão Geral do <span className="text-accent">Ecossistema</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Um conjunto integrado de subsidiárias e operações que trabalham em sinergia para oferecer soluções
            financeiras completas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {subsidiaries.map((subsidiary, index) => (
            <Card key={index} className="methodology-card group">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <Image
                    src={subsidiary.logo || "/placeholder.svg"}
                    alt={subsidiary.name}
                    width={120}
                    height={60}
                    className="subsidiary-logo h-12 w-auto object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{subsidiary.name}</h3>
                <p className="text-muted-foreground text-sm">{subsidiary.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/ecossistema">
            <Button size="lg" className="bg-accent hover:bg-accent/90">
              Explore Nosso Ecossistema Completo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
