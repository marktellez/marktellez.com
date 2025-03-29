import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function CallawayGolfPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">Callaway Golf</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2004 - 2005</span>
          <span className="mr-4">•</span>
          <span>ASP.NET Developer</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            At Callaway Golf, I was part of the ASP.NET team responsible for building their online store.
            This e-commerce platform integrated merchant account services with sophisticated backend systems
            to manage Callaway's extensive catalog of golfing products.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Contributions</h2>
          <p className="text-gray-300">
            The project utilized ASP.NET with a <Link href="/i-know/mysql" className="text-blue-400 hover:text-blue-300">MySQL</Link> database backend.
            My previous experience with relational database management systems positioned me as the team's
            database specialist, responsible for database maintenance and development of complex queries and stored procedures.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Database Engineering</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Maintained MySQL database systems for the e-commerce platform</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed stored procedures to efficiently manage the large product catalog</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Optimized complex queries for inventory management and order processing</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">E-commerce Development</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Built ASP.NET components for the online store's shopping experience</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Integrated merchant account services for secure payment processing</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed backend services to manage the extensive product catalog</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Career Turning Point</h2>
          <p className="text-gray-300">
            During my time at Callaway Golf, I was fortunate to work with senior developer Jim Weirich, who introduced me to
            Ruby and LISP. This exposure sparked my interest in functional programming paradigms and ultimately led to a
            significant shift in my career trajectory.
          </p>

          <p className="text-gray-300 mt-4">
            My growing passion for Ruby and functional programming principles inspired me to leave Callaway when Jim did,
            allowing me to pursue opportunities focused on Ruby development and, later, Ruby on Rails. This pivotal
            experience at Callaway Golf marked the beginning of my journey into a new programming ecosystem that would
            shape my future career.
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
