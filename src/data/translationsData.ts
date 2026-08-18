import { FoodItem, LandmarkItem, HistoricalEvent, CulturalItem, QuizQuestion } from '../types/index';
import { Language } from './translations';

export interface LocalizedItemText {
  name?: string;
  title?: string;
  description?: string;
  shortDescription?: string;
  culturalContext?: string;
  originStory?: string;
  preparationTradition?: string;
  historicalSignificance?: string;
  significance?: string;
  era?: string;
  city?: string;
  typeName?: string;
  heritageStory?: string;
  ingredients?: string[];
  keyFacts?: string[];
  materialsOrFeatures?: string[];
}

export const ITEM_TRANSLATIONS: Record<Language, Record<string, LocalizedItemText>> = {
  ar: {},
  en: {
    // Verified 13 Dishes
    'F01': {
      name: 'Kabsa',
      description: 'Creamy milky rice served with chicken or meat, a famous celebratory Hijazi & Saudi specialty',
      culturalContext: 'Traditional spiced rice dish with meat or chicken, iconic across Najd and Saudi Arabia',
      ingredients: ['Traditional spiced rice', 'Tender lamb or chicken']
    },
    'F02': {
      name: 'Saleeg',
      description: 'Thin dough cooked with meat and vegetable broth, a traditional celebratory Madinah & Hijazi dish',
      culturalContext: 'Creamy milky rice served with chicken or meat, a famous celebratory Hijazi specialty',
      ingredients: ['Creamy milky rice', 'Chicken or lamb']
    },
    'F03': {
      name: 'Mataziz',
      description: 'Thin cut dough cooked in rich meat broth with vegetables, one of Al-Qassim\'s most famous heritage dishes',
      culturalContext: 'Thin dough cooked with meat broth and seasonal vegetables, served on special occasions',
      ingredients: ['Thin dough pieces', 'Rich meat and vegetable broth']
    },
    'F04': {
      name: 'Marqooq',
      description: 'Spiced aromatic rice cooked with shrimp, reflecting the Eastern Province deep connection to the sea',
      culturalContext: 'Thin rolled dough cut and simmered in seasoned meat and vegetable stew, popular in Al-Qassim',
      ingredients: ['Cut thin dough', 'Meat and vegetable broth']
    },
    'F05': {
      name: 'Shrimp Machboos',
      description: 'Traditional sweet made of toasted flour, ghee, and honey, famous in Asir Region',
      culturalContext: 'Aromatic spiced rice with succulent Gulf shrimp, honoring coastal maritime heritage',
      ingredients: ['Aromatic spiced rice', 'Fresh Gulf shrimp']
    },
    'F06': {
      name: 'Mafrooka',
      description: 'Traditional bread baked on hot stones in a sand pit, famous in Northwest Saudi Arabia',
      culturalContext: 'Classic southern sweet prepared with toasted flour, clarified butter, and pure honey',
      ingredients: ['Toasted flour', 'Clarified butter (ghee) & pure honey']
    },
    'F07': {
      name: 'Taboo Bread',
      description: 'Dried thin dough cooked in rich meat and vegetable broth, a popular Hail dish',
      culturalContext: 'Traditional flatbread baked on heated river stones inside a desert sand hearth',
      ingredients: ['Whole wheat flour', 'Water and salt baked on hot stones']
    },
    'F08': {
      name: 'Qursan',
      description: 'Ultra-thin bread stuffed with meat or served with honey, widespread in the Northern Borders',
      culturalContext: 'Dried thin dough simmered in flavorful meat and vegetable broth, iconic Hail dish',
      ingredients: ['Thin dried dough', 'Rich meat & vegetable broth']
    },
    'F09': {
      name: 'Ruqaq',
      description: 'Flour porridge served with ghee and honey or date molasses, a renowned Jazan delicacy',
      culturalContext: 'Paper-thin delicate flatbread stuffed with tender meat or served with honey in Northern Borders',
      ingredients: ['Delicate thin bread', 'Meat or golden honey']
    },
    'F10': {
      name: 'Jazani Aseeda',
      description: 'Mashed dates combined with bread and ghee, an authentic traditional dessert from Najran',
      culturalContext: 'Smooth grain porridge served with pure clarified butter and wild honey or date syrup in Jazan',
      ingredients: ['Ground grains & flour', 'Clarified butter & honey/molasses']
    },
    'F11': {
      name: 'Haneeni',
      description: 'Crumbled bread blended with ghee and honey or broth, a celebrated mountain dish in Al-Bahah',
      culturalContext: 'Warm mashed dates kneaded with freshly baked brown bread and ghee, authentic to Najran',
      ingredients: ['Mashed dates', 'Brown bread & clarified butter']
    },
    'F12': {
      name: 'Maftoot',
      description: 'Sweet pastry stuffed with dates or walnuts, among the most celebrated sweets in Al-Jouf and Najd',
      culturalContext: 'Crumbled whole wheat bread mixed with ghee and honey or warm meat broth in Al-Bahah',
      ingredients: ['Crumbled wheat bread', 'Ghee and honey or broth']
    },
    'F13': {
      name: 'Kuleija',
      description: 'Spiced embossed pastry filled with dates, cardamom, and cinnamon, renowned in Al-Jouf and Najd',
      culturalContext: 'Delicate pastry stuffed with date paste or walnuts, cardamom, and cinnamon',
      ingredients: ['Wheat flour dough', 'Date paste, cinnamon & cardamom']
    },
    // Riyadh Food
    'riyadh-kabsa': {
      name: 'Najdi Kabsa',
      description: 'The iconic Saudi dish made with fragrant long-grain rice, tender lamb or camel meat, spiced with dried black lime (loomi) and traditional Najdi spices.',
      culturalContext: 'A symbol of generous hospitality in feasts, official banquets, and family gatherings in Najd.',
      ingredients: ['Fresh Najdi lamb or camel meat', 'Amber or Mazza long-grain rice', 'Desert dried lime (Loomi)', 'Cardamom, cinnamon & cloves', 'Toasted onions, almonds & pine nuts']
    },
    'riyadh-jareesh': {
      name: 'Najdi Jareesh',
      description: 'Slow-cooked cracked wheat simmered gently with rich broth, fresh laban (buttermilk) and tender meat, topped with aromatic "Musammanah" caramelized onion garnish.',
      culturalContext: 'One of the oldest traditional dishes in Najd, officially designated as the Saudi National Dish.',
      ingredients: ['Coarsely cracked Najdi wheat', 'Fresh laban (buttermilk)', 'Wild sheep ghee', 'Chopped onions', 'Musammanah (loomi, cardamom & Najdi spices)']
    },
    'riyadh-qursan': {
      name: 'Qursan',
      description: 'Paper-thin whole wheat flatbread layered and steeped in a rich meat broth packed with seasonal vegetables such as pumpkin, zucchini, and green beans.',
      culturalContext: 'A signature winter delicacy reflecting the mastery of Najdi home cooking.',
      ingredients: ['Najdi whole wheat flour', 'Tender lamb chunks', 'Sweet pumpkin & zucchini', 'Green beans', 'Traditional spiced onion ghee']
    },
    'riyadh-hanini': {
      name: 'Najdi Hanini',
      description: 'A luxurious Najdi winter dessert made from crushed Khalas dates, warm brown wheat bread, butter, saffron, and cardamom.',
      culturalContext: 'Served piping hot alongside Saudi coffee during cold winter nights.',
      ingredients: ['Premium Khalas dates', 'Freshly baked whole-wheat bread', 'Pure clarified butter (Ghee)', 'Cardamom and pure saffron']
    },
    // Makkah Food
    'makkah-saleeg': {
      name: 'Hijazi / Taifi Saleeg',
      description: 'Velvety short-grain rice cooked in rich broth and infused with fresh milk, clarified butter, and aromatic mastic (mistaka), served with fiery Daggus tomato sauce.',
      culturalContext: 'The centerpiece of Hijazi banquets and family gatherings.',
      ingredients: ['Egyptian short-grain rice', 'Fresh whole milk', 'Tender Harri lamb or roasted chicken', 'Premium Greek mastic tears', 'Clarified butter & cardamom']
    },
    'makkah-motabbaq': {
      name: 'Hijazi Motabbaq',
      description: 'Crispy folded pastry griddled over high heat, filled with seasoned minced meat, fresh leeks, eggs, and warm spices, served with fresh lime.',
      culturalContext: 'The most popular street food during Ramadan in the historic alleys of Makkah and Jeddah.',
      ingredients: ['Thin pastry dough', 'Spiced ground meat', 'Fresh local leeks', 'Eggs & mild curry spice', 'Lime wedges']
    },
    'makkah-mandi': {
      name: 'Hijazi Mandi',
      description: 'Tender Harri meat slow-roasted in a sealed underground clay pit (tannour) over aromatic rice seasoned with saffron and smoldering wood embers.',
      culturalContext: 'The grand feast of Hijazi generosity welcoming pilgrims and celebrating weddings.',
      ingredients: ['Fresh young lamb', 'Basmati rice', 'Saffron & desert wood smoke', 'Toasted nuts and fried onions']
    },
    // Madinah Food
    'madinah-ruzz-bukhari': {
      name: 'Traditional Madinah Rice',
      description: 'Fragrant white rice infused with screwpine water (Kadi), saffron, mastic, and tender local lamb, topped with chickpeas and golden raisins.',
      culturalContext: 'The signature celebratory feast for weddings and gatherings in Al-Madinah.',
      ingredients: ['Aromatic basmati rice', 'Fresh Madinah lamb', 'Kadi water & natural saffron', 'Peeled chickpeas and golden raisins', 'Mastic & cardamom']
    },
    'madinah-ajwa': {
      name: 'Madinah Ajwa Dates & Delicacies',
      description: 'The world-renowned sacred black dates from Madinah, known for their soft texture, subtle caramel flavor, and remarkable health properties.',
      culturalContext: 'A blessed gift cherished by visitors of the Prophet\'s Mosque.',
      ingredients: ['Organic Madinah Ajwa dates', 'Stone-ground sesame tahini', 'Cardamom and Saudi coffee']
    },
    // Eastern Province Food
    'eastern-hasawi-rice': {
      name: 'Al-Ahsa Red Rice (Aish Hasawi)',
      description: 'A prized reddish-brown heirloom grain grown in Al-Ahsa oasis, mineral-rich and slow-cooked with tender meat, fenugreek, and fragrant spices.',
      culturalContext: 'One of the rarest and most nutrient-rich heirloom grains in the world.',
      ingredients: ['Authentic red Hasawi rice', 'Fresh lamb', 'Fenugreek & Al-Ahsa spice blend', 'Tomatoes, garlic & onions', 'Al-Ahsa clarified butter']
    },
    'eastern-sayadieh': {
      name: 'Arabian Gulf Fish Makbous',
      description: 'Fresh Gulf catch (Kingfish or Grouper) seasoned with black lime and turmeric, layered over spiced aromatic rice cooked in concentrated fish stock.',
      culturalContext: 'The heritage meal of eastern seafarers and pearl divers.',
      ingredients: ['Fresh Hamour or Kingfish', 'Amber rice', 'Omani dried black lime', 'Fresh cilantro, dill & garlic']
    },
    // Asir Food
    'asir-areeka': {
      name: 'Asiri Areeka with Ghee & Honey',
      description: 'Warm whole-wheat mash served in a carved wooden bowl, with a center pool of golden wild Sidr honey, sheep ghee, and sweet date garnish.',
      culturalContext: 'The quintessential symbol of southern generosity and morning hospitality in the Sarawat mountains.',
      ingredients: ['Organic southern whole-wheat flour', 'Pure mountain sheep ghee', 'Wild Sidr mountain honey', 'Barni / Khalas dates', 'Nigella seeds']
    },
    'asir-tasabeaa': {
      name: 'Asiri Tasabea (Masabea)',
      description: 'Small bite-sized dumplings of whole-wheat dough cooked in simmering fresh milk infused with fenugreek and butter, served warm with honey.',
      culturalContext: 'A comforting mountain delicacy for chilly winter evenings and celebration banquets.',
      ingredients: ['Pure whole-wheat flour', 'Fresh cow milk', 'Southern clarified butter', 'Pure Sidr honey']
    },
    'asir-haneeth': {
      name: 'Asiri Haneeth with Marakh Leaves',
      description: 'Tender mountain goat meat roasted in an underground stone pit covered in aromatic wild Marakh and Sal\'a branches over acacia coals.',
      culturalContext: 'The pinnacle of southern culinary heritage, known for the herbal smoky aroma of Marakh.',
      ingredients: ['Young mountain goat', 'Wild Marakh branches', 'Sea salt crystals', 'Mifa bread or fragrant rice']
    },
    // Tabuk Food
    'tabuk-sayadieh': {
      name: 'Tabuk Mujallalah Bread & Broth',
      description: 'Whole wheat flatbread baked over open embers, crumbled and soaked in rich sheep ghee and fresh buttermilk in a wooden platter.',
      culturalContext: 'Traditional Bedouin winter dish designed for cold desert nights.',
      ingredients: ['Pure whole wheat flour', 'Wild sheep ghee', 'Fresh buttermilk', 'Desert rock salt']
    },
    'tabuk-fish': {
      name: 'Fried Najel Fish of Tabuk',
      description: 'Fresh red coral trout (Najel) from Duba and Umluj coasts, marinated with cumin, garlic, and citrus, served with crispy saj bread and spiced rice.',
      culturalContext: 'The coastal culinary pride of Tabuk ports.',
      ingredients: ['Fresh red Najel fish', 'Cumin, garlic & lime', 'Sesame oil', 'Smoked sayadieh rice']
    },
    // Hail Food
    'hail-kbeiba': {
      name: 'Hail Kbeiba (Stuffed Vine Leaves)',
      description: 'Tender vine leaves packed with spiced Egyptian rice, minced meat, fiery red Hail chili, dried lime, and olive oil, cooked slowly in deep pots.',
      culturalContext: 'Hail\'s most renowned heritage dish and a hallmark of Hatimi generosity.',
      ingredients: ['Fresh grape leaves', 'Rice & minced beef/lamb', 'Red Hail hot peppers', 'Hail dried black lime & olive oil']
    },
    'hail-temman': {
      name: 'Hail Temman with Pumpkin & Meat',
      description: 'Short-grain rice simmered with tender camel or lamb meat and sweet red pumpkin until soft and velvety like porridge.',
      culturalContext: 'A hearty winter dish deeply rooted in historic Hail households.',
      ingredients: ['Temman short-grain rice', 'Camel or lamb meat', 'Ripe red pumpkin', 'Hail ghee and spice blend']
    },
    // Jazan Food
    'jazan-maghash': {
      name: 'Jazani Maghash Stone Pot Stew',
      description: 'A stone pot carved from mountain rock filled with fresh meat, okra, potatoes, and tomatoes, slow-baked in the clay Mifa oven until fork-tender.',
      culturalContext: 'The culinary soul of Jazan homes across coastal Tihama and lush highlands.',
      ingredients: ['Fresh lean meat', 'Okra, potatoes & tomatoes', 'Jazani Hawayij spice mix', 'Fresh green chili', 'Jazani Khameer bread']
    },
    'jazan-khameer': {
      name: 'Jazani Khameer Bread',
      description: 'Naturally fermented sorghum flatbread baked on the fiery clay walls of the traditional Mifa oven.',
      culturalContext: 'The staple daily bread of southwestern Arabia for thousands of years.',
      ingredients: ['Red or white sorghum flour', 'Traditional sourdough starter', 'Pure water and salt']
    },
    // Najran Food
    'najran-raqsh': {
      name: 'Najrani Raqsh with Ghee & Broth',
      description: 'Thin whole-wheat bread sheets layered in a carved stone Madhan bowl, drenched in rich meat and vegetable broth or topped with milk, honey, and ghee.',
      culturalContext: 'The master dish of Najran hospitality served during festive gatherings.',
      ingredients: ['Najrani whole-wheat flour', 'Tender lamb & rich broth', 'Pure clarified butter & Sidr honey', 'Hand-carved stone Madhan bowl']
    },
    'najran-wafad': {
      name: 'Najrani Wafad & Broth',
      description: 'Dense dome-shaped cooked wheat dough served alongside a steaming bowl of spiced meat broth and clarified butter.',
      culturalContext: 'A hearty traditional lunch and feast meal in Najran oasis.',
      ingredients: ['Fine Najrani wheat flour', 'Spiced lamb broth with Hawayij', 'Local clarified butter']
    },
    // Al-Baha Food
    'baha-khubzah-maqnah': {
      name: 'Southern Khubzah Maqnah',
      description: 'A massive artisan whole-wheat bread wheel baked on searing stones (Mashhah) and blanketed under glowing coals and clean ash until golden and crusty.',
      culturalContext: 'The pride of Al-Baha village kitchens, served with honey and ghee.',
      ingredients: ['Local mountain wheat flour', 'Water, salt & natural starter', 'Southern sheep ghee & Sidr honey']
    },
    'baha-daghabees': {
      name: 'Al-Baha Daghabees',
      description: 'Hand-shaped whole wheat dough dumplings simmered in rich spiced meat broth until tender, eaten with broth and lamb chunks.',
      culturalContext: 'The favorite winter comfort food in the mist-veiled peaks of Al-Baha.',
      ingredients: ['Whole-wheat or sorghum flour', 'Local lamb chunks', 'Southern spiced onion-garlic broth', 'Green hot chili']
    },
    // Al-Jawf Food
    'jawf-bakeela': {
      name: 'Al-Jawf Bakeela with Samh & Olive Oil',
      description: 'Heritage sweet paste made from pitted Hilwa dates, wild roasted Samh desert seeds, clarified butter, and extra virgin Al-Jawf olive oil.',
      culturalContext: 'A superfood hospitality delicacy unique to Al-Jawf desert oases.',
      ingredients: ['Premium Hilwa Al-Jawf dates', 'Wild roasted Samh seed flour', 'Sheep ghee or virgin Al-Jawf olive oil']
    },
    'jawf-mjallalah': {
      name: 'Al-Jawf Mjallalah',
      description: 'Ember-baked whole wheat bread kneaded with wild ghee and fresh churned buttermilk, served in rustic wooden bowls.',
      culturalContext: 'Desert nourishment during severe northern winter freezes.',
      ingredients: ['Local whole-wheat flour', 'Pure desert ghee', 'Fresh churned buttermilk', 'Black pepper & rock salt']
    },
    // Northern Borders Food
    'nb-mansaf-shamali': {
      name: 'Northern Mansaf with Jameed',
      description: 'Yellow turmeric rice on thin Shrak bread topped with tender Nuaimi lamb, drenched in tangy cooked Jameed yogurt sauce, garnished with toasted almonds and pine nuts.',
      culturalContext: 'The premier feast of Bedouin hospitality across northern Saudi borders.',
      ingredients: ['Fresh local Nuaimi lamb', 'Dried Jameed stone yogurt', 'Rice & paper-thin Shrak bread', 'Wild ghee & toasted nuts']
    },
    'nb-heesa': {
      name: 'Northern Heesa with Dates & Ghee',
      description: 'Pitted dates kneaded into pan-toasted whole wheat flour, blended with sheep ghee, ginger, and cardamom.',
      culturalContext: 'Energy-dense travel ration for hunters and desert travelers during winter expeditions.',
      ingredients: ['First-grade dates', 'Pan-roasted wheat flour', 'Wild sheep ghee', 'Cardamom & ground ginger']
    },
    // Al-Qassim Food
    'qassim-kleicha': {
      name: 'Al-Qassim Kleicha with Date Molasses',
      description: 'Crispy patterned whole-wheat pastries filled with date molasses, dried black lime, cardamom, cinnamon, and ginger, baked in clay ovens.',
      culturalContext: 'Saudi Arabia\'s iconic heritage pastry, historically packed by Ogailat merchants for desert expeditions.',
      ingredients: ['Al-Qassim whole wheat flour', 'Pure Sukkari date molasses', 'Ground dried black lime (loomi)', 'Ginger, cinnamon, cardamom & ghee']
    },
    'qassim-matazeez': {
      name: 'Al-Qassim Matazeez Stew',
      description: 'Tender bite-sized whole wheat dough discs cooked in a spiced lamb stew packed with pumpkin, zucchini, and eggplant, topped with fried onion garnish.',
      culturalContext: 'The classic Najdi family weekend comfort stew.',
      ingredients: ['Thin fresh whole-wheat dough rounds', 'Tender lamb chunks', 'Pumpkin, zucchini & green beans', 'Tomatoes & spiced onion ghee']
    },

    // --- LANDMARKS ---
    'riyadh-turaif': {
      name: 'At-Turaif District in Historic Diriyah',
      city: 'Diriyah',
      era: '18th Century CE (1744 CE)',
      shortDescription: 'The first capital of the First Saudi State, an exceptional architectural masterpiece of Najdi mud-brick craftsmanship.',
      historicalSignificance: 'A UNESCO World Heritage Site featuring Salwa Palace and the Imam Muhammad bin Saud Mosque.',
      keyFacts: [
        'Inscribed as a UNESCO World Heritage Site in 2010',
        'Home to Salwa Palace spanning over 10,000 square meters',
        'The historic cradle where the First Saudi State was founded in 1727',
        'Built entirely of adobe clay, mud-brick, and palm trunks'
      ]
    },
    'riyadh-masmak': {
      name: 'Historic Al-Masmak Fortress',
      city: 'Old Riyadh',
      era: '1865 CE (Second Saudi State)',
      shortDescription: 'A formidable mud and clay fortress that witnessed the recapture of Riyadh by King Abdulaziz in 1902.',
      historicalSignificance: 'The defining turning point in modern Arabian history that sparked the unification of the Kingdom.',
      keyFacts: [
        'Preserves the original wooden gate with the iconic spearhead embedded in it',
        'Features four 18-meter cylindrical watchtowers',
        'Includes a traditional majlis, deep water well, and historic mosque'
      ]
    },
    'riyadh-murabba': {
      name: 'Historic Murabba Palace',
      city: 'Riyadh',
      era: '1936 - 1938 CE',
      shortDescription: 'The official residence and government headquarters of King Abdulaziz during the early modern era of Saudi Arabia.',
      historicalSignificance: 'Site where major treaties and landmark decisions shaping modern Saudi Arabia were signed.',
      keyFacts: [
        'Built outside Old Riyadh\'s walls as the first integrated royal complex',
        'Represents the evolution of modern Najdi architectural heritage',
        'Featured the first electric elevator installed in Saudi Arabia'
      ]
    },
    'makkah-kaaba': {
      name: 'The Holy Kaaba & Grand Mosque (Al-Masjid Al-Haram)',
      city: 'Makkah Al-Mukarramah',
      era: 'Era of Prophets Abraham & Ishmael',
      shortDescription: 'The first house of worship established for mankind, the Qiblah of Muslims worldwide, and the destination of the Hajj pilgrimage.',
      historicalSignificance: 'The spiritual heart of the Islamic world and the center of Muslim faith and unity.',
      keyFacts: [
        'Encloses the Black Stone, Station of Abraham (Maqam Ibrahim), and the blessed Zamzam well',
        'Has undergone monumental Islamic expansions across the centuries',
        'Welcomes millions of pilgrims every year from every corner of the globe'
      ]
    },
    'makkah-balad': {
      name: 'Historic Jeddah (Al-Balad)',
      city: 'Jeddah',
      era: '7th Century CE (Caliph Uthman ibn Affan)',
      shortDescription: 'A UNESCO World Heritage district renowned for coral-stone architecture and intricately hand-carved wooden Rawashin windows.',
      historicalSignificance: 'The historic gateway port for pilgrims traveling to Makkah and a vital hub on maritime trade routes.',
      keyFacts: [
        'Inscribed on the UNESCO World Heritage list in 2014',
        'Home to iconic historic mansions like Nassif, Noorwali, and Ba\'ashen houses',
        'Features ornate Rawashin windows engineered for thermal insulation and privacy'
      ]
    },
    'makkah-shubra': {
      name: 'Historic Shubra Palace in Taif',
      city: 'Taif',
      era: '1905 CE',
      shortDescription: 'An architectural jewel blending Islamic, Roman, and Hijazi design, used as a summer royal residence by King Abdulaziz and King Faisal.',
      historicalSignificance: 'Witnessed key administrative and diplomatic milestones during the early unification of the Kingdom.',
      keyFacts: [
        'Four stories tall with more than 150 ornately designed rooms',
        'Decorated with exquisite gypsum carvings, Italian marble, and Hijazi latticework',
        'Now operates as a regional museum documenting Taif\'s history'
      ]
    },
    'madinah-hegra': {
      name: 'Hegra Archaeological Site (Madain Saleh)',
      city: 'AlUla',
      era: '1st Century BCE - 1st Century CE',
      shortDescription: 'The largest preserved site of the Nabataean civilization south of Petra, featuring monumental carved rock facades.',
      historicalSignificance: 'The first UNESCO World Heritage Site inscribed in Saudi Arabia (2008).',
      keyFacts: [
        'Features over 111 monumental rock-cut tombs with elaborate decorative facades',
        'Major commercial crossroads on the ancient incense and spice trading routes',
        'Home to the iconic Qasr Al-Farid (The Lonely Castle) and Qasr Al-Bint'
      ]
    },
    'madinah-prophet-mosque': {
      name: 'The Prophet\'s Mosque (Al-Masjid An-Nabawi)',
      city: 'Al-Madinah Al-Munawwarah',
      era: '1 AH (622 CE)',
      shortDescription: 'The mosque founded by Prophet Muhammad (PBUH) and the second holiest site in Islam, housing the Rawdah and Green Dome.',
      historicalSignificance: 'The founding center of the Islamic State and the fountainhead of early Islamic civilization.',
      keyFacts: [
        'Built by Prophet Muhammad (PBUH) and his companions upon the Hijrah',
        'Encloses the Rawdah Ash-Sharifah described as a garden from Paradise',
        'Adorned with giant automated umbrella canopies, sliding domes, and minarets'
      ]
    },
    'madinah-quba': {
      name: 'Historic Quba Mosque',
      city: 'Al-Madinah Al-Munawwarah',
      era: '622 CE',
      shortDescription: 'The very first mosque established in Islam upon the Prophet\'s arrival in Madinah.',
      historicalSignificance: 'Venerated in Islamic history as the mosque whose foundation was laid upon piety from day one.',
      keyFacts: [
        'The Prophet (PBUH) personally took part in laying its stones and construction',
        'Praying in it holds the spiritual reward of performing an Umrah',
        'Currently undergoing the King Salman Expansion Project to make it the largest in its history'
      ]
    },
    'eastern-ahsa-oasis': {
      name: 'Al-Ahsa Cultural Oasis & Al-Qarah Mountain',
      city: 'Al-Hofuf / Al-Ahsa',
      era: '5th Millennium BCE to Present',
      shortDescription: 'The largest self-sustaining date palm oasis in the world, with over 2.5 million palms, natural thermal springs, and Al-Qarah\'s cooling caves.',
      historicalSignificance: 'A UNESCO World Heritage Site documenting over 6,000 years of sustainable water management and agricultural engineering.',
      keyFacts: [
        'Home to over 2.5 million palm trees producing premium Khalas dates',
        'Features Al-Qarah Mountain\'s natural air-conditioned limestone caverns',
        'Includes As-Asfar Lake, Ain Najm hot springs, and historic Ibrahim Palace'
      ]
    },
    'eastern-tarout': {
      name: 'Historic Tarout Castle',
      city: 'Qatif',
      era: 'Dilmun Civilization (3rd Millennium BCE)',
      shortDescription: 'An ancient fortress perched on a rocky hill overlooking the Arabian Gulf, surrounded by fresh sulfur springs on Tarout Island.',
      historicalSignificance: 'A testament to one of the world\'s oldest maritime settlements and ancient Dilmun trade networks.',
      keyFacts: [
        'Refortified in the 16th century CE with circular mud and stone towers',
        'Constructed from sea rock, coral stone, and traditional Arab gypsum',
        'Archaeological excavations uncovered artifacts and statues dating back 5,000 years'
      ]
    },
    'asir-rijal-almaa': {
      name: 'Rijal Almaa Heritage Village',
      city: 'Rijal Almaa',
      era: 'Over 350 Years Old',
      shortDescription: 'A multi-story stone mountain fortress village built from dark basalt accented with luminous white quartz stones.',
      historicalSignificance: 'Named Best Tourism Village by the UNWTO and on the UNESCO Tentative List.',
      keyFacts: [
        'Features over 60 towering stone multi-story fortresses reaching up to 8 levels',
        'Houses the oldest community-founded heritage museum in Saudi Arabia (1985)',
        'Interior walls are adorned with UNESCO-recognized Al-Qatt Al-Asiri mural art'
      ]
    },
    'asir-habala': {
      name: 'Al-Habala Hanging Village',
      city: 'Al-Wadayeen / Asir',
      era: '17th Century CE',
      shortDescription: 'A dramatic hanging village built into a sheer 300-meter vertical cliff ledge, historically accessible only by woven ropes.',
      historicalSignificance: 'A testament to human ingenuity in adapting to precipitous terrain for defense and agriculture.',
      keyFacts: [
        'Nestled in a vertical cliff canyon dropping 300 meters',
        'Provided a secure sanctuary and fertile terrace farming for villagers',
        'Now an iconic heritage and tourism destination accessible by modern cable car'
      ]
    },
    'tabuk-maghaer-shuaib': {
      name: 'Maghaer Shuaib (Ancient Midian)',
      city: 'Al-Bad\' Governorate',
      era: '2nd Millennium BCE & Nabataean Era',
      shortDescription: 'Monumental rock-carved tombs and facades carved into sandstone cliffs linked to the Prophet Jethro (Shuaib) and the land of Midian.',
      historicalSignificance: 'Mentioned in the Holy Quran, marking the refuge of Prophet Moses after leaving Egypt.',
      keyFacts: [
        'Contains over 16 monumental facades sculpted directly into the red sandstone cliffs',
        'Historically tied to Prophet Moses\' stay with Prophet Jethro',
        'Features ancient Nabataean water canals, inscriptions, and dwellings'
      ]
    },
    'tabuk-deesah': {
      name: 'Al-Deesah Valley (Wadi Qaraqir)',
      city: 'Duba / Tabuk',
      era: 'Nabataean and Roman Eras',
      shortDescription: 'A majestic canyon surrounded by towering red sandstone pillars, year-round freshwater streams, palm groves, and ancient inscriptions.',
      historicalSignificance: 'A natural and archaeological sanctuary containing ancient Nabataean tombs and early Islamic rock art.',
      keyFacts: [
        'Renowned for year-round bubbling freshwater springs flowing through the canyon floor',
        'Contains unfinished Nabataean rock tombs and Thamudic inscriptions',
        'One of the most spectacular geological formations in the Middle East'
      ]
    },
    'tabuk-castle': {
      name: 'Historic Tabuk Castle',
      city: 'Tabuk City',
      era: '1559 CE (Sultan Suleiman the Magnificent)',
      shortDescription: 'An ancient fortress built to protect pilgrims and water sources along the historic Syrian Hajj route near the prophetic Ayn As-Sukkar spring.',
      historicalSignificance: 'Commemorates the prophetic Expedition of Tabuk and centuries of Hajj caravan protection.',
      keyFacts: [
        'Two-story fort featuring an internal courtyard, mosque, and watchtowers',
        'Situated right beside Ayn As-Sukkar spring blessed by Prophet Muhammad (PBUH)',
        'Now operates as a museum displaying Tabuk\'s history through the ages'
      ]
    },
    'hail-jubbah-rock-art': {
      name: 'Rock Art in Jubbah and Shuwaymis',
      city: 'Jubbah / Shuwaymis',
      era: 'Neolithic Era (10,000 BCE)',
      shortDescription: 'Extraordinary petroglyphs depicting humans, camels, horses, ibex, and Saluki hunting dogs around an ancient paleolake in the Nefud Desert.',
      historicalSignificance: 'Inscribed as a UNESCO World Heritage Site in 2015 as the largest rock art complex in the Middle East.',
      keyFacts: [
        'Covers Mount Umm Sinman at Jubbah and Mount Al-Manjor at Shuwaymis',
        'Documents the earliest known domestication of Saluki dogs and camels worldwide',
        'Contains thousands of rare Thamudic and early Arabic inscriptions'
      ]
    },
    'hail-aaref-castle': {
      name: 'Historic A\'arif Fort',
      city: 'Hail City',
      era: '17th Century CE',
      shortDescription: 'A mud-brick citadel crowning a rocky peak commanding panoramic views of Hail, used for defense and Ramadan moon-sighting.',
      historicalSignificance: 'Hail\'s architectural icon and the oldest surviving defensive stronghold in northern Najd.',
      keyFacts: [
        'Built from clay, sun-dried brick, tamarisk timber, and mountain stone',
        'The historic Ramadan cannon is still fired from its ramparts today',
        'Features shooting embrasures, watchtowers, and antique cannons'
      ]
    },
    'jazan-farasan-islands': {
      name: 'Farasan Islands Archipelago & Marine Sanctuary',
      city: 'Farasan Governorate',
      era: 'Roman, Ottoman, and Modern Eras',
      shortDescription: 'An archipelago of over 80 coral islands featuring the historic pearl merchant Al-Rifai Mansion, Al-Qassar village, and protected gazelles.',
      historicalSignificance: 'The first Saudi protected biosphere reserve admitted to UNESCO\'s Man and the Biosphere (MAB) Program (2021).',
      keyFacts: [
        'Home to Al-Rifai Palace crafted from marine coral stone with intricate gypsum lace',
        'Features Al-Qassar heritage village built of dark volcanic stone amidst palm oases',
        'Hosts the largest natural population of endangered Farasan gazelles and marine birds'
      ]
    },
    'jazan-faifa-terraces': {
      name: 'Green Terraces of Faifa Mountains',
      city: 'Faifa Governorate',
      era: 'Centuries of Agrarian Heritage',
      shortDescription: 'Towering emerald peaks known as "Neighbors of the Moon," carpeted with circular agricultural terraces for Saudi Khawlani coffee and tropical fruits.',
      historicalSignificance: 'A masterpiece of indigenous stone engineering reclaiming steep mountain slopes.',
      keyFacts: [
        'Elevations exceeding 1,800 meters above sea level',
        'Dotted with ancient cylindrical stone defensive towers guarding crops',
        'Yields world-class UNESCO-recognized Saudi Khawlani specialty coffee'
      ]
    },
    'najran-hima-cultural-area': {
      name: 'Hima Cultural Area (Bir Hima)',
      city: 'Hima / Najran',
      era: '7,000 BCE to Early Islamic Era',
      shortDescription: 'One of the world\'s largest rock art and epigraphic complexes, containing thousands of inscriptions in Musnad, Thamudic, Greek, and Arabic.',
      historicalSignificance: 'Inscribed as a UNESCO World Heritage Site in 2021, featuring ancient wells still yielding fresh water after 3,000 years.',
      keyFacts: [
        'Includes over 34 distinct archaeological rock-art sites and ancient water wells',
        'Documents thousands of inscriptions in South Arabian Musnad, Thamudic, and Nabataean',
        'Served as the vital desert watering crossroads for ancient incense caravans'
      ]
    },
    'najran-ukhdood': {
      name: 'Al-Ukhdood Archaeological City',
      city: 'Najran City',
      era: '6th Century BCE - 6th Century CE',
      shortDescription: 'A stone-walled fortress city featuring monumental South Arabian inscriptions, linked to the historic story mentioned in Surah Al-Burooj.',
      historicalSignificance: 'One of the most important archaeological sites in Arabia documenting Himyarite and Sabaean civilizations.',
      keyFacts: [
        'Enclosed by a massive 235-meter carved stone defensive wall',
        'Contains royal citadel ruins, stone millstones, and carved relief inscriptions',
        'Houses graves, carved masonry, and historic artifacts from over 2,000 years ago'
      ]
    },
    'najran-emarah-palace': {
      name: 'Historic Emarah Palace & Mud Derbs',
      city: 'Aba As-Saud / Najran',
      era: '1944 CE (1363 AH)',
      shortDescription: 'A majestic mud-brick fortress palace with 60 rooms and circular watchtowers, showcasing classic Najrani "Saf" clay architecture.',
      historicalSignificance: 'The first administrative and governmental center of Najran during the era of King Abdulaziz.',
      keyFacts: [
        'Encloses a pre-Islamic ancient water well lined with red clay bricks',
        'Constructed using the climate-resilient traditional Najrani layered clay technique',
        'Surrounded by high defensive walls and four symmetrical circular corner towers'
      ]
    },
    'baha-thee-ain': {
      name: 'Thee Ain Marble Heritage Village',
      city: 'Al-Mikhwah / Al-Baha',
      era: '16th Century CE (10th Century AH)',
      shortDescription: 'A breathtaking multi-story stone village built atop a white marble outcrop, overlooking lush banana groves and freshwater springs.',
      historicalSignificance: 'On the UNESCO Tentative List, celebrated as one of Arabia\'s finest examples of fortified stone mountain architecture.',
      keyFacts: [
        'Comprises 49 multi-story stone dwellings and a historic mosque built of dressed local stone',
        'A permanent freshwater spring flows beneath the village irrigating banana and lemon orchards',
        'Fended off numerous historical invasion attempts due to its impenetrable hilltop design'
      ]
    },
    'baha-stone-forts': {
      name: 'Stone Fortresses & Towers of Al-Baha',
      city: 'Al-Baha & Surrounding Villages',
      era: 'Centuries of Heritage',
      shortDescription: 'Imposing square and circular stone watchtowers built atop mountain crests to protect crops, monitor trade routes, and store grain.',
      historicalSignificance: 'Showcases the master masonry of Sarawat tribes and traditional tribal defense systems.',
      keyFacts: [
        'The region hosts over 1,000 surviving historic stone towers and castles',
        'Constructed dry-stone without cement mortar using precision-fitted granite',
        'Features defensive arrow slits, parapets, and strategic high-vantage lookouts'
      ]
    },
    'jawf-marid-castle': {
      name: 'Marid Castle & Mosque of Omar ibn Al-Khattab',
      city: 'Dumat Al-Jandal',
      era: '1st Century CE (Nabataean & Roman Era)',
      shortDescription: 'A colossal stone fortress overlooking Dumat Al-Jandal oasis, beside the historic Mosque of Omar and its ancient minaret.',
      historicalSignificance: 'The fortress that withstood Queen Zenobia of Palmyra, who famously remarked: "Marid has rebelled and Al-Ablaq has resisted."',
      keyFacts: [
        'Perched 600 meters above sea level built of interlocking sandstone masonry',
        'Features deep rock-cut wells, subterranean passages, and rounded watchtowers',
        'Includes the Mosque of Caliph Omar ibn Al-Khattab commissioned on his way to Jerusalem'
      ]
    },
    'jawf-rajajil-columns': {
      name: 'Al-Rajajil Standing Stone Columns',
      city: 'Sakaka',
      era: '4th Millennium BCE (Chalcolithic Era)',
      shortDescription: 'Enigmatic sandstone pillars rising up to 3 meters arranged in circular groups, often described as the Stonehenge of Arabia.',
      historicalSignificance: 'The oldest documented archaeoastronomical and ceremonial site in northern Arabia, tracking stars and seasons.',
      keyFacts: [
        'Comprises over 50 groups of upright carved stone pillars',
        'Contains early Thamudic script and prehistoric petroglyphs',
        'Dates back over 6,000 years to prehistoric times'
      ]
    },
    'jawf-zaabal-castle': {
      name: 'Historic Za\'abal Castle',
      city: 'Sakaka',
      era: 'Over 200 Years Old on Nabataean Foundations',
      shortDescription: 'An imposing mud and stone citadel atop a rocky crag north of Sakaka, built to defend the oasis and the ancient Sisra water well.',
      historicalSignificance: 'The strategic defensive sentinel of Sakaka oasis and northern trade caravan routes.',
      keyFacts: [
        'Consists of a stone enclosure wall with four conical corner observation towers',
        'Guards the historic rock-hewn Sisra Well with its advanced underground aqueducts',
        'Offers panoramic views over Sakaka\'s sprawling date palm and olive groves'
      ]
    },
    'nb-darb-zubaida': {
      name: 'Darb Zubaida Pilgrim Road & Water Reservoirs',
      city: 'Rafha / Linah',
      era: 'Early Abbasid Era (786 - 809 CE)',
      shortDescription: 'One of the greatest engineering feats of Islamic civilization, featuring circular and square stone reservoirs and waystations along the Kufa-Makkah route.',
      historicalSignificance: 'On the UNESCO Tentative List, commissioned by Lady Zubaida bint Ja\'far, wife of Caliph Harun Al-Rashid.',
      keyFacts: [
        'Encompasses iconic ancient reservoirs like Al-Jumaima, Al-Thulaima, and Zubala',
        'Engineered with advanced silt filtration and rainwater harvesting basins',
        'Lighted at night with beacon towers to guide caravans through the desert'
      ]
    },
    'nb-leenah-historic-market': {
      name: 'Historic Linah Village & Ancient Market',
      city: 'Linah / Rafha',
      era: 'Ancient Legends & 1933 CE Market',
      shortDescription: 'One of northern Arabia\'s oldest crossroads, famous for 300 rock-cut ancient wells and a historic mud-brick trading souq connecting Najd and Iraq.',
      historicalSignificance: 'A premier desert trading post for Ogailat merchants, Bedouin tribes, and northern travelers.',
      keyFacts: [
        'Features the historic Linah Emarah Palace built of mud and stone in 1353 AH',
        'Contains ancient wells carved straight into solid bedrock',
        'Served as a bustling exchange hub for wool, leather, dates, and provisions'
      ]
    },
    'qassim-shanana-tower': {
      name: 'Historic Shanana Tower in Ar-Rass',
      city: 'Ar-Rass Governorate',
      era: '1699 CE (12th Century AH)',
      shortDescription: 'A soaring conical mud-brick observation tower rising over 27 meters, having stood resilient through historic sieges and battles.',
      historicalSignificance: 'One of the tallest and oldest surviving mud-brick defense towers in the Arabian Peninsula.',
      keyFacts: [
        'Comprises 10 tapering floors with specialized defensive archery loopholes',
        'Constructed using clay blended with saline well water for maximum durability',
        'Witnessed the historic Battle of Shanana in 1904'
      ]
    },
    'qassim-buraydah-dates-market': {
      name: 'Buraydah Date City & Carnival',
      city: 'Buraydah',
      era: 'Modern Founding & Heritage Era',
      shortDescription: 'The world\'s largest seasonal date market and auction, inscribed into the UNESCO Creative Cities Network in Gastronomy (2021).',
      historicalSignificance: 'The global epicenter for premium Sukkari and Khalas date trade.',
      keyFacts: [
        'Buraydah joined the UNESCO Creative Cities Network in Gastronomy in 2021',
        'Trades tens of thousands of tons across over 50 date varieties daily during peak harvest',
        'Houses the Ogailat Heritage Museum documenting Najdi caravan commerce'
      ]
    },

    // --- HISTORY EVENTS ---
    'riyadh-hist-1': {
      title: 'Foundation of Diriyah (1446 CE)',
      era: 'Early Najdi Era',
      description: 'Mana\'a bin Rabia Al-Muraidi, ancestor of the House of Saud, arrived from Eastern Najd and settled in Wadi Hanifah, founding Diriyah.',
      significance: 'The recorded historical beginning of the House of Saud in the heart of Najd.'
    },
    'riyadh-hist-2': {
      title: 'Establishment of the First Saudi State (1727 CE)',
      era: 'First Saudi State',
      description: 'Imam Muhammad bin Saud assumed leadership in Diriyah, inaugurating an era of unity, stability, and state-building.',
      significance: 'The Founding Day celebrated nationally as the genesis of the blessed Saudi State.'
    },
    'riyadh-hist-3': {
      title: 'Recapture of Riyadh & Unification (1902 CE)',
      era: 'Kingdom of Saudi Arabia',
      description: 'King Abdulaziz Al Saud led the heroic recapture of Al-Masmak Fortress and Riyadh, launching the unification of the Kingdom.',
      significance: 'The cornerstone of modern Saudi Arabia.'
    },
    'makkah-hist-1': {
      title: 'Raising the Foundations of the Holy Kaaba',
      era: 'Era of the Prophets',
      description: 'Prophets Abraham and Ishmael (PBUT) raised the foundations of the Holy Kaaba and proclaimed the pilgrimage to mankind.',
      significance: 'The sacred spiritual foundation of the holiest site on Earth.'
    },
    'makkah-hist-2': {
      title: 'Jeddah Designated Official Port of Makkah (647 CE)',
      era: 'Rashidun Caliphate',
      description: 'Caliph Uthman ibn Affan designated the coast of Jeddah as the primary maritime gateway for Makkah and pilgrims.',
      significance: 'Launched Jeddah as the foremost maritime and trade gateway on the Red Sea.'
    },
    'madinah-hist-1': {
      title: 'Ancient Kingdoms of Dadan & Nabataeans in AlUla',
      era: 'Ancient Eras (6th Century BCE)',
      description: 'AlUla oasis flourished as the capital of ancient Arab kingdoms and a crossroads on the incense routes.',
      significance: 'Recorded earliest inscriptions that laid the foundation for modern Arabic script.'
    },
    'madinah-hist-2': {
      title: 'The Prophetic Migration (Hijrah - 622 CE)',
      era: 'Prophetic Era',
      description: 'Prophet Muhammad (PBUH) arrived in Yathrib, established the Constitution of Madinah, and laid the foundations of the Islamic State.',
      significance: 'The beginning of the Islamic Hijri calendar and a monumental turning point in human history.'
    },
    'eastern-hist-1': {
      title: 'Dilmun & Gerrha Civilizations (3000 BCE)',
      era: 'Ancient Civilizations',
      description: 'The ancient merchant cities of Gerrha and Tarout flourished as the wealthiest trading hubs for pearls and incense between East and West.',
      significance: 'The maritime trade legacy of eastern Arabia.'
    },
    'eastern-hist-2': {
      title: 'Unification of Al-Ahsa with Saudi Arabia (1913 CE)',
      era: 'Unification Era',
      description: 'King Abdulaziz entered Ibrahim Palace in Hofuf, reuniting Al-Ahsa and Qatif under the banner of unity.',
      significance: 'Secured the eastern maritime gateway and vast agricultural oases for the Kingdom.'
    },
    'asir-hist-1': {
      title: 'Incense & Frankincense Mountain Routes',
      era: 'Ancient & Classical Eras',
      description: 'The rugged Sarawat passes served as a vital trade bridge linking Red Sea ports and Yemen with Makkah and the north.',
      significance: 'The rise of legendary weekly mountain markets.'
    },
    'asir-hist-2': {
      title: 'Asir Joins the Unified Kingdom (1920 - 1923 CE)',
      era: 'Unification Era',
      description: 'The tribes and leaders of Asir pledged allegiance to King Abdulaziz, integrating into the modern Saudi state.',
      significance: 'Consolidated the security and stability of the Kingdom\'s southern borders.'
    },
    'tabuk-hist-1': {
      title: 'The Expedition of Tabuk (630 CE / 9 AH)',
      era: 'Prophetic Era',
      description: 'Prophet Muhammad (PBUH) led the Muslim army to Tabuk, stayed for twenty nights, and concluded peace treaties with northern tribes.',
      significance: 'Solidified the authority of the Islamic State and secured the northern frontier.'
    },
    'hail-hist-1': {
      title: 'The Era of Hatim Al-Tai & Tayy Kingdom',
      era: 'Pre-Islamic & Early Islamic Eras',
      description: 'The legendary knight-poet Hatim Al-Tai lived in Hail\'s mountains, embodying legendary generosity, valor, and chivalry.',
      significance: 'Turned Hatim Al-Tai and Hail into universal symbols of hospitality.'
    },
    'jazan-hist-1': {
      title: 'The Pearl Trade Routes & Historic Port of Athr',
      era: 'Early Islamic Era',
      description: 'The port of Athr on Jazan\'s coast was a primary mint for the gold Athri Dinar and a hub for pearls, silk, and frankincense.',
      significance: 'Showcases the economic and maritime wealth of the southern Red Sea.'
    },
    'najran-hist-1': {
      title: 'Kingdom of Najran & The Incense Route',
      era: 'Ancient Eras (1st Millennium BCE)',
      description: 'The fertile Najran oasis served as the grand crossroads for caravans from southern Arabia heading to the Levant, Egypt, and Babylon.',
      significance: 'Commercial prosperity and rich epigraphic exchange in South Arabian script.'
    },
    'baha-hist-1': {
      title: 'Caravan Trails & Souq As-Sabt in Ghamid and Zahran',
      era: 'Islamic & Modern Eras',
      description: 'Al-Baha\'s weekly markets were centers of commerce, tribal arbitration, and renowned poetic forums.',
      significance: 'Organized trade and cultural exchange between Tihama and the Sarawat highlands.'
    },
    'jawf-hist-1': {
      title: 'Qedarite Kingdom & Assyrians in Adummatu (Dumat Al-Jandal)',
      era: 'Ancient Eras (8th Century BCE)',
      description: 'Dumat Al-Jandal was recorded in Assyrian cuneiform texts as the capital of Arab queens and kings of Qedar.',
      significance: 'Historic proof of organized ancient Arab rule in Al-Jawf.'
    },
    'nb-hist-1': {
      title: 'The Kufa-Makkah Pilgrim Route (Darb Zubaida)',
      era: 'Abbasid Era (800 CE)',
      description: 'The establishment of the world\'s most sophisticated pilgrim highway paved with water reservoirs, forts, and lighted beacon towers.',
      significance: 'A historic breakthrough in Islamic civil engineering and water management.'
    },
    'qassim-hist-1': {
      title: 'The Era of the Legendary Ogailat Merchants',
      era: '18th - Early 20th Century',
      description: 'Ogailat merchants from Al-Qassim led massive camel caravans trading across Arabia, Iraq, the Levant, Egypt, and India.',
      significance: 'Built an extraordinary economic and cultural network that enriched Arabian history.'
    },

    // --- CULTURE ---
    'riyadh-ardah': {
      title: 'Saudi Ardah Folk Dance (UNESCO)',
      typeName: 'Performing Arts & Folklore',
      description: 'The iconic celebratory sword dance performed with rhythmic drums, swords, and stirring poetry, inscribed on UNESCO\'s Intangible Cultural Heritage list.',
      heritageStory: 'Originally performed to inspire warriors and celebrate victories, it is today the official national dance of Saudi Arabia in major celebrations.'
    },
    'riyadh-sadu': {
      title: 'Najdi Al-Sadu Traditional Weaving (UNESCO)',
      typeName: 'Handicrafts & Textiles',
      description: 'Traditional geometric textile weaving using sheep wool and camel hair, reflecting the visual identity and aesthetic geometry of the desert.',
      heritageStory: 'An ancient craft mastered by Bedouin women, inscribed on UNESCO\'s Intangible Cultural Heritage list.'
    },
    'makkah-mizmar': {
      title: 'Hijazi Al-Mizmar Dance (UNESCO)',
      typeName: 'Traditional Performing Arts',
      description: 'A traditional group dance performed with bamboo canes (Shon) around a blazing fire to the hypnotic rhythm of drums and chanting.',
      heritageStory: 'Expresses chivalry, bravery, and unity among the historic quarters of Makkah, Jeddah, and Madinah; inscribed on UNESCO.'
    },
    'makkah-rawasheen': {
      title: 'Hijazi Rawashin Architectural Woodwork',
      typeName: 'Heritage Architecture & Crafts',
      description: 'Elaborately hand-carved projecting wooden bay windows designed to cool indoor air while preserving privacy in traditional homes.',
      heritageStory: 'The architectural hallmark of historic Jeddah and Makkah combining aesthetic grandeur with passive climate control.'
    },
    'madinah-herbal': {
      title: 'Madinah Mint, Roses & Fragrant Hospitality',
      typeName: 'Hospitality Traditions & Heritage Herbs',
      description: 'Cultivation of Hasawi, Doush, and Moroccan mint in Madinah\'s sweet soil, served in aromatic tea and coffee for guests and pilgrims.',
      heritageStory: 'A time-honored Madani tradition welcoming visitors of the Prophet\'s Mosque with sweet fragrances and gracious warmth.'
    },
    'eastern-hasawi-bisht': {
      title: 'Al-Ahsa Hand-Woven Royal Bisht (UNESCO)',
      typeName: 'Royal Heritage Handicrafts',
      description: 'The artisan tailoring of luxury royal cloaks hand-embroidered with pure 24-karat gold and silver Zari metallic threads.',
      heritageStory: 'Mastered through generations in Al-Ahsa, these bishts remain the first choice of monarchs and dignitaries across the Arab world.'
    },
    'asir-al-qatt': {
      title: 'Al-Qatt Al-Asiri Wall Painting (UNESCO)',
      typeName: 'Visual Arts & Mural Heritage',
      description: 'Spontaneous geometric mural art practiced by Asiri women to decorate reception rooms with vibrant natural pigments.',
      heritageStory: 'Inscribed on the UNESCO Intangible Cultural Heritage list in 2017 as a global emblem of indigenous female creativity.'
    },
    'asir-khotwah': {
      title: 'Asiri Al-Khotwah Dance',
      typeName: 'Southern Performing Arts',
      description: 'A rhythmic and graceful group performance where men line up shoulder-to-shoulder, moving in synchronized steps to soulful poetry and drums.',
      heritageStory: 'The most beloved traditional dance of Asir, celebrated during mountain harvests and wedding feasts.'
    },
    'tabuk-dahha': {
      title: 'Northern Al-Dahha Folk Performance',
      typeName: 'Bedouin Folk Arts',
      description: 'An electrifying group performance where men line up in unison, clapping rhythmically and vocalizing lion-like roars alongside poetic duels.',
      heritageStory: 'Historically performed before battles to display unity and courage; now the dance of joy across northern celebrations.'
    },
    'hail-samri': {
      title: 'Haili Al-Samri Poetic Performance',
      typeName: 'Vocal Arts & Traditional Poetry',
      description: 'Soulful group singing accompanied by tambourines and drums, performed by two facing rows swaying gently to Nabataean poetry.',
      heritageStory: 'Expresses the poetic soul and nocturnal gatherings of Hail in desert and oasis majalis.'
    },
    'jazan-khawlani-coffee': {
      title: 'Saudi Khawlani Coffee Cultivation (UNESCO)',
      typeName: 'Agricultural Skills & Intangible Heritage',
      description: 'Cultivating, harvesting, and sun-drying ancient Khawlani coffee beans on mountain terraces using age-old manual techniques.',
      heritageStory: 'Inscribed on UNESCO\'s Intangible Cultural Heritage list in 2022 as the foundation of Saudi coffee culture.'
    },
    'jazan-jasmine-folklore': {
      title: 'Jazani Arabian Jasmine & Screwpine Garlands',
      typeName: 'Adornment & Wedding Traditions',
      description: 'Stringing fragrant white Arabian jasmine blooms and emerald screwpine leaves into intricate crowns and necklaces for brides and guests.',
      heritageStory: 'The signature badge of beauty, romance, and hospitality in Jazan.'
    },
    'najran-zamel': {
      title: 'Najrani Al-Zamel & Al-Razfa',
      typeName: 'Tribal Poetry & Performance',
      description: 'A solemn poetic group march where men advance with steady footsteps carrying traditional silver-mounted Janbiya daggers and chanting verses.',
      heritageStory: 'An eloquent tribal medium conveying greetings, honor, and reconciliation during major gatherings.'
    },
    'baha-ardah-janoub': {
      title: 'Southern Ardah & Zeer Drumming',
      typeName: 'Southern Performing Arts',
      description: 'A powerful martial dance driven by deep Zeer drums and improvised poetry from masters of Southern Ardah in two facing lines.',
      heritageStory: 'The primary folk art expressing pride, courage, and tribal solidarity in Al-Baha and the Sarawat.'
    },
    'jawf-olive-culture': {
      title: 'Al-Jawf Olive Culture & International Festival',
      typeName: 'Agricultural Heritage & Agro-Industry',
      description: 'Cultivating over 25 million olive trees and producing premium extra virgin cold-pressed olive oil in the desert oases.',
      heritageStory: 'Recognized by the Guinness World Records as the world\'s largest modern olive grove while preserving deep agricultural heritage.'
    },
    'nb-falconry': {
      title: 'Traditional Falconry Heritage (UNESCO)',
      typeName: 'Desert Hunting & Living Heritage',
      description: 'The breeding, training, and flying of Saker and Peregrine falcons for traditional hunting across northern plains and desert wadis.',
      heritageStory: 'A UNESCO-recognized intangible cultural heritage celebrating the timeless bond between falconer and raptor.'
    },
    'qassim-ogailat-heritage': {
      title: 'Ogailat Caravaneers & Camel Heritage',
      typeName: 'Commercial & Social Heritage',
      description: 'The customs of long-distance caravan trade, camel mastery across desert terrains, and trusted mercantile honor systems.',
      heritageStory: 'The greatest commercial saga of Najd, reflecting the courage and honesty of Arabian merchants across world capitals.'
    }
  },
  fr: {},
  es: {}
};

