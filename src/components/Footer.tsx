import React from 'react';
import { Compass, MapPin } from 'lucide-react';
import { SAUDI_REGIONS } from '../data/regionsData';
import { TranslationStrings, Language, getRegionName } from '../data/translations';
import { RahalLogo } from './RahalLogo';

interface FooterProps {
  t: TranslationStrings;
  language: Language;
  onSelectRegion: (regionId: string) => void;
  onOpenAssistant: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  t,
  language,
  onSelectRegion,
  onOpenAssistant,
}) => {
  return (
    <footer className="bg-[#0c2b1e] text-stone-300 border-t border-[#D4AF37]/30 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1B4D3E] to-[#D4AF37] flex items-center justify-center shadow-md shrink-0">
                <Compass className="w-6 h-6 text-white" />
              </div>
              <RahalLogo size="md" isDark={true} />
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.footerDesc}
            </p>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#D4AF37]/30 text-xs text-[#D4AF37]">
              <span>{t.saudiPride}</span>
            </div>
          </div>

          {/* 13 Regions Quick Links Col */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-[#D4AF37] font-serif">{t.thirteenRegionsTitle}</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {SAUDI_REGIONS.map((r) => {
                const regName = getRegionName(r.id, language);
                return (
                  <button
                    key={r.id}
                    onClick={() => onSelectRegion(r.id)}
                    className="text-right rtl:text-right ltr:text-left text-xs text-stone-400 hover:text-[#D4AF37] transition-colors flex items-center gap-1 py-1 cursor-pointer"
                  >
                    <MapPin className="w-3 h-3 text-[#D4AF37]/60 shrink-0" />
                    <span>{regName}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pillars & AI assistant */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#D4AF37] font-serif">{t.aiAssistantTitle}</h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              {t.aiAssistantDesc}
            </p>
            <button
              onClick={onOpenAssistant}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C59B27] text-[#0F432A] text-xs font-bold shadow-md hover:brightness-105 transition-all cursor-pointer text-center"
            >
              {t.startChatBtn}
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            {t.allRightsReserved}
          </div>
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span>{t.saudiNationalHeritage}</span>
            <span>•</span>
            <span>{t.unescoLabel}</span>
            <span>•</span>
            <span>13 Regions</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
