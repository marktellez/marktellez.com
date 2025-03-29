import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Cursor AI Expert | AI-Powered Development Specialist - Mark Tellez",
  description: "Hire a Cursor AI expert who achieves 75% productivity gains through advanced prompting techniques and AI-assisted development. Delivering rapid prototyping, complex refactoring, and accelerated project timelines.",
  keywords: ["Cursor AI expert", "AI-assisted development", "rapid prototyping", "complex refactoring", "documentation generation", "productivity optimization", "development acceleration", "AI prompting techniques"],
  url: "https://marktellez.com/i-know/cursor",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});


export default function CursorSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Cursor: AI-Powered Development Acceleration</h1>

        <p className="text-gray-300">I'm a master at leveraging Cursor AI to dramatically accelerate my development workflow. By integrating this powerful AI-assisted coding tool into my process, I've achieved productivity gains of at least 75% across projects of all sizes and complexities.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Maximizing AI-Assisted Development</h2>
        <p className="text-gray-300">My expertise with Cursor goes beyond basic usage. I've developed sophisticated prompting techniques and workflows that extract the maximum value from AI assistance while maintaining code quality and architectural integrity. This allows me to focus on high-level design decisions while accelerating implementation.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Practical Applications</h2>
        <p className="text-gray-300">I leverage Cursor across my entire development stack to achieve exceptional results:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Rapid Prototyping</h4>
            <p className="text-sm text-gray-300">Transforming concepts into working prototypes in a fraction of the time, allowing for faster iteration and validation.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Complex Refactoring</h4>
            <p className="text-sm text-gray-300">Executing large-scale code transformations with precision and speed, maintaining functionality while improving structure.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Documentation Generation</h4>
            <p className="text-sm text-gray-300">Creating comprehensive documentation that accelerates onboarding and knowledge transfer for team members.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Benefits to Your Project</h2>
        <p className="text-gray-300">My mastery of Cursor translates directly to tangible benefits for your projects:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Accelerated Delivery</h4>
            <p className="text-sm text-gray-300">Completing development tasks in a quarter of the time without sacrificing quality or maintainability.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Cost Efficiency</h4>
            <p className="text-sm text-gray-300">Reducing development hours while maintaining high-quality output, resulting in significant cost savings.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Experience the Productivity Difference</h3>
        <p className="text-gray-300">Looking for a developer who can deliver exceptional results at unprecedented speed? My mastery of Cursor AI-assisted development allows me to build, refactor, and optimize code with remarkable efficiency while maintaining the highest standards of quality.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>ACCELERATE YOUR PROJECT WITH MY EXPERTISE</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
