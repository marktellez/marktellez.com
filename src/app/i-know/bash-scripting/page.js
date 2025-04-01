import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Bash Scripting Expert | Automation Specialist - Mark Tellez",
  description: "Hire a bash scripting expert with extensive experience in automation, system administration, and DevOps. Creating efficient, maintainable scripts that streamline operations and reduce manual work.",
  keywords: ["bash scripting", "shell scripting", "automation", "Linux", "DevOps", "system administration", "task automation", "deployment scripts"],
  url: "https://marktellez.com/i-know/bash-scripting",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function BashScriptingSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Bash Scripting: Automation Excellence for System Operations</h1>

        <p className="text-gray-300">My bash scripting expertise spans over a decade of creating sophisticated automation solutions. I've developed scripts for deployment pipelines, system monitoring, data processing, and infrastructure management that eliminate repetitive tasks and ensure consistent operations. My scripts are robust, well-documented, and designed for maintainability.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My bash scripting expertise goes beyond basic commands—it's about creating comprehensive automation solutions that transform operations. I've built complex deployment pipelines, monitoring systems, and data processing workflows that save hundreds of hours of manual work while improving reliability. My approach combines technical depth with practical implementation, ensuring scripts that solve real business problems.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Automated deployment pipelines that eliminate manual release processes
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                System monitoring and maintenance scripts that ensure operational reliability
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Data processing workflows that transform and analyze large datasets efficiently
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Script Development Expertise</h2>
        <p className="mb-6 text-gray-300">My approach to bash scripting combines robust programming practices with deep system knowledge to create reliable, maintainable automation:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Deployment Automation</h4>
            <p className="text-sm text-gray-300">Creating sophisticated deployment scripts that handle environment configuration, dependency management, and rollback procedures for consistent releases.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">System Monitoring</h4>
            <p className="text-sm text-gray-300">Developing monitoring scripts that track system health, resource utilization, and application performance, with automated alerting for potential issues.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Data Processing</h4>
            <p className="text-sm text-gray-300">Building data transformation pipelines that efficiently process logs, metrics, and business data using awk, sed, grep, and other text processing tools.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Infrastructure Management</h4>
            <p className="text-sm text-gray-300">Implementing infrastructure-as-code principles through bash scripts that automate server provisioning, configuration management, and environment setup.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Advanced Bash Techniques</h2>
        <p className="mb-6 text-gray-300">My scripts leverage advanced bash features to ensure robustness and maintainability:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Error Handling</h4>
            <p className="text-sm text-gray-300">Comprehensive error trapping and reporting with proper exit codes and detailed logging.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Modular Design</h4>
            <p className="text-sm text-gray-300">Creating reusable functions and libraries that promote code reuse and simplify maintenance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Process Management</h4>
            <p className="text-sm text-gray-300">Effective handling of background processes, job control, and parallel execution for performance.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Let's Automate Your Operations</h2>
        <p className="mb-8 text-gray-300">Whether you need to streamline deployments, automate routine maintenance, or build data processing pipelines, I can develop robust bash solutions that save time and reduce errors.</p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8 mb-12">
          <CTAButton href="/contact" color="teal">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
            </svg>
            <span>CONTACT ME</span>
          </CTAButton>
          <CTAButton href="/resume" color="blue">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            <span>VIEW RESUME</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
