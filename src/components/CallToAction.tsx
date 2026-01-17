import type { ReactNode } from "react";

export const WHATSAPP_LINK =
  "https://wa.me/5511930290043?text=ROBSON%20-%20CONSULTOR%20EM%20SEGUROS";

export const WHATSAPP_NUMBER = "5511930290043";

interface Logo {
  src: string;
  alt?: string;
  className?: string;
}

interface CallToActionProps {
  href?: string;
  title?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  logos?: Logo[];
  className?: string;
  buttonClassName?: string;
  useModal?: boolean;
  onModalOpen?: () => void;
}

export function CallToAction({
  href = WHATSAPP_LINK,
  title = "Falar com um especialista",
  leftIcon,
  rightIcon,
  logos = [],
  className = "",
  buttonClassName = "btn-cta text-lg inline-flex",
  useModal = false,
  onModalOpen,
}: CallToActionProps) {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    if (useModal) {
      e.preventDefault();
      onModalOpen?.();
    }
  };

  if (useModal) {
    return (
      <div className={`text-center ${className}`}>
        <button onClick={handleClick} className={buttonClassName}>
          {leftIcon}
          {title}
          {rightIcon}
        </button>

        {logos.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            {logos.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className={logo.className}
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonClassName}
      >
        {leftIcon}
        {title}
        {rightIcon}
      </a>

      {logos.length > 0 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          {logos.map((logo) => (
            <img
              key={logo.src}
              src={logo.src}
              alt={logo.alt}
              className={logo.className}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
}
