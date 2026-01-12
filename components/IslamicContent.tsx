
import React, { useState, useEffect } from 'react';
import { Clock, Heart, Star, Cloud } from 'lucide-react';

const IslamicContent: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // تنسيق الوقت بتوقيت الجزائر
  const algeriaTime = new Intl.DateTimeFormat('ar-DZ', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    timeZone: 'Africa/Algiers'
  }).format(time);

  const dhikrCards = [
    { text: "الله أكبر", sub: "كبيرًا، والحمد لله كثيرًا", icon: <Star className="w-8 h-8 text-amber-500" /> },
    { text: "الحمد لله", sub: "على كل نعمة أهداها الله لنا", icon: <Heart className="w-8 h-8 text-rose-500" /> },
    { text: "اللهم صلي على سيدنا محمد صلي الله عليه و سلم", sub: "نور الهدى وشفيعنا يوم الدين", icon: <Cloud className="w-8 h-8 text-sky-500" /> }
  ];

  return (
    <section id="content" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none islamic-pattern"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Ornate Frame Wrapper */}
        <div className="relative p-1 md:p-2 bg-gradient-to-br from-amber-400 via-amber-200 to-amber-500 rounded-[4rem] shadow-2xl">
          <div className="relative bg-[#fdfbf7] rounded-[3.8rem] p-8 md:p-16 border-4 border-emerald-900/10">
            
            {/* Corner Decorations */}
            <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 border-amber-500/30 rounded-tr-3xl pointer-events-none"></div>
            <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 border-amber-500/30 rounded-tl-3xl pointer-events-none"></div>
            <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 border-amber-500/30 rounded-br-3xl pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 border-amber-500/30 rounded-bl-3xl pointer-events-none"></div>

            {/* Algerian Clock Section */}
            <div className="relative mb-20 mt-4">
              <div className="absolute inset-0 bg-emerald-900/5 blur-3xl rounded-full transform scale-150 pointer-events-none"></div>
              <div className="relative bg-white border border-emerald-100 rounded-[3rem] p-8 md:p-12 text-center shadow-xl hover:shadow-emerald-900/10 transition-shadow">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full text-sm font-bold mb-6">
                  <Clock className="w-4 h-4 animate-pulse" />
                  توقيت الجزائر الآن
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-8 font-aref">
                  من أحلى ساعة و دقيقة و ثانية
                </h2>
                
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="text-6xl md:text-8xl font-black text-emerald-800 font-amiri tracking-wider bg-stone-50 px-10 py-6 rounded-[2rem] border border-emerald-50 shadow-inner shimmer-effect">
                    {algeriaTime}
                  </div>
                  <div className="text-stone-400 font-bold tracking-widest uppercase text-sm mt-4">
                    الوقت يمر والعمل الصالح يبقى
                  </div>
                </div>
              </div>
            </div>

            {/* Dhikr Cards Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {dhikrCards.map((card, index) => (
                <div 
                  key={index} 
                  className="group relative bg-white p-10 rounded-[2.5rem] border border-stone-100 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center overflow-hidden"
                >
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-stone-50 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                  
                  <div className="relative z-10 flex flex-col items-center gap-6">
                    <div className="p-4 bg-stone-50 rounded-2xl group-hover:bg-emerald-50 transition-colors">
                      {card.icon}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-emerald-900 font-amiri leading-relaxed">
                      {card.text}
                    </h3>
                    
                    <div className="h-px w-16 bg-emerald-100 group-hover:w-32 transition-all"></div>
                    
                    <p className="text-stone-500 font-medium italic">
                      {card.sub}
                    </p>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslamicContent;
