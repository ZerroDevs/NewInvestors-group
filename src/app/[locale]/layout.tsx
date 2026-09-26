import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Metadata } from 'next';
import { Plus_Jakarta_Sans, Outfit, Alexandria, Geist_Mono } from 'next/font/google';
import '../globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
});

const alexandria = Alexandria({
  subsets: ['arabic', 'latin'],
  variable: '--font-arabic',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

import { Toaster } from 'react-hot-toast';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === 'ar';
  
  const title = isAr ? 'المستثمرون الجدد | التطوير والاستثمار العقاري' : 'New Investors | Real Estate Development';
  const description = isAr 
    ? 'شركة ليبية تعمل في مجال التطوير والاستثمار العقاري، وتركز على تطوير أصول عقارية نوعية.' 
    : 'New Investors is a Libyan company operating in real estate development and investment.';
    
  return {
    title,
    description,
    metadataBase: new URL('https://newinvestgroup.ly'),
    openGraph: {
      title,
      description,
      url: `https://newinvestgroup.ly/${locale}`,
      siteName: isAr ? 'المستثمرون الجدد' : 'New Investors',
      images: [
        {
          url: '/assets/real-estate/dat2.jpg',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === 'ar' ? 'ar_LY' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/assets/real-estate/dat2.jpg'],
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;
  
  if (!(routing.locales as unknown as string[]).includes(locale)) {
    notFound();
  }
  
  setRequestLocale(locale);
  const messages = await getMessages();

  const isAr = locale === 'ar';

  return (
    <html 
      lang={locale} 
      dir={isAr ? 'rtl' : 'ltr'} 
      suppressHydrationWarning 
      className={`${plusJakartaSans.variable} ${outfit.variable} ${alexandria.variable} ${geistMono.variable}`}
    >
      <head />
      <body className={isAr ? 'font-arabic' : 'font-sans'}>
        <ThemeProvider>
          <NextIntlClientProvider messages={messages}>
            <Toaster position="bottom-center" />
            <Header />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
