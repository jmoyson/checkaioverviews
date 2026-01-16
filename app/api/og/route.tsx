import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
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
          {/* Logo/Brand */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: '#111827',
              letterSpacing: '-0.03em',
              marginBottom: 32,
            }}
          >
            Scan<span style={{ color: '#FF4500' }}>AIO</span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: 36,
              color: '#374151',
              textAlign: 'center',
              maxWidth: 800,
              lineHeight: 1.4,
              marginBottom: 48,
            }}
          >
            See which of your keywords Google&apos;s AI is stealing
          </div>

          {/* Value props */}
          <div
            style={{
              display: 'flex',
              gap: 48,
              marginTop: 24,
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 24,
                color: '#6B7280',
              }}
            >
              <div style={{ color: '#FF4500', fontSize: 28 }}>✓</div>
              Free
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 24,
                color: '#6B7280',
              }}
            >
              <div style={{ color: '#FF4500', fontSize: 28 }}>✓</div>
              30 seconds
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: 24,
                color: '#6B7280',
              }}
            >
              <div style={{ color: '#FF4500', fontSize: 28 }}>✓</div>
              No signup
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px 80px',
            borderTop: '1px solid #F3F4F6',
          }}
        >
          <div
            style={{
              fontSize: 22,
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
