"use client"

import { useState } from 'react';
import CTAButton from '@/ui/cta-button';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default function CompanyPageClient({ initialCompanyData, params, referrer, cardId }) {
    const [companyData] = useState(initialCompanyData);

    // Dynamically load the hero component if specified
    let HeroComponent = null;
    if (companyData?.heroComponent) {
        HeroComponent = dynamic(() => import(`@/ui/${companyData.heroComponent}`), {
            loading: () => <div className="text-center py-8">Loading...</div>,
            ssr: false,
        });
    }

    return (
        <div className="container mx-auto py-8 relative">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-6">{companyData.company} • {companyData.from} - {companyData.to}</h1>

                <div className="flex items-center justify-center text-gray-400 text-xl mb-8">
                    {companyData.role}
                </div>

                {/* Custom Hero Component */}
                {HeroComponent && <HeroComponent data={companyData} />}

                {/* Highlights section */}
                {companyData.highlights && companyData.highlights.length > 0 && (
                    <div className="bg-blue-900/30 my-8 rounded-lg p-6 mb-10 border border-blue-500/30">
                        <h2 className="text-2xl font-semibold text-white mb-4">Highlights</h2>
                        <ul className="list-disc pl-5 text-gray-300 space-y-2">
                            {companyData.highlights.map((highlight, index) => (
                                <li key={index}>{highlight}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <div className="prose prose-lg prose-invert max-w-none">
                    {companyData.content.map((section, index) => (
                        <div key={index} className="border-b border-white/20 pb-8 mb-8 last:border-0">
                            <h2 className="text-2xl font-semibold text-white mt-8 mb-4">{section.heading}</h2>
                            {section.paragraphs.map((paragraph, pIndex) => (
                                <p key={pIndex} className="text-gray-300">{paragraph}</p>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <CTAButton href="/contact" color="blue">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        <span>CONTACT ME</span>
                    </CTAButton>
                </div>
            </div>

            {/* Floating back to resume button */}
            <Link
                href={referrer || "/resume"}
                className="fixed bottom-8 right-8 flex flex-col items-center justify-center z-50"
                onClick={(e) => {
                    if (referrer === "/resume") {
                        e.preventDefault();
                        window.history.back();
                        // Smooth scroll to the company card after navigation
                        setTimeout(() => {
                            const companyElement = document.getElementById(`company-${cardId}`);
                            if (companyElement) {
                                companyElement.scrollIntoView({ behavior: 'smooth' });
                            }
                        }, 100);
                    }
                }}
            >
                <div className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-green-500/30 transition-all duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>
                <span className="text-xs font-medium text-white mt-1 bg-green-500 px-2 py-0.5 rounded-md">To Resume</span>
            </Link>
        </div>
    );
}