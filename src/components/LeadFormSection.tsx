import { useState, useRef, useEffect } from "react";
import { Send, CheckCircle } from "lucide-react";
import videoCorretor from "@/assets/video-corretor-suhai-autorizado.mp4";
import posterCorretor from "@/assets/img-share.webp";
import { WHATSAPP_NUMBER } from "./CallToAction";

const insuranceTypes = [
  "Roubo e furto",
  "Roubo, furto e perda total",
  "Cobertura completa",
  "Plano personalizado",
];

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    insuranceType: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  // Lazy-load video source when the element enters the viewport.
  useEffect(() => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    videoEl.preload = "none";

    let observer: IntersectionObserver | null = null;

    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Only add source if it doesn't exist yet
              const existingSource = videoEl.querySelector(
                "source",
              ) as HTMLSourceElement | null;
              if (!existingSource?.src) {
                const source = document.createElement("source");
                source.src = videoCorretor;
                source.type = "video/mp4";
                videoEl.appendChild(source);
                videoEl.load();
                setIsVideoLoaded(true);
              }
              observer?.disconnect();
            }
          });
        },
        { rootMargin: "200px" },
      );

      observer.observe(videoEl);
    } else {
      // Fallback for environments without IntersectionObserver
      const source = document.createElement("source");
      source.src = videoCorretor;
      source.type = "video/mp4";
      videoEl.appendChild(source);
      setIsVideoLoaded(true);
    }

    return () => {
      observer?.disconnect();
    };
  }, []);

  const handlePlay = async () => {
    const videoEl = videoRef.current;
    if (!videoEl) return;

    let source = videoEl.querySelector("source") as HTMLSourceElement | null;
    if (!source?.src) {
      source = document.createElement("source");
      source.src = videoCorretor;
      source.type = "video/mp4";
      videoEl.appendChild(source);
      setIsVideoLoaded(true);
      videoEl.load();
    }

    try {
      await videoEl.play();
      setIsPlaying(true);
      videoEl.controls = true;
    } catch (err) {
      console.error("Erro ao reproduzir vídeo:", err);
      setIsPlaying(true);
      videoEl.controls = true;
    }
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
        7,
      )}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(
      7,
      11,
    )}`;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
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
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Extract name parts
    const { firstName, lastName } = extractNames(formData.name);
    const phoneWithDDI = formatPhoneWithDDI(formData.phone);

    // Push lead_submit event to DataLayer
    pushToDataLayer("lead_submit", {
      user_data: {
        email: formData.email,
        phone_number: phoneWithDDI,
        address: {
          first_name: firstName,
          last_name: lastName,
        },
      },
      event_id: generateEventId(),
    });

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Redirect to WhatsApp with form data
    const message = `Olá! Meu nome é ${formData.name}.
Gostaria de saber mais sobre o seguro de moto. 
Email: ${formData.email}
Telefone: ${formData.phone}
Interesse: ${formData.insuranceType}`;

    // Push whatsapp_redirect event to DataLayer
    pushToDataLayer("whatsapp_redirect", {
      user_data: {
        email: formData.email,
        phone_number: phoneWithDDI,
        address: {
          first_name: firstName,
          last_name: lastName,
        },
      },
      event_id: generateEventId(),
    });

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
    );

    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            {/* Lazy-loaded poster + custom player */}
            <div className="mb-6">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
                {!isPlaying && (
                  <>
                    <img
                      src={posterCorretor}
                      alt="Corretor autorizado"
                      className="w-full h-full object-cover opacity-50"
                      loading="eager"
                    />
                    <button
                      type="button"
                      onClick={handlePlay}
                      aria-label="Reproduzir vídeo"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <span className="w-14 h-14 bg-white/90 dark:bg-black/80 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          aria-hidden
                        >
                          <defs>
                            <linearGradient id="playGradient" x1="0" x2="1">
                              <stop
                                offset="0%"
                                stopColor="var(--gradient-primary-from)"
                              />
                              <stop
                                offset="100%"
                                stopColor="var(--gradient-primary-to)"
                              />
                            </linearGradient>
                          </defs>
                          <path d="M8 5v14l11-7z" fill="url(#playGradient)" />
                        </svg>
                      </span>
                    </button>
                  </>
                )}
                <video
                  ref={videoRef}
                  preload="none"
                  playsInline
                  className={`w-full h-full ${isPlaying ? "block" : "hidden"}`}
                  aria-label="Vídeo do corretor autorizado"
                  controls={isPlaying}
                >
                  <track kind="captions" srcLang="pt" />
                  <p>Seu navegador não suporta o elemento de vídeo.</p>
                </video>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Vamos iniciar sua proteção
              </h2>
              <p className="text-lg text-muted-foreground">
                Preencha o formulário e receba sua cotação personalizada
              </p>
            </div>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="bg-primary/10 border border-primary rounded-2xl p-8 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-lime-dark mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Obrigado pelo interesse!
              </h3>
              <p className="text-muted-foreground">
                Em breve um de nossos especialistas entrará em contato.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-lg"
            >
              <div className="space-y-5">
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
                    required
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="(11) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Insurance Type */}
                <div>
                  <label
                    htmlFor="insuranceType"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Tipo de seguro desejado *
                  </label>
                  <select
                    id="insuranceType"
                    name="insuranceType"
                    value={formData.insuranceType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Selecione uma opção</option>
                    {insuranceTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-cta text-lg justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Solicitar cotação
                    </>
                  )}
                </button>
              </div>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Ao enviar, você concorda com nossa{" "}
                <a
                  href="https://www.cantarescorretora.com.br/politica-privacidade-cookies.php"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  Política de Privacidade
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
