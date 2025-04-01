import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "AWS Cloud Services Expert | Cloud Architect for Hire - Mark Tellez",
  description: "Hire an AWS Cloud Services expert with extensive experience building scalable, resilient cloud infrastructure. Delivering cost-effective solutions with security and performance at the forefront.",
  keywords: ["AWS Cloud Services", "cloud architect", "S3", "EC2", "RDS", "cloud infrastructure", "serverless", "cloud migration"],
  url: "https://marktellez.com/i-know/aws-cloud-services",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AWSCloudServicesPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">AWS Cloud Services: Building Scalable Infrastructure</h1>

        <p className="text-gray-300">My experience with AWS spans years of designing, implementing, and optimizing cloud infrastructure. From startups to established businesses, I've leveraged AWS's comprehensive service portfolio to build resilient, cost-effective solutions that scale with business needs while maintaining security and performance.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My AWS expertise extends across the entire service ecosystem—from compute with EC2 to storage with S3, databases with RDS, and serverless with <Link href="/i-know/aws-lambda">Lambda</Link>. I've architected complete cloud infrastructures, data processing pipelines, and high-availability systems that deliver tangible business value. My approach combines technical depth with cost optimization, ensuring solutions that address core business needs without unnecessary expenses.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Cloud architecture design with security and scalability as core principles
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Cost optimization strategies that reduce cloud spending without sacrificing performance
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Implementation of infrastructure as code (IaC) for reproducible deployments
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">AWS Service Expertise</h2>
        <p className="text-gray-300">I've worked extensively with a wide range of AWS services, implementing solutions that leverage the best tools for each specific requirement:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Compute & Serverless</h4>
            <p className="text-sm text-gray-300">EC2, <Link href="/i-know/aws-lambda">Lambda</Link>, ECS, Fargate, and Elastic Beanstalk for diverse application hosting needs from traditional servers to event-driven functions.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Storage & Databases</h4>
            <p className="text-sm text-gray-300">S3, RDS, DynamoDB, ElastiCache, and Aurora for structured and unstructured data storage with high availability and performance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Networking & Security</h4>
            <p className="text-sm text-gray-300">VPC, CloudFront, Route 53, WAF, and IAM for secure, optimized network infrastructure with proper access controls and content delivery.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Experience</h2>
        <p className="text-gray-300">At <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link> and <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link>, I implemented comprehensive AWS infrastructures for AI voice synthesis systems, leveraging S3 for audio storage, Lambda for processing, and custom EC2 instances for model training. These systems handled high-volume voice generation with exceptional reliability and performance.</p>

        <p className="mt-4 text-gray-300">During my time at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I built multiple client infrastructures on AWS, including e-commerce platforms and CRM applications, always focusing on security, scalability, and cost optimization.</p>

        <h3 className="mt-6 text-white">Let's Build Your Cloud Infrastructure</h3>
        <p className="text-gray-300">Looking for an AWS expert who can design, implement, and optimize your cloud infrastructure? I'm ready to help you leverage the full power of AWS services for your business needs.</p>

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