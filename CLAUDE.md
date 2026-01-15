# checkaioverviews.com - AI Context Guide

> **Last Updated:** 2026-01-15
> **Next.js:** 16.1.2 | **React:** 19.2.3 | **TypeScript:** 5.x | **Tailwind:** 4.x

---

## 🎯 Project Identity

**What:** Viral mini-tool that reveals which of a domain's ranking keywords trigger Google's AI Overviews
**Goal:** Sub-30-second time-to-value with maximum shareability
**Pattern:** Single input → instant results → social sharing (à la TrustMRR/TweetHunter)
**Status:** Production-ready foundation, ready for feature implementation

---

## ⚡ Quick Reference

### Common Tasks

**Start development:**

```bash
npm run dev
# http://localhost:3000
```

**Type check:**

```bash
npm run typecheck
```

**Build for production:**

```bash
npm run build && npm start
```

**Add a new API route:**

1. Create `app/api/[name]/route.ts`
2. Add `export const runtime = 'edge';` for performance
3. Import types from `lib/types.ts`
4. Use `supabaseAdmin` from `lib/supabase.ts` for database access

**Add a new component:**

1. Create in `components/` with kebab-case naming
2. Use Server Component by default (no 'use client')
3. Only add 'use client' if you need: hooks, event handlers, browser APIs
4. Export interfaces for props (e.g., `export interface MyComponentProps`)

---

## 🏗️ Architecture Overview

### Core Concept

This is a **viral mini-tool** following the "minimum shareable unit" pattern:

- **Input:** Domain name
- **Process:** Check keywords for AI Overview presence (via DataForSEO)
- **Output:** Shareable results page showing "X out of Y keywords affected"
- **Virality:** Pre-filled tweets + OG images + public shareable URLs

### Data Flow

```
User enters domain (/)
    ↓
Submit → POST /api/check
    ↓
Check Supabase cache (24h TTL)
    ↓
Cache MISS → Call DataForSEO API
    ↓
Parse AI Overview status from serp_info.serp_item_types
    ↓
Store in Supabase (upsert by domain)
    ↓
Return JSON to client
    ↓
Redirect to /[domain]
    ↓
Show results + share buttons
```

### Tech Stack Rationale

| Technology       | Version | Why This Choice                                          |
| ---------------- | ------- | -------------------------------------------------------- |
| **Next.js**      | 16.1.2  | App Router, Server Components, Edge Runtime, ISR         |
| **React**        | 19.2.3  | Latest stable, Server Components support                 |
| **TypeScript**   | 5.x     | Strict mode for type safety, better DX                   |
| **Tailwind CSS** | 4.x     | Modern @import syntax, no config needed, rapid styling   |
| **Supabase**     | 2.90.1  | PostgreSQL, instant setup, 24h cache storage             |
| **DataForSEO**   | -       | Keyword rankings + SERP features (AI Overview detection) |
| **Vercel**       | -       | Edge deployment, automatic HTTPS, 100+ global locations  |

---

## 📁 Project Structure

