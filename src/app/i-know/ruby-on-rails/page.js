import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function RubyOnRailsSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="w-full">
        <h1 className="text-white">Ruby on Rails: 18+ Years of Full-Stack Expertise</h1>

        <p className="text-gray-300">Since 2006, I've been building applications with Ruby on Rails, from its early days through its evolution into a mature, enterprise-ready framework. My experience spans countless projects across startups and established companies, where I've leveraged Rails' convention-over-configuration philosophy to deliver robust, maintainable applications with remarkable efficiency.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Rails expertise goes beyond basic CRUD applications to complex, high-performance systems that scale. I've built e-commerce platforms, content management systems, community portals, and API backends that power mobile applications. This breadth of experience allows me to quickly understand business requirements and translate them into effective technical solutions.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Full-Stack Development</h4>
            <p className="text-sm text-gray-300">Building end-to-end solutions with Rails backend and modern frontend technologies like <Link href="/i-know/react-js">React</Link> and <Link href="/i-know/javascript">JavaScript</Link>.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Database Expertise</h4>
            <p className="text-sm text-gray-300">Optimizing ActiveRecord with <Link href="/i-know/postgresql">PostgreSQL</Link> and <Link href="/i-know/mysql">MySQL</Link> for high-performance data access and management.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">API Development</h4>
            <p className="text-sm text-gray-300">Creating robust, well-documented APIs that power mobile applications and integrate with third-party services.</p>
          </div>
        </div>

        <h2 className="mt-8 text-white">Rails in the Startup Ecosystem</h2>
        <p className="text-gray-300">During my six years in the San Francisco and Los Angeles startup scenes, I built numerous Rails applications that pushed the boundaries of what the framework could accomplish. From e-commerce platforms to a game community management system designed to compete with World of Warcraft's community software, these projects leveraged Rails' productivity advantages while extending its capabilities.</p>

        <h2 className="mt-8 text-white">Modern Rails Development</h2>
        <p className="text-gray-300">I stay current with the latest Rails developments, including Hotwire, Stimulus, and other modern additions to the ecosystem. My approach combines Rails' battle-tested conventions with contemporary practices like API-first design, microservices where appropriate, and integration with modern frontend frameworks.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Identifying and resolving bottlenecks through caching strategies, database optimizations, and efficient query design.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Testing & Quality Assurance</h4>
            <p className="text-sm text-gray-300">Implementing comprehensive test suites with RSpec, Minitest, and Capybara to ensure application reliability and maintainability.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Rails Application</h3>
        <p className="text-gray-300">Looking for a Rails developer who can deliver clean, maintainable code that solves real business problems? I'm ready to help transform your requirements into robust, scalable applications that stand the test of time.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your Rails Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}
