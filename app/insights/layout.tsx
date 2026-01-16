import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Overview Insights - ScanAIO',
  description: 'Real data from domains we\'ve scanned. See how Google AI Overviews are impacting different types of content and keywords.',
  openGraph: {
    title: 'AI Overview Insights - ScanAIO',
    description: 'Real data from domains we\'ve scanned. See how Google AI Overviews are impacting different types of content.',
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
