import { Shield, Globe, Smartphone, Clock, Users, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import logoCantares from '@/assets/logo-cantares-corretora.png';
import logoSuhai from '@/assets/logo-suhai-seguradora.png';

const WHATSAPP_LINK = "https://wa.me/5511930290043?text=ROBSON%20-%20CONSULTOR%20EM%20SEGUROS";

const benefits = [
  {
    icon: Shield,
    title: 'Proteção para todas as cilindradas',
    description: 'Da 50cc à 1800cc, todos os modelos têm cobertura garantida.',
  },
  {
    icon: Smartphone,
    title: 'Contratação 100% online',
    description: 'Sem burocracia, faça tudo pelo celular em poucos minutos.',
  },
  {
    icon: Sparkles,
    title: 'Planos sob medida',
    description: 'Escolha a cobertura ideal para seu perfil e necessidades.',
  },
  {
    icon: Clock,
    title: 'Assistência 24h',
    description: 'Guincho e suporte em todo o Brasil, a qualquer hora.',
  },
  {
    icon: Users,
    title: 'Atendimento humano e rápido',
    description: 'Fale com especialistas de verdade, sem robôs.',
  },
  {
    icon: Globe,
    title: 'Cobertura nacional',
    description: 'Proteção completa em qualquer lugar do Brasil.',
  },
];

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Benefícios e Diferenciais
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Quem tem moto sabe: segurança não é luxo, em qualquer lugar do Brasil é necessidade.
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
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta text-lg inline-flex"
          >
            <MessageCircle className="w-6 h-6" />
            Falar com um especialista
            <ArrowRight className="w-5 h-5" />
          </a>
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <img 
              src={logoCantares} 
              alt="Cantares Corretora" 
              className="h-8 w-auto opacity-70"
              loading="lazy"
            />
            <img 
              src={logoSuhai} 
              alt="Suhai Seguradora" 
              className="h-7 w-auto opacity-70"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
