#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SITE_URL = 'https://marktellez.com';
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const APP_DIR = path.join(process.cwd(), 'src/app');
const DATA_DIR = path.join(process.cwd(), 'src/data');
const EXCLUDED_PATHS = [
  'api',
  'not-found',
  'error',
  'loading',
  'layout',
  'template',
  'sitemap.xml'
];

// Ensure the public directory exists
if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Function to get all pages based on folder structure
function getPages() {
  const pages = [];

  // 1. Find all Next.js pages (page.js, page.jsx, page.ts, page.tsx)
  const pageFiles = glob.sync(`${APP_DIR}/**/page.{js,jsx,ts,tsx}`, { nodir: true });

  // Process Next.js pages
  pageFiles.forEach(file => {
    const dir = path.dirname(file);

    // Convert directory path to URL path
    let urlPath = dir
      .replace(APP_DIR, '')
      .replace(/\/\(/g, '/')
      .replace(/\)/g, '');

    // Handle route groups (folders starting with _)
    urlPath = urlPath.replace(/\/_[^/]+/g, '');

    // Handle dynamic routes - replace [param] with :param for now
    urlPath = urlPath.replace(/\[([^\]]+)\]/g, ':$1');

    // Skip excluded paths
    if (EXCLUDED_PATHS.some(excluded => urlPath.includes(`/${excluded}`))) {
      return;
    }

    // Skip dynamic routes if needed
    if (urlPath.includes(':')) {
      // We'll handle dynamic routes separately
      return;
    }

    // Normalize the path
    if (urlPath === '') {
      urlPath = '/';
    }

    pages.push({
      url: `${SITE_URL}${urlPath}`,
      lastModified: new Date().toISOString().split('T')[0], // YYYY-MM-DD
      changeFrequency: urlPath === '/' ? 'daily' : 'weekly',
      priority: urlPath === '/' ? 1.0 : 0.8,
    });
  });

  // 2. Add dynamic company pages from resume data
  try {
    const resumeData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'resume.json'), 'utf8'));

    resumeData.forEach(company => {
      if (company.slug) {
        pages.push({
          url: `${SITE_URL}/companies-ive-worked-for/${company.slug}`,
          lastModified: new Date().toISOString().split('T')[0],
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      }
    });

    console.log(`✅ Added ${resumeData.length} company pages from resume data`);
  } catch (error) {
    console.error('Error processing resume data:', error);
  }

  // 3. Add skill pages from skills.json
  try {
    const skillsData = JSON.parse(fs.readFileSync(path.join(DATA_DIR, 'skills.json'), 'utf8'));
    let skillCount = 0;

    Object.values(skillsData).forEach(skillCategory => {
      skillCategory.forEach(skill => {
        const skillSlug = skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-').replace(/#/g, 'sharp');
        pages.push({
          url: `${SITE_URL}/i-know/${skillSlug}`,
          lastModified: new Date().toISOString().split('T')[0],
          changeFrequency: 'weekly',
          priority: 0.8,
        });
        skillCount++;
      });
    });

    console.log(`✅ Added ${skillCount} skill pages from skills data`);
  } catch (error) {
    console.error('Error processing skills data:', error);
  }

  // 4. Add static files from public directory that should be included in sitemap
  const staticFiles = [
    '/resume.pdf'  // Include the resume PDF
  ];

  staticFiles.forEach(file => {
    // Check if the file exists
    if (fs.existsSync(path.join(PUBLIC_DIR, file.replace(/^\//, '')))) {
      pages.push({
        url: `${SITE_URL}${file}`,
        lastModified: new Date().toISOString().split('T')[0],
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
  });

  return pages;
}

// Generate XML sitemap
function generateSitemap(pages) {
  console.log(`Found ${pages.length} pages to include in sitemap`);

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
Disallow: /api/

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
