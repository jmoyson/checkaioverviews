"use client";

import { useState } from 'react';

export interface ShareButtonsProps {
  domain: string;
  stolenCount: number;
  totalCount: number;
}

export function ShareButtons({
  domain,
  stolenCount,
  totalCount,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const url = `${process.env.NEXT_PUBLIC_APP_URL || 'https://checkaioverviews.com'}/${domain}`;
  const tweetText = `${stolenCount} out of ${totalCount} of ${domain}'s ranking keywords are affected by Google's AI Overviews! Check yours:`;

  const handleShare = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(url)}`;
    window.open(twitterUrl, '_blank');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <button
        onClick={handleShare}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all shadow-sm hover:shadow-md"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
        Share on X
      </button>
      <button
        onClick={handleCopy}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-all border border-gray-300"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        {copied ? '✓ Copied!' : 'Copy Link'}
      </button>
    </div>
  );
}
