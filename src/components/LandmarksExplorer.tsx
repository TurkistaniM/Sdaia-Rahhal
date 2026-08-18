import React, { useState, useMemo } from 'react';
import { SAUDI_REGIONS } from '../data/regionsData';
import { LandmarkItem } from '../types';
import {
  Language,
  TranslationStrings,
  getRegionName,
} from '../data/translations';
import { getLocalizedLandmark } from '../data/translationsData';
import { Landmark, Search, Filter, X, MapPin, ChevronLeft, Sparkles, BookOpen } from 'lucide-react';
import { ImagePlaceholder } from './ImagePlaceholder';

interface LandmarksExplorerProps {
  language: Language;
  t: TranslationStrings;
  onClose: () => void;
  onSelectRegion: (regionId: string) => void;
  onAskAssistant: (prompt: string) => void;
}

export const LandmarksExplorer: React.FC<LandmarksExplorerProps> = ({
  language,
  t,
  onClose,
  onSelectRegion,
  onAskAssistant,
}) => {
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLandmarkDetail, setSelectedLandmarkDetail] = useState<LandmarkItem | null>(null);

  const allLandmarks: LandmarkItem[] = useMemo(() => {
    return SAUDI_REGIONS.flatMap((region) => region.landmarks).map((lm) =>
      getLocalizedLandmark(lm, language)
    );
  }, [language]);

  const filteredLandmarks = useMemo(() => {
    return allLandmarks.filter((lm) => {
      const matchesRegion =
        selectedRegionFilter === 'all' || lm.regionId === selectedRegionFilter;
      const matchesSearch =
        lm.arabicName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lm.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lm.historicalSignificance.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [allLandmarks, selectedRegionFilter, searchQuery]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-6xl h-[92vh] max-h-[92vh] border border-[#D4AF37] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="shrink-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#D4AF37]/20 text-[#8B6E14]">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F432A] font-serif">
                {t.landmarksModalTitle}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {t.landmarksModalSub}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Controls Bar */}
        <div className="shrink-0 bg-white/60 backdrop-blur-xs px-6 py-3 border-b border-stone-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute right-3.5 rtl:right-3.5 ltr:left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.searchLandmarksPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D4AF37]/40 rounded-xl pr-10 pl-4 rtl:pr-10 rtl:pl-4 ltr:pl-10 ltr:pr-4 py-2 text-xs sm:text-sm font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
            />
          </div>

          {/* Region Dropdown Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-[#8B6E14]" />
            <select
              value={selectedRegionFilter}
              onChange={(e) => setSelectedRegionFilter(e.target.value)}
              className="bg-white border border-[#D4AF37]/40 rounded-xl px-3 py-2 text-xs sm:text-sm font-bold text-[#0F432A] focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
            >
              <option value="all">{t.allRegionsFilter}</option>
              {SAUDI_REGIONS.map((region) => (
                <option key={region.id} value={region.id}>
                  {getRegionName(region.id, language)}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Landmarks Grid Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold text-stone-500">
              {filteredLandmarks.length} {t.landmarksCount}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLandmarks.map((lm) => {
              const regName = getRegionName(lm.regionId, language);
              return (
                <div
                  key={lm.id}
                  onClick={() => setSelectedLandmarkDetail(lm)}
                  className="bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/25 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-stone-900">
                    {lm.image ? (
                      <img
                        src={lm.image}
                        alt={lm.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <ImagePlaceholder
                        title={lm.name}
                        icon={<Landmark className="w-6 h-6 text-[#D4AF37]" />}
                        language={language}
                        className="w-full h-full"
                      />
                    )}
                    <div className="absolute top-3 right-3 bg-[#0F432A]/85 backdrop-blur-xs text-[#FAF7F2] text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1 shadow-sm">
                      <MapPin className="w-3 h-3 text-[#D4AF37]" />
                      <span>{regName}</span>
                    </div>
                    {lm.unescoHeritage && (
                      <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#0F432A] text-[10px] px-2 py-0.5 rounded-full font-extrabold shadow-sm">
                        {t.unescoRegistered}
                      </div>
                    )}
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-[#8B6E14] mb-1">
                        {lm.era} • {lm.city}
                      </div>
                      <h4 className="text-lg font-bold text-[#0F432A] font-serif mb-1">
                        {lm.name}
                      </h4>
                      <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                        {lm.shortDescription}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                      <span className="text-xs font-medium text-stone-500">
                        {lm.city}
                      </span>
                      <span className="text-xs font-bold text-[#0F5132] flex items-center gap-1">
                        {t.viewDetails}
                        <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Landmark Single Detail Popover Modal */}
      {selectedLandmarkDetail && (
        <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37] shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedLandmarkDetail(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-60 w-full rounded-2xl overflow-hidden mb-5">
              {selectedLandmarkDetail.image ? (
                <img
                  src={selectedLandmarkDetail.image}
                  alt={selectedLandmarkDetail.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <ImagePlaceholder
                  title={selectedLandmarkDetail.name}
                  icon={<Landmark className="w-8 h-8 text-[#D4AF37]" />}
                  language={language}
                  className="w-full h-full rounded-2xl"
                />
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-[#0F432A] text-[#FAF7F2] text-xs font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {getRegionName(selectedLandmarkDetail.regionId, language)} - {selectedLandmarkDetail.city}
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                {selectedLandmarkDetail.era}
              </span>
              {selectedLandmarkDetail.unescoHeritage && (
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-[#0F432A] text-xs font-bold">
                  {t.unescoRegistered}
                </span>
              )}
            </div>

            <h3 className="text-2xl font-black text-[#0F432A] font-serif mb-3">
              {selectedLandmarkDetail.name}
            </h3>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              {selectedLandmarkDetail.shortDescription}
            </p>

            <div className="space-y-4 bg-[#FAF7F2] p-5 rounded-2xl border border-[#D4AF37]/25 mb-6">
              <div>
                <h5 className="text-xs font-bold text-[#0F5132] mb-1">
                  {t.historicalSignificanceTitle}:
                </h5>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {selectedLandmarkDetail.historicalSignificance}
                </p>
              </div>

              {selectedLandmarkDetail.keyFacts && selectedLandmarkDetail.keyFacts.length > 0 && (
                <div>
                  <h5 className="text-xs font-bold text-[#0F5132] mb-2">
                    {t.keyFactsTitle}:
                  </h5>
                  <ul className="space-y-1.5">
                    {selectedLandmarkDetail.keyFacts.map((fact, i) => (
                      <li key={i} className="text-xs text-stone-600 flex items-start gap-2">
                        <span className="text-[#D4AF37] font-bold">✦</span>
                        <span>{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={() => {
                  onSelectRegion(selectedLandmarkDetail.regionId);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl bg-[#0F5132] text-white text-xs font-bold hover:bg-[#14623e] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.openRegionPage}</span>
              </button>

              <button
                onClick={() => {
                  const regName = getRegionName(selectedLandmarkDetail.regionId, language);
                  const prompt =
                    language === 'ar'
                      ? `حدثني بالتفصيل عن معلم ${selectedLandmarkDetail.name} في ${regName} وأهميته التاريخية والمعمارية.`
                      : language === 'fr'
                      ? `Parlez-moi en détail du monument ${selectedLandmarkDetail.name} de la région de ${regName}, de son importance historique et architecturale.`
                      : language === 'es'
                      ? `Háblame en detalle sobre el monumento ${selectedLandmarkDetail.name} de la región de ${regName}, su importancia histórica y arquitectónica.`
                      : `Tell me in detail about the landmark "${selectedLandmarkDetail.name}" in ${regName}, its historical significance, and architectural features.`;
                  onAskAssistant(prompt);
                }}
                className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#0F432A] text-xs font-bold hover:bg-[#e0bc43] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.askAboutRegionBtn}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
