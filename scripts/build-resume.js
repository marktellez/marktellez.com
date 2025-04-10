// Update the build-resume.js script to handle the new JSON structure and undefined values

const fs = require('fs');
const path = require('path');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fontkit = require('@pdf-lib/fontkit');

// Import data - only use resume.json
const resumeData = require('../src/data/resume.json');

async function buildResumePDF() {
  try {
    console.log('🔍 Generating resume PDF...');

    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    // Add a page to the document
    let page = pdfDoc.addPage([595.28, 841.89]); // A4 size

    let font, boldFont;
    try {
      const mediumFontPath = path.join(process.cwd(), 'public', 'fonts', 'Helvetica.ttf');
      const blackFontPath = path.join(process.cwd(), 'public', 'fonts', 'Helvetica-Bold.ttf');

      if (fs.existsSync(mediumFontPath) && fs.existsSync(blackFontPath)) {
        const mediumFontBytes = fs.readFileSync(mediumFontPath);
        const blackFontBytes = fs.readFileSync(blackFontPath);

        // Register fontkit
        pdfDoc.registerFontkit(fontkit);

        // Embed the fonts with their proper weights
        font = await pdfDoc.embedFont(mediumFontBytes);      // MEDIUM weight
        boldFont = await pdfDoc.embedFont(blackFontBytes);   // BLACK/BOLD weight

        console.log('Successfully loaded  fonts with proper weights');
      } else {
        throw new Error(' fonts not found in public/fonts directory');
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

    // Helper function to safely draw text (check for undefined values)
    const safeDrawText = (text, options) => {
      if (text !== undefined && text !== null) {
        page.drawText(String(text), options);
      } else {
        console.log(`Warning: Attempted to draw undefined text at y=${options.y}`);
      }
    };

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
    safeDrawText(resumeData.stats.name, {
      x: textX,
      y,
      size: 24,
      font: boldFont,
    });

    y -= 20;

    // Add title
    safeDrawText(resumeData.stats.title, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 15;

    // Add location
    safeDrawText(resumeData.stats.address, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 15;

    // Add phone number
    safeDrawText(resumeData.stats.phoneNumber, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 15;

    // Add website
    safeDrawText(resumeData.stats.website, {
      x: textX,
      y,
      size: 12,
      font: font,
    });

    y -= 15;

    // Add contact email
    safeDrawText(resumeData.stats.contactEmail, {
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
    if (resumeData.stats.shortBio) {
      safeDrawText("Builder & Engineer", {
        x: margin,
        y,
        size: 14,
        font: boldFont,
      });

      y -= 15;

      // Add text wrapping for shortBio
      const bioWords = resumeData.stats.bio.split(' ');
      let bioLine = '';
      const maxWidth = page.getWidth() - (margin * 2);

      for (const word of bioWords) {
        const testLine = bioLine + (bioLine ? ' ' : '') + word;
        const textWidth = font.widthOfTextAtSize(testLine, 12);

        if (textWidth > maxWidth && bioLine) {
          safeDrawText(bioLine, {
            x: margin,
            y,
            size: 12,
            font: font,
          });
          y -= 15;
          bioLine = word;
        } else {
          bioLine = testLine;
        }
      }

      if (bioLine) {
        safeDrawText(bioLine, {
          x: margin,
          y,
          size: 12,
          font: font,
        });
        y -= 15;
      }
    } else if (resumeData.stats.bio) {
      // Fallback to bio if shortBio is not available
      safeDrawText("About me", {
        x: margin,
        y,
        size: 14,
        font: boldFont,
      });

      y -= 15;

      // Add text wrapping for bio
      const bioWords = resumeData.stats.bio.split(' ');
      let bioLine = '';
      const maxWidth = page.getWidth() - (margin * 2);

      for (const word of bioWords) {
        const testLine = bioLine + (bioLine ? ' ' : '') + word;
        const textWidth = font.widthOfTextAtSize(testLine, 12);

        if (textWidth > maxWidth && bioLine) {
          safeDrawText(bioLine, {
            x: margin,
            y,
            size: 12,
            font: font,
          });
          y -= 15;
          bioLine = word;
        } else {
          bioLine = testLine;
        }
      }

      if (bioLine) {
        safeDrawText(bioLine, {
          x: margin,
          y,
          size: 12,
          font: font,
        });
        y -= 15;
      }
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

    safeDrawText('AI Programming Champion - CodinGame Fantastic Bits', {
      x: margin,
      y,
      size: 12,
      font: boldFont,
    });

    y -= 15;

    safeDrawText('Ranked #8 out of 5,000 participants worldwide', {
      x: margin + 10,
      y,
      size: 10,
      font: font,
    });

    y -= 15;

    safeDrawText('Developed an advanced AI agent using reinforcement learning techniques', {
      x: margin + 10,
      y,
      size: 10,
      font: font,
    });

    y -= 15;

    safeDrawText('Leaderboard: https://www.codingame.com/multiplayer/bot-programming/fantastic-bits/leaderboard', {
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
    safeDrawText('Skills', {
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

    // Process skills by category - adapt for new JSON structure
    if (resumeData.skills) {
      Object.entries(resumeData.skills).forEach(([category, skills]) => {
        // Check if we need a new page
        if (y < 150) {
          page = pdfDoc.addPage([595.28, 841.89]);
          y = 800;
        }

        // Category name as subheading
        safeDrawText(category, {
          x: margin,
          y,
          ...fontStyles.subheading
        });

        y -= 15;

        // Extract skill names from the new structure (objects with skill and yearsExperience)
        const skillNames = skills.map(item =>
          typeof item === 'object' && item.skill ? item.skill : String(item)
        );

        // Split long skill lists into multiple lines
        const maxLineWidth = page.getWidth() - (margin * 2);
        let line = '';
        let lines = [];

        skillNames.forEach((skill, index) => {
          const testLine = line + (line ? ', ' : '') + skill;
          const textWidth = font.widthOfTextAtSize(testLine, 10);

          if (textWidth > maxLineWidth && line) {
            lines.push(line);
            line = skill;
          } else {
            line = testLine;
          }

          if (index === skillNames.length - 1 && line) {
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
            safeDrawText(line, {
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
    }

    // Add Education section
    y -= 10;
    safeDrawText('Education', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    y -= 10;

    drawHorizontalLine(y);

    y -= 30;

    // Check if education data exists and is iterable
    if (resumeData.education && Array.isArray(resumeData.education)) {
      // Process education entries
      resumeData.education.forEach((edu) => {
        // Check if we need a new page
        if (y < 150) {
          page = pdfDoc.addPage([595.28, 841.89]);
          y = 800;
        }

        // Institution name and duration
        safeDrawText(`${edu.institution} (${edu.from} - ${edu.to})`, {
          x: margin,
          y,
          size: 12,
          font: boldFont,
        });

        y -= 15;

        // Degree and minor if available
        const degreeText = edu.minor
          ? `${edu.degree}, Minor in ${edu.minor}`
          : edu.degree;

        safeDrawText(degreeText, {
          x: margin,
          y,
          size: 11,
          font: font,
        });

        y -= 15;

        // GPA if available
        if (edu.gpa) {
          safeDrawText(`GPA: ${edu.gpa}`, {
            x: margin,
            y,
            size: 10,
            font: font,
          });
          y -= 15;
        }

        // Details/coursework
        if (edu.details && Array.isArray(edu.details)) {
          // Add a small header for details
          safeDrawText("Coursework & Focus Areas:", {
            x: margin,
            y,
            size: 10,
            font: boldFont,
          });

          y -= 15;

          edu.details.forEach((detail) => {
            // Check if we need a new page
            if (y < 150) {
              page = pdfDoc.addPage([595.28, 841.89]);
              y = 800;
            }

            safeDrawText(`• ${detail}`, {
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
    } else {
      // Add education message as fallback
      safeDrawText('To see my education history, visit https://marktellez.com/education', {
        x: margin,
        y,
        size: 10,
        font: font,
      });
    }

    y -= 15;


    // Add work experience section
    safeDrawText('Work Experience', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
    });

    y -= 10;

    drawHorizontalLine(y);

    y -= 30;

    // Use workExperience array from the new JSON structure
    const workExperience = resumeData.workExperience || [];

    // Sort companies by 'from' year in descending order
    const sortedCompanies = [...workExperience].sort((a, b) => {
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
      safeDrawText(`${company.company} (${company.from} - ${company.to})`, {
        x: margin,
        y,
        size: 12,
        font: boldFont,
      });

      y -= 15;

      // Role/title
      safeDrawText(company.title || company.role, {
        x: margin,
        y,
        size: 11,
        font: font,
      });

      y -= 15;

      // Location if available
      if (company.location) {
        safeDrawText(`Location: ${company.location}`, {
          x: margin,
          y,
          size: 10,
          font: font,
        });
        y -= 15;
      }

      // Highlights
      if (company.highlights && company.highlights.length > 0) {
        company.highlights.forEach((highlight) => {
          // Check if we need a new page
          if (y < 150) {
            page = pdfDoc.addPage([595.28, 841.89]);
            y = 800;
          }

          safeDrawText(`• ${highlight}`, {
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