// Fill in French and Spanish fallbacks automatically from English if missing, with dedicated key overrides
ITEM_TRANSLATIONS.fr = {
  ...ITEM_TRANSLATIONS.en,
  'riyadh-kabsa': {
    name: 'Kabsa de Najd',
    description: 'Le plat emblématique saoudien à base de riz parfumé à grains longs, d\'agneau ou de chameau tendre, assaisonné de lime noire séchée (loomi) et d\'épices traditionnelles du Najd.',
    culturalContext: 'Symbole d\'hospitalité généreuse lors des banquets officiels et des réunions de famille.',
    ingredients: ['Agneau ou chameau frais du Najd', 'Riz ambré à longs grains', 'Citron noir séché (Loomi)', 'Cardamome, cannelle et clous de girofle', 'Oignons grillés et amandes']
  },
  'riyadh-jareesh': {
    name: 'Jareesh de Najd',
    description: 'Blé concassé mijoté lentement avec du babeurre frais et de la viande tendre, garni de Musammanah (oignons caramélisés aux épices).',
    culturalContext: 'Le plat national saoudien par excellence, hérité de millénaires de tradition.',
    ingredients: ['Blé concassé du Najd', 'Babeurre frais (Laban)', 'Ghee de brebis sauvage', 'Oignons hachés', 'Mélange d\'épices Musammanah']
  },
  'riyadh-turaif': {
    name: 'Quartier d\'At-Turaif à Diriyah historique',
    city: 'Diriyah',
    era: 'XVIIIe siècle (1744)',
    shortDescription: 'La première capitale du Premier État saoudien, chef-d\'œuvre exceptionnel d\'architecture en briques crues du Najd.',
    historicalSignificance: 'Site du patrimoine mondial de l\'UNESCO abritant le palais de Salwa et la mosquée de l\'Imam Muhammad bin Saud.',
    keyFacts: [
      'Inscrit au patrimoine mondial de l\'UNESCO en 2010',
      'Abrite le palais Salwa de plus de 10 000 mètres carrés',
      'Berceau fondateur du Premier État saoudien en 1727',
      'Construit entièrement en terre crue et troncs de palmier'
    ]
  },
  'makkah-kaaba': {
    name: 'La Sainte Kaaba et la Grande Mosquée (Al-Masjid Al-Haram)',
    city: 'La Mecque (Makkah)',
    era: 'Ère des Prophètes Abraham et Ismaël',
    shortDescription: 'Le premier sanctuaire édifié pour l\'humanité, la Qibla des musulmans du monde entier et le lieu du grand pèlerinage.',
    historicalSignificance: 'Le cœur spirituel du monde islamique et symbole d\'unité universelle.',
    keyFacts: [
      'Abrite la Pierre Noire, la Station d\'Abraham et le puits béni de Zamzam',
      'A bénéficié d\'expansions historiques monumentales à travers les siècles',
      'Accueille des millions de pèlerins chaque année du monde entier'
    ]
  },
  'madinah-hegra': {
    name: 'Site Archéologique de Hegra (Madain Saleh)',
    city: 'AlUla',
    era: 'Ier siècle avant J.-C. - Ier siècle après J.-C.',
    shortDescription: 'Le plus grand site préservé de la civilisation nabatéenne au sud de Pétra, comprenant des tombes monumentales sculptées dans le grès.',
    historicalSignificance: 'Premier site saoudien inscrit au patrimoine mondial de l\'UNESCO en 2008.',
    keyFacts: [
      'Comprend plus de 111 tombes monumentales taillées dans la roche',
      'Carrefour historique majeur sur les routes de l\'encens et des épices',
      'Abrite le célèbre Qasr Al-Farid (Le Château Solitaire)'
    ]
  }
};

