// Small reusable status badge component
import type { AiOverviewStatus } from '@/lib/types';

interface StatusBadgeProps {
  status: AiOverviewStatus;
}

const statusConfig = {
  stolen: {
    bg: 'bg-red-100',
    text: 'text-red-700',
    dot: 'bg-red-500',
    label: 'Stolen',
  },
  referenced: {
    bg: 'bg-yellow-100',
    text: 'text-yellow-700',
    dot: 'bg-yellow-500',
    label: 'Referenced',
  },
  safe: {
    bg: 'bg-green-100',
    text: 'text-green-700',
    dot: 'bg-green-500',
    label: 'Safe',
  },
} as const;

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full ${config.bg} ${config.text} whitespace-nowrap`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}
