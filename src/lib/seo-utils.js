export function generateSeoMetadata({
    title,
    description,
    keywords = [],
    url,
    image,
    type = 'website',
    siteName,
    locale = 'en_US',
    twitter = {},
    icons = null
}) {
    // Fix the default image URL
    const defaultImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

    // Normalize URL to match sitemap format
    let normalizedUrl = url;
    if (url) {
        // Ensure URL is using the correct domain
        if (!url.startsWith('https://marktellez.com')) {
            normalizedUrl = url.replace(/^https?:\/\/[^\/]+/, 'https://marktellez.com');
        }

        // Handle trailing slashes consistently (only homepage has trailing slash)
        if (normalizedUrl === 'https://marktellez.com') {
            normalizedUrl = 'https://marktellez.com/';
        } else if (normalizedUrl.endsWith('/') && normalizedUrl !== 'https://marktellez.com/') {
            normalizedUrl = normalizedUrl.slice(0, -1);
        }
    }

    // Default icons configuration if not provided
    const defaultIcons = {
        icon: [
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
        ],
        other: [
            { rel: 'manifest', url: '/site.webmanifest' }
        ]
    };

    const metadata = {
        title: title,
        description: description,
        keywords: keywords.join(', '),
        metadataBase: new URL('https://marktellez.com'),
        alternates: normalizedUrl ? { canonical: normalizedUrl } : undefined,
        openGraph: {
            title: title,
            description: description,
            url: normalizedUrl,
            type: type,
            images: [{ url: image || defaultImage }],
            siteName: siteName || title,
            locale: locale,
        },
        twitter: {
            card: twitter.card || 'summary_large_image',
            title: title,
            description: description,
            images: image ? [image] : [defaultImage],
            site: twitter.site,
            creator: twitter.creator,
        },
        icons: icons || defaultIcons,
        other: {
            'theme-color': '#fb2841',
            'robots': 'index, follow',
        }
    };

    // Clean up undefined values
    Object.keys(metadata).forEach(key => {
        if (metadata[key] === undefined) {
            delete metadata[key];
        }
    });

    return metadata;
}