ITEM_TRANSLATIONS.es = {
  ...ITEM_TRANSLATIONS.en,
  'riyadh-kabsa': {
    name: 'Kabsa de Najd',
    description: 'El icónico plato saudí elaborado con arroz de grano largo perfumado, tierna carne de cordero o camello, lima negra seca (loomi) y especias tradicionales de Najd.',
    culturalContext: 'Símbolo de generosa hospitalidad en banquetes oficiales y reuniones familiares.',
    ingredients: ['Cordero o camello fresco de Najd', 'Arroz aromático de grano largo', 'Lima negra seca (Loomi)', 'Cardamomo, canela y clavo', 'Cebollas tostadas y almendras']
  },
  'riyadh-jareesh': {
    name: 'Jareesh de Najd',
    description: 'Trigo partido cocinado a fuego lento con suero de leche fresco y carne tierna, coronado con cebollas caramelizadas y especias Musammanah.',
    culturalContext: 'El plato nacional oficial de Arabia Saudita.',
    ingredients: ['Trigo partido de Najd', 'Suero de leche fresco (Laban)', 'Mantequilla clarificada (Ghee)', 'Cebollas picadas', 'Especias tradicionales Musammanah']
  },
  'riyadh-turaif': {
    name: 'Distrito de At-Turaif en la Histórica Diriyah',
    city: 'Diriyah',
    era: 'Siglo XVIII (1744 d.C.)',
    shortDescription: 'La primera capital del Primer Estado Saudí, una obra maestra arquitectónica de adobe y barro tradicional de Najd.',
    historicalSignificance: 'Sitio del Patrimonio Mundial de la UNESCO que alberga el Palacio de Salwa y la Mezquita del Imán Muhammad bin Saud.',
    keyFacts: [
      'Declarado Patrimonio de la Humanidad por la UNESCO en 2010',
      'Hogar del Palacio de Salwa con más de 10.000 metros cuadrados',
      'Cuna fundacional del Primer Estado Saudí en 1727',
      'Construido íntegramente en adobe y madera de palma'
    ]
  },
  'makkah-kaaba': {
    name: 'La Sagrada Kaaba y la Gran Mezquita (Al-Masjid Al-Haram)',
    city: 'La Meca (Makkah)',
    era: 'Era de los Profetas Abraham e Ismael',
    shortDescription: 'La primera casa de adoración erigida para la humanidad, la Qibla de los musulmanes y el destino del Hajj.',
    historicalSignificance: 'El corazón espiritual del mundo islámico y símbolo de unidad.',
    keyFacts: [
      'Alberga la Piedra Negra, la Estación de Abraham y el pozo bendito de Zamzam',
      'Ha experimentado ampliaciones monumentales a lo largo de los siglos',
      'Recibe a millones de peregrinos cada año de todo el mundo'
    ]
  },
  'madinah-hegra': {
    name: 'Sitio Arqueológico de Hegra (Madain Saleh)',
    city: 'AlUla',
    era: 'Siglo I a.C. - Siglo I d.C.',
    shortDescription: 'El sitio más grande y mejor conservado de la civilización nabatea al sur de Petra, con monumentales tumbas excavadas en la roca.',
    historicalSignificance: 'El primer sitio de Arabia Saudita declarado Patrimonio de la Humanidad por la UNESCO en 2008.',
    keyFacts: [
      'Contiene más de 111 tumbas monumentales talladas en la roca arenisca',
      'Cruce comercial vital en las antiguas rutas del incienso y las especias',
      'Alberga el emblemático Qasr Al-Farid (El Castillo Solitario)'
    ]
  }
};

