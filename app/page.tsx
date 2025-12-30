import { Button } from "@/components/ui/button"
import { ScrollButton } from "@/components/scroll-button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MessageSquare,
  Mail,
  FileText,
  Calendar,
  Home,
  Shield,
  Clock,
  Users,
  CheckCircle2,
  AlertCircle,
  Video,
  MonitorSmartphone,
} from "lucide-react"

export default function ManualTrabalhoRemoto() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/modern-remote-work-technology-agricultural-innovat.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#15A34A]/50 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-10">
              <img src="https://app.falconagro.com.br/assets/LogoDark.svg" alt="Falcon" className="h-16 md:h-20" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Manual de Boas Práticas do Trabalho Remoto
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/95 leading-relaxed max-w-3xl mx-auto">
              Seu guia completo para colaboração eficiente, comunicação clara e produtividade no ambiente remoto da
              Falcon
            </p>
            <ScrollButton
              targetId="introducao"
              className="bg-white text-[#15A34A] hover:bg-white/90 font-semibold px-10 py-6 text-lg shadow-xl"
            >
              Começar a Ler
            </ScrollButton>
          </div>
        </div>
      </section>

      {/* Introdução */}
      <section id="introducao" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/diverse-team-remote-collaboration-video-call-happy.jpg"
                  alt="Equipe remota colaborando"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#15A34A]">Bem-vindo à Equipe Falcon</h2>
                <div className="space-y-5 text-lg text-foreground/80 leading-relaxed">
                  <p>
                    Na Falcon, a forma como trabalhamos reflete nosso compromisso com inovação e excelência no setor
                    agrícola.
                  </p>
                  <p>
                    Ser uma empresa 100% remota nos permite reunir os melhores talentos e nos desafia a criar um
                    ambiente onde todos se sintam conectados, produtivos e realizados.
                  </p>
                  <p>
                    Este manual é muito mais do que um guia técnico. Ele reflete nossa cultura e foi criado para ser sua
                    bússola no trabalho remoto, com orientações práticas que tornam o dia a dia mais fluido,
                    colaborativo e alinhado com nossos valores.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comunicação */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#15A34A]">Como nos Comunicamos</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Uma comunicação clara e eficiente é a base para a colaboração no universo remoto
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#15A34A]/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center mb-4">
                    <MessageSquare className="w-8 h-8 text-[#15A34A]" />
                  </div>
                  <CardTitle className="text-2xl">Slack</CardTitle>
                  <CardDescription className="text-base">Nossa principal ferramenta de comunicação</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    É onde tudo acontece, de conversas rápidas a alinhamentos estratégicos entre líderes, times, pares e
                    áreas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#15A34A]/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center mb-4">
                    <Mail className="w-8 h-8 text-[#15A34A]" />
                  </div>
                  <CardTitle className="text-2xl">E-mail</CardTitle>
                  <CardDescription className="text-base">Comunicação formal</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Utilizados principalmente para comunicações formais com clientes, áreas, parceiros e fornecedores.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#15A34A]/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center mb-4">
                    <FileText className="w-8 h-8 text-[#15A34A]" />
                  </div>
                  <CardTitle className="text-2xl">Confluence</CardTitle>
                  <CardDescription className="text-base">Documentação centralizada</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    O espaço certo para registrar e consultar documentações internas e técnicas.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-[#15A34A]/30">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-8 h-8 text-[#15A34A]" />
                  </div>
                  <CardTitle className="text-2xl">Jira</CardTitle>
                  <CardDescription className="text-base">Gestão de tarefas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Nossa ferramenta para acompanhar entregas e monitorar o progresso de tarefas individuais e dos
                    times.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Boas Práticas do Slack */}
            <Card className="border-[#15A34A] border-2 shadow-xl">
              <CardHeader className="bg-[#15A34A]/5">
                <CardTitle className="text-3xl text-[#15A34A]">Boas Práticas no Slack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 pt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="w-6 h-6 text-[#15A34A]" />
                      <h4 className="font-bold text-lg">Leia mensagens sem atribuir um tom</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Não leve mensagens para o lado pessoal ou interprete um tom agressivo que talvez não exista.
                      Lembre-se de que mensagens profissionais têm o objetivo de manter o trabalho fluindo. Considere
                      que quem enviou tem a melhor intenção e está apenas tentando resolver algo ou compartilhar
                      informações.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock className="w-6 h-6 text-[#15A34A]" />
                      <h4 className="font-bold text-lg">Mantenha seu status atualizado</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Como cada um está em um lugar, para facilitar a colaboração, mantenha seu status no Slack sempre
                      atualizado. Por exemplo, se estiver focado em uma tarefa importante, coloque "Focado"; se for
                      almoçar, marque "Almoço". Assim, seus colegas saberão se você está disponível para responder
                      rapidamente.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-[#15A34A]" />
                      <h4 className="font-bold text-lg">Prefira comunicação em grupos</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Sempre compartilhe as mensagens em grupos! Isso permite que todos se mantenham informados e
                      colaborem juntos. Por exemplo, se tiver dúvidas sobre um projeto, publique no canal
                      correspondente. Mensagens privadas devem ser reservadas apenas para assuntos pessoais ou questões
                      sensíveis.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <FileText className="w-6 h-6 text-[#15A34A]" />
                      <h4 className="font-bold text-lg">Dê contexto na primeira mensagem da thread</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Certifique-se de que cada conversa tenha um tópico claro. A primeira mensagem publicada no grupo
                      deve indicar o assunto da discussão, que servirá como título da thread. Exemplo: ao discutir sobre
                      um relatório, abra uma thread no canal específico e concentre os comentários nela.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <AlertCircle className="w-6 h-6 text-[#15A34A]" />
                      <h4 className="font-bold text-lg">Defina a urgência das mensagens</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      Nem todos temos o mesmo senso de urgência. Se precisa de uma resposta rápida, deixe isso claro.
                      Por exemplo: "Preciso de uma resposta até o final do dia, por favor". Isso ajuda seus colegas a
                      priorizarem melhor.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-mails Profissionais */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#15A34A]">E-mails Profissionais</h2>
                <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                  Garantindo clareza e profissionalismo em cada mensagem
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Manter uma boa comunicação por e-mail é fundamental para causar uma impressão positiva e estabelecer
                  relacionamentos sólidos com clientes, parceiros e colegas.
                </p>
              </div>
              <div className="relative h-[350px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/professional-email-communication-laptop-modern-off.jpg"
                  alt="Comunicação profissional por email"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <Card className="shadow-xl">
              <CardHeader className="bg-[#15A34A]/5">
                <CardTitle className="text-3xl text-[#15A34A]">Diretrizes para E-mails</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8 pt-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    1
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">Use um cumprimento formal</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Inicie sempre com uma saudação educada. E-mails formais: "Prezado(a) [Nome]"; E-mails informais:
                      "Olá [Nome]"; E-mails para grupos: "Olá, equipe".
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    2
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">Seja claro e objetivo</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Vá direto ao ponto, mas mantenha um tom cordial. Estruture seu texto em parágrafos curtos para
                      facilitar a leitura. Caso precise abordar vários tópicos, utilize marcadores ou numeração.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    3
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">Personalize o chamado</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Sempre responda utilizando o nome da pessoa, demonstrando atenção. Evite respostas genéricas como
                      "Segue aí" ou "Como pedido" sem contexto.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    4
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">Mostre disposição e respeito</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Inclua frases que demonstrem boa vontade: "Caso precise de algo mais, estou à disposição" ou
                      "Agradeço pela atenção e permaneço à disposição para esclarecimentos".
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    5
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-3">Finalize com assinatura profissional</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      Inclua uma despedida cordial: "Atenciosamente," ou "Cordialmente,". Certifique-se de ter uma
                      assinatura padrão com seu nome completo, cargo e contatos.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reuniões */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#15A34A]">Preparação para Reuniões</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Como garantir reuniões produtivas e eficientes no ambiente remoto
              </p>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src="/video-conference-meeting-professional-team-collabo.jpg"
                alt="Reunião virtual profissional"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center">
                      <Calendar className="w-8 h-8 text-[#15A34A]" />
                    </div>
                    <h4 className="font-bold text-lg">Pontualidade</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Entre na hora! Se estiver em outra reunião ou for atrasar, avise. Respeitar o tempo de todos é
                      essencial.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center">
                      <FileText className="w-8 h-8 text-[#15A34A]" />
                    </div>
                    <h4 className="font-bold text-lg">Estudo prévio</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Estude os tópicos antes! Chegar preparado e pronto para contribuir faz toda a diferença.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center">
                      <Video className="w-8 h-8 text-[#15A34A]" />
                    </div>
                    <h4 className="font-bold text-lg">Câmera ligada</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Sempre que possível, mantenha a câmera ligada! A presença visual aumenta a conexão e o
                      engajamento.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center">
                      <MessageSquare className="w-8 h-8 text-[#15A34A]" />
                    </div>
                    <h4 className="font-bold text-lg">Respostas completas</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Respostas curtas não ajudam. Vá além de "sim" ou "não" e contribua de maneira assertiva.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8 text-[#15A34A]" />
                    </div>
                    <h4 className="font-bold text-lg">Look profissional</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Nada de exageros, mas lembre-se que um visual alinhado transmite seriedade e profissionalismo.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-[#15A34A]/10 flex items-center justify-center">
                      <MonitorSmartphone className="w-8 h-8 text-[#15A34A]" />
                    </div>
                    <h4 className="font-bold text-lg">Compartilhamento de tela</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Vai compartilhar a tela? Feche tudo o que não é necessário – sem surpresas!
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Organização da Rotina */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
                <img
                  src="/home-office-workspace-organized-desk-laptop-plants.jpg"
                  alt="Workspace organizado"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#15A34A]">Organização da Rotina</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Dicas importantes para maximizar sua produtividade e bem-estar no trabalho remoto
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader className="bg-[#15A34A]/5">
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    <div className="w-12 h-12 rounded-xl bg-[#15A34A] flex items-center justify-center">
                      <Clock className="w-7 h-7 text-white" />
                    </div>
                    Estabeleça horários
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground leading-relaxed pt-6">
                  <p>
                    O seu horário de trabalho é flexível e deve ser alinhado com seu gestor, mas damos preferência para
                    que todos estejam conectados no horário comercial, das 9h às 18h.
                  </p>
                  <p>
                    O tempo de resposta na Falcon é muito importante. O ideal é que as mensagens recebidas sejam
                    respondidas em até 30 minutos – dentro do horário comercial.
                  </p>
                  <p>Evite agendar reuniões entre 12h e 14h para que todos possam fazer uma pausa para o almoço.</p>
                </CardContent>
              </Card>

              <Card className="shadow-xl hover:shadow-2xl transition-shadow">
                <CardHeader className="bg-[#15A34A]/5">
                  <CardTitle className="flex items-center gap-4 text-2xl">
                    <div className="w-12 h-12 rounded-xl bg-[#15A34A] flex items-center justify-center">
                      <Home className="w-7 h-7 text-white" />
                    </div>
                    Escolha um lugar para trabalhar
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="location-1" className="border-[#15A34A]/20">
                      <AccordionTrigger className="text-lg font-semibold hover:text-[#15A34A]">
                        Local silencioso
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        Dê preferência a um ambiente com o menor número possível de distrações. Um local afastado de
                        áreas de muito movimento é ideal para manter a concentração.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="location-2" className="border-[#15A34A]/20">
                      <AccordionTrigger className="text-lg font-semibold hover:text-[#15A34A]">
                        Conforto e ergonomia
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        Use uma cadeira confortável e ajustável para garantir uma boa postura. Certifique-se de que a
                        altura da mesa e do monitor esteja adequada para evitar dores nas costas e no pescoço.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="location-3" className="border-[#15A34A]/20">
                      <AccordionTrigger className="text-lg font-semibold hover:text-[#15A34A]">
                        Espaço organizado
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        Reduza ao máximo a bagunça e os itens desnecessários na mesa de trabalho. Use organizadores para
                        manter documentos e materiais de escritório acessíveis.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="location-4" className="border-[#15A34A]/20">
                      <AccordionTrigger className="text-lg font-semibold hover:text-[#15A34A]">
                        Separe trabalho da vida pessoal
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        Evite trabalhar em lugares associados ao lazer, como o sofá ou a cama. Criar uma separação
                        física ajuda o cérebro a identificar a hora de focar no trabalho.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="location-5" className="border-[#15A34A]/20">
                      <AccordionTrigger className="text-lg font-semibold hover:text-[#15A34A]">
                        Conexão e energia
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                        Escolha um lugar próximo de tomadas para carregar dispositivos e onde o sinal de Wi-Fi seja
                        estável. Isso evita interrupções desnecessárias no seu dia.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Segurança da Informação */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#15A34A]">Segurança da Informação</h2>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Protegendo dados confidenciais e mantendo a confiança de nossos clientes
              </p>
            </div>

            <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src="/cybersecurity-data-protection-secure-technology-sh.jpg"
                alt="Segurança da informação"
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="border-[#15A34A] border-2 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-[#15A34A]/10 to-[#15A34A]/5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#15A34A] flex items-center justify-center">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-[#15A34A]">Compromisso com a Segurança</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground leading-relaxed pt-8 text-base">
                <p>
                  Lidamos diariamente com informações confidenciais, como dados de clientes, integrantes do nosso time,
                  informações dos projetos e processos internos. Essas informações são exclusivas para atividades
                  relacionadas à empresa e devem ser protegidas.
                </p>
                <p>
                  Na Falcon, valorizamos a cultura de compartilhamento de informações para proporcionar uma visão ampla
                  do negócio. Por isso, é primordial que todos assumam a responsabilidade de proteger esses dados,
                  garantindo que não sejam expostos de forma inadequada.
                </p>
                <div className="bg-[#15A34A]/10 border-l-4 border-[#15A34A] p-6 rounded-r-xl">
                  <p className="font-bold text-foreground mb-3 text-lg">Importante:</p>
                  <p>
                    É indispensável preservar a confidencialidade das informações acessadas e seguir as diretrizes
                    estabelecidas no acordo de confidencialidade (NDA) assinado em seu primeiro dia na Falcon.
                  </p>
                </div>
                <div className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl">
                  <p className="font-bold text-foreground mb-3 text-lg">Em caso de perda de equipamento:</p>
                  <p>Seu gestor e o time de infraestrutura deverão ser comunicados imediatamente.</p>
                </div>
                <div className="pt-6 bg-secondary/30 p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <Video className="w-8 h-8 text-[#15A34A] flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-foreground mb-3 text-lg">Uso da câmera:</h4>
                      <p>
                        A abertura da câmera é imprescindível nos eventos da empresa e treinamentos. Encorajamos que
                        sempre abra sua câmera para aproximar as pessoas e facilitar a comunicação. A comunicação não
                        verbal é fundamental na interpretação de mensagens, especialmente no ambiente remoto.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer / CTA Final */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#15A34A] to-[#0f7a35] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="/team-collaboration-success-agriculture-technology.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Juntos Construímos o Futuro da Falcon</h2>
            <p className="text-xl mb-10 text-white/95 leading-relaxed">
              Temos o orgulho de ser uma empresa 100% remota. Essa escolha nos permite reunir os melhores talentos,
              independentemente de onde estejam. Nosso objetivo com este guia é fortalecer nossa cultura e garantir que
              todos trabalhem de forma colaborativa, responsável e conectada.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#15A34A] hover:bg-white/90 font-semibold px-10 py-6 text-lg shadow-2xl"
            >
              Baixar Manual em PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-sm">© 2025 Falcon. Sistema completo para classificação de grãos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
