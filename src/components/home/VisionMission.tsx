"use client";

import { useTranslations } from 'next-intl';
import { Eye, Target, MessageSquare } from 'lucide-react';

export default function VisionMission() {
  const t = useTranslations('VisionMission');

  const cards = [
    {
      title: t('visionTitle'),
      desc: t('visionDesc'),
      icon: <Eye className="w-12 h-12" />
    },
    {
      title: t('messageTitle'),
      desc: t('messageDesc'),
      icon: <MessageSquare className="w-12 h-12" />
    },
    {
      title: t('missionTitle'),
      desc: t('missionDesc'),
      icon: <Target className="w-12 h-12" />
    }
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] dark:bg-[#0B132B] transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-[#1C2541] p-10 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all border-t-4 border-transparent hover:border-[#C5A869]"
            >
              <div className="text-[#C5A869] mb-6 p-4 rounded-full border border-[#C5A869]/30 bg-[#C5A869]/5">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#C5A869] mb-4">{card.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
