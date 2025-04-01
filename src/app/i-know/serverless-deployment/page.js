import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Serverless Deployment Expert | Vercel & AWS Specialist - Mark Tellez",
  description: "Hire a serverless deployment expert with extensive experience in Vercel, AWS Lambda, and cloud infrastructure. Building scalable, cost-effective solutions with minimal operational overhead.",
  keywords: ["serverless deployment", "Vercel", "AWS Lambda", "cloud infrastructure", "serverless architecture", "AWS expert", "Vercel deployment", "serverless functions"],
  url: "https://marktellez.com/i-know/serverless-deployment",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function ServerlessDeploymentSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Serverless Deployment: Cloud-Native Architecture Expertise</h1>

        <p className="text-gray-300">My serverless deployment experience spans platforms like Vercel and AWS Lambda, enabling me to build highly scalable applications with minimal operational overhead. I've architected solutions that automatically scale with demand, reduce infrastructure costs, and accelerate development cycles through simplified deployment workflows.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My serverless expertise goes beyond basic function deployment—it's about designing complete architectures that leverage the full potential of cloud platforms. At <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link> and <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link>, I implemented sophisticated serverless infrastructures that processed high volumes of voice synthesis requests while maintaining exceptional performance and cost efficiency.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Zero-configuration deployments that eliminate infrastructure management
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Auto-scaling architectures that handle traffic spikes without manual intervention
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Cost-optimized solutions that only charge for actual compute usage
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Platform-Specific Expertise</h2>
        <p className="mb-6 text-gray-300">I've developed specialized knowledge across multiple serverless platforms, allowing me to select the right tool for each project's specific requirements:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Vercel</h4>
            <p className="text-sm text-gray-300">Optimized for frontend applications and <Link href="/i-know/next-js">NextJS</Link> deployments with integrated CI/CD, edge functions, and global CDN distribution for maximum performance.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">AWS Lambda</h4>
            <p className="text-sm text-gray-300">Powerful function-as-a-service platform integrated with the broader <Link href="/i-know/aws-cloud-services">AWS ecosystem</Link>, enabling complex workflows with S3, API Gateway, and other services.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Implementation Experience</h2>
        <p className="text-gray-300">At VoxBird AI, I architected a serverless voice synthesis pipeline that processed thousands of requests daily. The system used AWS Lambda functions to handle voice generation requests, S3 for audio storage, and custom scaling policies to optimize cost while maintaining performance under varying loads.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Design event-driven architectures that process requests asynchronously</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implement cost-effective serverless solutions that eliminate infrastructure management</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Create deployment pipelines that enable continuous delivery with zero downtime</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Business Impact</h2>
        <p className="text-gray-300">My serverless expertise translates directly to business value through reduced operational costs, faster time-to-market, and improved scalability. By eliminating server management and leveraging pay-per-use pricing models, I've helped companies reduce infrastructure costs by up to 70% while improving application performance and reliability.</p>

        <p className="mt-4 text-gray-300">This approach is particularly valuable for startups and growing businesses, where the ability to scale quickly without large upfront infrastructure investments can be a critical competitive advantage.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Serverless Infrastructure</h3>
        <p className="text-gray-300">Looking for a serverless expert who can design and implement cloud-native architectures that scale automatically and minimize operational overhead? I'm ready to help you leverage the full potential of modern serverless platforms.</p>

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