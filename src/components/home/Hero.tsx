"use client";

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useLocale } from 'next-intl';
import Image from 'next/image';

const images = [
  '/assets/real-estate/dat1.jpg',
  '/assets/real-estate/dat2.jpg'
];

interface HeroProps {
  title?: string;
  subtitle?: string;
  height?: 'screen' | 'half';
}

export default function Hero({ title, subtitle, height = 'screen' }: HeroProps) {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className={`relative ${height === 'screen' ? 'h-[65vh] md:h-screen' : 'h-[50vh] min-h-[400px]'} w-full overflow-hidden flex items-center justify-center bg-[#0F2847]`}>
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[currentIndex]}
            alt="Real Estate Property"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2847]/90 via-black/40 to-transparent z-10" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto mt-20">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-xl">
          {title || t('title')}
        </h1>
        {(subtitle || t('subtitle')) && (
          <p className="text-xl md:text-3xl font-medium text-gray-200 drop-shadow-md">
            {subtitle || t('subtitle')}
          </p>
        )}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={isRtl ? handleNext : handlePrev}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-[#C5A869]/80 text-white transition-all backdrop-blur-sm"
      >
        <ChevronLeft size={36} />
      </button>
      <button 
        onClick={isRtl ? handlePrev : handleNext}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 hover:bg-[#C5A869]/80 text-white transition-all backdrop-blur-sm"
      >
        <ChevronRight size={36} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3 space-x-reverse rtl:space-x-reverse">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? 'bg-[#C5A869] scale-125' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
}
