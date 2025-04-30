import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

export function FutureWorks() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Circuito decorativo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-amber-500"
              style={{
                height: "1px",
                width: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div
              key={i + 100}
              className="absolute rounded-full bg-amber-500"
              style={{
                height: "4px",
                width: "4px",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
              O FUTURO DA IA
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Próximos <span className="text-amber-500">Projetos</span> do Abidan
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl">
              Fique por dentro dos próximos lançamentos e descubra as novas fronteiras da IA que estamos explorando.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative h-[350px] sm:h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl shadow-amber-500/10 order-2 md:order-1">
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-40"></div>
              <Image
                src="/images/future-ai.png"
                alt="Inteligência Artificial do Futuro"
                className="object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="order-1 md:order-2">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-amber-500">Série "Mestres da IA"</h3>

              <div className="space-y-4 sm:space-y-6">
                <div className="bg-zinc-900/50 border border-amber-500/10 rounded-lg p-4 sm:p-6 hover:border-amber-500/30 transition-all">
                  <h4 className="text-lg sm:text-xl font-medium mb-2">IA Avançada para Negócios</h4>
                  <p className="text-slate-300">
                    Um curso completo sobre como implementar soluções de IA avançadas para automatizar processos
                    empresariais e multiplicar resultados. Lançamento previsto para Agosto/2025.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-amber-500/10 rounded-lg p-4 sm:p-6 hover:border-amber-500/30 transition-all">
                  <h4 className="text-lg sm:text-xl font-medium mb-2">Criação de Agentes Autônomos</h4>
                  <p className="text-slate-300">
                    Aprenda a criar agentes de IA que trabalham 24/7 para gerar renda passiva enquanto você dorme. Uma
                    revolução no mercado digital. Lançamento previsto para Outubro/2025.
                  </p>
                </div>

                <div className="bg-zinc-900/50 border border-amber-500/10 rounded-lg p-4 sm:p-6 hover:border-amber-500/30 transition-all">
                  <h4 className="text-lg sm:text-xl font-medium mb-2">Masterclass: O Futuro do Trabalho</h4>
                  <p className="text-slate-300">
                    Uma análise profunda sobre como a IA está transformando o mercado de trabalho e como você pode se
                    posicionar para prosperar nesta nova era. Lançamento previsto para Janeiro/2026.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-zinc-800 hover:bg-zinc-700 text-amber-500 border border-amber-500/20 group w-full sm:w-auto">
                  <Bell className="mr-2 h-4 w-4 group-hover:animate-pulse" />
                  Seja notificado sobre novos lançamentos
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              <span className="text-amber-500 font-medium">"O futuro pertence àqueles que se preparam hoje."</span>
              <br />
              <span className="text-sm text-slate-400 mt-2 block">
                — Abidan, Especialista em IA e Empreendedorismo Digital
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
