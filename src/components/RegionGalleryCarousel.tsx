import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  ChevronRight,
  ChevronLeft,
  Pause,
  Play,
  Maximize2,
  X,
  Camera,
  Layers,
  Utensils,
  Landmark,
  Palette,
} from 'lucide-react';
import { Region } from '../types/index';
import { Language, TranslationStrings, TRANSLATIONS, getRegionName, getRegionCapital, getRegionShortSummary } from '../data/translations';
import { getLocalizedFood, getLocalizedLandmark, getLocalizedCulture } from '../data/translationsData';
import { ImagePlaceholder } from './ImagePlaceholder';

export interface GallerySlide {
  id: string;
  image: string;
  title: string;
  category: string;
  categoryType: 'landmark' | 'food' | 'hero';
  tag?: string;
  description: string;
}

interface RegionGalleryCarouselProps {
  region: Region;
  language?: Language;
  t?: TranslationStrings;
  onAskAboutItem?: (itemName: string) => void;
  onSelectFood?: (foodId: string) => void;
  onSelectLandmark?: (landmarkId: string) => void;
}

export const RegionGalleryCarousel: React.FC<RegionGalleryCarouselProps> = ({
  region,
  language = 'ar',
  t,
}) => {
  const activeLang: Language = (language as Language) || 'ar';
  const currentT = t || TRANSLATIONS[activeLang] || TRANSLATIONS.ar;
  const regName = getRegionName(region.id, activeLang);
  const regCapital = getRegionCapital(region.id, activeLang) || region.capital;
  const regSummary = getRegionShortSummary(region.id, activeLang, region.shortSummary);

  const getCategoryLabel = (type: 'hero' | 'landmark' | 'food') => {
    switch (type) {
      case 'hero':
        return activeLang === 'ar' ? 'نظرة عامة' : activeLang === 'fr' ? 'Aperçu' : activeLang === 'es' ? 'Visión general' : 'Overview';
      case 'landmark':
        return currentT.categoryLandmark;
      case 'food':
        return currentT.categoryFood;
    }
  };

  // Build slide items from localized region data - strictly only items with valid images
  const slides: GallerySlide[] = useMemo(() => {
    const locLandmarks = region.landmarks
      .filter((l) => Boolean(l.image && l.image.trim().length > 0))
      .map((l) => getLocalizedLandmark(l, activeLang));
    const locFoods = region.foods
      .filter((f) => Boolean(f.image && f.image.trim().length > 0))
      .map((f) => getLocalizedFood(f, activeLang));

    const list: GallerySlide[] = [];

    if (region.heroImage && region.heroImage.trim().length > 0) {
      list.push({
        id: `hero-${region.id}`,
        image: region.heroImage,
        title: `${regName} - ${currentT.pillarLandmarksTitle}`,
        category: getCategoryLabel('hero'),
        categoryType: 'hero',
        tag: regCapital,
        description: regSummary,
      });
    }

    if (region.capitalImage && region.capitalImage.trim().length > 0) {
      list.push({
        id: `capital-${region.id}`,
        image: region.capitalImage,
        title: `${regCapital} - ${currentT.capitalLabel}`,
        category: currentT.capitalLabel,
        categoryType: 'hero',
        tag: regCapital,
        description: `${currentT.capitalLabel}: ${regCapital} - ${regName}`,
      });
    }

    locLandmarks.forEach((l) => {
      list.push({
        id: l.id,
        image: l.image,
        title: l.name,
        category: getCategoryLabel('landmark'),
        categoryType: 'landmark' as const,
        tag: l.city,
        description: l.shortDescription,
      });
    });

    locFoods.forEach((f) => {
      list.push({
        id: f.id,
        image: f.image,
        title: f.name,
        category: getCategoryLabel('food'),
        categoryType: 'food' as const,
        tag: activeLang === 'ar' ? f.arabicName : f.name,
        description: f.description,
      });
    });

    return list;
  }, [region, activeLang, currentT, regName, regCapital, regSummary]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [fadeState, setFadeState] = useState<'fade-in' | 'fade-out'>('fade-in');

  const goToSlide = useCallback((index: number) => {
    setFadeState('fade-out');
    setTimeout(() => {
      setCurrentIndex(index);
      setFadeState('fade-in');
    }, 200);
  }, []);

  const handleNext = useCallback(() => {
    goToSlide((currentIndex + 1) % slides.length);
  }, [currentIndex, slides.length, goToSlide]);

  const handlePrev = useCallback(() => {
    goToSlide((currentIndex - 1 + slides.length) % slides.length);
  }, [currentIndex, slides.length, goToSlide]);

  // Autoplay timer
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPlaying, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        language === 'ar' ? handlePrev() : handleNext();
      } else if (e.key === 'ArrowLeft') {
        language === 'ar' ? handleNext() : handlePrev();
      } else if (e.key === 'Escape' && isFullScreen) {
        setIsFullScreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [language, isFullScreen, handleNext, handlePrev]);

  if (!slides.length) return null;

  const currentSlide = slides[currentIndex];

  const getCategoryIcon = (type: GallerySlide['categoryType']) => {
    switch (type) {
      case 'landmark':
        return <Landmark className="w-3.5 h-3.5" />;
      case 'food':
        return <Utensils className="w-3.5 h-3.5" />;
      default:
        return <Layers className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full bg-white rounded-3xl p-4 sm:p-6 border border-[#D4AF37]/30 shadow-lg">
      {/* Header Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-[#D4AF37]/20 text-[#8B6E14]">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0F432A] font-serif">
              {currentT.galleryTitle}
            </h3>
            <p className="text-xs text-stone-500">{currentT.gallerySubtitle}</p>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-[#D4AF37]/20 text-xs font-bold text-[#0F432A] transition-colors cursor-pointer border border-stone-200"
            title={isPlaying ? currentT.pauseAutoplay : currentT.playAutoplay}
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5" />
                <span>{currentT.pauseAutoplay}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5" />
                <span>{currentT.playAutoplay}</span>
              </>
            )}
          </button>

          <button
            onClick={() => setIsFullScreen(true)}
            className="p-2 rounded-xl bg-stone-100 hover:bg-[#D4AF37]/20 text-[#0F432A] border border-stone-200 hover:border-[#D4AF37]/40 transition-all cursor-pointer"
            title={currentT.fullscreen}
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Carousel Display Area */}
      <div className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] rounded-2xl overflow-hidden bg-stone-950 group">
        {/* Active Image with Fade-in Effect */}
        <div
          className={`w-full h-full transition-opacity duration-500 ease-in-out ${
            fadeState === 'fade-in' ? 'opacity-100 scale-100' : 'opacity-0 scale-98'
          }`}
        >
          {currentSlide.image ? (
            <img
              key={currentSlide.id}
              src={currentSlide.image}
              alt={currentSlide.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover select-none animate-fadeIn"
            />
          ) : (
            <ImagePlaceholder
              title={currentSlide.title}
              icon={getCategoryIcon(currentSlide.categoryType)}
              language={activeLang}
              className="w-full h-full"
            />
          )}
        </div>

        {/* Ambient Dark Gradient for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 rtl:right-4 ltr:left-4 z-10 flex items-center gap-2">
          <span className="flex items-center gap-1.5 bg-[#0F432A]/90 backdrop-blur-md text-[#F5E6C8] border border-[#D4AF37]/50 px-3.5 py-1 rounded-full text-xs font-bold shadow-lg">
            {getCategoryIcon(currentSlide.categoryType)}
            <span>{currentSlide.category}</span>
          </span>
          {currentSlide.tag && (
            <span className="bg-black/60 backdrop-blur-md text-white/90 border border-white/20 px-3 py-1 rounded-full text-xs font-medium">
              {currentSlide.tag}
            </span>
          )}
        </div>

        {/* Slide Counter Top */}
        <div className="absolute top-4 rtl:left-4 ltr:right-4 z-10 bg-black/60 backdrop-blur-md text-white/90 px-3 py-1 rounded-full text-xs font-bold border border-white/20">
          {currentIndex + 1} / {slides.length}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={language === 'ar' ? handlePrev : handleNext}
          aria-label={currentT.previousPhoto}
          className="absolute rtl:right-3 rtl:sm:right-5 ltr:left-3 ltr:sm:left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0F5132]/90 text-white backdrop-blur-md border border-white/20 hover:border-[#D4AF37] flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
        >
          {language === 'ar' ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
        </button>

        <button
          onClick={language === 'ar' ? handleNext : handlePrev}
          aria-label={currentT.nextPhoto}
          className="absolute rtl:left-3 rtl:sm:left-5 ltr:right-3 ltr:sm:right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-[#0F5132]/90 text-white backdrop-blur-md border border-white/20 hover:border-[#D4AF37] flex items-center justify-center transition-all shadow-xl hover:scale-110 cursor-pointer"
        >
          {language === 'ar' ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
        </button>

        {/* Bottom Caption Overlay */}
        <div className="absolute bottom-0 inset-x-0 z-10 p-5 sm:p-8 text-white">
          <div className="max-w-3xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#FDFBF7] font-serif mb-2 drop-shadow-md">
              {currentSlide.title}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-stone-200 line-clamp-2 leading-relaxed drop-shadow-sm font-normal">
              {currentSlide.description}
            </p>
          </div>
        </div>

        {/* Progress Bar for Autoplay */}
        {isPlaying && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div
              key={currentIndex}
              className="h-full bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] animate-progress"
              style={{ animationDuration: '4500ms' }}
            />
          </div>
        )}
      </div>

      {/* Interactive Bottom Filmstrip Thumbnails */}
      <div className="mt-4 flex items-center gap-2.5 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-[#D4AF37]/40 scrollbar-track-transparent">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'ring-3 ring-[#D4AF37] scale-105 shadow-md shadow-[#D4AF37]/30 opacity-100'
                  : 'opacity-60 hover:opacity-100 hover:scale-102 ring-1 ring-stone-200'
              }`}
            >
              {slide.image ? (
                <img
                  src={slide.image}
                  alt={slide.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-[#0F432A] to-[#155336] flex items-center justify-center text-[#D4AF37] text-[10px] font-bold p-1 text-center line-clamp-1">
                  {slide.title}
                </div>
              )}
              {isActive && (
                <div className="absolute inset-0 bg-[#0F5132]/20 flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] shadow-sm animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isFullScreen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fadeIn">
          {/* Top Bar */}
          <div className="flex items-center justify-between text-white z-20">
            <div>
              <span className="text-xs text-[#D4AF37] font-bold">{currentSlide.category}</span>
              <h4 className="text-lg font-bold">{currentSlide.title}</h4>
            </div>

            <button
              onClick={() => setIsFullScreen(false)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              title={currentT.close}
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Centered Large Image with Fade */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            {currentSlide.image ? (
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl transition-opacity duration-300"
              />
            ) : (
              <ImagePlaceholder
                title={currentSlide.title}
                icon={getCategoryIcon(currentSlide.categoryType)}
                language={activeLang}
                className="max-h-[80vh] w-full max-w-3xl rounded-2xl"
              />
            )}

            {/* Lightbox Nav Arrows */}
            <button
              onClick={language === 'ar' ? handlePrev : handleNext}
              className="absolute rtl:right-4 ltr:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#0F5132] text-white flex items-center justify-center transition-all cursor-pointer"
            >
              {language === 'ar' ? <ChevronRight className="w-7 h-7" /> : <ChevronLeft className="w-7 h-7" />}
            </button>

            <button
              onClick={language === 'ar' ? handleNext : handlePrev}
              className="absolute rtl:left-4 ltr:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-[#0F5132] text-white flex items-center justify-center transition-all cursor-pointer"
            >
              {language === 'ar' ? <ChevronLeft className="w-7 h-7" /> : <ChevronRight className="w-7 h-7" />}
            </button>
          </div>

          {/* Bottom Caption in Fullscreen */}
          <div className="text-center text-white/90 max-w-2xl mx-auto">
            <p className="text-sm sm:text-base leading-relaxed">{currentSlide.description}</p>
            <div className="mt-2 text-xs text-stone-400">
              {currentIndex + 1} / {slides.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
