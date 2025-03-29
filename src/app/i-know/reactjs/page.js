import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "React Developer | Frontend Expert for Hire - Mark Tellez",
  description: "Hire a React expert with 12+ years of experience building high-performance web applications. Delivering elegant, production-ready solutions with accelerated development cycles.",
  keywords: ["React developer", "React expert", "frontend development", "web application", "UI development", "state management", "component architecture"],
  url: "https://marktellez.com/i-know/reactjs",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});


export default function ReactJSSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">React Development: Expertise Built on Deep Experience</h1>

        <p className="text-gray-300">Over 12 years of React development has transformed how I approach web application design. I've built interfaces across diverse technological ecosystems, turning complex requirements into elegant, high-performance solutions with remarkable efficiency. My code is robust and thoroughly tested, reflecting a professional commitment to quality that eliminates unnecessary QA cycles.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My React expertise goes beyond writing code—it's about delivering robust applications rapidly and strategically. I've developed systems across multiple frameworks including Ruby on Rails, <Link href="/i-know/next-js">NextJS</Link>, Django, and WordPress, which means I can adapt quickly and solve problems precisely. Unlike less experienced developers, I rigorously self-test my work, ensuring that what I deliver is production-ready, not a prototype requiring extensive debugging.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Accelerated development cycles through deep technological understanding
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced state management using <span className="font-semibold">Context Provider/Hook patterns</span>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Ability to integrate complex user interfaces seamlessly
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Proven track record of building sophisticated, interactive web applications
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Performance-Driven Approach</h2>
        <p className="mb-6 text-gray-300">Technical skill meets practical execution. I don't just write code; I architect solutions that are performant, maintainable, and aligned with business objectives. My extensive experience allows me to:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Identify potential challenges before they become roadblocks</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implement efficient development strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Deliver high-quality applications significantly faster than typical development timelines</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What sets me apart is the ability to transform technical requirements into functional, user-centric web applications. My approach combines technical depth with strategic thinking, ensuring that every project delivers maximum value.</p>

        <p className="mt-4 text-gray-300">I'm fundamentally time and revenue oriented. I don't spin my wheels on low-impact tasks or waste resources on work that doesn't directly contribute to key business  metrics. Every development decision is made with an eye toward ROI, ensuring that engineering efforts translate directly to business results and meaningful KPIs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Team Empowerment & Mentorship</h2>
        <p className="text-gray-300">Beyond technical contributions, I bring a proven track record of elevating entire development teams. Drawing from my extensive experience at Codementor and Devmentor Live, where I've mentored hundreds of students and junior developers, I maintain an "open door" policy that accelerates team growth.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Provide real-time guidance that transforms junior developers into confident contributors</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Share battle-tested React patterns that prevent common architectural mistakes</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Create a collaborative environment where questions are welcomed, not judged</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Reduce onboarding time for new team members through structured knowledge sharing</span>
            </li>
          </ul>
        </div>

        <p className="text-gray-300">This mentorship approach doesn't just improve individual performance—it creates a multiplier effect that elevates the entire team's capabilities. By investing in developer growth, I help organizations build self-sustaining technical excellence that continues to deliver value long after any single project is complete.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My Preferred Tech Stack: Speed & Scalability</h2>
        <p className="text-gray-300">I've refined my development approach to maximize both velocity and maintainability. My preferred stack combines ReactJS with <Link href="/i-know/next-js">NextJS</Link> and <Link href="/i-know/tailwind-css">TailwindCSS</Link>—a powerful trio that delivers exceptional results across projects of all sizes.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">ReactJS Core</h4>
            <p className="text-sm text-gray-300">Provides the component architecture and state management foundation that enables rapid UI development with predictable data flow.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/next-js" className="hover:text-blue-400 transition-colors">NextJS Framework</Link></h4>
            <p className="text-sm text-gray-300">Extends React with server-side rendering, API routes, and optimized builds—eliminating configuration overhead while improving performance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/tailwind-css" className="hover:text-blue-400 transition-colors">TailwindCSS</Link></h4>
            <p className="text-sm text-gray-300">Accelerates styling with utility-first approach that keeps CSS maintainable at scale and eliminates the context-switching between files.</p>
          </div>
        </div>

        <p className="text-gray-300">This stack enables me to develop at exceptional speed without sacrificing code quality or performance. The combination eliminates common bottlenecks—from styling inconsistencies to build configuration—allowing me to focus entirely on solving business problems. Most importantly, this architecture scales elegantly as applications grow, making future extensions and maintenance substantially more efficient.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next Breakthrough Application</h3>
        <p className="text-gray-300">Seeking a React developer who can turn your most ambitious web project into reality? I'm ready to join your team or develop a custom solution that exceeds your expectations.</p>

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
