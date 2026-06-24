import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { CoverageSection } from "@/components/CoverageSection";
import { PartnersSection } from "@/components/PartnersSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { LeadFormSection } from "@/components/LeadFormSection";
import { Footer } from "@/components/Footer";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ContactModal } from "@/components/ContactModal";

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onModalOpen={() => setIsModalOpen(true)} />
      <main>
        <HeroSection onModalOpen={() => setIsModalOpen(true)} />
        <BenefitsSection onModalOpen={() => setIsModalOpen(true)} />
        <CoverageSection onModalOpen={() => setIsModalOpen(true)} />
        <PartnersSection onModalOpen={() => setIsModalOpen(true)} />
        <TestimonialsSection onModalOpen={() => setIsModalOpen(true)} />
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

export default Index;
