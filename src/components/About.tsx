import { Award, Users, Shield, Heart } from "lucide-react";
import jessicaImage from "@/assets/jessica-lopez.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Compromiso",
      description: "Dedicación total a cada caso y cliente",
    },
    {
      icon: Award,
      title: "Experiencia",
      description: "Años de práctica en diversas áreas del derecho",
    },
    {
      icon: Heart,
      title: "Empatía",
      description: "Trato cercano y humano en cada proceso",
    },
    {
      icon: Users,
      title: "Ética",
      description: "Transparencia y profesionalismo en todo momento",
    },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl blur-xl" />
            <img
              src={jessicaImage}
              alt="Abogada Jessica Melisa López Gonzáles"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>

          <div>
            <div className="mb-6">
              <span className="text-accent font-inter font-semibold text-sm uppercase tracking-wider">
                Sobre la Abogada
              </span>
              <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
                Jessica Melisa López Gonzáles
              </h2>
              <div className="w-20 h-1 bg-accent rounded-full" />
            </div>

            <p className="text-lg text-foreground/80 mb-6 font-inter leading-relaxed">
              La Abogada Jessica Melisa López Gonzáles es una profesional del derecho con sólida formación académica 
              y amplia experiencia en diversas áreas legales. Su compromiso es brindar asesoría 
              personalizada, ética y eficiente, adaptada a las necesidades de cada cliente.
            </p>

            <p className="text-lg text-foreground/80 mb-8 font-inter leading-relaxed">
              Con una visión integral del derecho, la Abogada López Gonzáles se especializa en defender 
              los derechos de sus clientes con profesionalismo y dedicación, manteniendo siempre 
              una comunicación cercana y transparente durante todo el proceso legal.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="p-4 bg-background rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-8 h-8 text-accent mb-2" />
                    <h3 className="font-inter font-semibold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground font-inter">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
