import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "NGINX Expert | Web Server & Proxy Specialist - Mark Tellez",
  description: "Hire an NGINX expert with extensive experience configuring high-performance web servers, reverse proxies, and load balancers. Delivering optimized, scalable infrastructure solutions for modern web applications.",
  keywords: ["NGINX expert", "web server configuration", "reverse proxy", "load balancing", "performance optimization", "server infrastructure", "web application delivery"],
  url: "https://marktellez.com/i-know/nginx",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function NginxSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">NGINX: High-Performance Web Server & Proxy Expertise</h1>

        <p className="text-gray-300">My NGINX expertise spans years of configuring and optimizing web servers for high-traffic applications. I've implemented sophisticated reverse proxy setups, load balancing solutions, and caching strategies that dramatically improve performance and reliability. My configurations are secure, efficient, and designed to handle production workloads at scale.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My NGINX expertise goes beyond basic configuration—it's about architecting robust server infrastructures that deliver exceptional performance. I've built complex proxy systems, API gateways, and content delivery solutions that reduce latency while improving security. My approach combines deep technical knowledge with practical implementation, ensuring server setups that solve real business challenges.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                High-performance server configurations that handle millions of concurrent connections
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced reverse proxy setups with intelligent routing and SSL termination
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Optimized caching strategies that reduce server load and improve response times
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">NGINX Implementation Expertise</h2>
        <p className="mb-6 text-gray-300">My approach to NGINX combines performance optimization with security best practices to create reliable, scalable server infrastructures:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Load Balancing</h4>
            <p className="text-sm text-gray-300">Implementing sophisticated load balancing configurations with health checks, session persistence, and dynamic server pools for high-availability systems.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">API Gateway</h4>
            <p className="text-sm text-gray-300">Building API gateway solutions with request routing, rate limiting, and authentication that provide a secure entry point for microservice architectures.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Content Delivery</h4>
            <p className="text-sm text-gray-300">Optimizing static content delivery with advanced caching, compression, and HTTP/2 support that dramatically improves website performance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Security Hardening</h4>
            <p className="text-sm text-gray-300">Implementing security best practices including TLS configuration, header protection, and request filtering to protect applications from common vulnerabilities.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What sets me apart is the ability to transform server infrastructure into a strategic asset. My NGINX implementations don't just serve content—they enhance application performance, improve security posture, and reduce operational overhead.</p>

        <p className="mt-4 text-gray-300">I focus on business outcomes, not just technical configurations. Every server setup is designed with scalability, maintainability, and performance in mind, ensuring that infrastructure directly supports key business metrics and user experience goals.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Advanced NGINX Features</h2>
        <p className="text-gray-300">I leverage NGINX's full feature set to create comprehensive server solutions:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Dynamic module integration for extended functionality</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Real-time monitoring and metrics collection via the NGINX API</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Advanced traffic management with key-value stores and dynamic configuration</span>
            </li>
          </ul>
        </div>

        <h2 className="mt-8 text-white">Let's Optimize Your Server Infrastructure</h2>
        <p className="text-gray-300">Looking for an NGINX expert who can transform your web server performance and reliability? I'm ready to help you build a robust, scalable infrastructure that supports your business goals.</p>

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