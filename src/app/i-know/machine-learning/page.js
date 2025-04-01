import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "Machine Learning Expert | AI Developer for Hire - Mark Tellez",
  description: "Hire a machine learning expert with extensive experience in supervised learning, reinforcement learning, and agentic systems. Delivering production-ready AI solutions for real-world applications.",
  keywords: ["machine learning expert", "supervised learning", "reinforcement learning", "agentic systems", "AI development", "neural networks", "deep learning"],
  url: "https://marktellez.com/i-know/machine-learning",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function MachineLearningSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Machine Learning: Expertise Built on Deep Experience</h1>

        <p className="text-gray-300">My journey in machine learning spans multiple paradigms—from <Link href="/i-know/supervised-learning">supervised learning</Link> to reinforcement learning and <Link href="/i-know/agentic-tools">agentic systems</Link>. I've developed production-ready models that solve complex problems across diverse domains, from medical diagnostics to voice synthesis and game-playing agents.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My machine learning expertise goes beyond implementing algorithms—it's about delivering systems that create tangible business value. I've developed models that outperformed published research papers in medical diagnostics, created voice synthesis technology so realistic it passed human verification tests, and built game-playing agents that master complex strategies.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                End-to-end ML pipelines from data preparation to deployment
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Production-grade model training with rigorous validation
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Model optimization for real-world deployment constraints
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Applications</h2>
        <p className="text-gray-300">My machine learning expertise has delivered tangible results across multiple domains:</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I conducted significant research in medical diagnostics, working with labeled datasets of chest and brain X-rays along with blood and hormone markers. My models achieved remarkable accuracy, outperforming several published papers from 2018 and 2019.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link>, I led the development of advanced voice synthesis technology using an ensemble of specialized AI models. Our approach captured nuances that get lost in generic voice cloning services, resulting in voice generations that sounded genuinely human rather than like generic audiobook narration.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/zooly-ai">Zooly AI</Link>, I built and trained sophisticated voice models to replicate the voices of several high-profile celebrities. The technology was so convincing that it powers their "AI or Not" testing system, which challenges users to distinguish between real and AI-generated voice samples.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Machine Learning Specializations</h2>
        <p className="text-gray-300">My expertise spans multiple machine learning paradigms and techniques:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/supervised-learning" className="hover:text-blue-400 transition-colors">Supervised Learning</Link></h4>
            <p className="text-sm text-gray-300">Classification, regression, and structured prediction models with rigorous validation and testing methodologies.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Reinforcement Learning</h4>
            <p className="text-sm text-gray-300">Training agents to master complex environments through reward-based learning, from classic algorithms to deep RL approaches.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/transformers" className="hover:text-blue-400 transition-colors">Transformers</Link></h4>
            <p className="text-sm text-gray-300">Implementing self-attention and cross-attention mechanisms for state-of-the-art performance in sequence modeling tasks.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/scikit-learn" className="hover:text-blue-400 transition-colors">SciKit Learn</Link></h4>
            <p className="text-sm text-gray-300">Leveraging random forests, cross-validation, and classification algorithms for efficient and interpretable machine learning.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/large-language-models" className="hover:text-blue-400 transition-colors">Large Language Models</Link></h4>
            <p className="text-sm text-gray-300">Working with LLMs since GPT-3's initial release, including running and quantizing local models for specialized applications.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/model-distillation" className="hover:text-blue-400 transition-colors">Model Distillation</Link></h4>
            <p className="text-sm text-gray-300">Creating small, focused models that retain the performance of larger ones while requiring fewer computational resources.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/transfer-learning" className="hover:text-blue-400 transition-colors">Transfer Learning</Link></h4>
            <p className="text-sm text-gray-300">Adapting pre-trained models to new domains with minimal data, significantly reducing training time and resource requirements.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/agentic-tools" className="hover:text-blue-400 transition-colors">Agentic Systems</Link></h4>
            <p className="text-sm text-gray-300">Building autonomous AI agents using frameworks like CrewAI and custom implementations that can reason, plan, and execute complex tasks.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3"><Link href="/i-know/gans" className="hover:text-blue-400 transition-colors">GANs</Link></h4>
            <p className="text-sm text-gray-300">Implementing generative adversarial networks for image generation, style transfer, and synthetic data creation.</p>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What sets me apart is my ability to bridge the gap between cutting-edge machine learning research and practical business applications. I don't just implement algorithms; I deliver solutions that create measurable value and address real-world challenges.</p>

        <p className="mt-4 text-gray-300">My approach combines technical depth with strategic thinking, ensuring that every machine learning project I undertake is aligned with core business objectives and delivers tangible results. I prioritize interpretability, robustness, and practical deployment considerations alongside raw performance metrics.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h3 className="mt-6 text-white">Let's Build Your Next AI Solution</h3>
        <p className="text-gray-300">Looking for a machine learning expert who can turn your data into actionable insights and powerful AI systems? I'm ready to help you leverage the power of machine learning to solve your most challenging problems.</p>

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