import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-black relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      {/* Linhas decorativas */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(10)].map((_, i) => (
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
        </div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
            RESULTADOS COMPROVADOS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que <span className="text-amber-500">dizem</span> nossos leitores
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl">
            Veja como as estratégias deste ebook estão{" "}
            <span className="font-bold text-amber-400">transformando a vida financeira</span> de pessoas comuns que
            aplicaram os métodos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border-amber-500/20 shadow-lg hover:shadow-amber-500/10 transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-xl">
                  RM
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Rafael Mendes</CardTitle>
                  <CardDescription className="text-slate-300">Designer Gráfico</CardDescription>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Quote className="absolute -top-2 -left-1 h-8 w-8 text-amber-500/20 rotate-180" />
                <p className="text-slate-200 text-lg leading-relaxed pl-6">
                  Apliquei a estratégia de criação de designs com IA e consegui{" "}
                  <span className="text-amber-400 font-medium">triplicar minha produtividade</span>. Em apenas uma
                  semana, já recuperei o investimento no ebook e agora estou ganhando muito mais trabalhando menos
                  horas.
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/10">
                <p className="text-amber-400 font-medium">
                  Resultado: <span className="text-white">Produtividade 3x maior e aumento de 70% na renda mensal</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border-amber-500/20 shadow-lg hover:shadow-amber-500/10 transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-xl">
                  CS
                </div>
                <div>
                  <CardTitle className="text-xl text-white">Carla Silva</CardTitle>
                  <CardDescription className="text-slate-300">Redatora Freelancer</CardDescription>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Quote className="absolute -top-2 -left-1 h-8 w-8 text-amber-500/20 rotate-180" />
                <p className="text-slate-200 text-lg leading-relaxed pl-6">
                  Eu estava desanimada com o mercado de conteúdo, até que descobri este ebook. As estratégias de redação
                  com IA me permitiram entregar <span className="text-amber-400 font-medium">5x mais conteúdo</span> de
                  qualidade. Minha renda mensal{" "}
                  <span className="text-amber-400 font-medium">dobrou em apenas 3 semanas</span>!
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/10">
                <p className="text-amber-400 font-medium">
                  Resultado: <span className="text-white">Produção 5x maior e renda mensal duplicada</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 border-amber-500/20 shadow-lg hover:shadow-amber-500/10 transition-all hover:scale-105 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-bold text-xl">
                  JP
                </div>
                <div>
                  <CardTitle className="text-xl text-white">João Paulo</CardTitle>
                  <CardDescription className="text-slate-300">Empreendedor Digital</CardDescription>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative">
                <Quote className="absolute -top-2 -left-1 h-8 w-8 text-amber-500/20 rotate-180" />
                <p className="text-slate-200 text-lg leading-relaxed pl-6">
                  Usei a estratégia de criação de conteúdo digital do capítulo 4 e consegui lançar{" "}
                  <span className="text-amber-400 font-medium">3 produtos digitais em um mês</span>. O mais incrível é
                  que um deles começou a vender no mesmo dia do lançamento. Investimento que valeu cada centavo!
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-amber-500/10">
                <p className="text-amber-400 font-medium">
                  Resultado: <span className="text-white">3 produtos lançados e ROI positivo no primeiro dia</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-zinc-800/50 border border-amber-500/20 rounded-lg px-6 py-4 shadow-lg">
            <p className="text-xl text-white">
              <span className="text-amber-500 font-medium">+500 pessoas</span> já transformaram suas vidas com este
              ebook
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
