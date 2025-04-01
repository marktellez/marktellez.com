import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Systems Scaling Expert | Infrastructure Architect - Mark Tellez",
  description: "Hire a systems scaling expert with extensive experience building high-performance, scalable infrastructure. Delivering robust solutions that handle growing workloads with exceptional reliability.",
  keywords: ["systems scaling", "infrastructure scaling", "high-availability", "load balancing", "performance optimization", "cloud architecture", "distributed systems"],
  url: "https://marktellez.com/i-know/systems-scaling",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function SystemsScalingSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Systems Scaling: Building Infrastructure That Grows With Your Business</h1>

        <p className="text-gray-300">My systems scaling expertise spans over a decade of designing and implementing high-performance infrastructure. I've built systems that efficiently handle massive traffic spikes, process high-volume data streams, and maintain exceptional reliability under varying loads. My approach combines technical depth with strategic planning to create scalable architectures that support business growth.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My scaling expertise goes beyond basic load balancing—it's about architecting complete systems that grow efficiently with demand. During my time at <Link href="/companies-ive-worked-for/codementor">Codementor</Link>, I helped scale systems to support thousands of concurrent users, implementing sophisticated caching strategies, database optimizations, and distributed processing pipelines that maintained performance under heavy loads.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Horizontal and vertical scaling strategies tailored to specific workload patterns
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Performance optimization through caching, database tuning, and code profiling
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Distributed system design that eliminates single points of failure
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Scaling Approaches and Technologies</h2>
        <p className="mb-6 text-gray-300">My approach to systems scaling combines proven architectural patterns with modern cloud technologies to create resilient, high-performance infrastructure:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Load Balancing</h4>
            <p className="text-sm text-gray-300">Implementing sophisticated traffic distribution across multiple servers using AWS ELB, Nginx, and HAProxy to maximize throughput and ensure high availability.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Database Scaling</h4>
            <p className="text-sm text-gray-300">Designing read replicas, sharding strategies, and connection pooling for <Link href="/i-know/mysql">MySQL</Link>, <Link href="/i-know/postgresql">PostgreSQL</Link>, and NoSQL databases to handle growing data volumes.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Caching Strategies</h4>
            <p className="text-sm text-gray-300">Implementing multi-level caching with Redis, Memcached, and CDNs to reduce database load and accelerate content delivery across global regions.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Auto-Scaling</h4>
            <p className="text-sm text-gray-300">Creating dynamic resource allocation systems with <Link href="/i-know/aws-cloud-services">AWS</Link> Auto Scaling Groups and Kubernetes HPA to automatically adjust capacity based on real-time demand.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Impact</h2>
        <p className="text-gray-300">My systems scaling expertise has delivered tangible results across multiple organizations:</p>

        <p className="mt-4 text-gray-300">At Codementor, I redesigned the platform's infrastructure to handle 10x growth in user traffic, implementing a distributed architecture that maintained sub-200ms response times even during peak usage periods. This scaling work directly supported the company's expansion to over 500,000 users.</p>

        <p className="mt-4 text-gray-300">For <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link>, I built a scalable voice synthesis pipeline capable of processing thousands of concurrent requests with consistent performance. The system automatically scaled based on demand patterns, optimizing both performance and infrastructure costs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Complementary Technologies</h2>
        <p className="text-gray-300">My systems scaling expertise is enhanced by deep knowledge of related technologies:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/linux">Linux</Link></h4>
            <p className="text-sm text-gray-300">Deep understanding of kernel tuning, resource management, and performance optimization for high-throughput systems.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/docker">Docker</Link></h4>
            <p className="text-sm text-gray-300">Containerization for consistent deployment and efficient resource utilization across distributed infrastructure.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/bash-scripting">Bash Scripting</Link></h4>
            <p className="text-sm text-gray-300">Automation of scaling operations, monitoring, and maintenance tasks for efficient infrastructure management.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Scale Your Infrastructure</h3>
        <p className="text-gray-300">Looking for an expert who can design and implement scalable systems that support your business growth? I'm ready to help you build infrastructure that handles increasing workloads with exceptional reliability and performance.</p>

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