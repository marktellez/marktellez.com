import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';
import educationData from '@/data/education.json';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
    title: "Education & Learning Journey | Continuous Growth - Mark Tellez",
    description: "Explore my educational background and continuous learning journey. From formal education to self-directed learning in programming, AI, and emerging technologies.",
    keywords: ["education", "continuous learning", "self-taught programmer", "professional development", "AI education", "technical skills", "learning journey"],
    url: "https://marktellez.com/education",
    type: "article",
    siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function Education() {
    const { content } = educationData;

    return (
        <div className="container mx-auto py-8">
            <div>
                {content.map((section, index) => {
                    // First section is h1, second is h2, rest are h3
                    if (index === 0) {
                        return (
                            <div key={index}>
                                <h1 className="text-white">{section.heading}</h1>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-300">{paragraph}</p>
                                ))}
                                <div className="border-b border-white/50 my-12"></div>
                            </div>
                        );
                    } else if (index === 1) {
                        return (
                            <div key={index}>
                                <h2 className="mt-8 text-white">{section.heading}</h2>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-300">{paragraph}</p>
                                ))}
                                {index < content.length - 1 && (
                                    <div className="border-b border-white/50 my-12"></div>
                                )}
                            </div>
                        );
                    } else {
                        return (
                            <div key={index}>
                                <h3 className={index === 2 ? "mt-12 text-white" : "mt-8 text-white"}>{section.heading}</h3>
                                {section.paragraphs.map((paragraph, pIndex) => (
                                    <p key={pIndex} className="text-gray-300">{paragraph}</p>
                                ))}
                                {index < content.length - 1 && (
                                    <div className="border-b border-white/50 my-12"></div>
                                )}
                            </div>
                        );
                    }
                })}

                <div className="mt-8">
                    <CTAButton href="/contact" color="green">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                        <span>CONTACT ME NOW</span>
                    </CTAButton>
                </div>
            </div>
        </div>
    );
}
