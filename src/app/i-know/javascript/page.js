import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

export default function JavaScriptSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="w-full">
        <h1 className="text-white">JavaScript: 25+ Years of Web Development Expertise</h1>

        <p className="text-gray-300">Since 1997, JavaScript has been the foundation of my development career. From the early days of DHTML to modern frameworks, I've witnessed and participated in JavaScript's evolution into the ubiquitous language powering today's web. This extensive experience allows me to solve complex problems with elegant, efficient solutions that leverage the full power of the language.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Depth and Versatility</h2>
        <p className="text-gray-300">JavaScript has been the common denominator throughout my entire career in web development. I've used it across numerous platforms and frameworks, from early browser scripting to modern full-stack applications. My deep understanding of JavaScript fundamentals enables me to quickly adapt to new frameworks and libraries while maintaining clean, performant code.</p>

        <h3 className="mt-12 text-white">Core Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced asynchronous programming with Promises, async/await, and event-driven architectures
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Functional programming techniques for clean, maintainable code
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Deep DOM manipulation expertise from vanilla JS to modern frameworks
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">JavaScript Evolution Journey</h2>
        <p className="mb-6 text-gray-300">My JavaScript journey spans the language's entire modern history. I've worked with:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Early DHTML and browser DOM scripting (1997-2005)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">jQuery and AJAX-driven applications (2006-2012)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Modern frameworks including <Link href="/i-know/react-js">React</Link>, Angular, and Vue</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Server-side JavaScript with Node.js and Express</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">ES6+ features and modern JavaScript patterns</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">My JavaScript expertise has been central to numerous professional achievements, from building YouTube's original comment system to developing sophisticated voice synthesis models at Zooly AI. This language has been the foundation for my work across diverse industries including e-commerce, social media, gaming, and AI.</p>

        <p className="mt-4 text-gray-300">As a JavaScript educator on YouTube and Codementor, I've helped thousands of developers improve their skills, sharing practical knowledge gained from decades of real-world application development. My teaching approach emphasizes core language principles that remain valuable regardless of framework trends.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">JavaScript Ecosystem Mastery</h2>
        <p className="text-gray-300">Beyond core language features, I've developed expertise across the broader JavaScript ecosystem:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Frontend Frameworks</h4>
            <p className="text-sm text-gray-300">From <Link href="/i-know/react-js">React</Link> to Angular and Vue, I've built production applications with all major JavaScript frameworks, understanding their strengths and optimal use cases.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Backend JavaScript</h4>
            <p className="text-sm text-gray-300">Extensive experience with Node.js, Express, and serverless architectures for building scalable APIs and microservices.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Modern Tooling</h4>
            <p className="text-sm text-gray-300">Proficiency with the entire JavaScript toolchain including Webpack, Babel, ESLint, and testing frameworks like Jest and Cypress.</p>
          </div>
        </div>

        <p className="text-gray-300">This comprehensive understanding of the JavaScript ecosystem allows me to select the right tools for each project, balancing innovation with stability to deliver solutions that are both cutting-edge and maintainable.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Something Amazing with JavaScript</h3>
        <p className="text-gray-300">Looking for a developer with deep JavaScript expertise who can deliver clean, efficient, and maintainable code? With over 25 years of experience across the entire evolution of the language, I bring both historical perspective and cutting-edge knowledge to every project.</p>

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
