import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "CSS Expert | Frontend Styling Specialist - Mark Tellez",
  description: "Frontend developer with deep CSS expertise for creating responsive, accessible, and visually stunning web interfaces. From custom animations to complex layouts.",
  keywords: ["CSS expert", "frontend development", "responsive design", "web styling", "UI development", "TailwindCSS"],
  url: "https://marktellez.com/i-know/css",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function CssSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">CSS Expertise: Crafting Beautiful, Functional Interfaces</h1>

        <p className="text-gray-300">Throughout my career as a web developer, CSS has been a fundamental tool in my arsenal. From hand-crafted stylesheets to modern utility frameworks like <Link href="/i-know/tailwindcss">TailwindCSS</Link>, I've mastered the art of transforming designs into responsive, accessible, and visually compelling interfaces that enhance user experience while maintaining performance.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Design Implementation</h2>
        <p className="text-gray-300">My CSS expertise spans the evolution of web styling—from traditional CSS to preprocessors like SASS/SCSS to modern approaches with TailwindCSS. This journey has given me a deep understanding of both the fundamentals and cutting-edge techniques. Across numerous projects, I've implemented complex layouts, animations, and responsive designs that work flawlessly across devices and browsers.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Responsive design implementation for seamless multi-device experiences
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Modern CSS architecture with TailwindCSS for maintainable, scalable styling
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Performance optimization for fast-loading, smooth user interfaces
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Modern Styling Approach</h2>
        <p className="mb-6 text-gray-300">My approach to CSS has evolved with the industry, focusing on techniques that maximize both developer efficiency and user experience:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Utility-first CSS with TailwindCSS for rapid development</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Mobile-first responsive design for universal accessibility</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">CSS Grid and Flexbox for complex, responsive layouts</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">CSS animations and transitions for enhanced user experience</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Cross-Browser Compatibility & Accessibility</h2>
        <p className="text-gray-300">My CSS implementations prioritize both cross-browser compatibility and accessibility standards. I ensure that interfaces not only look great but also function properly across all modern browsers and provide an inclusive experience for users with disabilities. This attention to detail results in interfaces that are truly universal.</p>

        <div className="my-10 p-8 md:p-10 bg-gray-900/40 rounded-xl">
          <h3 className="text-xl text-white mb-6">CSS Expertise Highlights:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="text-teal-400 font-medium mb-2">Responsive Web Design</h4>
              <p className="text-gray-300">Creating fluid layouts that adapt seamlessly to any screen size using media queries and flexible units</p>
            </div>
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="text-teal-400 font-medium mb-2">CSS Preprocessors</h4>
              <p className="text-gray-300">Leveraging SASS/SCSS for maintainable stylesheets with variables, mixins, and nested rules</p>
            </div>
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="text-teal-400 font-medium mb-2">Modern Layout Techniques</h4>
              <p className="text-gray-300">Implementing complex layouts with CSS Grid and Flexbox for optimal content organization</p>
            </div>
            <div className="bg-gray-800/50 p-5 rounded-lg">
              <h4 className="text-teal-400 font-medium mb-2">Animation & Transitions</h4>
              <p className="text-gray-300">Creating smooth, performant animations that enhance user experience without sacrificing performance</p>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Let's Build Your Next Interface</h2>
        <p className="text-gray-300">Looking for a CSS expert who can transform your design vision into a responsive, accessible, and visually stunning interface? I'm ready to help bring your project to life with clean, maintainable CSS that delivers exceptional user experiences.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}
