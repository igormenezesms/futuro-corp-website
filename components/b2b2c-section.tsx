import { Card, CardContent } from "@/components/ui/card"
import { Building, Users, ArrowRight } from "lucide-react"

export function B2B2CSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nosso Modelo <span className="text-accent">B2B2C</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Futuro Corp atua como ponte entre o mundo corporativo e o consumidor final, criando valor para ambos
            através de soluções financeiras integradas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* B2B Side */}
          <Card className="methodology-card">
            <CardContent className="p-8 text-center">
              <Building className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Clientes B2B</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Escritórios de Contabilidade</li>
                <li>• Assessorias de Investimento</li>
                <li>• Corretoras de Seguros</li>
                <li>• Planejadores Financeiros</li>
                <li>• Consultores CVM</li>
                <li>• Profissionais Autônomos</li>
              </ul>
            </CardContent>
          </Card>

          {/* Bridge */}
          <div className="flex flex-col items-center">
            <div className="bg-accent text-white rounded-full p-4 mb-4">
              <ArrowRight className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-center">
              Futuro Corp
              <br />
              <span className="text-accent">Ecossistema</span>
            </h3>
          </div>

          {/* B2C Side */}
          <Card className="methodology-card">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-secondary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Clientes B2C</h3>
              <ul className="text-left space-y-2 text-muted-foreground">
                <li>• Pessoas Físicas</li>
                <li>• Famílias</li>
                <li>• Profissionais Liberais</li>
                <li>• Empreendedores</li>
                <li>• Investidores Individuais</li>
                <li>• Aposentados</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Através do nosso modelo B2B2C, conectamos profissionais qualificados com pessoas que precisam de orientação
            financeira, criando um ecossistema sustentável que beneficia todos os envolvidos e gera valor compartilhado.
          </p>
        </div>
      </div>
    </section>
  )
}
