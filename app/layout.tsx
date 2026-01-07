import type { Metadata } from 'next';
import { siteConfig } from '@/lib/siteConfig';
import Navigation from '@/components/Navigation';
import Masthead from '@/components/Masthead';
import Footer from '@/components/Footer';
import Scripts from '@/components/Scripts';
import '@/styles/globals.scss';
import '/public/assets/css/styles_feeling_responsive.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  other: {
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <body id="top-of-page" suppressHydrationWarning>
        <Scripts />
        <Navigation />
        <Masthead />
        {children}
        <Footer />
      </body>
    </html>
  );
}

