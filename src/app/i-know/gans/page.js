import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "GAN Expert | Generative AI Developer for Hire - Mark Tellez",
  description: "Hire a GAN expert with extensive experience in image generation, style transfer, and data augmentation. Delivering production-ready generative models for creative and practical applications.",
  keywords: ["GAN expert", "generative adversarial networks", "image generation", "style transfer", "data augmentation", "AI art", "synthetic data", "deep learning"],
  url: "https://marktellez.com/i-know/gan",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function GANSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Generative Adversarial Networks: Creative AI Solutions</h1>

        <p className="text-gray-300">My expertise in Generative Adversarial Networks (GANs) spans multiple applications from creative image generation to practical data augmentation. I've implemented various GAN architectures to solve complex problems in both artistic and business contexts, delivering models that generate high-quality synthetic content with remarkable realism.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Expertise and Applications</h2>
        <p className="text-gray-300">My experience with GANs includes implementing cutting-edge architectures like StyleGAN, CycleGAN, and Pix2Pix for various applications. I've developed models that generate photorealistic images, perform style transfer between domains, and create synthetic data for training other machine learning models.</p>

        <div className="bg-gray-900/40 rounded-lg p-6 my-8">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Implementation of state-of-the-art GAN architectures for image generation</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Style transfer between different visual domains using CycleGAN</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Data augmentation for training robust machine learning models</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-6 h-6 text-teal-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span className="text-lg">Creation of synthetic datasets for training when real data is limited</span>
            </li>
          </ul>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Applications</h2>
        <p className="text-gray-300">My GAN implementations have delivered tangible value across multiple domains:</p>

        <p className="mt-4 text-gray-300">I've developed models for creative applications that generate unique artwork and designs, helping artists and designers explore new creative possibilities. These models can generate variations on existing styles or create entirely new visual concepts based on learned patterns.</p>

        <p className="mt-4 text-gray-300">In the business context, I've implemented GANs for data augmentation, helping companies overcome limited dataset problems by generating synthetic but realistic training examples. This approach has proven particularly valuable in domains where collecting real data is expensive, time-consuming, or raises privacy concerns.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Approach</h2>
        <p className="text-gray-300">My approach to GAN development emphasizes:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Stable Training</h4>
            <p className="text-sm text-gray-300">Implementing techniques like Wasserstein loss, gradient penalty, and progressive growing to ensure stable and convergent GAN training.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Quality Evaluation</h4>
            <p className="text-sm text-gray-300">Using metrics like Fréchet Inception Distance (FID) and Inception Score to objectively evaluate the quality of generated samples.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Architecture Selection</h4>
            <p className="text-sm text-gray-300">Choosing the optimal GAN architecture based on the specific requirements of each project, from DCGANs to StyleGANs.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Generative AI Solution</h3>
        <p className="text-gray-300">Looking for a GAN expert who can deliver creative image generation, style transfer, or data augmentation solutions? I'm ready to help transform your requirements into efficient, production-ready generative models.</p>

        <div className="mt-8 flex flex-col md:flex-row gap-4">
          <CTAButton href="/contact">Discuss Your GAN Project</CTAButton>
          <CTAButton href="/portfolio" variant="secondary">View My Portfolio</CTAButton>
        </div>
      </div>
    </div>
  );
}