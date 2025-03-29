import { NextResponse } from 'next/server';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import skillsData from '@/data/skills.json';
import resumeData from '@/data/resume.json';
import reviewsData from '@/data/reviews.json';
import statsData from '@/data/stats.json';

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

    // Fetch and embed the photo
    const photoUrl = new URL(statsData.photo, 'https://marktellez.com').href;
    const photoResponse = await fetch(photoUrl);
    const photoArrayBuffer = await photoResponse.arrayBuffer();

    let photoImage;
    try {
      // Try to embed as PNG first
      photoImage = await pdfDoc.embedPng(photoArrayBuffer);
    } catch (e) {
      // If not PNG, try JPEG
      photoImage = await pdfDoc.embedJpg(photoArrayBuffer);
    }

    // Calculate photo dimensions (max height 100)
    const photoMaxHeight = 100;
    const photoAspectRatio = photoImage.width / photoImage.height;
    const photoHeight = photoMaxHeight;
    const photoWidth = photoHeight * photoAspectRatio;

    // Draw the photo on the right side
    const photoX = page.getWidth() - margin - photoWidth;
    page.drawImage(photoImage, {
      x: photoX,
      y: y - photoHeight + 30, // Align with name
      width: photoWidth,
      height: photoHeight,
    });

    // Add personal info from stats
    page.drawText(statsData.name, {
      x: margin,
      y,
      size: 24,
      font: boldFont,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 20;

    // Add title
    page.drawText(statsData.title, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 15;

    // Add contact email
    page.drawText(statsData.contactEmail, {
      x: margin,
      y,
      size: 12,
      font: font,
      color: rgb(0, 0, 0), // Black text
    });

    y -= 40;

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
    Object.entries(skillsData).forEach(([category, skills]) => {
      // Draw category
      page.drawText(category, {
        x: margin,
        y,
        size: 12,
        font: boldFont,
        color: rgb(0, 0, 0), // Black text
      });

      y -= 15;

      // Draw skills (comma-separated)
      const skillsText = skills.join(', ');

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
    if (y > 200) {
      y -= 10;

      // Filter reviews with at least 200 characters
      const filteredReviews = reviewsData.filter(review =>
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
