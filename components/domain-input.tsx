"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function DomainInput() {
  const [domain, setDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Clean domain (remove http/https, www, trailing slash)
      const cleanDomain = domain
        .replace(/^https?:\/\//, '')
        .replace(/^www\./, '')
        .replace(/\/$/, '')
        .toLowerCase();

      // Call API to trigger scan
      const response = await fetch('/api/check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ domain: cleanDomain }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to check domain');
      }

      // Redirect to results page
      router.push(`/${cleanDomain}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder="yourdomain.com"
          disabled={loading}
          className="flex-1 px-5 py-3.5 text-base border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent disabled:opacity-50 transition-all placeholder:text-gray-400"
          required
        />
        <button
          type="submit"
          disabled={loading || !domain}
          className="px-8 py-3.5 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm hover:shadow-md disabled:hover:shadow-sm whitespace-nowrap"
        >
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-600 mt-3 text-center">{error}</p>
      )}
    </form>
  );
}
