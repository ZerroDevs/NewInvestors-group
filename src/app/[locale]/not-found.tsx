"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function NotFound() {
  const t = useTranslations('NotFound');

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-screen bg-[#0F2847] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/real-estate/dat2.jpg"
        alt="404 Background"
        fill
        className="object-cover object-center z-0 opacity-40"
        priority
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F2847]/90 via-[#0B132B]/80 to-[#0F2847]/90 z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center flex flex-col items-center justify-center mt-20">
        <h1 className="text-8xl md:text-[12rem] font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#C5A869] to-[#8a723e] drop-shadow-lg mb-2">
          404
        </h1>
        
        <div className="w-24 h-1 bg-[#C5A869] rounded mb-8"></div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
          {t('title').replace('404 - ', '')}
        </h2>
        
        <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow">
          {t('description')}
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center bg-[#C5A869] hover:bg-white text-white hover:text-[#0F2847] font-bold py-4 px-12 rounded-full shadow-[0_0_15px_rgba(197,168,105,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] transition-all duration-300 transform hover:-translate-y-1"
        >
          {t('backHome')}
        </Link>
      </div>
    </div>
  );
}
