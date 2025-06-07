import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { ClerkProvider } from '@clerk/nextjs';

import { ThemeProvider } from '@/components/navbar/components/theme-provider';
import Navbar from '@/components/navbar/navbar';
import { Toaster } from '@/components/ui/sonner';
import { SITE_DESCRIPTION, SITE_NAME } from '@/constants/constants';

import './globals.css';

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  // Replace with your actual domain
  alternates: {
    canonical: '/',
  },

  authors: [{ name: 'Salt Stay Team' }],

  category: 'Travel & Tourism',

  creator: SITE_NAME,

  description:
    'Discover and book beautiful beach and seaside vacation rentals. Find your perfect coastal getaway with Salt Stay - where ocean views meet luxury.',

  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },

  keywords: [
    'beach rentals',
    'seaside vacation',
    'ocean view rentals',
    'coastal properties',
    'beach house rental',
    'vacation rentals',
    'holiday homes',
    'beachfront accommodation',
  ],

  metadataBase: new URL('https://saltstay.co.za'),
  openGraph: {
    description:
      'Discover and book beautiful beach and seaside vacation rentals. Find your perfect coastal getaway with Salt Stay.',

    images: [
      {
        alt: SITE_DESCRIPTION,
        height: 630,

        url: '/og-image.jpg',
        // Add your Open Graph image
        width: 1200,
      },
    ],

    locale: 'en_US',
    // Replace with your actual domain
    siteName: SITE_NAME,
    title: SITE_DESCRIPTION,
    type: 'website',
    url: 'https://saltstay.co.za',
  },
  publisher: SITE_NAME,
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: {
    default: SITE_DESCRIPTION,
    template: '%s | Salt Stay',
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you have it
    // yandex: 'your-yandex-verification-code', // Add if needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute='class'
            defaultTheme='system'
          >
            <Navbar />
            <main className='container py-10'>{children}</main>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