```
checkaioverviews/
├── app/                          # Next.js App Router
│   ├── [domain]/
│   │   └── page.tsx              # Results page (Server Component)
│   │                             # - Fetches scan data
│   │                             # - Shows keyword list (AI Overview first)
│   │                             # - Includes share buttons
│   │
│   ├── api/
│   │   ├── check/
│   │   │   └── route.ts          # POST: Domain scan (Edge Runtime)
│   │   │                         # - Validates domain
│   │   │                         # - Checks 24h cache
│   │   │                         # - Calls DataForSEO if miss
│   │   │                         # - Returns CheckResponse
│   │   │
│   │   └── og/
│   │       └── [domain]/
│   │           └── route.tsx     # GET: OG image generation (Edge Runtime)
│   │                             # - Creates 1200x630 share image
│   │                             # - Shows stats + domain
│   │
│   ├── layout.tsx                # Root layout
│   │                             # - Global metadata
│   │                             # - OpenGraph tags
│   │                             # - Minimal styling (antialiased)
│   │
│   ├── page.tsx                  # Home page (Server Component)
│   │                             # - Domain input form
│   │                             # - Single CTA
│   │
│   └── globals.css               # Tailwind v4 (@import "tailwindcss")
│
├── components/
│   ├── domain-input.tsx          # Client Component ('use client')
│   │                             # - Form with domain validation
│   │                             # - Loading state during submission
│   │                             # - Redirects to /[domain] on success
│   │
│   ├── results-list.tsx          # Server Component (no 'use client')
│   │                             # - Displays keywords with AI Overview status
│   │                             # - Sorted: AI Overview first (orange), safe (green)
│   │                             # - Exports Keyword interface
│   │
│   └── share-buttons.tsx         # Client Component ('use client')
│                                 # - Share on X (pre-filled tweet)
│                                 # - Copy link to clipboard
│                                 # - One-click social sharing
│
├── lib/
│   ├── dataforseo.ts             # DataForSEO API client
│   │                             # - Uses /v3/dataforseo_labs/google/ranked_keywords/live
│   │                             # - Parses serp_info.serp_item_types for "ai_overview"
│   │                             # - Returns top 15 keywords by search volume
│   │
│   ├── supabase.ts               # Supabase admin client (server-side only!)
│   │                             # - Exports supabaseAdmin (service role key)
│   │                             # - getCachedScan() - checks 24h cache
│   │                             # - saveScan() - upserts scan data
│   │                             # - IMPORTANT: Never use on client-side
│   │
│   └── types.ts                  # Shared TypeScript types
│                                 # - CheckRequest, CheckResponse
│                                 # - APIError
│                                 # - Imported by API routes and components
│
├── .env.example                  # Environment variables template
├── supabase-schema.sql           # Database schema (run in Supabase dashboard)
├── tsconfig.json                 # TypeScript config (strict mode enabled)
└── package.json                  # Dependencies and scripts
```

---

## 💻 Code Patterns & Conventions

### File Naming

- **Always use lowercase kebab-case:** `domain-input.tsx`, `results-list.tsx`
- **Never use PascalCase for files:** ❌ `DomainInput.tsx`
- **API routes:** `route.ts` (POST/GET/etc.) not `[name].ts`

### Component Patterns

**Server Component (default):**

```typescript
// components/results-list.tsx
export interface ResultsListProps {
  keywords: Keyword[];
}

export function ResultsList({ keywords }: ResultsListProps) {
  // No hooks, no interactivity
  // Can fetch data directly
  // Rendered on server
  return <div>...</div>;
}
```

**Client Component (only when needed):**

```typescript
// components/domain-input.tsx
"use client";

export function DomainInput() {
  const [value, setValue] = useState("");
  // Can use hooks, event handlers, browser APIs
  return <form onSubmit={handleSubmit}>...</form>;
}
```

**When to use 'use client':**

- ✅ React hooks (useState, useEffect, etc.)
- ✅ Event handlers (onClick, onSubmit, etc.)
- ✅ Browser APIs (localStorage, window, navigator)
- ✅ Third-party libraries that require client-side
- ❌ Static content
- ❌ Data fetching (use Server Component instead)

### Next.js 16 Patterns

**Dynamic route params (MUST be async):**

```typescript
// app/[domain]/page.tsx
interface Props {
  params: Promise<{ domain: string }>; // Promise wrapper required in Next.js 16
}

export default async function Page({ params }: Props) {
  const { domain } = await params; // Await to unwrap
  return <div>{domain}</div>;
}
```

**Edge Runtime (recommended for APIs):**

```typescript
// app/api/check/route.ts
export const runtime = "edge"; // Deploy to edge locations globally
export const revalidate = 86400; // 24h cache at CDN level

export async function POST(request: Request) {
  // Your logic here
}
```

**Metadata (static or dynamic):**

```typescript
// app/layout.tsx
export const metadata: Metadata = {
  title: "Check AI Overviews",
  description: "...",
  openGraph: {
    images: ["/og-image.png"],
  },
};

// app/[domain]/page.tsx (dynamic)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { domain } = await params;
  return {
    title: `${domain} - AI Overview Analysis`,
    openGraph: {
      images: [`/api/og/${domain}`],
    },
  };
}
```

### API Route Patterns

**Standard structure:**

```typescript
// app/api/check/route.ts
import { NextResponse } from "next/server";
import type { CheckRequest, CheckResponse, APIError } from "@/lib/types";

export const runtime = "edge";
export const revalidate = 86400;

export async function POST(request: Request) {
  try {
    const body: CheckRequest = await request.json();

    // 1. Validate input
    // 2. Check cache
    // 3. Process request
    // 4. Return typed response

    const response: CheckResponse = {
      /* ... */
    };
    return NextResponse.json(response);
  } catch (error) {
    const apiError: APIError = {
      error: "Internal Server Error",
      message: error instanceof Error ? error.message : "Unknown error",
    };
    return NextResponse.json(apiError, { status: 500 });
  }
}
```

