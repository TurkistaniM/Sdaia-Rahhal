import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  HelpCircle,
  Menu,
  X,
  Utensils,
  Landmark,
  Scroll,
  Globe,
  Check,
} from 'lucide-react';
import { SAUDI_REGIONS } from '../data/regionsData';
import { Language, TranslationStrings, getRegionName, getRegionCapital } from '../data/translations';
import { RahalLogo } from './RahalLogo';

interface HeaderProps {
  language: Language;
  t: TranslationStrings;
  onSelectLanguage: (lang: Language) => void;
  onOpenAssistant: () => void;
  onOpenQuiz: () => void;
  onSelectCategory: (category: 'food' | 'landmarks' | 'history' | null) => void;
  onSelectRegion: (regionId: string) => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  t,
  onSelectLanguage,
  onOpenAssistant,
  onOpenQuiz,
  onSelectCategory,
  onSelectRegion,
  onGoHome,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegionsDropdownOpen, setIsRegionsDropdownOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  const availableLanguages: { code: Language; label: string; badge: string }[] = [
    { code: 'ar', label: 'العربية', badge: 'AR' },
    { code: 'en', label: 'English', badge: 'EN' },
    { code: 'fr', label: 'Français', badge: 'FR' },
    { code: 'es', label: 'Español', badge: 'ES' },
  ];

