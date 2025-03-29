import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "AWS S3 Expert | Cloud Storage Specialist - Mark Tellez",
  description: "Hire an AWS S3 expert with extensive experience in cloud storage optimization, static website hosting, and serverless architectures. Delivering scalable, cost-effective storage solutions for businesses of all sizes.",
  keywords: ["AWS S3 expert", "cloud storage specialist", "static website hosting", "serverless architecture", "data lake implementation", "content delivery", "CloudFront integration", "storage optimization"],
  url: "https://marktellez.com/i-know/aws-s3",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AWSS3Page() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div>
        <h1 className="text-white">AWS S3: Scalable Cloud Storage Solutions</h1>

        <p className="text-gray-300">I'm an AWS S3 expert with years of experience implementing and optimizing cloud storage solutions. From simple file storage to complex data lakes and serverless architectures, I've leveraged Amazon S3's powerful capabilities to deliver scalable, reliable, and cost-effective solutions for businesses of all sizes.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Expertise & Implementation Experience</h2>
        <p className="text-gray-300">My AWS S3 expertise spans the full spectrum of storage solutions, from basic bucket management to advanced architectural patterns. I've implemented solutions that process terabytes of data efficiently while maintaining security and compliance standards. My experience includes:</p>

        <ul className="list-none space-y-3 mt-6">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Static website hosting with custom domains and SSL</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">S3 Express One Zone for high-performance applications</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">CloudFront integration for global content delivery</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Event-driven architectures with S3 triggers and Lambda</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Multi-Region Access Points for global data access</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Data lakes with S3, Athena, and Glue</span>
          </li>
        </ul>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Integration Expertise</h2>
        <p className="text-gray-300">I excel at integrating AWS S3 with other services and frameworks to create comprehensive solutions:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Frontend Integration</h4>
            <p className="text-sm text-gray-300">Seamlessly connecting <Link href="/i-know/reactjs">React</Link> and <Link href="/i-know/nextjs">NextJS</Link> applications to S3 for asset storage, user uploads, and static site hosting.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Serverless Architectures</h4>
            <p className="text-sm text-gray-300">Building event-driven applications with S3 triggers, Lambda functions, and API Gateway for scalable, cost-effective solutions.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Media Processing</h4>
            <p className="text-sm text-gray-300">Implementing media processing pipelines with S3, MediaConvert, and CloudFront for video streaming and image optimization.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Strategic Value & Business Impact</h2>
        <p className="text-gray-300">My approach to AWS S3 goes beyond technical implementation—I focus on delivering business value through:</p>

        <ul className="list-none space-y-3 mt-6">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Cost optimization through storage class analysis and lifecycle policies</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Performance enhancement through caching strategies and S3 Transfer Acceleration</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Security implementation with bucket policies, IAM roles, and encryption</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Compliance solutions for regulated industries (HIPAA, PCI DSS, GDPR)</span>
          </li>
        </ul>

        <div className="mt-12">
          <CTAButton href="/contact">Discuss Your AWS S3 Project</CTAButton>
        </div>
      </div>
    </div>
  );
}
