import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import resumeData from '@/data/resume.json';

export const runtime = 'edge';

export async function GET() {
  try {
    // Create a new PDF document
    const pdfDoc = await PDFDocument.create();

    // Add a page to the document
    let page = pdfDoc.addPage([595.28, 841.89]); // A4 size

    // Get the standard font
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Set initial position
    let y = 800;
    const margin = 50;

    // Add personal info from stats
    page.drawText(resumeData.stats.name, {
      x: margin,
      y,
      size: 24,
      font: boldFont,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 20;

    // Add title
    page.drawText(resumeData.stats.title, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 15;

    // Add contact email
    page.drawText(resumeData.stats.contactEmail, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 15;

    // Add address
    page.drawText(resumeData.stats.address, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 15;

    // Add phone number
    page.drawText(resumeData.stats.phoneNumber, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 15;

    // Add LinkedIn
    page.drawText(`LinkedIn: ${resumeData.stats.linkedin}`, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 15;

    // Add GitHub
    page.drawText(`GitHub: ${resumeData.stats.github}`, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 40;

    // Add achievements section if available
    if (resumeData.achievements && resumeData.achievements.length > 0) {
      page.drawText('Achievements', {
        x: margin,
        y,
        size: 16,
        font: boldFont,
        color: rgb(0, 0, 0), // Black text
      });

      y -= 20;

      resumeData.achievements.forEach((achievement) => {
        // Check if we need a new page
        if (y < 150) {
          page = pdfDoc.addPage([595.28, 841.89]);
          y = 800;
        }

        // Achievement title
        page.drawText(achievement.title, {
          x: margin,
          y,
          size: 12,
          font: boldFont,
          color: rgb(0, 0, 0), // Black text
        });

        y -= 15;

        // Achievement description
        page.drawText(achievement.description, {
          x: margin,
          y,
          size: 10,
          font: font,
          color: rgb(0, 0, 0), // Black text
        });

        y -= 15;

        // Achievement URL if available
        if (achievement.url) {
          page.drawText(`URL: ${achievement.url}`, {
            x: margin,
            y,
            size: 9,
            font: font,
            color: rgb(0, 0, 0), // Black text
          });
          y -= 15;
        }

        // Achievement year if available
        if (achievement.year) {
          page.drawText(`Year: ${achievement.year}`, {
            x: margin,
            y,
            size: 9,
            font: font,
            color: rgb(0, 0, 0), // Black text
          });
          y -= 15;
        }

        y -= 10; // Extra space between achievements
      });

      y -= 20; // Space after achievements section
    }

    // Add skills section
    page.drawText('Skills & Expertise', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 20;

    // Process skills
    Object.entries(resumeData.skills).forEach(([category, skills]) => {
      // Check if we need a new page
      if (y < 150) {
        page = pdfDoc.addPage([595.28, 841.89]);
        y = 800;
      }

      // Draw category
      page.drawText(category, {
        x: margin,
        y,
        size: 12,
        font: boldFont,
        color: rgb(0, 0, 0), // Black text
      });

      y -= 15;

      // Draw skills with years of experience
      const skillsText = skills.map(item => `${item.skill} (${item.yearsExperience}yr)`).join(', ');

      // Handle text wrapping for skills
      const words = skillsText.split(', ');
      let line = '';

      for (const word of words) {
        const testLine = line + (line ? ', ' : '') + word;
        const textWidth = font.widthOfTextAtSize(testLine, 10);

        if (textWidth > page.getWidth() - 2 * margin && line) {
          page.drawText(line, {
            x: margin,
            y,
            size: 10,
            font: font,
            color: rgb(0, 0, 0), // Black text
          });
          y -= 15;
          line = word;
        } else {
          line = testLine;
        }
      }

      if (line) {
        page.drawText(line, {
          x: margin,
          y,
          size: 10,
          font: font,
          color: rgb(0, 0, 0), // Black text
        });
      }

      y -= 25;
    });

    // Add work experience section
    y -= 10;
    page.drawText('Work Experience', {
      x: margin,
      y,
      size: 16,
      font: boldFont,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 20;

    // Sort companies by 'from' year in descending order
    const sortedCompanies = [...resumeData.workExperience].sort((a, b) => {
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
        color: rgb(0, 0, 0), // Black text
      });

      y -= 15;

      // Role/title
      page.drawText(company.title || company.role, {
        x: margin,
        y,
        size: 11,
        font: font,
        color: rgb(0, 0, 0), // Black text
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
            color: rgb(0, 0, 0), // Black text
          });

          y -= 15;
        });
      }

      y -= 15;
    });

    // Add reviews section if there's space
    if (y > 200 && resumeData.reviews && resumeData.reviews.length > 0) {
      y -= 10;

      // Filter reviews with at least 200 characters
      const filteredReviews = resumeData.reviews.filter(review =>
        review.content && review.content.length >= 200
      );

      if (filteredReviews.length > 0) {
        page.drawText('Client Reviews', {
          x: margin,
          y,
          size: 16,
          font: boldFont,
          color: rgb(0, 0, 0), // Black text
        });

        y -= 20;

        // Process reviews (just show one or two)
        filteredReviews.slice(0, 2).forEach((review) => {
          // Check if we need a new page
          if (y < 150) {
            page = pdfDoc.addPage([595.28, 841.89]);
            y = 800;
          }

          // Review content (truncated)
          const content = review.content.length > 150
            ? review.content.substring(0, 150) + '...'
            : review.content;

          page.drawText(`"${content}"`, {
            x: margin,
            y,
            size: 10,
            font: font,
            color: rgb(0, 0, 0), // Black text
          });

          y -= 15;

          // Reviewer name
          const reviewerName = review.writer?.name || review.writer?.username || 'Anonymous';
          page.drawText(`- ${reviewerName}`, {
            x: margin,
            y,
            size: 10,
            font: boldFont,
            color: rgb(0, 0, 0), // Black text
          });

          y -= 25;
        });
      }
    }

    // Add education section
    if (resumeData.education && resumeData.education.length > 0) {
      y -= 10;

      page.drawText('Education', {
        x: margin,
        y,
        size: 16,
        font: boldFont,
        color: rgb(0, 0, 0), // Black text
      });

      y -= 20;

      resumeData.education.forEach((edu) => {
        // Check if we need a new page
        if (y < 150) {
          page = pdfDoc.addPage([595.28, 841.89]);
          y = 800;
        }

        // Institution and degree
        page.drawText(`${edu.institution} (${edu.from} - ${edu.to})`, {
          x: margin,
          y,
          size: 12,
          font: boldFont,
          color: rgb(0, 0, 0), // Black text
        });

        y -= 15;

        // Degree details
        page.drawText(`${edu.degree}${edu.minor ? `, Minor in ${edu.minor}` : ''}`, {
          x: margin,
          y,
          size: 11,
          font: font,
          color: rgb(0, 0, 0), // Black text
        });

        if (edu.gpa) {
          y -= 15;
          page.drawText(`GPA: ${edu.gpa}`, {
            x: margin,
            y,
            size: 10,
            font: font,
            color: rgb(0, 0, 0), // Black text
          });
        }

        y -= 20;
      });
    }

    // Add footer with website URL
    const pages = pdfDoc.getPages();
    pages.forEach(p => {
      p.drawText('The document was built in real-time from https://marktellez.com/resume', {
        x: margin,
        y: 30,
        size: 8,
        font: font,
        color: rgb(0, 0, 0), // Black text
      });
    });

    // Serialize the PDF to bytes
    const pdfBytes = await pdfDoc.save();

    // Return the PDF as a response
    return new NextResponse(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="mark-tellez-sr-software-engineer-ai-engineer.pdf"'
      }
    });
  } catch (error) {
    console.error('PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}
