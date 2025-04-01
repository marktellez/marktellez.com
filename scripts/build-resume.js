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

    // Function to draw a horizontal line
    const drawHorizontalLine = (yPosition) => {
      page.drawLine({
        start: { x: margin, y: yPosition },
        end: { x: page.getWidth() - margin, y: yPosition },
        thickness: 1,
        color: rgb(0.8, 0.8, 0.8), // Light gray line
      });
      return yPosition - 15; // Return new y position after line
    };

    // After personal info section
    y -= 20; // Just add spacing instead of drawing a line

    // Add "Builder & Engineer" heading for other info
    if (statsData.shortBio) {
      page.drawText("Builder & Engineer", {
        x: margin,
        y,
        size: 14,
        font: boldFont,
      });

      y -= 15;

      // Add other info from stats
      page.drawText(statsData.shortBio, {
        x: margin,
        y,
        size: 12,
        font: font,
      });
      y -= 15;
    }

    // Removed horizontal line after Builder & Engineer section
    y -= 10; // Just add some spacing instead

    // Achievement box section
    y -= 20;

    // Create a bordered box for the achievement
    const boxMargin = 10;
    const boxWidth = page.getWidth() - (margin * 2);
    const boxHeight = 85;
    const cornerRadius = 4;

    // Draw box with rounded corners - no background color
    page.drawRectangle({
      x: margin - boxMargin,
      y: y - boxHeight + boxMargin,
      width: boxWidth + (boxMargin * 2),
      height: boxHeight,
      borderColor: rgb(0.7, 0.7, 0.7),
      borderWidth: 1,
      color: undefined,
      borderRadius: cornerRadius,
    });

    // Achievement content inside the box
    y -= 15;

    page.drawText('AI Programming Champion - CodinGame Fantastic Bits', {
      x: margin,
      y,
      size: 12,
      font: boldFont,
    });

    y -= 15;

    page.drawText('Ranked #8 out of 5,000 participants worldwide', {
      x: margin + 10,
      y,
      size: 10,
      font: font,
    });

    y -= 15;

    page.drawText('Developed an advanced AI agent using reinforcement learning techniques', {
      x: margin + 10,
      y,
      size: 10,
      font: font,
    });

    y -= 15;

    page.drawText('Leaderboard: https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard', {
      x: margin + 10,
      y,
      size: 10,
      font: font,
    });

    y -= 30;

    // After achievement box section
    y -= 15; // Just add spacing instead of drawing a line

    // Skills section
    y -= 15;
    page.drawText('Skills', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    // Add horizontal line under Skills heading
    y -= 10;
    drawHorizontalLine(y);
    y -= 30;

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

    y -= 10;

    drawHorizontalLine(y);

    y -= 30;

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

    // Force Work Experience to start on a new page
    page = pdfDoc.addPage([595.28, 841.89]);
    y = 800; // Reset y position for the new page

    // Add work experience section
    page.drawText('Work Experience', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    y -= 10;

    drawHorizontalLine(y);

    y -= 30;

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

    // Add reviews section - force it to start on page 5
    // First, count current pages and add pages until we reach page 5
    const currentPageCount = pdfDoc.getPageCount();
    console.log(`Current page count before reviews: ${currentPageCount}`);

    // If we have fewer than 5 pages, add empty pages until we reach page 5
    while (pdfDoc.getPageCount() < 5) {
      pdfDoc.addPage([595.28, 841.89]);
      console.log(`Added page, now at ${pdfDoc.getPageCount()} pages`);
    }

    // Get the 5th page (index 4)
    page = pdfDoc.getPage(4);
    y = 800; // Reset y position for the new page

    // Use specific handpicked reviews instead of filtering from reviewsData
    const handpickedReviews = [
      {
        content: "I've used Mark a couple times. He is awesome! I've been using Rails, etc for 7+ years but I still get hung up once in a while...Mark knows his $h!. I won't search for mentors anymore...I'll just use Mark.",
        writer: { name: "Adam Stockland" }
      },
      {
        content: "Ive known about Mark for a while through his React courses, I reached out to him to help me start architecting an app I am building as a side project. He was awesome! I got answers to alot of the areas of this project that I was unfamiliar with and we planned out a way to get the project going. Really looking forward to continuing to work with him.",
        writer: { name: "Thomas Anderson" }
      },
      {
        content: "Mark has a wealth of knowledge and expertise that is hard to find. Perfect mentor in many ways: clear and concise communication, reliable and a great teacher. I highly recommend working with him if you need help.",
        writer: { name: "Jelena Grimshaw" }
      },
      {
        content: "Wow, Mark has really proved himself to be an expert in many ways. Definitely worth the investment and here's why: Pros: He works really fast, gave me some really helpful tips, explained me everything through meaningful examples and even improved some parts of already existing code in a way which makes them more clean and usable. Cons: I only wish the session was longer as I am looking forward to another one :)",
        writer: { name: "Daniel Star" }
      },
      {
        content: "Mark is so good at JavaScript and React (and Redux). He immediately knows how to address the task at hand and then starts throwing down code. I really appreciate his positive attitude and the time he takes to walk me through the work.",
        writer: { name: "Ashley" }
      },
      {
        content: "Mark has been helping us daily with my website for about a week now and I would confidently recommend him to any peer looking for someone who is a fast developer, strong communicator and honest worker.",
        writer: { name: "Jack Bordner" }
      },
      {
        content: "Mark completed a project for us within a short amount of time. His code was excellent and he always confirmed we understood his work for the handoff.",
        writer: { name: "Jeff Carroll" }
      }
    ];

    console.log(`Total reviews to process: ${handpickedReviews.length}`);
    console.log(`Reviews: ${handpickedReviews.map(r => r.writer.name).join(', ')}`);

    if (handpickedReviews.length > 0) {
      page.drawText('Client Reviews', {
        x: margin,
        y,
        size: 16,
        font: boldFont,
      });

      y -= 10;
      drawHorizontalLine(y);
      y -= 20;

      // Process handpicked reviews
      handpickedReviews.forEach((review, index) => {
        console.log(`Processing review ${index + 1} by ${review.writer.name}, y position: ${y}`);

        // Check if we need a new page - ensure enough space for at least 5 lines
        if (y < 200) {
          console.log(`  Adding new page for review ${index + 1}, y was: ${y}`);
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
        const reviewerName = review.writer?.name || 'Anonymous';

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
