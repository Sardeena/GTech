import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Gonnsen Tech — Your business. Our infrastructure.',
  description: 'Enterprise web architecture, CRM/CMS software rentals, custom automation, domains, cloud hosting, VPS, and managed technology services serving Egypt and international markets.',
  keywords: [
    'Gonnsen Tech',
    'enterprise web infrastructure Egypt',
    'custom web development Cairo',
    'managed cloud hosting VPS',
    'CRM software rental',
    'CMS rental Egypt',
    'domain management',
    'business automation'
  ],
  authors: [{name: 'Gonnsen Tech Architecture Group'}],
  openGraph: {
    title: 'Gonnsen Tech — Your business. Our infrastructure.',
    description: 'Enterprise web architecture, CRM/CMS software rentals, cloud hosting, and managed IT infrastructure.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    siteName: 'Gonnsen Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gonnsen Tech — Your business. Our infrastructure.',
    description: 'Enterprise web architecture, software rentals, and cloud hosting for Egypt and global businesses.',
  },
};

export const viewport: Viewport = {
  themeColor: '#101310',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#101310] text-[#EDEDE7] antialiased selection:bg-[#C8FF47] selection:text-[#101310]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

