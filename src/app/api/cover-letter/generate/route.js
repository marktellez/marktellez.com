
import OpenAI from "openai";
import stats from "@/data/stats.json";
import skills from "@/data/skills.json";
import education from "@/data/education.json";
import resume from "@/data/resume.json";
import reviews from "@/data/reviews.json";

const openai = new OpenAI({
    baseURL: "https://api.deepseek.com", // DeepSeek API base URL
    apiKey: process.env.DEEPSEEK_API_KEY, // DeepSeek API Key from environment variables
});

export async function POST(req) {
    const { companyInfo } = await req.json();

    if (!companyInfo) {
        return new Response(JSON.stringify({ error: "Company information is required." }), { status: 400 });
    }

    try {
        // Get current date for the cover letter
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Combine data from JSON files into a single context
        const context = `
Name: ${stats.name}
Title: ${stats.title}
Bio: ${stats.bio}
Email: ${stats.contactEmail}
Website: ${stats.website}
WhatsApp: WhatsApp ${stats.whatsApp}
Short Bio: ${stats.shortBio}
Current Date: ${formattedDate}
Skills: ${Object.entries(skills)
                .map(([category, items]) => `${category}: ${items.join(", ")}`)
                .join("\n")}
Education Highlights: ${education.content
                .map((section) => `${section.heading}: ${section.paragraphs.join(" ")}`)
                .join("\n")}
Career Highlights: ${resume
                .map((job) => `${job.role} at ${job.company} (${job.from} - ${job.to}): ${job.highlights.join(", ")}`)
                .join("\n")}
Reviews: ${reviews
                .slice(0, 5) // Use the top 5 reviews
                .map((review) => `"${review.content}"`)
                .join("\n")}
Other Information: ${stats.shortBio}
`;

        // Generate the cover letter using the OpenAI API
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `You are an expert cover letter writer. Create professional, personalized cover letters that highlight the candidate's relevant experience and skills for the specific job they're applying to.
                    
                    Important guidelines:
                    1. NEVER use placeholders like [Your Email], [Your Phone], [Date], etc. Always use the actual information provided in the context.
                    2. Include the current date in the proper format.
                    3. Use the candidate's actual contact information (email, website) as provided.
                    4. If company address details aren't provided, omit that section rather than using placeholders.
                    5. Focus on relevant experience and skills that match the job description.
                    6. Be specific about achievements and avoid generic statements.
                    7. Maintain a professional but personable tone.
                    8. Keep the letter concise and impactful.
                    9. Do not include any meta-instructions or notes about the tone at the end of the letter.
                    10. Format the letter as plain text without markdown formatting, as it will be sent via email or posted in a form.`
                },
                {
                    role: "user",
                    content: `Generate a professional cover letter based on the following context about me: ${context}. 
                    
                    Tailor it for the following company information and job description: ${companyInfo}
                    
                    The cover letter should be ready to send without any placeholders or formatting instructions.`
                },
            ],
            model: "deepseek-chat", // Specify the DeepSeek model
        });

        const coverLetter = completion.choices[0]?.message?.content;

        if (!coverLetter) {
            throw new Error("Failed to generate cover letter. No content returned.");
        }

        return new Response(JSON.stringify({ coverLetter }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