/**
 * Universal localized resolvers for all items
 */
export function getLocalizedFood(item: FoodItem, language: Language): FoodItem {
  if (language === 'ar') return item;
  const translation = ITEM_TRANSLATIONS[language]?.[item.id] || ITEM_TRANSLATIONS.en?.[item.id];
  if (!translation) return item;

  return {
    ...item,
    name: translation.name || item.name,
    description: translation.description || item.description,
    culturalContext: translation.culturalContext || item.culturalContext,
    originStory: translation.originStory || item.originStory,
    preparationTradition: translation.preparationTradition || item.preparationTradition,
    ingredients: translation.ingredients && translation.ingredients.length > 0 ? translation.ingredients : item.ingredients,
  };
}

export function getLocalizedLandmark(item: LandmarkItem, language: Language): LandmarkItem {
  if (language === 'ar') return item;
  const translation = ITEM_TRANSLATIONS[language]?.[item.id] || ITEM_TRANSLATIONS.en?.[item.id];
  if (!translation) return item;

  return {
    ...item,
    name: translation.name || item.name,
    city: translation.city || item.city,
    era: translation.era || item.era,
    shortDescription: translation.shortDescription || item.shortDescription,
    historicalSignificance: translation.historicalSignificance || item.historicalSignificance,
    keyFacts: translation.keyFacts && translation.keyFacts.length > 0 ? translation.keyFacts : item.keyFacts,
  };
}

