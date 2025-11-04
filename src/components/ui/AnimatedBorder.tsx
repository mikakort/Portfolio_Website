'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function AnimatedBorder({ children, className, delay = 0, duration = 1 }: AnimatedBorderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  const borderVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1 },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref} className={cn('relative bg-neutral-900/80 rounded-lg', className)}>
      <motion.div
        className="p-4"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{
          duration: isInView ? 0.5 : 0.2,
          delay: isInView ? delay + 0.2 : 0,
        }}>
        {children}
      </motion.div>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx="7" // rounded-lg is 8px, so 8-1=7 for the inner radius
          stroke="rgba(59, 130, 246, 1)" // blue-500
          strokeWidth="2"
          variants={borderVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{
            duration: isInView ? duration : duration * 0.3,
            delay: isInView ? delay : 0,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}
