import Link from 'next/link';
import Pill from '@/ui/pill';
import ResumeNavigation from '@/ui/resume-navigation';
import resumeData from '@/data/resume.json';
import reviewsData from '@/data/reviews.json';
import SkillPills from '@/ui/skill-pills';


import { generateSeoMetadata } from '@/lib/seo-utils';

export const metadata = generateSeoMetadata({
  title: "Resume - Mark Tellez | Expert Programmer and AI Engineer",
  description: "View my professional resume showcasing 25+ years of experience in software development, AI engineering, and technical leadership across multiple industries.",
  keywords: ["software developer resume", "AI engineer CV", "programming experience", "technical skills", "software engineering career", "senior developer portfolio"],
  url: "https://marktellez.com/resume",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});



async function getResumeData() {
  // Filter reviews with at least 200 characters
  const filteredReviews = reviewsData.filter(review =>
    review.content && review.content.length >= 200
  );

  return {
    companies: resumeData,
    reviews: filteredReviews
  };
}

export default async function ResumePage() {
  const data = await getResumeData();

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Sticky Navigation Menu */}
      <ResumeNavigation />

      <h1 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">My Resume</h1>

      {/* Skills Section */}
      <section id="skills" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">Skills & Expertise</h2>
        <SkillPills />
      </section>

      {/* Work Experience Section */}
      <section id="employment" className="mb-16 scroll-mt-20">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">Work Experience</h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>

          <div className="space-y-8">
            {data.companies
              .sort((a, b) => {
                // Sort by 'from' year in descending order (most recent first)
                const yearA = parseInt(a.from);
                const yearB = parseInt(b.from);
                return yearB - yearA;
              })
              .map((company, index) => (
                <div key={index} id={`company-${company.slug}`} className="relative flex items-stretch">
                  {/* Year markers with flex positioning */}
                  <div className="flex-shrink-0 flex flex-col mr-6 z-10" style={{ minHeight: '100%' }}>
                    <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{company.to}</span>
                    </div>
                    <div className="flex-grow w-0.5 bg-blue-500/30 mx-auto"></div>
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center mt-auto">
                      <span className="text-xs font-bold text-white">{company.from}</span>
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="flex-grow bg-gray-800/50 rounded-lg overflow-hidden shadow-lg hover:shadow-blue-900/20 transition-all duration-300 hover:translate-y-[-4px] border border-gray-700/50 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-white">{company.company}</h3>
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-blue-900/30 text-blue-300">
                        {company.from} - {company.to}
                      </span>
                    </div>

                    <div className="text-lg font-medium text-blue-400 mb-4">{company.title || company.role}</div>

                    {company.highlights && company.highlights.length > 0 && (
                      <ul className="space-y-2 text-gray-300 text-sm">
                        {company.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start">
                            <span className="text-blue-400 mr-2">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="mt-6 pt-4 border-t border-gray-700/50 flex justify-between">
                      <div
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                      >
                        &nbsp;

                      </div>

                      <Link
                        href={`/companies-ive-worked-for/${company.slug}?referrer=/resume&cardId=${company.slug}`}
                        className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                      >
                        Read full details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      {data.reviews && data.reviews.length > 0 && (
        <section id="testimonials" className="mb-16 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-700">Client Reviews</h2>

          <div className="space-y-6">
            {data.reviews.map((review, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-lg border border-gray-700/50">
                <p className="text-gray-300 italic mb-4">"{review.content}"</p>
                <div className="flex items-center">
                  {review.writer?.avatar_url && (
                    <img
                      src={review.writer.avatar_url}
                      alt={review.writer.name || review.writer.username}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <p className="font-medium text-white">{review.writer?.name || review.writer?.username || 'Anonymous'}</p>
                    <div className="flex text-yellow-400 mt-1">
                      {[...Array(review.rating || 5)].map((_, i) => (
                        <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact CTA */}
      <div className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-blue-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Get in Touch
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>

      {/* Download PDF CTA */}
      {/* 
      <div className="mt-8 text-center">
        <a
          href="/api/resume-pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-purple-500/20 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mx-2"
        >
          Download PDF Resume
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>
      */}
    </div>
  );
}
