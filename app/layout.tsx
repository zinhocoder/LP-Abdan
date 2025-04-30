import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

export const metadata = {
  title: "Renda em 60 Minutos: O Segredo da Nova Era da IA",
  description:
    "Descubra como a Inteligência Artificial está revolucionando a forma de gerar renda e como você pode aproveitar essa oportunidade para criar fluxos de renda em apenas 60 minutos.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="ebook-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
