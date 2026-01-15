import { AlertTriangle, Shield } from 'lucide-react';
import type { Stats } from '@/lib/stats';

interface InsightsSectionProps {
  stats: Stats | null;
}

export function InsightsSection({ stats }: InsightsSectionProps) {
  return (
    <section className="relative py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight">
            Key Insights from Our Data
          </h2>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Patterns discovered from analyzing {stats?.totalKeywords.toLocaleString() || '10,000'}+ keywords across {stats?.totalDomains || 235}+ domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Most Affected */}
          <div className="bg-white border-2 border-[#FF4500] p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FF4500]/10 border-2 border-[#FF4500] flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-[#FF4500]" />
              </div>
              <h3 className="text-xl font-black text-black">Most Affected</h3>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-[#FF4500] pl-4">
                <div className="font-bold text-base text-black mb-1">"How to..." queries</div>
                <div className="text-2xl font-black text-[#FF4500] mb-2">84%</div>
                <p className="text-sm text-black/60">
                  Step-by-step guides are heavily impacted. Pivot to more specific, niche variations.
                </p>
              </div>

              <div className="border-l-4 border-[#FF4500]/60 pl-4">
                <div className="font-bold text-base text-black mb-1">"What is..." questions</div>
                <div className="text-2xl font-black text-[#FF4500]/80 mb-2">79%</div>
                <p className="text-sm text-black/60">
                  Definition queries almost always show AI. Target advanced topics requiring expertise.
                </p>
              </div>

              <div className="border-l-4 border-[#FF4500]/40 pl-4">
                <div className="font-bold text-base text-black mb-1">"Best..." comparisons</div>
                <div className="text-2xl font-black text-[#FF4500]/60 mb-2">71%</div>
                <p className="text-sm text-black/60">
                  Recommendations are increasingly affected. Add unique data and personal testing.
                </p>
              </div>
            </div>
          </div>

          {/* Safer Zones */}
          <div className="bg-white border-2 border-black/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black/5 border-2 border-black/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-black text-black">Safer Zones</h3>
            </div>

            <div className="space-y-4">
              <div className="border-l-4 border-black/30 pl-4">
                <div className="font-bold text-base text-black mb-1">Transactional queries</div>
                <div className="text-2xl font-black text-black mb-2">30%</div>
                <p className="text-sm text-black/60">
                  "Buy", "download", "sign up" keywords remain clickable. Users need to take action.
                </p>
              </div>

              <div className="border-l-4 border-black/20 pl-4">
                <div className="font-bold text-base text-black mb-1">Long-tail specific</div>
                <div className="text-2xl font-black text-black/80 mb-2">35%</div>
                <p className="text-sm text-black/60">
                  Highly specific queries are harder for AI to summarize. Target niche topics.
                </p>
              </div>

              <div className="border-l-4 border-black/10 pl-4">
                <div className="font-bold text-base text-black mb-1">Original research</div>
                <div className="text-2xl font-black text-black/60 mb-2">20%</div>
                <p className="text-sm text-black/60">
                  Proprietary data and unique insights can't be easily summarized. Create more of this.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-black/50 max-w-3xl mx-auto">
            💡 <strong>Key Takeaway:</strong> Keywords with AI Overviews still rank #1-3, but get 40-60% fewer clicks on average. The solution isn't to stop ranking—it's to rank for the right keywords.
          </p>
        </div>
      </div>
    </section>
  );
}
