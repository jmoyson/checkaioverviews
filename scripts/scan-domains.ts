/**
 * Simple Pre-Seed Scanner
 *
 * Just loops through domains and calls /api/check
 * Results automatically cached in existing `scans` table
 *
 * Usage: npx tsx scripts/scan-domains.ts
 */

import { getDomainsToScan, budgetConfig } from '../lib/pre-seed-domains';

const API_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
const DELAY_MS = 2000; // 2 seconds between requests

async function scanDomain(domain: string): Promise<boolean> {
  try {
    console.log(`Scanning ${domain}...`);

    const response = await fetch(`${API_URL}/api/check`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ domain }),
    });

    if (!response.ok) {
      console.error(`  ❌ Failed: ${response.statusText}`);
      return false;
    }

    const data = await response.json();
    const affected = data.keywords?.filter((k: any) => k.hasAiOverview).length || 0;
    const total = data.keywords?.length || 0;
    const percent = total > 0 ? Math.round((affected / total) * 100) : 0;

    console.log(`  ✅ ${percent}% affected (${affected}/${total})`);
    return true;
  } catch (error) {
    console.error(`  ❌ Error:`, error);
    return false;
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  console.log('🚀 Pre-Seed Domain Scanner\n');
  console.log(`Budget: $${budgetConfig.maxBudget}`);
  console.log(`Cost: $${budgetConfig.costPerDomain}/domain`);
  console.log(`Scanning: ${budgetConfig.domainsToScan} domains`);
  console.log(`Total cost: ~$${budgetConfig.estimatedCost}\n`);

  const domains = getDomainsToScan(budgetConfig.domainsToScan);
  console.log(`📋 ${domains.length} domains loaded\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i];
    const result = await scanDomain(domain.domain);

    if (result) success++;
    else failed++;

    console.log(`Progress: ${i + 1}/${domains.length}\n`);

    // Delay between requests
    if (i < domains.length - 1) {
      await sleep(DELAY_MS);
    }
  }

  console.log('✅ Done!');
  console.log(`Success: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`\nResults cached in database. Ready for landing page.`);
}

main().catch(console.error);
