import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToParticipate = () => {
    const element = document.querySelector("#participate");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-hero fade-in-up mb-6">
            Transformando Vidas com o Amor Incondicional de Deus
          </h1>
          
          <p className="text-hero-sub fade-in-delay mb-10 mx-auto">
            Juntos, podemos criar um futuro de esperança para crianças e adolescentes 
            em regiões de vulnerabilidade.
          </p>
          
          <div className="fade-in-delay-2">
            <Button
              onClick={scrollToParticipate}
              className="btn-hero text-lg"
            >
              Junte-se a Nós
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;