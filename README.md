# checkaioverviews.com

> **Discover which of your ranking keywords are being affected by Google's AI Overviews**

A viral mini-tool that instantly shows which keywords trigger AI-generated content in Google search results. Built for SEO professionals, content creators, and anyone concerned about AI's impact on organic traffic.

---

## ✨ Features

- 🔍 **Instant Analysis** - Check any domain in under 30 seconds
- 📊 **Keyword Insights** - See which keywords show AI Overviews vs. traditional results
- 🎯 **Zero Friction** - No signup required, completely free
- 🔗 **Shareable Results** - Public URLs for every domain scan
- ⚡ **Lightning Fast** - Edge Runtime deployment with 24-hour intelligent caching
- 🌍 **Global Performance** - <500ms response times worldwide

---

## 🚀 Quick Start

Get up and running in 3 steps:

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start checking domains.

---

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **npm** 10.x or higher (comes with Node.js)
- **DataForSEO API Account** ([Sign up](https://dataforseo.com/))
- **Supabase Project** ([Create free project](https://supabase.com/))
- **Git** (for version control)

---

## 🛠️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/checkaioverviews.git
cd checkaioverviews
```

### 2. Install Dependencies

```bash
npm install
```

This installs:

- Next.js 16.1.2 (App Router, Server Components)
- React 19.2.3 (latest stable)
- TypeScript 5.x (strict mode)
- Tailwind CSS 4.x (modern @import syntax)
- Supabase client 2.90.1
- Development tools (ESLint, TypeScript compiler)

### 3. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:

```bash
# DataForSEO API credentials
DATAFORSEO_LOGIN=your_dataforseo_username
DATAFORSEO_PASSWORD=your_dataforseo_password

# Supabase configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Application URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

**Security Note:** Never commit `.env.local` to version control. The service role key must stay secret!

### 4. Set Up Database

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy the contents of `supabase-schema.sql`
4. Paste and execute in the SQL Editor

This creates:

- `scans` table for caching domain results
- Unique constraint on domain (prevents duplicates)
- Optimized indexes for fast lookups
- Automatic cleanup function for old data

### 5. Start Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your app.

---

## 📖 Usage

### Basic Workflow

1. **Enter Domain** - Type any domain name (e.g., `example.com`)
2. **Instant Results** - See which keywords have AI Overviews
3. **Share** - Copy shareable URL or post to social media

### API Endpoints

**Check Domain:**

```bash
POST /api/check
Content-Type: application/json

{
  "domain": "example.com"
}
```

Response:

```json
{
  "domain": "example.com",
  "keywords": [
    {
      "keyword": "example search term",
      "hasAiOverview": true,
      "searchVolume": 12000,
      "position": 3
    }
  ],
  "stats": {
    "withAIO": 5,
    "total": 15
  },
  "cachedAt": "2026-01-15T10:30:00Z"
}
```

**Generate OG Image:**

```bash
GET /api/og/{domain}
```

Returns a 1200x630 PNG image for social sharing.

---

## 🏗️ Project Structure

```
checkaioverviews/
├── app/
│   ├── [domain]/
│   │   └── page.tsx              # Results page (Server Component)
│   ├── api/
│   │   ├── check/route.ts        # Domain check API (Edge Runtime)
│   │   └── og/[domain]/route.tsx # OG image generator (Edge Runtime)
│   ├── layout.tsx                # Root layout with metadata
│   ├── page.tsx                  # Home page
│   └── globals.css               # Tailwind styles
│
├── components/
│   ├── domain-input.tsx          # Domain input form (Client)
│   ├── results-list.tsx          # Keyword results display (Server)
│   └── share-buttons.tsx         # Social sharing buttons (Client)
│
├── lib/
│   ├── dataforseo.ts             # DataForSEO API client
│   ├── supabase.ts               # Supabase admin client (server-only)
│   └── types.ts                  # Shared TypeScript types
│
├── .env.example                  # Environment template
├── supabase-schema.sql           # Database schema
├── CLAUDE.md                     # AI context guide
└── package.json                  # Dependencies
```

---

## 🧰 Available Scripts

| Command             | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `npm run dev`       | Start development server on [localhost:3000](http://localhost:3000) |
| `npm run build`     | Build optimized production bundle                                   |
| `npm run start`     | Start production server                                             |
| `npm run lint`      | Run ESLint to check code quality                                    |
| `npm run typecheck` | Run TypeScript compiler (no emit)                                   |

---

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository

3. **Add Environment Variables**

   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.example`

4. **Deploy**

   - Click "Deploy"
   - Your app will be live at `your-project.vercel.app`

5. **Custom Domain** (Optional)
   - Go to Settings → Domains
   - Add `checkaioverviews.com`
   - Update DNS records as instructed

**Edge Runtime Benefits:**

- ⚡ 50-300ms faster than traditional serverless
- 🌍 Deployed to 100+ global edge locations
- 📈 Automatically scales for viral traffic

---

## 🔧 Tech Stack

| Technology       | Purpose                           | Version |
| ---------------- | --------------------------------- | ------- |
| **Next.js**      | React framework with App Router   | 16.1.2  |
| **React**        | UI library with Server Components | 19.2.3  |
| **TypeScript**   | Type safety and better DX         | 5.x     |
| **Tailwind CSS** | Utility-first styling             | 4.x     |
| **Supabase**     | PostgreSQL database (24h cache)   | 2.90.1  |
| **DataForSEO**   | Keyword rankings + SERP data      | API v3  |
| **Vercel**       | Hosting and edge deployment       | -       |

### Why These Choices?

- **Next.js 16:** App Router enables Server Components, Edge Runtime, and ISR
- **React 19:** Latest stable with full Server Components support
- **TypeScript:** Strict mode catches errors at compile time
- **Tailwind v4:** Modern @import syntax, no config file needed
- **Edge Runtime:** 50-300ms faster globally, perfect for viral tools
- **Supabase:** PostgreSQL with instant setup, perfect for 24h caching

---

## 🏛️ Architecture

### Viral Mini-Tool Pattern

This project follows the "minimum shareable unit" pattern popularized by TrustMRR and TweetHunter:

1. **Single Input** - Just a domain name
2. **Instant Processing** - Results in <30 seconds
3. **Shareable Output** - Public URL for every scan
4. **Zero Friction** - No signup required

### Data Flow

```
User Input (/) → POST /api/check → Cache Check (Supabase)
                                         ↓
                                    Cache Miss?
                                         ↓
                                DataForSEO API Call
                                         ↓
                                Parse AI Overview Status
                                         ↓
                                Store in Supabase (24h)
                                         ↓
                                Return Results → /[domain]
                                         ↓
                                Share Buttons + OG Image
```

### Performance Strategy

- **Edge Runtime** - API routes deployed globally
- **24h Cache** - Reduces API costs by 95%+
- **Server Components** - Minimal client-side JavaScript
- **ISR** - Pages statically generated on-demand

---

## 🔐 Security

### Best Practices Applied

✅ **Server-side database access only** - No Supabase client exposed to browser.  
✅ **Service role key isolation** - Only used in API routes/Server Components.  
✅ **Environment variable scoping** - `NEXT_PUBLIC_*` only for safe values.  
✅ **No Row Level Security needed** - All data is intentionally public.  
✅ **TypeScript strict mode** - Catches type errors at compile time.

### What's NOT Included (By Design)

❌ **User authentication** - Free public tool, zero friction.  
❌ **Rate limiting** - Add if needed after launch.  
❌ **Analytics** - Add later based on need.

---

## 🐛 Troubleshooting

### Common Issues

**Build fails with TypeScript errors:**

```bash
npm run typecheck
# Fix any type errors shown
```

**Supabase connection fails:**

- Check `NEXT_PUBLIC_SUPABASE_URL` is correct
- Verify `SUPABASE_SERVICE_ROLE_KEY` is the service role key (not anon key)
- Confirm schema has been run in SQL Editor

**DataForSEO API errors:**

- Verify credentials in `.env.local`
- Check account has sufficient credits
- Review API limits in DataForSEO dashboard

**Edge Runtime issues:**

```bash
# Some npm packages don't work in Edge Runtime
# Use only Edge-compatible libraries
```

---

## 📚 Documentation

- **[CLAUDE.md](./CLAUDE.md)** - Comprehensive AI context guide

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes**
   - Follow existing code patterns
   - Use TypeScript strict mode
   - Follow kebab-case file naming
   - Add 'use client' only when necessary
4. **Run type check** (`npm run typecheck`)
5. **Test your changes** (`npm run build`)
6. **Commit your changes** (`git commit -m 'Add amazing feature'`)
7. **Push to branch** (`git push origin feature/amazing-feature`)
8. **Open a Pull Request**

### Code Style

- **File naming:** lowercase kebab-case (`domain-input.tsx`)
- **Components:** Named exports with exported interfaces
- **Server Components:** Default (no 'use client')
- **Client Components:** Only when using hooks/events
- **Imports:** Use `@/` alias for absolute imports

---

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 📞 Support

- **Issues:** [GitHub Issues](https://github.com/yourusername/checkaioverviews/issues)
- **Questions:** Check [CLAUDE.md](./CLAUDE.md) for detailed documentation
- **Architecture:** Review [ARCHITECTURE_REVIEW.md](./ARCHITECTURE_REVIEW.md)
