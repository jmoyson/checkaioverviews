// Supabase admin client (server-side only)
//
// IMPORTANT: This client uses the service role key which bypasses Row Level Security.
// Only use in API routes and Server Components - never expose to client-side code.
//
// All database operations for this tool happen server-side:
// - Reading cached scans from /api/check
// - Writing new scans from /api/check
// - Reading scan data for OG image generation
//
// No client-side Supabase access is needed since all data flows through our API.

import { createClient } from "@supabase/supabase-js";

// Server-side only client - bypasses RLS for admin operations
export const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

// Database types
export interface Scan {
  id: string;
  domain: string;
  raw_response: unknown;
  keywords_with_aio: number;
  keywords_total: number;
  created_at: string;
}

// Helper functions for cache operations
export async function getCachedScan(domain: string): Promise<Scan | null> {
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const { data, error } = await supabaseAdmin
    .from('scans')
    .select('*')
    .eq('domain', domain)
    .gte('created_at', twentyFourHoursAgo)
    .single();

  if (error) {
    if (error.code === 'PGRST116') {
      // No rows returned - cache miss
      return null;
    }
    console.error('Supabase getCachedScan error:', error);
    throw new Error('Failed to check cache');
  }

  return data;
}

export async function saveScan(
  domain: string,
  rawResponse: unknown,
  keywordsWithAio: number,
  keywordsTotal: number
): Promise<Scan> {
  // Always insert a new row to preserve historical data
  const { data, error } = await supabaseAdmin
    .from('scans')
    .insert({
      domain: domain,
      raw_response: rawResponse,
      keywords_with_aio: keywordsWithAio,
      keywords_total: keywordsTotal,
    })
    .select()
    .single();

  if (error) {
    console.error('Supabase saveScan error:', error);
    throw new Error('Failed to save scan');
  }

  return data;
}
