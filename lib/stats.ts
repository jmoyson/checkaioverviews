/**
 * Stats calculation from cached scans
 * Uses existing `scans` table
 */

import { supabaseAdmin } from './supabase';
import { preSeedDomains, categories } from './pre-seed-domains';

export interface Stats {
  totalDomains: number;
  totalKeywords: number;
  avgAffectedPercent: number;
  categories: CategoryStat[];
  topDomains: DomainStat[];
  keywordPatterns: KeywordPattern[];
}

export interface CategoryStat {
  name: string;
  affectedPercent: number;
  domainsCount: number;
}

export interface DomainStat {
  domain: string;
  category: string;
  affectedPercent: number;
  affectedCount: number;
  totalCount: number;
}

export interface KeywordPattern {
  pattern: string;
  affectedPercent: number;
  examples: string[];
  emoji: string;
  description: string;
}

/**
 * Get stats (mocked for now, will fetch from scans table later)
 */
export async function getStats(): Promise<Stats> {
  // TODO: Later, fetch from scans table after running pre-seed scan
  // For now, just return mock data
  return getMockStats();
}

/**
 * Mock stats (placeholder data for landing page)
 */
function getMockStats(): Stats {
  return {
    totalDomains: 235,
    totalKeywords: 10000,
    avgAffectedPercent: 67,
    categories: [
      { name: 'Health & Fitness', affectedPercent: 78, domainsCount: 30 },
      { name: 'Personal Finance', affectedPercent: 71, domainsCount: 25 },
      { name: 'How-To Content', affectedPercent: 68, domainsCount: 25 },
      { name: 'Food & Recipes', affectedPercent: 65, domainsCount: 15 },
      { name: 'SEO Tools', affectedPercent: 34, domainsCount: 25 },
    ],
    topDomains: [
      { domain: 'healthline.com', category: 'Health', affectedPercent: 87, affectedCount: 44, totalCount: 50 },
      { domain: 'webmd.com', category: 'Health', affectedPercent: 82, affectedCount: 41, totalCount: 50 },
      { domain: 'wikihow.com', category: 'How-To', affectedPercent: 79, affectedCount: 40, totalCount: 50 },
      { domain: 'investopedia.com', category: 'Finance', affectedPercent: 76, affectedCount: 38, totalCount: 50 },
      { domain: 'ahrefs.com', category: 'SEO Tools', affectedPercent: 60, affectedCount: 9, totalCount: 15 },
    ],
    keywordPatterns: [
      {
        pattern: '"How to..." queries',
        affectedPercent: 84,
        examples: ['how to lose weight', 'how to invest money', 'how to cook chicken'],
        emoji: '🎯',
        description: 'Step-by-step instructional queries are heavily impacted',
      },
      {
        pattern: '"What is..." questions',
        affectedPercent: 79,
        examples: ['what is SEO', 'what is bitcoin', 'what is healthy eating'],
        emoji: '❓',
        description: 'Definition and explanation queries show AI Overviews first',
      },
      {
        pattern: '"Best..." comparisons',
        affectedPercent: 71,
        examples: ['best protein powder', 'best credit cards', 'best travel tips'],
        emoji: '⭐',
        description: 'Comparison and recommendation queries increasingly affected',
      },
      {
        pattern: 'Definition queries',
        affectedPercent: 68,
        examples: ['protein powder benefits', 'credit score meaning', 'calorie definition'],
        emoji: '📖',
        description: 'Simple informational queries often trigger AI summaries',
      },
    ],
  };
}
