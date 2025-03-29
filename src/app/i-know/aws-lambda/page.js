import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "AWS Lambda Expert | Serverless Developer for Hire - Mark Tellez",
  description: "Hire an AWS Lambda expert with extensive experience in serverless architecture, event-driven applications, and cloud-native solutions. Delivering scalable, cost-effective serverless applications for businesses of all sizes.",
  keywords: ["AWS Lambda expert", "serverless developer", "event-driven applications", "function-as-a-service", "cloud-native solutions", "API integration", "microservices architecture", "cost optimization"],
  url: "https://marktellez.com/i-know/aws-lambda",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function LambdaPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div>
        <h1 className="text-white">AWS Lambda: Serverless Solutions Expert</h1>

        <p className="text-gray-300">I'm an AWS Lambda specialist with years of experience designing and implementing serverless architectures. From simple automation tasks to complex event-driven applications, I've leveraged Lambda's powerful capabilities to deliver scalable, resilient, and cost-effective solutions that automatically scale with your business needs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Expertise & Implementation Experience</h2>
        <p className="text-gray-300">My AWS Lambda expertise spans multiple languages and integration patterns. I've implemented solutions that process millions of events efficiently while maintaining security and performance standards. My experience includes:</p>

        <ul className="list-none space-y-3 mt-6">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Multi-language Lambda functions (Node.js, Python, Java, C#, Ruby)</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Event-driven architectures with S3, SQS, SNS, and EventBridge</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">RESTful and GraphQL APIs with API Gateway and Lambda</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Real-time data processing with Kinesis and Lambda</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Lambda SnapStart for Java applications with runtime hooks</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">File processing pipelines with S3, Lambda, and DynamoDB</span>
          </li>
        </ul>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Advanced Lambda Solutions</h2>
        <p className="text-gray-300">I've implemented sophisticated Lambda-based solutions that solve complex business problems:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Multilingual Content Analysis</h4>
            <p className="text-sm text-gray-300">Built serverless pipelines that extract text from images, detect language, analyze sentiment, translate content, and generate audio files using Lambda with Amazon Textract, Comprehend, Translate, and Polly.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Secure Document Processing</h4>
            <p className="text-sm text-gray-300">Implemented PDF encryption workflows that automatically process uploaded documents, apply security measures, and store them in dedicated encrypted buckets using Lambda with S3 triggers.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Optimized Lambda Performance</h4>
            <p className="text-sm text-gray-300">Enhanced Lambda function performance using source-generated serialization in .NET, dependency injection with Lambda Annotations, and runtime hooks for Java applications with SnapStart.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Integration Expertise</h2>
        <p className="text-gray-300">I excel at integrating AWS Lambda with other services and frameworks to create comprehensive solutions:</p>

        <ul className="list-none space-y-3 mt-6">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Frontend integration with <Link href="/i-know/reactjs">React</Link> and <Link href="/i-know/nextjs">Next.js</Link> applications</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Database operations with <Link href="/i-know/mongodb">MongoDB</Link>, <Link href="/i-know/postgresql">PostgreSQL</Link>, and DynamoDB</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Storage solutions with <Link href="/i-know/aws-s3">AWS S3</Link> and EFS</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Serverless frameworks like AWS SAM, Serverless Framework, and CDK</span>
          </li>
        </ul>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Strategic Value & Business Impact</h2>
        <p className="text-gray-300">My approach to AWS Lambda goes beyond technical implementation—I focus on delivering business value through:</p>

        <ul className="list-none space-y-3 mt-6">
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Cost optimization through efficient function design and execution</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Scalability that automatically adjusts to your business needs</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Reduced operational overhead with serverless infrastructure</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="text-lg">Faster time-to-market with modular, event-driven architectures</span>
          </li>
        </ul>

        <div className="mt-12">
          <CTAButton href="/contact">Discuss Your Serverless Project</CTAButton>
        </div>
      </div>
    </div>
  );
}
