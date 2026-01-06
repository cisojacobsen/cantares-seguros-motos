import { Phone, MessageCircle, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import logoCantares from '@/assets/logo-cantares-corretora.png';
import logoSuhai from '@/assets/logo-suhai-seguradora.png';

const WHATSAPP_LINK = "https://wa.me/5511930290043?text=ROBSON%20-%20CONSULTOR%20EM%20SEGUROS";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="section-padding py-12 md:py-16">
        <div className="container-narrow mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={logoCantares} 
                  alt="Cantares Corretora" 
                  className="h-12 w-auto brightness-0 invert"
                  loading="lazy"
                />
                <img 
                  src={logoSuhai} 
                  alt="Suhai Seguradora" 
                  className="h-10 w-auto brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <p className="text-background/70 mb-4 max-w-md">
                Cantares é corretor autorizado da Suhai Seguros, oferecendo as melhores soluções em seguro de motos para todo o Brasil.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Fale Conosco</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="tel:+551125450650" 
                    className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    (11) 2545-0650
                  </a>
                </li>
                <li>
                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    (11) 93029-0043
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:contato@cantarescorretora.com.br"
                    className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    contato@cantarescorretora.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3 text-background/70">
                  <Clock className="w-5 h-5" />
                  <span>Seg a Sex – 9h às 18h</span>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="https://www.instagram.com/cantarescorretora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.facebook.com/cantarescorretora/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-background/70 hover:text-background transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    Facebook
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.cantarescorretora.com.br/politica-privacidade-cookies.php"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-background/70 hover:text-background transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Footer */}
      <div className="border-t border-background/10">
        <div className="container-narrow mx-auto px-4 py-6">
          <p className="text-center text-sm text-background/50">
            CANTARES ADMINISTRADORA E CORRETORA DE SEGUROS LTDA
            <br />
            CNPJ nº 05.363.029/0001-51 | Registrada na SUSEP sob o nº 202046281
          </p>
        </div>
      </div>
    </footer>
  );
}
