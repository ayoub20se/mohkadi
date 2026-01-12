
import React, { useState, useEffect } from 'react';
import LibraryDrawer from './LibraryDrawer';
import { ViewState } from '../App';

interface HeaderProps {
  onNavigate: (view: ViewState) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <header className="bg-white/95 backdrop-blur-md border-b border-emerald-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => setIsDrawerOpen(true)}
            >
              <div className="w-12 h-12 bg-emerald-800 islamic-star flex items-center justify-center text-amber-400 font-bold text-2xl shadow-inner border border-amber-500/30 group-hover:scale-105 transition-transform duration-300">
                <span className="font-aref pt-1">ق</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-stone-800 font-aref tracking-wide leading-none">محمد قاضي</span>
                <span className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest mt-1 opacity-0 group-hover:opacity-100 transition-opacity">انقر لفتح المكتبة</span>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-reverse space-x-8 text-stone-600 font-medium">
              <a href="#home" onClick={() => onNavigate('home')} className="hover:text-emerald-700 transition-colors">الرئيسية</a>
              <a href="#reflection" className="hover:text-emerald-700 transition-colors">نفحات</a>
              <a href="#content" className="hover:text-emerald-700 transition-colors">المحتوى</a>
              <button 
                onClick={() => setIsDrawerOpen(true)}
                className="bg-emerald-800 text-white px-6 py-2.5 rounded-xl hover:bg-emerald-900 transition-all shadow-md flex items-center gap-2"
              >
                <span>المكتبة</span>
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping"></div>
              </button>
            </nav>
          </div>
        </div>
      </header>
      <LibraryDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)} 
        onNavigate={onNavigate}
      />
    </>
  );
};

export default Header;
