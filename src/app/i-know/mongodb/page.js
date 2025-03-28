import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function MongoDBSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">MongoDB: Enterprise-Scale Database Expertise</h1>

        <p className="text-gray-300">My MongoDB expertise spans from application development to large-scale enterprise migrations. I've worked with MongoDB in various contexts—from web applications and cloud systems to massive database migrations for Fortune 500 companies. My approach combines technical depth with strategic thinking, ensuring solutions that address core business needs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My MongoDB expertise covers the full spectrum of database operations—from schema design and query optimization to cluster management and large-scale migrations. I've implemented MongoDB solutions across various domains, from web applications to enterprise data platforms, always focusing on performance, scalability, and reliability.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What distinguishes my work with MongoDB is the ability to handle enterprise-scale challenges. As part of a contractor team at <Link href="/companies-ive-worked-for/uber">Uber</Link>, I helped migrate over 100 <Link href="/i-know/postgresql">PostgreSQL</Link> servers to a single MongoDB cluster—a massive undertaking that required deep understanding of both database systems, careful planning, and flawless execution.</p>

        <p className="mt-4 text-gray-300">My MongoDB implementations prioritize performance optimization, data integrity, and operational reliability. I design database schemas and access patterns with an eye toward future scalability and adaptability, ensuring they continue to deliver value as business needs evolve.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My MongoDB Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized MongoDB skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Database Migration</h4>
            <p className="text-sm text-gray-300">Successfully migrating large-scale relational databases to MongoDB, including complex data transformations and validation processes.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Schema Design</h4>
            <p className="text-sm text-gray-300">Creating optimal document structures and access patterns for various use cases, balancing performance, flexibility, and data integrity.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Cluster Management</h4>
            <p className="text-sm text-gray-300">Setting up, configuring, and maintaining MongoDB clusters for high availability, scalability, and performance in production environments.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Tuning MongoDB for optimal performance through indexing strategies, query optimization, and hardware resource allocation.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Application Integration</h4>
            <p className="text-sm text-gray-300">Integrating MongoDB with various application stacks and frameworks, ensuring efficient data access patterns and robust error handling.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next MongoDB Solution</h3>
        <p className="text-gray-300">Looking for a MongoDB expert who can design efficient database schemas, optimize performance, or manage large-scale migrations? I'm ready to help transform your requirements into reliable, scalable database solutions.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR MONGODB PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
