import { ImageResponse } from 'next/og';
import { getDomain } from '@/lib/db';

export const runtime = 'edge';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ domain: string }> }
) {
  const { domain } = await params;

  // Fetch domain data
  const domainData = await getDomain(domain);

  // If domain not found, show a "not scanned yet" state
  const isScanned = domainData !== null;
  const withAIO = domainData?.keywords_with_aio || 0;
  const total = domainData?.keywords_analyzed || 0;
  const percentage = total > 0 ? Math.round((withAIO / total) * 100) : 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#FFFFFF',
          position: 'relative',
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: '#FF4500',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            padding: '60px 80px',
          }}
        >
          {/* Label */}
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: 24,
            }}
          >
            AI Overview Impact Report
          </div>

          {/* Domain */}
          <div
            style={{
              fontSize: 56,
              fontWeight: 900,
              color: '#111827',
              marginBottom: 48,
              letterSpacing: '-0.02em',
            }}
          >
            {domain}
          </div>

          {/* Stats */}
          {isScanned ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                marginBottom: 24,
              }}
            >
              <span style={{ fontSize: 140, fontWeight: 900, color: '#FF4500', letterSpacing: '-0.04em' }}>
                {withAIO}
              </span>
              <span style={{ fontSize: 80, fontWeight: 300, color: '#D1D5DB', margin: '0 16px' }}>
                /
              </span>
              <span style={{ fontSize: 140, fontWeight: 900, color: '#111827', letterSpacing: '-0.04em' }}>
                {total}
              </span>
            </div>
          ) : (
            <div
              style={{
                fontSize: 48,
                fontWeight: 700,
                color: '#9CA3AF',
                marginBottom: 24,
              }}
            >
              Not scanned yet
            </div>
          )}

          {/* Description */}
          <div
            style={{
              fontSize: 32,
              color: '#6B7280',
              fontWeight: 400,
            }}
          >
            {isScanned ? 'keywords affected by AI Overviews' : 'Check this domain for AI Overview impact'}
          </div>

          {/* Progress bar */}
          {isScanned && (
            <div
              style={{
                width: '70%',
                height: 12,
                background: '#F3F4F6',
                marginTop: 48,
                display: 'flex',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: `${percentage}%`,
                  background: '#FF4500',
                  height: '100%',
                }}
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '24px 80px',
            borderTop: '1px solid #F3F4F6',
          }}
        >
          <div
            style={{
              fontSize: 24,
              fontWeight: 900,
              color: '#111827',
              letterSpacing: '-0.02em',
            }}
          >
            ScanAIO
          </div>
          <div
            style={{
              fontSize: 20,
              color: '#9CA3AF',
            }}
          >
            scanaio.com
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
