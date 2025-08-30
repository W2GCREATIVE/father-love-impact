import { useState } from "react";
import { Play, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const videoTestimonials = [
    {
      id: 1,
      name: "Lucas, 16 anos",
      role: "Ex-beneficiário, hoje líder jovem",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      quote: "Antes eu não acreditava no meu futuro. Hoje estou terminando o ensino médio e já tenho planos para a faculdade. O Instituto me mostrou que sou filho de Deus e que posso alcançar qualquer sonho.",
      impact: "Líder de projeto comunitário"
    },
    {
      id: 2,
      name: "Marina Santos",
      role: "Mentora há 3 anos",
      thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&auto=format",
      quote: "Cada criança que acompanho me ensina sobre o amor incondicional. Ver o crescimento deles é um privilégio. Eles transformaram minha vida tanto quanto eu a deles.",
      impact: "Acompanha 4 crianças atualmente"
    },
    {
      id: 3,
      name: "Carlos Eduardo",
      role: "Investidor social",
      thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&auto=format",
      quote: "Investir no Instituto Abaixo foi a melhor decisão que tomei. Ver relatórios reais de como minha contribuição muda vidas não tem preço. É Deus usando nossa generosidade.",
      impact: "Patrocina 10 crianças mensalmente"
    },
    {
      id: 4,
      name: "Beatriz Silva",
      role: "Mãe de beneficiário",
      thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&auto=format",
      quote: "Minha filha chegou aqui sem esperança. Hoje ela sonha em ser professora para ajudar outras crianças. O Instituto devolveu nossa fé no futuro.",
      impact: "Filha no programa há 2 anos"
    }
  ];

  const writtenTestimonials = [
    {
      name: "Padre José Henrique",
      role: "Pároco local",
      quote: "O trabalho do Instituto Abaixo reflete verdadeiramente o coração de Cristo. Ver famílias inteiras sendo transformadas pelo amor de Deus é um testemunho poderoso da providência divina em ação.",
      church: "Paróquia São José"
    },
    {
      name: "Dra. Amanda Costa",
      role: "Pediatra voluntária",
      quote: "O acompanhamento nutricional e de saúde das crianças é exemplar. Em dois anos, conseguimos reverter quadros de desnutrição e garantir desenvolvimento adequado para 95% das crianças atendidas.",
      specialty: "Pediatria e Nutrição"
    },
    {
      name: "Professor Miguel Santos",
      role: "Coordenador pedagógico",
      quote: "O progresso educacional é impressionante. Crianças que chegavam sem saber ler hoje estão acima da média nacional. O amor e dedicação fazem toda a diferença no aprendizado.",
      school: "Escola Municipal Dom Bosco"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % videoTestimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + videoTestimonials.length) % videoTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Histórias de Transformação
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nossos resultados são reais e visíveis na vida das crianças, mentores e investidores. 
            Ouça o que eles têm a dizer sobre o impacto deste trabalho.
          </p>
        </div>

        {/* Video Testimonials Carousel */}
        <div className="mb-20">
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
            Depoimentos em Vídeo
          </h3>
          
          <div className="relative max-w-4xl mx-auto">
            <Card className="card-impact border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Video Thumbnail */}
                  <div className="relative group">
                    <img 
                      src={videoTestimonials[activeTestimonial].thumbnail}
                      alt={videoTestimonials[activeTestimonial].name}
                      className="w-full h-64 md:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <Button className="bg-white/20 hover:bg-white/30 border-2 border-white rounded-full p-4">
                        <Play className="w-8 h-8 text-white ml-1" />
                      </Button>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <Quote className="w-8 h-8 text-primary mb-4" />
                    
                    <blockquote className="text-muted-foreground italic leading-relaxed mb-6">
                      "{videoTestimonials[activeTestimonial].quote}"
                    </blockquote>
                    
                    <div className="border-t border-border pt-4">
                      <div className="font-semibold text-foreground text-lg">
                        {videoTestimonials[activeTestimonial].name}
                      </div>
                      <div className="text-primary font-medium">
                        {videoTestimonials[activeTestimonial].role}
                      </div>
                      <div className="text-sm text-muted-foreground mt-2">
                        {videoTestimonials[activeTestimonial].impact}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center mt-6 space-x-4">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {videoTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeTestimonial ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Written Testimonials */}
        <div>
          <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-8">
            Reconhecimento da Comunidade
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {writtenTestimonials.map((testimonial, index) => (
              <Card key={index} className="card-impact border-0 h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <Quote className="w-6 h-6 text-primary mb-4" />
                  
                  <blockquote className="text-muted-foreground italic leading-relaxed mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-primary text-sm">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      {testimonial.church || testimonial.specialty || testimonial.school}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Sua História Pode Ser a Próxima
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada depoimento representa uma vida transformada pelo amor de Deus. 
              Seja como mentor, investidor ou voluntário, você pode fazer parte 
              desta história de transformação.
            </p>
            <Button 
              onClick={() => {
                const element = document.querySelector("#participate");
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-cta"
            >
              Comece Sua Jornada Conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;