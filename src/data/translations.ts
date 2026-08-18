export type Language = 'ar' | 'en' | 'fr' | 'es';

export interface LocalizedRegionMeta {
  name: string;
  capital: string;
  shortSummary: string;
  description: string;
  areaKm2: string;
  climate: string;
  culturalIdentity: string;
  cityPin: string;
}

export interface TranslationStrings {
  // Brand
  brandName: string;
  brandTagline: string;
  brandSub: string;
  saudiPride: string;

  // Header & Nav
  home: string;
  regionsDropdown: string;
  allSaudiRegions: string;
  foodNav: string;
  landmarksNav: string;
  historyNav: string;
  cultureNav: string;
  searchBtn: string;
  searchPlaceholder: string;
  fontPickerBtn: string;
  quizBtn: string;
  askAssistantNav: string;

  // Language Selector
  languageSelect: string;
  languages: {
    ar: string;
    en: string;
    fr: string;
    es: string;
  };

  // Hero
  heroBadge: string;
  heroTagline: string;
  heroDesc: string;
  exploreKingdomBtn: string;
  askAssistantBtn: string;
  statRegions: string;
  statRegionsSub: string;
  statUnesco: string;
  statUnescoSub: string;
  statFood: string;
  statFoodSub: string;
  statCulture: string;
  statCultureSub: string;

  // Map
  mapSectionBadge: string;
  mapTitle: string;
  mapSubtitle: string;
  mapHint: string;
  quickJump: string;
  selectRegionPlaceholder: string;
  zoomIn: string;
  zoomOut: string;
  resetView: string;
  legend13Regions: string;
  legendSelectedRegion: string;
  openRegionPage: string;
  exploreRegionAndGallery: string;

  // 4 Pillars
  pillarsBadge: string;
  pillarsTitle: string;
  pillarsDesc: string;
  pillarFoodTitle: string;
  pillarFoodSub: string;
  pillarFoodBadge: string;
  pillarFoodDesc: string;
  pillarFoodCount: string;
  pillarLandmarksTitle: string;
  pillarLandmarksSub: string;
  pillarLandmarksBadge: string;
  pillarLandmarksDesc: string;
  pillarLandmarksCount: string;
  pillarHistoryTitle: string;
  pillarHistorySub: string;
  pillarHistoryBadge: string;
  pillarHistoryDesc: string;
  pillarHistoryCount: string;
  pillarCultureTitle: string;
  pillarCultureSub: string;
  pillarCultureBadge: string;
  pillarCultureDesc: string;
  pillarCultureCount: string;
  exploreCategoryBtn: string;

  // Region Page & Carousel
  backToHomeAndMap: string;
  switchRegion: string;
  shareLink: string;
  copiedLink: string;
  areaKm: string;
  climate: string;
  identity: string;
  galleryBadge: string;
  galleryTitle: string;
  photosCount: string;
  autoPlay: string;
  pause: string;
  fullscreen: string;
  tabAll: string;
  tabFood: string;
  tabLandmarks: string;
  tabHistory: string;
  tabCulture: string;
  ingredientsTitle: string;
  culturalContextTitle: string;
  originStoryTitle: string;
  preparationTraditionTitle: string;
  keyFactsTitle: string;
  historicalSignificanceTitle: string;
  materialsTitle: string;
  unescoRegistered: string;
  askAboutRegionBtn: string;
  viewDetails: string;
  close: string;

  // Food Explorer Modal
  foodModalTitle: string;
  foodModalSub: string;
  allRegionsFilter: string;
  searchDishesPlaceholder: string;
  dishesCount: string;

  // Landmarks Explorer Modal
  landmarksModalTitle: string;
  landmarksModalSub: string;
  searchLandmarksPlaceholder: string;
  landmarksCount: string;

  // History Timeline Modal
  historyModalTitle: string;
  historyModalSub: string;
  searchHistoryPlaceholder: string;
  eventsCount: string;

  // Culture Explorer Modal
  cultureModalTitle: string;
  cultureModalSub: string;
  cultureTabAll: string;
  cultureTabArts: string;
  cultureTabDance: string;
  cultureTabCostume: string;
  cultureTabTraditions: string;
  itemsCount: string;

  // Search Modal
  searchModalTitle: string;
  searchModalSub: string;
  searchModalInput: string;
  searchResultsFor: string;
  noResultsFound: string;
  tryAnotherSearch: string;
  categoryRegion: string;
  categoryFood: string;
  categoryLandmark: string;
  categoryHistory: string;
  categoryCulture: string;

  // Quiz Modal
  quizModalTitle: string;
  quizModalSub: string;
  questionOf: string;
  scoreLabel: string;
  nextQuestion: string;
  viewResults: string;
  quizFinished: string;
  quizCongratulations: string;
  quizTryAgain: string;
  restartQuiz: string;
  exploreRelatedRegion: string;

  // Assistant Modal
  assistantModalTitle: string;
  assistantModalBadge: string;
  assistantModalSub: string;
  assistantGreeting: string;
  assistantSuggestedQuestions: string;
  assistantInputPlaceholder: string;
  send: string;

  // Footer
  footerDesc: string;
  thirteenRegionsTitle: string;
  aiAssistantTitle: string;
  aiAssistantDesc: string;
  startChatBtn: string;
  allRightsReserved: string;
  fontCustomization: string;
  unescoLabel: string;
  saudiNationalHeritage: string;
}

