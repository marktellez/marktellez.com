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

    const defaultImage = `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`
    const metadata = {
        title: title,
        description: description,
        keywords: keywords.join(', '),
        metadataBase: url ? new URL(url) : undefined,
        alternates: url ? { canonical: url } : undefined,
        openGraph: {
            title: title,
            description: description,
            url: url,
            type: type,
            images: [{ url: image | defaultImage }],
            siteName: siteName || title,
            locale: locale,
        },
        twitter: {
            card: twitter.card || 'summary_large_image',
            title: title,
            description: description,
            images: image ? [image] : defaultImage,
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