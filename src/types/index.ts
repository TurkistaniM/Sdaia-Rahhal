export interface FoodItem {
  id: string;
  name: string;
  arabicName: string;
  image: string;
  description: string;
  culturalContext: string;
  ingredients: string[];
  regionId: string;
  regionName: string;
  originStory?: string;
  preparationTradition?: string;
  source?: string;
}

export interface LandmarkItem {
  id: string;
  name: string;
  arabicName: string;
  city: string;
  regionId: string;
  regionName: string;
  image: string;
  era: string; // e.g. "القرن الأول قبل الميلاد", "الدولة السعودية الأولى"
  shortDescription: string;
  historicalSignificance: string;
  unescoHeritage?: boolean;
  coordinates?: { lat: number; lng: number };
  keyFacts: string[];
  source?: string;
}

export interface HistoricalEvent {
  id: string;
  title: string;
  era: string;
  dateOrCentury: string;
  description: string;
  significance: string;
  story?: string;
  source?: string;
  location?: string;
  imageUrl?: string;
}

export interface CulturalItem {
  id: string;
  title: string;
  type: 'art_craft' | 'dance_music' | 'costume' | 'custom_hospitality';
  typeName: string;
  image: string;
  description: string;
  heritageStory: string;
  materialsOrFeatures?: string[];
  unescoRecognized?: boolean;
}

export interface Region {
  id: string; // e.g. "sa-ri", "sa-mk", "SA-01"
  amChartId: string; // "SA-01" etc.
  name: string; // "منطقة الرياض"
  englishName: string;
  capital: string; // "الرياض"
  capitalImage?: string; // e.g. "/images/cities/C01.jpg"
  heroImage: string;
  shortSummary: string;
  description: string;
  areaKm2: string;
  climate: string;
  culturalIdentity: string;
  foods: FoodItem[];
  landmarks: LandmarkItem[];
  history: HistoricalEvent[];
  culture: CulturalItem[];
  tags: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  regionName: string;
}
