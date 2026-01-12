
import React, { useState, useEffect } from 'react';
import { Sparkles, RefreshCw, Quote } from 'lucide-react';
import { ReflectionData } from '../types';
import { fetchDailyReflection } from '../services/gemini';

const GeminiReflections: React.FC = () => {
  const [reflection, setReflection] = useState<ReflectionData | null>(null);
  const [loading, setLoading] = useState(true);

  const loadReflection = async () => {
    setLoading(true);
    const data = await fetchDailyReflection();
    setReflection(data);
    setLoading(false);
  };

  useEffect(() => {
    loadReflection();
  }, []);

  return (
    <section id="reflection" className="py-20 bg-emerald-900 text-white relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none islamic-pattern"></div>
      
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Sparkles className="text-amber-400 w-8 h-8" />
          <h2 className="text-3xl md:text-4xl font-bold text-center">نفحات إيمانية متجددة</h2>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-12 space-y-4">
              <RefreshCw className="w-10 h-10 animate-spin text-amber-400" />
              <p className="text-lg animate-pulse">جاري استلهام النفحات...</p>
            </div>
          ) : reflection && (
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Quote className="w-12 h-12 text-amber-400 mx-auto opacity-50" />
                <p className="text-3xl md:text-4xl font-amiri leading-relaxed text-amber-100">
                  {reflection.verse}
                </p>
                <p className="text-lg text-emerald-200 italic">
                  &ldquo;{reflection.translation}&rdquo;
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                <div className="space-y-3">
                  <h3 className="text-amber-400 font-bold text-xl flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    وقفة مع الآية
                  </h3>
                  <p className="text-stone-100 leading-relaxed text-lg">
                    {reflection.reflection}
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-emerald-400 font-bold text-xl flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                    عمل اليوم
                  </h3>
                  <div className="bg-emerald-800/50 p-4 rounded-2xl border border-emerald-700">
                    <p className="text-emerald-50 text-lg">
                      {reflection.actionItem}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <button 
                  onClick={loadReflection}
                  className="flex items-center gap-2 px-6 py-2 rounded-full bg-amber-500 text-stone-900 font-bold hover:bg-amber-400 transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  نفحة أخرى
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GeminiReflections;
