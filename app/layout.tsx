import type React from "react"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import "./globals.css"

const rubik = Rubik({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-rubik",
})

export const metadata: Metadata = {
  title: "Futuro Corp - Construindo o Futuro Financeiro, Juntos",
  description:
    "Futuro Corp é um ecossistema de soluções financeiras inovadoras, preparando-se para o IPO em 2035. Descubra nosso modelo B2B2C e metodologia exclusiva.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${rubik.variable} ${GeistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
