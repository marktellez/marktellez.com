import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function MySQLSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">MySQL: 18+ Years of Database Expertise</h1>

        <p className="text-gray-300">With nearly two decades of MySQL experience, I've mastered this powerful database across countless projects and technology stacks. From complex queries and performance optimization to high-availability clusters and cloud deployments, my MySQL expertise enables me to build robust, scalable data solutions for businesses of all sizes.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My MySQL expertise spans the full spectrum of database operations—from schema design and query optimization to replication setup and migration strategies. I've implemented MySQL solutions across diverse domains, always focusing on performance, reliability, and data integrity.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Cross-Platform Implementation</h2>
        <p className="text-gray-300">What sets my MySQL experience apart is its breadth across multiple technology stacks. I've successfully integrated MySQL with:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Ruby on Rails</h4>
            <p className="text-sm text-gray-300">Leveraging ActiveRecord with MySQL-specific features for optimal performance and developer productivity.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Django</h4>
            <p className="text-sm text-gray-300">Building robust Python web applications with Django ORM and MySQL's efficient storage engines.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">PHP</h4>
            <p className="text-sm text-gray-300">Creating dynamic web applications with PHP and MySQL, the classic combination powering countless websites.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/next-js">NextJS</Link></h4>
            <p className="text-sm text-gray-300">Creating modern web applications with Prisma, Drizzle, and other ORM tools for NextJS and MySQL.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Cloud Services</h4>
            <p className="text-sm text-gray-300">Deploying and managing MySQL with AWS RDS, Azure Database for MySQL, and other cloud platforms for scalable solutions.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My MySQL Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized MySQL skills across several high-value domains:</p>

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
            <h4 className="text-xl font-semibold text-white mb-3">Migration Strategies</h4>
            <p className="text-sm text-gray-300">Planning and executing database migrations with minimal downtime, including complex schema changes and data transformations.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Storage Engine Optimization</h4>
            <p className="text-sm text-gray-300">Leveraging InnoDB, MyISAM, and other storage engines based on specific workload requirements and performance needs.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Security & Compliance</h4>
            <p className="text-sm text-gray-300">Implementing robust security measures, access controls, and audit trails to protect sensitive data.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next MySQL Solution</h3>
        <p className="text-gray-300">Looking for a MySQL expert who can design efficient database schemas, optimize performance, or implement complex data solutions? With 18+ years of experience across multiple platforms, I'm ready to help transform your requirements into reliable, scalable database systems.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR MYSQL PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
