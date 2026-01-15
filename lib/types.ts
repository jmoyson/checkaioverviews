// Shared types for API requests and responses

// Keyword Types
export type AiOverviewStatus =
  | 'safe'           // No AI Overview - full organic traffic
  | 'referenced'     // AI Overview present + domain cited (brand visibility, but traffic lost)
  | 'stolen';        // AI Overview present + NOT referenced (pure traffic theft)

export interface Keyword {
  keyword: string;
  aiOverviewStatus: AiOverviewStatus;  // Detailed status
  hasAiOverview: boolean;              // Legacy: true if referenced OR stolen (for stats)
  searchVolume: number;
  position: number;
}

// API Response Types
export interface CheckResponse {
  domain: string;
  keywords: Keyword[];
  stats: {
    withAIO: number;
    total: number;
  };
  cachedAt: string;
}

export interface APIError {
  error: string;
  message: string;
}

// API Request Types
export interface CheckRequest {
  domain: string;
}
