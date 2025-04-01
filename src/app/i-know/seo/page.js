import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "SEO Expert | Technical Search Optimization Specialist - Mark Tellez",
  description: "Technical SEO specialist with expertise in optimizing web applications for search engines. From structured data implementation to performance optimization and content strategy.",
  keywords: ["SEO expert", "technical SEO", "search engine optimization", "structured data", "web performance", "content strategy"],
  url: "https://marktellez.com/i-know/seo",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function SeoSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Technical SEO: Engineering for Search Visibility</h1>

        <p className="text-gray-300">As a developer with deep SEO expertise, I bridge the gap between technical implementation and search optimization. My approach combines web performance engineering, structured data implementation, and content strategy to create websites that not only rank well but convert visitors into customers. I focus on sustainable, algorithm-resistant techniques that build long-term search visibility.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My technical SEO expertise goes beyond basic optimization—it's about engineering websites from the ground up to be search-friendly. I've implemented SEO strategies across various platforms including <Link href="/i-know/next-js">NextJS</Link>, <Link href="/i-know/django">Django</Link>, and WordPress, consistently achieving significant improvements in organic traffic and conversions. My developer background allows me to implement technical SEO solutions that marketing-focused SEOs often miss.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Technical site audits that identify critical performance and crawlability issues
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Structured data implementation for enhanced search visibility and rich results
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Performance optimization for Core Web Vitals and improved user experience
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Data-Driven Approach</h2>
        <p className="mb-6 text-gray-300">My approach to SEO is methodical and results-focused. I combine technical expertise with data analysis to:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div className="text-lg text-gray-200">Identify and fix technical issues that prevent proper indexing</div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div className="text-lg text-gray-200">Implement structured data to enhance search visibility</div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div className="text-lg text-gray-200">Optimize Core Web Vitals for better user experience and rankings</div>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <div className="text-lg text-gray-200">Develop content strategies that align with search intent</div>
            </li>
          </ul>
        </div>

        <h3 className="mt-12 text-white">Case Study: E-commerce Performance Optimization</h3>
        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <p className="text-gray-300 mb-4">For an e-commerce client, I implemented a comprehensive technical SEO strategy that included:</p>
          <ul className="space-y-2 text-gray-300 list-disc pl-5">
            <li>Site architecture optimization for improved crawlability</li>
            <li>Schema markup implementation for product pages</li>
            <li>JavaScript optimization for faster page loads</li>
            <li>Mobile-first design improvements</li>
          </ul>
          <p className="text-gray-300 mt-4">The result: 67% increase in organic traffic and 43% improvement in conversion rates within six months.</p>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical SEO for Modern Web Applications</h2>
        <p className="text-gray-300">Modern JavaScript frameworks like React and Next.js present unique SEO challenges. My expertise in both development and SEO allows me to implement solutions that maintain the benefits of these frameworks while ensuring search engines can properly crawl and index content.</p>

        <p className="text-gray-300 mt-4">I specialize in:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl text-white mb-3">Server-Side Rendering</h4>
            <p className="text-gray-300">Implementing SSR solutions that deliver content to search engines while maintaining interactive user experiences</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl text-white mb-3">Performance Optimization</h4>
            <p className="text-gray-300">Optimizing Core Web Vitals through code splitting, lazy loading, and image optimization</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl text-white mb-3">Structured Data</h4>
            <p className="text-gray-300">Implementing JSON-LD and other structured data formats for enhanced search results</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-lg">
            <h4 className="text-xl text-white mb-3">International SEO</h4>
            <p className="text-gray-300">Creating proper hreflang implementation and localization strategies for global businesses</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Let's Improve Your Search Visibility</h2>
        <p className="text-gray-300">Looking for a technical SEO expert who understands both the development and marketing aspects of search optimization? I'm ready to help transform your website's performance and drive sustainable organic growth.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your SEO Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}
