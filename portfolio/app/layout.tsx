import './globals.css';
import Navbar from '@/components/Navbar'; // We will create this next
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import MouseBackground from '@/components/MouseBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ilyass Chahbia | Software Engineer',
  description: 'Portfolio of a 1337 Student.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} relative overflow-x-hidden antialiased selection:bg-orange-500/30 selection:text-orange-200`}>


        <MouseBackground />

        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          {children}
        </main>
      </body>
    </html>
  );
}