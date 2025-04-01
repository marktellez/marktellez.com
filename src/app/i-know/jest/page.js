import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Jest Testing Expert | JavaScript Test Engineer - Mark Tellez",
  description: "Hire a Jest testing expert with years of experience building robust test suites for JavaScript applications. Delivering reliable, maintainable test coverage for production applications.",
  keywords: ["Jest testing", "JavaScript testing", "test-driven development", "React testing", "unit testing", "snapshot testing", "mock functions"],
  url: "https://marktellez.com/i-know/jest",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function JestSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Jest Testing: Building Reliable Applications Through Comprehensive Testing</h1>

        <p className="text-gray-300">My experience with Jest has been instrumental in delivering high-quality, bug-free applications. I've implemented comprehensive test suites across diverse JavaScript ecosystems, ensuring robust code that performs reliably in production. My testing approach eliminates unnecessary QA cycles and provides confidence in deployments through thorough test coverage.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Jest expertise extends beyond writing basic tests—it's about creating a comprehensive testing strategy that ensures application reliability. I've developed testing systems across multiple frameworks including <Link href="/i-know/reactjs">React</Link>, <Link href="/i-know/next-js">NextJS</Link>, and vanilla JavaScript applications. My approach to testing is pragmatic and results-oriented, focusing on maximizing test coverage while minimizing maintenance overhead.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Snapshot testing for UI components to prevent regression
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced mocking techniques for API and service dependencies
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Integration testing for complex user workflows and state management
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                CI/CD pipeline integration for automated test execution
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Test-Driven Approach</h2>
        <p className="mb-6 text-gray-300">Technical skill meets practical execution. I don't just write tests; I architect testing strategies that ensure application reliability and maintainability. My extensive experience allows me to:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Identify critical test paths that maximize coverage with minimal code</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implement test strategies that catch bugs before they reach production</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Create maintainable test suites that evolve with your application</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What sets me apart is the ability to transform testing requirements into comprehensive test suites that provide real business value. My approach combines technical depth with strategic thinking, ensuring that every test contributes to application quality.</p>

        <p className="mt-4 text-gray-300">I focus on ROI-driven testing. I don't waste time on low-value tests or create overly complex test suites that become maintenance burdens. Every testing decision is made with an eye toward maximizing coverage of critical paths while minimizing overhead, ensuring that testing efforts translate directly to improved application reliability and user satisfaction.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Team Empowerment & Testing Culture</h2>
        <p className="text-gray-300">Beyond technical contributions, I bring a proven track record of establishing effective testing cultures within development teams. Drawing from my extensive experience at Codementor and Devmentor Live, I help teams adopt testing practices that become integral to their development workflow.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Establish testing patterns that developers can easily adopt and maintain</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Share battle-tested Jest patterns that prevent common testing pitfalls</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Create a collaborative environment where testing is valued, not viewed as a burden</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implement testing strategies that scale with growing applications</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-300">This approach to testing doesn't just improve code quality—it creates a multiplier effect that elevates the entire team's capabilities. By investing in testing practices, I help organizations build self-sustaining technical excellence that continues to deliver value long after any single project is complete.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Jest Testing Expertise: Comprehensive Coverage</h2>
        <p className="text-gray-300">I've refined my testing approach to maximize both coverage and maintainability. My Jest expertise spans multiple testing strategies that deliver exceptional results across projects of all sizes.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Unit Testing</h4>
            <p className="text-sm text-gray-300">Provides granular testing of individual functions and components, ensuring each piece works correctly in isolation before integration.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Snapshot Testing</h4>
            <p className="text-sm text-gray-300">Captures UI component output to detect unintended changes, particularly valuable for <Link href="/i-know/reactjs" className="hover:text-blue-400 transition-colors">React</Link> applications.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Integration Testing</h4>
            <p className="text-sm text-gray-300">Tests how components work together, ensuring that interfaces between parts of your application function correctly as a whole.</p>
          </div>
        </div>

        <p className="text-gray-300">This comprehensive testing approach enables me to develop with confidence and deliver applications that perform reliably in production. The combination eliminates common quality issues—from regression bugs to integration failures—allowing me to focus entirely on solving business problems. Most importantly, this testing architecture scales elegantly as applications grow, making future extensions and maintenance substantially more efficient.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next Reliable Application</h3>
        <p className="text-gray-300">Seeking a testing expert who can ensure your application's quality and reliability? I'm ready to join your team or develop a comprehensive testing strategy that exceeds your expectations.</p>

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