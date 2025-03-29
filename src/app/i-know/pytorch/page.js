import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "PyTorch Expert | Deep Learning Engineer for Hire - Mark Tellez",
  description: "Hire a PyTorch expert with extensive experience in speech synthesis, computer vision, and NLP. Delivering production-grade deep learning models optimized for performance and maintainability.",
  keywords: ["PyTorch expert", "deep learning engineer", "speech synthesis", "computer vision", "NLP", "reinforcement learning", "model optimization", "AI development"],
  url: "https://marktellez.com/i-know/pytorch",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function PytorchSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">PyTorch: Deep Learning Expertise for Real-World Applications</h1>

        <p className="text-gray-300">My PyTorch journey spans several years, during which I've developed and deployed numerous production-grade deep learning models. I leverage PyTorch's dynamic computation graph and intuitive design to build sophisticated neural networks that solve complex problems across various domains. My implementations are optimized for both performance and maintainability.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My PyTorch expertise covers the full spectrum of deep learning applications—from computer vision and natural language processing to generative models and <Link href="/i-know/reinforcement-learning">reinforcement learning</Link>. I've implemented custom architectures, fine-tuned pre-trained models, and optimized inference pipelines for production environments. My approach combines technical depth with strategic thinking, ensuring solutions that address core business needs.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Professional Impact</h2>
        <p className="text-gray-300">What distinguishes my PyTorch work is the ability to translate complex requirements into efficient, scalable solutions. Whether it's developing speech synthesis models, computer vision systems, or natural language understanding, I focus on delivering measurable business outcomes.</p>

        <p className="mt-4 text-gray-300">At <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link>, I built a Text-To-Speech model using PyTorch that was so realistic even Snoop Dogg's wife couldn't distinguish between real recordings and my model's voice generations. This same technology now powers <Link href="https://zooly.ai/apps/ai-or-not" target="_blank" rel="noopener noreferrer">Zooly.ai's "AI or Not" application</Link>, showcasing the production-grade deep learning solutions I deliver.</p>

        <p className="mt-4 text-gray-300">I prioritize model efficiency, performance optimization, and maintainability. My PyTorch implementations are designed with an eye toward future scalability and adaptability, ensuring they continue to deliver value as business needs evolve.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">My PyTorch Expertise Areas</h2>
        <p className="text-gray-300">I've developed specialized PyTorch skills across several high-value domains:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Speech Synthesis</h4>
            <p className="text-sm text-gray-300">Building ultra-realistic voice models at <Link href="/companies-ive-worked-for/voxbird-ai">VoxBirdAI</Link> that are indistinguishable from human speech, using advanced architectures like Transformers and diffusion models.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Computer Vision</h4>
            <p className="text-sm text-gray-300">Implementing object detection, image segmentation, and visual recognition systems using convolutional neural networks and vision transformers.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Natural Language Processing</h4>
            <p className="text-sm text-gray-300">Developing text classification, sentiment analysis, and language generation models using transformer architectures and attention mechanisms.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Reinforcement Learning</h4>
            <p className="text-sm text-gray-300">Implementing <Link href="/i-know/reinforcement-learning">reinforcement learning</Link> agents using PyTorch for complex decision-making tasks, game playing, and optimization problems.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Model Optimization</h4>
            <p className="text-sm text-gray-300">Expertise in quantization, pruning, and distillation techniques to optimize PyTorch models for deployment on resource-constrained environments.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next PyTorch Solution</h3>
        <p className="text-gray-300">Looking for a PyTorch expert who can deliver speech synthesis, computer vision, NLP, or reinforcement learning solutions? I'm ready to help transform your requirements into efficient, production-ready deep learning models.</p>

        <div className="mt-8">
          <CTAButton href="/contact" color="green">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
            </svg>
            <span>HIRE ME FOR YOUR PYTORCH PROJECT</span>
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
