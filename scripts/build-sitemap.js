#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SITE_URL = 'https://marktellez.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const APP_DIR = path.join(process.cwd(), 'src/app');
const EXCLUDED_PATHS = [
  'api',
  'not-found',
  'error',
  'loading',
  'layout',
  'template',
];

// Ensure the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Function to get all pages based on folder structure
function getPages() {
  // Find all directories under src/app that contain a page.js file
  const pageDirectories = glob.sync(`${APP_DIR}/**/page.{js,jsx,ts,tsx}`, { nodir: true })
    .map(file => path.dirname(file))
    .filter(dir => dir !== APP_DIR); // Exclude the root app directory itself

  // Add the root path
  pageDirectories.push(APP_DIR);

  return pageDirectories
    .map(dir => {
      // Convert directory path to URL path
      let urlPath = dir
        .replace(APP_DIR, '')
        .replace(/\/\(/g, '/')
        .replace(/\)/g, '');

      // Handle route groups (folders starting with _)
      urlPath = urlPath.replace(/\/_[^/]+/g, '');

      // Handle dynamic routes - replace [param] with :param for now
      // We'll filter these out later if needed
      urlPath = urlPath.replace(/\[([^\]]+)\]/g, ':$1');

      // Skip excluded paths
      if (EXCLUDED_PATHS.some(excluded => urlPath.includes(`/${excluded}`))) {
        return null;
      }

      // Skip dynamic routes if needed
      if (urlPath.includes(':')) {
        // You could handle dynamic routes here if you have the data
        // For now, we'll skip them
        return null;
      }

      // Normalize the path
      if (urlPath === '') {
        urlPath = '/';
      }

      return {
        url: `${SITE_URL}${urlPath}`,
        lastModified: new Date().toISOString().split('T')[0], // YYYY-MM-DD
        changeFrequency: urlPath === '/' ? 'daily' : 'weekly',
        priority: urlPath === '/' ? 1.0 : 0.8,
      };
    })
    .filter(Boolean); // Remove null entries
}

// Generate XML sitemap
function generateSitemap(pages) {
  // Ensure proper XML formatting with correct content type
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${page.url}"/>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemap);
  console.log(`✅ Sitemap generated at public/sitemap.xml with ${pages.length} URLs`);
}

// Generate robots.txt
function generateRobotsTxt() {
  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /public/

# Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'robots.txt'), robotsTxt);
  console.log('✅ robots.txt generated');
}

// Main function
function main() {
  console.log('🔍 Generating sitemap...');
  const pages = getPages();
  generateSitemap(pages);
  generateRobotsTxt();
  console.log('✨ Sitemap generation complete!');
}

main();
