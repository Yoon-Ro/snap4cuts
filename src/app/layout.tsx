import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'snap4cuts',
  description: 'Create fun, nostalgic photo booth strips instantly! Capture 4 perfect moments and turn them into beautiful memories you can share and cherish. Your virtual photo booth experience awaits! 📸✨',
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