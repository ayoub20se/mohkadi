
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-16 border-t border-emerald-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 bg-emerald-900 islamic-star flex items-center justify-center text-amber-500 font-bold text-xl border border-amber-600/20">
              <span className="font-aref pt-0.5">ق</span>
            </div>
            <span className="text-2xl font-bold text-white font-aref tracking-wide">محمد قاضي</span>
          </div>
          
          <div className="text-center space-y-2">
            <p className="text-sm text-stone-500 font-bold">جميع حقوق محفوظة</p>
            <p className="text-sm text-amber-500/80 font-medium tracking-wide">تم تطوير من طرف أيوب</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
