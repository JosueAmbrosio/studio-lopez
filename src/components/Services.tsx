import { Scale, Briefcase, Heart, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Derecho Penal",
      description:
        "Defensa legal integral en procesos penales. Representación en investigaciones preliminares, juicios orales y recursos de apelación. Protección de sus derechos en todas las etapas del proceso penal.",
      features: [
        "Defensa en investigaciones fiscales",
        "Representación en juicios penales",
        "Diligencia en fiscalía, juzgados",
        "Libertad bajo fianza",
      ],
    },
    {
      icon: Briefcase,
      title: "Derecho Laboral",
      description:
        "Asesoría y representación en conflictos laborales. Defensa de los derechos del trabajador, liquidaciones, despidos arbitrarios, beneficios sociales y demandas laborales.",
      features: [
        "Accidentes de trabajo",
        "Liquidación de beneficios",
        "Despidos injustificados",
        "Negociación colectiva",
      ],
    },
    {
      icon: Heart,
      title: "Derecho Familiar",
      description:
        "Acompañamiento legal en procesos familiares. Divorcios, régimen de visitas, pensión de alimentos, tenencia de menores, reconocimiento de paternidad y violencia familiar.",
      features: [
        "Divorcios y separaciones",
        "Pensión de alimentos",
        "Tenencia y custodia",
        "Régimen de visitas",
      ],
    },
    {
      icon: FileText,
      title: "Derecho de Contratos",
      description:
        "Redacción, revisión y análisis de contratos civiles y comerciales. Asesoría en cumplimiento contractual, resolución de conflictos y negociación de acuerdos.",
      features: [
        "Redacción de contratos",
        "Revisión legal",
        "Cumplimiento contractual",
        "Resolución de disputas",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-inter font-semibold text-sm uppercase tracking-wider">
            Áreas de Práctica
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Servicios Legales
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-inter">
            Asesoría legal integral y personalizada en múltiples áreas del derecho,
            con experiencia comprobada y trato profesional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:border-accent transition-all duration-300 hover:shadow-xl bg-card"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair font-bold text-2xl text-foreground mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-foreground/80 mb-6 font-inter leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-foreground/70 font-inter"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
