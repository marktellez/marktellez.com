import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Unity Developer | Game & Film Production Expert - Mark Tellez",
  description: "Hire a Unity expert with extensive experience in game development and film/video production. Creating immersive interactive experiences with optimized performance and stunning visuals.",
  keywords: ["Unity developer", "Unity3D", "game development", "film production", "interactive media", "3D environments", "C# programming", "real-time rendering"],
  url: "https://marktellez.com/i-know/unity",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function UnitySkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Unity Development: Expertise in Games and Film Production</h1>

        <p className="text-gray-300">My Unity development experience spans both game creation and film/video production, enabling me to build immersive interactive experiences with optimized performance. I've developed systems that leverage Unity's powerful real-time rendering capabilities to create visually stunning environments while maintaining technical efficiency.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My Unity expertise extends beyond basic implementation—it's about creating cohesive experiences that blend technical excellence with compelling design. During my time at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I developed game-playing AI agents that could navigate complex 3D environments, demonstrating my ability to combine Unity with advanced AI techniques for innovative applications.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Performance-optimized 3D environments for games and interactive media
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Integration of AI systems with Unity for intelligent game agents
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced C# programming for custom gameplay mechanics and tools
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Film and Video Production Applications</h2>
        <p className="mb-6 text-gray-300">My experience with Unity extends beyond games into film and video production, where I've leveraged real-time rendering for innovative visual storytelling:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Virtual production environments for real-time compositing</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Interactive visualization tools for pre-production planning</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Custom shader development for unique visual effects</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Game Development Expertise</h2>
        <p className="text-gray-300">In the gaming space, I've applied my Unity skills to create engaging experiences with sophisticated mechanics and optimized performance. My approach combines technical depth with a focus on player engagement and retention.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">AI Integration</h4>
            <p className="text-sm text-gray-300">Developed intelligent game agents using <Link href="/i-know/reinforcement-learning">reinforcement learning</Link> techniques to create challenging and adaptive gameplay experiences.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Performance Optimization</h4>
            <p className="text-sm text-gray-300">Implemented advanced optimization techniques for mobile and web platforms, ensuring smooth gameplay across a range of devices.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Cross-Platform Development</h4>
            <p className="text-sm text-gray-300">Created unified codebases that deploy seamlessly across multiple platforms while maintaining consistent quality and performance.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Integration Expertise</h2>
        <p className="text-gray-300">My experience with Unity is enhanced by my ability to integrate it with other technologies and systems. During my work at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I combined Unity with <Link href="/i-know/python">Python</Link>-based machine learning models to create intelligent systems that could interact with 3D environments in sophisticated ways.</p>

        <p className="mt-4 text-gray-300">This cross-disciplinary approach allows me to create Unity applications that leverage cutting-edge AI capabilities, real-time data processing, and cloud-based services for truly innovative solutions that go beyond standard implementations.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next Interactive Experience</h3>
        <p className="text-gray-300">Looking for a Unity developer who can bring your game or interactive media project to life? I'm ready to apply my technical expertise and creative approach to create something exceptional.</p>

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