import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const footerLinks = {
    about: [
      { label: "Missão e Visão", href: "#about" },
      { label: "Nossa História", href: "#about" },
      { label: "Equipe", href: "#about" },
      { label: "Relatórios de Impacto", href: "#impact" }
    ],
    programs: [
      { label: "Educação e Capacitação", href: "#how-it-works" },
      { label: "Mentoria", href: "#how-it-works" },
      { label: "Cuidado Nutricional", href: "#how-it-works" },
      { label: "Desenvolvimento Espiritual", href: "#how-it-works" }
    ],
    involvement: [
      { label: "Seja um Mentor", href: "#participate" },
      { label: "Faça uma Doação", href: "#participate" },
      { label: "Voluntariado", href: "#participate" },
      { label: "Parcerias", href: "#contact" }
    ],
    legal: [
      { label: "Política de Privacidade", href: "#" },
      { label: "Termos de Uso", href: "#" },
      { label: "Transparência", href: "#" },
      { label: "FAQ", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Logo and Mission */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Instituto Abaixo" className="h-12 w-12" />
                <span className="font-heading font-bold text-2xl">Instituto Abaixo</span>
              </div>
              
              <p className="text-white/90 leading-relaxed mb-6 max-w-md">
                Transformando vidas de crianças e adolescentes em vulnerabilidade social 
                através do amor incondicional de Deus, oferecendo educação, cuidado 
                espiritual e empoderamento.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">
                    Rua da Esperança, 123 - Centro, São Paulo - SP
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">
                    contato@institutoabaixo.org.br
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-white/70 flex-shrink-0" />
                  <span className="text-sm text-white/90">
                    (11) 3456-7890
                  </span>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Sobre Nós</h4>
              <ul className="space-y-2">
                {footerLinks.about.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Programas</h4>
              <ul className="space-y-2">
                {footerLinks.programs.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Participe</h4>
              <ul className="space-y-2 mb-6">
                {footerLinks.involvement.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/80 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div>
                <h5 className="font-medium text-sm mb-3">Redes Sociais</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/10 py-8">
          <div className="text-center">
            <h3 className="font-heading font-bold text-xl mb-3">
              Receba Novidades e Histórias de Transformação
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Inscreva-se em nossa newsletter e acompanhe de perto o impacto do seu apoio 
              na vida das crianças e adolescentes que atendemos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white/30"
              />
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-white/90 transition-colors">
                Inscrever
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              © 2024 Instituto Abaixo. Todos os direitos reservados.
            </div>
            
            <div className="flex space-x-6">
              {footerLinks.legal.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;