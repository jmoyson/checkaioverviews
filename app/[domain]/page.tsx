import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ResultsList } from '@/components/results-list';
import { ShareButtons } from '@/components/share-buttons';
import { StatCard } from '@/components/stat-card';

interface Props {
  params: Promise<{ domain: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain } = await params;

  return {
    title: `${domain} - AI Overview Analysis`,
    description: `See which of ${domain}'s ranking keywords are affected by Google's AI Overviews`,
    openGraph: {
      title: `${domain} - AI Overview Analysis`,
      description: `Check which keywords trigger AI Overviews for ${domain}`,
      images: [`/api/og/${domain}`],
    },
  };
}

export default async function ResultsPage({ params }: Props) {
  const { domain } = await params;

  // Fetch scan data from API
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/check`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ domain }),
      cache: 'no-store', // Always fetch fresh
    }
  );

  if (!response.ok) {
    notFound();
  }

  const data = await response.json();

  const stolenCount = data.keywords.filter((k: any) => k.aiOverviewStatus === 'stolen').length;
  const referencedCount = data.keywords.filter((k: any) => k.aiOverviewStatus === 'referenced').length;
  const safeCount = data.keywords.filter((k: any) => k.aiOverviewStatus === 'safe').length;
  const impactPercentage = data.stats.total > 0
    ? Math.round((data.stats.withAIO / data.stats.total) * 100)
    : 0;

  // Handle empty results
  if (data.stats.total === 0) {
    return (
      <main className="min-h-screen bg-gray-50 py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-6">
              <span className="text-sm text-gray-600">{domain}</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              No Ranking Keywords Found
            </h1>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-gray-200">
            <p className="text-lg text-gray-700 mb-4">
              We couldn&apos;t find any ranking keywords for this domain.
            </p>
            <p className="text-gray-600 mb-4">This could mean:</p>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>The domain is new or has low rankings in search results</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>The domain doesn&apos;t rank in US English results (we currently only track US/English)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-1">•</span>
                <span>There might be a temporary issue with our data provider</span>
              </li>
            </ul>
            <div className="text-center">
              <a
                href="/"
                className="inline-block px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition"
              >
                Try Another Domain
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 mb-6">
            <span className="text-sm text-gray-600">{domain}</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {impactPercentage}% of Your Traffic
            <br />
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              at Risk
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            {data.stats.withAIO} out of {data.stats.total} keywords affected by AI Overviews
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <StatCard status="stolen" count={stolenCount} description="No credit given" />
          <StatCard status="referenced" count={referencedCount} description="You're cited" />
          <StatCard status="safe" count={safeCount} description="Full traffic" />
        </div>

        {/* Results */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Keyword Breakdown</h2>
          <ResultsList keywords={data.keywords} />
        </div>

        {/* Share Section */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Share Your Results</h2>
          <p className="text-gray-600 mb-6">Help others discover how AI is affecting their traffic</p>
          <ShareButtons
            domain={domain}
            stolenCount={data.stats.withAIO}
            totalCount={data.stats.total}
          />
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-400">
            Questions?{' '}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-700 transition-colors underline decoration-dotted"
            >
              @yourusername
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
