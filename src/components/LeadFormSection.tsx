import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const insuranceTypes = [
  'Roubo e furto',
  'Roubo, furto e perda total',
  'Cobertura completa',
  'Plano personalizado',
];

export function LeadFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
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
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Redirect to WhatsApp with form data
    const message = `Olá! Meu nome é ${formData.name}. 
Email: ${formData.email}
Telefone: ${formData.phone}
Interesse: ${formData.insuranceType}

Gostaria de saber mais sobre o seguro de moto.`;
    
    window.open(`https://wa.me/5511930290043?text=${encodeURIComponent(message)}`, '_blank');
    
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contato" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Vamos iniciar sua proteção
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário e receba sua cotação personalizada
            </p>
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
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
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
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
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
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
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
                  <label htmlFor="insuranceType" className="block text-sm font-medium text-foreground mb-2">
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
                Ao enviar, você concorda com nossa{' '}
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