### Database Patterns (Supabase)

**Always use supabaseAdmin (server-side only):**

```typescript
import { supabaseAdmin } from "@/lib/supabase";

// ✅ CORRECT: In API route or Server Component
export async function POST(request: Request) {
  const { data, error } = await supabaseAdmin
    .from("scans")
    .select("*")
    .eq("domain", domain)
    .single();
}

// ❌ WRONG: Never import supabaseAdmin in Client Components
// 'use client'
// import { supabaseAdmin } from '@/lib/supabase'; // DON'T DO THIS
```

**Cache check pattern (24h):**

```typescript
const { data } = await supabaseAdmin
  .from("scans")
  .select("*")
  .eq("domain", domain)
  .gte("created_at", new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString())
  .single();

if (data) {
  // Cache hit - return existing data
  return data;
}
// Cache miss - fetch fresh data
```

**Upsert pattern (INSERT or UPDATE):**

```typescript
const { data, error } = await supabaseAdmin
  .from("scans")
  .upsert(
    {
      domain: domain,
      raw_response: apiResponse,
      keywords_with_aio: count,
      keywords_total: total,
    },
    {
      onConflict: "domain", // Unique constraint column
    }
  )
  .select()
  .single();
```

### Styling Patterns (Tailwind v4)

**Utility-first approach:**

```typescript
// ✅ GOOD: Inline utilities
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h2 className="text-xl font-bold">Title</h2>
</div>

// ❌ BAD: Custom CSS files
// Don't create separate CSS files unless absolutely necessary
```

**Responsive design:**

```typescript
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
</div>
```

**Color scheme (keep it simple):**

```typescript
// Primary action: Blue
<button className="bg-blue-600 hover:bg-blue-700 text-white">

// Success/Safe: Green
<div className="bg-green-100 text-green-800">

// Warning/AI Overview: Orange/Red
<div className="bg-orange-100 text-orange-800">

// Neutral: Gray
<div className="bg-gray-100 text-gray-800">
```

---

## 🚫 Anti-Patterns (What NOT to Do)

### ❌ DON'T: Use Supabase client-side

```typescript
// ❌ WRONG
"use client";
import { supabaseAdmin } from "@/lib/supabase";
// This exposes service role key to the browser!
```

### ❌ DON'T: Forget 'use client' for interactivity

```typescript
// ❌ WRONG: Will error because useState requires client component
export function MyForm() {
  const [value, setValue] = useState(""); // Error: useState not available
  return <form>...</form>;
}

// ✅ CORRECT
("use client");
export function MyForm() {
  const [value, setValue] = useState("");
  return <form>...</form>;
}
```

### ❌ DON'T: Use Pages Router patterns

```typescript
// ❌ WRONG: Old Next.js pattern
export async function getServerSideProps() {
  /* ... */
}

// ✅ CORRECT: App Router pattern
export default async function Page() {
  const data = await fetchData(); // Fetch directly in component
  return <div>{data}</div>;
}
```

### ❌ DON'T: Create unnecessary abstractions

```typescript
// ❌ WRONG: Over-engineering for 3 uses
function useKeywordFilter() {
  /* complex logic */
}

// ✅ CORRECT: Keep it simple
const filteredKeywords = keywords.filter((k) => k.hasAiOverview);
```

### ❌ DON'T: Add features we don't need yet (YAGNI)

- No user authentication (free public tool)
- No complex state management (Server Components handle it)
- No real-time updates (24h cache is intentional)
- No analytics (add later if needed)

---

## 🎯 Key Principles

### KISS (Keep It Simple, Stupid)

- Single table database (`scans`)
- One Supabase client (`supabaseAdmin`)
- Minimal dependencies
- Clear, linear code flow

### DRY (Don't Repeat Yourself)

- Shared types in `lib/types.ts`
- Reusable components in `components/`
- Database helpers in `lib/supabase.ts`
- API client in `lib/dataforseo.ts`

### YAGNI (You Aren't Gonna Need It)

- No authentication → Free public tool
- No user accounts → Reduces friction
- No analytics → Add after launch if needed
- No complex features → Ship fast, iterate

