import { DemoBackgroundPaths } from "@/components/demos/DemoBackgroundPaths";
import { DemoTestimonials } from "@/components/demos/DemoTestimonials";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ComponentsDemo = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button 
          variant="outline" 
          onClick={() => window.history.back()}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Site Principal
        </Button>
      </div>

      {/* Background Paths Demo */}
      <section className="mb-20">
        <DemoBackgroundPaths />
      </section>

      {/* Testimonials Demo */}
      <section className="py-20 bg-gradient-to-b from-accent/30 to-background">
        <DemoTestimonials />
      </section>

      {/* Information Section */}
      <section className="py-20 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
          Componentes Integrados com Sucesso
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
          Estes são os novos componentes UI integrados ao projeto do Instituto Abaixo. 
          Eles utilizam Framer Motion para animações suaves e foram adaptados para funcionar 
          perfeitamente com nossa stack React + TypeScript + Tailwind CSS.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-3">Background Paths</h3>
            <p className="text-muted-foreground text-sm">
              Componente de fundo animado com SVG paths que se movem suavemente. 
              Perfeito para criar hero sections impactantes com animações de texto por letra.
            </p>
          </div>
          
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold text-foreground mb-3">Testimonials Widget</h3>
            <p className="text-muted-foreground text-sm">
              Widget de depoimentos com sistema de "load more", imagens de perfil e 
              integração com redes sociais. Adaptado com conteúdo real do Instituto.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentsDemo;