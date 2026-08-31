import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lora } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin', 'cyrillic'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin', 'cyrillic'] });
const lora = Lora({ variable: '--font-lora', subsets: ['latin', 'cyrillic'], style: ['normal', 'italic'] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_ORIGIN ?? 'http://localhost:3000'),
  title: 'Roast & Co — кофе свежей обжарки',
  description: 'Городская кофейня с кофе свежей обжарки, выпечкой и тёплой атмосферой.',
  openGraph: {
    title: 'Roast & Co — кофе свежей обжарки',
    description: 'Кофе. Люди. Хорошие паузы.',
    type: 'website',
    images: [{ url: '/og.png', width: 1731, height: 909, alt: 'Roast & Co' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roast & Co — кофе свежей обжарки',
    description: 'Кофе. Люди. Хорошие паузы.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
