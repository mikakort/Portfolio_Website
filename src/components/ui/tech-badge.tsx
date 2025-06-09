import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  icon: ReactNode;
  name: string;
  description: string;
}

export function TechBadge({ icon, name, description }: TechBadgeProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-lg bg-neutral-800/80 border border-neutral-700 px-4 py-3 shadow transition hover:bg-neutral-700/80',
        'min-w-[180px]'
      )}>
      <span className="text-2xl">{icon}</span>
      <div>
        <div className="font-semibold text-white leading-tight">{name}</div>
        <div className="text-xs text-neutral-300 leading-tight">{description}</div>
      </div>
    </div>
  );
}
