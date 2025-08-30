import { useState } from "react";
import { Heart, DollarSign, Users, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Participate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const participationTypes = [
    {
      icon: Heart,
      title: "Seja um Mentor",
      description: "Dedique algumas horas por semana para acompanhar e orientar uma criança ou adolescente em sua jornada de crescimento.",
      benefits: ["Impacto direto na vida de uma criança", "Treinamento completo oferecido", "Acompanhamento contínuo da equipe"],
      buttonText: "Quero ser Mentor"
    },
    {
      icon: DollarSign,
      title: "Invista Agora",
      description: "Sua contribuição financeira permite expandir nossos programas e alcançar mais crianças com educação, alimentação e cuidado.",
      benefits: ["Relatórios periódicos de impacto", "Transparência total dos recursos", "Certificado de doação para IR"],
      buttonText: "Fazer Doação"
    },
    {
      icon: Users,
      title: "Voluntarie-se",
      description: "Contribua com seus talentos e habilidades em atividades específicas: aulas, oficinas, eventos e muito mais.",
      benefits: ["Flexibilidade de horários", "Atividades alinhadas com seus talentos", "Comunidade engajada de voluntários"],
      buttonText: "Ser Voluntário"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTypeSelect = (type: string) => {
    setFormData({
      ...formData,
      type
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.type) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Em breve entraremos em contato para dar início à sua jornada conosco.",
      });
      
      setFormData({
        name: "",
        email: "",
        phone: "",
        type: "",
        message: ""
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="participate" className="py-20 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Junte-se à Missão de Transformar Vidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            A transformação começa com você. Seja parte desta missão como mentor, investidor 
            ou voluntário, e ajude-nos a fazer a diferença na vida de crianças e adolescentes.
          </p>
        </div>

        {/* Participation Options */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {participationTypes.map((type, index) => (
            <Card key={index} className="card-impact border-0 group h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <type.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground">
                    {type.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {type.description}
                </p>

                <div className="space-y-3 mb-6">
                  {type.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleTypeSelect(type.title)}
                  className={`btn-cta w-full ${formData.type === type.title ? 'bg-primary hover:bg-primary-dark' : ''}`}
                >
                  {type.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="card-impact border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-heading font-bold text-foreground text-center mb-6">
                {formData.type ? `Inscrição para: ${formData.type}` : "Entre em Contato Conosco"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Telefone
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                {!formData.type && (
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Como deseja participar? *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {participationTypes.map((type) => (
                        <Button
                          key={type.title}
                          type="button"
                          variant="outline"
                          onClick={() => handleTypeSelect(type.title)}
                          className="text-xs"
                        >
                          {type.title}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Conte-nos um pouco sobre sua motivação ou dúvidas..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-hero w-full"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Inscrição
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Participate;