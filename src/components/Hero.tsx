import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-law.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(18, 40, 76, 0.95), rgba(18, 40, 76, 0.85)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-accent font-inter font-semibold text-sm">
              Estudio Jurídico en Santa Anita, Lima
            </span>
          </div>
          
          <h1 className="font-playfair font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Compromiso, ética y experiencia al servicio de tus derechos
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-inter font-light leading-relaxed">
            Defensa legal integral con trato personalizado y profesional. 
            Especialistas en Derecho Penal, Laboral, Familiar y Civil.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter font-semibold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              Agendar Consulta
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection("servicios")}
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 font-inter font-semibold text-lg px-8 py-6 backdrop-blur-sm"
            >
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
