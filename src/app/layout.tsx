import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mikaël Kortbaoui | Fintech Portfolio',
  description:
    'Portfolio of Mikaël Kortbaoui, a student and developer specializing in fintech, AI, and software engineering.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>{children}</body>
    </html>
  );
}
