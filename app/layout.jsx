import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/shared/CustomCursor';
import ScrollProgress from '@/components/shared/ScrollProgress';
import GradientMeshBg from '@/components/shared/GradientMeshBg';
import ParticlesBackground from '@/components/shared/ParticlesBackground';
import Chatbot from '@/components/chatbot/Chatbot';

export const metadata = {
  metadataBase: new URL('https://omkumargarg.vercel.app'),
  title: {
    default: 'Om Kumar Garg — India Operations Lead | Ecosystem Architect',
    template: '%s | Om Kumar Garg',
  },
  description:
    '30+ agencies. 6,000+ developers. $8,100+ events managed. Om Kumar Garg is India\'s most deployable embedded operations partner for foreign companies. Available immediately.',
  keywords: [
    'India market entry', 'India operations lead', 'ecosystem architect',
    'co-founder India', 'VIT Pune', 'remote India partner', 'full stack developer India',
    'Om Kumar Garg', 'AIDN community', 'SalesVerse',
  ],
  openGraph: {
    title: "Om Kumar Garg — India's Embedded Operations Partner",
    description: 'One person. 30+ agencies. 6,000+ developers. $8,100+ managed. Your India infrastructure from Day 1.',
    url: 'https://omkumargarg.vercel.app',
    siteName: 'Om Kumar Garg',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Om Kumar Garg — India Operations Lead' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Om Kumar Garg — India's Embedded Operations Partner",
    description: '30+ agencies. 6,000+ developers. $8,100+ managed.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Fixed global elements */}
        <CustomCursor />
        <ScrollProgress />
        <GradientMeshBg />
        <ParticlesBackground />

        {/* Layout */}
        <Navbar />
        <main style={{ minHeight: '100vh', position: 'relative', zIndex: 0 }}>
          {children}
        </main>
        <Footer />

        {/* Floating chatbot */}
        <Chatbot />
      </body>
    </html>
  );
}
