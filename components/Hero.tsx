
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 pb-32 overflow-hidden">
      {/* Decorative Islamic Mandala Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none">
        <svg width="900" height="900" viewBox="0 0 100 100" fill="currentColor" className="text-emerald-900">
          <path d="M50 0 L61 39 L100 50 L61 61 L50 100 L39 61 L0 50 L39 39 Z" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <path d="M25 25 L75 75 M75 25 L25 75" stroke="currentColor" strokeWidth="0.1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-10 text-sm font-bold tracking-widest text-emerald-900 bg-amber-100/50 border border-amber-200/50 rounded-full shadow-sm">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            الموقع الشخصي الرسمي
          </div>
          
          <div className="relative inline-block">
            <h1 className="text-7xl md:text-9xl font-bold font-aref leading-tight gold-text py-4">
              محمد قاضي
            </h1>
            {/* Decorative underline */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>
          </div>
        </div>
      </div>
      
      {/* Corner Ornaments */}
      <div className="absolute top-0 right-0 p-8 opacity-30 hidden lg:block text-amber-600">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path d="M0 0 L100 0 L100 10 M100 0 L0 0 L0 100 L10 100 M0 0 L30 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="2" fill="currentColor" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 p-8 opacity-30 hidden lg:block rotate-180 text-amber-600">
        <svg width="150" height="150" viewBox="0 0 100 100">
          <path d="M0 0 L100 0 L100 10 M100 0 L0 0 L0 100 L10 100 M0 0 L30 30" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="35" cy="35" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
