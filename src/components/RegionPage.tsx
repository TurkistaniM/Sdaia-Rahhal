import React, { useState, useMemo } from 'react';
import { Region, FoodItem, LandmarkItem, HistoricalEvent } from '../types';
import { SAUDI_REGIONS } from '../data/regionsData';
import {
  Language,
  TranslationStrings,
  getRegionName,
  getRegionCapital,
  getRegionShortSummary,
  getRegionDescription,
  getRegionClimate,
  getRegionCulturalIdentity,
  getRegionAreaKm2,
} from '../data/translations';
import {
  getLocalizedFood,
  getLocalizedLandmark,
  getLocalizedHistory,
} from '../data/translationsData';
import { RegionGalleryCarousel } from './RegionGalleryCarousel';
import {
  MapPin,
  Utensils,
  Landmark,
  Scroll,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  Calendar,
  Layers,
  Thermometer,
  Share2,
  X,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';

interface RegionPageProps {
  region: Region;
  language: Language;
  t: TranslationStrings;
  onBack: () => void;
  onSelectRegion: (regionId: string) => void;
  onAskAboutRegion: (regionName: string, topic?: string) => void;
}

export const RegionPage: React.FC<RegionPageProps> = ({
  region,
  language,
  t,
  onBack,
  onSelectRegion,
  onAskAboutRegion,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'food' | 'landmarks' | 'history'>('all');
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null);
  const [selectedLandmark, setSelectedLandmark] = useState<LandmarkItem | null>(null);
  const [selectedHistory, setSelectedHistory] = useState<HistoricalEvent | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const localizedName = getRegionName(region.id, language);
  const localizedCapital = getRegionCapital(region.id, language);
  const localizedSummary = getRegionShortSummary(region.id, language, region.shortSummary);
  const localizedDescription = getRegionDescription(region.id, language, region.description);
  const localizedClimate = getRegionClimate(region.id, language, region.climate);
  const localizedIdentity = getRegionCulturalIdentity(region.id, language, region.culturalIdentity);
  const localizedArea = getRegionAreaKm2(region.id, language, region.areaKm2);

  const localizedFoods = useMemo(() => {
    return region.foods.map((food) => getLocalizedFood(food, language));
  }, [region.foods, language]);

  const localizedLandmarks = useMemo(() => {
    return region.landmarks.map((lm) => getLocalizedLandmark(lm, language));
  }, [region.landmarks, language]);

  const localizedHistoryList = useMemo(() => {
    return region.history.map((h) => getLocalizedHistory(h, language));
  }, [region.history, language]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="min-h-screen pb-24 animate-fadeIn">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-[#FAF7F2] border-b border-[#D4AF37]/25 sticky top-20 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <button
              onClick={onBack}
              className="text-stone-500 hover:text-[#0F432A] transition-colors cursor-pointer flex items-center gap-1 font-semibold"
            >
              <span>{t.home}</span>
            </button>
            <span className="text-stone-300">/</span>
            <span className="text-[#0F432A] font-bold">{localizedName}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Share button */}
            <button
              onClick={handleShare}
              className="p-2 rounded-xl bg-white border border-stone-200 hover:border-[#D4AF37] text-stone-600 hover:text-[#0F432A] transition-all text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
              title={t.shareRegion}
            >
              {copiedLink ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600">{t.linkCopied}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{t.shareRegion}</span>
                </>
              )}
            </button>

            {/* Back button */}
            <button
              onClick={onBack}
              className="px-3.5 py-1.5 rounded-xl bg-[#0F432A] text-[#FAF7F2] hover:bg-[#145C3B] transition-all text-xs font-bold flex items-center gap-1 cursor-pointer shadow-sm"
            >
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
              <span>{t.backToMap}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Banner with Authentic Region Photography */}
      <section className="relative h-[380px] sm:h-[460px] md:h-[520px] w-full overflow-hidden bg-stone-900">
        <img
          src={region.heroImage}
          alt={localizedName}
          className="w-full h-full object-cover"
        />

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F432A] via-[#0F432A]/50 to-black/30" />
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none opacity-40" />

        {/* Content Inside Hero */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-10 sm:pb-14">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="px-3.5 py-1 rounded-full bg-[#D4AF37] text-[#0F432A] text-xs font-extrabold shadow-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{localizedCapital}</span>
              </span>
              <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/20">
                {localizedArea}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white font-serif mb-4 drop-shadow-md">
              {localizedName}
            </h1>

            <p className="text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow line-clamp-3 mb-6">
              {localizedDescription}
            </p>

            {/* Region Key Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <div className="text-[11px] text-stone-300 font-semibold mb-0.5">{t.capitalLabel}</div>
                <div className="text-sm font-bold truncate">{localizedCapital}</div>
              </div>
              <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <div className="text-[11px] text-stone-300 font-semibold mb-0.5">{t.climateLabel}</div>
                <div className="text-xs font-medium line-clamp-1">{localizedClimate}</div>
              </div>
              <div className="col-span-2 sm:col-span-1 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <div className="text-[11px] text-[#D4AF37] font-semibold mb-0.5">{t.culturalIdentityLabel}</div>
                <div className="text-xs font-medium line-clamp-1">{localizedIdentity}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Assistant Quick Prompt Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#D4AF37]/30 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center sm:text-right rtl:sm:text-right ltr:sm:text-left">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#0F432A] to-[#D4AF37] flex items-center justify-center text-white shrink-0 shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0F432A]">
                {language === 'ar' ? `اسأل رحّال عن تاريخ ومعالم ${localizedName}` : `Ask Rahal about ${localizedName}`}
              </h4>
              <p className="text-xs text-stone-500">
                {language === 'ar' ? 'معلومات موثقة وشاملة عن التراث والمعالم والأكلات' : 'Documented facts on heritage, landmarks & cuisine'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onAskAboutRegion(localizedName)}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0F432A] hover:bg-[#145C3B] text-white text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
            <span>{t.askAIAboutRegion}</span>
          </button>
        </div>
      </section>

      {/* Interactive Media Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <RegionGalleryCarousel
          region={region}
          language={language}
          t={t}
          onAskAboutItem={(itemName) => onAskAboutRegion(localizedName, itemName)}
        />
      </section>

      {/* 3 Pillars Tabs Navigation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap items-center justify-center gap-2.5 border-b border-[#D4AF37]/30 pb-4">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-[#0F432A] text-[#FAF7F2] shadow-md'
                : 'bg-white text-stone-600 border border-stone-200 hover:bg-[#FAF7F2]'
            }`}
          >
            <span>{t.tabAll}</span>
          </button>
          
          {localizedFoods.length > 0 && (
            <button
              onClick={() => setActiveTab('food')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'food'
                  ? 'bg-[#0F432A] text-[#FAF7F2] shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-[#FAF7F2]'
              }`}
            >
              <Utensils className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.tabFood} ({localizedFoods.length})</span>
            </button>
          )}

          {localizedLandmarks.length > 0 && (
            <button
              onClick={() => setActiveTab('landmarks')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'landmarks'
                  ? 'bg-[#0F432A] text-[#FAF7F2] shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-[#FAF7F2]'
              }`}
            >
              <Landmark className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.tabLandmarks} ({localizedLandmarks.length})</span>
            </button>
          )}

          {localizedHistoryList.length > 0 && (
            <button
              onClick={() => setActiveTab('history')}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'history'
                  ? 'bg-[#0F432A] text-[#FAF7F2] shadow-md'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-[#FAF7F2]'
              }`}
            >
              <Scroll className="w-4 h-4 text-[#D4AF37]" />
              <span>{t.tabHistory} ({localizedHistoryList.length})</span>
            </button>
          )}
        </div>

        {/* Content Sections */}
        <div className="mt-8 space-y-16">
          
          {/* 1. FOOD SECTION */}
          {(activeTab === 'all' || activeTab === 'food') && localizedFoods.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#0F432A] font-serif text-2xl font-bold">
                <Utensils className="w-6 h-6 text-[#C59B27]" />
                <h3>{t.tabFood}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localizedFoods.map((food) => (
                  <div
                    key={food.id}
                    onClick={() => setSelectedFood(food)}
                    className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-stone-900">
                      <img
                        src={food.image}
                        alt={food.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-[#0F432A]/85 backdrop-blur-xs text-[#FAF7F2] text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                        {localizedName}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <h4 className="text-xl font-bold text-[#0F432A] font-serif mb-2">
                          {food.name}
                        </h4>
                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                          {food.culturalContext || food.description}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-[#0F5132] font-bold">
                        <span>{t.viewDetails}</span>
                        <ChevronLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. LANDMARKS SECTION */}
          {(activeTab === 'all' || activeTab === 'landmarks') && localizedLandmarks.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#0F432A] font-serif text-2xl font-bold">
                <Landmark className="w-6 h-6 text-[#C59B27]" />
                <h3>{t.tabLandmarks}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {localizedLandmarks.map((lm) => (
                  <div
                    key={lm.id}
                    onClick={() => setSelectedLandmark(lm)}
                    className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-md hover:shadow-xl transition-all cursor-pointer group flex flex-col"
                  >
                    <div className="relative h-52 w-full overflow-hidden bg-stone-900">
                      <img
                        src={lm.image}
                        alt={lm.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-[#0F432A]/85 backdrop-blur-xs text-[#FAF7F2] text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                        {lm.city || localizedCapital}
                      </div>
                    </div>
                    <div className="p-5 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-[#8B6E14] mb-1">
                          {lm.era}
                        </div>
                        <h4 className="text-xl font-bold text-[#0F432A] font-serif mb-2">
                          {lm.name}
                        </h4>
                        <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                          {lm.shortDescription || lm.historicalSignificance}
                        </p>
                      </div>
                      <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-[#0F5132] font-bold">
                        <span>{t.viewDetails}</span>
                        <ChevronLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. HISTORY SECTION */}
          {(activeTab === 'all' || activeTab === 'history') && localizedHistoryList.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#0F432A] font-serif text-2xl font-bold">
                <Scroll className="w-6 h-6 text-[#C59B27]" />
                <h3>{t.tabHistory}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {localizedHistoryList.map((hist) => (
                  <div
                    key={hist.id}
                    onClick={() => setSelectedHistory(hist)}
                    className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-md hover:shadow-xl transition-all cursor-pointer p-6 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{hist.dateOrCentury || hist.era}</span>
                        </div>
                        <span className="text-xs font-bold text-stone-400">
                          {hist.era}
                        </span>
                      </div>
                      <h4 className="text-xl font-bold text-[#0F432A] font-serif mb-2.5 group-hover:text-[#0F5132] transition-colors">
                        {hist.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3 mb-4">
                        {hist.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-[#0F5132] font-bold">
                      <span className="text-stone-400 font-normal truncate max-w-[200px]">
                        {hist.source || ''}
                      </span>
                      <div className="inline-flex items-center gap-1">
                        <span>{t.viewDetails}</span>
                        <ChevronLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* DETAIL MODAL: Food */}
      {selectedFood && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37] shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedFood(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-60 w-full rounded-2xl overflow-hidden mb-5 bg-stone-900">
              <img src={selectedFood.image} alt={selectedFood.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                {localizedName}
              </span>
              {selectedFood.source && (
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
                  {selectedFood.source}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-black text-[#0F432A] font-serif mb-3">{selectedFood.name}</h3>
            <p className="text-sm text-stone-700 leading-relaxed mb-5">{selectedFood.description}</p>
            <div className="space-y-4 bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4AF37]/20 mb-5">
              <div>
                <h5 className="text-xs font-bold text-[#0F5132] mb-1.5">{t.ingredientsTitle}:</h5>
                <div className="flex flex-wrap gap-1.5">
                  {selectedFood.ingredients.map((ing, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white text-stone-700 text-xs font-medium border border-stone-200">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h5 className="text-xs font-bold text-[#0F5132] mb-1">{t.culturalContextTitle}:</h5>
                <p className="text-xs text-stone-600 leading-relaxed">{selectedFood.culturalContext}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* DETAIL MODAL: Landmark */}
      {selectedLandmark && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37] shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedLandmark(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="h-60 w-full rounded-2xl overflow-hidden mb-5 bg-stone-900">
              <img src={selectedLandmark.image} alt={selectedLandmark.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                {selectedLandmark.era}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0F432A]/10 text-[#0F432A] text-xs font-bold">
                {selectedLandmark.city || localizedCapital}
              </span>
              {selectedLandmark.source && (
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
                  {selectedLandmark.source}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-black text-[#0F432A] font-serif mb-3">{selectedLandmark.name}</h3>
            <p className="text-sm text-stone-700 leading-relaxed mb-5">{selectedLandmark.shortDescription}</p>
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4AF37]/20 mb-5">
              <h5 className="text-xs font-bold text-[#0F5132] mb-1">{t.historicalSignificanceTitle}:</h5>
              <p className="text-xs text-stone-600 leading-relaxed">{selectedLandmark.historicalSignificance}</p>
            </div>
            {selectedLandmark.keyFacts && selectedLandmark.keyFacts.length > 0 && (
              <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200">
                <h5 className="text-xs font-bold text-[#0F432A] mb-2">أبرز الحقائق:</h5>
                <ul className="space-y-1">
                  {selectedLandmark.keyFacts.map((fact, idx) => (
                    <li key={idx} className="text-xs text-stone-600 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* DETAIL MODAL: History */}
      {selectedHistory && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37] shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedHistory(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedHistory.imageUrl && (
              <div className="h-56 w-full rounded-2xl overflow-hidden mb-5 bg-stone-900">
                <img src={selectedHistory.imageUrl} alt={selectedHistory.title} className="w-full h-full object-cover" />
              </div>
            )}
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                {selectedHistory.dateOrCentury}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0F432A]/10 text-[#0F432A] text-xs font-bold">
                {selectedHistory.era}
              </span>
              {selectedHistory.source && (
                <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium">
                  {selectedHistory.source}
                </span>
              )}
            </div>
            <h3 className="text-2xl font-black text-[#0F432A] font-serif mb-4">{selectedHistory.title}</h3>
            <p className="text-sm text-stone-700 leading-relaxed mb-5">{selectedHistory.description}</p>
            {selectedHistory.story && (
              <div className="bg-white p-4 rounded-2xl border border-stone-200 mb-5">
                <h5 className="text-xs font-bold text-[#0F432A] mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#D4AF37]" />
                  <span>القصة التاريخية الكاملة:</span>
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line">{selectedHistory.story}</p>
              </div>
            )}
            <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4AF37]/20">
              <h5 className="text-xs font-bold text-[#0F5132] mb-1">{t.historicalSignificanceTitle}:</h5>
              <p className="text-xs text-stone-600 leading-relaxed">{selectedHistory.significance}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
