import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Audio Mixing Expert | Professional Sound Engineer - Mark Tellez",
  description: "Experienced audio mixing professional with expertise in Ableton Live, Logic Pro, and professional VST plugins. Delivering high-quality sound production for voice synthesis and creative projects.",
  keywords: ["audio mixing", "sound engineering", "Ableton Live", "Logic Pro", "VST plugins", "sound production", "voice synthesis"],
  url: "https://marktellez.com/i-know/audio-mixing",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AudioMixingSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Audio Mixing: Professional Sound Engineering & Production</h1>

        <p className="text-gray-300">My audio mixing expertise combines technical precision with creative sensibility. Through my work at <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link> and <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I've developed sophisticated audio processing workflows that enhance voice synthesis quality and create professional-grade sound productions.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Creative Applications</h2>
        <p className="text-gray-300">My audio mixing skills extend beyond basic adjustments to include advanced techniques in sound design, spatial processing, and dynamic control. I've applied these skills across voice synthesis projects, creating custom post-processing chains that significantly improve the naturalness and quality of AI-generated voices. My experience with Ableton Live, Logic Pro, and professional VST plugins enables me to deliver polished, broadcast-ready audio for any application.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Professional-grade mixing and mastering for voice synthesis and audio production
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Custom post-processing chains for enhancing AI-generated voice quality
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced expertise with Ableton Live, Logic Pro, and professional VST plugins
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Applications</h2>
        <p className="mb-6 text-gray-300">My audio mixing expertise has been applied across various professional contexts, delivering tangible results in voice synthesis quality and creative audio production:</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Developed custom post-processing filters for voice synthesis at VoxBird AI and Zooly AI</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Created specialized EQ, compression, and spatial processing chains for AI voice enhancement</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Designed audio processing workflows that improved voice naturalness and eliminated artifacts</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Toolkit</h2>
        <p className="text-gray-300">I leverage a comprehensive set of professional audio tools and techniques to achieve exceptional results:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Ableton Live</h4>
            <p className="text-sm text-gray-300">My primary DAW for creative audio production, offering powerful tools for sound design, mixing, and audio processing with exceptional workflow efficiency.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Logic Pro</h4>
            <p className="text-sm text-gray-300">Professional-grade DAW with comprehensive mixing capabilities, used for detailed audio editing and production with its extensive built-in plugin suite.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Professional VSTs</h4>
            <p className="text-sm text-gray-300">Extensive collection of specialized plugins for dynamic processing, spectral enhancement, and spatial effects that enable precise control over audio quality.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Voice Synthesis Enhancement</h2>
        <p className="text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link> and <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I developed specialized audio processing techniques that significantly improved the quality of AI-generated voices:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Custom Post-Processing Chains</h3>
            <p className="text-gray-300">Designed specialized processing chains that eliminated common artifacts in AI-generated voices while enhancing naturalness and clarity through targeted EQ, compression, and spatial processing.</p>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg">
            <h3 className="text-xl text-white mb-2">Voice-Specific Tuning Profiles</h3>
            <p className="text-gray-300">Created customized processing profiles for different voice types and use cases, ensuring optimal quality across a wide range of applications from conversational AI to professional narration.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Elevate Your Audio Production</h3>
        <p className="text-gray-300">Looking for professional audio mixing expertise for your voice synthesis project or creative audio production? I can help you achieve exceptional sound quality that meets the highest professional standards.</p>

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