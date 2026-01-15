import { Target, TrendingUp, AlertTriangle, BarChart3, Zap, ExternalLink } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export const benefits: Benefit[] = [
  {
    icon: Target,
    title: 'Identify Safe Keywords',
    description: 'Discover which of your ranking keywords are safe from AI Overviews. Focus your content efforts where they actually drive traffic.',
  },
  {
    icon: TrendingUp,
    title: 'Optimize Your Strategy',
    description: 'Know exactly which content to double down on and which keywords to pivot away from. Make data-driven decisions.',
  },
  {
    icon: AlertTriangle,
    title: 'Spot Risk Early',
    description: 'See which keyword types are most affected (how-to, definitions, comparisons) and adjust before you lose traffic.',
  },
  {
    icon: BarChart3,
    title: 'Benchmark Your Domain',
    description: 'Compare your AI Overview exposure against industry averages. Understand if you\'re above or below the danger zone.',
  },
  {
    icon: Zap,
    title: 'Stop Wasting Time',
    description: 'Get actionable insights in 5 seconds instead of manually checking hundreds of keywords. Focus on creating content, not research.',
  },
  {
    icon: ExternalLink,
    title: 'Know Your Next Move',
    description: 'After scanning, we show you exactly what to do next—whether it\'s pivoting content or getting cited in AI Overviews with Outrank.',
  },
];

export const faqs: FAQ[] = [
  {
    q: "What is Google AI Overview?",
    a: "AI Overviews are Google's AI-generated answers that appear at the top of search results, often replacing traditional organic listings. They summarize information from multiple sources, potentially reducing clicks to your site."
  },
  {
    q: "Why should I care?",
    a: "If your keywords trigger AI Overviews, users get their answers directly on Google without clicking through to your site. This means less traffic, fewer conversions, and lower revenue despite maintaining your rankings."
  },
  {
    q: "How accurate is this data?",
    a: "We use DataForSEO's real-time SERP analysis to check your top-ranking keywords. The data is as current as Google's latest search results, updated within 24 hours."
  },
  {
    q: "What should I do if my keywords are affected?",
    a: "Focus on keywords with lower AI Overview presence, create content that's harder to summarize (in-depth analyses, unique data), or target transactional queries where users need to click through."
  },
  {
    q: "Is this tool free?",
    a: "Yes, completely free. No signup required. Enter your domain and get instant results."
  },
  {
    q: "How often should I check?",
    a: "Google's AI Overview coverage is expanding rapidly. We recommend checking monthly to track changes and adjust your content strategy accordingly."
  },
];
