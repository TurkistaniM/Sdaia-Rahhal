/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SAUDI_REGIONS } from './data/regionsData';
import { TRANSLATIONS, Language } from './data/translations';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SaudiMap } from './components/Map/SaudiMap';
import { ExploreCategories } from './components/ExploreCategories';
import { RegionPage } from './components/RegionPage';
import { FoodExplorer } from './components/FoodExplorer';
import { LandmarksExplorer } from './components/LandmarksExplorer';
import { HistoryTimeline } from './components/HistoryTimeline';
import { AssistantModal } from './components/AssistantModal';
import { HeritageQuiz } from './components/HeritageQuiz';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(null);
  const [activeCategoryModal, setActiveCategoryModal] = useState<
    'food' | 'landmarks' | 'history' | null
  >(null);
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [assistantPrompt, setAssistantPrompt] = useState<string | undefined>(undefined);

  // Load saved language on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem('rahal_language') as Language;
      if (savedLang && (savedLang === 'ar' || savedLang === 'en' || savedLang === 'fr' || savedLang === 'es')) {
        setLanguage(savedLang);
      }
    } catch {
      // Ignore local storage error
    }
  }, []);

  // Update HTML document direction and lang attribute whenever language changes
  useEffect(() => {
    const isRtl = language === 'ar';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
    try {
      localStorage.setItem('rahal_language', language);
    } catch {
      // Ignore
    }
  }, [language]);

  const handleSelectLanguage = (newLang: Language) => {
    setLanguage(newLang);
  };

  // Sync scroll to top when changing region
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedRegionId]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.ar;
  const selectedRegion = selectedRegionId
    ? SAUDI_REGIONS.find((r) => r.id === selectedRegionId) || null
    : null;

  const handleSelectRegion = (regionId: string) => {
    setSelectedRegionId(regionId);
    setActiveCategoryModal(null);
  };

  const handleGoHome = () => {
    setSelectedRegionId(null);
    setActiveCategoryModal(null);
  };

  const handleOpenAssistantWithPrompt = (prompt: string) => {
    setAssistantPrompt(prompt);
    setIsAssistantOpen(true);
  };

  const handleAskAboutRegion = (regionName: string, topic?: string) => {
    const prompt = topic
      ? `حدثني بالتفصيل عن ${topic} في منطقة ${regionName}`
      : `حدثني عن أبرز ملامح التاريخ والتراث والمعالم والمأكولات في منطقة ${regionName}`;
    handleOpenAssistantWithPrompt(prompt);
  };

  return (
    <div
      className="min-h-screen bg-[#FAF7F2] text-[#242220] flex flex-col selection:bg-[#D4AF37]/30 selection:text-[#0F432A] antialiased"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {/* Header */}
      <Header
        language={language}
        t={t}
        onSelectLanguage={handleSelectLanguage}
        onOpenAssistant={() => {
          setAssistantPrompt(undefined);
          setIsAssistantOpen(true);
        }}
        onOpenQuiz={() => setIsQuizOpen(true)}
        onSelectCategory={(cat) => setActiveCategoryModal(cat)}
        onSelectRegion={handleSelectRegion}
        onGoHome={handleGoHome}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {selectedRegion ? (
          /* Single Region Dedicated Page */
          <RegionPage
            region={selectedRegion}
            language={language}
            t={t}
            onBack={handleGoHome}
            onSelectRegion={handleSelectRegion}
            onAskAboutRegion={handleAskAboutRegion}
          />
        ) : (
          /* Homepage: Hero + Interactive Map + 4 Pillars Explore */
          <>
            <Hero
              t={t}
              language={language}
              onExploreClick={() => {
                const mapEl = document.getElementById('interactive-map-section');
                mapEl?.scrollIntoView({ behavior: 'smooth' });
              }}
              onOpenAssistant={() => {
                setAssistantPrompt(undefined);
                setIsAssistantOpen(true);
              }}
            />

            {/* Interactive Map Section */}
            <section
              id="interactive-map-section"
              className="scroll-mt-24 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <SaudiMap
                language={language}
                t={t}
                onSelectRegion={handleSelectRegion}
                selectedRegionId={selectedRegionId || undefined}
              />
            </section>

            {/* Explore Categories Section */}
            <ExploreCategories
              t={t}
              language={language}
              onSelectCategory={(category) => setActiveCategoryModal(category)}
            />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        t={t}
        language={language}
        onSelectRegion={handleSelectRegion}
        onOpenAssistant={() => {
          setAssistantPrompt(undefined);
          setIsAssistantOpen(true);
        }}
      />

      {/* --- MODALS & EXPLORERS --- */}

      {/* Food Explorer Modal */}
      {activeCategoryModal === 'food' && (
        <FoodExplorer
          language={language}
          t={t}
          onClose={() => setActiveCategoryModal(null)}
          onSelectRegion={handleSelectRegion}
          onAskAssistant={handleOpenAssistantWithPrompt}
        />
      )}

      {/* Landmarks Explorer Modal */}
      {activeCategoryModal === 'landmarks' && (
        <LandmarksExplorer
          language={language}
          t={t}
          onClose={() => setActiveCategoryModal(null)}
          onSelectRegion={handleSelectRegion}
          onAskAssistant={handleOpenAssistantWithPrompt}
        />
      )}

      {/* History Timeline Modal */}
      {activeCategoryModal === 'history' && (
        <HistoryTimeline
          language={language}
          t={t}
          onClose={() => setActiveCategoryModal(null)}
          onSelectRegion={handleSelectRegion}
          onAskAssistant={handleOpenAssistantWithPrompt}
        />
      )}

      {/* Heritage Quiz Modal */}
      {isQuizOpen && (
        <HeritageQuiz
          language={language}
          t={t}
          onClose={() => setIsQuizOpen(false)}
          onExploreRegion={handleSelectRegion}
        />
      )}

      {/* Gemini AI Assistant Modal */}
      {isAssistantOpen && (
        <AssistantModal
          language={language}
          t={t}
          onClose={() => setIsAssistantOpen(false)}
          initialPrompt={assistantPrompt}
        />
      )}
    </div>
  );
}
