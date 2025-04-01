import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Transformers Expert | AI Developer for Hire - Mark Tellez",
  description: "Hire a transformers expert with deep experience in self-attention and cross-attention mechanisms. Building state-of-the-art models for NLP, computer vision, and more.",
  keywords: ["transformers expert", "self-attention", "cross-attention", "NLP", "deep learning", "AI development", "neural networks"],
  url: "https://marktellez.com/i-know/transformers",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function TransformersSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Transformers: Mastering Attention-Based Architecture</h1>

        <p className="text-gray-300">My expertise with transformer architectures spans both self-attention and cross-attention mechanisms. I've implemented these powerful models for a variety of applications, from natural language processing to computer vision and voice synthesis, delivering state-of-the-art performance for real-world problems.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Expertise and Applications</h2>
        <p className="text-gray-300">I've worked extensively with transformer architectures, implementing both self-attention and cross-attention mechanisms for various applications. My experience includes building models for text generation, voice synthesis, image recognition, and multimodal tasks that combine different types of data.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implementation of self-attention mechanisms for sequence modeling</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Cross-attention for multimodal tasks combining different data types</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Optimization techniques for efficient transformer training and inference</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Fine-tuning pre-trained models for specialized applications</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Custom architecture design for specific domain requirements</span>
            </li>
          </ul>
        </div>

        <h2 className="mt-8 text-white">Real-World Applications</h2>
        <p className="text-gray-300">At VoxBird AI and Zooly AI, I leveraged transformer architectures to build sophisticated voice synthesis systems that could replicate human voices with exceptional fidelity. These systems combined self-attention mechanisms for understanding voice patterns with cross-attention for mapping text to speech in a natural way.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Voice Synthesis</h4>
            <p className="text-sm text-gray-300">Building transformer-based models that generate natural-sounding speech with proper intonation, rhythm, and emotional expression.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Text Generation</h4>
            <p className="text-sm text-gray-300">Implementing decoder-only transformer architectures for creative writing, code completion, and conversational AI applications.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Multimodal Systems</h4>
            <p className="text-sm text-gray-300">Creating cross-attention mechanisms that bridge different data modalities, enabling text-to-image, text-to-speech, and other cross-domain applications.</p>
          </div>
        </div>

        <h2 className="mt-8 text-white">Technical Implementation</h2>
        <p className="text-gray-300">My approach to transformer implementation focuses on both theoretical understanding and practical optimization. I've developed custom attention mechanisms that scale efficiently with sequence length, implemented techniques like sparse attention and progressive layer dropping, and designed architectures that balance computational requirements with model performance.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Let's Build Something Together</h2>
        <p className="text-gray-300 mb-8">Whether you need to implement a transformer-based solution from scratch or fine-tune existing models for your specific use case, I can help you navigate the complexities of these powerful architectures and deliver results that exceed expectations.</p>

        <div className="flex justify-center">
          <CTAButton href="/contact" className="px-8 py-3">
            Contact Me
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
