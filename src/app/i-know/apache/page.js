import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Apache HTTP Server Expert | Web Infrastructure Specialist - Mark Tellez",
  description: "Hire an Apache HTTP Server expert with extensive experience configuring secure, high-performance web servers. Delivering optimized, reliable infrastructure solutions for enterprise applications.",
  keywords: ["Apache HTTP Server", "web server configuration", "mod_rewrite", "virtual hosts", "performance tuning", "server infrastructure", "web application delivery"],
  url: "https://marktellez.com/i-know/apache",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function ApacheSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Apache HTTP Server: Enterprise-Grade Web Server Expertise</h1>

        <p className="text-gray-300">My Apache HTTP Server expertise spans years of configuring and optimizing web servers for enterprise applications. I've implemented complex virtual host setups, URL rewriting rules, and authentication systems that enhance security and functionality. My configurations are robust, well-documented, and designed to support mission-critical applications.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Apache expertise goes beyond basic configuration—it's about building reliable server infrastructures that deliver consistent performance. I've developed sophisticated mod_rewrite rules, custom authentication systems, and optimized server architectures that improve security while enhancing functionality. My approach combines technical depth with practical implementation, ensuring server setups that solve real business problems.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Performance-optimized server configurations for high-traffic applications
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced URL rewriting and routing with mod_rewrite for clean, SEO-friendly URLs
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Secure virtual host configurations for multi-tenant environments
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Apache Implementation Expertise</h2>
        <p className="mb-6 text-gray-300">My approach to Apache HTTP Server combines performance optimization with security best practices to create reliable, maintainable server infrastructures:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Virtual Hosting</h4>
            <p className="text-sm text-gray-300">Implementing sophisticated name-based and IP-based virtual hosting configurations that efficiently serve multiple websites from a single server.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">URL Rewriting</h4>
            <p className="text-sm text-gray-300">Creating complex URL rewriting rules with mod_rewrite that improve site usability, SEO, and security while maintaining backward compatibility.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Tuning</h4>
            <p className="text-sm text-gray-300">Optimizing Apache configurations for maximum throughput, minimal latency, and efficient resource utilization in high-traffic environments.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Security Hardening</h4>
            <p className="text-sm text-gray-300">Implementing robust security measures including SSL/TLS configuration, access controls, and protection against common web vulnerabilities.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Apache Experience</h2>
        <p className="text-gray-300">My Apache HTTP Server expertise has been applied across diverse environments, from small business websites to enterprise-level applications serving millions of requests daily. I've configured Apache to work seamlessly with various backend technologies including PHP, Ruby on Rails, Django, and Node.js.</p>

        <p className="mt-4 text-gray-300">Whether you need a new server setup, performance optimization for an existing deployment, or complex URL rewriting rules, I bring the technical knowledge and practical experience to deliver reliable, secure, and high-performance Apache configurations.</p>

        <h3 className="mt-12 text-white">Let's Build Your Web Infrastructure</h3>
        <p className="text-gray-300">Looking for an Apache HTTP Server expert who can deliver robust, secure, and optimized web server configurations? I'm ready to help transform your requirements into reliable infrastructure that powers your applications.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your Apache Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}
