import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "PostgreSQL Expert | Database Developer for Hire - Mark Tellez",
  description: "Hire a PostgreSQL expert with 18+ years of experience in database optimization, high availability, and cloud deployments. Delivering robust, scalable data solutions for businesses of all sizes.",
  keywords: ["PostgreSQL expert", "database developer", "performance optimization", "high availability", "cloud deployment", "data migration", "schema design", "query optimization"],
  url: "https://marktellez.com/i-know/postgresql",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function PostgreSQLSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">PostgreSQL: 18+ Years of Database Expertise</h1>

        <p className="text-gray-300">With nearly two decades of PostgreSQL experience, I've mastered this powerful database across countless projects and technology stacks. From complex queries and performance optimization to high-availability clusters and cloud deployments, my PostgreSQL expertise enables me to build robust, scalable data solutions for businesses of all sizes.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My PostgreSQL expertise spans the full spectrum of database operations—from schema design and query optimization to replication setup and migration strategies. I've implemented PostgreSQL solutions across diverse domains, always focusing on performance, reliability, and data integrity.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Cross-Platform Implementation</h2>
        <p className="text-gray-300">What sets my PostgreSQL experience apart is its breadth across multiple technology stacks. I've successfully integrated PostgreSQL with:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Ruby on Rails</h4>
            <p className="text-sm text-gray-300">Leveraging ActiveRecord with PostgreSQL-specific features for optimal performance and developer productivity.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Django</h4>
            <p className="text-sm text-gray-300">Building robust Python web applications with Django ORM and PostgreSQL's advanced data types.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">.NET</h4>
            <p className="text-sm text-gray-300">Implementing Entity Framework with PostgreSQL providers for enterprise-grade applications.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/next-js">NextJS</Link></h4>
            <p className="text-sm text-gray-300">Creating modern web applications with Prisma, Drizzle, and other ORM tools for NextJS and PostgreSQL.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Cloud Services</h4>
            <p className="text-sm text-gray-300">Deploying and managing PostgreSQL with AWS Lambda, RDS, Aurora, and other cloud platforms for scalable solutions.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My PostgreSQL Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized PostgreSQL skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Query tuning, indexing strategies, and database configuration for maximum throughput and minimal latency.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">High Availability</h4>
            <p className="text-sm text-gray-300">Setting up replication, failover mechanisms, and backup strategies to ensure continuous database operation.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Migration & Scaling</h4>
            <p className="text-sm text-gray-300">Seamlessly migrating data between systems and scaling PostgreSQL to handle growing workloads.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Advanced Features</h4>
            <p className="text-sm text-gray-300">Leveraging JSON/JSONB, full-text search, geospatial capabilities, and other PostgreSQL-specific features.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Security & Compliance</h4>
            <p className="text-sm text-gray-300">Implementing robust security measures, access controls, and audit trails to protect sensitive data.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next PostgreSQL Solution</h3>
        <p className="text-gray-300">Looking for a PostgreSQL expert who can design efficient database schemas, optimize performance, or implement complex data solutions? With 18+ years of experience across multiple platforms, I'm ready to help transform your requirements into reliable, scalable database systems.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR POSTGRESQL PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
