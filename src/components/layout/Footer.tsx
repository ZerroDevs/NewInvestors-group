"use client";

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { Phone, Mail, MapPin } from 'lucide-react';
import AnimatedCompass from '@/components/contact/AnimatedCompass';

// Custom WhatsApp Icon since Lucide's can sometimes be varied. Using SVG for precision.
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default function Footer() {
  const tNav = useTranslations('Navigation');
  const tCommon = useTranslations('Common');
  const tContact = useTranslations('Contact');

  return (
    <footer className="bg-[#0F2847] text-white pt-16 pb-8 relative overflow-hidden">
      <AnimatedCompass />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Logo & Info */}
          <div className="flex flex-col items-start space-y-6">
            <div className="w-full max-w-[240px] flex justify-start">
              <Image 
                src="/assets/images/Logo-nobg.png" 
                alt="New Investors" 
                width={220} 
                height={90} 
                className="object-contain"
                style={{ 
                  filter: "drop-shadow(0px 0px 1px rgba(255,255,255,1)) drop-shadow(0px 0px 12px rgba(255,255,255,0.6))"
                }}
              />
            </div>
            <p className="text-gray-300 max-w-sm">
              {tCommon('brandName')} - {tContact('description').substring(0, 100)}...
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-[#C5A869] text-xl font-bold mb-6">{tCommon('quickLinks')}</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-[#C5A869] transition-colors flex items-center gap-2">
                  <span className="text-[#C5A869] text-lg font-bold">›</span>
                  <span>{tNav('home')}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C5A869] transition-colors flex items-center gap-2">
                  <span className="text-[#C5A869] text-lg font-bold">›</span>
                  <span>{tNav('about')}</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#C5A869] transition-colors flex items-center gap-2">
                  <span className="text-[#C5A869] text-lg font-bold">›</span>
                  <span>{tNav('contact')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div>
            <h3 className="text-[#C5A869] text-xl font-bold mb-6">{tCommon('contactWithUs')}</h3>
            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="text-[#C5A869] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-300" dir="ltr">{tContact('locationValue')}</span>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="text-[#C5A869] flex-shrink-0" size={20} />
                <a href="mailto:info@newinvestgroup.ly" className="text-gray-300 hover:text-white transition-colors" dir="ltr">
                  info@newinvestgroup.ly
                </a>
              </div>

              {/* Phones */}
              <div className="flex items-start gap-3 pt-2">
                <Phone className="text-[#C5A869] flex-shrink-0 mt-1" size={20} />
                <div className="flex flex-col space-y-3 w-full">
                  
                  {/* Phone 1 */}
                  <div className="flex items-center gap-3 w-full max-w-xs">
                    <span dir="ltr" className="text-gray-300 font-medium">+218 92 429 5050</span>
                    <a href="https://wa.me/218924295050" target="_blank" rel="noreferrer" className="text-[#25D366] hover:text-[#1ebd5a] transition-colors" aria-label="Contact via WhatsApp">
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>
                  
                  {/* Phone 2 */}
                  <div className="flex items-center gap-3 w-full max-w-xs">
                    <span dir="ltr" className="text-gray-300 font-medium">+218 91 614 1616</span>
                    <a href="https://wa.me/218916141616" target="_blank" rel="noreferrer" className="text-[#25D366] hover:text-[#1ebd5a] transition-colors" aria-label="Contact via WhatsApp">
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Phone 3 */}
                  <div className="flex items-center gap-3 w-full max-w-xs">
                    <span dir="ltr" className="text-gray-300 font-medium">+218 92 211 7555</span>
                    <a href="https://wa.me/218922117555" target="_blank" rel="noreferrer" className="text-[#25D366] hover:text-[#1ebd5a] transition-colors" aria-label="Contact via WhatsApp">
                      <WhatsAppIcon className="w-5 h-5" />
                    </a>
                  </div>

                  {/* Phone 4 (Phone Only) */}
                  <div className="flex items-center gap-3 w-full max-w-xs">
                    <span dir="ltr" className="text-gray-300 font-medium">+218 91 552 0267</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 pt-6 mt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} {tCommon('brandName')}. {tCommon('allRightsReserved')}</p>
          <p className="flex items-center gap-1.5">
            {tCommon('developedBy')}
            <a href="https://api.whatsapp.com/send/?phone=218916808225" target="_blank" rel="noreferrer" className="text-[#C5A869] hover:text-white font-bold transition-colors">
              ZeroNux Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
