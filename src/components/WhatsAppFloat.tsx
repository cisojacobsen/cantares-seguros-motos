import { MessageCircle } from "lucide-react";

interface WhatsAppFloatProps {
  onClick?: () => void;
  useModal?: boolean;
}

export function WhatsAppFloat({
  onClick,
  useModal = false,
}: WhatsAppFloatProps) {
  if (useModal) {
    return (
      <button
        onClick={onClick}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Abrir formulário de contato"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
      </button>
    );
  }

  const WHATSAPP_LINK =
    "https://wa.me/5511930290043?text=ROBSON%20-%20CONSULTOR%20EM%20SEGUROS";

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
    </a>
  );
}