  const currentLangObj = availableLanguages.find((l) => l.code === language) || availableLanguages[0];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/90 backdrop-blur-md border-b border-[#D4AF37]/25 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={onGoHome}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0F432A] via-[#145C3B] to-[#D4AF37] flex items-center justify-center shadow-md shadow-[#0F432A]/15 group-hover:scale-105 transition-transform shrink-0">
              <Compass className="w-7 h-7 text-[#FAF7F2]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <RahalLogo size="md" />
              </div>
              <p className="text-[11px] text-stone-500 font-medium tracking-tight">
                {t.brandSub}
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <button
              onClick={onGoHome}
              className="px-3.5 py-2 rounded-xl text-sm font-bold text-[#0F432A] hover:bg-[#0F432A]/8 transition-colors cursor-pointer"
            >
              {t.home}
            </button>

            {/* Regions dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRegionsDropdownOpen(!isRegionsDropdownOpen)}
                onBlur={() => setTimeout(() => setIsRegionsDropdownOpen(false), 200)}
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-[#0F432A] hover:bg-[#0F432A]/8 transition-colors flex items-center gap-1 cursor-pointer"
              >
                <span>{t.regionsDropdown}</span>
                <span className="text-xs text-[#D4AF37]">▼</span>
              </button>
              {isRegionsDropdownOpen && (
                <div className="absolute top-full rtl:right-0 ltr:left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/30 py-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-xs font-bold text-stone-400 border-b border-stone-100">
                    {t.allSaudiRegions}
                  </div>
                  <div className="max-h-80 overflow-y-auto py-1">
                    {SAUDI_REGIONS.map((region) => {
                      const regName = getRegionName(region.id, language);
                      const regCap = getRegionCapital(region.id, language);
                      return (
                        <button
                          key={region.id}
                          onClick={() => {
                            onSelectRegion(region.id);
                            setIsRegionsDropdownOpen(false);
                          }}
                          className="w-full text-right rtl:text-right ltr:text-left px-4 py-2 text-sm text-stone-700 hover:bg-[#0F432A]/8 hover:text-[#0F432A] flex items-center justify-between transition-colors cursor-pointer"
                        >
                          <span className="font-semibold">{regName}</span>
                          <span className="text-xs text-stone-400">{regCap}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Categories */}
            <button
              onClick={() => onSelectCategory('food')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-700 hover:text-[#0F432A] hover:bg-[#0F432A]/8 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Utensils className="w-4 h-4 text-[#C59B27]" />
              <span>{t.foodNav}</span>
            </button>

            <button
              onClick={() => onSelectCategory('landmarks')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-700 hover:text-[#0F432A] hover:bg-[#0F432A]/8 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Landmark className="w-4 h-4 text-[#C59B27]" />
              <span>{t.landmarksNav}</span>
            </button>

            <button
              onClick={() => onSelectCategory('history')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-stone-700 hover:text-[#0F432A] hover:bg-[#0F432A]/8 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Scroll className="w-4 h-4 text-[#C59B27]" />
              <span>{t.historyNav}</span>
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 200)}
                className="px-2.5 py-2 rounded-xl text-stone-700 hover:text-[#0F432A] hover:bg-[#0F432A]/8 transition-colors flex items-center gap-1.5 cursor-pointer border border-[#D4AF37]/40 bg-white/90 shadow-xs"
                title={t.languageSelect}
              >
                <Globe className="w-4 h-4 text-[#C59B27]" />
                <span className="px-1.5 py-0.5 rounded-md bg-[#0F432A]/10 text-[#0F432A] text-[10px] font-black tracking-wider">
                  {currentLangObj.badge}
                </span>
                <span className="text-xs font-bold">{currentLangObj.label}</span>
                <span className="text-[10px] text-stone-400">▼</span>
              </button>

              {isLangDropdownOpen && (
                <div className="absolute top-full rtl:left-0 ltr:right-0 mt-2 w-44 bg-white rounded-2xl shadow-2xl border border-[#D4AF37]/30 py-2 z-50 animate-fadeIn">
                  <div className="px-3 py-1.5 text-[11px] font-bold text-stone-400 border-b border-stone-100">
                    {t.languageSelect}
                  </div>
                  {availableLanguages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => {
                        onSelectLanguage(l.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left rtl:text-right px-3.5 py-2 text-xs flex items-center justify-between hover:bg-[#0F432A]/8 transition-colors cursor-pointer ${
                        language === l.code ? 'font-bold text-[#0F5132] bg-[#0F5132]/5' : 'text-stone-700'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-bold">
                          {l.badge}
                        </span>
                        <span>{l.label}</span>
                      </div>
                      {language === l.code && <Check className="w-3.5 h-3.5 text-[#0F5132]" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Cultural Quiz button */}
            <button
              onClick={onOpenQuiz}
              className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-[#8B6E14] bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 border border-[#D4AF37]/40 transition-colors cursor-pointer"
              title={t.quizBtn}
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t.quizBtn}</span>
            </button>

            {/* AI Assistant Call to action */}
            <button
              onClick={onOpenAssistant}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#0F432A] via-[#145C3B] to-[#0F432A] text-[#FAF7F2] text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:brightness-110 transition-all flex items-center gap-1.5 border border-[#D4AF37]/40 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="hidden xs:inline">{t.askAssistantNav}</span>
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
              aria-label="القائمة"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#D4AF37]/30 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <button
            onClick={() => {
              onGoHome();
              setIsMobileMenuOpen(false);
            }}
            className="w-full text-right rtl:text-right ltr:text-left py-2.5 px-3 rounded-xl font-bold text-[#0F432A] hover:bg-[#0F432A]/8 flex items-center justify-between"
          >
            <span>{t.home}</span>
          </button>

          <div className="space-y-1 pt-1 border-t border-stone-100">
            <button
              onClick={() => {
                onSelectCategory('food');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right rtl:text-right ltr:text-left py-2.5 px-3 rounded-xl text-sm font-medium text-stone-700 hover:bg-[#0F432A]/8 flex items-center gap-2"
            >
              <Utensils className="w-4 h-4 text-[#C59B27]" />
              <span>{t.foodNav}</span>
            </button>

            <button
              onClick={() => {
                onSelectCategory('landmarks');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right rtl:text-right ltr:text-left py-2.5 px-3 rounded-xl text-sm font-medium text-stone-700 hover:bg-[#0F432A]/8 flex items-center gap-2"
            >
              <Landmark className="w-4 h-4 text-[#C59B27]" />
              <span>{t.landmarksNav}</span>
            </button>

            <button
              onClick={() => {
                onSelectCategory('history');
                setIsMobileMenuOpen(false);
              }}
              className="w-full text-right rtl:text-right ltr:text-left py-2.5 px-3 rounded-xl text-sm font-medium text-stone-700 hover:bg-[#0F432A]/8 flex items-center gap-2"
            >
              <Scroll className="w-4 h-4 text-[#C59B27]" />
              <span>{t.historyNav}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-stone-100 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenQuiz();
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-[#D4AF37]/15 text-[#8B6E14] text-xs font-bold flex items-center justify-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              <span>{t.quizBtn}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
