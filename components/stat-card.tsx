// Reusable stat card component for results page
import type { AiOverviewStatus } from '@/lib/types';

interface StatCardProps {
  status: AiOverviewStatus;
  count: number;
  description: string;
}

const statusConfig = {
  stolen: {
    border: 'border-red-200',
    dot: 'bg-red-500',
    label: 'Stolen',
    textColor: 'text-red-700',
  },
  referenced: {
    border: 'border-yellow-200',
    dot: 'bg-yellow-500',
    label: 'Referenced',
    textColor: 'text-yellow-700',
  },
  safe: {
    border: 'border-green-200',
    dot: 'bg-green-500',
    label: 'Safe',
    textColor: 'text-green-700',
  },
} as const;

export function StatCard({ status, count, description }: StatCardProps) {
  const config = statusConfig[status];

  return (
    <div className={`bg-white rounded-xl p-6 border ${config.border}`}>
      <div className="flex items-center gap-3 mb-2">
        <div className={`w-2 h-2 rounded-full ${config.dot}`} />
        <span className={`text-sm font-medium ${config.textColor}`}>
          {config.label}
        </span>
      </div>
      <div className="text-3xl font-bold text-gray-900">{count}</div>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
    </div>
  );
}
