export function generateSeoMetadata({
    title,
    description,
    keywords = [],
    url,
    image,
    type = 'website',
    siteName,
    locale = 'en_US',
    twitter = {}
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
            // Fix the OR operator
            images: [{ url: image || defaultImage }],
            siteName: siteName || title,
            locale: locale,
        },
        twitter: {
            card: twitter.card || 'summary_large_image',
            title: title,
            description: description,
            // Fix the array format
            images: image ? [image] : [defaultImage],
            site: twitter.site,
            creator: twitter.creator,
        },
        other: {
            'theme-color': '#fb2841',
            'viewport': 'width=device-width, initial-scale=1',
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
