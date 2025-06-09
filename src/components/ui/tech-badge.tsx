'use client';

import { ReactNode, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export function TechBadge({ icon, name, description }: TechBadgeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-100px 0px' });

  const badgeVariants = {
    initial: {
      borderColor: 'rgba(37, 99, 235, 0)', // blue-600 transparent
    },
    visible: {
      borderColor: 'rgba(37, 99, 235, 1)', // blue-600 opaque
    },
  };

  return (
    <motion.div
      ref={ref}
      className={cn('flex items-center gap-3 rounded-lg bg-neutral-800/80 border px-4 py-3 shadow', 'min-w-[180px]')}
      variants={badgeVariants}
      initial="initial"
      animate={isInView ? 'visible' : 'initial'}
      transition={{ duration: 0.5 }}
      whileHover={{
        borderColor: 'rgba(59, 130, 246, 1)', // blue-500
        backgroundColor: 'rgba(64, 64, 64, 0.8)', // neutral-700/80
      }}>
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-semibold text-white leading-tight">{name}</div>
        <div className="text-xs text-neutral-300 leading-tight">{description}</div>
      </div>
    </motion.div>
  );
}
