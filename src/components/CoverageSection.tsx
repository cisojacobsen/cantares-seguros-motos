import {
  Shield,
  Car,
  Flame,
  Wrench,
  MessageCircle,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import logoCantares from "@/assets/logo-cantares-corretora.png";
import logoSuhai from "@/assets/logo-suhai-seguradora.png";
import { CallToAction, WHATSAPP_LINK } from "./CallToAction";

const steps = [
  { number: "1", title: "Cotação", description: "Simule grátis online" },
  { number: "2", title: "Análise", description: "Escolha o melhor plano" },
  { number: "3", title: "Proteção ativa", description: "Sua moto protegida" },
];

const coverages = [
  {
    icon: Shield,
    title: "Roubo e furto",
    description: "Proteção básica contra roubo e furto da sua moto.",
    popular: false,
  },
  {
    icon: Car,
    title: "Roubo, furto e perda total",
    description: "Cobertura completa incluindo acidentes com perda total.",
    popular: true,
  },
  {
    icon: Flame,
    title: "Roubo, furto, perda total, incêndio e colisão",
    description: "Máxima proteção para sua moto em todas as situações.",
    popular: false,
  },
  {
    icon: Wrench,
    title: "Planos personalizados",
    description: "Monte a cobertura ideal para seu perfil e necessidades.",
    popular: false,
  },
];

export function CoverageSection() {
  return (
    <section id="coberturas" className="section-padding bg-muted/30">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Alternativas de Cobertura
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha a proteção ideal para sua moto
          </p>
        </div>

        {/* Coverage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {coverages.map((coverage, index) => (
            <article
              key={coverage.title}
              className={`card-coverage relative animate-fade-in-up ${
                coverage.popular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {coverage.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Mais escolhido
                </div>
              )}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <coverage.icon className="w-6 h-6 text-lime-dark" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {coverage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {coverage.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-card rounded-2xl p-6 md:p-8 border border-border mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-lime-dark" />
              <span className="text-foreground font-medium">
                Guincho e assistência 24h em todo o Brasil
              </span>
            </div>
            <div className="h-px w-full md:w-px md:h-6 bg-border" />
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-lime-dark" />
              <span className="text-foreground font-medium">
                Simulação gratuita e imediata, sem compromisso
              </span>
            </div>
          </div>
        </div>

        {/* Timeline Steps - Moved before CTA */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-lg text-primary-foreground">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <CallToAction
          href={WHATSAPP_LINK}
          title="Falar com um especialista"
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
