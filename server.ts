import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Strict Knowledge Base extracted directly from the verified site data (Google Sheet)
const SITE_DATABASE = {
  regions: [
    {
      id: 'R01',
      name_ar: 'الرياض',
      name_en: 'Riyadh',
      summary: 'الدرعية التاريخية ومعالمها',
      food: {
        id: 'F01',
        name_ar: 'الكبسة',
        name_en: 'Kabsa',
        description: 'أرز حليبي كريمي يقدَّم مع الدجاج أو اللحم، طبق حجازي شهير في المناسبات',
        cultural_context: 'طبق أرز شعبي بالبهارات مع اللحم أو الدجاج، من أشهر الأكلات في نجد والسعودية عمومًا',
        ingredients: 'أرز شعبي بالبهارات مع اللحم أو الدجاج',
        source: 'S01 - هيئة تطوير بوابة الدرعية'
      }
    },
    {
      id: 'R02',
      name_ar: 'مكة المكرمة',
      name_en: 'Makkah',
      summary: 'الكعبة المشرفة وأجواؤها الروحانية',
      food: {
        id: 'F02',
        name_ar: 'السليق',
        name_en: 'Saleeg',
        description: 'عجين رقيق مطهو مع مرق اللحم والخضار، أكلة مدنية تراثية تقدَّم في المناسبات',
        cultural_context: 'أرز حليبي كريمي يقدَّم مع الدجاج أو اللحم، طبق حجازي شهير في المناسبات',
        ingredients: 'أرز حليبي كريمي يقدَّم مع الدجاج أو اللحم',
        source: 'S02 - الهيئة الملكية لمدينة مكة والمشاعر المقدسة'
      }
    },
    {
      id: 'R03',
      name_ar: 'المدينة المنورة',
      name_en: 'Madinah',
      summary: 'المسجد النبوي ومعالمه التاريخية',
      food: {
        id: 'F03',
        name_ar: 'المطازيز',
        name_en: 'Mataziz',
        description: 'عجين رقيق مقطّع بالمرق مع اللحم والخضار، من أشهر أطباق منطقة القصيم',
        cultural_context: 'عجين رقيق مطهو مع مرق اللحم والخضار، أكلة مدنية تراثية تقدَّم في المناسبات',
        ingredients: 'عجين رقيق مطهو مع مرق اللحم والخضار',
        source: 'S03 - هيئة تطوير المدينة المنورة'
      }
    },
    {
      id: 'R04',
      name_ar: 'القصيم',
      name_en: 'Al-Qassim',
      summary: 'الأسواق التراثية والنخيل',
      food: {
        id: 'F04',
        name_ar: 'المرقوق',
        name_en: 'Marqooq',
        description: 'أرز متبل بالبهارات مع الربيان، يعكس ارتباط أهل المنطقة الشرقية بالبحر',
        cultural_context: 'عجين رقيق مقطّع بالمرق مع اللحم والخضار، من أشهر أطباق منطقة القصيم',
        ingredients: 'عجين رقيق مقطّع بالمرق مع اللحم والخضار',
        source: 'S04 - هيئة التراث'
      }
    },
    {
      id: 'R05',
      name_ar: 'المنطقة الشرقية',
      name_en: 'Eastern Province',
      summary: 'كورنيش الدمام وشواطئ الخليج',
      food: {
        id: 'F05',
        name_ar: 'مجبوس الربيان',
        name_en: 'Shrimp Machboos',
        description: 'حلوى تقليدية من الدقيق المحمص والسمن والعسل، شهيرة في منطقة عسير',
        cultural_context: 'أرز متبل بالبهارات مع الربيان، يعكس ارتباط أهل المنطقة الشرقية بالبحر',
        ingredients: 'أرز متبل بالبهارات مع الربيان',
        source: 'S05 - الهيئة السعودية للسياحة'
      }
    },
    {
      id: 'R06',
      name_ar: 'عسير',
      name_en: 'Asir',
      summary: 'جبال السودة والطبيعة الخلابة',
      food: {
        id: 'F06',
        name_ar: 'المفروكة',
        name_en: 'Mafrooka',
        description: 'خبز تقليدي يُخبز على الحجارة الساخنة في حفرة رملية، شهير في شمال غرب السعودية',
        cultural_context: 'حلوى تقليدية من الدقيق المحمص والسمن والعسل، شهيرة في منطقة عسير',
        ingredients: 'دقيق محمص مع السمن والعسل',
        source: 'S06 - هيئة تطوير منطقة عسير'
      }
    },
    {
      id: 'R07',
      name_ar: 'تبوك',
      name_en: 'Tabuk',
      summary: 'جبال وادي الديسة الساحرة',
      food: {
        id: 'F07',
        name_ar: 'خبز الطابة',
        name_en: 'Taboo Bread',
        description: 'عجين رقيق مجفف يُطهى مع مرق اللحم والخضار، طبق حائلي شعبي',
        cultural_context: 'خبز تقليدي يُخبز على الحجارة الساخنة في حفرة رملية، شهير في شمال غرب السعودية',
        ingredients: 'خبز تقليدي يُخبز على الحجارة الساخنة في حفرة رملية',
        source: 'S07 - هيئة تطوير منطقة تبوك'
      }
    },
    {
      id: 'R08',
      name_ar: 'حائل',
      name_en: 'Hail',
      summary: 'جبال أجا وسلمى الشامخة',
      food: {
        id: 'F08',
        name_ar: 'القرصان',
        name_en: 'Qursan',
        description: 'خبز رقيق جدًا يُحشى باللحم أو يُقدَّم مع العسل، منتشر في الحدود الشمالية',
        cultural_context: 'عجين رقيق مجفف يُطهى مع مرق اللحم والخضار، طبق حائلي شعبي',
        ingredients: 'عجين رقيق مجفف يُطهى مع مرق اللحم والخضار',
        source: 'S08 - هيئة تطوير منطقة حائل'
      }
    },
    {
      id: 'R09',
      name_ar: 'الحدود الشمالية',
      name_en: 'Northern Borders',
      summary: 'آثار زبيدة التاريخية القديمة',
      food: {
        id: 'F09',
        name_ar: 'الرقاق',
        name_en: 'Ruqaq',
        description: 'عصيدة من الدقيق تُقدَّم مع السمن والعسل أو الدبس، طبق شهير في جازان',
        cultural_context: 'خبز رقيق جدًا يُحشى باللحم أو يُقدَّم مع العسل، منتشر في الحدود الشمالية',
        ingredients: 'خبز رقيق جدًا يُحشى باللحم أو يُقدَّم مع العسل',
        source: 'S09 - إمارة منطقة الحدود الشمالية'
      }
    },
    {
      id: 'R10',
      name_ar: 'جازان',
      name_en: 'Jazan',
      summary: 'جزر فرسان وشواطئها الساحرة',
      food: {
        id: 'F10',
        name_ar: 'العصيدة الجازانية',
        name_en: 'Jazani Aseeda',
        description: 'تمر مهروس مع الخبز والسمن، حلوى تراثية أصيلة من نجران',
        cultural_context: 'عصيدة من الدقيق تُقدَّم مع السمن والعسل أو الدبس، طبق شهير في جازان',
        ingredients: 'عصيدة من الدقيق تُقدَّم مع السمن والعسل أو الدبس',
        source: 'S10 - إمارة منطقة جازان'
      }
    },
    {
      id: 'R11',
      name_ar: 'نجران',
      name_en: 'Najran',
      summary: 'الأخدود التاريخي ومعالمه الأثرية',
      food: {
        id: 'F11',
        name_ar: 'الحنيني',
        name_en: 'Haneeni',
        description: 'خبز مفتت يُخلط مع السمن والعسل أو المرق، طبق جبلي شهير في الباحة',
        cultural_context: 'تمر مهروس مع الخبز والسمن، حلوى تراثية أصيلة من نجران',
        ingredients: 'تمر مهروس مع الخبز والسمن',
        source: 'S11 - هيئة التراث'
      }
    },
    {
      id: 'R12',
      name_ar: 'الباحة',
      name_en: 'Al-Bahah',
      summary: 'غابات رغدان والمناظر الجبلية',
      food: {
        id: 'F12',
        name_ar: 'المفتوت',
        name_en: 'Maftoot',
        description: 'حلوى محشوة بالتمر أو الجوز، من أشهر الحلويات في منطقة الجوف ونجد',
        cultural_context: 'خبز مفتت يُخلط مع السمن والعسل أو المرق، طبق جبلي شهير في الباحة',
        ingredients: 'خبز مفتت يُخلط مع السمن والعسل أو المرق',
        source: 'S12 - هيئة تطوير منطقة الباحة'
      }
    },
    {
      id: 'R13',
      name_ar: 'الجوف',
      name_en: 'Al-Jouf',
      summary: 'قلعة مارد وآثارها التاريخية',
      food: {
        id: 'F13',
        name_ar: 'الكليجا',
        name_en: 'Kuleija',
        description: 'حلوى محشوة بالتمر أو الجوز، من أشهر الحلويات في منطقة الجوف ونجد',
        cultural_context: 'حلوى محشوة بالتمر أو الجوز، من أشهر الحلويات في منطقة الجوف ونجد',
        ingredients: 'حلوى محشوة بالتمر أو الجوز',
        source: 'S13 - هيئة التراث'
      }
    }
  ],
  sources: [
    { id: 'S01', name: 'هيئة تطوير بوابة الدرعية' },
    { id: 'S02', name: 'الهيئة الملكية لمدينة مكة والمشاعر المقدسة' },
    { id: 'S03', name: 'هيئة تطوير المدينة المنورة' },
    { id: 'S04', name: 'هيئة التراث' },
    { id: 'S05', name: 'الهيئة السعودية للسياحة' },
    { id: 'S06', name: 'هيئة تطوير منطقة عسير' },
    { id: 'S07', name: 'هيئة تطوير منطقة تبوك' },
    { id: 'S08', name: 'هيئة تطوير منطقة حائل' },
    { id: 'S09', name: 'إمارة منطقة الحدود الشمالية' },
    { id: 'S10', name: 'إمارة منطقة جازان' },
    { id: 'S11', name: 'هيئة التراث' },
    { id: 'S12', name: 'هيئة تطوير منطقة الباحة' },
    { id: 'S13', name: 'هيئة التراث' }
  ]
};

