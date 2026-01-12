
import React from 'react';
import { X, ChevronLeft } from 'lucide-react';
import IconRenderer from './IconRenderer';
import { SOCIAL_LINKS } from '../constants';
import { ViewState } from '../App';

interface LibraryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (view: ViewState) => void;
}

const LibraryDrawer: React.FC<LibraryDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  const menuItems = [
    { id: 'quran', name: 'القرآن الكريم', icon: 'quran', desc: 'تصفح المصحف الشريف كاملاً' },
    { id: 'recitation', name: 'تلاوات قرآنية', icon: 'play', desc: 'استمع إلى أصوات مشاهير القراء', url: 'https://youtu.be/mQ70kbDmsKA?si=LA56EqN6xiWb45P1' },
    { id: 'hadith', name: 'صحيح مسلم', icon: 'hadith', desc: 'كتاب صحيح مسلم بشرحه', url: 'https://ketabonline.com/ar/books/2229' },
    { id: 'seerah', name: 'السيرة النبوية', icon: 'seerah', desc: 'سيرة المصطفى صلى الله عليه وسلم', url: 'https://youtu.be/RZEeGyUR6es?si=XHkMq17hMEJ8GRn-' },
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    if (item.id === 'quran') {
      onNavigate('quran');
      onClose();
    } else if (item.url) {
      window.open(item.url, '_blank');
      onClose();
    } else {
      // For any other items without URLs
      const constructionEvent = new CustomEvent('triggerConstruction');
      window.dispatchEvent(constructionEvent);
    }
  };

  const socialFiltered = SOCIAL_LINKS.filter(link => 
    ['facebook', 'tiktok', 'instagram', 'youtube', 'whatsapp', 'mail'].includes(link.id)
  );

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[60] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-hidden flex flex-col`}>
        {/* Header */}
        <div className="p-6 border-b border-emerald-100 bg-emerald-800 text-white flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center font-aref text-xl">ق</div>
             <span className="font-aref text-xl">المكتبة الشاملة</span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto p-6 space-y-8 islamic-bg">
          <div className="space-y-4">
            <h3 className="text-stone-400 text-sm font-bold uppercase tracking-widest pr-2">أقسام الكتب</h3>
            {menuItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleItemClick(item)}
                className="w-full flex items-center gap-4 p-5 rounded-2xl bg-white border border-stone-100 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/5 transition-all group text-right"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <IconRenderer name={item.icon} className="w-6 h-6" />
                </div>
                <div className="flex-grow">
                  <div className="font-bold text-stone-800 text-lg">{item.name}</div>
                  <div className="text-sm text-stone-500">{item.desc}</div>
                </div>
                <ChevronLeft className="text-stone-300 group-hover:text-emerald-600 transition-colors" />
              </button>
            ))}
          </div>

          <div className="pt-8 border-t border-stone-100">
            <h3 className="text-stone-400 text-sm font-bold uppercase tracking-widest pr-2 mb-6">روابط التواصل الاجتماعي</h3>
            <div className="grid grid-cols-3 gap-4">
              {socialFiltered.map((link) => (
                <a 
                  key={link.id}
                  href={link.url}
                  onClick={(e) => {
                    if (['youtube', 'whatsapp', 'mail'].includes(link.id)) {
                      e.preventDefault();
                      onClose();
                      // Simple delay to let drawer close before modal appears if needed
                      setTimeout(() => {
                        window.dispatchEvent(new CustomEvent('triggerConstruction'));
                      }, 100);
                    }
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-stone-50 hover:bg-white border border-transparent hover:border-emerald-200 transition-all hover:shadow-md"
                >
                  <div className={`${link.color} p-3 rounded-xl text-white`}>
                    <IconRenderer name={link.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-stone-600">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-stone-50 border-t border-stone-100 text-center">
          <div className="text-stone-400 text-[10px] uppercase tracking-widest">جميع حقوق محفوظة</div>
        </div>
      </div>
    </>
  );
};

export default LibraryDrawer;
