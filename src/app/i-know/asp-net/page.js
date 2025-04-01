import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "ASP.NET Developer | Enterprise Web Solutions - Mark Tellez",
  description: "Experienced ASP.NET developer with expertise in building enterprise-grade web applications. From e-commerce platforms to custom business solutions.",
  keywords: ["ASP.NET developer", "C# development", "enterprise web applications", "e-commerce development", "database integration", "VB.NET"],
  url: "https://marktellez.com/i-know/asp-net",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AspNetSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">ASP.NET Development: Enterprise Solutions with Proven Results</h1>

        <p className="text-gray-300">My ASP.NET journey began at Callaway Golf and UpperDeck, where I built robust e-commerce platforms and interactive web applications. This foundation in enterprise development shaped my approach to creating scalable, maintainable solutions that deliver measurable business value.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Business Impact</h2>
        <p className="text-gray-300">My ASP.NET expertise spans both C# and VB.NET implementations, with a focus on creating systems that solve complex business challenges. At Callaway Golf, I developed components for their online store while integrating merchant services and inventory management. At UpperDeck, I helped build the digital companion for their Marvel Vs card game, combining ASP.NET with PostgreSQL for a rich user experience.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                E-commerce platform development with secure payment processing
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Database integration with MySQL and PostgreSQL for enterprise applications
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Custom component development for interactive web experiences
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Enterprise-Grade Solutions</h2>
        <p className="mb-6 text-gray-300">My ASP.NET work has focused on delivering business-critical applications that combine technical excellence with practical value. My approach includes:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Optimized database queries and stored procedures for performance</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Secure payment processing integration for e-commerce</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Inventory and product catalog management systems</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Notable Projects</h2>
        <p className="text-gray-300">My ASP.NET experience includes several significant projects that demonstrate the breadth of my capabilities:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Callaway Golf E-commerce Platform</h4>
            <p className="text-sm text-gray-300">Built ASP.NET components for their online store, integrated merchant account services, and developed backend systems to manage their extensive product catalog with optimized MySQL database operations.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">UpperDeck Marvel Vs Digital Companion</h4>
            <p className="text-sm text-gray-300">Developed the online companion for the Marvel Vs card game using ASP.NET (VB.NET) with PERL scripts and PostgreSQL, enhancing the physical card game with digital tools and community features.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Evolution</h2>
        <p className="text-gray-300">While my career began with ASP.NET, I've since expanded my expertise to include modern web technologies like <Link href="/i-know/reactjs">ReactJS</Link>, <Link href="/i-know/next-js">NextJS</Link>, and <Link href="/i-know/ruby-on-rails">Ruby on Rails</Link>. This breadth of experience allows me to select the right tool for each project while bringing enterprise-grade discipline to every development effort.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Enterprise Web Solution</h3>
        <p className="text-gray-300">Looking for an experienced ASP.NET developer who understands both the technical and business aspects of enterprise web development? I'm ready to help transform your requirements into robust, scalable solutions.</p>

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