import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Gonnsen Tech — Your ideas. Built to work.',
  description: 'We design websites, build business CRM systems, and automate the work that slows you down. Professional web design, CRM rentals, n8n automation, branding, hosting, and technical maintenance for Egypt and global markets.',
  keywords: [
    'Gonnsen Tech',
    'web design Egypt',
    'custom web development Cairo',
    'CRM software rental Egypt',
    'CRM purchase and customization',
    'n8n workflow automation',
    'business process automation Egypt',
    'branding and graphic design',
    'web hosting and VPS Egypt',
    'website maintenance support'
  ],
  authors: [{name: 'Gonnsen Tech'}],
  openGraph: {
    title: 'Gonnsen Tech — Your ideas. Built to work.',
    description: 'We design websites, build business systems, and automate the work that slows you down.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_EG'],
    siteName: 'Gonnsen Tech',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gonnsen Tech — Your ideas. Built to work.',
    description: 'We design websites, build business systems, and automate the work that slows you down.',
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

