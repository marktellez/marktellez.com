
import { Suspense } from 'react';
import Link from 'next/link';
import { generateSeoMetadata } from '@/lib/seo-utils';
import resumeData from '@/data/resume.json';
import reviewsData from '@/data/reviews.json';

export const metadata = generateSeoMetadata({
    title: "Generic Cover Letter - Mark Tellez | Expert Programmer and AI Engineer",
    description: "A professional cover letter highlighting my experience as a software developer and AI engineer with 25+ years in the industry.",
    keywords: ["cover letter", "software developer", "AI engineer", "programming experience", "technical skills", "job application"],
    url: "https://marktellez.com/cover-letter",
    type: "article",
    siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function CoverLetterPage() {
    return (
        <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Hi, I'm Mark Tellez</h1>

            <div className="">
                <div className="mb-8">

                    <p className="mb-4">Dear Hiring Manager,</p>

                    <p className="mb-4">
                        I am writing to express my interest in joining your team as an experienced software developer and AI engineer. With over 25 years of professional experience in the technology industry, I bring a wealth of knowledge and expertise that can help drive innovation and excellence in your organization.
                    </p>

                    <p className="mb-4">
                        Throughout my career, I have specialized in developing scalable, maintainable software solutions across various domains. My expertise spans modern web development, artificial intelligence, machine learning, and enterprise application architecture. I pride myself on writing clean, well-structured code that adheres to industry best practices and SOLID principles.
                    </p>

                    <p className="mb-4">
                        My recent work has focused on AI engineering and large language models, where I've developed solutions that leverage cutting-edge technologies to solve complex business problems. I am particularly skilled in React, NextJS, Ruby on Rails, and various AI frameworks, allowing me to build comprehensive full-stack applications that deliver exceptional user experiences.
                    </p>

                    <p className="mb-4">
                        Beyond technical skills, I bring strong leadership abilities and a collaborative approach to software development. I have successfully led teams, mentored junior developers, and worked closely with stakeholders to ensure project success. My communication skills enable me to translate complex technical concepts into clear, actionable insights for non-technical team members.
                    </p>

                    <p className="mb-4">
                        I am excited about the opportunity to contribute to your team and help drive your technology initiatives forward. I welcome the chance to discuss how my background, technical skills, and experience can benefit your organization.
                    </p>

                    <p className="mb-8">
                        Thank you for considering my application. I look forward to the possibility of working together.
                    </p>

                    <p className="mb-2">Sincerely,</p>
                    <p className="font-medium">Mark Tellez</p>
                </div>

                <div className="flex justify-between mt-12 pt-6 border-t border-gray-700">
                    <Link
                        href="/resume"
                        className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Resume
                    </Link>

                    <Link
                        href="/contact"
                        className="text-blue-400 hover:text-blue-300 flex items-center"
                    >
                        Contact Me
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>


        </div>
    );
}