export function getLocalizedHistory(item: HistoricalEvent, language: Language): HistoricalEvent {
  if (language === 'ar') return item;
  const translation = ITEM_TRANSLATIONS[language]?.[item.id] || ITEM_TRANSLATIONS.en?.[item.id];
  if (!translation) return item;

  return {
    ...item,
    title: translation.title || item.title,
    era: translation.era || item.era,
    description: translation.description || item.description,
    significance: translation.significance || item.significance,
  };
}

export function getLocalizedCulture(item: CulturalItem, language: Language): CulturalItem {
  if (language === 'ar') return item;
  const translation = ITEM_TRANSLATIONS[language]?.[item.id] || ITEM_TRANSLATIONS.en?.[item.id];
  if (!translation) return item;

  return {
    ...item,
    title: translation.title || item.title,
    typeName: translation.typeName || item.typeName,
    description: translation.description || item.description,
    heritageStory: translation.heritageStory || item.heritageStory,
    materialsOrFeatures: translation.materialsOrFeatures && translation.materialsOrFeatures.length > 0 ? translation.materialsOrFeatures : item.materialsOrFeatures,
  };
}

export const LOCALIZED_QUIZ_QUESTIONS: Record<Language, QuizQuestion[]> = {
  ar: [],
  en: [
    {
      id: 'q1',
      question: 'What was the first UNESCO World Heritage Site inscribed in Saudi Arabia in 2008?',
      options: ['At-Turaif District in Diriyah', 'Hegra Archaeological Site (Madain Saleh) in AlUla', 'Historic Jeddah', 'Al-Ahsa Oasis'],
      correctIndex: 1,
      explanation: 'Hegra Archaeological Site in AlUla (Madinah Region) was the first Saudi site to be inscribed on the UNESCO World Heritage List in 2008.',
      regionName: 'Al-Madinah Al-Munawwarah Region'
    },
    {
      id: 'q2',
      question: 'What famous traditional dessert from Al-Qassim is filled with date molasses, dried lime, and ginger?',
      options: ['Maasoub', 'Hanini', 'Al-Qassim Kleicha', 'Bakeela'],
      correctIndex: 2,
      explanation: 'Al-Qassim Kleicha is the iconic heritage pastry of the region, historically baked by women as long-lasting rations for Ogailat camel merchants.',
      regionName: 'Al-Qassim Region'
    },
    {
      id: 'q3',
      question: 'Which UNESCO-recognized traditional female mural art originates from the Asir Region?',
      options: ['Al-Qatt Al-Asiri', 'Najdi Al-Sadu', 'Hijazi Rawashin', 'Al-Ahsa Palm Weaving'],
      correctIndex: 0,
      explanation: 'Al-Qatt Al-Asiri is a spontaneous geometric mural art practiced by Asiri women, inscribed on the UNESCO Intangible Cultural Heritage list in 2017.',
      regionName: 'Asir Region'
    },
    {
      id: 'q4',
      question: 'Which historic fortress witnessed the recapture of Riyadh in 1902 by King Abdulaziz, launching the unification of Saudi Arabia?',
      options: ['Al-Masmak Fortress', 'Murabba Palace', 'A\'arif Castle', 'Marid Castle'],
      correctIndex: 0,
      explanation: 'Al-Masmak Fortress in Riyadh was the pivotal turning point in modern Saudi history when King Abdulaziz recaptured it in 1902.',
      regionName: 'Riyadh Region'
    },
    {
      id: 'q5',
      question: 'In which Saudi region is the world\'s largest self-sustaining date palm oasis located?',
      options: ['Al-Jawf Region', 'Eastern Province (Al-Ahsa)', 'Najran Region', 'Tabuk Region'],
      correctIndex: 1,
      explanation: 'Al-Ahsa Oasis in the Eastern Province is the largest date palm oasis in the world with over 2.5 million palm trees and is a UNESCO World Heritage Site.',
      regionName: 'Eastern Province'
    },
    {
      id: 'q6',
      question: 'What is the historic pilgrim highway traversing the Northern Borders where Lady Zubaida built hundreds of water reservoirs?',
      options: ['Incense Route', 'Darb Zubaida (Kufi Pilgrim Route)', 'Elephant Road', 'Egyptian Pilgrim Route'],
      correctIndex: 1,
      explanation: 'Darb Zubaida stretches from Kufa to Makkah and features iconic Abbasid water reservoirs in the Northern Borders region such as Al-Jumaima.',
      regionName: 'Northern Borders Region'
    },
    {
      id: 'q7',
      question: 'Which mountain region is renowned for cultivating UNESCO-recognized Saudi Khawlani specialty coffee on agricultural terraces?',
      options: ['Faifa and Harub Mountains in Jazan', 'Hail City', 'Arar City', 'Sakaka Oasis'],
      correctIndex: 0,
      explanation: 'The highlands of Jazan (Faifa, Harub, Bani Malik) are the ancestral home of Saudi Khawlani coffee cultivation on mountain terraces.',
      regionName: 'Jazan Region'
    }
  ],
  fr: [
    {
      id: 'q1',
      question: 'Quel a été le premier site du patrimoine mondial de l\'UNESCO inscrit en Arabie saoudite en 2008 ?',
      options: ['Quartier d\'At-Turaif à Diriyah', 'Site archéologique de Hegra (Madain Saleh) à AlUla', 'Jeddah historique', 'Oasis d\'Al-Ahsa'],
      correctIndex: 1,
      explanation: 'Le site de Hegra à AlUla a été le premier site saoudien inscrit au patrimoine mondial de l\'UNESCO en 2008.',
      regionName: 'Région d\'Al-Madinah Al-Munawwarah'
    },
    {
      id: 'q2',
      question: 'Quelle pâtisserie traditionnelle célèbre d\'Al-Qassim est fourrée à la mélasse de dattes et au citron noir ?',
      options: ['Maasoub', 'Hanini', 'Kleicha d\'Al-Qassim', 'Bakeela'],
      correctIndex: 2,
      explanation: 'La Kleicha d\'Al-Qassim est la pâtisserie patrimoniale par excellence, autrefois préparée pour les marchands caravaniers Ogailat.',
      regionName: 'Région d\'Al-Qassim'
    },
    {
      id: 'q3',
      question: 'Quel art mural féminin traditionnel d\'Asir est inscrit au patrimoine immatériel de l\'UNESCO ?',
      options: ['Al-Qatt Al-Asiri', 'Al-Sadu de Najd', 'Rawashin du Hijaz', 'Vannerie d\'Al-Ahsa'],
      correctIndex: 0,
      explanation: 'L\'Al-Qatt Al-Asiri est un art décoratif géométrique traditionnel pratiqué par les femmes d\'Asir, inscrit à l\'UNESCO en 2017.',
      regionName: 'Région d\'Asir'
    },
    {
      id: 'q4',
      question: 'Quelle forteresse historique a été le théâtre de la reprise de Riyad en 1902 par le Roi Abdulaziz ?',
      options: ['Forteresse d\'Al-Masmak', 'Palais de Murabba', 'Château d\'A\'arif', 'Château de Marid'],
      correctIndex: 0,
      explanation: 'La forteresse d\'Al-Masmak à Riyad a marqué le tournant décisif de l\'unification du Royaume en 1902.',
      regionName: 'Région de Riyad'
    },
    {
      id: 'q5',
      question: 'Dans quelle région saoudienne se trouve la plus grande oasis de palmiers au monde inscrite à l\'UNESCO ?',
      options: ['Région d\'Al-Jawf', 'Province orientale (Al-Ahsa)', 'Région de Najran', 'Région de Tabuk'],
      correctIndex: 1,
      explanation: 'L\'oasis d\'Al-Ahsa dans la Province orientale compte plus de 2,5 millions de palmiers et est inscrite à l\'UNESCO.',
      regionName: 'Province orientale'
    },
    {
      id: 'q6',
      question: 'Quelle route historique de pèlerinage traverse les Frontières du Nord avec des réservoirs d\'eau bâtis par Dame Zubaida ?',
      options: ['Route de l\'encens', 'Darb Zubaida (Route de Koufa)', 'Route de l\'Éléphant', 'Route égyptienne'],
      correctIndex: 1,
      explanation: 'Darb Zubaida reliait Koufa à La Mecque et comprend des bassins historiques exceptionnels comme Al-Jumaima.',
      regionName: 'Région des Frontières du Nord'
    },
    {
      id: 'q7',
      question: 'Quelles montagnes sont réputées pour la culture du café saoudien Khawlani classé au patrimoine de l\'UNESCO ?',
      options: ['Montagnes de Faifa à Jazan', 'Ville de Hail', 'Ville d\'Arar', 'Oasis de Sakaka'],
      correctIndex: 0,
      explanation: 'Les hauts plateaux de Jazan (Faifa, Harub) sont le berceau de la culture du café Khawlani saoudien.',
      regionName: 'Région de Jazan'
    }
  ],
  es: [
    {
      id: 'q1',
      question: '¿Cuál fue el primer sitio del Patrimonio Mundial de la UNESCO declarado en Arabia Saudita en 2008?',
      options: ['Distrito de At-Turaif en Diriyah', 'Sitio arqueológico de Hegra (Madain Saleh) en AlUla', 'Jeddah Histórica', 'Oasis de Al-Ahsa'],
      correctIndex: 1,
      explanation: 'El sitio arqueológico de Hegra en AlUla fue el primer sitio saudí inscrito en la lista de la UNESCO en 2008.',
      regionName: 'Región de Al-Madinah Al-Munawwarah'
    },
    {
      id: 'q2',
      question: '¿Qué dulce tradicional famoso de Al-Qassim está relleno de melaza de dátiles, lima negra y jengibre?',
      options: ['Maasoub', 'Hanini', 'Kleicha de Al-Qassim', 'Bakeela'],
      correctIndex: 2,
      explanation: 'La Kleicha de Al-Qassim es la masa patrimonial más emblemática, horneada históricamente para las expediciones de los comerciantes Ogailat.',
      regionName: 'Región de Al-Qassim'
    },
    {
      id: 'q3',
      question: '¿Qué arte mural femenino tradicional de la región de Asir está reconocido por la UNESCO?',
      options: ['Al-Qatt Al-Asiri', 'Al-Sadu de Najd', 'Rawashin de Hijaz', 'Tejido de palma de Al-Ahsa'],
      correctIndex: 0,
      explanation: 'El Al-Qatt Al-Asiri es un arte mural geométrico practicado por las mujeres de Asir, inscrito en la UNESCO en 2017.',
      regionName: 'Región de Asir'
    },
    {
      id: 'q4',
      question: '¿Qué fortaleza histórica fue testigo de la recuperación de Riad en 1902 por el Rey Abdulaziz?',
      options: ['Fortaleza de Al-Masmak', 'Palacio de Murabba', 'Castillo de A\'arif', 'Castillo de Marid'],
      correctIndex: 0,
      explanation: 'La fortaleza de Al-Masmak en Riad fue el punto de inflexión en la unificación moderna de Arabia Saudita.',
      regionName: 'Región de Riad'
    },
    {
      id: 'q5',
      question: '¿En qué región saudí se encuentra el oasis de palmeras datileras más grande del mundo declarado por la UNESCO?',
      options: ['Región de Al-Jawf', 'Provincia Oriental (Al-Ahsa)', 'Región de Najran', 'Región de Tabuk'],
      correctIndex: 1,
      explanation: 'El oasis de Al-Ahsa en la Provincia Oriental alberga más de 2,5 millones de palmeras datileras y es Patrimonio de la Humanidad.',
      regionName: 'Provincia Oriental'
    },
    {
      id: 'q6',
      question: '¿Cuál es la histórica ruta de peregrinación que cruza las Fronteras del Norte con embalses construidos por Lady Zubaida?',
      options: ['Ruta del Incienso', 'Darb Zubaida (Ruta de Kufa)', 'Ruta del Elefante', 'Ruta Egipcia'],
      correctIndex: 1,
      explanation: 'Darb Zubaida se extiende desde Kufa hasta La Meca e incluye embalses históricos como Al-Jumaima.',
      regionName: 'Región de Fronteras del Norte'
    },
    {
      id: 'q7',
      question: '¿Qué montañas son famosas por cultivar el café especial saudí Khawlani reconocido por la UNESCO?',
      options: ['Montañas de Faifa en Jazan', 'Ciudad de Hail', 'Ciudad de Arar', 'Oasis de Sakaka'],
      correctIndex: 0,
      explanation: 'Las tierras altas de Jazan (Faifa, Harub) son la cuna ancestral del cultivo del café Khawlani.',
      regionName: 'Región de Jazan'
    }
  ]
};

export function getLocalizedQuizQuestions(language: Language, defaultQuestions: QuizQuestion[]): QuizQuestion[] {
  if (language === 'ar') return defaultQuestions;
  const localized = LOCALIZED_QUIZ_QUESTIONS[language];
  if (localized && localized.length > 0) return localized;
  return LOCALIZED_QUIZ_QUESTIONS.en;
}


