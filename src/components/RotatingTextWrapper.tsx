'use client';

import dynamic from 'next/dynamic';

const RotatingText = dynamic(() => import('./RotatingText'), {
  ssr: false,
});

export default function RotatingTextWrapper() {
  return <RotatingText />;
}
