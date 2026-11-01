import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { VideoModalProvider } from '@/components/VideoModal';

export const metadata: Metadata = {
  title: 'Draft n Build — Social Content for Ecommerce & Retail',
  description:
    'A founder-led creative studio for ecommerce and retail brands. Content ideas, scripts, video editing, and scheduling, led by Ali Ammar.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VideoModalProvider>
          <Nav />
          {children}
          <Footer />
        </VideoModalProvider>
      </body>
    </html>
  );
}