const SYSTEM_INSTRUCTION = `
أنت المساعد التراثي الذكي لمنصة "رحّال" 🧭.

قواعد صارمة وإلزامية يجب اتباعها بدقة:
1. أجب فقط وحصراً بناءً على قاعدة البيانات المحددة أدناه والخاصة بالموقع فقط (المناطق الـ 13 والأكلات الشعبية الموثقة ومصادرها).
2. إذا سُئلت عن أي سؤال أو موضوع أو شخصية أو دولة أو تقنية أو معلومة خارج نطاق بيانات الموقع، يجب عليك الاعتذار فوراً وإعطاء رسالة اعتذار واضحة ومحددة، مثل:
"عذراً، لا تتوفر لدي بيانات كافية حول هذا الموضوع في موسوعة رحّال. تقتصر معلوماتي على مناطق المملكة الـ 13 ومأكولاتها الشعبية الموثقة في المنصة."
3. لا تقم بتأليف أو اختراع أو استرجاع أي معلومات عامة من خارج هذه البيانات إطلاقاً.

قاعدة بيانات الموقع المعتمدة:
${JSON.stringify(SITE_DATABASE, null, 2)}
`;

const APOLOGY_MESSAGE_AR = 'عذراً، لا تتوفر لدي بيانات كافية حول هذا الموضوع في موسوعة رحّال. تقتصر معلوماتي على مناطق المملكة الـ 13 ومأكولاتها الشعبية الموثقة في المنصة.';
const APOLOGY_MESSAGE_EN = 'I apologize, I do not have enough information about this topic in the Rahal encyclopedia. My knowledge is limited exclusively to the 13 Saudi regions and their documented traditional dishes.';

