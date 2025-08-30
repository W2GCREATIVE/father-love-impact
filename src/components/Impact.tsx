import { useEffect, useState } from "react";
import { Users, Utensils, GraduationCap, Heart, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Impact = () => {
  const [counters, setCounters] = useState({
    children: 0,
    meals: 0,
    classes: 0,
    mentors: 0,
    communities: 0,
    years: 0
  });

  const finalNumbers = {
    children: 600,
    meals: 100000,
    classes: 5000,
    mentors: 120,
    communities: 25,
    years: 8
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        children: Math.min(prev.children + Math.ceil(finalNumbers.children / steps), finalNumbers.children),
        meals: Math.min(prev.meals + Math.ceil(finalNumbers.meals / steps), finalNumbers.meals),
        classes: Math.min(prev.classes + Math.ceil(finalNumbers.classes / steps), finalNumbers.classes),
        mentors: Math.min(prev.mentors + Math.ceil(finalNumbers.mentors / steps), finalNumbers.mentors),
        communities: Math.min(prev.communities + Math.ceil(finalNumbers.communities / steps), finalNumbers.communities),
        years: Math.min(prev.years + Math.ceil(finalNumbers.years / steps), finalNumbers.years)
      }));
    }, stepDuration);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(finalNumbers);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const stats = [
    {
      icon: Users,
      number: counters.children,
      suffix: "+",
      label: "Crianças Atendidas",
      description: "Vidas transformadas através do amor e cuidado"
    },
    {
      icon: Utensils,
      number: counters.meals,
      suffix: "+",
      label: "Refeições Distribuídas",
      description: "Nutrição garantida para o desenvolvimento"
    },
    {
      icon: GraduationCap,
      number: counters.classes,
      suffix: "+",
      label: "Horas de Aulas",
      description: "Educação de qualidade como base do futuro"
    },
    {
      icon: Heart,
      number: counters.mentors,
      suffix: "+",
      label: "Mentores Ativos",
      description: "Voluntários dedicados à transformação"
    },
    {
      icon: MapPin,
      number: counters.communities,
      suffix: "+",
      label: "Comunidades Impactadas",
      description: "Alcance expandindo dia a dia"
    },
    {
      icon: Clock,
      number: counters.years,
      suffix: " anos",
      label: "De Dedicação",
      description: "Compromisso constante com a missão"
    }
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de beneficiário",
      quote: "Meu filho encontrou esperança e propósito. Hoje ele está na faculdade e sonha em ajudar outras crianças como ele foi ajudado."
    },
    {
      name: "João Santos",
      role: "Ex-beneficiário, hoje mentor",
      quote: "O Instituto me ensinou que sou filho de Deus e que posso fazer a diferença. Agora dedico minha vida a transformar outras vidas."
    },
    {
      name: "Ana Costa",
      role: "Investidora social",
      quote: "Ver o impacto real do meu investimento na vida dessas crianças não tem preço. É o amor de Deus em ação."
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Nosso Impacto: Mudando Realidades com o Amor do Pai
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Até o momento, já impactamos a vida de centenas de crianças, oferecendo não apenas 
            um futuro melhor, mas também uma experiência de fé que transforma vidas. Através 
            da fé em Cristo e com o apoio de mentores e investidores, conseguimos trazer 
            esperança real a essas comunidades.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="card-impact border-0 text-center group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-heading font-bold text-primary mb-2">
                  {stat.number.toLocaleString('pt-BR')}{stat.suffix}
                </div>
                
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {stat.label}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-foreground text-center mb-12">
            Histórias de Transformação
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-impact border-0">
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Cada Número Representa Uma Vida Transformada
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Por trás de cada estatística há uma história real de transformação, esperança renovada 
              e futuro reconstruído. Estes números são o testemunho vivo do amor de Deus em ação 
              através de pessoas como você que acreditam no poder da transformação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;