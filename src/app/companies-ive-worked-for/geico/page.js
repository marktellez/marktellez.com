import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function GeicoPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6">GEICO</h1>

        <div className="flex items-center text-gray-400 mb-8">
          <span className="mr-4">2005</span>
          <span className="mr-4">•</span>
          <span>Backend Software Engineer (Contract)</span>
        </div>

        <div className="prose prose-lg prose-invert max-w-none">
          <p className="text-gray-300">
            At GEICO, I served as a backend software engineer on a 6-month contract, developing interfaces between modern systems and legacy infrastructure. This role required bridging the gap between contemporary web services and decades-old mainframe systems.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Technical Contributions</h2>
          <p className="text-gray-300">
            My primary responsibility was developing SOAP interfaces to legacy COBOL mini-computers using DB2 and other legacy database systems. This work was critical for enabling modern applications to communicate with GEICO's established insurance processing systems.
          </p>

          <p className="text-gray-300 mt-4">
            I also leveraged my <Link href="/i-know/ruby" className="text-blue-400 hover:text-blue-300">Ruby</Link> expertise to create automation scripts that streamlined the building of SOAP interfaces. This demonstrated Ruby's power as a build tool and significantly improved the team's development workflow.
          </p>

          <div className="bg-gray-900/40 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-white mb-4">Key Responsibilities</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Developed SOAP interfaces connecting modern systems to legacy COBOL applications</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Worked with DB2 and other legacy database systems to enable data access</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-lg text-gray-200">Created Ruby automation scripts to streamline interface development</span>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-white mt-8 mb-4">Industry Lessons</h2>
          <p className="text-gray-300">
            My time at GEICO provided valuable insights into the volatility of the tech industry. The entire team was laid off after six months as part of an offshoring initiative to India. While most of my colleagues immediately departed, I chose to stay an additional two months to train our replacements.
          </p>

          <p className="text-gray-300 mt-4">
            This experience taught me that the industry can be fickle and subject to rapid changes based on business trends. However, I viewed my decision to stay and facilitate knowledge transfer not as a negative, but as an opportunity to demonstrate professionalism and team-oriented values. By putting the company's needs ahead of personal ego, I reinforced my reputation as a reliable professional who could be counted on even in challenging circumstances.
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
