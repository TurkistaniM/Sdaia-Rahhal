import React from 'react';
import { Utensils, Landmark, Scroll, ChevronLeft, Award } from 'lucide-react';
import { TranslationStrings, Language } from '../data/translations';

interface ExploreCategoriesProps {
  t: TranslationStrings;
  language: Language;
  onSelectCategory: (category: 'food' | 'landmarks' | 'history') => void;
}

export const ExploreCategories: React.FC<ExploreCategoriesProps> = ({
  t,
  language,
  onSelectCategory,
}) => {
  const categories = [
    {
      id: 'food' as const,
      title: t.pillarFoodTitle,
      subtitle: t.pillarFoodSub,
      icon: Utensils,
      emoji: '🍲',
      badge: t.pillarFoodBadge,
      image: '/images/foods/F01.jpg',
      description: t.pillarFoodDesc,
      countText: t.pillarFoodCount,
      borderColor: 'hover:border-[#C59B27]'
    },
    {
      id: 'landmarks' as const,
      title: t.pillarLandmarksTitle,
      subtitle: t.pillarLandmarksSub,
      icon: Landmark,
      emoji: '🏛️',
      badge: t.pillarLandmarksBadge,
      image: '/images/regions/R01.jpg',
      description: t.pillarLandmarksDesc,
      countText: t.pillarLandmarksCount,
      borderColor: 'hover:border-[#0F5132]'
    },
    {
      id: 'history' as const,
      title: t.pillarHistoryTitle,
      subtitle: t.pillarHistorySub,
      icon: Scroll,
      emoji: '📜',
      badge: t.pillarHistoryBadge,
      image: '/images/history_category.jpg',
      description: t.pillarHistoryDesc,
      countText: t.pillarHistoryCount,
      borderColor: 'hover:border-[#D4AF37]'
    }
  ];

  return (
    <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 text-[#C59B27] font-bold text-sm mb-2">
          <Award className="w-4 h-4" />
          <span>{t.pillarsBadge}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F432A] font-serif mb-3">
          {language === 'ar' ? 'استكشف محاور رحّال الثلاثة' : t.pillarsTitle}
        </h2>
        <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
          {language === 'ar'
            ? 'انغمس في أبعاد التراث السعودي من خلال ثلاثة أبواب رئيسية تروي قصة الأرض والإنسان والأصالة عبر العصور.'
            : t.pillarsDesc}
        </p>
      </div>

      {/* 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`group relative bg-white rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between ${cat.borderColor}`}
            >
              {/* Top Banner */}
              <div className="relative h-56 w-full overflow-hidden bg-stone-900">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 right-3 bg-[#FAF7F2]/95 backdrop-blur-xs text-[#0F432A] text-xs font-black px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-[#D4AF37]/50">
                  <span>{cat.emoji}</span>
                  <span>{cat.badge}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-[#8B6E14] font-bold text-xs">
                    <Icon className="w-4 h-4 text-[#C59B27]" />
                    <span>{cat.subtitle}</span>
                  </div>
                  <h3 className="text-xl font-black text-[#0F432A] font-serif mb-2 group-hover:text-[#0F5132] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8B6E14]">
                    {cat.countText}
                  </span>
                  <div className="inline-flex items-center gap-1 text-xs font-bold text-[#0F5132] group-hover:text-[#D4AF37] transition-colors">
                    <span>{t.explorePillarBtn}</span>
                    <ChevronLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180 transform group-hover:translate-x-[-2px] transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
