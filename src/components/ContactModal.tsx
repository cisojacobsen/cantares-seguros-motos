import { useState } from "react";
import { X, MessageCircle } from "lucide-react";
import { WHATSAPP_NUMBER } from "./CallToAction";
import logoCantares from "@/assets/logo-cantares-corretora.png";
import logoSuhai from "@/assets/logo-suhai-seguradora.png";

const insuranceTypes = [
  "Roubo e furto",
  "Roubo, furto e perda total",
  "Cobertura completa",
  "Plano personalizado",
];

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  phone: string;
  insuranceType: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  insuranceType?: string;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    insuranceType: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Helper: Extract first and last name from full name
  const extractNames = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    const firstName = parts[0];
    const lastName = parts.slice(1).join(" ");
    return { firstName, lastName };
  };

  // Helper: Format phone with DDI 55 and plus sign
  const formatPhoneWithDDI = (phone: string) => {
    const numbersOnly = phone.replace(/\D/g, "");
    return `+55${numbersOnly}`;
  };

  // Helper: Generate event ID
  const generateEventId = () => {
    return crypto.randomUUID();
  };

  // Helper: Push event to DataLayer
  const pushToDataLayer = (eventName: string, eventData: any) => {
    if (typeof window !== "undefined" && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: eventName,
        ...eventData,
      });
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7
      )}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
      7,
      11
    )}`;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Nome completo é obrigatório";
    } else if (formData.name.trim().split(" ").length < 2) {
      newErrors.name = "Por favor, insira seu nome completo";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Telefone/WhatsApp é obrigatório";
    } else {
      const numbersOnly = formData.phone.replace(/\D/g, "");
      if (numbersOnly.length < 10) {
        newErrors.phone = "Telefone inválido";
      }
    }

    if (!formData.insuranceType.trim()) {
      newErrors.insuranceType = "Selecione um tipo de seguro";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      setFormData({
        ...formData,
        phone: formatPhone(value),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Clear error for this field when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    // Extract name parts
    const { firstName, lastName } = extractNames(formData.name);
    const phoneWithDDI = formatPhoneWithDDI(formData.phone);
    const eventId = generateEventId();

    // Push lead_submit event to DataLayer
    pushToDataLayer("lead_submit", {
      user_data: {
        email: "",
        phone_number: phoneWithDDI,
        address: {
          first_name: firstName,
          last_name: lastName,
        },
      },
      event_id: eventId,
    });

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to WhatsApp with form data
    const message = `Olá! Meu nome é ${formData.name}.
Gostaria de saber mais sobre o seguro de moto. 
Telefone: ${formData.phone}
Interesse: ${formData.insuranceType}`;

    // Push whatsapp_redirect event to DataLayer
    pushToDataLayer("whatsapp_redirect", {
      user_data: {
        email: "",
        phone_number: phoneWithDDI,
        address: {
          first_name: firstName,
          last_name: lastName,
        },
      },
      event_id: eventId,
    });

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    setIsSubmitted(true);
    setIsLoading(false);

    // Reset form after 2 seconds
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = () => {
    setFormData({ name: "", phone: "", insuranceType: "" });
    setErrors({});
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm cursor-pointer"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 pointer-events-none">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl pointer-events-auto">
          {/* Header */}
          <div className="relative border-b border-gray-100 px-6 md:px-8 py-6">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-1 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

            {/* Logos */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <img
                src={logoCantares}
                alt="Logo Cantares"
                className="h-14 w-auto md:h-14 object-contain"
                loading="lazy"
              />
              <img
                src={logoSuhai}
                alt="Logo Suhai"
                className="h-16 w-auto md:h-16 object-contain"
                loading="lazy"
              />
            </div>

            {/* Title and Subtitle */}
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-2">
              Vamos iniciar sua proteção
            </h2>
            <p className="text-center text-sm md:text-base text-gray-600">
              Preencha para falar com um corretor agora.
            </p>
          </div>

          {/* Content */}
          <div className="px-6 md:px-8 py-6">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  Obrigado!
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Em breve um de nossos especialistas entrará em contato.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base transition-colors ${
                      errors.name
                        ? "border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base transition-colors ${
                      errors.phone
                        ? "border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    }`}
                    disabled={isLoading}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.phone}
                    </p>
                  )}
                </div>

                {/* Insurance Type */}
                <div>
                  <label
                    htmlFor="insuranceType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tipo de Seguro Desejado *
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border text-sm md:text-base transition-colors ${
                      errors.insuranceType
                        ? "border-red-500 bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500"
                        : "border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                    }`}
                    disabled={isLoading}
                  >
                    <option value="">Selecione uma opção</option>
                    {insuranceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.insuranceType && (
                    <p className="text-red-500 text-xs md:text-sm mt-1">
                      {errors.insuranceType}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 px-6 py-3 bg-[#25D366] hover:bg-[#20ba58] disabled:bg-gray-400 text-white font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors text-sm md:text-base"
                >
                  <MessageCircle className="w-5 h-5" />
                  {isLoading ? "Processando..." : "Continuar no WhatsApp"}
                </button>

                {/* Privacy Notice */}
                <p className="text-center text-xs md:text-sm text-gray-600 pt-4">
                  Ao enviar, você concorda com nossa{" "}
                  <a
                    href="https://www.cantarescorretora.com.br/politica-privacidade-cookies.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium underline"
                  >
                    Política de Privacidade
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
