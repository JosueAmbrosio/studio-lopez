import { MapPin, Phone, Clock, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "954 284 218",
      link: "tel:+51954284218",
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Santa Anita, Lima, Perú",
      link: 'https://maps.app.goo.gl/WLkeSRNHinEX7D5n8',
    },
    {
      icon: Clock,
      title: "Horario",
      value: "Lunes a Viernes, 9:00 AM - 6:00 PM",
      link: null,
    },
    {
      icon: Mail,
      title: "Email",
      value: "contacto@estudiojlopez.com",
      link: "mailto:contacto@estudiojlopez.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor complete todos los campos requeridos.",
        variant: "destructive",
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hola, soy ${formData.name}. ${formData.message}`;
    const whatsappUrl = `https://wa.me/51954284218?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "¡Gracias por contactarnos!",
      description: "Serás redirigido a WhatsApp para continuar la conversación.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-accent font-inter font-semibold text-sm uppercase tracking-wider">
            Contáctanos
          </span>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-foreground mt-2 mb-4">
            Agenda tu Consulta
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground font-inter">
            Estamos aquí para ayudarte. Contáctanos y recibe asesoría legal profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-6">
              Información de Contacto
            </h3>

            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = (
                  <Card
                    key={index}
                    className="border-border hover:border-accent transition-all duration-300 hover:shadow-lg bg-background"
                  >
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-inter font-semibold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-foreground/70 font-inter">{info.value}</p>
                      </div>
                    </CardContent>
                  </Card>
                );

                return info.link ? (
                  <a key={index} href={info.link} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}
            </div>

            <Card className="border-accent/30 bg-accent/5">
              <CardContent className="p-6">
                <p className="text-foreground/80 font-inter leading-relaxed mb-4">
                  <strong className="text-accent">¿Necesitas asesoría inmediata?</strong>
                </p>
                <p className="text-foreground/70 font-inter mb-4">
                  Contáctanos directamente por WhatsApp y te responderemos a la brevedad.
                </p>
                <Button
                  onClick={() => window.open("https://api.whatsapp.com/send/?phone=%2B51954284218&text&type=phone_number&app_absent=0", "_blank")}
                  className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-inter font-semibold"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <h3 className="font-playfair font-bold text-2xl text-foreground mb-6">
              Envíanos un Mensaje
            </h3>

            <Card className="border-border bg-background">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-inter font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Juan Ignacio"
                      className="font-inter"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="juan@gmail.com"
                      className="font-inter"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-foreground mb-2">
                      Teléfono
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="987 654 321"
                      className="font-inter"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntanos sobre tu caso..."
                      className="font-inter min-h-32"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-inter font-semibold"
                    size="lg"
                  >
                    Enviar Mensaje
                    <Send className="ml-2 w-5 h-5" />
                  </Button>

                  <p className="text-xs text-muted-foreground font-inter text-center">
                    Al enviar este formulario, serás redirigido a WhatsApp para continuar la conversación.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
