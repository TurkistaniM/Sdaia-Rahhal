import React, { useState, useMemo } from 'react';
import { SAUDI_REGIONS } from '../data/regionsData';
import { HistoricalEvent } from '../types';
import {
  Language,
  TranslationStrings,
  getRegionName,
} from '../data/translations';
import { getLocalizedHistory } from '../data/translationsData';
import { Scroll, Search, Filter, X, MapPin, Sparkles, BookOpen, Calendar } from 'lucide-react';

interface HistoryTimelineProps {
  language: Language;
  t: TranslationStrings;
  onClose: () => void;
  onSelectRegion: (regionId: string) => void;
  onAskAssistant: (prompt: string) => void;
}

export const HistoryTimeline: React.FC<HistoryTimelineProps> = ({
  language,
  t,
  onClose,
  onSelectRegion,
  onAskAssistant,
}) => {
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedHistoryDetail, setSelectedHistoryDetail] = useState<{
    event: HistoricalEvent;
    regionId: string;
  } | null>(null);

  const allEvents = useMemo(() => {
    return SAUDI_REGIONS.flatMap((region) =>
      region.history.map((h) => ({
        ...getLocalizedHistory(h, language),
        regionId: region.id,
      }))
    );
  }, [language]);

  const filteredEvents = useMemo(() => {
    return allEvents.filter((ev) => {
      const matchesRegion =
        selectedRegionFilter === 'all' || ev.regionId === selectedRegionFilter;
      const matchesSearch =
        ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.dateOrCentury.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ev.significance.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesRegion && matchesSearch;
    });
  }, [allEvents, selectedRegionFilter, searchQuery]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-6xl h-[92vh] max-h-[92vh] border border-[#D4AF37] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="shrink-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#D4AF37]/20 text-[#8B6E14]">
              <Scroll className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#0F432A] font-serif">
                {t.historyModalTitle}
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                {t.historyModalSub}
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
              placeholder={t.searchHistoryPlaceholder}
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

        {/* Timeline Events Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold text-stone-500">
              {filteredEvents.length} {t.eventsCount}
            </span>
          </div>

          <div className="space-y-4">
            {filteredEvents.map((ev) => {
              const regName = getRegionName(ev.regionId, language);
              return (
                <div
                  key={ev.id}
                  onClick={() => setSelectedHistoryDetail({ event: ev, regionId: ev.regionId })}
                  className="bg-white rounded-2xl p-5 border border-[#D4AF37]/25 shadow-xs hover:shadow-md transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-2xl bg-[#0F432A]/10 text-[#0F432A] group-hover:bg-[#0F432A] group-hover:text-white transition-colors shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1.5">
                        <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                          {ev.dateOrCentury}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full bg-[#0F432A]/10 text-[#0F432A] text-xs font-bold flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#D4AF37]" />
                          {regName}
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-[#0F432A] font-serif group-hover:text-[#C59B27] transition-colors">
                        {ev.title}
                      </h4>
                      <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                        {ev.description}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-1 text-xs font-bold text-[#0F5132]">
                    <span>{t.viewDetails}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* History Event Popover Modal */}
      {selectedHistoryDetail && (
        <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#D4AF37] shadow-2xl p-6 relative">
            <button
              onClick={() => setSelectedHistoryDetail(null)}
              className="absolute top-4 left-4 p-2 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#8B6E14] text-xs font-bold">
                {selectedHistoryDetail.event.dateOrCentury}
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0F432A] text-[#FAF7F2] text-xs font-bold flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                {getRegionName(selectedHistoryDetail.regionId, language)}
              </span>
            </div>

            <h3 className="text-2xl font-black text-[#0F432A] font-serif mb-4">
              {selectedHistoryDetail.event.title}
            </h3>

            <p className="text-sm text-stone-700 leading-relaxed mb-6 font-medium">
              {selectedHistoryDetail.event.description}
            </p>

            <div className="bg-[#FAF7F2] p-5 rounded-2xl border border-[#D4AF37]/25 mb-6">
              <h5 className="text-xs font-bold text-[#0F5132] mb-1">
                {t.historicalSignificanceTitle}:
              </h5>
              <p className="text-xs text-stone-600 leading-relaxed">
                {selectedHistoryDetail.event.significance}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-stone-100">
              <button
                onClick={() => {
                  onSelectRegion(selectedHistoryDetail.regionId);
                  onClose();
                }}
                className="px-4 py-2.5 rounded-xl bg-[#0F5132] text-white text-xs font-bold hover:bg-[#14623e] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-4 h-4" />
                <span>{t.openRegionPage}</span>
              </button>

              <button
                onClick={() => {
                  const regName = getRegionName(selectedHistoryDetail.regionId, language);
                  const prompt =
                    language === 'ar'
                      ? `حدثني بالتفصيل عن حدث ${selectedHistoryDetail.event.title} في ${regName} وسياقه التاريخي ودلالته.`
                      : language === 'fr'
                      ? `Parlez-moi en détail de l'événement "${selectedHistoryDetail.event.title}" dans la région de ${regName} et de son importance historique.`
                      : language === 'es'
                      ? `Háblame en detalle sobre el evento "${selectedHistoryDetail.event.title}" en la región de ${regName} y su importancia histórica.`
                      : `Tell me in detail about the event "${selectedHistoryDetail.event.title}" in ${regName} and its historical significance.`;
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
