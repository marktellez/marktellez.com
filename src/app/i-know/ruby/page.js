import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function RubySkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="w-full">
        <h1 className="text-white">Ruby: 19+ Years of Development Expertise</h1>

        <p className="text-gray-300">Since 2005, Ruby has been a cornerstone of my development career. From my introduction to the language by Jim Weirich at Callaway Golf to building countless applications across startups and enterprises, I've leveraged Ruby's elegant syntax and powerful features to create efficient, maintainable solutions that deliver exceptional business value.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Ruby expertise extends beyond basic syntax to advanced metaprogramming, performance optimization, and integration with diverse technology ecosystems. I've used Ruby for web applications, automation scripts, data processing pipelines, and even as a build tool for legacy systems. This versatility allows me to apply Ruby effectively across various domains and problem spaces.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Web Development</h4>
            <p className="text-sm text-gray-300">Building robust web applications with <Link href="/i-know/ruby-on-rails">Ruby on Rails</Link>, Sinatra, and other frameworks that leverage Ruby's expressive syntax.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Automation</h4>
            <p className="text-sm text-gray-300">Creating powerful scripts and tools that streamline development workflows and system administration tasks.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Data Processing</h4>
            <p className="text-sm text-gray-300">Developing efficient ETL pipelines and data transformation tools that process complex datasets with elegant Ruby code.</p>
          </div>
        </div>

        <h2 className="mt-8 text-white">Ruby in the Enterprise</h2>
        <p className="text-gray-300">At GEICO, I demonstrated Ruby's power as a build tool by creating automation scripts that streamlined the development of SOAP interfaces to legacy COBOL systems. This work significantly improved the team's productivity and showcased Ruby's versatility beyond web development.</p>

        <h2 className="mt-8 text-white">Ruby in Startups</h2>
        <p className="text-gray-300">During my six years in the startup ecosystem of San Francisco and Los Angeles, I built numerous applications with Ruby, pushing the boundaries of what the language could accomplish. From e-commerce platforms to community management systems, Ruby's flexibility and developer-friendly syntax enabled rapid iteration and feature development.</p>

        <h3 className="mt-6 text-white">Let's Build Your Next Ruby Solution</h3>
        <p className="text-gray-300">Looking for a Ruby developer who can deliver clean, maintainable code that solves real business problems? I'm ready to help transform your requirements into elegant, efficient solutions that stand the test of time.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your Ruby Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}
