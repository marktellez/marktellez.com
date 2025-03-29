import CTAButton from '@/ui/cta-button';

export default function UberPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Uber</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2015 - 2016</span>
          <span className="mr-4">•</span>
          <span>PostgreSQL Expert (Contract)</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            After taking two years off from professional coding (2013-2015) to build a small sailboat and sail it in the Pacific,
            I returned to the tech industry with a short 4-month contract at Uber.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Contributions</h2>
          <p className="text-gray-300">
            At Uber, I leveraged my PostgreSQL expertise to write migration scripts that facilitated the company's transition
            to SchemalessDB (later known as MongoDB) and MySQL. The work primarily involved data translation through pipelines,
            ensuring smooth data migration between different database systems.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Database Migration</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Wrote migration scripts for PostgreSQL to SchemalessDB/MongoDB</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed data pipelines for MySQL integration</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Ensured data integrity during complex database transitions</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Career Transition</h2>
          <p className="text-gray-300">
            After completing my contract at Uber, I made a deliberate career pivot to focus on learning ReactJS.
            This decision led me to transition into a YouTube career teaching ReactJS and later NextJS,
            allowing me to share my knowledge with the developer community while exploring modern frontend technologies.
          </p>

          <p className="text-gray-300 mt-4">
            While my time at Uber was relatively brief and focused on database migration work, it served as an important
            bridge between my sailing sabbatical and my subsequent career as a developer educator.
          </p>
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
    </div>
  );
}