export const REGION_LOCALIZATIONS: Record<string, Record<Language, LocalizedRegionMeta>> = {
  riyadh: {
    ar: {
      name: 'منطقة الرياض',
      capital: 'مدينة الرياض',
      cityPin: 'الرياض',
      shortSummary: 'قلب نجد النابض، ومهد انطلاق الدولة السعودية وعاصمتها التاريخية والحاضرة.',
      description: 'تعتبر منطقة الرياض القلب الجغرافي والتاريخي للجزيرة العربية. تحتضن الدرعية التاريخية، مسقط رأس الدولة السعودية الأولى، وقصر المصمك الشاهد على ملحمة توحيد المملكة.',
      areaKm2: '404,240 كم²',
      climate: 'صحراوي قاري، حار صيفاً ومعتدل يميل للبرودة شتاءً',
      culturalIdentity: 'التراث النجدي، العمارة الطينية (المقرنصات والشرف)، النخيل، وفنون العرضة والسامري.',
    },
    en: {
      name: 'Riyadh Region',
      capital: 'Riyadh City',
      cityPin: 'Riyadh',
      shortSummary: 'The beating heart of Najd, birthplace of the Saudi state, and the historic & modern capital.',
      description: 'Riyadh is the geographic and historical heart of Arabia, home to historic Diriyah (UNESCO) and Masmak Fortress that witnessed the unification of the Kingdom.',
      areaKm2: '404,240 km²',
      climate: 'Continental desert, hot in summer, cool & dry in winter',
      culturalIdentity: 'Najdi heritage, adobe clay architecture, date palms, Ardah and Samri folk arts.',
    },
    fr: {
      name: 'Région de Riyad',
      capital: 'Ville de Riyad',
      cityPin: 'Riyad',
      shortSummary: 'Le cœur battant du Najd, berceau de l’État saoudien et capitale historique et moderne.',
      description: 'La région de Riyad abrite Diriyah historique classée à l’UNESCO et le fort Masmak, témoin de l’unification du Royaume.',
      areaKm2: '404 240 km²',
      climate: 'Désertique continental, chaud en été et frais en hiver',
      culturalIdentity: 'Patrimoine du Najd, architecture en terre crue, palmiers et danses traditionnelles Ardah.',
    },
    es: {
      name: 'Región de Riad',
      capital: 'Ciudad de Riad',
      cityPin: 'Riad',
      shortSummary: 'El corazón de Najd, cuna del Estado saudí y capital histórica y contemporánea.',
      description: 'La región de Riad alberga la histórica Diriyah, declarada Patrimonio de la Humanidad por la UNESCO, y la fortaleza Masmak.',
      areaKm2: '404.240 km²',
      climate: 'Desértico continental, caluroso en verano y fresco en invierno',
      culturalIdentity: 'Patrimonio de Najd, arquitectura de adobe, palmerales y danzas tradicionales Ardah.',
    },
  },
  makkah: {
    ar: {
      name: 'منطقة مكة المكرمة',
      capital: 'مكة المكرمة',
      cityPin: 'مكة المكرمة',
      shortSummary: 'قبلة المسلمين ومهبط الوحي، وبوابة الحرمين الشريفين وجدة التاريخية عروس البحر الأحمر.',
      description: 'تحتضن أقدس البقاع الإسلامية: المسجد الحرام والكعبة المشرفة والمشاعر المقدسة، وتضم جدة التاريخية (البلد) المسجلة باليونسكو، والطائف مدينة الورد.',
      areaKm2: '153,128 كم²',
      climate: 'حار صيفاً مع رطوبة بالساحل ومعتدل شتاءً، معتدل لطيف في مرتفعات الطائف',
      culturalIdentity: 'التراث الحجازي العريق، الرواشين الخشبية، فنون المزمار والبدواني، وتقاليد استقبال الحجاج.',
    },
    en: {
      name: 'Makkah Region',
      capital: 'Makkah Al-Mukarramah',
      cityPin: 'Makkah',
      shortSummary: 'Qibla of Muslims, destination of pilgrims, and home to Historic Jeddah on the Red Sea.',
      description: 'Makkah is home to Islam’s holiest site: the Grand Mosque and Holy Kaaba, along with UNESCO-listed Historic Jeddah and rose-scented Taif mountains.',
      areaKm2: '153,128 km²',
      climate: 'Hot in summer, mild in winter; pleasant and temperate in the highlands of Taif',
      culturalIdentity: 'Hijazi architecture, wooden Rawasheen balconies, Mizmar folk dance, and welcoming pilgrim traditions.',
    },
    fr: {
      name: 'Région de La Mecque',
      capital: 'La Mecque',
      cityPin: 'La Mecque',
      shortSummary: 'Direction de prière des musulmans, abritant la Sainte Mosquée et la ville historique de Djeddah.',
      description: 'La Mecque abrite les lieux les plus sacrés de l’Islam, Djeddah historique classée à l’UNESCO et la ville montagnarde de Taïf.',
      areaKm2: '153 128 km²',
      climate: 'Chaud en été, doux en hiver; tempéré et agréable sur les hauteurs de Taïf',
      culturalIdentity: 'Architecture hijazie, balcons en bois Rawasheen, danse Mizmar et hospitalité du Hajj.',
    },
    es: {
      name: 'Región de La Meca',
      capital: 'La Meca',
      cityPin: 'La Meca',
      shortSummary: 'Orientación espiritual del mundo islámico y puerta de entrada a Yeda histórica en el Mar Rojo.',
      description: 'Alberga la Gran Mezquita y la Sagrada Kaaba, además de Yeda histórica (Patrimonio UNESCO) y los montes de Taif.',
      areaKm2: '153.128 km²',
      climate: 'Cálido en verano, templado en invierno; agradable en las tierras altas de Taif',
      culturalIdentity: 'Arquitectura hiyazí, balcones de madera Rawashin, danza Mizmar y hospitalidad con los peregrinos.',
    },
  },
  madinah: {
    ar: {
      name: 'منطقة المدينة المنورة',
      capital: 'المدينة المنورة',
      cityPin: 'المدينة المنورة',
      shortSummary: 'طيبة الطيبة ومأرز الإيمان، وعاصمة العلا التاريخية وموطن مدائن الحِجر أول مواقع اليونسكو.',
      description: 'تحتضن المسجد النبوي الشريف ومسجد قباء، ومحافظة العلا موطن حضارات دادان ولحيان والأنباط في موقع الحِجر التراثي العالمي.',
      areaKm2: '151,990 كم²',
      climate: 'صحراوي حار جاف صيفاً، معتدل إلى بارد شتاءً',
      culturalIdentity: 'الموروث المديني النبوي، حياكة النخيل، فنون الخبيتي والينبعاوي، والآثار النبطية العالمية.',
    },
    en: {
      name: 'Madinah Region',
      capital: 'Al-Madinah Al-Munawwarah',
      cityPin: 'Madinah',
      shortSummary: 'The City of the Prophet, home to the Prophet’s Mosque and AlUla’s Hegra (UNESCO).',
      description: 'Madinah embraces the Prophet’s Mosque and historic AlUla, home to ancient Dadan, Lihyan, and Nabataean civilizations at Hegra.',
      areaKm2: '151,990 km²',
      climate: 'Hot desert climate in summer, cool and dry in winter',
      culturalIdentity: 'Prophetic heritage, palm craftworks, Yanbuawi and Khebaiti maritime/bedouin folk music.',
    },
    fr: {
      name: 'Région de Médine',
      capital: 'Médine',
      cityPin: 'Médine',
      shortSummary: 'La Cité du Prophète, abritant la Mosquée sacrée et le site antique d’AlUla Hégra (UNESCO).',
      description: 'Médine abrite la Mosquée du Prophète et la prestigieuse vallée d’AlUla avec les tombeaux nabatéens d’Hégra.',
      areaKm2: '151 990 km²',
      climate: 'Désertique chaud en été, frais et sec en hiver',
      culturalIdentity: 'Patrimoine spirituel, artisanat des palmiers, musiques folkloriques Yanbuawi et Khebaiti.',
    },
    es: {
      name: 'Región de Medina',
      capital: 'Medina',
      cityPin: 'Medina',
      shortSummary: 'La Ciudad del Profeta, albergando la Mezquita del Profeta y las tumbas nabateas de AlUla.',
      description: 'Medina acoge la Mezquita del Profeta y la majestuosa AlUla, con las tumbas de Hegra esculpidas en arenisca.',
      areaKm2: '151.990 km²',
      climate: 'Desértico cálido en verano, fresco y seco en invierno',
      culturalIdentity: 'Patrimonio profético, artesanía de palma, música tradicional Yanbuawi y Khebaiti.',
    },
  },
  eastern: {
    ar: {
      name: 'المنطقة الشرقية',
      capital: 'مدينة الدمام',
      cityPin: 'الدمام',
      shortSummary: 'بوابة الخليج العربي وواحة الأحساء أكبر واحات النخيل بالعالم، ومهد حضارة دلمون.',
      description: 'أكبر مناطق المملكة مساحة، تطل على الخليج العربي وتضم واحة الأحساء المدرجة في اليونسكو، وميناء العقير التاريخي.',
      areaKm2: '672,522 كم²',
      climate: 'حار رطب صيفاً على السواحل، معتدل ولطيف شتاءً',
      culturalIdentity: 'التراث البحري وصيد اللؤلؤ، حياكة البشت الحساوي الفاخر، وصناعة الفخار في هجر.',
    },
    en: {
      name: 'Eastern Province',
      capital: 'Dammam',
      cityPin: 'Dammam',
      shortSummary: 'Gateway to the Arabian Gulf, home to UNESCO-listed Al-Ahsa Oasis and ancient Dilmun civilization.',
      description: 'The largest Saudi region by area, overlooking the Gulf and home to the world-famous Al-Ahsa date oasis and historic Uqair port.',
      areaKm2: '672,522 km²',
      climate: 'Hot & humid coastal summers, pleasant mild winters',
      culturalIdentity: 'Pearl diving heritage, royal Hasawi Bisht embroidery, pottery of Jabal Al-Qarah, and Gulf sea shanties.',
    },
    fr: {
      name: 'Province orientale',
      capital: 'Dammam',
      cityPin: 'Dammam',
      shortSummary: 'Porte du golfe Arabique, abritant l’oasis d’Al-Ahsa inscrite à l’UNESCO.',
      description: 'La plus vaste région du Royaume, bordée par le Golfe et célèbre pour ses millions de palmiers dattiers et son histoire perlière.',
      areaKm2: '672 522 km²',
      climate: 'Chaud et humide en été sur la côte, agréable et doux en hiver',
      culturalIdentity: 'Pêche perlière, tissage royal du Bisht d’Al-Ahsa et poterie ancestrale.',
    },
    es: {
      name: 'Provincia Oriental',
      capital: 'Dammam',
      cityPin: 'Dammam',
      shortSummary: 'Puerta del Golfo Arábigo, hogar del Oasis de Al-Ahsa (Patrimonio UNESCO).',
      description: 'La provincia más extensa del Reino, con costas en el Golfo y el oasis de palmeras datileras más grande del mundo en Al-Ahsa.',
      areaKm2: '672.522 km²',
      climate: 'Caluroso y húmedo en verano en la costa, templado en invierno',
      culturalIdentity: 'Buceo de perlas, bordado real del Bisht Hasawi y artesanía de cerámica.',
    },
  },
  'al-qassim': {
    ar: {
      name: 'منطقة القصيم',
      capital: 'مدينة بريدة',
      cityPin: 'بريدة',
      shortSummary: 'سلة غذاء المملكة وعاصمة التمور، وواحة الكليجا والتراث الزراعي والتجاري العريق.',
      description: 'تشتهر بأكبر مهرجانات التمور عالمياً، وبرج الشنانة التاريخي، وقصور عنيزة والخبراء التراثية.',
      areaKm2: '58,046 كم²',
      climate: 'صحراوي حار صيفاً، بارد شتاءً',
      culturalIdentity: 'حلوى الكليجا الشعبية، مهرجانات التمور، العمارة الطينية، والسامري القصيمي.',
    },
    en: {
      name: 'Al-Qassim Region',
      capital: 'Buraidah',
      cityPin: 'Buraidah',
      shortSummary: 'The agricultural basket of Saudi Arabia, date capital of the world, and home of Kleicha pastries.',
      description: 'Famous for the world’s largest date carnival, the historic Al-Shinana tower, and heritage mudbrick towns of Unaizah and Al-Khabra.',
      areaKm2: '58,046 km²',
      climate: 'Hot desert summer, crisp cold winter',
      culturalIdentity: 'Kleicha spiced date pastries, date palm cultivation, mudbrick towers, and Samri music.',
    },
    fr: {
      name: 'Région d’Al-Qassim',
      capital: 'Buraidah',
      cityPin: 'Buraidah',
      shortSummary: 'Grenier agricole du Royaume, capitale mondiale des dattes et patrie de la pâtisserie Kleicha.',
      description: 'Célèbre pour son festival mondial des dattes, la tour historique de Shinana et ses cités de terre séchée.',
      areaKm2: '58 046 km²',
      climate: 'Désertique chaud en été, hiver frais',
      culturalIdentity: 'Pâtisserie Kleicha, culture des dattes, citadelles d’argile et musique folklorique Samri.',
    },
    es: {
      name: 'Región de Al-Qassim',
      capital: 'Buraidah',
      cityPin: 'Buraidah',
      shortSummary: 'Granero agrícola de Arabia, capital mundial del dátil y cuna del pastel Kleicha.',
      description: 'Famosa por el mayor mercado de dátiles del mundo, la torre Al-Shinana y pueblos tradicionales de barro.',
      areaKm2: '58.046 km²',
      climate: 'Desértico caluroso en verano, frío en invierno',
      culturalIdentity: 'Pastelería Kleicha de dátiles, palmerales y tradiciones comunitarias.',
    },
  },
  hail: {
    ar: {
      name: 'منطقة حائل',
      capital: 'مدينة حائل',
      cityPin: 'حائل',
      shortSummary: 'أرض الكرم الحاتمي، وعروس الشمال بين جبلي أجا وسلمى وموقع جبة والشويمس باليونسكو.',
      description: 'موطن حاتم الطائي رمز الكرم العربي، تضم موقع الفنون الصخرية المسجل باليونسكو في جبة والشويمس، وقلاع عيرف والقشلة.',
      areaKm2: '103,887 كم²',
      climate: 'معتدل صيفاً وبارد شتاءً',
      culturalIdentity: 'كرم الضيافة الحاتمية، النقوش الصخرية الأثرية، قصر القشلة، وفنون السامري والعرضة.',
    },
    en: {
      name: 'Hail Region',
      capital: 'Hail City',
      cityPin: 'Hail',
      shortSummary: 'Land of legendary hospitality, nestled between Aja & Salma mountains with UNESCO rock art.',
      description: 'Home of Hatim Al-Tai, the ultimate icon of Arab generosity. Features UNESCO World Heritage rock art in Jubbah & Shuwaymis and historic A’arif Fort.',
      areaKm2: '103,887 km²',
      climate: 'Mild summer, chilly winter with crisp mountain air',
      culturalIdentity: 'Legendary hospitality, ancient petroglyphs, copper dallas (coffee pots), and northern Ardah.',
    },
    fr: {
      name: 'Région de Haïl',
      capital: 'Ville de Haïl',
      cityPin: 'Haïl',
      shortSummary: 'Terre de la légendaire générosité arabe, entre les monts Aja et Salma et l’art rupestre UNESCO.',
      description: 'Patrie de Hatim Al-Taï, célèbre pour ses gravures rupestres millénaires à Jubbah inscrites à l’UNESCO et le fort d’A’arif.',
      areaKm2: '103 887 km²',
      climate: 'Tempéré en été, hiver frais',
      culturalIdentity: 'Hospitalité légendaire, art rupestre préhistorique et forteresses de grès.',
    },
    es: {
      name: 'Región de Hail',
      capital: 'Ciudad de Hail',
      cityPin: 'Hail',
      shortSummary: 'Tierra de la legendaria hospitalidad de Hatim Al-Tai y arte rupestre Patrimonio UNESCO.',
      description: 'Cuna de la generosidad árabe, resguarda milenarios petroglifos en Jubbah y Shuwaymis (UNESCO) y la fortaleza de A’arif.',
      areaKm2: '103.887 km²',
      climate: 'Veranos templados e inviernos frescos',
      culturalIdentity: 'Hospitalidad legendaria, arte rupestre ancestral y castillos de adobe.',
    },
  },
  tabuk: {
    ar: {
      name: 'منطقة تبوك',
      capital: 'مدينة تبوك',
      cityPin: 'تبوك',
      shortSummary: 'بوابة الشمال الغربي، موطن وادي الديسة الساحر، وجبال حسمى، وآثار مدين التاريخية.',
      description: 'تتميز بجمال جبال حسمى الرملية الحمراء ووادي الديسة، وقلاع طريق الحج الشامي ومغائر شعيب في مدين.',
      areaKm2: '146,072 كم²',
      climate: 'معتدل صيفاً وبارد شتاءً مع تساقط الثلوج على جبل اللوز',
      culturalIdentity: 'تراث أهل البادية والشمال، صناعة السدو الصوفي، القلاع العثمانية ومحطات قطار الحجاز.',
    },
    en: {
      name: 'Tabuk Region',
      capital: 'Tabuk City',
      cityPin: 'Tabuk',
      shortSummary: 'Northwestern gateway, enchanting Wadi Al-Disah, Hisma red sandstones, and ancient Midian.',
      description: 'Features dramatic canyons of Wadi Al-Disah, snow-capped Jabal Al-Lawz in winter, Ottoman pilgrimage castles, and the Nabataean tombs of Magha’ir Shu’ayb.',
      areaKm2: '146,072 km²',
      climate: 'Mild summers, cold winters with occasional snowfall on Jabal Al-Lawz',
      culturalIdentity: 'Bedouin wool Sadu weaving, Hejaz Railway stations, and coastal coral traditions on the Red Sea.',
    },
    fr: {
      name: 'Région de Tabouk',
      capital: 'Ville de Tabouk',
      cityPin: 'Tabouk',
      shortSummary: 'Porte du nord-ouest, vallée magique de Wadi Al-Disah et monts enneigés de Jabal Al-Lawz.',
      description: 'Embrasse les canyons rouges de Wadi Al-Disah, les stations historiques du chemin de fer du Hedjaz et les vestiges de Madian.',
      areaKm2: '146 072 km²',
      climate: 'Doux en été, hiver froid avec chutes de neige sur Jabal Al-Lawz',
      culturalIdentity: 'Tissage traditionnel de laine Sadu et citadelles caravanières.',
    },
    es: {
      name: 'Región de Tabuk',
      capital: 'Ciudad de Tabuk',
      cityPin: 'Tabuk',
      shortSummary: 'Puerta del noroeste, cañones de Wadi Al-Disah y montes nevados en invierno.',
      description: 'Famosa por los cañones de Wadi Al-Disah, las tumbas de Madián y las estaciones del histórico ferrocarril del Hiyaz.',
      areaKm2: '146.072 km²',
      climate: 'Templado en verano, frío en invierno con nevadas en Jabal Al-Lawz',
      culturalIdentity: 'Tejido artesanal Sadu, castillos de peregrinación y tradición beduina.',
    },
  },
  'northern-borders': {
    ar: {
      name: 'منطقة الحدود الشمالية',
      capital: 'مدينة عرعر',
      cityPin: 'عرعر',
      shortSummary: 'أرض المراعي الخصبة، وتاريخ خط التابلاين، ودروب زبيدة التاريخية للحجاج.',
      description: 'محطة رئيسية على درب زبيدة التاريخي ببركها ومعالمها الأثرية، وموطن أقدم خطوط أنابيب النفط (التابلاين) ومراعي الصقور.',
      areaKm2: '111,797 كم²',
      climate: 'صحراوي قاري، حار صيفاً وشديد البرودة شتاءً',
      culturalIdentity: 'تربية الصقور والصيد التراثي، ونسيج السدو، وكرم الضيافة البدوية الأصيلة.',
    },
    en: {
      name: 'Northern Borders Region',
      capital: 'Arar',
      cityPin: 'Arar',
      shortSummary: 'Land of historic Zubaydah pilgrim trail, falconry heritage, and Tapline pipeline history.',
      description: 'A key stage along historic Darb Zubaydah with ancient water reservoirs, vast pasture plateaus, and deep-rooted falconry culture.',
      areaKm2: '111,797 km²',
      climate: 'Continental desert: warm summers, very crisp cold winters',
      culturalIdentity: 'Falconry and hunting heritage, Bedouin Sadu weaving, and camel poetry gatherings.',
    },
    fr: {
      name: 'Région des Frontières du Nord',
      capital: 'Arar',
      cityPin: 'Arar',
      shortSummary: 'Terre de la voie historique de Zubaydah et de la fauconnerie traditionnelle.',
      description: 'Étape majeure sur la route du pèlerinage de Zubaydah avec ses bassins millénaires et ses vastes pâturages.',
      areaKm2: '111 797 km²',
      climate: 'Désertique continental, chaud en été et très froid en hiver',
      culturalIdentity: 'Fauconnerie, tissage Sadu et générosité pastorale.',
    },
    es: {
      name: 'Región de las Fronteras del Norte',
      capital: 'Arar',
      cityPin: 'Arar',
      shortSummary: 'Tierra del histórico sendero de Zubaydah y el arte de la cetrería.',
      description: 'Punto clave en la ruta de peregrinación de Zubaydah con aljibes milenarios y ricas tradiciones de cetrería.',
      areaKm2: '111.797 km²',
      climate: 'Continental desértico, caluroso en verano y frío riguroso en invierno',
      culturalIdentity: 'Cetrería tradicional, tejido de lana Sadu y reuniones poéticas.',
    },
  },
  jazan: {
    ar: {
      name: 'منطقة جازان',
      capital: 'مدينة جازان',
      cityPin: 'جازان',
      shortSummary: 'لؤلؤة الجنوب، موطن جزر فرسان الساحرة، ومدرجات البن الخولاني بجبال فيفاء.',
      description: 'تجمع بين شواطئ جزر فرسان العذراء وجبال فيفاء الخضراء ومزارع المانجو والبابايا، وزراعة البن الخولاني المسجل في اليونسكو.',
      areaKm2: '11,671 كم²',
      climate: 'حار رطب في السواحل والجزر، معتدل ولطيف في الجبال العالية',
      culturalIdentity: 'زراعة البن الخولاني، عقود الفل والكادي، العمارة الفرسانية المرجانية، ورقصة السيف والزامل.',
    },
    en: {
      name: 'Jazan Region',
      capital: 'Jazan City',
      cityPin: 'Jazan',
      shortSummary: 'Pearl of the South, home to Farasan Islands and UNESCO-listed Khawlani coffee terraces in Fayfa.',
      description: 'Blends pristine coral islands of Farasan, lush green terraced peaks of Fayfa, fragrant jasmine garlands, and world-renowned Khawlani coffee farming.',
      areaKm2: '11,671 km²',
      climate: 'Tropical coastal warmth, temperate and crisp in the high green mountains',
      culturalIdentity: 'Khawlani coffee cultivation (UNESCO), jasmine floral crowns, coral architecture, and Zamil folk dances.',
    },
    fr: {
      name: 'Région de Jizan',
      capital: 'Ville de Jizan',
      cityPin: 'Jizan',
      shortSummary: 'Perle du Sud, abritant les îles Farasan et les terrasses de café Khawlani (UNESCO).',
      description: 'Allie les récifs coralliens des îles Farasan, les monts verdoyants de Fayfa et la culture séculaire du café d’Arabie.',
      areaKm2: '11 671 km²',
      climate: 'Chaud et tropical sur les côtes, doux et brumeux dans les montagnes',
      culturalIdentity: 'Café Khawlani inscrit à l’UNESCO, couronnes de jasmin et danses guerrières traditionnelles.',
    },
    es: {
      name: 'Región de Jizán',
      capital: 'Ciudad de Jizán',
      cityPin: 'Jizán',
      shortSummary: 'Perla del Sur, hogar de las islas Farasan y terrazas de café Khawlani (UNESCO).',
      description: 'Combina las playas vírgenes de Farasan con los picos verdes de Fayfa y el cultivo del aromático café Khawlani.',
      areaKm2: '11.671 km²',
      climate: 'Cálido en la costa, templado y fresco en las altas montañas',
      culturalIdentity: 'Cultivo de café Khawlani (UNESCO), coronas de jazmín y arquitectura coralina.',
    },
  },
  najran: {
    ar: {
      name: 'منطقة نجران',
      capital: 'مدينة نجران',
      cityPin: 'نجران',
      shortSummary: 'أرض الأخدود وحصن قصر الإمارة، ونقوش آبار حمى الصخرية المسجلة باليونسكو.',
      description: 'ملتقى الحضارات وقوافل اللبان القديمة، تحتضن موقع آبار حمى الثقافي باليونسكو، وموقع الأخدود الأثري وبيوت الطين النجرانية الشاهقة.',
      areaKm2: '149,511 كم²',
      climate: 'صحراوي جاف، معتدل شتاءً وحار صيفاً',
      culturalIdentity: 'بيوت الطين والقلاع التراثية (الدرب والمشولق)، صياغة الخناجر والجنابي، والرقش النجراني.',
    },
    en: {
      name: 'Najran Region',
      capital: 'Najran City',
      cityPin: 'Najran',
      shortSummary: 'Land of historic Al-Ukhdood, mudbrick towers, and UNESCO-listed Hima rock art wells.',
      description: 'Crucial stop on the ancient Incense Route, boasting UNESCO World Heritage petroglyphs at Hima Wells, historic Al-Ukhdood city, and multi-story mudbrick fortresses.',
      areaKm2: '149,511 km²',
      climate: 'Dry continental, warm in summer, mild and pleasant in winter',
      culturalIdentity: 'Towering multi-story mud houses, silver Janbiya dagger craftsmanship, and Raqsh oven dishes.',
    },
    fr: {
      name: 'Région de Najran',
      capital: 'Ville de Najran',
      cityPin: 'Najran',
      shortSummary: 'Terre d’Al-Ukhdood, des forteresses en pisé et de l’art rupestre de Hima (UNESCO).',
      description: 'Carrefour millénaire sur la route de l’encens, célèbre pour ses puits rupestres de Hima et ses châteaux en terre crue.',
      areaKm2: '149 511 km²',
      climate: 'Sec, chaud en été, doux en hiver',
      culturalIdentity: 'Tours fortifiées en terre, forge des poignards Janbiya et gastronomie Raqsh.',
    },
    es: {
      name: 'Región de Nayrán',
      capital: 'Ciudad de Nayrán',
      cityPin: 'Nayrán',
      shortSummary: 'Tierra de Al-Ukhdood, torres de adobe y arte rupestre en los pozos de Hima (UNESCO).',
      description: 'Punto neurálgico de la Ruta del Incienso con petroglifos de Hima (UNESCO) y palacios de adobe de varios pisos.',
      areaKm2: '149.511 km²',
      climate: 'Seco y soleado, caluroso en verano y templado en invierno',
      culturalIdentity: 'Torres tradicionales de barro, orfebrería de dagas Yanbiya y plato tradicional Raqsh.',
    },
  },
  'al-baha': {
    ar: {
      name: 'منطقة الباحة',
      capital: 'مدينة الباحة',
      cityPin: 'الباحة',
      shortSummary: 'حديقة الحجاز وسويسرا الجزيرة، موطن قرية ذي عين الرخامية وغابات رغدان الساحرة.',
      description: 'تتربع على قمم جبال السروات، وتشتهر بقرية ذي عين التراثية المبنية من المرمر والرخام، وغابات العرعر والضباب الكثيف.',
      areaKm2: '9,921 كم²',
      climate: 'معتدل صيفاً مع أمطار وضباب مستمر، بارد شتاءً',
      culturalIdentity: 'العمارة الحجرية الجبلية، الحصون المنيعة، صناعة الخبز المقنى في الميفا، وعسل السدر الجبلي.',
    },
    en: {
      name: 'Al-Baha Region',
      capital: 'Al-Baha City',
      cityPin: 'Al Baha',
      shortSummary: 'Garden of the Hejaz, home to Thee Ain marble village and misty Raghadan juniper forests.',
      description: 'Perched on the Sarawat mountain peaks, celebrated for the 400-year-old Thee Ain marble stone village, cool mists, and wild mountain Sidr honey.',
      areaKm2: '9,921 km²',
      climate: 'Pleasantly cool in summer with frequent fog and rain; cold in winter',
      culturalIdentity: 'Granite & slate stone architecture, fortified mountain watchtowers, and traditional clay-oven bread (Meqna).',
    },
    fr: {
      name: 'Région d’Al Baha',
      capital: 'Ville d’Al Baha',
      cityPin: 'Al Baha',
      shortSummary: 'Jardin du Hedjaz, abritant le village de marbre de Thee Ain et les forêts de genévriers.',
      description: 'Perchée sur les hauteurs du Sarawat, célèbre pour le village fortifié en pierre de Thee Ain, ses brumes et son miel sauvage.',
      areaKm2: '9 921 km²',
      climate: 'Frais et tempéré en été avec brumes fréquentes, froid en hiver',
      culturalIdentity: 'Architecture de pierre de taille, tours de guet et pain traditionnel au four d’argile.',
    },
    es: {
      name: 'Región de Al Baha',
      capital: 'Ciudad de Al Baha',
      cityPin: 'Al Baha',
      shortSummary: 'Jardín del Hiyaz, hogar de la aldea de mármol de Thee Ain y bosques de enebro.',
      description: 'Ubicada en las cumbres de Sarawat, famosa por la aldea patrimonial de mármol de Thee Ain y su miel de montaña.',
      areaKm2: '9.921 km²',
      climate: 'Fresco y agradable en verano con niebla y lluvias; frío en invierno',
      culturalIdentity: 'Arquitectura de piedra y pizarra, torres defensivas y pan tradicional al horno de arcilla.',
    },
  },
  'al-jawf': {
    ar: {
      name: 'منطقة الجوف',
      capital: 'مدينة سكاكا',
      cityPin: 'سكاكا',
      shortSummary: 'مملكة الزيتون، وأرض قصر مارد التاريخي وقلعة زعبل وأعمدة الرجاجيل الحجرية.',
      description: 'تعتبر أكبر بستان زيتون في العالم، وتضم آثاراً موغلة في القدم مثل أعمدة الرجاجيل الحجرية (ستونهنج العرب)، ومسجد عمر بن الخطاب بدومة الجندل.',
      areaKm2: '100,212 كم²',
      climate: 'صحراوي معتدل صيفاً وبارد جداً شتاءً',
      culturalIdentity: 'زيت الزيتون الجوفي الصافي، صناعة السدو، وحلوى البكيلة بالتمر والسمح.',
    },
    en: {
      name: 'Al-Jawf Region',
      capital: 'Sakaka',
      cityPin: 'Sakaka',
      shortSummary: 'Kingdom of olive groves, ancient Marid Castle, Za’abal Fortress, and Rajajil standing stones.',
      description: 'Home to the world’s largest olive orchards, 6,000-year-old Rajajil standing pillars (the Stonehenge of Arabia), and Umar ibn Al-Khattab Mosque in Dumat Al-Jandal.',
      areaKm2: '100,212 km²',
      climate: 'Mild summer, very cold winter with crisp desert breezes',
      culturalIdentity: 'Extra-virgin olive oil production, stone masonry, Sadu weaving, and Bukeila date pastries with Samh seeds.',
    },
    fr: {
      name: 'Région d’Al-Jawf',
      capital: 'Sakaka',
      cityPin: 'Sakaka',
      shortSummary: 'Capitale des oliviers, abritant le château de Marid et les menhirs antiques de Rajajil.',
      description: 'Abrite les plus grandes oliveraies du monde, les colonnes mégalithiques de Rajajil et la forteresse de Za’abal.',
      areaKm2: '100 212 km²',
      climate: 'Tempéré en été, très froid en hiver',
      culturalIdentity: 'Huile d’olive pure d’Al-Jawf, artisanat de la laine et gâteaux traditionnels Bukeila.',
    },
    es: {
      name: 'Región de Al-Jawf',
      capital: 'Sakaka',
      cityPin: 'Sakaka',
      shortSummary: 'Reino de los olivares, castillo de Marid y los megalitos de Rajajil.',
      description: 'Alberga los olivares más extensos del planeta, los monolitos prehistóricos de Rajajil y la fortaleza Za’abal.',
      areaKm2: '100.212 km²',
      climate: 'Templado en verano, muy frío en invierno',
      culturalIdentity: 'Aceite de oliva virgen extra, tejido tradicional Sadu y dulce Bukeila de dátiles.',
    },
  },
  asir: {
    ar: {
      name: 'منطقة عسير',
      capital: 'مدينة أبها',
      cityPin: 'أبها',
      shortSummary: 'عروس الضباب وقمم السحاب بجبل السودة، وعاصمة فن القط العسيري المسجل باليونسكو.',
      description: 'أعلى قمم المملكة ارتفاعاً بجبل السودة، وتشتهر بفن القط العسيري الزخرفي المسجل باليونسكو، وقرية رجال ألمع التراثية وقصور الطين والحجر.',
      areaKm2: '76,693 كم²',
      climate: 'معتدل صيفاً وماطر بغزارة، بارد وضبابي شتاءً',
      culturalIdentity: 'فن القط العسيري (اليونسكو)، أزياء عسير الملونة، العريكة والمبثوث، وفنون الخطوة واللعب الشهري.',
    },
    en: {
      name: 'Asir Region',
      capital: 'Abha',
      cityPin: 'Abha',
      shortSummary: 'Bride of the clouds, home to Jabal Sawda peaks and UNESCO-listed Al-Qatt Al-Asiri mural art.',
      description: 'Home to Saudi Arabia’s highest mountain peaks at Jabal Sawda, UNESCO-listed colorful Al-Qatt mural art, and the world-famous heritage village of Rijal Almaa.',
      areaKm2: '76,693 km²',
      climate: 'Pleasantly cool & rainy throughout summer; foggy and cold in winter',
      culturalIdentity: 'Al-Qatt Al-Asiri mural art (UNESCO), vibrant traditional costumes, Areeka and Tasabi dishes, and the famous Khatwa dance.',
    },
    fr: {
      name: 'Région d’Asir',
      capital: 'Abha',
      cityPin: 'Abha',
      shortSummary: 'Fleur des nuages, monts du Jabal Sawda et fresques murales Al-Qatt Al-Asiri (UNESCO).',
      description: 'Plus haut sommet du pays, célèbre pour le village de Rijal Almaa, les peintures géométriques Al-Qatt inscrites à l’UNESCO et son climat frais.',
      areaKm2: '76 693 km²',
      climate: 'Frais et pluvieux en été, brumeux et froid en hiver',
      culturalIdentity: 'Art décoratif Al-Qatt Al-Asiri (UNESCO), costumes brodés traditionnels et danse Khatwa.',
    },
    es: {
      name: 'Región de Asir',
      capital: 'Abha',
      cityPin: 'Abha',
      shortSummary: 'Novia de las nubes, cumbres de Jabal Sawda y arte mural Al-Qatt Al-Asiri (UNESCO).',
      description: 'Alberga las mayores altitudes del país en Jabal Sawda, el pueblo histórico de Rijal Almaa y los coloridos murales Al-Qatt (UNESCO).',
      areaKm2: '76.693 km²',
      climate: 'Fresco y lluvioso en verano, frío y con niebla en invierno',
      culturalIdentity: 'Murales Al-Qatt Al-Asiri (UNESCO), trajes tradicionales policromados y danza Khatwa.',
    },
  },
};

