import React from 'react';
import { Compass, Sparkles, ArrowDown } from 'lucide-react';
import { TranslationStrings, Language } from '../data/translations';
import { RahalLogo } from './RahalLogo';

interface HeroProps {
  t: TranslationStrings;
  language: Language;
  onExploreClick: () => void;
  onOpenAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, language, onExploreClick, onOpenAssistant }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20">
      {/* Decorative Heritage Gradients and Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#0F432A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-[#D4AF37]/40 shadow-xs mb-6 backdrop-blur-sm animate-fadeIn">
            <span className="flex h-2 w-2 rounded-full bg-[#0F5132]" />
            <span className="text-xs sm:text-sm font-bold text-[#0F5132]">
              {t.heroBadge}
            </span>
          </div>

          {/* Main Title with Logo Calligraphy & Tagline */}
          <div className="mb-6 flex flex-col items-center justify-center">
            <RahalLogo size="hero" className="mb-1" />
            <span className="block text-2xl sm:text-4xl lg:text-5xl font-serif text-[#C59B27] font-bold mt-3 leading-snug">
              {t.heroTagline}
            </span>
          </div>

          {/* Short Description */}
          <p className="text-base sm:text-xl text-stone-700 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            {t.heroDesc}
          </p>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0F432A] via-[#145C3B] to-[#0F432A] text-[#FAF7F2] font-bold text-base sm:text-lg shadow-xl shadow-[#0F432A]/20 hover:shadow-2xl hover:scale-102 transition-all flex items-center justify-center gap-3 border border-[#D4AF37]/40 cursor-pointer group"
            >
              <Compass className="w-6 h-6 text-[#D4AF37] group-hover:rotate-45 transition-transform" />
              <span>{t.exploreKingdomBtn}</span>
              <ArrowDown className="w-5 h-5 text-[#D4AF37] animate-bounce" />
            </button>

            <button
              onClick={onOpenAssistant}
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white/90 hover:bg-white text-[#0F432A] font-bold text-base border border-[#D4AF37]/50 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
            >
              <Sparkles className="w-5 h-5 text-[#C59B27] group-hover:scale-110 transition-transform" />
              <span>{t.askAssistantBtn}</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
