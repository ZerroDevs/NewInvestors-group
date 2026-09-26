"use client";

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import { Menu, X, Home, Info, Phone, Globe, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position immediately upon hydration
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const switchLocale = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    router.replace(pathname, { locale: nextLocale });
  };

  const navLinks = [
    { href: '/', label: t('home'), icon: Home },
    { href: '/about', label: t('about'), icon: Info },
    { href: '/contact', label: t('contact'), icon: Phone }
  ];

  const isTransparent = !isScrolled;

  return (
    <>
      <header className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
      isTransparent 
        ? "bg-transparent border-transparent py-3 md:py-4" 
        : "bg-white/85 md:bg-white/70 dark:bg-[#0B132B]/80 backdrop-blur-xl backdrop-saturate-150 shadow-sm border-white/20 dark:border-gray-800/50 py-2 md:py-3"
    )}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image 
              src={isTransparent ? "/assets/images/Logo-nobg.png" : "/assets/images/Logo-nobg.png"} 
              alt="New Investors Logo" 
              width={260} 
              height={85} 
              className={clsx(
                "object-contain h-16 md:h-[85px] w-auto transition-all scale-110 md:scale-[1.25] origin-left rtl:origin-right -my-4",
                "dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.5)]"
              )}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 md:gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={clsx(
                  "font-bold text-lg transition-all hover:-translate-y-0.5",
                  isTransparent 
                    ? (pathname === link.href ? "text-[#C5A869]" : "text-white/90 hover:text-white")
                    : (pathname === link.href ? "text-[#C5A869]" : "text-[#0F2847] dark:text-white/90 hover:text-[#C5A869] dark:hover:text-[#C5A869]")
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle isTransparent={isTransparent} />
            <button 
              onClick={switchLocale}
              className={clsx(
                "px-5 py-2.5 rounded-full border-2 font-bold transition-all shadow-sm hover:shadow-md",
                isTransparent
                  ? "border-white/80 text-white hover:bg-white hover:text-[#0F2847]"
                  : "border-[#0F2847] text-[#0F2847] hover:bg-[#0F2847] hover:text-white dark:border-white/80 dark:text-white/90 dark:hover:bg-white dark:hover:text-[#0F2847]"
              )}
            >
              {locale === 'en' ? 'عربي' : 'EN'}
            </button>
          </div>

          {/* Mobile Actions Toggle Button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle isTransparent={isTransparent} />
            <button 
              className={clsx(
                "p-2 rounded-lg transition-colors",
                isTransparent ? "text-white hover:bg-white/20" : "text-[#0F2847] bg-gray-50 hover:bg-gray-100 dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              )}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
      </header>

      {/* Enhanced Mobile Menu Drawer (Moved outside header to avoid backdrop-filter stacking context bugs) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="md:hidden">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#0F2847]/60 backdrop-blur-sm z-[9998]"
            />

            {/* Drawer */}
            <motion.div 
              initial={{ x: locale === 'ar' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: locale === 'ar' ? '100%' : '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 bottom-0 start-0 w-[85%] max-w-sm bg-gray-100 dark:bg-[#111827] shadow-2xl z-[9999] flex flex-col"
            >
              <div className="p-6 flex justify-between items-center">
                <Image 
                  src="/assets/images/Logo-nobg.png" 
                  alt="Logo" 
                  width={200} 
                  height={65} 
                  className="h-10 w-auto" 
                />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className="text-gray-500 hover:text-[#0F2847] dark:hover:text-white bg-white dark:bg-gray-800 p-2 rounded-full shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>
              
              <div className="flex flex-col p-6 gap-4 overflow-y-auto flex-1 mt-4">
                {/* Regular Links (excluding Contact for the big button) */}
                {navLinks.filter(link => link.href !== '/contact').map((link) => {
                  const Icon = link.icon;
                  const isActive = pathname === link.href;
                  return (
                    <Link 
                      key={link.href} 
                      href={link.href}
                      className={clsx(
                        "text-lg font-bold py-4 px-5 rounded-2xl flex items-center gap-4 transition-all",
                        isActive 
                          ? "bg-[#C5A869]/10 text-[#C5A869]" 
                          : "text-[#0F2847] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon size={22} className={isActive ? "text-[#C5A869]" : "text-gray-400"} />
                      {link.label}
                    </Link>
                  );
                })}

                {/* Big Contact Button */}
                <div className="mt-12">
                  <Link 
                    href="/contact"
                    className="w-full py-4 rounded-xl bg-[#0F2847] text-white font-bold text-lg flex items-center justify-center shadow-lg shadow-[#0F2847]/20 hover:bg-[#0a1b30] transition-all transform hover:-translate-y-0.5"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('contact')}
                  </Link>
                </div>

                {/* Settings Pills */}
                <div className="flex items-center gap-4 mt-6">
                  <button 
                    onClick={() => {
                      switchLocale();
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 py-3 bg-white dark:bg-gray-800 rounded-full font-bold text-[#0F2847] dark:text-white flex items-center justify-center gap-2 shadow-sm text-sm"
                  >
                    <Globe size={18} className="text-gray-500" />
                    {locale === 'en' ? 'العربية' : 'English'}
                  </button>

                  <button 
                    onClick={() => {
                      setTheme(isDark ? 'light' : 'dark');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex-1 py-3 bg-white dark:bg-gray-800 rounded-full font-bold text-[#0F2847] dark:text-white flex items-center justify-center gap-2 shadow-sm text-sm"
                  >
                    {isDark ? (
                      <><Sun size={18} className="text-gray-500" /> Light Mode</>
                    ) : (
                      <><Moon size={18} className="text-gray-500" /> Dark Mode</>
                    )}
                  </button>
                </div>
              </div>

              {/* Social Footer */}
              <div className="p-8 flex justify-center mt-auto">
                <a href="https://wa.me/218924295050" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#C5A869] bg-white dark:bg-gray-800 p-4 rounded-full shadow-md flex items-center justify-center transition-colors transform hover:scale-105">
                  <Phone size={24} />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
