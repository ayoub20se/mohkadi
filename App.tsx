
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GeminiReflections from './components/GeminiReflections';
import IslamicContent from './components/IslamicContent';
import Footer from './components/Footer';
import QuranReader from './components/QuranReader';
import TopBanner from './components/TopBanner';
import SplashScreen from './components/SplashScreen';
import { X, Hammer } from 'lucide-react';

export type ViewState = 'home' | 'quran';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // إخفاء شاشة الترحيب بعد 9 ثوانٍ
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  const navigateTo = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const triggerConstructionModal = () => {
    setShowUnderConstruction(true);
  };

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-900 animate-in fade-in duration-1000">
      {/* حاوية ثابتة للشريط العلوي والهيدر */}
      <div className="sticky top-0 z-[100] w-full shadow-xl">
        <TopBanner />
        <Header onNavigate={navigateTo} />
      </div>
      
      <main className="flex-grow">
        {currentView === 'home' ? (
          <>
            <Hero />
            <GeminiReflections />
            <IslamicContent />
          </>
        ) : (
          <QuranReader onBack={() => navigateTo('home')} />
        )}
      </main>
      
      <Footer />

      {/* صفحة صغيرة للعمل قيد الإنجاز */}
      {showUnderConstruction && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-stone-900/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setShowUnderConstruction(false)}
          />
          <div className="relative bg-white rounded-[2.5rem] p-10 max-w-sm w-full shadow-2xl border-2 border-amber-400/30 overflow-hidden animate-in zoom-in duration-300">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-50 rounded-full -ml-16 -mb-16 blur-3xl opacity-50"></div>
            
            <div className="relative text-center space-y-6">
              <div className="w-20 h-20 bg-amber-100 rounded-3xl flex items-center justify-center mx-auto shadow-inner shimmer-effect">
                <Hammer className="w-10 h-10 text-amber-600" />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-stone-900 font-aref">قريباً بإذن الله</h3>
                <p className="text-stone-500 font-medium">يتم إنجاز هذه الصفحة حالياً لتليق بزيارتكم</p>
              </div>

              <button 
                onClick={() => setShowUnderConstruction(false)}
                className="w-full py-4 bg-emerald-800 text-white rounded-2xl font-bold hover:bg-emerald-900 transition-all shadow-lg shadow-emerald-900/20"
              >
                حسناً، سأنتظر
              </button>
            </div>

            {/* Close button */}
            <button 
              onClick={() => setShowUnderConstruction(false)}
              className="absolute top-4 left-4 p-2 text-stone-400 hover:text-stone-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
