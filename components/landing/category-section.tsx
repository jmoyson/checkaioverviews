import type { Stats } from '@/lib/stats';

interface CategorySectionProps {
  stats: Stats;
}

export function CategorySection({ stats }: CategorySectionProps) {
  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight">
            Category Impact Analysis
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Percentage of domains losing traffic to AI Overviews in each category
          </p>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {stats.categories.map((cat) => (
            <div key={cat.name} className="bg-white border-2 border-black/10 p-6 hover:border-[#FF4500]/30 transition-all">
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <div className="font-bold text-base text-black mb-1">{cat.name}</div>
                  <div className="text-xs text-black/50">{cat.domainsCount} domains analyzed</div>
                </div>
                <div className="text-2xl font-black text-[#FF4500] ml-4">
                  {cat.affectedPercent}%
                </div>
              </div>
              <div className="relative h-3 bg-black/5 border border-black/10">
                <div
                  className="absolute top-0 left-0 h-full bg-[#FF4500] transition-all"
                  style={{ width: `${cat.affectedPercent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/10 text-sm text-black/60">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Data updated within 24 hours
          </div>
        </div>
      </div>
    </section>
  );
}
