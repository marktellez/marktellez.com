import Link from 'next/link';
import CTAButton from '@/ui/cta-button';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "C# Developer | .NET Expert - Mark Tellez",
  description: "Hire a C# expert with extensive experience building enterprise-grade .NET applications. Delivering scalable, maintainable solutions for complex business requirements.",
  keywords: ["C# developer", "C# expert", ".NET development", "ASP.NET Core", "enterprise applications", "backend development"],
  url: "https://marktellez.com/i-know/c-sharp",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function CSharpSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">C# Development: Enterprise-Grade Excellence</h1>

        <p className="text-gray-300">My extensive experience with C# and the .NET ecosystem has equipped me to build robust, scalable applications that meet the demands of enterprise environments. From ASP.NET Core web applications to microservices and desktop solutions, I deliver high-quality code that balances performance, maintainability, and business requirements.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Enterprise Focus</h2>
        <p className="text-gray-300">My C# expertise spans the full spectrum of .NET development—from ASP.NET Core web applications to microservices, desktop applications, and cloud-native solutions. I've implemented complex business logic, integrated with diverse systems, and optimized performance for mission-critical applications.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Key Capabilities</h2>
        <p className="text-gray-300">My C# development approach emphasizes:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Enterprise Architecture</h4>
            <p className="text-sm text-gray-300">Designing scalable, maintainable systems using clean architecture principles, SOLID patterns, and domain-driven design.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">ASP.NET Core</h4>
            <p className="text-sm text-gray-300">Building high-performance web applications and APIs with modern .NET Core frameworks and best practices.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Microservices</h4>
            <p className="text-sm text-gray-300">Implementing distributed systems with robust communication patterns, resilience strategies, and containerization.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Tuning applications for maximum throughput, minimal latency, and efficient resource utilization.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next .NET Solution</h3>
        <p className="text-gray-300">Looking for a C# developer who can deliver enterprise-grade applications that solve complex business problems? I'm ready to help transform your requirements into robust, scalable solutions.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR C# PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
