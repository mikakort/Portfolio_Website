import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Mikaël Kortbaoui | Fintech Portfolio',
  description:
    'Portfolio of Mikaël Kortbaoui, a student and developer specializing in fintech, AI, and software engineering.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter bg-gray-50 dark:bg-gray-900">{children}</body>
    </html>
  );
}
