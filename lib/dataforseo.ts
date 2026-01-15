// DataForSEO API client
//
// Uses: /v3/dataforseo_labs/google/ranked_keywords/live
// Returns: top 15 keywords by search volume with AI Overview status

import type { AiOverviewStatus } from './types';

export interface KeywordResult {
  keyword: string;
  searchVolume: number;
  position: number;
  aiOverviewStatus: AiOverviewStatus;
  hasAiOverview: boolean;
}

export interface DataForSEOResponse {
  rawResponse: any; // Complete raw API response
  keywords: KeywordResult[]; // Parsed keywords
}

const isDev = process.env.NODE_ENV === 'development';

export async function getKeywordsWithAioStatus(
  domain: string
): Promise<DataForSEOResponse> {
  const username = process.env.DATAFORSEO_LOGIN;
  const password = process.env.DATAFORSEO_PASSWORD;

  if (!username || !password) {
    throw new Error('DataForSEO credentials not configured');
  }

  if (isDev) console.log('[DataForSEO] Starting request for domain:', domain);

  // Create Basic Auth header
  const auth = Buffer.from(`${username}:${password}`).toString('base64');

  const requestBody = [
    {
      target: domain,
      location_code: 2840, // United States
      language_code: 'en',
      limit: 50, // Get top 50, we'll filter/sort ourselves
    },
  ];

  if (isDev) console.log('[DataForSEO] Request body:', JSON.stringify(requestBody, null, 2));

  const response = await fetch(
    'https://api.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live',
    {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }
  );

  if (isDev) console.log('[DataForSEO] Response status:', response.status, response.statusText);

  if (!response.ok) {
    const errorText = await response.text();
    if (isDev) console.error('[DataForSEO] Error response:', errorText);
    throw new Error(`DataForSEO API error: ${response.statusText}`);
  }

  const data = await response.json();
  if (isDev) console.log('[DataForSEO] Full response:', JSON.stringify(data, null, 2));

  // Store the raw response EXACTLY as received
  const rawResponse = data;

  // Check for API errors
  if (data.status_code !== 20000) {
    if (isDev) console.error('[DataForSEO] API error code:', data.status_code, data.status_message);
    throw new Error(`DataForSEO error: ${data.status_message}`);
  }

  // Extract keywords from response
  const tasks = data.tasks || [];
  if (isDev) console.log('[DataForSEO] Tasks count:', tasks.length);

  if (tasks.length === 0 || !tasks[0].result) {
    if (isDev) console.warn('[DataForSEO] No tasks or result in response');
    return {
      rawResponse: rawResponse,
      keywords: [],
    };
  }

  if (isDev) console.log('[DataForSEO] Task result:', JSON.stringify(tasks[0].result, null, 2));

  const items = tasks[0].result[0]?.items || [];
  if (isDev) console.log('[DataForSEO] Items count:', items.length);

  if (items.length > 0) {
    if (isDev) console.log('[DataForSEO] First item sample:', JSON.stringify(items[0], null, 2));
  }

  // Map to KeywordResult format
  const keywords = items.map((item: any) => {
    const aiStatus = checkForAiOverview(item);

    if (isDev && aiStatus !== 'safe') {
      console.log(`[DataForSEO] AI Overview ${aiStatus} for keyword:`, item.keyword_data.keyword);
    }

    return {
      keyword: item.keyword_data.keyword,
      searchVolume: item.keyword_data.keyword_info.search_volume || 0,
      position: item.ranked_serp_element.serp_item.rank_absolute || 0,
      aiOverviewStatus: aiStatus,
      hasAiOverview: aiStatus !== 'safe', // true if referenced OR stolen
    };
  });

  if (isDev) console.log('[DataForSEO] Parsed keywords:', keywords.length, 'keywords');
  if (isDev) console.log('[DataForSEO] Keywords with AI Overview:', keywords.filter((k: KeywordResult) => k.hasAiOverview).length);

  // Sort by search volume (descending) and take top 15
  const sortedKeywords = keywords
    .sort((a: KeywordResult, b: KeywordResult) => b.searchVolume - a.searchVolume)
    .slice(0, 15);

  if (isDev) console.log('[DataForSEO] Returning top 15 keywords by search volume');

  return {
    rawResponse: rawResponse,
    keywords: sortedKeywords,
  };
}

// Helper function to detect AI Overview
// Based on DataForSEO documentation: https://docs.dataforseo.com/v3/dataforseo_labs/google/ranked_keywords/live/
function checkForAiOverview(item: any): AiOverviewStatus {
  // Check if AI Overview appears in SERP for this keyword
  const serpItemTypes = item.keyword_data?.serp_info?.serp_item_types || [];
  const hasAiOverviewInSerp = serpItemTypes.includes('ai_overview');

  // Check if domain is referenced IN the AI Overview
  const serpItemType = item.ranked_serp_element?.serp_item?.type;
  const isReferencedInAiOverview = serpItemType === 'ai_overview_reference';

  // Determine status based on both checks
  if (!hasAiOverviewInSerp) {
    return 'safe'; // No AI Overview at all
  }

  if (isReferencedInAiOverview) {
    return 'referenced'; // AI Overview present + domain cited
  }

  return 'stolen'; // AI Overview present + NOT referenced
}
