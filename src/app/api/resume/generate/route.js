import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import fs from 'fs';
import path from 'path';
import OpenAI from "openai";
import skills from "@/data/skills.json";
import resume from "@/data/resume.json";
import stats from "@/data/stats.json";

const openai = new OpenAI({
    baseURL: "https://api.deepseek.com",
    apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(req) {
    try {
        const { jobDescription } = await req.json();

        if (!jobDescription) {
            return new Response(JSON.stringify({ error: "Job description is required." }), { status: 400 });
        }

        // Get tailored content from AI
        const tailoredContent = await getTailoredContent(jobDescription);

        // Generate PDF with tailored content
        const pdfBytes = await buildTailoredResumePDF(tailoredContent);

        // Return PDF as base64 string
        return new Response(JSON.stringify({
            pdf: Buffer.from(pdfBytes).toString('base64'),
            summary: tailoredContent.summary
        }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error('Error generating tailored resume:', error);
        return new Response(JSON.stringify({ error: error.message || "Failed to generate resume" }), {
            status: 500
        });
    }
}

async function getTailoredContent(jobDescription) {
    // Format data for AI prompt
    const skillsFormatted = Object.entries(skills)
        .map(([category, items]) => `${category}: ${items.join(", ")}`)
        .join("\n");

    const resumeFormatted = resume
        .map((job, index) => `[${index}] ${job.role} at ${job.company} (${job.from} - ${job.to}):\n${job.highlights.map((highlight, hIndex) => `  [${hIndex}] ${highlight}`).join("\n")}`)
        .join("\n\n");

    // Extract keywords from job description
    const keywordExtraction = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are a precise keyword extraction tool. Extract ONLY the EXACT technical skills, technologies, frameworks, and programming languages that are EXPLICITLY mentioned in the job description.`
            },
            {
                role: "user",
                content: `
                Job Description:
                ${jobDescription}
                
                Extract ONLY the EXACT technical skills, technologies, frameworks, and programming languages that are EXPLICITLY mentioned in this job description.
                Return the result as a JSON array of strings, nothing else.
                `
            }
        ],
        model: "deepseek-chat",
    });

    // Parse the keywords
    const keywordResponse = keywordExtraction.choices[0]?.message?.content;
    let extractedKeywords = [];

    try {
        // Handle both raw JSON and code block formats
        const jsonMatch = keywordResponse.match(/```json\n([\s\S]*?)\n```/) ||
            keywordResponse.match(/\[([\s\S]*?)\]/);

        const jsonContent = jsonMatch ?
            jsonMatch[1] || jsonMatch[0] :
            keywordResponse;

        extractedKeywords = JSON.parse(jsonContent);
    } catch (e) {
        console.error("Failed to parse keywords:", e);
        extractedKeywords = keywordResponse
            .replace(/```json|```/g, '')
            .split(/,|\n/)
            .map(k => k.trim())
            .filter(k => k && !k.includes('[') && !k.includes(']'));
    }

    // Find matching skills and experience highlights
    const relevantSkills = [];
    const relevantExperiences = [];

    // Find matching skills
    Object.entries(skills).forEach(([category, skillsList]) => {
        skillsList.forEach(skill => {
            if (extractedKeywords.some(keyword =>
                keyword.toLowerCase() === skill.toLowerCase() ||
                skill.toLowerCase().includes(keyword.toLowerCase())
            )) {
                relevantSkills.push(skill);
            }
        });
    });

    // Find matching experience highlights
    resume.forEach(job => {
        const highlightedPoints = [];

        job.highlights.forEach((highlight, index) => {
            if (extractedKeywords.some(keyword =>
                highlight.toLowerCase().includes(keyword.toLowerCase())
            )) {
                highlightedPoints.push(index);
            }
        });

        if (highlightedPoints.length > 0) {
            relevantExperiences.push({
                company: job.company,
                highlightedPoints
            });
        }
    });

    // Generate a summary based on the matches
    const summaryPrompt = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are an expert resume writer who creates personalized, natural-sounding professional summaries. Your summaries should sound authentic, highlight the candidate's strengths, and explain why they're a great fit for the role in a conversational yet professional tone.`
            },
            {
                role: "user",
                content: `
                Job Description Keywords: ${extractedKeywords.join(", ")}
                
                My Matching Skills: ${relevantSkills.join(", ")}
                
                My Relevant Experience: ${relevantExperiences.map(exp =>
                    `${exp.company}: ${exp.highlightedPoints.map(idx =>
                        resume.find(job => job.company === exp.company).highlights[idx]
                    ).join("; ")}`
                ).join("\n")}
                
                Write a brief, natural-sounding professional summary (2-3 sentences) explaining why I'm an excellent fit for this position. 
            
                Make it sound like a real person wrote it, not an AI. Avoid generic phrases like "I am a perfect fit" or simply listing technologies. 
                Instead, weave my experience and skills into a compelling narrative that shows my value. Focus on my proven experience with the specific technologies and skills from the job description.
                `
            }
        ],
        model: "deepseek-chat",
    });

    const summary = summaryPrompt.choices[0]?.message?.content ||
        "Experienced professional with a proven track record in the required technologies.";

    return {
        summary,
        relevantSkills,
        relevantExperiences,
        jobKeywords: extractedKeywords
    };
}

