
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[200] flex flex-col items-center justify-between py-20 bg-[#fdfbf7] islamic-bg overflow-hidden">
      {/* Decorative Overlays */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern"></div>
      
      {/* Top Section: Basmala */}
      <div className="relative z-10 animate-fade-in-down">
        <h2 className="text-3xl md:text-5xl font-amiri text-emerald-900 font-bold opacity-80">
          بسم الله الرحمن الرحيم
        </h2>
      </div>

      {/* Middle Section: Name and Progress Bar */}
      <div className="relative z-10 w-full max-w-2xl px-6 flex flex-col items-center gap-12">
        <div className="text-center animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold font-aref gold-text py-4 mb-2">
            محمد قاضي السلفى
          </h1>
          <div className="w-24 h-1 bg-amber-400 mx-auto rounded-full opacity-30"></div>
        </div>

        {/* 9 Seconds Progress Bar */}
        <div className="w-full max-w-md h-1.5 bg-stone-200 rounded-full overflow-hidden shadow-inner relative">
          <div className="absolute inset-y-0 right-0 loading-bar-fill bg-gradient-to-l from-emerald-800 to-amber-500 rounded-full"></div>
        </div>
      </div>

      {/* Bottom Section: Developer Name */}
      <div className="relative z-10 animate-fade-in-up delay-700">
        <span className="text-stone-400 font-bold tracking-[0.3em] text-sm uppercase">
          AYOUB
        </span>
      </div>

      {/* Corner Ornaments */}
      <div className="absolute top-0 right-0 p-12 opacity-10 text-emerald-900">
        <svg width="200" height="200" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
           <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 p-12 opacity-10 text-emerald-900 rotate-180">
        <svg width="200" height="200" viewBox="0 0 100 100">
           <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
           <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </div>
    </div>
  );
};

export default SplashScreen;
