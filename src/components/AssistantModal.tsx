import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, X, Loader2, BookOpen, Compass, RefreshCw } from 'lucide-react';
import { ChatMessage } from '../types';
import { Language, TranslationStrings } from '../data/translations';
import { RahalLogo } from './RahalLogo';

interface AssistantModalProps {
  language: Language;
  t: TranslationStrings;
  onClose: () => void;
  initialPrompt?: string;
}

const SAMPLE_QUESTIONS: Record<Language, string[]> = {
  ar: [
    'ما هي أكلة منطقة الرياض ومكوناتها؟',
    'حدثني عن طبق السليق في منطقة مكة المكرمة',
    'ما هي الأكلات الشعبية في عسير وتبوك وجازان؟',
    'ما هو طبق مجبوس الربيان في المنطقة الشرقية؟',
    'ما هي الأكلة التراثية المعتمدة لمنطقة حائل والقصيم؟',
    'ما هي قائمة مناطق المملكة الـ 13 ومأكولاتها في الموقع؟',
  ],
  en: [
    'What is the traditional dish of Riyadh and its ingredients?',
    'Tell me about Saleeg in Makkah Region',
    'What are the traditional dishes of Asir, Tabuk, and Jazan?',
    'What is Shrimp Machboos in Eastern Province?',
    'What are the traditional dishes of Hail and Al-Qassim?',
    'What are the 13 regions and dishes documented on the site?',
  ],
  fr: [
    'Quel est le plat traditionnel de Riyad et ses ingrédients ?',
    'Parlez-moi du Saleeg dans la région de La Mecque',
    'Quels sont les plats traditionnels d’Asir, Tabuk et Jazan ?',
    'Qu’est-ce que le Machboos aux crevettes dans la province orientale ?',
    'Quels sont les plats traditionnels de Hail et Al-Qassim ?',
    'Quelles sont les 13 régions et plats documentés sur le site ?',
  ],
  es: [
    '¿Cuál es el plato tradicional de Riad y sus ingredientes?',
    'Háblame del Saleeg en la región de La Meca',
    '¿Cuáles son los platos tradicionales de Asir, Tabuk y Jazan?',
    '¿Qué es el Machboos de camarones en la Provincia Oriental?',
    '¿Cuáles son los platos tradicionales de Hail y Al-Qassim?',
    '¿Cuáles son las 13 regiones y platos documentados en el sitio?',
  ],
};

export const AssistantModal: React.FC<AssistantModalProps> = ({
  language,
  t,
  onClose,
  initialPrompt,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: t.assistantGreeting,
      timestamp: Date.now(),
    },
  ]);
  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    if (initialPrompt && initialPrompt.trim().length > 0) {
      handleSendMessage(initialPrompt);
    }
  }, [initialPrompt]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = (customPrompt || inputPrompt).trim();
    if (!textToSend || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: textToSend,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!customPrompt) setInputPrompt('');
    setIsLoading(true);

    try {
      // Direct call to proxy endpoint
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          language: language,
          history: messages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || data.response || 'عذراً، حدث خطأ أثناء معالجة الطلب.',
        timestamp: Date.now(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch {
      // Fallback informative response in current language
      const fallbackReplies: Record<Language, string> = {
        ar: 'عذراً، لا تتوفر لدي بيانات كافية حول هذا السؤال في موسوعة رحّال. تقتصر معلوماتي على مناطق المملكة الـ 13 ومأكولاتها الشعبية الموثقة في المنصة.',
        en: 'I apologize, I do not have enough information about this topic in the Rahal encyclopedia. My knowledge is limited exclusively to the 13 Saudi regions and their documented traditional dishes.',
        fr: 'Désolé, je ne dispose pas de données suffisantes sur ce sujet dans l\'encyclopédie Rahal. Mes informations se limitent exclusivement aux 13 régions saoudiennes et à leurs plats traditionnels documentés.',
        es: 'Disculpe, no dispongo de información suficiente sobre este tema en la enciclopedia Rahal. Mis datos se limitan exclusivamente a las 13 regiones saudíes y sus platos tradicionales documentados.',
      };

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: fallbackReplies[language] || fallbackReplies.ar,
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const sampleQuestions = SAMPLE_QUESTIONS[language] || SAMPLE_QUESTIONS.ar;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-3xl h-[88vh] max-h-[88vh] border border-[#D4AF37] shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="shrink-0 bg-[#0F432A] px-6 py-4 border-b border-[#D4AF37]/40 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-[#D4AF37] text-[#0F432A] shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-black text-lg font-serif">{t.assistantModalTitle}</h3>
                <span className="text-[10px] bg-[#D4AF37] text-[#0F432A] px-2 py-0.5 rounded-full font-bold">
                  {t.assistantModalBadge}
                </span>
              </div>
              <p className="text-xs text-stone-300 font-medium">{t.assistantModalSub}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              <div
                className={`p-2 rounded-2xl shrink-0 ${
                  msg.role === 'user'
                    ? 'bg-[#D4AF37] text-[#0F432A]'
                    : 'bg-[#0F432A] text-[#FAF7F2]'
                }`}
              >
                {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] rounded-3xl p-4 sm:p-5 text-xs sm:text-sm leading-relaxed shadow-xs ${
                  msg.role === 'user'
                    ? 'bg-[#0F5132] text-white rounded-tr-none rtl:rounded-tr-3xl rtl:rounded-tl-none'
                    : 'bg-white border border-[#D4AF37]/30 text-stone-800 rounded-tl-none rtl:rounded-tl-3xl rtl:rounded-tr-none'
                }`}
              >
                <div className="whitespace-pre-wrap font-medium">{msg.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start gap-3 animate-pulse">
              <div className="p-2 rounded-2xl bg-[#0F432A] text-[#FAF7F2] shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-[#D4AF37]/30 rounded-3xl rounded-tl-none rtl:rounded-tl-3xl rtl:rounded-tr-none p-4 text-xs text-stone-500 flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin text-[#C59B27]" />
                <span>جاري البحث والتوثيق من المراجع التراثية...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        <div className="shrink-0 px-4 sm:px-6 py-2 bg-white/60 backdrop-blur-xs border-t border-stone-200 overflow-x-auto">
          <div className="flex items-center gap-1.5 py-1 whitespace-nowrap">
            <span className="text-[11px] font-bold text-stone-500 flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#8B6E14]" />
              {t.assistantSuggestedQuestions}
            </span>
            {sampleQuestions.slice(0, 3).map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="px-2.5 py-1 rounded-full bg-white text-stone-700 text-xs border border-stone-200 hover:border-[#D4AF37] hover:text-[#0F5132] transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="shrink-0 p-4 bg-white border-t border-[#D4AF37]/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder={t.assistantInputPlaceholder}
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              disabled={isLoading}
              className="flex-1 bg-[#FAF7F2] border border-[#D4AF37]/40 rounded-2xl px-4 py-3 text-xs sm:text-sm font-medium text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0F5132]"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="p-3 bg-[#0F5132] text-white rounded-2xl shadow-md hover:bg-[#14623e] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 rtl:rotate-180 ltr:rotate-0" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
