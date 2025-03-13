import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'snap4cuts',
  description: 'Create fun, nostalgic photo booth strips instantly! Capture 4 perfect moments and turn them into beautiful memories you can share and cherish. Your virtual photo booth experience awaits! 📸✨',
  keywords: ['photo booth', 'photo strips', 'digital photo booth', 'photo memories', 'instant photos', 'photo sharing', 'photo collage', 'snap4cuts'],
  metadataBase: new URL('https://snap4cuts.vercel.app'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'snap4cuts - Your Virtual Photo Booth Experience',
    description: 'Create fun, nostalgic photo booth strips instantly! Capture 4 perfect moments and turn them into beautiful memories you can share and cherish.',
    url: 'https://snap4cuts.vercel.app',
    siteName: 'snap4cuts',
    images: [
      {
        url: '/opengraph-image.png', // Make sure to add this image
        width: 1200,
        height: 630,
        alt: 'snap4cuts - Unique photo booth experience',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'snap4cuts - Your Virtual Photo Booth Experience',
    description: 'Create fun, nostalgic photo booth strips instantly! Capture perfect moments to share.',
    images: ['/opengraph-image.png'], // Same image as OpenGraph
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'sIpn2g7DPt9aiIBQo40rHxRjKaNGUs5Uzx6s089v4rI',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
} 