// Aliases to ensure complete compatibility across all IDs
REGION_LOCALIZATIONS['qassim'] = REGION_LOCALIZATIONS['al-qassim'];
REGION_LOCALIZATIONS['northern'] = REGION_LOCALIZATIONS['northern-borders'];
REGION_LOCALIZATIONS['bahah'] = REGION_LOCALIZATIONS['al-baha'];
REGION_LOCALIZATIONS['baha'] = REGION_LOCALIZATIONS['al-baha'];
REGION_LOCALIZATIONS['jouf'] = REGION_LOCALIZATIONS['al-jawf'];
REGION_LOCALIZATIONS['aljouf'] = REGION_LOCALIZATIONS['al-jawf'];
REGION_LOCALIZATIONS['albaha'] = REGION_LOCALIZATIONS['al-baha'];
REGION_LOCALIZATIONS['alqassim'] = REGION_LOCALIZATIONS['al-qassim'];

export const TRANSLATIONS: Record<Language, TranslationStrings> = {
  ar: {
    brandName: 'رَحَّــال',
    brandTagline: 'رحلتك التفاعلية في عمق التاريخ والتراث السعودي',
    brandSub: 'بوابة التراث ومناطق المملكة الـ 13',
    saudiPride: '🇸🇦 صنع بفخر واعتزاز بالهوية السعودية',

    home: 'الرئيسية',
    regionsDropdown: 'المناطق (13)',
    allSaudiRegions: 'مناطق المملكة العربية السعودية',
    foodNav: 'الأكلات الشعبية',
    landmarksNav: 'المعالم الأثرية',
    historyNav: 'التاريخ',
    cultureNav: 'الثقافة والتراث',
    searchBtn: 'بحث...',
    searchPlaceholder: 'ابحث عن أكلة، معلم أثري، حدث تاريخي، أو فن تراثي...',
    fontPickerBtn: 'نوع الخط',
    quizBtn: 'تحدي التراث',
    askAssistantNav: 'اسأل رحّال',

    languageSelect: 'اللغة',
    languages: {
      ar: 'العربية (🇸🇦)',
      en: 'English (🇬🇧)',
      fr: 'Français (🇫🇷)',
      es: 'Español (🇪🇸)',
    },

    heroBadge: 'منصة التاريخ والثقافة والتراث السعودي | ١٣ منطقة',
    heroTagline: 'رحلتك التفاعلية في عمق التاريخ والتراث السعودي',
    heroDesc: 'اكتشف أسرار وثراء مناطق المملكة العربية السعودية الـ 13؛ من الآثار العريقة المسجلة في اليونسكو وقصص الحضارات القديمة، إلى فنون المأكولات الشعبية الأصيلة والموروث الثقافي الخالد.',
    exploreKingdomBtn: 'استكشف المملكة',
    askAssistantBtn: 'اسأل مساعد رحّال الذكي',
    statRegions: '13 منطقة سعودية',
    statRegionsSub: 'خريطة جغرافية تفاعلية',
    statUnesco: 'معالم وتراث اليونسكو',
    statUnescoSub: 'الحِجر، الطريف، الأحساء',
    statFood: 'أكلات ومطبخ أصيل',
    statFoodSub: 'مكونات وسياق ثقافي',
    statCulture: 'فنون وعادات خالدة',
    statCultureSub: 'سدو، قط، مزمار، وعرضة',

    mapSectionBadge: 'الخريطة التفاعلية لمناطق المملكة الـ 13',
    mapTitle: 'اختر منطقتك لبدء الاستكشاف',
    mapSubtitle: 'انقر على أي منطقة في الخريطة لاستكشاف تاريخها ومعالمها الأثرية وتراثها ومأكولاتها الأصيلة.',
    mapHint: 'مرر الماوس فوق المنطقة للمعاينة السريعة أو انقر لفتح ملفها الكامل',
    quickJump: 'انتقال سريع:',
    selectRegionPlaceholder: '-- اختر منطقة من القائمة --',
    zoomIn: 'تكبير الخريطة',
    zoomOut: 'تصغير الخريطة',
    resetView: 'إعادة ضبط الرؤية',
    legend13Regions: 'مناطق المملكة الـ 13',
    legendSelectedRegion: 'المنطقة المحددة',
    openRegionPage: 'فتح صفحة المنطقة',
    exploreRegionAndGallery: 'استكشف المنطقة ومعرض الصور',

    pillarsBadge: 'ركائز الهوية والتجربة الثقافية',
    pillarsTitle: 'استكشف محاور رحّال الأربعة',
    pillarsDesc: 'انغمس في أبعاد التراث السعودي من خلال أربعة أبواب رئيسية تروي قصة الأرض والإنسان عبر العصور.',
    pillarFoodTitle: 'الأكلات الشعبية',
    pillarFoodSub: 'نكهات أصيلة وسياق ثقافي متوارث',
    pillarFoodBadge: 'المطبخ التراثي',
    pillarFoodDesc: 'استكشف أشهر الأطباق السعودية التقليدية؛ من الكبسة والجريش، والسليق الحجازي، إلى العريكة والرقش والكليجا.',
    pillarFoodCount: 'أكثر من 30 أكلة موثقة',
    pillarLandmarksTitle: 'المعالم الأثرية والتاريخية',
    pillarLandmarksSub: 'شواهد الحضارات وقلاع المجد',
    pillarLandmarksBadge: 'تراث اليونسكو والمواقع',
    pillarLandmarksDesc: 'رحلة بين مدائن الحِجر بالعلا، وحي الطريف بالدرعية، وقصر المصمك، وجدة التاريخية، وذي عين، وآبار حمى.',
    pillarLandmarksCount: 'مواقع عالمية وحصون نادرة',
    pillarHistoryTitle: 'تاريخ المنطقة والجزيرة',
    pillarHistorySub: 'محطات مضيئة وقصص التأسيس',
    pillarHistoryBadge: 'العمق التاريخي',
    pillarHistoryDesc: 'تتبع مسار الحضارات القديمة، وطرق البخور والحج، وتأسيس الدولة السعودية الأولى والثانية، وملحمة التوحيد.',
    pillarHistoryCount: 'قرون من الأمجاد والوثائق',
    pillarCultureTitle: 'الثقافة والتراث الشعبي',
    pillarCultureSub: 'فنون وأزياء وحرف متوارثة',
    pillarCultureBadge: 'الهوية الحية',
    pillarCultureDesc: 'تعرف على نسيج السدو، وفن القط العسيري، وحياكة البشت الحساوي، وزراعة البن الخولاني، وفنون العرضة والسامري.',
    pillarCultureCount: 'تراث غير مادي عالمي',
    exploreCategoryBtn: 'استعراض المحتوى',

    backToHomeAndMap: 'الرئيسية والخريطة',
    switchRegion: 'اختر منطقة أخرى',
    shareLink: 'مشاركة رابط المنطقة',
    copiedLink: 'تم نسخ الرابط بنجاح',
    areaKm: 'المساحة',
    climate: 'المناخ',
    identity: 'الهوية الثقافية',
    galleryBadge: 'معرض الصور التفاعلي',
    galleryTitle: 'مشاهد من تراث وعراقة',
    photosCount: 'صور موثقة',
    autoPlay: 'تشغيل تلقائي',
    pause: 'إيقاف مؤقت',
    fullscreen: 'عرض بملء الشاشة',
    tabAll: 'جميع الأقسام',
    tabFood: 'الأكلات الشعبية',
    tabLandmarks: 'المعالم الأثرية',
    tabHistory: 'المحطات التاريخية',
    tabCulture: 'الثقافة والفنون',
    ingredientsTitle: 'المكونات الأصيلة',
    culturalContextTitle: 'السياق الثقافي والمناسبة',
    originStoryTitle: 'قصة المنشأ والتاريخ',
    preparationTraditionTitle: 'تقاليد الإعداد والتقديم',
    keyFactsTitle: 'حقائق وأرقام بارزة',
    historicalSignificanceTitle: 'الأهمية التاريخية والحضارية',
    materialsTitle: 'العناصر والمواد المستخدمة',
    unescoRegistered: 'مسجل في التراث العالمي (اليونسكو)',
    askAboutRegionBtn: 'اسأل المساعد الذكي عن هذه المنطقة',
    viewDetails: 'عرض التفاصيل',
    close: 'إغلاق',

    foodModalTitle: 'موسوعة الأكلات الشعبية السعودية',
    foodModalSub: 'استكشف الأطباق الأصيلة والمكونات والسياق الثقافي لمناطق المملكة الـ 13',
    allRegionsFilter: 'جميع المناطق',
    searchDishesPlaceholder: 'ابحث عن أكلة أو مكون...',
    dishesCount: 'أكلة موثقة',

    landmarksModalTitle: 'دليل المعالم والآثار التاريخية',
    landmarksModalSub: 'استكشف القلاع والحصون ومواقع اليونسكو الأثرية عبر مناطق المملكة الـ 13',
    searchLandmarksPlaceholder: 'ابحث عن معلم، قلعة، أو موقع أثري...',
    landmarksCount: 'معلم أثري',

    historyModalTitle: 'الخط الزمني لتاريخ مناطق المملكة',
    historyModalSub: 'محطات تاريخية وقصص التأسيس والحضارات العريقة عبر العصور',
    searchHistoryPlaceholder: 'ابحث في الأحداث والشخصيات التاريخية...',
    eventsCount: 'حدث تاريخي موثق',

    cultureModalTitle: 'موسوعة الثقافة والفنون الشعبية',
    cultureModalSub: 'الحرف اليدوية، الفنون الأدائية، الأزياء التراثية، والتقاليد الأصيلة',
    cultureTabAll: 'الكل',
    cultureTabArts: 'الحرف والمنسوجات',
    cultureTabDance: 'الفنون الأدائية والموسيقى',
    cultureTabCostume: 'الأزياء والحلي',
    cultureTabTraditions: 'العادات والضيافة',
    itemsCount: 'عنصر ثقافي',

    searchModalTitle: 'البحث الشامل في التراث السعودي',
    searchModalSub: 'ابحث في مئات المعالم، الأكلات، الأحداث التاريخية، والفنون التراثية',
    searchModalInput: 'اكتب اسم أكلة، معلم، أو مدينة...',
    searchResultsFor: 'نتائج البحث عن',
    noResultsFound: 'لم يتم العثور على نتائج تطابق بحثك',
    tryAnotherSearch: 'جرّب البحث بكلمات أخرى أو تصفح المناطق عبر الخريطة',
    categoryRegion: 'منطقة',
    categoryFood: 'أكلة شعبية',
    categoryLandmark: 'معلم أثري',
    categoryHistory: 'حدث تاريخي',
    categoryCulture: 'تراث وفنون',

    quizModalTitle: 'تحدي رحّال التراثي',
    quizModalSub: 'اختبر معلوماتك في تاريخ وثقافة مناطق المملكة الـ 13',
    questionOf: 'السؤال',
    scoreLabel: 'النتيجة',
    nextQuestion: 'السؤال التالي',
    viewResults: 'عرض النتيجة النهائية',
    quizFinished: 'اكتمل التحدي بنجاح!',
    quizCongratulations: 'مبروك! لديك شغف ومعرفة رائعة بالتراث السعودي.',
    quizTryAgain: 'أعد الاختبار لتعزيز معلوماتك التراثية.',
    restartQuiz: 'إعادة التحدي',
    exploreRelatedRegion: 'استكشف المنطقة ذات الصلة',

    assistantModalTitle: 'مساعد رحّال الذكي',
    assistantModalBadge: 'تاريخ وثقافة المملكة',
    assistantModalSub: 'اطرح أي سؤال حول تاريخ المملكة، معالمها، مطبخها، وفنونها التراثية',
    assistantGreeting: 'أهلاً بك يا رحّال! أنا مساعدك الذكي المتخصص في تاريخ وثقافة وتراث مناطق المملكة العربية السعودية الـ 13. كيف يمكنني إثراء رحلتك اليوم؟',
    assistantSuggestedQuestions: 'أسئلة مقترحة للاستكشاف:',
    assistantInputPlaceholder: 'اسأل عن تاريخ الدرعية، سر تحضير الكليجا، نقوش الحِجر، أو فن القط...',
    send: 'إرسال',

    footerDesc: 'منصة تفاعلية لاستكشاف التاريخ والحضارات والتراث الشعبي والمأكولات والمعالم الأثرية لمناطق المملكة العربية السعودية الـ 13.',
    thirteenRegionsTitle: 'مناطق المملكة الـ 13',
    aiAssistantTitle: 'مساعد رحّال الذكي',
    aiAssistantDesc: 'طرح الأسئلة التاريخية والثقافية عبر الذكاء الاصطناعي المدرب على التراث السعودي.',
    startChatBtn: 'بدء المحادثة مع المساعد',
    allRightsReserved: 'جميع الحقوق محفوظة لمنصة رحّال (Rahal)',
    fontCustomization: 'تخصيص نوع الخط',
    unescoLabel: 'اليونسكو للتراث الإنساني',
    saudiNationalHeritage: 'التراث الوطني السعودي',
  },

  en: {
    brandName: 'RAHAL',
    brandTagline: 'Your Interactive Journey Through Saudi History & Heritage',
    brandSub: 'Gateway to the 13 Regions of Saudi Arabia',
    saudiPride: '🇸🇦 Crafted with pride celebrating Saudi national identity',

    home: 'Home',
    regionsDropdown: 'Regions (13)',
    allSaudiRegions: 'Regions of Saudi Arabia',
    foodNav: 'Traditional Cuisine',
    landmarksNav: 'Historical Landmarks',
    historyNav: 'History',
    cultureNav: 'Culture & Heritage',
    searchBtn: 'Search...',
    searchPlaceholder: 'Search dishes, landmarks, historical events, folklore arts...',
    fontPickerBtn: 'Typography',
    quizBtn: 'Heritage Quiz',
    askAssistantNav: 'Ask Rahal',

    languageSelect: 'Language',
    languages: {
      ar: 'العربية (🇸🇦)',
      en: 'English (🇬🇧)',
      fr: 'Français (🇫🇷)',
      es: 'Español (🇪🇸)',
    },

    heroBadge: 'Saudi History, Culture & Heritage Platform | 13 Regions',
    heroTagline: 'Your Interactive Journey Through Saudi History & Heritage',
    heroDesc: 'Discover the depth and wealth of the 13 regions of Saudi Arabia; from ancient UNESCO World Heritage sites and ancient civilizations, to authentic culinary traditions and timeless cultural folklore.',
    exploreKingdomBtn: 'Explore the Kingdom',
    askAssistantBtn: 'Ask Rahal AI Assistant',
    statRegions: '13 Saudi Regions',
    statRegionsSub: 'Interactive Geographic Map',
    statUnesco: 'UNESCO Heritage Sites',
    statUnescoSub: 'Hegra, At-Turaif, Al-Ahsa',
    statFood: 'Authentic Culinary Arts',
    statFoodSub: 'Ingredients & Cultural Context',
    statCulture: 'Living Heritage & Arts',
    statCultureSub: 'Sadu, Al-Qatt, Ardah, Mizmar',

    mapSectionBadge: 'Interactive Map of the 13 Saudi Regions',
    mapTitle: 'Select a Region to Begin Exploring',
    mapSubtitle: 'Click on any of the 13 regions to explore its rich history, archaeological landmarks, traditional gastronomy, and cultural heritage.',
    mapHint: 'Hover over any region for quick preview or click to open full profile',
    quickJump: 'Quick Jump:',
    selectRegionPlaceholder: '-- Select a Region --',
    zoomIn: 'Zoom In',
    zoomOut: 'Zoom Out',
    resetView: 'Reset View',
    legend13Regions: '13 Saudi Regions',
    legendSelectedRegion: 'Selected Region',
    openRegionPage: 'Open Region Page',
    exploreRegionAndGallery: 'Explore Region & Photo Gallery',

    pillarsBadge: 'Core Pillars of Heritage',
    pillarsTitle: 'Explore Rahal’s Four Pillars',
    pillarsDesc: 'Immerse yourself in Saudi heritage through four main gateways narrating the journey of the land and its people across the centuries.',
    pillarFoodTitle: 'Traditional Gastronomy',
    pillarFoodSub: 'Authentic Flavors & Cultural Roots',
    pillarFoodBadge: 'Culinary Heritage',
    pillarFoodDesc: 'Discover Saudi signature dishes: from Najdi Kabsa and Jareesh, Hijazi Saleeg, to southern Areeka, Raqsh, and Qassim Kleicha.',
    pillarFoodCount: '30+ Documented Dishes',
    pillarLandmarksTitle: 'Archaeological Landmarks',
    pillarLandmarksSub: 'Monuments of Civilizations & Fortresses',
    pillarLandmarksBadge: 'UNESCO & Ancient Sites',
    pillarLandmarksDesc: 'Journey through Hegra in AlUla, At-Turaif in Diriyah, Masmak Fortress, Historic Jeddah, Thee Ain marble village, and Hima wells.',
    pillarLandmarksCount: 'World Heritage & Castles',
    pillarHistoryTitle: 'History of Arabia',
    pillarHistorySub: 'Milestones of State Foundations',
    pillarHistoryBadge: 'Historical Depth',
    pillarHistoryDesc: 'Follow ancient trade routes, the Incense Route, Hajj highways, the 1st and 2nd Saudi States, and the unification of the Kingdom.',
    pillarHistoryCount: 'Centuries of History',
    pillarCultureTitle: 'Culture & Folk Arts',
    pillarCultureSub: 'Costumes, Crafts & Living Traditions',
    pillarCultureBadge: 'Living Identity',
    pillarCultureDesc: 'Learn about Sadu weaving, Al-Qatt Al-Asiri murals, Hasawi Bisht tailoring, Khawlani coffee farming, and Ardah sword dances.',
    pillarCultureCount: 'Intangible World Heritage',
    exploreCategoryBtn: 'Explore Content',

    backToHomeAndMap: 'Home & Map',
    switchRegion: 'Switch Region',
    shareLink: 'Share Region Link',
    copiedLink: 'Link copied to clipboard!',
    areaKm: 'Area',
    climate: 'Climate',
    identity: 'Cultural Identity',
    galleryBadge: 'Interactive Photo Gallery',
    galleryTitle: 'Scenes of Heritage and Splendor of',
    photosCount: 'Verified Photos',
    autoPlay: 'Auto Play',
    pause: 'Pause',
    fullscreen: 'Fullscreen',
    tabAll: 'All Categories',
    tabFood: 'Traditional Food',
    tabLandmarks: 'Historical Landmarks',
    tabHistory: 'Historical Timeline',
    tabCulture: 'Culture & Arts',
    ingredientsTitle: 'Authentic Ingredients',
    culturalContextTitle: 'Cultural Context & Occasion',
    originStoryTitle: 'Origin Story & Heritage',
    preparationTraditionTitle: 'Preparation & Serving Traditions',
    keyFactsTitle: 'Key Facts & Highlights',
    historicalSignificanceTitle: 'Historical & Cultural Significance',
    materialsTitle: 'Materials & Traditional Elements',
    unescoRegistered: 'UNESCO World Heritage Listed',
    askAboutRegionBtn: 'Ask AI Assistant About This Region',
    viewDetails: 'View Details',
    close: 'Close',

    foodModalTitle: 'Saudi Traditional Cuisine Encyclopedia',
    foodModalSub: 'Discover authentic dishes, ingredients, and cultural roots across the 13 regions',
    allRegionsFilter: 'All Regions',
    searchDishesPlaceholder: 'Search dishes, spices, or ingredients...',
    dishesCount: 'Documented Dishes',

    landmarksModalTitle: 'Historical Landmarks & Monuments Guide',
    landmarksModalSub: 'Explore fortresses, UNESCO world heritage sites, and ancient ruins across Saudi Arabia',
    searchLandmarksPlaceholder: 'Search landmarks, castles, or archaeological sites...',
    landmarksCount: 'Landmarks',

    historyModalTitle: 'Historical Timeline of Saudi Regions',
    historyModalSub: 'Key eras, founding milestones, and civilizations across centuries of Arabian history',
    searchHistoryPlaceholder: 'Search events, eras, or historical leaders...',
    eventsCount: 'Documented Events',

    cultureModalTitle: 'Living Culture & Folk Arts Encyclopedia',
    cultureModalSub: 'Master crafts, performing arts, folklore costumes, and sacred traditions of hospitality',
    cultureTabAll: 'All',
    cultureTabArts: 'Crafts & Textiles',
    cultureTabDance: 'Performing Arts & Music',
    cultureTabCostume: 'Costumes & Jewelry',
    cultureTabTraditions: 'Traditions & Hospitality',
    itemsCount: 'Cultural Items',

    searchModalTitle: 'Global Search in Saudi Heritage',
    searchModalSub: 'Search hundreds of landmarks, signature dishes, historical events, and living folk traditions',
    searchModalInput: 'Type a dish, monument, city, or craft...',
    searchResultsFor: 'Search results for',
    noResultsFound: 'No results found matching your search',
    tryAnotherSearch: 'Try searching with other terms or browse regions directly on the interactive map',
    categoryRegion: 'Region',
    categoryFood: 'Traditional Dish',
    categoryLandmark: 'Archaeological Landmark',
    categoryHistory: 'Historical Event',
    categoryCulture: 'Culture & Art',

    quizModalTitle: 'Rahal Heritage Challenge',
    quizModalSub: 'Test your knowledge about the history, geography, and cultural wealth of the 13 Saudi regions',
    questionOf: 'Question',
    scoreLabel: 'Score',
    nextQuestion: 'Next Question',
    viewResults: 'View Final Score',
    quizFinished: 'Challenge Completed!',
    quizCongratulations: 'Congratulations! You have great passion and knowledge for Saudi heritage.',
    quizTryAgain: 'Retake the quiz to sharpen your cultural expertise.',
    restartQuiz: 'Restart Challenge',
    exploreRelatedRegion: 'Explore Related Region',

    assistantModalTitle: 'Rahal AI Assistant',
    assistantModalBadge: 'Saudi History & Heritage',
    assistantModalSub: 'Ask anything about Saudi Arabia’s history, landmarks, cuisine, and living cultural traditions',
    assistantGreeting: 'Welcome traveler! I am your AI assistant specialized in the history, landmarks, gastronomy, and cultural heritage of the 13 regions of Saudi Arabia. How can I enrich your journey today?',
    assistantSuggestedQuestions: 'Suggested questions to ask:',
    assistantInputPlaceholder: 'Ask about Diriyah, Kleicha spices, Hegra rock art, or Al-Qatt murals...',
    send: 'Send',

    footerDesc: 'Interactive cultural platform to explore history, civilizations, folk heritage, traditional gastronomy, and archaeological landmarks across the 13 regions of Saudi Arabia.',
    thirteenRegionsTitle: '13 Saudi Regions',
    aiAssistantTitle: 'Rahal AI Assistant',
    aiAssistantDesc: 'Ask historical and cultural questions powered by AI specialized in Saudi heritage.',
    startChatBtn: 'Start Chat with Assistant',
    allRightsReserved: 'All rights reserved to Rahal Platform ©',
    fontCustomization: 'Typography Settings',
    unescoLabel: 'UNESCO World Heritage',
    saudiNationalHeritage: 'Saudi National Heritage',
  },

  fr: {
    brandName: 'RAHAL',
    brandTagline: 'Votre voyage interactif au cœur de l’histoire et du patrimoine saoudien',
    brandSub: 'Portail des 13 régions du Royaume d’Arabie Saoudite',
    saudiPride: '🇸🇦 Conçu avec fierté célébrant l’identité saoudienne',

    home: 'Accueil',
    regionsDropdown: 'Régions (13)',
    allSaudiRegions: 'Régions d’Arabie Saoudite',
    foodNav: 'Cuisine Traditionnelle',
    landmarksNav: 'Monuments Historiques',
    historyNav: 'Histoire',
    cultureNav: 'Culture & Patrimoine',
    searchBtn: 'Recherche...',
    searchPlaceholder: 'Rechercher un plat, un monument, un événement historique...',
    fontPickerBtn: 'Typographie',
    quizBtn: 'Quiz Patrimoine',
    askAssistantNav: 'Demander à Rahal',

    languageSelect: 'Langue',
    languages: {
      ar: 'العربية (🇸🇦)',
      en: 'English (🇬🇧)',
      fr: 'Français (🇫🇷)',
      es: 'Español (🇪🇸)',
    },

    heroBadge: 'Plateforme d’Histoire, Culture et Patrimoine Saoudien | 13 Régions',
    heroTagline: 'Votre voyage interactif au cœur de l’histoire et du patrimoine saoudien',
    heroDesc: 'Découvrez les trésors et la richesse des 13 régions d’Arabie Saoudite : des sites antiques inscrits à l’UNESCO aux arts culinaires authentiques et au patrimoine vivant.',
    exploreKingdomBtn: 'Explorer le Royaume',
    askAssistantBtn: 'Interroger l’Assistant IA Rahal',
    statRegions: '13 Régions Saoudiennes',
    statRegionsSub: 'Carte Géographique Interactive',
    statUnesco: 'Sites du Patrimoine UNESCO',
    statUnescoSub: 'Hégra, At-Turaif, Al-Ahsa',
    statFood: 'Gastronomie Authentique',
    statFoodSub: 'Ingrédients et Contexte Culturel',
    statCulture: 'Arts & Traditions Vivantes',
    statCultureSub: 'Sadu, Al-Qatt, Ardah, Mizmar',

    mapSectionBadge: 'Carte Interactive des 13 Régions Saoudiennes',
    mapTitle: 'Sélectionnez une région pour explorer',
    mapSubtitle: 'Cliquez sur l’une des 13 régions pour explorer son histoire, ses monuments archéologiques, sa gastronomie et son patrimoine.',
    mapHint: 'Survolez une région pour un aperçu ou cliquez pour ouvrir sa fiche complète',
    quickJump: 'Accès rapide :',
    selectRegionPlaceholder: '-- Choisir une région --',
    zoomIn: 'Zoom avant',
    zoomOut: 'Zoom arrière',
    resetView: 'Réinitialiser la vue',
    legend13Regions: '13 régions saoudiennes',
    legendSelectedRegion: 'Région sélectionnée',
    openRegionPage: 'Ouvrir la page de la région',
    exploreRegionAndGallery: 'Explorer la région et la galerie photos',

    pillarsBadge: 'Piliers de l’Identité Culturelle',
    pillarsTitle: 'Explorez les Quatre Piliers de Rahal',
    pillarsDesc: 'Plongez dans le patrimoine saoudien à travers quatre axes majeurs racontant l’épopée de la terre et des hommes.',
    pillarFoodTitle: 'Gastronomie Traditionnelle',
    pillarFoodSub: 'Saveurs Authentiques et Racines',
    pillarFoodBadge: 'Cuisine du Terroir',
    pillarFoodDesc: 'Découvrez les plats emblématiques : Kabsa et Jareesh de Najd, Saleeg du Hedjaz, Areeka, Raqsh et Kleicha de Qassim.',
    pillarFoodCount: 'Plus de 30 plats documentés',
    pillarLandmarksTitle: 'Monuments Historiques',
    pillarLandmarksSub: 'Vestiges de Civilisations et Forteresses',
    pillarLandmarksBadge: 'Patrimoine Mondial UNESCO',
    pillarLandmarksDesc: 'Voyagez à travers Hégra à AlUla, At-Turaif à Diriyah, la forteresse Masmak, Djeddah historique et le village de marbre de Thee Ain.',
    pillarLandmarksCount: 'Sites Mondiaux & Châteaux',
    pillarHistoryTitle: 'Histoire d’Arabie',
    pillarHistorySub: 'Grandes Étapes de Fondation',
    pillarHistoryBadge: 'Profondeur Historique',
    pillarHistoryDesc: 'Suivez la route de l’encens, les voies du Hajj, les premier et deuxième États saoudiens et l’unification du Royaume.',
    pillarHistoryCount: 'Siècles d’Histoire',
    pillarCultureTitle: 'Culture & Arts Populaires',
    pillarCultureSub: 'Costumes, Artisanat et Coutumes',
    pillarCultureBadge: 'Identité Vivante',
    pillarCultureDesc: 'Découvrez le tissage Sadu, les fresques Al-Qatt Al-Asiri, la confection du Bisht, la culture du café Khawlani et l’Ardah.',
    pillarCultureCount: 'Patrimoine Immatériel UNESCO',
    exploreCategoryBtn: 'Explorer le contenu',

    backToHomeAndMap: 'Accueil & Carte',
    switchRegion: 'Changer de région',
    shareLink: 'Partager le lien',
    copiedLink: 'Lien copié avec succès !',
    areaKm: 'Superficie',
    climate: 'Climat',
    identity: 'Identité Culturelle',
    galleryBadge: 'Galerie Photos Interactive',
    galleryTitle: 'Aperçu du patrimoine et de la splendeur de',
    photosCount: 'Photos documentées',
    autoPlay: 'Lecture Auto',
    pause: 'Pause',
    fullscreen: 'Plein Écran',
    tabAll: 'Toutes les catégories',
    tabFood: 'Plats Traditionnels',
    tabLandmarks: 'Monuments Historiques',
    tabHistory: 'Frise Historique',
    tabCulture: 'Culture & Arts',
    ingredientsTitle: 'Ingrédients Authentiques',
    culturalContextTitle: 'Contexte Culturel et Occasions',
    originStoryTitle: 'Histoire d’Origine et Tradition',
    preparationTraditionTitle: 'Traditions de Préparation et de Service',
    keyFactsTitle: 'Faits Marquants & Chiffres',
    historicalSignificanceTitle: 'Importance Historique et Culturelle',
    materialsTitle: 'Matériaux et Éléments Utilisés',
    unescoRegistered: 'Inscrit au Patrimoine Mondial de l’UNESCO',
    askAboutRegionBtn: 'Poser une question sur cette région à l’IA',
    viewDetails: 'Voir les détails',
    close: 'Fermer',

    foodModalTitle: 'Encyclopédie Culinaire Saoudienne',
    foodModalSub: 'Découvrez les plats emblématiques, ingrédients et racines culturelles des 13 régions',
    allRegionsFilter: 'Toutes les régions',
    searchDishesPlaceholder: 'Rechercher un plat, une épice...',
    dishesCount: 'Plats documentés',

    landmarksModalTitle: 'Guide des Monuments & Sites Historiques',
    landmarksModalSub: 'Explorez les forteresses, les sites UNESCO et les ruines antiques à travers l’Arabie Saoudite',
    searchLandmarksPlaceholder: 'Rechercher un monument, un château ou un site...',
    landmarksCount: 'Monuments',

    historyModalTitle: 'Frise Chronologique des Régions Saoudiennes',
    historyModalSub: 'Grandes étapes, fondations d’États et civilisations à travers les siècles',
    searchHistoryPlaceholder: 'Rechercher un événement ou une figure historique...',
    eventsCount: 'Événements documentés',

    cultureModalTitle: 'Encyclopédie de la Culture & du Folklore Vivant',
    cultureModalSub: 'Artisanat d’art, arts de la scène, costumes traditionnels et rituels d’hospitalité',
    cultureTabAll: 'Tous',
    cultureTabArts: 'Artisanat & Tissage',
    cultureTabDance: 'Arts Vivants & Musique',
    cultureTabCostume: 'Costumes & Bijoux',
    cultureTabTraditions: 'Coutumes & Hospitalité',
    itemsCount: 'Éléments culturels',

    searchModalTitle: 'Recherche Globale dans le Patrimoine Saoudien',
    searchModalSub: 'Recherchez parmi des centaines de monuments, plats typiques, événements et arts populaires',
    searchModalInput: 'Tapez un plat, un monument, une ville...',
    searchResultsFor: 'Résultats de recherche pour',
    noResultsFound: 'Aucun résultat trouvé pour votre recherche',
    tryAnotherSearch: 'Essayez d’autres termes ou explorez les régions directement sur la carte',
    categoryRegion: 'Région',
    categoryFood: 'Plat Traditionnel',
    categoryLandmark: 'Monument Historique',
    categoryHistory: 'Événement Historique',
    categoryCulture: 'Culture & Folklore',

    quizModalTitle: 'Défi Patrimoine Rahal',
    quizModalSub: 'Testez vos connaissances sur l’histoire, la géographie et la culture des 13 régions saoudiennes',
    questionOf: 'Question',
    scoreLabel: 'Score',
    nextQuestion: 'Question suivante',
    viewResults: 'Voir le score final',
    quizFinished: 'Défi terminé avec succès !',
    quizCongratulations: 'Félicitations ! Vous avez une excellente culture du patrimoine saoudien.',
    quizTryAgain: 'Recommencez le quiz pour approfondir vos connaissances.',
    restartQuiz: 'Recommencer le défi',
    exploreRelatedRegion: 'Explorer la région associée',

    assistantModalTitle: 'Assistant IA Rahal',
    assistantModalBadge: 'Histoire & Patrimoine Saoudien',
    assistantModalSub: 'Posez vos questions sur l’histoire, les monuments, la cuisine et le folklore des 13 régions',
    assistantGreeting: 'Bienvenue voyageur ! Je suis votre assistant IA spécialisé dans l’histoire, la gastronomie, les monuments et la culture des 13 régions d’Arabie Saoudite. Comment puis-je enrichir votre voyage aujourd’hui ?',
    assistantSuggestedQuestions: 'Questions suggérées :',
    assistantInputPlaceholder: 'Demandez l’histoire de Diriyah, le secret du Kleicha, les tombeaux d’Hégra...',
    send: 'Envoyer',

    footerDesc: 'Plateforme culturelle interactive pour explorer l’histoire, les civilisations, la gastronomie et les monuments des 13 régions d’Arabie Saoudite.',
    thirteenRegionsTitle: '13 Régions Saoudiennes',
    aiAssistantTitle: 'Assistant IA Rahal',
    aiAssistantDesc: 'Posez vos questions historiques et culturelles à l’intelligence artificielle dédiée au patrimoine saoudien.',
    startChatBtn: 'Démarrer la discussion',
    allRightsReserved: 'Tous droits réservés à la plateforme Rahal ©',
    fontCustomization: 'Personnalisation Typographique',
    unescoLabel: 'Patrimoine Mondial UNESCO',
    saudiNationalHeritage: 'Patrimoine National Saoudien',
  },

  es: {
    brandName: 'RAHAL',
    brandTagline: 'Tu viaje interactivo por la historia y el patrimonio saudí',
    brandSub: 'Portal de las 13 regiones del Reino de Arabia Saudita',
    saudiPride: '🇸🇦 Creado con orgullo celebrando la identidad saudí',

    home: 'Inicio',
    regionsDropdown: 'Regiones (13)',
    allSaudiRegions: 'Regiones de Arabia Saudita',
    foodNav: 'Comida Tradicional',
    landmarksNav: 'Monumentos Históricos',
    historyNav: 'Historia',
    cultureNav: 'Cultura y Tradición',
    searchBtn: 'Buscar...',
    searchPlaceholder: 'Buscar platos, monumentos, eventos históricos, arte folclórico...',
    fontPickerBtn: 'Tipografía',
    quizBtn: 'Desafío Patrimonial',
    askAssistantNav: 'Preguntar a Rahal',

    languageSelect: 'Idioma',
    languages: {
      ar: 'العربية (🇸🇦)',
      en: 'English (🇬🇧)',
      fr: 'Français (🇫🇷)',
      es: 'Español (🇪🇸)',
    },

    heroBadge: 'Plataforma de Historia, Cultura y Patrimonio Saudí | 13 Regiones',
    heroTagline: 'Tu viaje interactivo por la historia y el patrimonio saudí',
    heroDesc: 'Descubre los tesoros y la riqueza de las 13 regiones de Arabia Saudita: desde monumentos milenarios declarados Patrimonio Mundial por la UNESCO hasta la gastronomía auténtica y el folclore vivo.',
    exploreKingdomBtn: 'Explorar el Reino',
    askAssistantBtn: 'Consultar al Asistente IA Rahal',
    statRegions: '13 Regiones Saudíes',
    statRegionsSub: 'Mapa Geográfico Interactivo',
    statUnesco: 'Sitios del Patrimonio UNESCO',
    statUnescoSub: 'Hegra, At-Turaif, Al-Ahsa',
    statFood: 'Gastronomía Tradicional',
    statFoodSub: 'Ingredientes y Contexto Cultural',
    statCulture: 'Artes y Tradiciones Vivas',
    statCultureSub: 'Sadu, Al-Qatt, Ardah, Mizmar',

    mapSectionBadge: 'Mapa Interactivo de las 13 Regiones Saudíes',
    mapTitle: 'Selecciona una región para explorar',
    mapSubtitle: 'Haz clic en cualquiera de las 13 regiones para explorar su historia, yacimientos arqueológicos, gastronomía y patrimonio cultural.',
    mapHint: 'Pasa el cursor sobre una región para vista previa o haz clic para ver su ficha completa',
    quickJump: 'Acceso rápido:',
    selectRegionPlaceholder: '-- Seleccionar una región --',
    zoomIn: 'Acercar',
    zoomOut: 'Alejar',
    resetView: 'Restablecer vista',
    legend13Regions: '13 regiones saudíes',
    legendSelectedRegion: 'Región seleccionada',
    openRegionPage: 'Abrir página de la región',
    exploreRegionAndGallery: 'Explorar región y galería fotográfica',

    pillarsBadge: 'Pilares de la Identidad Cultural',
    pillarsTitle: 'Explora los Cuatro Pilares de Rahal',
    pillarsDesc: 'Sumérgete en el patrimonio saudí a través de cuatro grandes ejes que narran la historia de la tierra y sus habitantes a lo largo de los siglos.',
    pillarFoodTitle: 'Gastronomía Tradicional',
    pillarFoodSub: 'Sabores Auténticos y Raíces',
    pillarFoodBadge: 'Cocina del Terruño',
    pillarFoodDesc: 'Descubre platos emblemáticos: Kabsa y Jareesh de Najd, Saleeg del Hiyaz, Areeka, Raqsh y Kleicha de Qassim.',
    pillarFoodCount: 'Más de 30 platos documentados',
    pillarLandmarksTitle: 'Monumentos Históricos',
    pillarLandmarksSub: 'Huellas de Civilizaciones y Fortalezas',
    pillarLandmarksBadge: 'Patrimonio de la UNESCO',
    pillarLandmarksDesc: 'Viaja por Hegra en AlUla, At-Turaif en Diriyah, la fortaleza Masmak, Yeda histórica y la aldea de mármol de Thee Ain.',
    pillarLandmarksCount: 'Sitios Mundiales y Castillos',
    pillarHistoryTitle: 'Historia de Arabia',
    pillarHistorySub: 'Hitos de la Fundación del Estado',
    pillarHistoryBadge: 'Profundidad Histórica',
    pillarHistoryDesc: 'Sigue la Ruta del Incienso, los caminos del Hajj, el primer y segundo Estado saudí y la unificación del Reino.',
    pillarHistoryCount: 'Siglos de Historia',
    pillarCultureTitle: 'Cultura y Artes Populares',
    pillarCultureSub: 'Trajes, Artesanías y Tradiciones',
    pillarCultureBadge: 'Identidad Viva',
    pillarCultureDesc: 'Conoce el tejido Sadu, los murales Al-Qatt Al-Asiri, la confección del Bisht, el cultivo del café Khawlani y la danza Ardah.',
    pillarCultureCount: 'Patrimonio Inmaterial de la UNESCO',
    exploreCategoryBtn: 'Explorar contenido',

    backToHomeAndMap: 'Inicio y Mapa',
    switchRegion: 'Cambiar región',
    shareLink: 'Compartir enlace',
    copiedLink: '¡Enlace copiado con éxito!',
    areaKm: 'Superficie',
    climate: 'Clima',
    identity: 'Identidad Cultural',
    galleryBadge: 'Galería de Fotos Interactiva',
    galleryTitle: 'Escenas del patrimonio y esplendor de',
    photosCount: 'Fotos verificadas',
    autoPlay: 'Reproducción Automática',
    pause: 'Pausar',
    fullscreen: 'Pantalla Completa',
    tabAll: 'Todas las categorías',
    tabFood: 'Comida Tradicional',
    tabLandmarks: 'Monumentos Históricos',
    tabHistory: 'Línea de Tiempo',
    tabCulture: 'Cultura y Artes',
    ingredientsTitle: 'Ingredientes Auténticos',
    culturalContextTitle: 'Contexto Cultural y Ocasión',
    originStoryTitle: 'Historia del Origen',
    preparationTraditionTitle: 'Tradiciones de Preparación y Presentación',
    keyFactsTitle: 'Datos Clave y Cifras',
    historicalSignificanceTitle: 'Significado Histórico y Cultural',
    materialsTitle: 'Materiales y Elementos Utilizados',
    unescoRegistered: 'Inscrito en el Patrimonio Mundial de la UNESCO',
    askAboutRegionBtn: 'Preguntar al Asistente IA sobre esta región',
    viewDetails: 'Ver detalles',
    close: 'Cerrar',

    foodModalTitle: 'Enciclopedia Culinaria Saudí',
    foodModalSub: 'Descubre platos emblemáticos, ingredientes y raíces culturales de las 13 regiones',
    allRegionsFilter: 'Todas las regiones',
    searchDishesPlaceholder: 'Buscar platos, especias...',
    dishesCount: 'Platos documentados',

    landmarksModalTitle: 'Guía de Monumentos y Yacimientos Históricos',
    landmarksModalSub: 'Explora fortalezas, sitios de la UNESCO y vestigios milenarios en Arabia Saudita',
    searchLandmarksPlaceholder: 'Buscar monumento, castillo o yacimiento...',
    landmarksCount: 'Monumentos',

    historyModalTitle: 'Línea de Tiempo de las Regiones Saudíes',
    historyModalSub: 'Grandes hitos, fundación de estados y civilizaciones a través de los siglos',
    searchHistoryPlaceholder: 'Buscar eventos o personajes históricos...',
    eventsCount: 'Eventos documentados',

    cultureModalTitle: 'Enciclopedia de Cultura y Folclore Vivo',
    cultureModalSub: 'Artesanía, artes escénicas, trajes tradicionales y ritos de hospitalidad',
    cultureTabAll: 'Todos',
    cultureTabArts: 'Artesanía y Tejidos',
    cultureTabDance: 'Artes Vivas y Música',
    cultureTabCostume: 'Trajes y Joyería',
    cultureTabTraditions: 'Costumbres y Hospitalidad',
    itemsCount: 'Elementos culturales',

    searchModalTitle: 'Búsqueda Global en el Patrimonio Saudí',
    searchModalSub: 'Busca entre cientos de monumentos, platos típicos, eventos y tradiciones populares',
    searchModalInput: 'Escribe un plato, monumento, ciudad...',
    searchResultsFor: 'Resultados de búsqueda para',
    noResultsFound: 'No se encontraron resultados que coincidan',
    tryAnotherSearch: 'Intenta con otros términos o explora las regiones directamente en el mapa',
    categoryRegion: 'Región',
    categoryFood: 'Plato Tradicional',
    categoryLandmark: 'Monumento Histórico',
    categoryHistory: 'Evento Histórico',
    categoryCulture: 'Cultura y Tradición',

    quizModalTitle: 'Desafío Patrimonial Rahal',
    quizModalSub: 'Pon a prueba tus conocimientos sobre la historia, geografía y cultura de las 13 regiones',
    questionOf: 'Pregunta',
    scoreLabel: 'Puntuación',
    nextQuestion: 'Siguiente pregunta',
    viewResults: 'Ver resultado final',
    quizFinished: '¡Desafío completado con éxito!',
    quizCongratulations: '¡Felicidades! Tienes un excelente conocimiento del patrimonio saudí.',
    quizTryAgain: 'Vuelve a realizar el cuestionario para fortalecer tu saber.',
    restartQuiz: 'Reiniciar desafío',
    exploreRelatedRegion: 'Explorar la región relacionada',

    assistantModalTitle: 'Asistente IA Rahal',
    assistantModalBadge: 'Historia y Cultura Saudí',
    assistantModalSub: 'Formula preguntas históricas y culturales sobre las 13 regiones de Arabia Saudita',
    assistantGreeting: '¡Bienvenido viajero! Soy tu asistente de IA especializado en la historia, gastronomía, monumentos y patrimonio de las 13 regiones de Arabia Saudita. ¿Cómo puedo enriquecer tu viaje hoy?',
    assistantSuggestedQuestions: 'Preguntas sugeridas:',
    assistantInputPlaceholder: 'Pregunta por Diriyah, especias de Kleicha, grabados de Hegra...',
    send: 'Enviar',

    footerDesc: 'Plataforma cultural interactiva para explorar la historia, civilizaciones, gastronomía y monumentos de las 13 regiones de Arabia Saudita.',
    thirteenRegionsTitle: '13 Regiones Saudíes',
    aiAssistantTitle: 'Asistente IA Rahal',
    aiAssistantDesc: 'Formula preguntas históricas y culturales a la inteligencia artificial especializada en el patrimonio saudí.',
    startChatBtn: 'Iniciar conversación',
    allRightsReserved: 'Todos los derechos reservados a la plataforma Rahal ©',
    fontCustomization: 'Ajustes de Tipografía',
    unescoLabel: 'Patrimonio de la UNESCO',
    saudiNationalHeritage: 'Patrimonio Nacional Saudí',
  },
};

