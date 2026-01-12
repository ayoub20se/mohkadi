
import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Search, Loader2 } from 'lucide-react';

interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}

interface Ayah {
  number: number;
  text: string;
  numberInSurah: number;
}

interface SurahDetail {
  number: number;
  name: string;
  ayahs: Ayah[];
}

interface QuranReaderProps {
  onBack: () => void;
}

const QuranReader: React.FC<QuranReaderProps> = ({ onBack }) => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [selectedSurah, setSelectedSurah] = useState<SurahDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch('https://api.alquran.cloud/v1/surah');
        const data = await response.json();
        setSurahs(data.data);
      } catch (error) {
        console.error('Error fetching surahs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSurahs();
  }, []);

  const handleSurahClick = async (number: number) => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.alquran.cloud/v1/surah/${number}`);
      const data = await response.json();
      setSelectedSurah(data.data);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error fetching surah details:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredSurahs = surahs.filter(s => 
    s.name.includes(searchQuery) || 
    s.englishName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Toolbar */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-stone-200 py-4 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <button 
              onClick={selectedSurah ? () => setSelectedSurah(null) : onBack}
              className="p-2 hover:bg-stone-100 rounded-full transition-colors text-emerald-800"
              title="رجوع"
            >
              <ArrowRight size={24} />
            </button>
            <h2 className="text-2xl font-aref text-stone-900">
              {selectedSurah ? selectedSurah.name : 'القرآن الكريم'}
            </h2>
          </div>

          {!selectedSurah && (
            <div className="relative w-full sm:w-72">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 w-4 h-4" />
              <input 
                type="text"
                placeholder="ابحث عن سورة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pr-10 pl-4 py-2 bg-stone-100 border-none rounded-xl focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm"
              />
            </div>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 space-y-4">
            <Loader2 className="w-12 h-12 animate-spin text-emerald-600" />
            <p className="text-stone-500 font-bold">جاري التحميل...</p>
          </div>
        ) : selectedSurah ? (
          <div className="bg-white rounded-[2.5rem] shadow-xl p-8 sm:p-12 border border-stone-100">
            <div className="text-center mb-12">
              <p className="text-emerald-700 font-bold text-xl mb-4 font-amiri">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ</p>
            </div>
            <div className="space-y-10">
              {selectedSurah.ayahs.map((ayah) => (
                <div key={ayah.number} className="relative group">
                  <p className="text-3xl md:text-4xl text-stone-800 leading-[1.8] text-right font-amiri tracking-wide">
                    {ayah.text}
                    <span className="inline-flex items-center justify-center w-10 h-10 mr-4 border-2 border-emerald-100 rounded-full text-sm font-bold text-emerald-700 bg-emerald-50 align-middle">
                      {ayah.numberInSurah}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredSurahs.map((surah) => (
              <button
                key={surah.number}
                onClick={() => handleSurahClick(surah.number)}
                className="group flex items-center p-6 bg-white rounded-2xl border border-stone-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 text-right"
              >
                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-700 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {surah.number}
                </div>
                <div className="mr-4 flex-grow">
                  <div className="text-xl font-bold text-stone-900 font-amiri">{surah.name}</div>
                  <div className="text-sm text-stone-400 font-medium">{surah.englishName} • {surah.numberOfAyahs} آية</div>
                </div>
                <BookOpen className="text-stone-200 group-hover:text-emerald-400 transition-colors w-5 h-5" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuranReader;
