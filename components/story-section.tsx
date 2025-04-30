import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, TrendingUp, Award, Clock } from "lucide-react"

export function StorySection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-800 to-zinc-900 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="container px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
            A HISTÓRIA POR TRÁS DO MÉTODO
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            De <span className="text-amber-500">desempregado</span> a empreendedor digital em{" "}
            <span className="text-amber-500">30 dias</span>
          </h2>
        </div>

        <div className="bg-zinc-800/50 border border-amber-500/10 rounded-xl p-6 sm:p-8 mb-8 sm:mb-10 shadow-lg">
          <div className="flex items-center mb-4">
            <Calendar className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold">O Início da Jornada</h3>
          </div>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            Em 2023, <span className="text-amber-400 font-medium">Marcos estava desesperado</span>. Após perder seu
            emprego de 12 anos em uma multinacional, ele tinha apenas 3 meses de reserva financeira e contas se
            acumulando.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            Foi quando ele descobriu o poder da Inteligência Artificial para gerar renda. No início, como todos, ele
            estava <span className="text-amber-400 font-medium">cético</span>. "Como uma tecnologia poderia me ajudar a
            ganhar dinheiro tão rapidamente?"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 sm:mb-10">
          <div className="bg-zinc-800/50 border border-amber-500/10 rounded-xl p-6 shadow-lg h-full">
            <div className="flex items-center mb-4">
              <Clock className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold">Os Primeiros Dias</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed">
              Ele começou aplicando uma estratégia simples: usar IA para criar conteúdo digital e vendê-lo online.{" "}
              <span className="text-amber-400 font-medium">No primeiro dia, nada aconteceu</span>. No segundo, também
              não.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-3">
              No terceiro dia, porém, ele fez sua{" "}
              <span className="text-amber-400 font-medium">primeira venda: R$ 47,00</span>. Não era muito, mas provou
              que o método funcionava.
            </p>
          </div>

          <div className="bg-zinc-800/50 border border-amber-500/10 rounded-xl p-6 shadow-lg h-full">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold">Crescimento Exponencial</h3>
            </div>
            <p className="text-base sm:text-lg leading-relaxed">
              Empolgado, ele refinou sua abordagem. Ao final da primeira semana, já havia faturado{" "}
              <span className="text-amber-400 font-medium">R$ 1.200,00</span>.
            </p>
            <p className="text-base sm:text-lg leading-relaxed mt-3">
              No final do mês, impressionantes{" "}
              <span className="text-amber-400 font-medium text-xl sm:text-2xl">R$ 8.750,00</span> - mais do que ganhava
              no emprego anterior.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-zinc-800/80 via-amber-900/10 to-zinc-800/80 border border-amber-500/10 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex items-center mb-4">
            <Award className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-bold">O Segredo do Sucesso</h3>
          </div>
          <p className="text-lg sm:text-xl leading-relaxed mb-4">
            O mais surpreendente? Ele trabalhava apenas{" "}
            <span className="text-amber-400 font-medium text-xl sm:text-2xl">2 horas por dia</span>. O restante do
            tempo, a IA trabalhava para ele, gerando renda enquanto dormia.
          </p>

          <p className="text-lg sm:text-xl leading-relaxed">
            Hoje, Marcos compartilha seu método neste ebook, revelando exatamente como qualquer pessoa pode replicar seu
            sucesso, mesmo <span className="text-amber-400 font-medium">sem conhecimento técnico</span> ou experiência
            prévia.
          </p>

          <div className="mt-8 bg-zinc-900/50 p-4 sm:p-6 rounded-lg border-l-4 border-amber-500">
            <p className="text-xl sm:text-2xl font-medium text-center italic">
              "A pergunta é: você vai continuar apenas observando a revolução da IA ou vai fazer parte dela?"
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-10">
          <a href="#preco" className="flex items-center text-amber-500 hover:text-amber-400 text-lg font-medium">
            Quero conhecer este método agora <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
