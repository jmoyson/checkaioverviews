import type { Keyword } from '@/lib/types';
import { StatusBadge } from './status-badge';

export interface ResultsListProps {
  keywords: Keyword[];
}

// Card styling based on status
const cardStyles = {
  stolen: 'bg-white hover:bg-red-50 border-red-200',
  referenced: 'bg-white hover:bg-yellow-50 border-yellow-200',
  safe: 'bg-white hover:bg-green-50 border-green-200',
} as const;

export function ResultsList({ keywords }: ResultsListProps) {
  // Sort: Stolen first, then Referenced, then Safe, within each group by search volume
  const sorted = [...keywords].sort((a, b) => {
    const statusOrder = { stolen: 0, referenced: 1, safe: 2 };
    const aOrder = statusOrder[a.aiOverviewStatus];
    const bOrder = statusOrder[b.aiOverviewStatus];

    if (aOrder !== bOrder) return aOrder - bOrder;
    return b.searchVolume - a.searchVolume;
  });

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {sorted.map((kw) => (
        <div
          key={kw.keyword}
          className={`group p-5 rounded-xl border transition-all duration-200 hover:shadow-md ${cardStyles[kw.aiOverviewStatus]}`}
        >
          <div className="flex items-start justify-between gap-3 mb-4">
            <h3 className="font-medium text-gray-900 leading-snug flex-1">
              {kw.keyword}
            </h3>
            <StatusBadge status={kw.aiOverviewStatus} />
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>{kw.searchVolume.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
              <span>#{kw.position}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
