import { Scale, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection("inicio")}
          >
            <Scale className="w-8 h-8 text-accent" />
            <div>
              <h1 className="font-playfair font-bold text-xl text-primary">Jessica López</h1>
              <p className="text-xs text-muted-foreground">Estudio Jurídico</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter font-semibold"
            >
              Agendar Consulta
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("inicio")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium text-left"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("sobre-mi")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium text-left"
            >
              Sobre Mí
            </button>
            <button
              onClick={() => scrollToSection("servicios")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium text-left"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("contacto")}
              className="text-foreground hover:text-accent transition-colors font-inter font-medium text-left"
            >
              Contacto
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-inter font-semibold w-full"
            >
              Agendar Consulta
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
