import {setRequestLocale} from 'next-intl/server';
import Hero from '@/components/home/Hero';
import Sectors from '@/components/home/Sectors';
import VisionMission from '@/components/home/VisionMission';
import CoreValues from '@/components/home/CoreValues';

export default async function HomePage({
  params
}: {
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Sectors />
      <VisionMission />
      <CoreValues />
    </div>
  );
}
