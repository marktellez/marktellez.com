import Link from 'next/link';
import CTAButton from '@/ui/cta-button';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "TypeScript Expert | Full-Stack Developer - Mark Tellez",
  description: "Hire a TypeScript expert with extensive experience building scalable, type-safe applications. Delivering robust solutions with accelerated development cycles.",
  keywords: ["TypeScript developer", "TypeScript expert", "static typing", "type-safe development", "frontend development", "backend development"],
  url: "https://marktellez.com/i-know/typescript",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function TypeScriptSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">TypeScript Development: Type-Safe Excellence</h1>

        <p className="text-gray-300">My extensive experience with TypeScript has transformed how I approach software development. By leveraging TypeScript's powerful type system, I build applications that are more maintainable, less error-prone, and easier to refactor. This translates to faster development cycles and more reliable code that scales with your business needs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My TypeScript expertise extends beyond basic type annotations to advanced patterns that enhance code quality and developer experience. I've implemented TypeScript across diverse ecosystems including <Link href="/i-know/reactjs">React</Link>, <Link href="/i-know/next-js">NextJS</Link>, Node.js, and Express, creating cohesive full-stack solutions that maintain type safety from database to UI.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced type system utilization including generics, conditional types, and mapped types
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Creation of type-safe APIs and interfaces that prevent runtime errors
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Integration of TypeScript with modern build tools and frameworks
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Development of custom type definitions for third-party libraries
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Performance-Driven Approach</h2>
        <p className="mb-6 text-gray-300">My TypeScript implementations focus on both developer experience and runtime performance. I create systems that catch errors at compile time while maintaining optimal execution speed. My approach includes:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Designing type architectures that scale with application complexity</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implementing strict type checking without sacrificing development speed</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Creating reusable type utilities that enhance code consistency</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Optimizing TypeScript configurations for different project requirements</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What sets my TypeScript work apart is the ability to balance technical correctness with practical implementation. I create type systems that serve as living documentation, making codebases more approachable for new team members while preventing common errors before they reach production.</p>

        <p className="mt-4 text-gray-300">My TypeScript implementations have consistently reduced bug rates in production applications while accelerating feature development. By catching type errors during development, we eliminate entire categories of runtime issues, resulting in more reliable applications and happier users.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Team Empowerment & Knowledge Transfer</h2>
        <p className="text-gray-300">Beyond implementation, I excel at helping teams adopt TypeScript effectively. Drawing from my mentoring experience, I guide developers through the transition from JavaScript to TypeScript, focusing on practical patterns that deliver immediate value rather than theoretical type system complexities.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Develop incremental TypeScript adoption strategies for existing codebases</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Create custom TypeScript workshops tailored to team skill levels</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Establish type system best practices that balance safety and productivity</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-300">This collaborative approach ensures that TypeScript becomes an asset rather than an obstacle, empowering teams to write better code with confidence.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">TypeScript Across the Stack</h2>
        <p className="text-gray-300">I've successfully implemented TypeScript in diverse environments, from frontend React applications to backend Node.js services and full-stack Next.js projects. This cross-domain expertise allows me to create cohesive type systems that maintain consistency throughout the application stack.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Frontend Excellence</h4>
            <p className="text-sm text-gray-300">Type-safe React components, state management, and API integrations that prevent UI bugs and improve developer experience.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Backend Reliability</h4>
            <p className="text-sm text-gray-300">Robust Node.js services with typed database access, API endpoints, and middleware that catch errors before deployment.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Full-Stack Integration</h4>
            <p className="text-sm text-gray-300">End-to-end type safety with shared interfaces between client and server, eliminating data inconsistencies and API mismatches.</p>
          </div>
        </div>

        <p className="text-gray-300">This comprehensive approach ensures that TypeScript delivers maximum value across your entire application, creating a development experience that's both productive and reliable.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next Type-Safe Application</h3>
        <p className="text-gray-300">Looking for a TypeScript expert who can elevate your codebase with robust type safety while maintaining development velocity? I'm ready to help your team implement TypeScript effectively or build your next application from the ground up.</p>

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