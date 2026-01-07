import { Star, MessageCircle, ArrowRight } from "lucide-react";
import logoCantares from "@/assets/logo-cantares-corretora.png";
import logoSuhai from "@/assets/logo-suhai-seguradora.png";
import { CallToAction, WHATSAPP_LINK } from "./CallToAction";

const testimonials = [
  {
    name: "Luis Fernando Grama",
    rating: 5,
    text: "Empresa e equipe de confiança, desde que comprei a minha primeira moto, já saiu da concessionária com o seguro deles e até hoje mantenho a empresa no gerenciamento do meus seguros. Troco de moto, mas não troco de corretora. Recomendo muito a Cantares.",
  },
  {
    name: "Adão Freitas",
    rating: 5,
    text: "Olá, gostaria de recomendar a empresa Cantares corretora de seguros pelo bom atendimento. Desde 2018 quando eu fiz o primeiro contato, sempre bem dispostos e atencioso com o cliente. Me deram várias sugestões de seguros e tiraram todas as minhas dúvidas. Por fim, consegue fazer a proteção da minha moto e ficar tranquilo. Eu recomendo 👏👏🔑🛵🔓🔒",
  },
  {
    name: "Vinicius Rodrigues",
    rating: 5,
    text: "Contrato renovado é muito grato pelo serviço de vocês, estou com vocês tem 4 anos indo pro 5ª agora já e feliz até o momento.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-1"
      aria-label={`Avaliação: ${rating} de 5 estrelas`}
    >
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Depoimentos de Clientes da Cantares
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossos clientes dizem sobre nosso atendimento
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="card-testimonial animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 mb-6">
                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.text}"
                </p>
              </blockquote>
              <footer>
                <h3 className="font-semibold text-foreground">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Cliente Cantares
                </p>
              </footer>
            </article>
          ))}
        </div>

        {/* CTA */}
        <CallToAction
          href={WHATSAPP_LINK}
          title="Simular e Contratar"
          leftIcon={<MessageCircle className="w-6 h-6" />}
          rightIcon={<ArrowRight className="w-5 h-5" />}
          logos={[
            {
              src: logoCantares,
              alt: "Cantares Corretora",
              className: "h-12 w-auto opacity-1 rounded-sm",
            },
            {
              src: logoSuhai,
              alt: "Suhai Seguradora",
              className: "h-14 w-auto opacity-1",
            },
          ]}
        />
      </div>
    </section>
  );
}
