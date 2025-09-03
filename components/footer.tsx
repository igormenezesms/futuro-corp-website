import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo-futuro-corp.png"
              alt="Futuro Corp"
              width={150}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/80">
              Construindo o futuro financeiro através de soluções inovadoras e educação de qualidade.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-white hover:text-accent">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-white hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-white/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/metodologia" className="text-white/80 hover:text-accent transition-colors">
                  Nossa Metodologia
                </Link>
              </li>
              <li>
                <Link href="/ecossistema" className="text-white/80 hover:text-accent transition-colors">
                  Nosso Ecossistema
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-white/80 hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jornada-comercial" className="text-white/80 hover:text-accent transition-colors">
                  Planejamento Financeiro
                </Link>
              </li>
              <li>
                <Link href="/jornada-parceiro" className="text-white/80 hover:text-accent transition-colors">
                  Seja um Parceiro
                </Link>
              </li>
              <li>
                <Link href="/ecossistema" className="text-white/80 hover:text-accent transition-colors">
                  Investimentos
                </Link>
              </li>
              <li>
                <Link href="/ecossistema" className="text-white/80 hover:text-accent transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-white/80">contato@futurocorp.com.br</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-white/80">(11) 9999-9999</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-accent" />
                <span className="text-white/80">São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/60">© 2025 Futuro Corp. Todos os direitos reservados. | Rumo ao IPO 2035</p>
        </div>
      </div>
    </footer>
  )
}
