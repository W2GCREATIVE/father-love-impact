import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import Participate from "@/components/Participate";
import EnhancedTestimonials from "@/components/EnhancedTestimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Impact />
        <Participate />
        <EnhancedTestimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
