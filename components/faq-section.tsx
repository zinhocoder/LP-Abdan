import { Badge } from "@/components/ui/badge"
import { HelpCircle, Check, Clock, PenToolIcon as Tool, RefreshCw, ShieldCheck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-800 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
            DÚVIDAS FREQUENTES
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Perguntas <span className="text-amber-500">Frequentes</span>
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-xl">
            Respostas para as dúvidas mais comuns sobre o ebook e as estratégias apresentadas.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-6">
            <AccordionItem value="faq-1" className="border-none bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg">
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-zinc-700/50 transition-colors [&[data-state=open]]:bg-zinc-700/50">
                <div className="flex items-center">
                  <HelpCircle className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
                  <span>Eu preciso ter conhecimento técnico em IA?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-lg px-6 py-4 leading-relaxed">
                <div className="flex">
                  <Check className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">Não</span>. O ebook foi desenvolvido para que{" "}
                    <span className="text-amber-400 font-medium">qualquer pessoa</span>, mesmo sem conhecimento técnico,
                    possa aplicar as estratégias. Todas as ferramentas e métodos são explicados de forma{" "}
                    <span className="text-amber-400 font-medium">simples e direta</span>, com tutoriais passo a passo.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="border-none bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg">
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-zinc-700/50 transition-colors [&[data-state=open]]:bg-zinc-700/50">
                <div className="flex items-center">
                  <Clock className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
                  <span>Quanto tempo leva para ver resultados?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-lg px-6 py-4 leading-relaxed">
                <div className="flex">
                  <Check className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    As estratégias são pensadas para gerar resultados{" "}
                    <span className="text-amber-400 font-medium">rápidos</span>. Muitos leitores relatam primeiros
                    ganhos em <span className="text-amber-400 font-medium">poucas horas ou dias</span> após a
                    implementação. No entanto, os resultados podem variar conforme sua dedicação e nicho escolhido.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="border-none bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg">
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-zinc-700/50 transition-colors [&[data-state=open]]:bg-zinc-700/50">
                <div className="flex items-center">
                  <Tool className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
                  <span>As ferramentas mencionadas no ebook são pagas?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-lg px-6 py-4 leading-relaxed">
                <div className="flex">
                  <Check className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    O ebook aborda tanto ferramentas <span className="text-amber-400 font-medium">gratuitas</span>{" "}
                    quanto pagas. Você pode começar com as opções gratuitas e, conforme for crescendo, investir nas
                    versões pagas que oferecem mais recursos. Indicamos{" "}
                    <span className="text-amber-400 font-medium">alternativas para todos os orçamentos</span>.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="border-none bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg">
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-zinc-700/50 transition-colors [&[data-state=open]]:bg-zinc-700/50">
                <div className="flex items-center">
                  <RefreshCw className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
                  <span>O ebook tem atualizações?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-lg px-6 py-4 leading-relaxed">
                <div className="flex">
                  <Check className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">Sim!</span> O campo da IA evolui rapidamente e por isso
                    oferecemos <span className="text-amber-400 font-medium">atualizações periódicas</span> do conteúdo.
                    Você terá acesso a <span className="text-amber-400 font-medium">todas as atualizações futuras</span>{" "}
                    sem custo adicional.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="border-none bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg">
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-zinc-700/50 transition-colors [&[data-state=open]]:bg-zinc-700/50">
                <div className="flex items-center">
                  <ShieldCheck className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
                  <span>Existe garantia de resultados?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-lg px-6 py-4 leading-relaxed">
                <div className="flex">
                  <Check className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    Os resultados dependem da implementação correta das estratégias e de fatores individuais. No
                    entanto, oferecemos{" "}
                    <span className="text-amber-400 font-medium">garantia de satisfação de 7 dias</span>. Se você não
                    ficar satisfeito, <span className="text-amber-400 font-medium">devolvemos seu investimento</span>{" "}
                    sem questionamentos.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="border-none bg-zinc-800/50 rounded-xl overflow-hidden shadow-lg">
              <AccordionTrigger className="text-xl font-medium px-6 py-4 hover:bg-zinc-700/50 transition-colors [&[data-state=open]]:bg-zinc-700/50">
                <div className="flex items-center">
                  <HelpCircle className="text-amber-500 mr-3 h-6 w-6 flex-shrink-0" />
                  <span>Preciso ter experiência em negócios digitais?</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 text-lg px-6 py-4 leading-relaxed">
                <div className="flex">
                  <Check className="text-green-500 mr-3 h-6 w-6 flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-bold text-white">Absolutamente não</span>. O ebook foi criado pensando em{" "}
                    <span className="text-amber-400 font-medium">iniciantes</span>. Explicamos tudo desde o básico,
                    incluindo como criar suas primeiras ofertas, como encontrar clientes e como escalar seu negócio
                    usando IA como seu principal{" "}
                    <span className="text-amber-400 font-medium">diferencial competitivo</span>.
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}
