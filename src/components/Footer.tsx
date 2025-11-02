import { Scale, Phone, MapPin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-accent" />
              <div>
                <h3 className="font-playfair font-bold text-xl">Jessica López</h3>
                <p className="text-sm text-primary-foreground/80">Estudio Jurídico</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 font-inter text-sm leading-relaxed">
              Compromiso, ética y experiencia al servicio de tus derechos.
              Defensa legal integral con trato personalizado y profesional.
            </p>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Áreas de Práctica</h4>
            <ul className="space-y-2 font-inter text-sm">
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">
                Derecho Penal
              </li>
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">
                Derecho Laboral
              </li>
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">
                Derecho Familiar
              </li>
              <li className="text-primary-foreground/80 hover:text-accent transition-colors cursor-pointer">
                Derecho de Contratos
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 font-inter text-sm">
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="tel:+51954284218" className="hover:text-accent transition-colors">
                  954 284 218
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <a href="mailto:estudiojuridicolopezgonzales@gmail.com" className="hover:text-accent transition-colors">
                  estudiojuridicolopezgonzales@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-accent" />
                <span>Santa Anita, Lima, Perú</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/70 font-inter">
              © {currentYear} Estudio Jurídico Jessica López. Todos los derechos reservados.
            </p>
            <p className="text-sm text-primary-foreground/70 font-inter">
              Santa Anita, Lima - Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
