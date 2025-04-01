import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Docker Expert | Container Specialist for Hire - Mark Tellez",
  description: "Hire a Docker expert with extensive experience in containerization, microservices architecture, and deployment automation. Delivering consistent, scalable environments for development and production.",
  keywords: ["Docker expert", "containerization", "microservices", "DevOps", "CI/CD", "Docker Compose", "container orchestration"],
  url: "https://marktellez.com/i-know/docker",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function DockerPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Docker: Containerization Expert</h1>

        <p className="text-gray-300">My Docker expertise spans years of implementing containerization strategies for applications of all sizes. I leverage Docker to create consistent, reproducible environments that eliminate the "works on my machine" problem and streamline deployment across development, testing, and production stages.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Docker knowledge extends beyond basic containerization to include multi-container applications with Docker Compose, integration with CI/CD pipelines, and deployment to orchestration platforms. I've containerized diverse applications from <Link href="/i-know/reactjs">React</Link> frontends to <Link href="/i-know/python">Python</Link> ML services, ensuring consistent behavior across environments while optimizing for performance and security.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Optimized Dockerfiles that minimize image size and maximize security
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Multi-stage builds for efficient development and production workflows
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Integration with CI/CD pipelines for automated testing and deployment
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Docker Implementation Experience</h2>
        <p className="text-gray-300">I've implemented Docker in various contexts, always focusing on creating efficient, secure, and maintainable containerization strategies:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">AI Model Deployment</h4>
            <p className="text-sm text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link>, I containerized voice synthesis models for consistent deployment across development and production environments, ensuring reproducible inference results.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Microservices Architecture</h4>
            <p className="text-sm text-gray-300">Designed and implemented Docker-based microservices for e-commerce platforms during my time at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, enabling independent scaling and deployment of system components.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Development Environments</h4>
            <p className="text-sm text-gray-300">Created consistent development environments with Docker Compose for team projects, eliminating configuration discrepancies and enabling new developers to onboard quickly.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Docker in Modern Development</h2>
        <p className="text-gray-300">Docker has become an essential tool in modern software development, and I leverage it to:</p>

        <ul className="bg-gray-900/40 rounded-lg p-6 my-8">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Ensure consistent environments from development to production</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Isolate applications and their dependencies for better security</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Simplify deployment and scaling of applications in production</span>
          </li>
        </ul>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Cross-Platform Docker Expertise</h2>
        <p className="text-gray-300">I run all kinds of applications through Docker on both Windows and Linux environments. Docker is my go-to solution for containerization across platforms, allowing me to:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Windows Development</h4>
            <p className="text-gray-300">I leverage Docker Desktop for Windows with WSL2 integration to develop and test containerized applications in a Windows environment while maintaining Linux container compatibility.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm text-gray-300">Seamless WSL2 integration for native Linux container performance</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm text-gray-300">Visual Studio Code integration with Docker extensions</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900/30 p-6 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Linux Production</h4>
            <p className="text-gray-300">I deploy and manage containerized applications on Linux servers, leveraging the full power of Docker in production environments.</p>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm text-gray-300">Optimized container orchestration with Docker Swarm and Kubernetes</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span className="text-sm text-gray-300">Automated deployment pipelines with CI/CD integration</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="mt-8 text-white">Containerized Application Types</h3>
        <p className="text-gray-300">My experience spans containerizing diverse application types:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="bg-gray-900/20 p-4 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Web Applications</h4>
            <p className="text-sm text-gray-300">Next.js, React, and Node.js applications with optimized multi-stage builds</p>
          </div>
          <div className="bg-gray-900/20 p-4 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">AI/ML Services</h4>
            <p className="text-sm text-gray-300">Python-based machine learning models with GPU passthrough for inference</p>
          </div>
          <div className="bg-gray-900/20 p-4 rounded-lg border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-2">Database Systems</h4>
            <p className="text-sm text-gray-300">Persistent data storage with volume management for MongoDB, PostgreSQL, and Redis</p>
          </div>
        </div>

        <div className="mt-12">
          <CTAButton href="/contact">Discuss Your Docker Project</CTAButton>
        </div>
      </div>
    </div>
  );
}
