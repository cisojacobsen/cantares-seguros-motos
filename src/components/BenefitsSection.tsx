import {
  Shield,
  Globe,
  Smartphone,
  Clock,
  Users,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import logoCantares from "@/assets/logo-cantares-corretora.png";
import logoSuhai from "@/assets/logo-suhai-seguradora.png";
import { CallToAction } from "./CallToAction";

const benefits = [
  {
    icon: Shield,
    title: "Proteção para todas as cilindradas",
    description: "Da 50cc à 1800cc, todos os modelos têm cobertura garantida.",
  },
  {
    icon: Smartphone,
    title: "Contratação 100% online",
    description: "Sem burocracia, faça tudo pelo celular em poucos minutos.",
  },
  {
    icon: Sparkles,
    title: "Planos sob medida",
    description: "Escolha a cobertura ideal para seu perfil e necessidades.",
  },
  {
    icon: Clock,
    title: "Assistência 24h",
    description: "Guincho e suporte em todo o Brasil, a qualquer hora.",
  },
  {
    icon: Users,
    title: "Atendimento humano e rápido",
    description: "Fale com especialistas de verdade, sem robôs.",
  },
  {
    icon: Globe,
    title: "Cobertura nacional",
    description: "Proteção completa em qualquer lugar do Brasil.",
  },
];

interface BenefitsSectionProps {
  onModalOpen?: () => void;
}

export function BenefitsSection({ onModalOpen }: BenefitsSectionProps) {
  return (
    <section id="beneficios" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefícios e Diferenciais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quem tem moto sabe: segurança não é luxo, em qualquer lugar do
            Brasil é necessidade.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <article
              key={benefit.title}
              className="card-benefit animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                <benefit.icon className="w-7 h-7 text-lime-dark" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        {/* <CallToAction
          useModal
          onModalOpen={onModalOpen}
          title="Fale com um especialista"
          leftIcon={<MessageCircle className="w-6 h-6" />}
          logos={[
            {
              src: logoCantares,
              alt: "Cantares Corretora",
              className: "h-14 w-auto opacity-1 rounded-sm",
            },
            {
              src: logoSuhai,
              alt: "Suhai Seguradora",
              className: "h-16 w-auto opacity-1",
            },
          ]}
        /> */}
      </div>
    </section>
  );
}
