export interface FontOption {
  id: string;
  name: string;
  nameEn: string;
  fontFamily: string;
  category: string;
  badge: string;
  description: string;
  sample: string;
  recommendedFor: 'all' | 'body' | 'heading';
}

export const ARABIC_FONTS: FontOption[] = [
  {
    id: 'ibm-plex',
    name: 'آي بي إم بليكس عربي',
    nameEn: 'IBM Plex Sans Arabic',
    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
    category: 'عصري وتقني متوازن',
    badge: 'الافتراضي',
    description: 'خط عربي حديث يجمع بين الأناقة والوضوح العالي في الشاشات والقراءة.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'all'
  },
  {
    id: 'tajawal',
    name: 'تجوال',
    nameEn: 'Tajawal',
    fontFamily: "'Tajawal', sans-serif",
    category: 'انسيابي وسلس',
    badge: 'مريح للعين',
    description: 'خط هندسي عربي أنيق وخفيف على العين، رائع لتصفح المقالات والواجهات التفاعلية.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'all'
  },
  {
    id: 'almarai',
    name: 'المراعي',
    nameEn: 'Almarai',
    fontFamily: "'Almarai', sans-serif",
    category: 'رسمي واحترافي',
    badge: 'الأكثر وضوحاً',
    description: 'خط عالي الوضوح مصمم خصيصاً للشاشات الرقمية، يمنح المنصة طابعاً رسمياً موثوقاً.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'all'
  },
  {
    id: 'amiri',
    name: 'أميري النسخي',
    nameEn: 'Amiri',
    fontFamily: "'Amiri', serif",
    category: 'تراثي ونسخي كلاسيكي',
    badge: 'تراثي أصيل',
    description: 'خط نسخي كلاسيكي مستوحى من خطوط المطابع التاريخية، يجسد عبق التاريخ والمخطوطات.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'all'
  },
  {
    id: 'cairo',
    name: 'كايرو',
    nameEn: 'Cairo',
    fontFamily: "'Cairo', sans-serif",
    category: 'هندسي وجريء',
    badge: 'بارز للعناوين',
    description: 'خط هندسي قوي وبارز يضفي هيبة وحضوراً لافتاً على العناوين والبطاقات.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'heading'
  },
  {
    id: 'readex',
    name: 'ريدكس برو',
    nameEn: 'Readex Pro',
    fontFamily: "'Readex Pro', sans-serif",
    category: 'تصميم معاصر فائق',
    badge: 'عصري حديث',
    description: 'خط مستقبلي نظيف بزوايا دائرية محسوبة بدقة لتجربة استخدام حديثة.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'all'
  },
  {
    id: 'alexandria',
    name: 'الإسكندرية',
    nameEn: 'Alexandria',
    fontFamily: "'Alexandria', sans-serif",
    category: 'متناسق وهادئ',
    badge: 'أنيق ومتناسق',
    description: 'خط عربي معاصر متوازن جداً في النسب والمسافات.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'all'
  },
  {
    id: 'noto-kufi',
    name: 'الكوفي الحديث',
    nameEn: 'Noto Kufi Arabic',
    fontFamily: "'Noto Kufi Arabic', sans-serif",
    category: 'كوفي معماري',
    badge: 'طابع هندسي عريق',
    description: 'طابع الخط الكوفي الهندسي المعماري الذي يرمز للهوية والتاريخ والزخارف.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'heading'
  },
  {
    id: 'aref-ruqaa',
    name: 'عارف رقعة',
    nameEn: 'Aref Ruqaa',
    fontFamily: "'Aref Ruqaa', serif",
    category: 'خط رقعة فني',
    badge: 'فني مخطوطاتي',
    description: 'خط رقعة فني تراثي دافئ مستوحى من كتابة اليد والألواح التراثية.',
    sample: 'رَحَّــال | استكشف تاريخ وتراث وثقافة مناطق المملكة العربية السعودية الـ 13',
    recommendedFor: 'heading'
  }
];
