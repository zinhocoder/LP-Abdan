import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "../globals.css"

export const metadata = {
  title: "ABIDAN: Desperte o Poder Oculto da IA | 7 Códigos Secretos",
  description:
    "Descubra os 7 códigos secretos para libertar o potencial máximo das mentes criativas e dominar a inteligência artificial.",
}

export default function AbidanLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} storageKey="abidan-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