### Performance First

- Edge Runtime on all API routes
- 24-hour cache (Supabase + CDN)
- Server Components by default
- Minimal JavaScript sent to client

### Security by Default

- Service role key is server-only
- All database operations through API routes
- No sensitive data in client-side code
- Environment variables properly scoped

---

## 🔧 Development Workflows

### Adding a New Feature

1. **Plan first** - Write placeholder comments before code
2. **Types first** - Define interfaces in `lib/types.ts`
3. **Server-side first** - Build API route, then UI
4. **Test manually** - Check both success and error cases
5. **Type check** - Run `npm run typecheck` before committing

### Making Database Changes

1. **Update schema SQL** - Edit `supabase-schema.sql`
2. **Run in Supabase** - Execute in SQL Editor
3. **Update types** - Modify `lib/supabase.ts` interfaces
4. **Update helpers** - Adjust `getCachedScan` / `saveScan` if needed
5. **Type check** - Ensure no breaking changes

### Debugging

**Check build output:**

```bash
npm run build
# Look for type errors, unused exports, build warnings
```

**Check API routes:**

```bash
# In browser console:
fetch('/api/check', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ domain: 'example.com' })
}).then(r => r.json()).then(console.log);
```

**Check Supabase connection:**

```typescript
// Add to API route temporarily:
const { data, error } = await supabaseAdmin.from("scans").select("*").limit(1);
console.log({ data, error });
```

---

## 🌐 Environment Variables

| Variable                    | Scope  | Description                                | Required |
| --------------------------- | ------ | ------------------------------------------ | -------- |
| `DATAFORSEO_LOGIN`          | Server | DataForSEO username                        | ✅       |
| `DATAFORSEO_PASSWORD`       | Server | DataForSEO password                        | ✅       |
| `NEXT_PUBLIC_SUPABASE_URL`  | Public | Supabase project URL                       | ✅       |
| `SUPABASE_SERVICE_ROLE_KEY` | Server | Service role key (NEVER expose to client!) | ✅       |
| `NEXT_PUBLIC_APP_URL`       | Public | App URL for OG images, share links         | ✅       |

**Setup:**

```bash
cp .env.example .env.local
# Fill in values, never commit .env.local
```

---

## 📊 Performance Targets

| Metric              | Target  | How We Achieve It                        |
| ------------------- | ------- | ---------------------------------------- |
| Time to First Paint | < 1s    | Edge Runtime, Server Components          |
| Time to Interactive | < 2s    | Minimal client JS, no heavy frameworks   |
| API Response Time   | < 500ms | Edge deployment, 24h cache               |
| Time to Value       | < 30s   | Simple flow, instant results, cache hits |

---

## 🚀 Deployment

**Platform:** Vercel (recommended)

**Process:**

1. Connect GitHub repo to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy → Automatic on git push
4. Custom domain → Configure in Vercel settings

**Edge Runtime deployment:**

- API routes automatically deploy to 100+ edge locations
- <50ms latency globally
- Handles traffic spikes automatically

---

## 📚 Additional Resources

- **Next.js 16 Docs:** https://nextjs.org/docs
- **Supabase Docs:** https://supabase.com/docs
- **Tailwind v4:** https://tailwindcss.com/docs
- **DataForSEO API:** https://docs.dataforseo.com/

---

## 🎓 Learning Notes

### Why This Architecture Works for Viral Tools

1. **Sub-30s time-to-value:** Edge Runtime + caching = instant results
2. **No friction:** Public URLs, no signup, instant sharing
3. **Cost-effective:** 24h cache reduces API calls by 95%+
4. **Scalable:** Edge deployment handles viral traffic
5. **Simple:** Single table, clear flow, easy to maintain

### Common Questions

**Q: Why not use Row Level Security (RLS) in Supabase?**
A: All data is intentionally public (shareable URLs). RLS adds complexity without benefit.

**Q: Why Edge Runtime over serverless functions?**
A: 50-300ms faster, globally distributed, better for viral tools with worldwide audience.

**Q: Why 24h cache instead of real-time?**
A: Keywords don't change frequently. Cache reduces costs and improves speed.

**Q: Why no user authentication?**
A: Viral tools require zero friction. Every extra step reduces sharing by ~30%.

---

**Last Updated:** 2026-01-15
**Maintained By:** Development team
