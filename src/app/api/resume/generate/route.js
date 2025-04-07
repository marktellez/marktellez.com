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

        // Extract company and position from job description
        const extractionResponse = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a precise information extraction tool. Extract only the company name and job position from the job description."
                },
                {
                    role: "user",
                    content: `
                    Job Description:
                    ${jobDescription}
                    
                    Extract the company name and job position from this job description.
                    Return the result as a JSON object with 'company' and 'position' fields, nothing else.
                    If you cannot determine either value, use null.
                    `
                }
            ],
            model: "deepseek-chat",
        });

        const extractionContent = extractionResponse.choices[0]?.message?.content;
        let extractedCompany = null;
        let extractedPosition = null;

        try {
            // Parse the extraction response
            const jsonMatch = extractionContent.match(/```json\n([\s\S]*?)\n```/) ||
                extractionContent.match(/{[\s\S]*}/);

            const jsonContent = jsonMatch ?
                jsonMatch[1] || jsonMatch[0] :
                extractionContent;

            const extractedInfo = JSON.parse(jsonContent);
            extractedCompany = extractedInfo.company;
            extractedPosition = extractedInfo.position;
        } catch (e) {
            console.error("Failed to parse company/position extraction:", e);
        }

        // Get tailored content from AI
        const tailoredContent = await getTailoredContent(jobDescription);

        // Generate PDF with tailored content
        const pdfBytes = await buildTailoredResumePDF(tailoredContent);

        // Create a sanitized filename
        const sanitizedCompany = extractedCompany ? extractedCompany.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'company';
        const sanitizedPosition = extractedPosition ? extractedPosition.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'position';
        const filename = `Mark_Tellez_Resume_${sanitizedCompany}_${sanitizedPosition}.pdf`;

        // Return PDF as base64 string with filename and extracted info
        return new Response(JSON.stringify({
            pdf: Buffer.from(pdfBytes).toString('base64'),
            summary: tailoredContent.summary,
            filename: filename,
            extractedCompany: extractedCompany,
            extractedPosition: extractedPosition
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

    // Extract keywords from job description with improved prompt
    const keywordExtraction = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are a precise keyword extraction tool. Extract ONLY the EXACT technical skills, technologies, frameworks, and programming languages that are EXPLICITLY mentioned in the job description. Do not infer or add related technologies.`
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
            keywordResponse.match(/{[\s\S]*}/) ||
            keywordResponse.match(/\[([\s\S]*?)\]/);

        const jsonContent = jsonMatch ?
            jsonMatch[1] || jsonMatch[0] :
            keywordResponse;

        extractedKeywords = JSON.parse(jsonContent);
    } catch (e) {
        console.error("Failed to parse keywords:", e);
        // If parsing fails, try to extract keywords as a fallback
        extractedKeywords = keywordResponse
            .replace(/```json|```/g, '')
            .split(/,|\n/)
            .map(k => k.trim())
            .filter(k => k && !k.includes('[') && !k.includes(']'));
    }

    // Get tailored content with improved prompt
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content: `You are an expert resume tailoring assistant. Your task is to identify which skills and experiences in a resume match the EXACT requirements in a job description. Only match EXACT technologies mentioned in the job description, not similar or related ones.`
            },
            {
                role: "user",
                content: `
                Job Description Keywords (ONLY match these EXACT terms):
                ${JSON.stringify(extractedKeywords)}
                
                My Skills:
                ${skillsFormatted}
                
                My Experience (with indexes):
                ${resumeFormatted}
                
                Instructions:
                1. Create a brief summary of why I'm a good fit for this position based ONLY on the exact keywords
                2. List ONLY my skills that EXACTLY match the keywords from the job description
                3. For each job in my experience, determine if it mentions any of the exact keywords
                4. For each relevant job, identify which specific bullet points (by index) contain the exact keywords
                
                IMPORTANT RULES:
                - ONLY include skills that EXACTLY match the keywords from the job description
                - DO NOT include any technologies not explicitly mentioned in the job description
                - A bullet point is only relevant if it explicitly mentions one of the exact keywords
                
                Format your response as JSON with the following structure:
                {
                    "summary": "...",
                    "relevantSkills": ["skill1", "skill2", ...],
                    "relevantExperiences": [
                        {
                            "company": "Company Name",
                            "highlightedPoints": [0, 2] // Indexes of highlights to emphasize
                        }
                    ],
                    "jobKeywords": ${JSON.stringify(extractedKeywords)}
                }
                `
            }
        ],
        model: "deepseek-chat",
    });

    // Parse the AI response
    const responseContent = completion.choices[0]?.message?.content;
    if (!responseContent) {
        throw new Error("Failed to generate tailored content");
    }

    // Extract JSON from the response
    const jsonMatch = responseContent.match(/```json\n([\s\S]*?)\n```/) ||
        responseContent.match(/{[\s\S]*}/);

    const jsonContent = jsonMatch ?
        jsonMatch[1] || jsonMatch[0] :
        responseContent;

    try {
        return JSON.parse(jsonContent);
    } catch (e) {
        console.error("Failed to parse AI response:", e);
        throw new Error("Failed to parse tailored content");
    }
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

        // Draw skills with individual highlighting for matches
        let currentX = margin;
        let currentLine = '';

        for (let i = 0; i < skillsList.length; i++) {
            const skill = skillsList[i];
            const separator = i < skillsList.length - 1 ? ', ' : '';
            const textToAdd = skill + separator;

            // Check if adding this skill would exceed the line width
            const testLine = currentLine + textToAdd;
            const testLineWidth = font.widthOfTextAtSize(testLine, 10);

            if (testLineWidth > maxWidth && currentLine) {
                // Draw the current line and move to next line
                currentX = margin;
                y -= 15;
                currentLine = '';

                // Check if we need a new page
                if (y < 150) {
                    page = pdfDoc.addPage([595.28, 841.89]);
                    y = 800;
                }
            }

            // Check if this skill matches any relevant skill
            const isRelevant = tailoredContent.relevantSkills.some(
                relevantSkill => skill.toLowerCase() === relevantSkill.toLowerCase()
            );

            // Draw the skill (with highlighting if relevant)
            const skillWidth = font.widthOfTextAtSize(skill, 10);
            const separatorWidth = font.widthOfTextAtSize(separator, 10);

            if (isRelevant) {
                // Draw highlight behind the skill
                page.drawRectangle({
                    x: currentX - 2,
                    y: y - 2,
                    width: skillWidth + 4,
                    height: 14,
                    color: rgb(1, 0.9, 0.4), // Light yellow
                });
            }

            // Draw the skill text
            page.drawText(skill, {
                x: currentX,
                y,
                size: 10,
                font: font,
            });

            // Draw the separator (comma)
            if (separator) {
                page.drawText(separator, {
                    x: currentX + skillWidth,
                    y,
                    size: 10,
                    font: font,
                });
            }

            // Update current position and line
            currentX += skillWidth + separatorWidth;
            currentLine += textToAdd;
        }

        y -= 25; // Extra space after each category
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

        // Determine if company is relevant based on skill matches in highlights
        const isRelevant = company.highlights.some(highlight =>
            tailoredContent.relevantSkills.some(skill =>
                highlight.toLowerCase().includes(skill.toLowerCase())
            )
        );

        // Company name and duration
        const companyText = `${company.company} (${company.from} - ${company.to})`;

        // Check if company name needs wrapping
        const companyTextWidth = boldFont.widthOfTextAtSize(companyText, 12);
        if (companyTextWidth > maxWidth) {
            // Split into two lines if too long
            page.drawText(company.company, {
                x: margin,
                y,
                size: 12,
                font: boldFont,
            });
            y -= 15;

            const dateText = `(${company.from} - ${company.to})`;
            const dateTextWidth = boldFont.widthOfTextAtSize(dateText, 12);

            // If relevant, highlight the date line too
            if (isRelevant) {
                page.drawRectangle({
                    x: margin - 2,
                    y: y - 2,
                    width: dateTextWidth + 4,
                    height: 14,
                    color: rgb(1, 0.9, 0.4), // Light yellow
                });
            }

            page.drawText(dateText, {
                x: margin,
                y,
                size: 12,
                font: boldFont,
            });
        } else {
            // If relevant, add a background highlight for the company name
            if (isRelevant) {
                page.drawRectangle({
                    x: margin - 2,
                    y: y - 2,
                    width: companyTextWidth + 4,
                    height: 14,
                    color: rgb(1, 0.9, 0.4), // Light yellow
                });
            }

            page.drawText(companyText, {
                x: margin,
                y,
                size: 12,
                font: boldFont,
            });
        }

        y -= 15;

        // Role/title - with wrapping if needed
        const roleText = company.title || company.role;
        const roleWords = roleText.split(' ');
        let roleLine = '';

        for (const word of roleWords) {
            const testLine = roleLine + (roleLine ? ' ' : '') + word;
            const textWidth = font.widthOfTextAtSize(testLine, 11);

            if (textWidth > maxWidth && roleLine) {
                page.drawText(roleLine, {
                    x: margin,
                    y,
                    size: 11,
                    font: font,
                });
                y -= 15;
                roleLine = word;
            } else {
                roleLine = testLine;
            }
        }

        if (roleLine) {
            page.drawText(roleLine, {
                x: margin,
                y,
                size: 11,
                font: font,
            });
            y -= 15;
        }

        // Find relevant highlights for this company
        const relevantExp = relevantExperiences.find(exp => exp.company === company.company);
        const highlightedPoints = relevantExp ? relevantExp.highlightedPoints : [];

        // Highlights with proper wrapping
        if (company.highlights && company.highlights.length > 0) {
            company.highlights.forEach((highlight, index) => {
                // Check if we need a new page
                if (y < 150) {
                    page = pdfDoc.addPage([595.28, 841.89]);
                    y = 800;
                }

                // Find all relevant skills in this highlight
                const relevantSkillsInHighlight = tailoredContent.relevantSkills.filter(skill =>
                    highlight.toLowerCase().includes(skill.toLowerCase())
                );

                // Handle text wrapping for highlights
                const highlightText = `• ${highlight}`;
                const words = highlightText.split(' ');
                let line = words[0]; // Start with bullet point
                let firstLine = true;
                let currentX = firstLine ? margin + 10 : margin + 20;

                for (let i = 1; i < words.length; i++) {
                    const word = words[i];
                    const testLine = line + ' ' + word;
                    const textWidth = font.widthOfTextAtSize(testLine, 10);

                    if (textWidth > maxWidth && line) {
                        // Draw the current line
                        drawTextWithHighlightedSkills(
                            page,
                            line,
                            currentX,
                            y,
                            font,
                            relevantSkillsInHighlight
                        );

                        y -= 15;
                        line = word;
                        firstLine = false;
                        currentX = margin + 20; // Indent continuation lines

                        // Check if we need a new page
                        if (y < 150) {
                            page = pdfDoc.addPage([595.28, 841.89]);
                            y = 800;
                        }
                    } else {
                        line = testLine;
                    }
                }

                // Draw the last line
                if (line) {
                    drawTextWithHighlightedSkills(
                        page,
                        line,
                        currentX,
                        y,
                        font,
                        relevantSkillsInHighlight
                    );
                    y -= 15;
                }
            });
        }

        // Add reason for leaving if it exists
        if (company.reasonForLeaving) {
            // Check if we need a new page
            if (y < 150) {
                page = pdfDoc.addPage([595.28, 841.89]);
                y = 800;
            }

            // Add some space before reason for leaving
            y -= 5;

            // Draw "Reason for Leaving:" label
            page.drawText("Reason for Leaving:", {
                x: margin,
                y,
                size: 10,
                font: boldFont,
            });

            y -= 15;

            // Handle text wrapping for reason for leaving
            const reasonWords = company.reasonForLeaving.split(' ');
            let reasonLine = '';

            for (const word of reasonWords) {
                const testLine = reasonLine + (reasonLine ? ' ' : '') + word;
                const textWidth = font.widthOfTextAtSize(testLine, 10);

                if (textWidth > maxWidth && reasonLine) {
                    page.drawText(reasonLine, {
                        x: margin,
                        y,
                        size: 10,
                        font: font,
                        color: rgb(0.4, 0.4, 0.4), // Gray color for reason text
                    });
                    y -= 15;
                    reasonLine = word;

                    // Check if we need a new page
                    if (y < 150) {
                        page = pdfDoc.addPage([595.28, 841.89]);
                        y = 800;
                    }
                } else {
                    reasonLine = testLine;
                }
            }

            // Draw the last line of reason
            if (reasonLine) {
                page.drawText(reasonLine, {
                    x: margin,
                    y,
                    size: 10,
                    font: font,
                    color: rgb(0.4, 0.4, 0.4), // Gray color for reason text
                });
                y -= 15;
            }
        }

        y -= 15; // Extra space after each company

        // Add horizontal line between jobs (except after the last one)
        if (sortedCompanies.indexOf(company) < sortedCompanies.length - 1) {
            y = drawHorizontalLine(y);
            y -= 15; // Additional space after the line
        }
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

// Helper function to draw text with highlighted skills
function drawTextWithHighlightedSkills(page, text, x, y, font, relevantSkills) {
    let currentX = x;
    const words = text.split(' ');

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const wordWidth = font.widthOfTextAtSize(word, 10);

        // Check if this word is a relevant skill or contains a relevant skill
        const isRelevantSkill = relevantSkills.some(skill =>
            word.toLowerCase() === skill.toLowerCase() ||
            word.toLowerCase().includes(skill.toLowerCase())
        );

        if (isRelevantSkill) {
            // Draw highlight behind the word
            page.drawRectangle({
                x: currentX - 2,
                y: y - 2,
                width: wordWidth + 4,
                height: 14,
                color: rgb(1, 0.9, 0.4), // Light yellow
            });
        }

        // Draw the word
        page.drawText(word, {
            x: currentX,
            y,
            size: 10,
            font: font,
        });

        // Move to next word position
        currentX += wordWidth + font.widthOfTextAtSize(' ', 10);
    }
}
