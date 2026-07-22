import logoCantares from "@/assets/logo-cantares-corretora.png";
import logoSuhai from "@/assets/logo-suhai-seguradora.png";
import parceira_allianz from "@/assets/logo-parceiras/parceira_allianz.webp";
import parceira_apvs_brasil from "@/assets/logo-parceiras/parceira_apvs_brasil.webp";
import parceira_azul_seguros from "@/assets/logo-parceiras/parceira_azul_seguros.webp";
import parceira_bradesco_seguros from "@/assets/logo-parceiras/parceira_bradesco_seguros.webp";
import parceira_hdi_seguros from "@/assets/logo-parceiras/parceira_hdi_seguros.webp";
import parceira_itau_seguros from "@/assets/logo-parceiras/parceira_itau_seguros.webp";
import parceira_ituran_seguros from "@/assets/logo-parceiras/parceira_ituran_seguros.webp";
import parceira_mapfre_seguros from "@/assets/logo-parceiras/parceira_mapfre_seguros.webp";
import parceira_porto_seguro from "@/assets/logo-parceiras/parceira_porto_seguro.webp";
import parceira_suhai from "@/assets/logo-parceiras/parceira_suhai.webp";
import parceira_tokio_marine from "@/assets/logo-parceiras/parceira_tokio_marine.webp";
import parceira_zurich from "@/assets/logo-parceiras/parceira_zurich.webp";
import { MessageCircle } from "lucide-react";
import { CallToAction } from "./CallToAction";

const partners = [
  { src: parceira_suhai, alt: "Suhai Seguradora" },
  { src: parceira_hdi_seguros, alt: "HDI Seguros" },
  { src: parceira_porto_seguro, alt: "Porto Seguro" },
  { src: parceira_azul_seguros, alt: "Azul Seguros" },
  { src: parceira_allianz, alt: "Allianz" },
  { src: parceira_tokio_marine, alt: "Tokio Marine Seguradora" },
  { src: parceira_itau_seguros, alt: "Itaú Seguros" },
  { src: parceira_bradesco_seguros, alt: "Bradesco Seguros" },
  { src: parceira_mapfre_seguros, alt: "Mapfre Seguros" },
  { src: parceira_zurich, alt: "Zurich" },
  { src: parceira_apvs_brasil, alt: "APVS Brasil" },
  { src: parceira_ituran_seguros, alt: "Ituran Seguros" },
];

interface PartnersSectionProps {
  onModalOpen?: () => void;
}

export function PartnersSection({ onModalOpen }: PartnersSectionProps) {
  return (
    <section id="parceiros" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Seguradoras Parceiras
          </h2>
          <p className="text-lg text-muted-foreground">
            Trabalhamos com as principais seguradoras do Brasil para oferecer as
            melhores coberturas.
          </p>
        </div>

        {/* Partners Grid - 3 rows x 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {partners.map((partner, index) => (
            <div
              key={partner.alt}
              className="flex items-center justify-center p-6 bg-card rounded-xl border border-border hover:border-primary/50 hover:shadow-md transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                loading="lazy"
                className="max-h-24 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <CallToAction
          useModal
          onModalOpen={onModalOpen}
          title="Simular"
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
        />
      </div>
    </section>
  );
}
