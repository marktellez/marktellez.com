#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const SKILLS_FILE = path.join(process.cwd(), 'src/data/skills.json');
const SKILLS_PAGES_FILE = path.join(process.cwd(), 'src/data/skill-pages.json');
const SKILLS_DIR = path.join(process.cwd(), 'src/app/i-know');

function main() {
  console.log('🔍 Generating skill pages data...');

  // Load skills data
  const skillsData = JSON.parse(fs.readFileSync(SKILLS_FILE, 'utf8'));

  // Create a map of all skills with their slugs
  const allSkills = {};

  Object.entries(skillsData).forEach(([category, skills]) => {
    skills.forEach(skill => {
      const skillSlug = skill.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-').replace(/#/g, 'sharp');
      allSkills[skillSlug] = {
        name: skill,
        category,
        hasPage: false
      };
    });
  });

  // Check which skill pages exist
  if (fs.existsSync(SKILLS_DIR)) {
    const existingPages = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory() && dirent.name !== '[skill]')
      .map(dirent => dirent.name);

    console.log(`Found ${existingPages.length} skill pages`);

    // Mark skills that have pages
    existingPages.forEach(slug => {
      if (allSkills[slug]) {
        allSkills[slug].hasPage = true;
      }
    });
  } else {
    console.log('Skills directory not found');
  }

  // Ensure the data directory exists
  const dataDir = path.dirname(SKILLS_PAGES_FILE);
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  // Write the skill pages data
  fs.writeFileSync(SKILLS_PAGES_FILE, JSON.stringify(allSkills, null, 2));
  console.log(`✅ Skill pages data written to ${SKILLS_PAGES_FILE}`);
}

main();