function generateKnowledgeFallback(query: string, lang: string = 'ar'): string {
  const p = query.toLowerCase().trim();

  // Check against the 13 regions and foods
  for (const region of SITE_DATABASE.regions) {
    const rNameAr = region.name_ar.toLowerCase();
    const rNameEn = region.name_en.toLowerCase();
    const fNameAr = region.food.name_ar.toLowerCase();
    const fNameEn = region.food.name_en.toLowerCase();

    if (
      p.includes(rNameAr) ||
      p.includes(rNameEn) ||
      p.includes(fNameAr) ||
      p.includes(fNameEn) ||
      (rNameAr === 'الرياض' && (p.includes('رياض') || p.includes('درعية') || p.includes('كبسة'))) ||
      (rNameAr === 'مكة المكرمة' && (p.includes('مكة') || p.includes('سليق') || p.includes('كعبة'))) ||
      (rNameAr === 'المدينة المنورة' && (p.includes('مدينة') || p.includes('مطازيز') || p.includes('نبوي'))) ||
      (rNameAr === 'القصيم' && (p.includes('قصيم') || p.includes('مرقوق') || p.includes('بريدة'))) ||
      (rNameAr === 'المنطقة الشرقية' && (p.includes('شرقية') || p.includes('دمام') || p.includes('ربيان') || p.includes('مجبوس'))) ||
      (rNameAr === 'عسير' && (p.includes('عسير') || p.includes('مفروكة') || p.includes('سودة') || p.includes('أبها'))) ||
      (rNameAr === 'تبوك' && (p.includes('تبوك') || p.includes('طابة') || p.includes('ديسة'))) ||
      (rNameAr === 'حائل' && (p.includes('حائل') || p.includes('قرصان') || p.includes('أجا'))) ||
      (rNameAr === 'الحدود الشمالية' && (p.includes('شمالية') || p.includes('رقاق') || p.includes('زبيدة') || p.includes('عرعر'))) ||
      (rNameAr === 'جازان' && (p.includes('جازان') || p.includes('عصيدة') || p.includes('فرسان'))) ||
      (rNameAr === 'نجران' && (p.includes('نجران') || p.includes('حنيني') || p.includes('أخدود'))) ||
      (rNameAr === 'الباحة' && (p.includes('باحة') || p.includes('مفتوت') || p.includes('رغدان'))) ||
      (rNameAr === 'الجوف' && (p.includes('جوف') || p.includes('كليجا') || p.includes('مارد')))
    ) {
      if (lang === 'en') {
        return `🧭 **${region.name_en} Region**:\n\n• **Summary**: ${region.summary}\n• **Traditional Dish**: ${region.food.name_en} (${region.food.name_ar})\n• **Ingredients**: ${region.food.ingredients}\n• **Description**: ${region.food.description}\n• **Context**: ${region.food.cultural_context}\n• **Source**: ${region.food.source}`;
      }
      return `🧭 **منطقة ${region.name_ar}**:\n\n• **المعلم والملخص**: ${region.summary}\n• **الأكلة الشعبية الموثقة**: **${region.food.name_ar}** (${region.food.name_en})\n• **المكونات**: ${region.food.ingredients}\n• **الوصف**: ${region.food.description}\n• **السياق التراثي**: ${region.food.cultural_context}\n• **المصدر المعتمد**: ${region.food.source}`;
    }
  }

  // General questions about the website or all regions
  if (
    p.includes('مناطق') ||
    p.includes('المملكة') ||
    p.includes('السعودية') ||
    p.includes('رحال') ||
    p.includes('رحّال') ||
    p.includes('الأكلات') ||
    p.includes('regions') ||
    p.includes('saudi')
  ) {
    if (lang === 'en') {
      return `🧭 **Rahal Heritage Platform**:\n\nIncludes 13 verified regions of Saudi Arabia with authentic dishes:\n1. Riyadh: Kabsa\n2. Makkah: Saleeg\n3. Madinah: Mataziz\n4. Al-Qassim: Marqooq\n5. Eastern Province: Shrimp Machboos\n6. Asir: Mafrooka\n7. Tabuk: Taboo Bread\n8. Hail: Qursan\n9. Northern Borders: Ruqaq\n10. Jazan: Jazani Aseeda\n11. Najran: Haneeni\n12. Al-Bahah: Maftoot\n13. Al-Jouf: Kuleija`;
    }
    return `🧭 **موسوعة رحّال التراثية**:\n\nتضم المنصة معلومات موثقة عن مناطق المملكة الـ 13 ومأكولاتها الشعبية:\n1. **الرياض**: الكبسة\n2. **مكة المكرمة**: السليق\n3. **المدينة المنورة**: المطازيز\n4. **القصيم**: المرقوق\n5. **المنطقة الشرقية**: مجبوس الربيان\n6. **عسير**: المفروكة\n7. **تبوك**: خبز الطابة\n8. **حائل**: القرصان\n9. **الحدود الشمالية**: الرقاق\n10. **جازان**: العصيدة الجازانية\n11. **نجران**: الحنيني\n12. **الباحة**: المفتوت\n13. **الجوف**: الكليجا\n\nيمكنك السؤال عن أي منطقة أو أكلة من هذه القائمة!`;
  }

  // If outside the site database: return apology message!
  return lang === 'en' ? APOLOGY_MESSAGE_EN : APOLOGY_MESSAGE_AR;
}

