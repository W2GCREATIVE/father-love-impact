import { GraduationCap, Heart, Utensils, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: GraduationCap,
      title: "Educação e Capacitação",
      description: "Oferecemos programas de alfabetização, ensino fundamental e cursos de empreendedorismo, criando uma base sólida para o futuro.",
      details: ["Alfabetização para todas as idades", "Reforço escolar", "Cursos profissionalizantes", "Empreendedorismo jovem"]
    },
    {
      icon: Heart,
      title: "Acompanhamento Pessoal",
      description: "Mentoria individualizada e sessões de apoio emocional e espiritual, fortalecendo a autoestima e a fé.",
      details: ["Mentoria individual", "Apoio emocional", "Orientação espiritual", "Desenvolvimento pessoal"]
    },
    {
      icon: Utensils,
      title: "Cuidado Nutricional",
      description: "Distribuição de refeições nutritivas e educação alimentar, garantindo o desenvolvimento físico adequado.",
      details: ["Refeições balanceadas", "Educação nutricional", "Acompanhamento médico", "Suplementação quando necessário"]
    },
    {
      icon: TrendingUp,
      title: "Empoderamento e Autonomia",
      description: "Desenvolvimento de habilidades para a vida, preparando os jovens para serem agentes de transformação em suas comunidades.",
      details: ["Liderança jovem", "Projetos comunitários", "Inserção no mercado", "Multiplicação do impacto"]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Como Nossa Ação Transforma Vidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nosso modelo é simples, mas profundamente eficaz. Oferecemos apoio educacional, 
            emocional e espiritual, criando um ciclo de transformação que vai do ensino ao 
            crescimento espiritual, até a autossuficiência e empoderamento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="card-impact border-0 group relative overflow-hidden">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-heading font-bold text-foreground mb-3 text-center">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center">
                  {step.description}
                </p>

                <div className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>

                {/* Step Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-accent to-accent/50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Um Ciclo de Transformação Contínua
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Cada etapa do processo se conecta com as demais, criando um ciclo virtuoso de 
              crescimento. Os jovens que recebem nosso apoio hoje se tornam os mentores e 
              líderes de amanhã, multiplicando o impacto em suas comunidades e perpetuando 
              o amor de Deus através de suas próprias vidas transformadas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;