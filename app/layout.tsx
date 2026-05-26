import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from '@/components/nav/Navbar';
import { Footer } from '@/components/footer/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://reshelvs.com'),
  title: {
    default: 'Reshelvs — the modern shelf for your brands',
    template: '%s · Reshelvs',
  },
  description:
    'Reshelvs is the platform for brands that want to be discovered, organized, and loved. Built for the next decade of commerce.',
  openGraph: {
    type: 'website',
    url: 'https://reshelvs.com',
    siteName: 'Reshelvs',
    images: ['/og/default.png'],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@reshelvs',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="min-h-screen bg-bg text-fg font-sans antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
