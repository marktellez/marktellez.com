#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const APP_DIR = path.join(process.cwd(), 'src/app');
const DATA_DIR = path.join(process.cwd(), 'src/data');
const SKILLS_DIR = path.join(APP_DIR, 'i-know');
const COMPANIES_DIR = path.join(APP_DIR, 'companies-ive-worked-for');

// Ensure the data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Function to extract skills from i-know directory with categories from homepage
function extractSkills() {
  console.log('🔍 Extracting skills...');

  // Define the main categories we want to use (matching homepage)
  const mainCategories = [
    'Web Development',
    'AI & Machine Learning',
    'Databases',
    'Tools'
  ];

  // First, extract categories from homepage
  const homepageFile = path.join(APP_DIR, 'page.js');
  const categories = {};

  if (fs.existsSync(homepageFile)) {
    const content = fs.readFileSync(homepageFile, 'utf-8');

    // Find all category sections and their pills
    const categoryRegex = /<span[^>]*>([^:]+):<\/span>[\s\S]*?((?:<Pill[^>]*>[^<]*<\/Pill>[\s\S]*?)+)<\/div>/g;
    const pillRegex = /<Pill href="\/i-know\/([^"]+)"[^>]*>([^<]+)<\/Pill>/g;

    let categoryMatch;
    while ((categoryMatch = categoryRegex.exec(content)) !== null) {
      const categoryName = categoryMatch[1].trim();
      const pillsSection = categoryMatch[2];

      let pillMatch;
      while ((pillMatch = pillRegex.exec(pillsSection)) !== null) {
        const slug = pillMatch[1];
        categories[slug] = categoryName;
      }
    }
  }

  // Debug: Log extracted categories
  console.log('📋 Extracted categories:', categories);

  // Define mappings for skills to ensure they go into the main categories
  const skillCategoryMap = {
    // Web Development
    'react-js': 'Web Development',
    'next-js': 'Web Development',
    'javascript': 'Web Development',
    'typescript': 'Web Development',
    'html': 'Web Development',
    'css': 'Web Development',
    'tailwind-css': 'Web Development',
    'node-js': 'Web Development',
    'express': 'Web Development',
    's3': 'Web Development',
    'lambda': 'Web Development',

    // AI & Machine Learning
    'python': 'AI & Machine Learning',
    'pytorch': 'AI & Machine Learning',
    'tensorflow': 'AI & Machine Learning',
    'reinforcement-learning': 'AI & Machine Learning',
    'supervised-learning': 'AI & Machine Learning',
    'agentic-tools': 'AI & Machine Learning',

    // Databases
    'mongodb': 'Databases',
    'postgresql': 'Databases',
    'mysql': 'Databases',
    'pinecone': 'Databases',
    'redis': 'Databases',

    // Tools
    'cursor': 'Tools',
    'photoshop': 'Tools',
    'ableton-live': 'Tools',
    'unity': 'Tools',
    'git': 'Tools',
    'docker': 'Tools',
    'kubernetes': 'Tools',

    // Map any other skills you want to include to one of the main categories
    'c-sharp': 'Tools',
    'java': 'Tools',
    'go': 'Tools',
    'rust': 'Tools',
  };

  // Now extract skills and assign categories
  const skillFiles = glob.sync(`${SKILLS_DIR}/*/page.{js,jsx,ts,tsx}`, { nodir: true });

  // Get list of skills found in the filesystem
  const foundSkills = skillFiles.map(file => path.basename(path.dirname(file)));
  console.log('🔍 Found skills in filesystem:', foundSkills);

  return skillFiles.map(file => {
    const dirName = path.dirname(file);
    const skillName = path.basename(dirName);

    // Use homepage category if available, then try skill map, then fallback to "Other"
    let category = categories[skillName] || skillCategoryMap[skillName] || "Other";

    // Ensure the category is one of our main categories
    if (!mainCategories.includes(category)) {
      // If not, try to find a better match or default to "Tools"
      category = "Tools";
    }

    // Debug: Log when a skill is categorized as "Other"
    if (category === "Other") {
      console.log(`⚠️ Warning: No category found for skill "${skillName}"`);
    }

    return {
      category: category,
      name: formatSkillName(skillName),
      slug: skillName,
      url: `/i-know/${skillName}`
    };
  });
}

// Function to format skill name (convert slug to readable name)
function formatSkillName(slug) {
  // Handle special cases
  if (slug === 'c-sharp') return 'C#';
  if (slug === 'react-js') return 'React.js';
  if (slug === 'next-js') return 'Next.js';

  // General case: replace hyphens with spaces and capitalize each word
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to extract work experience from companies-ive-worked-for directory
function extractWorkExperience() {
  console.log('🔍 Extracting work experience...');

  // Find all company directories
  const companyDirs = glob.sync(`${COMPANIES_DIR}/*`, { onlyDirectories: true });

  return companyDirs.map(dirPath => {
    const companySlug = path.basename(dirPath);
    const highlightsFile = path.join(dirPath, 'highlights.json');

    // Check if highlights.json exists
    if (fs.existsSync(highlightsFile)) {
      try {
        const highlightsData = JSON.parse(fs.readFileSync(highlightsFile, 'utf-8'));
        return {
          company: highlightsData.company,
          slug: companySlug,
          dateRange: `${highlightsData.from} - ${highlightsData.to}`,
          role: highlightsData.role,
          highlights: highlightsData.highlights || [],
          url: `/companies-ive-worked-for/${companySlug}`
        };
      } catch (error) {
        console.error(`⚠️ Error parsing highlights.json for ${companySlug}:`, error);
      }
    }

    // If no highlights.json or error parsing, return minimal data
    console.warn(`⚠️ No highlights.json found for ${companySlug}`);
    return {
      company: formatCompanyName(companySlug),
      slug: companySlug,
      dateRange: '',
      role: '',
      highlights: [],
      url: `/companies-ive-worked-for/${companySlug}`
    };
  });
}

// Function to format company name (convert slug to readable name)
function formatCompanyName(slug) {
  // Handle special cases
  if (slug === 'x') return 'X';  // Updated: removed "formerly Twitter" reference
  if (slug === 'zooly-ai') return 'Zooly AI';
  if (slug === 'voxbird-ai') return 'VoxBird AI';
  if (slug === 'reactu-youtube') return 'ReactU YouTube Channel';
  if (slug === 'devmentor-live') return 'DevMentor Live';

  // General case: replace hyphens with spaces and capitalize each word
  return slug
    .split('-')
    .map(word => {
      // Keep acronyms uppercase
      if (word.length <= 2) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
}

// Generate resume JSON
function generateResume() {
  const skills = extractSkills();
  const companies = extractWorkExperience();

  // Format companies with highlights
  const formattedCompanies = companies.map(company => {
    const [from, to] = company.dateRange.split(' - ');

    return {
      from,
      to: to || 'Present',
      company: company.company,
      title: company.role,
      highlights: company.highlights || [],
      url: company.url
    };
  });

  // Create the resume object in the exact format requested
  const resume = {
    skills: skills,
    companies: formattedCompanies
  };

  // Write to JSON file
  fs.writeFileSync(
    path.join(DATA_DIR, 'resume.json'),
    JSON.stringify(resume, null, 2)
  );

  console.log(`✅ Resume data generated at ${path.join(DATA_DIR, 'resume.json')}`);
  return resume;
}

// Execute the main function
const resume = generateResume();
console.log('✨ Resume generation complete!');