app.post('/api/chat', async (req, res) => {
  try {
    const text = (req.body.prompt || req.body.message || '').trim();
    const language = req.body.language || 'ar';
    const history = req.body.history;

    if (!text) {
      return res.status(400).json({ error: 'يرجى تزويد السؤال أو النص.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });

        const contents: any[] = [];
        if (Array.isArray(history)) {
          for (const msg of history) {
            if (msg.role && msg.content) {
              contents.push({
                role: msg.role === 'assistant' || msg.role === 'model' ? 'model' : 'user',
                parts: [{ text: msg.content }],
              });
            }
          }
        }

        contents.push({
          role: 'user',
          parts: [{ text: text }],
        });

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents,
          config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.2, // Low temperature for strict factual grounding
          },
        });

        if (response.text) {
          return res.json({ reply: response.text });
        }
      } catch (genAiError) {
        console.warn('Direct Gemini call fallback:', genAiError);
      }
    }

    // Fallback response strictly governed by site data
    const reply = generateKnowledgeFallback(text, language);
    res.json({ reply });
  } catch (error: any) {
    console.error('Server chat error:', error);
    res.json({
      reply: APOLOGY_MESSAGE_AR,
    });
  }
});

// Serve static frontend in production
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Rahal server listening on port ${PORT}`);
});
