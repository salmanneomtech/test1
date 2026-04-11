import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEOM Techverse | Premium Digital Marketing Agency',
  description: 'Future-ready digital marketing solutions. SEO, PPC, Web Development, UI/UX Design, Social Media & Content Marketing.',
  keywords: ['digital marketing', 'SEO', 'PPC', 'web development', 'UI/UX design', 'social media'],
  authors: [{ name: 'NEOM Techverse' }],
  openGraph: {
    title: 'NEOM Techverse | Premium Digital Marketing Agency',
    description: 'Future-ready digital marketing solutions that elevate brands and drive results.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEOM Techverse',
    description: 'Future-ready digital marketing solutions that elevate brands and drive results.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}