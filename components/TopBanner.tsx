
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Sunrise, Sunset, Cloud } from 'lucide-react';

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const TopBanner: React.FC = () => {
  const [prayers, setPrayers] = useState<PrayerTimes | null>(null);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        const response = await fetch('https://api.aladhan.com/v1/timingsByCity?city=Algiers&country=Algeria&method=3');
        const data = await response.json();
        if (data.data && data.data.timings) {
          setPrayers(data.data.timings);
        }
      } catch (error) {
        console.error('Error fetching prayer times:', error);
      }
    };
    fetchPrayers();
  }, []);

  const dhikrText = "الله أكبر • الحمد لله • اللهم صلِّ على محمد • الله أكبر • الحمد لله • اللهم صلِّ على محمد • ";

  return (
    <div className="w-full bg-emerald-950 text-amber-400 overflow-hidden py-2 border-b border-amber-500/20 shadow-lg relative z-10">
      <div className="max-w-[2000px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Animated Dhikr Ticker */}
        <div className="relative flex-1 overflow-hidden whitespace-nowrap group w-full md:w-auto">
          <div className="inline-block animate-marquee whitespace-nowrap font-aref text-lg md:text-xl tracking-widest">
            <span className="mx-4">{dhikrText}</span>
            <span className="mx-4">{dhikrText}</span>
            <span className="mx-4">{dhikrText}</span>
          </div>
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(100%); }
            }
            .animate-marquee {
              display: inline-block;
              animation: marquee 30s linear infinite;
            }
          `}</style>
        </div>

        {/* Prayer Times Section */}
        <div className="flex items-center gap-3 md:gap-6 text-xs md:text-sm font-bold bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
          {prayers ? (
            <>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Sunrise size={14} className="text-amber-500" />
                <span>الفجر: {prayers.Fajr}</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Sun size={14} className="text-amber-300" />
                <span>الظهر: {prayers.Dhuhr}</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Cloud size={14} className="text-emerald-400" />
                <span>العصر: {prayers.Asr}</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Sunset size={14} className="text-orange-400" />
                <span>المغرب: {prayers.Maghrib}</span>
              </div>
              <div className="hidden sm:block w-px h-3 bg-white/20"></div>
              <div className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Moon size={14} className="text-blue-300" />
                <span>العشاء: {prayers.Isha}</span>
              </div>
            </>
          ) : (
            <span className="animate-pulse">جاري تحميل مواقيت الصلاة...</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
