import type { Metadata, Viewport } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { VideoModalProvider } from '@/components/VideoModal';

export const metadata: Metadata = {
  title: 'Draft n Build — Video Editing Agency',
  description:
    'Edits built to keep people watching. Gaming, documentary, and B2B video editing, motion graphics, and short-form cuts.',
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