/**
 * Helper to normalize any region ID key
 */
function normalizeRegionKey(regionId: string): string {
  const map: Record<string, string> = {
    qassim: 'al-qassim',
    alqassim: 'al-qassim',
    northern: 'northern-borders',
    bahah: 'al-baha',
    baha: 'al-baha',
    albaha: 'al-baha',
    jouf: 'al-jawf',
    aljouf: 'al-jawf',
  };
  return map[regionId.toLowerCase()] || regionId.toLowerCase();
}

/**
 * Helper to retrieve localized name and metadata for any region
 */
export function getRegionName(regionId: string, lang: Language): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.name || REGION_LOCALIZATIONS[regionId]?.[lang]?.name || regionId;
}

export function getRegionCapital(regionId: string, lang: Language): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.capital || REGION_LOCALIZATIONS[regionId]?.[lang]?.capital || '';
}

export function getRegionShortSummary(regionId: string, lang: Language, fallback: string): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.shortSummary || REGION_LOCALIZATIONS[regionId]?.[lang]?.shortSummary || fallback;
}

export function getRegionDescription(regionId: string, lang: Language, fallback: string): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.description || REGION_LOCALIZATIONS[regionId]?.[lang]?.description || fallback;
}

export function getRegionClimate(regionId: string, lang: Language, fallback: string): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.climate || REGION_LOCALIZATIONS[regionId]?.[lang]?.climate || fallback;
}

export function getRegionCulturalIdentity(regionId: string, lang: Language, fallback: string): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.culturalIdentity || REGION_LOCALIZATIONS[regionId]?.[lang]?.culturalIdentity || fallback;
}

export function getRegionAreaKm2(regionId: string, lang: Language, fallback: string): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.areaKm2 || REGION_LOCALIZATIONS[regionId]?.[lang]?.areaKm2 || (lang === 'ar' ? fallback : fallback.replace('كم²', 'km²').replace('كم2', 'km²'));
}

export function getRegionCityPin(regionId: string, lang: Language, fallback: string): string {
  const key = normalizeRegionKey(regionId);
  return REGION_LOCALIZATIONS[key]?.[lang]?.cityPin || REGION_LOCALIZATIONS[regionId]?.[lang]?.cityPin || fallback;
}
