
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import IconRenderer from './IconRenderer';

interface SocialLinksProps {
  onConstructionClick: () => void;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ onConstructionClick }) => {
  // دالة للحصول على لون الظل المضيء بناءً على خلفية الأيقونة
  const getGlowColor = (colorClass: string) => {
    if (colorClass.includes('blue')) return 'hover:shadow-blue-500/50';
    if (colorClass.includes('red')) return 'hover:shadow-red-500/50';
    if (colorClass.includes('green')) return 'hover:shadow-green-500/50';
    if (colorClass.includes('pink')) return 'hover:shadow-pink-500/50';
    if (colorClass.includes('amber')) return 'hover:shadow-amber-500/50';
    if (colorClass.includes('stone')) return 'hover:shadow-stone-400/50';
    return 'hover:shadow-emerald-500/50';
  };

  const handleClick = (e: React.MouseEvent, id: string, url: string) => {
    if (['youtube', 'whatsapp', 'mail'].includes(id)) {
      e.preventDefault();
      onConstructionClick();
    }
  };

  return (
    <section id="social" className="py-24 bg-white/50 backdrop-blur-sm relative overflow-hidden">
      {/* خلفية ضوئية خافتة */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block p-1 mb-4 rounded-full bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-200 animate-pulse">
            <div className="px-4 py-1 bg-white rounded-full">
               <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">ابقَ على اتصال</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 font-aref">تواصل معي</h2>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto leading-relaxed">
            يسعدني تواصلكم عبر المنصات المختلفة. شاركوا معي آرائكم واقتراحاتكم في رحلتنا الدعوية.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.url}
              onClick={(e) => handleClick(e, link.id, link.url)}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center p-8 rounded-[2rem] border border-stone-100 bg-white hover:border-transparent transition-all duration-500 hover:-translate-y-3 shadow-sm hover:shadow-2xl ${getGlowColor(link.color)}`}
            >
              <div className="relative">
                {/* طبقة الإضاءة الخلفية (Glow Background) */}
                <div className={`absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${link.color}`}></div>
                
                {/* حاوية الأيقونة مع تأثير اللمعان */}
                <div className={`${link.color} p-5 rounded-2xl text-white mb-4 relative z-10 shadow-lg group-hover:scale-110 transition-transform duration-500 shimmer-effect`}>
                  <IconRenderer name={link.icon} className="w-8 h-8 filter drop-shadow-md" />
                </div>
              </div>
              
              <span className="font-bold text-stone-700 group-hover:text-stone-900 transition-colors tracking-wide">{link.name}</span>
              
              {/* خط سفلي مضيء يظهر عند التمرير */}
              <div className={`h-1 w-0 group-hover:w-12 mt-2 rounded-full transition-all duration-500 ${link.color} opacity-50`}></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
