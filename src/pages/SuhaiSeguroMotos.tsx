import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CoverageSection } from "@/components/CoverageSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactModal } from "@/components/ContactModal";

const SuhaiSeguroMotos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background theme-suhai">
      <Header onModalOpen={() => setIsModalOpen(true)} />
      <main>
        <HeroSection onModalOpen={() => setIsModalOpen(true)} />
        <BenefitsSection onModalOpen={() => setIsModalOpen(true)} />
        <TestimonialsSection onModalOpen={() => setIsModalOpen(true)} />
        <CoverageSection onModalOpen={() => setIsModalOpen(true)} />
        <LeadFormSection />
      </main>
      <Footer onModalOpen={() => setIsModalOpen(true)} />
      <WhatsAppFloat useModal onClick={() => setIsModalOpen(true)} />
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default SuhaiSeguroMotos;
