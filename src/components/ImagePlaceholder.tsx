import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import { Language } from '../data/translations';

interface ImagePlaceholderProps {
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  aspect?: string;
  language?: Language;
  showBadge?: boolean;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  className = 'w-full h-full min-h-[160px]',
  title,
  icon,
  language = 'ar',
  showBadge = true,
}) => {
  const waitingLabel =
    language === 'ar'
      ? 'في انتظار تزويد الصورة'
      : language === 'fr'
      ? 'En attente d\'image'
      : language === 'es'
      ? 'En espera de imagen'
      : 'Awaiting image';

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#0F432A] via-[#155336] to-[#0A301E] flex flex-col items-center justify-center p-4 text-center select-none border border-[#D4AF37]/20 ${className}`}
    >
      {/* Decorative Islamic Geometric subtle background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#D4AF37]/15 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#C59B27]/10 rounded-full blur-2xl pointer-events-none" />

      {/* Center Icon & Badge */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-2">
        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xs border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shadow-inner">
          {icon ? icon : <ImageIcon className="w-6 h-6 text-[#D4AF37]" />}
        </div>

        {title && (
          <span className="text-xs sm:text-sm font-bold text-[#FAF7F2] font-serif line-clamp-1 max-w-[200px]">
            {title}
          </span>
        )}

        {showBadge && (
          <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-[#D4AF37] bg-black/30 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30">
            <Sparkles className="w-2.5 h-2.5" />
            {waitingLabel}
          </span>
        )}
      </div>
    </div>
  );
};
