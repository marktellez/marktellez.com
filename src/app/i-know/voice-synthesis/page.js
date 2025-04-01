import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Voice Synthesis Expert | AI Audio Engineer - Mark Tellez",
  description: "Hire a voice synthesis expert with experience building ultra-realistic AI voice models. From custom voice cloning to production-ready speech systems that outperform industry standards.",
  keywords: ["voice synthesis", "AI voice", "speech synthesis", "TTS", "voice cloning", "audio AI", "speech technology"],
  url: "https://marktellez.com/i-know/voice-synthesis",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function VoiceSynthesisSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Voice Synthesis: Building Ultra-Realistic AI Voices</h1>

        <p className="text-gray-300">My expertise in voice synthesis spans from developing custom models to leading teams that create voice technologies indistinguishable from human speech. I've built systems that have fooled even the closest family members of voice subjects, demonstrating the exceptional quality and naturalness of my voice synthesis implementations.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Expertise and Innovation</h2>
        <p className="text-gray-300">My approach to voice synthesis goes beyond standard implementations, focusing on capturing the subtle nuances that make each voice uniquely human. At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link> and <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I developed ensemble AI models and specialized tuning systems that consistently outperformed industry leaders like ElevenLabs for personalized voice synthesis.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Custom voice model development with 24-48 hour training turnaround
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Ensemble AI approaches capturing natural breaths, pauses, and speaking cadence
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Advanced parameter optimization for voice characteristic preservation
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Multilingual voice synthesis support (English and Spanish)
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Industry-Leading Results</h2>
        <p className="mb-6 text-gray-300">My voice synthesis work has achieved remarkable results that set new standards in the industry. At <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I led teams that created voice models so realistic that even Snoop Dogg's wife couldn't distinguish between real recordings and our AI-generated samples. This technology now powers the <Link href="https://zooly.ai/apps/ai-or-not" target="_blank" rel="noopener noreferrer">"AI or Not?"</Link> testing system I pioneered.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Developed voice models for celebrities including Snoop Dogg, 50 Cent, and Cardi B</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Created innovative feedback systems that continuously improved voice quality</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Built custom ElevenLabs integration tuning systems that surpassed standard implementations</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Developed memorial voice preservation technology for deceased loved ones</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Approach</h2>
        <p className="text-gray-300">My voice synthesis work leverages cutting-edge techniques in deep learning and audio processing. Unlike traditional approaches that use a single large model to fit millions of voices, I developed systems that create custom models trained exclusively on individual voices, capturing nuances that get lost in generic voice cloning services.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link>, I implemented an ensemble approach using multiple deep neural networks working together to preserve authentic personality and speaking style, resulting in voice generations that sounded genuinely human rather than like generic audiobook narration.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Open Source Contributions</h2>
        <p className="text-gray-300">Beyond my commercial work, I've contributed to the open-source voice synthesis community by sharing techniques and approaches that advance the field. I believe in responsible development of voice technologies and advocate for ethical guidelines in their application.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">GANs for Voice</h4>
            <p className="text-sm text-gray-300">Developed Text-To-Speech models using Generative Adversarial Networks to achieve exceptional fidelity in voice reproduction.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Transformer Architectures</h4>
            <p className="text-sm text-gray-300">Implemented transformer-based models that excel at capturing the prosody and emotional nuances in human speech.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Custom Training Pipelines</h4>
            <p className="text-sm text-gray-300">Built efficient training pipelines that can deliver production-ready voice models within 24-48 hours of receiving voice samples.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Applications and Impact</h2>
        <p className="text-gray-300">My voice synthesis work has applications across multiple industries, from entertainment and media to accessibility and memorial services. The technology I've developed has been used to create engaging content, provide voice solutions for those who have lost their ability to speak, and preserve the voices of loved ones.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBird AI</Link>, I developed a specialized service for preserving the voices of deceased loved ones, creating lasting voice legacies from existing recordings and memories. This technology provided comfort to families while demonstrating the emotional impact of advanced voice synthesis capabilities.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next Voice Technology Solution</h3>
        <p className="text-gray-300">Looking for an expert who can develop custom voice synthesis solutions that exceed industry standards? I'm ready to bring my expertise to your project and deliver voice technology that sounds genuinely human.</p>

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