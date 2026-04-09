import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NEOM Techverse | Premium Digital Marketing Agency',
  description: 'Future-ready digital marketing solutions. SEO, PPC, Web Development, UI/UX Design, Social Media & Content Marketing.',
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