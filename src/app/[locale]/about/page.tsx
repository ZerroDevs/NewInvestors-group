import {setRequestLocale} from 'next-intl/server';
import VisionMission from '@/components/home/VisionMission';
import CoreValues from '@/components/home/CoreValues';
import Image from 'next/image';

export default async function AboutPage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  // Need to use getTranslations in server component if we don't want 'use client'
  // But wait, useTranslations inside a Server Component works in next-intl v3+ if configured properly. 
  // Wait, no, for async components, it's `getTranslations`.
  // Let me just make this a normal async server component and pass props or use another client component.
  // Actually, I can use `import {getTranslations} from 'next-intl/server';`
  return <AboutContent />;
}

// Since I need getTranslations and it's a server component
import {getTranslations} from 'next-intl/server';

import Hero from '@/components/home/Hero';

async function AboutContent() {
  const t = await getTranslations('Sectors');
  const tNav = await getTranslations('Navigation');
  
  return (
    <div className="flex flex-col w-full">
      <Hero title={tNav('about')} subtitle=" " height="half" />

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <Image 
              src="/assets/real-estate/dat1.jpg" 
              alt="Tripoli Libya" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#0F2847] mb-6">{t('title')}</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      <VisionMission />
      <CoreValues />
    </div>
  );
}
