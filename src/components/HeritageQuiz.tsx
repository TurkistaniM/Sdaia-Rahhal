import React, { useState, useMemo } from 'react';
import { SAUDI_QUIZ_QUESTIONS } from '../data/regionsData';
import {
  Language,
  TranslationStrings,
} from '../data/translations';
import { getLocalizedQuizQuestions } from '../data/translationsData';
import { HelpCircle, CheckCircle2, XCircle, Trophy, RotateCcw, X, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { RahalLogo } from './RahalLogo';

interface HeritageQuizProps {
  language: Language;
  t: TranslationStrings;
  onClose: () => void;
  onExploreRegion: (regionId: string) => void;
}

export const HeritageQuiz: React.FC<HeritageQuizProps> = ({
  language,
  t,
  onClose,
  onExploreRegion,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const questions = useMemo(() => {
    return getLocalizedQuizQuestions(language, SAUDI_QUIZ_QUESTIONS);
  }, [language]);

  const currentQ = questions[currentQuestionIndex] || questions[0];

  const handleSelectOption = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="bg-[#FAF7F2] rounded-3xl w-full max-w-2xl border border-[#D4AF37] shadow-2xl overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-[#0F432A] px-6 py-4 border-b border-[#D4AF37]/40 flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#D4AF37] text-[#0F432A]">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-lg font-bold font-serif">
                <span>{t.quizModalTitle}</span>
              </div>
              <p className="text-xs text-stone-300">{t.quizModalSub}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quiz Body */}
        <div className="p-6">
          {!isFinished ? (
            <div>
              {/* Progress and Score Bar */}
              <div className="flex items-center justify-between text-xs font-bold text-stone-500 mb-4">
                <span>
                  {t.questionOf} {currentQuestionIndex + 1} / {SAUDI_QUIZ_QUESTIONS.length}
                </span>
                <span className="px-3 py-1 bg-[#D4AF37]/20 text-[#8B6E14] rounded-full">
                  {t.scoreLabel}: {score}
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden mb-6">
                <div
                  className="bg-[#0F5132] h-full transition-all duration-300"
                  style={{
                    width: `${((currentQuestionIndex + 1) / SAUDI_QUIZ_QUESTIONS.length) * 100}%`,
                  }}
                />
              </div>

              {/* Region Tag */}
              <div className="inline-block px-3 py-1 rounded-full bg-[#0F432A]/10 text-[#0F432A] text-xs font-bold mb-3">
                {currentQ.regionName}
              </div>

              {/* Question Text */}
              <h3 className="text-lg sm:text-xl font-bold text-[#0F432A] font-serif leading-relaxed mb-6">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((option, idx) => {
                  let optionClass = 'bg-white border-stone-200 text-stone-700 hover:border-[#D4AF37] hover:bg-[#FAF7F2]';

                  if (isAnswered) {
                    if (idx === currentQ.correctIndex) {
                      optionClass = 'bg-emerald-50 border-emerald-500 text-emerald-800 font-bold';
                    } else if (idx === selectedOption) {
                      optionClass = 'bg-rose-50 border-rose-500 text-rose-800 font-bold';
                    } else {
                      optionClass = 'bg-white/50 border-stone-200 text-stone-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full p-4 rounded-2xl border-2 text-start transition-all cursor-pointer flex items-center justify-between ${optionClass}`}
                    >
                      <span className="text-sm font-medium">{option}</span>
                      {isAnswered && idx === currentQ.correctIndex && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== currentQ.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Explanation & Next Step */}
              {isAnswered && (
                <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-[#D4AF37]/30 mb-6 animate-fadeIn">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#0F5132] mb-1">
                    <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                    <span>{currentQ.regionName}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">{currentQ.explanation}</p>
                </div>
              )}

              {/* Next Button */}
              {isAnswered && (
                <button
                  onClick={handleNext}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#0F5132] text-white font-bold text-sm shadow-md hover:bg-[#14623e] transition-all flex items-center justify-center gap-2 cursor-pointer animate-fadeIn"
                >
                  <span>
                    {currentQuestionIndex + 1 === SAUDI_QUIZ_QUESTIONS.length
                      ? t.viewResults
                      : t.nextQuestion}
                  </span>
                  <ArrowLeft className="w-4 h-4 rtl:rotate-0 ltr:rotate-180" />
                </button>
              )}
            </div>
          ) : (
            /* Result Screen */
            <div className="text-center py-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-[#D4AF37]/20 flex items-center justify-center text-[#8B6E14] mb-4">
                <Trophy className="w-10 h-10 animate-bounce" />
              </div>

              <h3 className="text-2xl font-black text-[#0F432A] font-serif mb-2">
                {t.quizFinished}
              </h3>

              <p className="text-stone-600 text-sm mb-6 max-w-md mx-auto">
                {score >= SAUDI_QUIZ_QUESTIONS.length / 2
                  ? t.quizCongratulations
                  : t.quizTryAgain}
              </p>

              {/* Score Display */}
              <div className="inline-block bg-white px-8 py-4 rounded-3xl border-2 border-[#D4AF37] shadow-lg mb-8">
                <span className="text-4xl font-black text-[#0F432A]">
                  {score} / {SAUDI_QUIZ_QUESTIONS.length}
                </span>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-white border border-stone-200 text-stone-700 font-bold text-sm hover:bg-[#FAF7F2] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{t.restartQuiz}</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-[#0F5132] text-white font-bold text-sm shadow-md hover:bg-[#14623e] transition-colors cursor-pointer"
                >
                  <span>{t.close}</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