// Modified version of buildResumePDF that accepts tailored content
async function buildTailoredResumePDF(tailoredContent) {
    // Create PDF document
    const pdfDoc = await PDFDocument.create();
    pdfDoc.registerFontkit(fontkit);

    // Add a page to the document
    let page = pdfDoc.addPage([595.28, 841.89]); // A4 size

    // Load fonts
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    // Font styles
    const fontStyles = {
        heading: { size: 16, font: boldFont },
        subheading: { size: 12, font: boldFont },
        normal: { size: 10, font: font },
        small: { size: 8, font: font }
    };

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
    page.drawText(stats.name, {
        x: textX,
        y,
        size: 24,
        font: boldFont,
    });

    y -= 20;

    // Add title
    page.drawText(stats.title, {
        x: textX,
        y,
        size: 12,
        font: font,
    });

    y -= 15;

    // Add website
    page.drawText(stats.website, {
        x: textX,
        y,
        size: 12,
        font: font,
    });

    y -= 15;

    // Add contact email
    page.drawText(stats.contactEmail, {
        x: textX,
        y,
        size: 12,
        font: font,
    });

    y -= 50;

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

    // Add tailored summary section
    y -= 20;
    page.drawText("Why I'm Perfect for This Position", {
        x: margin,
        y,
        size: 14,
        font: boldFont,
    });

    y -= 15;

    // Add tailored summary from AI
    const summaryWords = tailoredContent.summary.split(' ');
    let line = '';
    const maxWidth = page.getWidth() - (margin * 2);

    for (const word of summaryWords) {
        const testLine = line + (line ? ' ' : '') + word;
        const textWidth = font.widthOfTextAtSize(testLine, 10);

        if (textWidth > maxWidth && line) {
            page.drawText(line, {
                x: margin,
                y,
                size: 10,
                font: font,
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
        });
        y -= 15;
    }

    y -= 20;

    // Add relevant skills section with highlighting
    page.drawText('Most Relevant Skills', {
        x: margin,
        y,
        size: 14,
        font: boldFont,
    });

    y -= 15;

    // Draw relevant skills with yellow highlighting
    if (tailoredContent.relevantSkills && tailoredContent.relevantSkills.length > 0) {
        const skillsText = tailoredContent.relevantSkills.join(', ');
        const words = skillsText.split(' ');
        line = '';

        for (const word of words) {
            const testLine = line + (line ? ' ' : '') + word;
            const textWidth = font.widthOfTextAtSize(testLine, 10);

            if (textWidth > maxWidth && line) {
                // Draw yellow highlight
                const textWidth = font.widthOfTextAtSize(line, 10);
                page.drawRectangle({
                    x: margin - 2,
                    y: y - 2,
                    width: textWidth + 4,
                    height: 14,
                    color: rgb(1, 0.9, 0.4), // Light yellow
                });

                // Draw text
                page.drawText(line, {
                    x: margin,
                    y,
                    size: 10,
                    font: font,
                    color: rgb(0, 0, 0),
                });

                y -= 15;
                line = word;
            } else {
                line = testLine;
            }
        }

        if (line) {
            // Draw yellow highlight for last line
            const textWidth = font.widthOfTextAtSize(line, 10);
            page.drawRectangle({
                x: margin - 2,
                y: y - 2,
                width: textWidth + 4,
                height: 14,
                color: rgb(1, 0.9, 0.4), // Light yellow
            });

            // Draw text
            page.drawText(line, {
                x: margin,
                y,
                size: 10,
                font: font,
                color: rgb(0, 0, 0),
            });

            y -= 15;
        }
    }

    y -= 20;

    // Add other skills section
    page.drawText('Additional Skills', {
        x: margin,
        y,
        size: 14,
        font: boldFont,
    });

    y -= 15;

    // Process skills by category (similar to original script)
    Object.entries(skills).forEach(([category, skillsList]) => {
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
        let line = '';
        let lines = [];

        skillsList.forEach((skill, index) => {
            const testLine = line + (line ? ', ' : '') + skill;
            const textWidth = font.widthOfTextAtSize(testLine, 10);

            if (textWidth > maxWidth && line) {
                lines.push(line);
                line = skill;
            } else {
                line = testLine;
            }

            if (index === skillsList.length - 1 && line) {
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

    // Force Work Experience to start on a new page
    page = pdfDoc.addPage([595.28, 841.89]);
    y = 800; // Reset y position for the new page

    // Add work experience section
    page.drawText('Relevant Work Experience', {
        x: margin,
        y,
        size: 16,
        font: boldFont,
    });

    y -= 10;

    drawHorizontalLine(y);

    y -= 30;

    // Get relevant experiences from tailored content
    const relevantExperiences = tailoredContent.relevantExperiences || [];
    const relevantCompanies = relevantExperiences.map(exp => exp.company);

    // Sort companies by 'from' year in descending order
    const sortedCompanies = [...resume].sort((a, b) => {
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

        const isRelevant = relevantCompanies.includes(company.company);

        // If relevant, add a background highlight for the company name
        if (isRelevant) {
            // Company name and duration
            const companyText = `${company.company} (${company.from} - ${company.to})`;
            const textWidth = boldFont.widthOfTextAtSize(companyText, 12);

            // Draw yellow highlight behind company name
            page.drawRectangle({
                x: margin - 2,
                y: y - 2,
                width: textWidth + 4,
                height: 14,
                color: rgb(1, 0.9, 0.4), // Light yellow
            });
        }

        // Company name and duration
        const companyText = `${company.company} (${company.from} - ${company.to})`;
        page.drawText(companyText, {
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

        // Find relevant highlights for this company
        const relevantExp = relevantExperiences.find(exp => exp.company === company.company);
        const highlightedPoints = relevantExp ? relevantExp.highlightedPoints : [];

        // Highlights
        if (company.highlights && company.highlights.length > 0) {
            company.highlights.forEach((highlight, index) => {
                // Check if we need a new page
                if (y < 150) {
                    page = pdfDoc.addPage([595.28, 841.89]);
                    y = 800;
                }

                // Check if this highlight should be highlighted (based on AI recommendation)
                const shouldHighlight = isRelevant && highlightedPoints.includes(index);

                if (shouldHighlight) {
                    // Draw yellow highlight behind the highlight text
                    const textWidth = font.widthOfTextAtSize(`• ${highlight}`, 10);
                    page.drawRectangle({
                        x: margin + 8, // Slightly left of the bullet point
                        y: y - 2,
                        width: textWidth + 4,
                        height: 14,
                        color: rgb(1, 0.9, 0.4), // Light yellow
                    });
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

    // Add footer with website URL
    const pages = pdfDoc.getPages();
    pages.forEach(p => {
        p.drawText('This resume was tailored specifically for this position - https://marktellez.com/resume', {
            x: margin,
            y: 30,
            size: 8,
            font: font,
        });
    });

    // Serialize the PDF to bytes
    return await pdfDoc.save();
}
