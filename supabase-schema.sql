-- Supabase Database Schema for checkaioverviews.com
--
-- Design Philosophy:
-- - Keep ALL historical scans for trend analysis and data insights
-- - No data deletion (enables "your AI coverage changed 20% this month")
-- - 24h caching via query logic, not unique constraints
-- - All data is public (no RLS needed, accessed via server-side API)

-- ============================================================================
-- MAIN TABLE: scans
-- ============================================================================
-- Stores every domain scan. Multiple rows per domain = historical tracking.
CREATE TABLE IF NOT EXISTS scans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  domain TEXT NOT NULL,                    -- example.com
  raw_response JSONB NOT NULL,             -- Full keyword array from DataForSEO
  keywords_with_aio INTEGER NOT NULL,      -- Count of keywords with AI Overview
  keywords_total INTEGER NOT NULL,         -- Total keywords scanned
  created_at TIMESTAMPTZ DEFAULT NOW()     -- When scan happened
);

-- ============================================================================
-- INDEXES: Optimized for viral traffic patterns
-- ============================================================================

-- 1. COMPOSITE INDEX for cache lookups (most important!)
--    Query: "Find most recent scan for example.com within last 24h"
--    Used by: getCachedScan() on EVERY request
CREATE INDEX IF NOT EXISTS idx_scans_domain_created
  ON scans(domain, created_at DESC);

-- 2. DOMAIN INDEX for historical queries (future analytics)
--    Query: "Show me all scans for example.com over time"
--    Used by: Future trend graphs, historical reports
CREATE INDEX IF NOT EXISTS idx_scans_domain
  ON scans(domain);

-- 3. TIMESTAMP INDEX for time-range analytics (future feature)
--    Query: "Show me all scans from last month"
--    Used by: Dashboard analytics, growth metrics
CREATE INDEX IF NOT EXISTS idx_scans_created_at
  ON scans(created_at);

-- ============================================================================
-- SECURITY: Intentionally public data
-- ============================================================================
-- Row Level Security (RLS) is NOT enabled because:
-- - All scan results are publicly shareable (viral tool design)
-- - Results pages are public URLs: /[domain]
-- - No user accounts, no private data
-- - All DB access happens server-side (service role key)

-- ============================================================================
-- SCALABILITY NOTES
-- ============================================================================
-- For 1M+ scans, consider:
-- 1. Partition table by created_at (monthly or yearly)
-- 2. Archive scans older than 1 year to cold storage
-- 3. Add materialized view for "top 100 scanned domains"
--
-- But don't implement these until you have the problem!
