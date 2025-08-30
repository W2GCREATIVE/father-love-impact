import { BookOpen, Users, Apple } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import shepherdImage from "@/assets/shepherd-image.jpg";

const About = () => {
  const pillars = [
    {
      icon: BookOpen,
      title: "Educação e Capacitação",
      description: "Programas de alfabetização, ensino fundamental e capacitação profissional para gerar oportunidades reais."
    },
    {
      icon: Users,
      title: "Acompanhamento Pessoal",
      description: "Mentoria individualizada e apoio emocional, criando vínculos de confiança e crescimento pessoal."
    },
    {
      icon: Apple,
      title: "Cuidado Nutricional",
      description: "Alimentação adequada e educação nutricional, garantindo o desenvolvimento físico e cognitivo."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            A Missão do Instituto Abaixo
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Nosso compromisso é transformar a vida de crianças e adolescentes em regiões de 
            vulnerabilidade social com base em três pilares: educação, cuidado espiritual e 
            empoderamento. Acreditamos que, como filhos amados de Deus, todos têm um futuro 
            de propósito, e estamos aqui para ajudar a realizar esse propósito.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 lg:order-1">
            <img 
              src={shepherdImage} 
              alt="Pastor guiando suas ovelhas - símbolo da paternidade divina"
              className="rounded-2xl shadow-medium w-full"
            />
          </div>
          
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-heading font-bold text-foreground">
              Fundamentados no Amor Paternal
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Assim como um pastor cuida de suas ovelhas, acreditamos que Deus cuida de cada 
              criança com amor incondicional. Nossa missão é ser instrumento dessa providência 
              divina, oferecendo não apenas assistência, mas verdadeira transformação de vida.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Trabalhamos com a convicção de que cada criança é única, preciosa aos olhos de 
              Deus, e merece oportunidades para desenvolver todo seu potencial.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <Card key={index} className="card-impact border-0 p-6 text-center group">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-heading font-bold text-foreground mb-4">
                  {pillar.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;