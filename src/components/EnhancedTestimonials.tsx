import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const EnhancedTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Lucas, 16 anos",
      role: "Ex-beneficiário, hoje líder jovem",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&auto=format",
      quote: "Antes eu não acreditava no meu futuro. Hoje estou terminando o ensino médio e já tenho planos para a faculdade. O Instituto me mostrou que sou filho de Deus e que posso alcançar qualquer sonho.",
      impact: "Líder de projeto comunitário",
      color: "from-primary/20 to-secondary/20"
    },
    {
      id: 2,
      name: "Marina Santos",
      role: "Mentora há 3 anos",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&auto=format",
      quote: "Cada criança que acompanho me ensina sobre o amor incondicional. Ver o crescimento deles é um privilégio. Eles transformaram minha vida tanto quanto eu a deles.",
      impact: "Acompanha 4 crianças atualmente",
      color: "from-secondary/20 to-primary/20"
    },
    {
      id: 3,
      name: "Carlos Eduardo",
      role: "Investidor social",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&auto=format",
      quote: "Investir no Instituto Abaixo foi a melhor decisão que tomei. Ver relatórios reais de como minha contribuição muda vidas não tem preço. É Deus usando nossa generosidade.",
      impact: "Patrocina 10 crianças mensalmente",
      color: "from-primary/15 to-secondary/15"
    },
    {
      id: 4,
      name: "Beatriz Silva",
      role: "Mãe de beneficiário",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&auto=format",
      quote: "Minha filha chegou aqui sem esperança. Hoje ela sonha em ser professora para ajudar outras crianças. O Instituto devolveu nossa fé no futuro.",
      impact: "Filha no programa há 2 anos",
      color: "from-secondary/25 to-primary/25"
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="enhanced-testimonials" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6"
          >
            Vidas Transformadas Pelo Amor
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Cada história é única, mas todas compartilham o mesmo denominador: 
            o poder transformador do amor incondicional de Deus em ação.
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className={`overflow-hidden border-0 bg-gradient-to-br ${testimonials[activeTestimonial].color} backdrop-blur-sm`}>
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-96">
                      <img 
                        src={testimonials[activeTestimonial].image}
                        alt={testimonials[activeTestimonial].name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <Quote className="w-12 h-12 text-primary mb-6 opacity-60" />
                      
                      <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 font-medium">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      
                      <div className="border-t border-border/50 pt-6">
                        <div className="font-bold text-xl text-foreground mb-1">
                          {testimonials[activeTestimonial].name}
                        </div>
                        <div className="text-primary font-semibold mb-2">
                          {testimonials[activeTestimonial].role}
                        </div>
                        <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2 inline-block">
                          {testimonials[activeTestimonial].impact}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-6">
            <Button
              onClick={prevTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full w-12 h-12 p-0 border-2 hover:border-primary hover:bg-primary/10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-primary scale-125' 
                      : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            
            <Button
              onClick={nextTestimonial}
              variant="outline"
              size="sm"
              className="rounded-full w-12 h-12 p-0 border-2 hover:border-primary hover:bg-primary/10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20 max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Sua História Também Pode Transformar Vidas
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cada depoimento representa uma vida tocada pelo amor de Deus. 
              Junte-se a nós e faça parte desta história de transformação.
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonials;