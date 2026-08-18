import React, { useLayoutEffect, useRef, useState } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5map from '@amcharts/amcharts5/map';
import am5geodata_saudiArabiaLow from '@amcharts/amcharts5-geodata/saudiArabiaLow';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { SAUDI_REGIONS } from '../../data/regionsData';
import {
  Language,
  TranslationStrings,
  getRegionName,
  getRegionCapital,
  getRegionShortSummary,
  getRegionCityPin,
  REGION_LOCALIZATIONS,
} from '../../data/translations';
import { MapPin, Compass, RotateCcw, ZoomIn, ZoomOut, ChevronLeft } from 'lucide-react';

interface SaudiMapProps {
  language: Language;
  t: TranslationStrings;
  onSelectRegion: (regionId: string) => void;
  selectedRegionId?: string;
}

// Mapping amCharts GeoData IDs to our internal region IDs & colors
const REGION_ID_MAP: Record<string, { id: string; color: string; hoverColor: string }> = {
  'SA-01': { id: 'riyadh', color: '#1B4D3E', hoverColor: '#D4AF37' },
  'SA-02': { id: 'makkah', color: '#164839', hoverColor: '#D4AF37' },
  'SA-03': { id: 'madinah', color: '#1D5344', hoverColor: '#D4AF37' },
  'SA-04': { id: 'eastern', color: '#144033', hoverColor: '#D4AF37' },
  'SA-05': { id: 'qassim', color: '#235D4C', hoverColor: '#D4AF37' },
  'SA-06': { id: 'hail', color: '#1F5747', hoverColor: '#D4AF37' },
  'SA-07': { id: 'tabuk', color: '#1A4D3F', hoverColor: '#D4AF37' },
  'SA-08': { id: 'northern', color: '#256352', hoverColor: '#D4AF37' },
  'SA-09': { id: 'jazan', color: '#225B4B', hoverColor: '#D4AF37' },
  'SA-10': { id: 'najran', color: '#194A3C', hoverColor: '#D4AF37' },
  'SA-11': { id: 'bahah', color: '#276856', hoverColor: '#D4AF37' },
  'SA-12': { id: 'jouf', color: '#1B5041', hoverColor: '#D4AF37' },
  'SA-14': { id: 'asir', color: '#164738', hoverColor: '#D4AF37' },
};

export const SaudiMap: React.FC<SaudiMapProps> = ({
  language,
  t,
  onSelectRegion,
  selectedRegionId,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<am5.Root | null>(null);
  const chartInstanceRef = useRef<am5map.MapChart | null>(null);
  const polygonSeriesRef = useRef<am5map.MapPolygonSeries | null>(null);

  const [hoveredRegion, setHoveredRegion] = useState<{
    id: string;
    name: string;
    capital: string;
    summary: string;
    heroImage?: string;
  } | null>(null);

  useLayoutEffect(() => {
    if (!chartRef.current) return;

    // Create root element
    const root = am5.Root.new(chartRef.current);
    rootRef.current = root;

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create Map Chart with optimized bounding box for Saudi Arabia
    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: 'translateX',
        panY: 'translateY',
        projection: am5map.geoMercator(),
        homeGeoPoint: { longitude: 45.0, latitude: 24.0 },
        homeZoomLevel: 1,
        wheelY: 'zoom',
        pinchZoom: true,
        maxZoomLevel: 6,
        minZoomLevel: 0.8,
      })
    );
    chartInstanceRef.current = chart;

    // Create Polygon Series for Saudi Arabia Regions
    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_saudiArabiaLow,
        valueField: 'value',
        calculateAggregates: true,
      })
    );
    polygonSeriesRef.current = polygonSeries;

    // Configure polygon appearance
    polygonSeries.mapPolygons.template.setAll({
      interactive: true,
      fill: am5.color(0x1b4d3e),
      stroke: am5.color(0xd4af37),
      strokeWidth: 1.5,
      strokeOpacity: 0.85,
      cursorOverStyle: 'pointer',
      shadowColor: am5.color(0x000000),
      shadowBlur: 12,
      shadowOffsetX: 2,
      shadowOffsetY: 4,
      shadowOpacity: 0.25,
    });

    // Sleek custom tooltip styling
    const customTooltip = am5.Tooltip.new(root, {
      getFillFromSprite: false,
      autoTextColor: false,
      pointerOrientation: 'vertical',
      animationDuration: 150,
      background: am5.PointedRectangle.new(root, {
        fill: am5.color(0x0f432a),
        stroke: am5.color(0xd4af37),
        strokeWidth: 1.5,
        cornerRadius: 10,
        shadowColor: am5.color(0x000000),
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowOpacity: 0.35,
      }),
    });

    customTooltip.label.setAll({
      fill: am5.color(0xfff9ee),
      fontSize: 13,
      fontWeight: '700',
      textAlign: 'center',
      paddingTop: 6,
      paddingBottom: 6,
      paddingLeft: 12,
      paddingRight: 12,
      direction: language === 'ar' ? 'rtl' : 'ltr',
    });

    polygonSeries.set('tooltip', customTooltip);

    // Provide localized region name in tooltip
    polygonSeries.mapPolygons.template.adapters.add('tooltipText', (_text, target) => {
      const dataContext = target.dataItem?.dataContext as { id?: string; name?: string } | undefined;
      const geoId = dataContext?.id;
      if (geoId && REGION_ID_MAP[geoId]) {
        const rId = REGION_ID_MAP[geoId].id;
        const localizedName = getRegionName(rId, language);
        return `📍 ${localizedName}`;
      }
      return '';
    });

    // Custom data binding for colors
    polygonSeries.mapPolygons.template.adapters.add('fill', (fill, target) => {
      const dataItem = target.dataItem;
      const dataContext = dataItem?.dataContext as { id?: string; name?: string } | undefined;
      const geoId = dataContext?.id;
      if (geoId && REGION_ID_MAP[geoId]) {
        const regionMeta = REGION_ID_MAP[geoId];
        if (selectedRegionId === regionMeta.id) {
          return am5.color(0xc59b27); // Gold highlight
        }
        return am5.color(regionMeta.color);
      }
      return fill;
    });

    // Hover state
    polygonSeries.mapPolygons.template.states.create('hover', {
      fill: am5.color(0xd4af37),
      stroke: am5.color(0xffffff),
      strokeWidth: 2.5,
      scale: 1.01,
    });

    // Click event handler
    polygonSeries.mapPolygons.template.events.on('click', (ev) => {
      const dataItem = ev.target.dataItem;
      const dataContext = dataItem?.dataContext as { id?: string; name?: string } | undefined;
      const geoId = dataContext?.id;

      if (geoId && REGION_ID_MAP[geoId]) {
        const targetRegionId = REGION_ID_MAP[geoId].id;
        onSelectRegion(targetRegionId);
      }
    });

    // Pointer over event for preview card
    polygonSeries.mapPolygons.template.events.on('pointerover', (ev) => {
      const dataItem = ev.target.dataItem;
      const dataContext = dataItem?.dataContext as { id?: string; name?: string } | undefined;
      const geoId = dataContext?.id;

      if (geoId && REGION_ID_MAP[geoId]) {
        const rId = REGION_ID_MAP[geoId].id;
        const regionData = SAUDI_REGIONS.find((r) => r.id === rId);
        if (regionData) {
          setHoveredRegion({
            id: regionData.id,
            name: getRegionName(rId, language),
            capital: getRegionCapital(rId, language),
            summary: getRegionShortSummary(rId, language, regionData.shortSummary),
            heroImage: regionData.heroImage,
          });
        }
      }
    });

    polygonSeries.mapPolygons.template.events.on('pointerout', () => {
      setHoveredRegion(null);
    });

    // Add Point Series for regional capitals
    const pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {})
    );

    pointSeries.bullets.push(() => {
      const container = am5.Container.new(root, {
        cursorOverStyle: 'pointer',
      });

      // Outer soft glowing circle
      container.children.push(
        am5.Circle.new(root, {
          radius: 6,
          fill: am5.color(0xd4af37),
          fillOpacity: 0.4,
        })
      );

      // Inner sharp golden pin
      container.children.push(
        am5.Circle.new(root, {
          radius: 3.5,
          fill: am5.color(0xd4af37),
          stroke: am5.color(0xffffff),
          strokeWidth: 1.2,
        })
      );

      // Elegant localized city name label
      container.children.push(
        am5.Label.new(root, {
          text: '{title}',
          populateText: true,
          fontSize: 11,
          fontWeight: '700',
          fill: am5.color(0xffffff),
          centerX: am5.p50,
          centerY: am5.p0,
          dy: 7,
          shadowColor: am5.color(0x000000),
          shadowBlur: 5,
          shadowOpacity: 0.9,
        })
      );

      container.events.on('click', (e) => {
        const dataItem = e.target.dataItem;
        const ctx = dataItem?.dataContext as { regionId?: string } | undefined;
        if (ctx?.regionId) {
          onSelectRegion(ctx.regionId);
        }
      });

      return am5.Bullet.new(root, {
        sprite: container,
      });
    });

    const CITIES_DATA = [
      { rawCity: 'الرياض', latitude: 24.7136, longitude: 46.6753, regionId: 'riyadh' },
      { rawCity: 'مكة المكرمة', latitude: 21.3891, longitude: 39.8579, regionId: 'makkah' },
      { rawCity: 'المدينة المنورة', latitude: 24.5247, longitude: 39.5692, regionId: 'madinah' },
      { rawCity: 'الدمام', latitude: 26.4207, longitude: 50.0888, regionId: 'eastern' },
      { rawCity: 'بريدة', latitude: 26.3592, longitude: 43.9818, regionId: 'qassim' },
      { rawCity: 'حائل', latitude: 27.5114, longitude: 41.7208, regionId: 'hail' },
      { rawCity: 'تبوك', latitude: 28.3835, longitude: 36.5662, regionId: 'tabuk' },
      { rawCity: 'عرعر', latitude: 30.9753, longitude: 41.0381, regionId: 'northern' },
      { rawCity: 'جازان', latitude: 16.8892, longitude: 42.5706, regionId: 'jazan' },
      { rawCity: 'نجران', latitude: 17.4924, longitude: 44.1277, regionId: 'najran' },
      { rawCity: 'الباحة', latitude: 20.0129, longitude: 41.4677, regionId: 'bahah' },
      { rawCity: 'سكاكا', latitude: 29.9697, longitude: 40.2064, regionId: 'jouf' },
      { rawCity: 'أبها', latitude: 18.2164, longitude: 42.5053, regionId: 'asir' },
    ];

    CITIES_DATA.forEach((city) => {
      const localizedCityName = getRegionCityPin(city.regionId, language, city.rawCity);
      pointSeries.pushDataItem({
        latitude: city.latitude,
        longitude: city.longitude,
        title: localizedCityName,
        regionId: city.regionId,
      } as any);
    });

    // Initial animation
    chart.appear(1000, 100);

    return () => {
      root.dispose();
    };
  }, [selectedRegionId, language]);

  const handleResetZoom = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.goHome();
    }
  };

  const handleZoomIn = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (chartInstanceRef.current) {
      chartInstanceRef.current.zoomOut();
    }
  };

  return (
    <div className="w-full relative">
      {/* Map Card Container */}
      <div className="relative w-full h-[520px] md:h-[620px] bg-gradient-to-b from-[#FAF6EE] to-[#F3EDE0] rounded-3xl border border-[#D4AF37]/30 shadow-xl overflow-hidden">
        {/* Subtle heritage background decoration */}
        <div className="absolute inset-0 bg-sadu-pattern opacity-40 pointer-events-none" />

        {/* amCharts Canvas Container */}
        <div ref={chartRef} className="w-full h-full" />

        {/* Floating Zoom & Map Controls */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-[#D4AF37]/30 shadow-md">
          <button
            onClick={handleZoomIn}
            title={t.zoomIn}
            className="p-2 rounded-xl text-[#0F432A] hover:bg-[#0F5132]/10 transition-colors"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomOut}
            title={t.zoomOut}
            className="p-2 rounded-xl text-[#0F432A] hover:bg-[#0F5132]/10 transition-colors"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <div className="h-[1px] bg-stone-200 my-0.5" />
          <button
            onClick={handleResetZoom}
            title={t.resetView}
            className="p-2 rounded-xl text-[#0F432A] hover:bg-[#0F5132]/10 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
        </div>

        {/* Hovered Region Live Card Tooltip / Floating Card */}
        {hoveredRegion && (
          <div className="absolute bottom-6 right-6 left-6 sm:left-auto sm:w-80 z-10 bg-white/95 backdrop-blur-md rounded-2xl overflow-hidden border border-[#D4AF37] shadow-2xl transition-all animate-fadeIn">
            {hoveredRegion.heroImage && (
              <div className="relative h-24 w-full overflow-hidden bg-stone-900">
                <img
                  src={hoveredRegion.heroImage}
                  alt={hoveredRegion.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 right-3 left-3 flex items-center justify-between text-white">
                  <div className="flex items-center gap-1.5 font-bold text-sm drop-shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>{hoveredRegion.name}</span>
                  </div>
                  <span className="text-[11px] bg-[#0F5132]/80 backdrop-blur-xs text-[#FAF7F2] px-2 py-0.5 rounded-full font-medium border border-white/20">
                    {hoveredRegion.capital}
                  </span>
                </div>
              </div>
            )}
            <div className="p-3.5">
              {!hoveredRegion.heroImage && (
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5 text-[#0F5132] font-bold text-base">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span>{hoveredRegion.name}</span>
                  </div>
                  <span className="text-xs bg-[#0F5132]/10 text-[#0F5132] px-2 py-0.5 rounded-full font-medium">
                    {hoveredRegion.capital}
                  </span>
                </div>
              )}
              <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed mb-3">
                {hoveredRegion.summary}
              </p>
              <button
                onClick={() => onSelectRegion(hoveredRegion.id)}
                className="w-full bg-gradient-to-r from-[#0F5132] to-[#176241] text-white text-xs font-bold py-2 px-3 rounded-xl flex items-center justify-center gap-1 shadow-sm hover:from-[#176241] hover:to-[#0F5132] transition-all cursor-pointer"
              >
                <span>{t.exploreRegionAndGallery}</span>
                <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-0 ltr:rotate-180" />
              </button>
            </div>
          </div>
        )}

        {/* Map Legend */}
        <div className="absolute bottom-4 left-4 z-10 hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-md px-3 py-2 rounded-xl text-xs text-stone-700 border border-stone-200/80 shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#1B4D3E] border border-[#D4AF37]" />
            <span>{t.legend13Regions}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#D4AF37]" />
            <span>{t.legendSelectedRegion}</span>
          </div>
        </div>
      </div>

      {/* 13 Region Quick Filter Badges below Map */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        {SAUDI_REGIONS.map((region) => {
          const isSelected = selectedRegionId === region.id;
          const regName = getRegionName(region.id, language);
          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                isSelected
                  ? 'bg-[#0F5132] text-[#D4AF37] font-bold shadow-md scale-105 ring-2 ring-[#D4AF37]'
                  : 'bg-white text-stone-700 border border-stone-200 hover:border-[#D4AF37] hover:text-[#0F5132] hover:bg-[#FAF7F2]'
              }`}
            >
              <span>{regName}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
