import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

import { SpeedInsights } from '@vercel/speed-insights/next';
import { css } from '../../styled-system/css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NextApp Prpject',
  description: 'Test NextApp Project',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={css({
            height: '100vh',
            flexDir: 'column',
            overflow: 'hidden',
          })}
        >
          <Header />
          <div className={css({ height: '92vh', overflow: 'auto' })}>
            {children}
            <SpeedInsights />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
