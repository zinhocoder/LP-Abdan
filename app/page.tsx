import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Clock, Target, Brain, Lightbulb, DollarSign, ShieldCheck } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CountdownTimer } from "@/components/countdown-timer"
import { StorySection } from "@/components/story-section"
import { FutureWorks } from "@/components/future-works"
import { FaqSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container flex flex-col-reverse lg:flex-row lg:items-center min-h-[90vh] lg:min-h-screen py-12 lg:py-0">
          <div className="lg:w-1/2 lg:pr-8 z-10 mt-8 lg:mt-0">
            <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
              DESCUBRA O SEGREDO DA NOVA ERA
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                Renda em 60 Minutos:
              </span>
              <span className="block mt-2 text-white">
                O <span className="text-amber-500">Segredo</span> da Nova Era da{" "}
                <span className="text-amber-500">IA</span>
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed max-w-xl text-slate-300">
              Enquanto você <span className="font-bold text-amber-400">dorme</span>, a Inteligência Artificial pode
              estar <span className="font-bold text-amber-400">gerando renda</span> para você. Descubra como{" "}
              <span className="font-bold text-amber-400">pessoas comuns</span> estão lucrando com IA em{" "}
              <span className="font-bold text-amber-400">tempo recorde</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 sm:px-8 py-6 sm:py-7 text-lg sm:text-xl"
              >
                Garantir Meu Ebook Agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-amber-500/50 text-amber-500 hover:bg-amber-500/10 py-6 sm:py-7 text-lg sm:text-xl"
              >
                Saiba Mais
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center text-base text-slate-400">
              <div className="flex items-center mr-6 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Acesso imediato após a compra</span>
              </div>
              <div className="flex items-center mb-2">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                <span>Garantia de 7 dias</span>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative h-[350px] sm:h-[400px] lg:h-[700px]">
            {/* Overlay amarelo sutil para ambas as versões */}
            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent mix-blend-overlay z-10"></div>

            {/* Ajuste de brilho para garantir que a imagem não fique apagada */}
            <Image
              src="masknobackground.png"
              alt="Profissional com máscara dourada representando o conhecimento exclusivo da IA"
              className="object-cover brightness-110 contrast-105"
              quality={100}
              fill
              style={{
                objectPosition: "center",
              }}
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0 lg:w-2/3"></div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
              VANTAGENS EXCLUSIVAS
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Por que este ebook vai <span className="text-amber-500">transformar</span> sua vida financeira
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl">
              A <span className="font-bold text-amber-400">revolução da IA</span> está criando milionários enquanto você
              lê isto. Descubra como aproveitar todo o potencial da inteligência artificial para criar
              <span className="font-bold text-amber-400"> novas fontes de renda</span> de forma rápida, ética e
              sustentável.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-zinc-800/60 border-zinc-700 shadow-lg hover:shadow-amber-500/5 transition-all hover:scale-105 h-full">
              <CardHeader>
                <Clock className="h-12 w-12 text-amber-500 mb-2" />
                <CardTitle className="text-xl">Economize Tempo</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Aprenda a utilizar as ferramentas de IA para automatizar tarefas e multiplicar sua produtividade em
                  até 10x.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800/60 border-zinc-700 shadow-lg hover:shadow-amber-500/5 transition-all hover:scale-105 h-full">
              <CardHeader>
                <Target className="h-12 w-12 text-amber-500 mb-2" />
                <CardTitle className="text-xl">Estratégias Objetivas</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Métodos práticos e diretos que você pode implementar imediatamente, sem conhecimento técnico avançado.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800/60 border-zinc-700 shadow-lg hover:shadow-amber-500/5 transition-all hover:scale-105 h-full">
              <CardHeader>
                <Brain className="h-12 w-12 text-amber-500 mb-2" />
                <CardTitle className="text-xl">IA Explicada</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Entenda os fundamentos da inteligência artificial de forma simples e aplicável ao seu negócio ou
                  carreira.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800/60 border-zinc-700 shadow-lg hover:shadow-amber-500/5 transition-all hover:scale-105 h-full">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-amber-500 mb-2" />
                <CardTitle className="text-xl">Ideias Inovadoras</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Descubra nichos de mercado inexplorados e oportunidades emergentes no campo da IA que poucos conhecem.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800/60 border-zinc-700 shadow-lg hover:shadow-amber-500/5 transition-all hover:scale-105 h-full">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-amber-500 mb-2" />
                <CardTitle className="text-xl">Renda Rápida</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Aprenda a implementar estratégias que geram resultados financeiros em tempo recorde, mesmo enquanto
                  você dorme.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-zinc-800/60 border-zinc-700 shadow-lg hover:shadow-amber-500/5 transition-all hover:scale-105 h-full">
              <CardHeader>
                <ShieldCheck className="h-12 w-12 text-amber-500 mb-2" />
                <CardTitle className="text-xl">Abordagem Ética</CardTitle>
                <CardDescription className="text-slate-400 text-base">
                  Métodos responsáveis e sustentáveis que respeitam normas e padrões éticos do mercado digital atual.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* O que você vai aprender */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4 text-base px-3 py-1">
              CONTEÚDO EXCLUSIVO
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              O que você vai <span className="text-amber-500">descobrir</span> neste ebook
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl">
              Um guia completo e prático com estratégias{" "}
              <span className="font-bold text-amber-400">testadas e comprovadas</span> para gerar renda utilizando as
              mais modernas ferramentas de IA que{" "}
              <span className="font-bold text-amber-400">ninguém está te contando</span>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-amber-500/20">
                  <AccordionTrigger className="text-xl font-medium">
                    A Nova Era da Inteligência Artificial
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-lg">
                    Entenda como a IA está transformando o mercado de trabalho e criando novas oportunidades de negócio
                    nunca antes imaginadas.{" "}
                    <span className="text-amber-400">Quem não se adaptar ficará para trás.</span>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="border-amber-500/20">
                  <AccordionTrigger className="text-xl font-medium">
                    Transformando Trabalho e Negócios com IA
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-lg">
                    Descubra como integrar a IA nos seus processos de trabalho para aumentar produtividade e criar novas
                    fontes de receita. <span className="text-amber-400">Faça em minutos o que antes levava dias.</span>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="border-amber-500/20">
                  <AccordionTrigger className="text-xl font-medium">
                    Ferramentas de IA que Potencializam Produtividade
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-lg">
                    Conheça as principais ferramentas de IA disponíveis no mercado e como utilizá-las para multiplicar
                    sua capacidade produtiva.{" "}
                    <span className="text-amber-400">Trabalhe como se tivesse uma equipe inteira.</span>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4" className="border-amber-500/20">
                  <AccordionTrigger className="text-xl font-medium">
                    Estratégias para Gerar Renda em 60 Minutos
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-lg">
                    Métodos práticos e diretos que você pode aplicar hoje mesmo para começar a gerar resultados
                    financeiros com a ajuda da IA.{" "}
                    <span className="text-amber-400">Resultados desde o primeiro dia.</span>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5" className="border-amber-500/20">
                  <AccordionTrigger className="text-xl font-medium">Casos de Sucesso e Exemplos Reais</AccordionTrigger>
                  <AccordionContent className="text-slate-300 text-lg">
                    Histórias reais e inspiradoras de pessoas que utilizaram a IA para transformar suas finanças e mudar
                    de vida. <span className="text-amber-400">Pessoas comuns que hoje faturam 5 dígitos mensais.</span>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="relative h-[350px] sm:h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 to-zinc-900/50 z-10 rounded-lg"></div>
              <Image
                src="/maskia2.png?height=600&width=600"
                alt="Visualização do ebook"
                className="object-cover"
                fill
              />
              <div className="absolute bottom-8 left-8 z-20">
                <Badge className="bg-amber-500 text-black mb-2 text-base">BÔNUS EXCLUSIVO</Badge>
                <h3 className="text-2xl font-bold mb-2">Guia de Prompts para IA</h3>
                <p className="text-base text-slate-300 max-w-xs">
                  Receba um guia exclusivo com os melhores prompts para extrair resultados de alta qualidade das
                  ferramentas de IA e superar a concorrência.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <TestimonialsSection />

      {/* Perguntas Frequentes */}
      <FaqSection />

      {/* Preço e CTA */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-2xl p-6 sm:p-8 md:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10">
              <div className="text-center mb-8">
                <Badge className="bg-red-500 text-white hover:bg-red-600 mb-4 text-base px-3 py-1">
                  OFERTA POR TEMPO LIMITADO
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                  Esta oferta <span className="text-red-500">expira</span> em:
                </h2>

                <CountdownTimer className="my-8" />

                <p className="text-slate-300 max-w-2xl mx-auto text-lg sm:text-xl mt-8">
                  Invista em seu futuro <span className="font-bold text-amber-400">agora</span> e desbloqueie o
                  potencial da IA para criar fontes de renda rápidas e escaláveis{" "}
                  <span className="font-bold text-amber-400">antes que seja tarde demais</span>.
                </p>
              </div>

              <div className="flex flex-col items-center mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-slate-400 line-through text-2xl">R$ 197,00</span>
                  <Badge className="bg-green-500/20 text-green-500 hover:bg-green-500/30 text-base">50% OFF</Badge>
                </div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-amber-500 mb-6">R$ 97,00</div>
                <p className="text-base text-slate-400 mb-8">
                  Pagamento único • Acesso vitalício • Atualizações incluídas
                </p>

                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 sm:px-12 py-6 sm:py-8 text-lg sm:text-xl animate-pulse w-full sm:w-auto"
                >
                  Quero Garantir Minha Vaga Agora <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <p className="mt-4 text-base text-slate-400 flex items-center">
                  <ShieldCheck className="h-5 w-5 mr-2 text-green-500" />
                  Pagamento seguro • Garantia de 7 dias
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                  <p className="font-medium text-amber-500 text-lg">Ebook Completo</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                  <p className="font-medium text-amber-500 text-lg">Guia de Prompts</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                  <p className="font-medium text-amber-500 text-lg">Atualizações</p>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/50 hover:bg-zinc-700/50 transition-colors">
                  <p className="font-medium text-amber-500 text-lg">Suporte por Email</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autor */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container px-4 sm:px-6">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-zinc-800 relative flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 to-transparent z-10 rounded-full"></div>
              <Image src="/maskia.png?height=200&width=200" alt="Autor do ebook" className="object-cover" fill />
            </div>
            <div>
              <Badge className="bg-amber-500/20 text-amber-500 hover:bg-amber-500/30 mb-4">SOBRE O AUTOR</Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Abidan</h2>
              <p className="text-slate-300 mb-4">
                Especialista em IA e empreendedorismo digital, Abidan tem mais de 10 anos de experiência no mercado de
                tecnologia e negócios online. Já ajudou centenas de pessoas a transformarem suas carreiras e finanças
                através do uso inteligente da tecnologia.
              </p>
              <p className="text-slate-300">
                Com uma abordagem prática e direta, Abidan compartilha neste ebook suas estratégias comprovadas para
                gerar renda rápida com IA, democratizando o acesso ao conhecimento que está revolucionando o mercado de
                trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Futuros Trabalhos */}
      <FutureWorks />

      {/* Footer com CTA final */}
      <section className="py-12 md:py-16 bg-black border-t border-zinc-800">
        <div className="container px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
            <span className="text-amber-500">Pronto</span> para transformar sua renda com o poder da IA?
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            A revolução da IA está acontecendo <span className="font-bold text-amber-400">agora</span>. Quem agir
            primeiro terá vantagem competitiva.
            <span className="font-bold text-amber-400"> Não fique para trás</span>.
          </p>
          <Button
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-6 sm:px-8 py-6 sm:py-7 text-lg sm:text-xl animate-pulse w-full sm:w-auto"
          >
            Garantir Meu Ebook Agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-slate-400 text-sm mt-12">
            &copy; {new Date().getFullYear()} Renda em 60 Minutos. Todos os direitos reservados.
          </p>
        </div>
      </section>
    </main>
  )
}
