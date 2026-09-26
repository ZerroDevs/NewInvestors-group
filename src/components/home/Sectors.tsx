"use client";

import { useTranslations } from 'next-intl';
import { Building2, Home } from 'lucide-react';

export default function Sectors() {
  const t = useTranslations('Sectors');

  return (
    <section className="py-20 bg-white dark:bg-[#0B132B] transition-colors duration-300">
      <div className="container mx-auto px-4 text-center max-w-4xl mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C5A869] mb-8">{t('title')}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
          {t('description')}
        </p>
        <p className="text-lg font-medium text-[#0F2847] dark:text-white">
          {t('subDescription')}
        </p>
      </div>

      <div className="relative w-full py-20 md:py-32">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/assets/real-estate/dat2.jpg)' }}
        >
          <div className="absolute inset-0 bg-[#0F2847]/80 mix-blend-multiply" />
        </div>

        {/* Overlapping Cards */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            
            {/* Commercial Card */}
            <div className="bg-white dark:bg-[#1C2541] p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-64 h-64 hover:-translate-y-3 transition-transform duration-300 border border-transparent dark:border-gray-800">
              <div className="w-20 h-20 mb-4 text-[#C5A869]">
                <Building2 className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0F2847] dark:text-white text-center">{t('commercial')}</h3>
            </div>

            {/* Residential Card */}
            <div className="bg-white dark:bg-[#1C2541] p-10 rounded-2xl shadow-2xl flex flex-col items-center justify-center w-64 h-64 hover:-translate-y-3 transition-transform duration-300 border border-transparent dark:border-gray-800">
              <div className="w-20 h-20 mb-4 text-[#C5A869]">
                <Home className="w-full h-full" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#0F2847] dark:text-white text-center">{t('hospitality')}</h3>
            </div>

        </div>
      </div>
    </section>
  );
}
