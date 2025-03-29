import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Ableton Live Expert | Audio Production Specialist - Mark Tellez",
  description: "Hire an Ableton Live expert with extensive experience in EDM production, game audio, and AI dataset creation. Bridging creative and technical domains with audio production expertise.",
  keywords: ["Ableton Live expert", "audio production", "EDM production", "game audio", "sound design", "AI dataset creation", "Max for Live", "signal processing"],
  url: "https://marktellez.com/i-know/ableton-live",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function AbletonLiveSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Ableton Live: From EDM to Game Audio to AI Datasets</h1>

        <p className="text-gray-300">My journey with Ableton Live has paralleled my coding career, evolving from creating EDM tracks to producing game music and sound effects, and most recently, building speech model datasets for AI applications. This audio production expertise complements my technical skills, allowing me to bridge the gap between creative and technical domains.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Musical Production Evolution</h2>
        <p className="text-gray-300">My experience with Ableton spans multiple musical genres and production techniques. Starting with electronic dance music, I've developed a deep understanding of sound design, arrangement, and mixing that translates across various audio applications.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Cross-Domain Applications</h2>
        <p className="text-gray-300">My Ableton expertise has evolved to serve multiple professional domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Game Audio</h4>
            <p className="text-sm text-gray-300">Creating immersive soundtracks and adaptive sound effects that enhance player experience and emotional engagement.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">AI Dataset Creation</h4>
            <p className="text-sm text-gray-300">Building high-quality speech datasets for training AI models, with precise control over audio characteristics and metadata.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Sound Design</h4>
            <p className="text-sm text-gray-300">Crafting unique sonic elements that establish brand identity and enhance user experience in digital products.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Audio Expertise</h2>
        <p className="text-gray-300">My technical skills with Ableton include:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Advanced Signal Processing</h4>
            <p className="text-sm text-gray-300">Leveraging Ableton's devices and third-party plugins for precise audio manipulation and enhancement.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Max for Live</h4>
            <p className="text-sm text-gray-300">Creating custom devices and workflows that extend Ableton's capabilities for specialized audio tasks.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Audio Solutions for Technical Projects</h3>
        <p className="text-gray-300">My unique combination of audio production expertise and technical development skills allows me to bridge gaps that few professionals can. Whether you need custom audio for games, speech datasets for AI models, or innovative sound design for digital products, I bring both creative vision and technical precision to the table.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>DISCUSS YOUR AUDIO NEEDS</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
