'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-[#F8F9FA] dark:bg-[#0B132B] px-4 font-sans">
      <div className="relative w-48 h-32 mb-8 animate-pulse">
        <Image
          src="/assets/images/Logo-nobg.png"
          alt="New Investors Logo"
          fill
          className="object-contain dark:brightness-200 opacity-40 grayscale"
        />
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-[#0F2847] dark:text-white mb-6 text-center">
        <span className="block mb-3 font-arabic">عذراً، حدث خطأ غير متوقع</span>
        <span className="block text-2xl text-gray-500 dark:text-gray-400">Something went wrong!</span>
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        <button
          onClick={() => reset()}
          className="px-8 py-3 bg-[#C5A869] text-white font-bold rounded-xl shadow-lg hover:bg-[#b0955a] transition-all transform hover:-translate-y-0.5"
        >
          حاول مرة أخرى | Try Again
        </button>
        <Link
          href="/"
          className="px-8 py-3 border-2 border-[#0F2847] text-[#0F2847] dark:border-gray-600 dark:text-gray-300 font-bold rounded-xl shadow-sm hover:bg-[#0F2847] hover:text-white dark:hover:bg-gray-800 transition-all transform hover:-translate-y-0.5 text-center"
        >
          الرئيسية | Go Home
        </Link>
      </div>
    </div>
  );
}
