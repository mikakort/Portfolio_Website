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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-EP3Y8B1S85"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-EP3Y8B1S85');
            `,
          }}
        />
      </head>
      <body className="font-inter bg-black">{children}</body>
    </html>
  );
}
