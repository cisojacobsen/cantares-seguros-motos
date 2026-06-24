import { MessageCircle } from "lucide-react";
import { useLocation } from "react-router-dom";
import casalMoto from "@/assets/casal-andando-de-moto.png";
import logoCantares from "@/assets/logo-cantares-corretora.png";
import logoSuhai from "@/assets/logo-suhai-seguradora.png";

interface HeroSectionProps {
  onModalOpen?: () => void;
}

export function HeroSection({ onModalOpen }: HeroSectionProps) {
  const location = useLocation();
  const isSeguroSuhai = location.pathname === "/suhai";

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={casalMoto}
          alt="Casal feliz andando de moto com segurança"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-lime-dark rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              {isSeguroSuhai
                ? "Corretora Autorizada Suhai"
                : "Corretora Autorizada"}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up delay-100">
            Proteja a sua moto com quem{" "}
            <span className="text-gradient">entende de moto</span>
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in-up delay-200">
            Seguro de moto para todas as cilindradas a partir de{" "}
            <strong className="text-foreground">R$ 79,00/mês</strong>.
            <br />
            Simples, rápido e sem burocracia.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up delay-300">
            <button
              onClick={onModalOpen}
              className="btn-cta text-lg inline-flex"
            >
              <MessageCircle className="w-6 h-6" />
              Simular e Contratar
            </button>
          </div>

          {/* Partner Logos */}
          {isSeguroSuhai && (
            <>
              <div className="hidden md:flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-fade-in-up delay-400">
                <span className="text-sm text-muted-foreground">
                  Parceiros:
                </span>
                <div className="flex items-center gap-4">
                  <div className="logo-partner">
                    <img
                      src={logoCantares}
                      alt="Cantares Corretora"
                      className="h-10 w-auto"
                      loading="lazy"
                    />
                  </div>
                  <div className="logo-partner">
                    <img
                      src={logoSuhai}
                      alt="Suhai Seguradora"
                      className="h-14 w-auto"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
