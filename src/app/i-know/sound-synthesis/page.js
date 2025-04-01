import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Sound Synthesis Expert | Analog & AI Synthesis - Mark Tellez",
  description: "Experienced sound synthesis specialist with expertise in analog synthesizers, VST plugins, and AI-based sound generation. Creating innovative audio solutions for creative and technical applications.",
  keywords: ["sound synthesis", "analog synthesizers", "VST plugins", "AI sound generation", "audio engineering", "music production", "generative audio"],
  url: "https://marktellez.com/i-know/sound-synthesis",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function SoundSynthesisSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Sound Synthesis: Analog, Digital, and AI-Powered Audio Creation</h1>

        <p className="text-gray-300">My expertise in sound synthesis spans traditional analog hardware, modern VST plugins, and cutting-edge AI-based generation techniques. I've developed custom sound design solutions and audio processing systems that bridge the gap between classic synthesis methods and modern machine learning approaches.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Expertise and Innovation</h2>
        <p className="text-gray-300">My approach to sound synthesis combines deep technical knowledge with creative applications. At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link> and <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I developed sophisticated audio processing systems that complemented our voice synthesis technologies. During my time at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I explored generative audio models alongside my work with GANs and Transformer architectures.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Design and implementation of custom sound synthesis algorithms and audio processing chains
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Development of AI-based sound generation models using GANs and Transformer architectures
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Integration of analog synthesizer techniques with modern digital workflows
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Creation of custom VST plugins and audio processing tools for specialized sound design
              </div>
            </div>

            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Building real-time audio generation systems for interactive applications and performances
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Synthesis Technologies and Approaches</h2>
        <p className="text-gray-300">My experience spans multiple synthesis methods and technologies, allowing me to select the right approach for each project:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-4">Analog Synthesis</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Hardware synthesizer programming and patch design</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Modular synthesis systems and Eurorack integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Subtractive, FM, and wavetable synthesis techniques</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-4">Digital & VST Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Custom VST plugin development for specialized audio processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Integration of synthesis engines with DAW environments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Real-time audio processing and performance optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-4">AI-Based Synthesis</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>GAN-based audio generation models</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Transformer architectures for sequential audio synthesis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Neural network approaches to timbre transfer and sound morphing</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-4">Creative Applications</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Soundtrack and sound design for interactive media</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Generative music systems and algorithmic composition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">•</span>
                <span>Audio branding and sonic identity development</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Project Experience</h2>
        <p className="text-gray-300">My work in sound synthesis has spanned multiple projects and applications:</p>

        <div className="mt-8 space-y-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">AI-Powered Sound Design System</h3>
            <p className="text-gray-300">Developed during my time at VoxBird AI, this system used machine learning to generate custom sound effects and ambient textures based on textual descriptions. The technology complemented our voice synthesis work by providing complete audio environments for narrative content.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Custom Synthesis Engine for Interactive Media</h3>
            <p className="text-gray-300">Created a real-time synthesis engine that generated adaptive soundscapes responding to user interactions. This system combined traditional synthesis techniques with machine learning to create evolving audio environments that enhanced user engagement.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Analog-Digital Hybrid System</h3>
            <p className="text-gray-300">Built a custom setup that bridged analog hardware synthesizers with digital processing and AI-based sound manipulation, creating a flexible production environment that combined the warmth of analog with the precision and possibilities of digital technologies.</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <CTAButton href="/contact" className="px-8 py-4 text-lg">
            Discuss Your Sound Synthesis Project
          </CTAButton>
        </div>
      </div>
    </div>
  );
}