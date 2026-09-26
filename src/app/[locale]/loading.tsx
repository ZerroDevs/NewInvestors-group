import Image from 'next/image';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F8F9FA] dark:bg-[#0B132B] animate-in fade-in duration-300">
      <div className="relative flex flex-col items-center">
        {/* Pulsing Logo */}
        <div className="w-48 h-32 relative animate-pulse">
          <Image
            src="/assets/images/Logo-nobg.png"
            alt="New Investors Loading"
            fill
            className="object-contain drop-shadow-[0_4px_10px_rgba(197,168,105,0.4)] dark:brightness-200"
            priority
          />
        </div>
        
        {/* Sleek Golden Spinner Below */}
        <div className="mt-8 flex items-center justify-center space-x-2 rtl:space-x-reverse">
          <div className="w-3 h-3 bg-[#C5A869] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
          <div className="w-3 h-3 bg-[#C5A869] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
          <div className="w-3 h-3 bg-[#C5A869] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
