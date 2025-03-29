#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

// Import data
const skillsData = require('../src/data/skills.json');
const resumeData = require('../src/data/resume.json');
const reviewsData = require('../src/data/reviews.json');
const statsData = require('../src/data/stats.json');

async function buildResumePDF() {
  try {
    console.log('🔍 Generating resume PDF...');

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    // Add a page to the document
    let page = pdfDoc.addPage([595.28, 841.89]); // A4 size

    // Try to load Quicksand fonts from public directory
    let font, boldFont;
    try {
      // Path to Quicksand fonts in public/fonts directory
      const mediumFontPath = path.join(process.cwd(), 'public', 'fonts', 'Quicksand-Medium.ttf');
      const blackFontPath = path.join(process.cwd(), 'public', 'fonts', 'Quicksand-Bold.ttf');

      if (fs.existsSync(mediumFontPath) && fs.existsSync(blackFontPath)) {
        console.log('Using Quicksand fonts from public/fonts directory');
        const mediumFontBytes = fs.readFileSync(mediumFontPath);
        const blackFontBytes = fs.readFileSync(blackFontPath);

        // Register fontkit
        pdfDoc.registerFontkit(fontkit);

        // Embed the fonts with their proper weights
        font = await pdfDoc.embedFont(mediumFontBytes);      // MEDIUM weight
        boldFont = await pdfDoc.embedFont(blackFontBytes);   // BLACK/BOLD weight

        console.log('Successfully loaded Quicksand fonts with proper weights');
      } else {
        throw new Error('Quicksand fonts not found in public/fonts directory');
      }
    } catch (error) {
      console.log('Falling back to standard fonts:', error.message);
      // Fallback to standard fonts
      font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
    }



    // Set page background color (white)
    page.drawRectangle({
      x: 0,
      y: 0,
      width: page.getWidth(),
      height: page.getHeight(),
      color: rgb(1, 1, 1) // White background
    });

    // Set initial position
    let y = 800;
    const margin = 50;

    // Read the local image file
    const imagePath = path.join(process.cwd(), 'src/app/marktellez.png');
    const imageBytes = fs.readFileSync(imagePath);

    // Embed the image
    const photoImage = await pdfDoc.embedPng(imageBytes);

    // Calculate photo dimensions (max height 100)
    const photoAspectRatio = photoImage.width / photoImage.height;
    const photoMaxHeight = 100;
    const photoHeight = photoMaxHeight;
    const photoWidth = photoHeight * photoAspectRatio;

    // Draw the photo on the left side
    const photoX = margin;
    page.drawImage(photoImage, {
      x: photoX,
      y: y - photoHeight + 30, // Align with name
      width: photoWidth,
      height: photoHeight,
    });

    // Calculate text position (to the right of the photo)
    const textX = margin + photoWidth + 20; // 20px spacing between photo and text

    // Add personal info from stats
    page.drawText(statsData.name, {
      x: textX,
      y,
      size: 24,
      font: boldFont,
    });

    y -= 20;

    // Add title
    page.drawText(statsData.title, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 15;

    // Add website
    page.drawText(statsData.website, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 15;

    // Add contact email
    page.drawText(statsData.contactEmail, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 50; // Significantly increased margin before "other" section

    // Add "Builder & Engineer" heading for other info
    if (statsData.other) {
      page.drawText("Builder & Engineer", {
        x: margin,
        y,
        size: 14,
        font: boldFont,
      });

      y -= 15;

      // Add other info from stats
      page.drawText(statsData.other, {
        x: margin,
        y,
        size: 12,
        font: font,
      });
      y -= 15;
    }

    y -= 25; // Additional space before skills section

    page.drawText('Skills', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    y -= 20;

    // Define font weights through size and color
    const fontStyles = {
      heading: {
        size: 16,
        font: boldFont,
        color: rgb(0, 0, 0) // Pure black for main headings
      },
      subheading: {
        size: 12,
        font: boldFont,
        color: rgb(0, 0, 0) // Pure black for subheadings (skill categories)
      },
      companyName: {
        size: 12,
        font: boldFont,
        color: rgb(0, 0, 0) // Bold for company names
      },
      regularText: {
        size: 10,
        font: font,
        color: rgb(0.2, 0.2, 0.2) // Medium gray for regular text
      }
    };

    // Process skills by category
    Object.entries(skillsData).forEach(([category, skills]) => {
      // Check if we need a new page
      if (y < 150) {
        page = pdfDoc.addPage([595.28, 841.89]);
        y = 800;
      }

      // Category name as subheading
      page.drawText(category, {
        x: margin,
        y,
        ...fontStyles.subheading
      });

      y -= 15;

      // Skills in this category as regular text
      const skillsText = skills.join(', ');

      // Split long skill lists into multiple lines
      const maxLineWidth = page.getWidth() - (margin * 2);
      let line = '';
      let lines = [];

      skills.forEach((skill, index) => {
        const testLine = line + (line ? ', ' : '') + skill;
        const textWidth = font.widthOfTextAtSize(testLine, 10);

        if (textWidth > maxLineWidth && line) {
          lines.push(line);
          line = skill;
        } else {
          line = testLine;
        }

        if (index === skills.length - 1 && line) {
          lines.push(line);
        }
      });

      // Draw each line
      lines.forEach(line => {
        if (y < 150) {
          page = pdfDoc.addPage([595.28, 841.89]);
          y = 800;
        }

        if (line) {
          page.drawText(line, {
            x: margin,
            y,
            size: 10,
            font: font,
          });
        }

        y -= 15;
      });

      y -= 10;
    });

    // Add Education section
    y -= 10;
    page.drawText('Education', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    y -= 20;

    // Add education message
    page.drawText('To see my education history, visit https://marktellez.com/education', {
      x: margin,
      y,
      size: 10,
      font: font,
    });

    y -= 15;

    // Add the promise text
    const promiseText = "- it's an interesting read. I promise! ";
    page.drawText(promiseText, {
      x: margin,
      y,
      size: 10,
      font: font,
    });

    // Calculate width of the text to position the emoji
    const textWidth = font.widthOfTextAtSize(promiseText, 10);

    // Load and embed the emoji image
    const emojiPath = path.join(process.cwd(), 'public', 'smiling-face-with-smiling-eyes.png');
    const emojiBytes = fs.readFileSync(emojiPath);
    const emojiImage = await pdfDoc.embedPng(emojiBytes);

    // Draw the emoji (sized appropriately for the text)
    const emojiSize = 12; // Slightly larger than the font size
    page.drawImage(emojiImage, {
      x: margin + textWidth,
      y: y - emojiSize + 8, // Adjust vertical position to align with text
      width: emojiSize,
      height: emojiSize,
    });

    y -= 30;

    // Add work experience section
    page.drawText('Work Experience', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    y -= 20;

    // Sort companies by 'from' year in descending order
    const sortedCompanies = [...resumeData].sort((a, b) => {
      const yearA = parseInt(a.from);
      const yearB = parseInt(b.from);
      return yearB - yearA;
    });

    // Process companies
    sortedCompanies.forEach((company) => {
      // Check if we need a new page
      if (y < 150) {
        page = pdfDoc.addPage([595.28, 841.89]);
        y = 800;
      }

      // Company name and duration
      page.drawText(`${company.company} (${company.from} - ${company.to})`, {
        x: margin,
        y,
        size: 12,
        font: boldFont,
      });

      y -= 15;

      // Role/title
      page.drawText(company.title || company.role, {
        x: margin,
        y,
        size: 11,
        font: font,
      });

      y -= 15;

      // Highlights
      if (company.highlights && company.highlights.length > 0) {
        company.highlights.forEach((highlight) => {
          // Check if we need a new page
          if (y < 150) {
            page = pdfDoc.addPage([595.28, 841.89]);
            y = 800;
          }

          page.drawText(`• ${highlight}`, {
            x: margin + 10,
            y,
            size: 10,
            font: font,
          });

          y -= 15;
        });
      }

      y -= 15;
    });

    // Add reviews section if there's space
    if (y > 200) {
      y -= 10;

      // Filter reviews with at least 100 characters
      const filteredReviews = reviewsData.filter(review =>
        review.content && review.content.length >= 100
      );

      if (filteredReviews.length > 0) {
        page.drawText('Client Reviews', {
          x: margin,
          y,
          size: 16,
          font: boldFont,
        });

        y -= 20;

        // Deduplicate reviews by writer
        const uniqueReviewers = new Map();
        let reviewCount = 0;
        const maxReviews = 5; // Show only top 5 reviews

        // Process reviews (show up to 5)
        filteredReviews.forEach((review) => {
          // Skip if we've already shown 5 reviews
          if (reviewCount >= maxReviews) {
            return;
          }

          // Get reviewer identifier
          const reviewerId = review.writer?.id ||
            review.writer?.name ||
            review.writer?.username ||
            'Anonymous';

          // Skip if we already have a review from this person
          if (uniqueReviewers.has(reviewerId)) {
            return;
          }

          // Add this reviewer to our map
          uniqueReviewers.set(reviewerId, true);
          reviewCount++;

          // Check if we need a new page - ensure enough space for at least 5 lines
          if (y < 200) {
            page = pdfDoc.addPage([595.28, 841.89]);
            y = 800;
          }

          // Handle text wrapping for review content
          const maxWidth = page.getWidth() - (margin * 2);
          const words = review.content.split(' ');
          let line = '';
          const lineHeight = 15; // Increased line height
          let linesCount = 0;
          const maxLines = 5; // Limit to 5 lines per review

          for (const word of words) {
            const testLine = line + (line ? ' ' : '') + word;
            const textWidth = font.widthOfTextAtSize(testLine, 10);

            if (textWidth > maxWidth && line) {
              // Check if we need a new page
              if (y < 100) {
                page = pdfDoc.addPage([595.28, 841.89]);
                y = 800;
              }

              page.drawText(line, {
                x: margin,
                y,
                size: 10,
                font: font,
              });
              y -= lineHeight;
              line = word;
              linesCount++;

              // Limit number of lines per review
              if (linesCount >= maxLines) {
                line += '...';
                break;
              }
            } else {
              line = testLine;
            }
          }

          if (line) {
            // Check if we need a new page
            if (y < 100) {
              page = pdfDoc.addPage([595.28, 841.89]);
              y = 800;
            }

            page.drawText(line, {
              x: margin,
              y,
              size: 10,
              font: font,
            });
            y -= lineHeight;
          }

          // Reviewer name
          const reviewerName = review.writer?.name || review.writer?.username || 'Anonymous';

          // Check if we need a new page
          if (y < 100) {
            page = pdfDoc.addPage([595.28, 841.89]);
            y = 800;
          }

          page.drawText(`- ${reviewerName}`, {
            x: margin,
            y,
            size: 10,
            font: boldFont,
          });

          y -= 25; // Increased spacing between reviews
        });

        // Add link to see all reviews
        y -= 10;
        page.drawText('See all my testimonials at: https://marktellez.com/testimonials', {
          x: margin,
          y,
          size: 10,
          font: font,
        });

        y -= 20;
      }
    }

    // Add footer with website URL
    const pages = pdfDoc.getPages();
    pages.forEach(p => {
      p.drawText('The document was built in real-time from https://marktellez.com/resume', {
        x: margin,
        y: 30,
        size: 8,
        font: font,
      });
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Ensure the public directory exists
    const publicDir = path.join(process.cwd(), 'public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    // Write the PDF to the public directory
    const pdfPath = path.join(publicDir, 'mark-tellez-sr-software-engineer-ai-engineer.pdf');
    fs.writeFileSync(pdfPath, pdfBytes);

    console.log(`✅ Resume PDF generated at public/mark-tellez-sr-software-engineer-ai-engineer.pdf`);
  } catch (error) {
    console.error('PDF generation error:', error);
    process.exit(1);
  }
}

// Run the function
buildResumePDF();
