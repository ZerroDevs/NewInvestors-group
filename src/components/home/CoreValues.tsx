"use client";

import { useTranslations } from 'next-intl';

export default function CoreValues() {
  const t = useTranslations('CoreValues');

  const values = [
    'quality',
    'professionalism',
    'creativity',
    'transparency',
    'credibility',
    'integrity'
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#1C2541] transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#C5A869] mb-6">
          {t('title')}
          <div className="w-16 h-1 bg-[#0F2847] dark:bg-white mx-auto mt-4 rounded"></div>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-16">
          {t('description')}
        </p>
      </div>

      <div className="container mx-auto px-4 flex justify-center pb-12 pt-8 md:pt-0">
        <div className="flex flex-col md:flex-row justify-center items-center md:-space-x-6 lg:-space-x-10 rtl:space-x-reverse md:pb-12">
          {values.map((val, index) => {
            const isEven = index % 2 === 0;
            
            // On desktop: odd index (1, 3, 5) goes down
            const desktopClasses = !isEven ? 'md:mt-20 lg:mt-32' : 'md:mt-0';
            
            // On mobile: stack vertically with negative margin top to interlock
            const mobileMargin = index !== 0 ? '-mt-8 sm:-mt-12 md:mt-0' : '';
            
            // On mobile: offset horizontally to create vertical zig-zag
            const mobileOffset = !isEven 
              ? 'translate-x-10 sm:translate-x-12 md:translate-x-0 rtl:-translate-x-10 rtl:sm:-translate-x-12 rtl:md:translate-x-0' 
              : '-translate-x-10 sm:-translate-x-12 md:translate-x-0 rtl:translate-x-10 rtl:sm:translate-x-12 rtl:md:translate-x-0';

            return (
              <div 
                key={val}
                className={`relative w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 bg-white dark:bg-[#0B132B] border-2 border-[#0F2847] dark:border-[#2A3A5E] flex items-center justify-center transform rotate-45 shadow-sm transition-transform hover:scale-105 hover:z-30 z-10 ${desktopClasses} ${mobileMargin} ${mobileOffset}`}
              >
                {/* Diamond Tip Number */}
                <div className="absolute top-1 left-1 lg:top-2 lg:left-2 w-6 h-6 lg:w-8 lg:h-8 rounded-full bg-[#C5A869] flex items-center justify-center text-white font-bold text-xs lg:text-sm shadow-md transform -rotate-45">
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="transform -rotate-45 text-center">
                  <h4 className="font-bold text-[#0F2847] dark:text-white text-xs sm:text-sm lg:text-lg px-2 leading-tight">
                    {t(val)}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
