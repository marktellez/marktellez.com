import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title')
    const description = searchParams.get('description')

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundImage: `url("${process.env.NEXT_PUBLIC_URL}/og-bg.png")`,
            backgroundSize: 'cover',
            fontFamily: 'system-ui, sans-serif',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              padding: '40px',
              borderRadius: '20px',
              width: '80%',
              maxWidth: '800px',
              border: '2px solid rgba(255, 255, 255, 0.2) '
            }}
          >
            <div
              style={{
                fontSize: '60px',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                color: 'white',
                marginBottom: '16px',
                lineHeight: 1.2,
                textAlign: 'left',
                width: '100%',
              }}
            >
              {title}
            </div>
            {description?.length ? (
              <div
                style={{
                  fontSize: '24px',
                  color: 'white',
                  textAlign: 'left',
                  width: '100%',
                  lineHeight: 1.4,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {description}
              </div>
            ) : null}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Content-Type': 'image/png',
          'Cache-Control': 'public, max-age=31536000, immutable'
        }
      }
    )
  } catch (e) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
