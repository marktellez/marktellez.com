import Image from 'next/image';
import CTAButton from '@/ui/cta-button';
import Link from 'next/link';

import { generateSeoMetadata } from '@/lib/seo-utils';
export const metadata = generateSeoMetadata({
  title: "CNN Expert | Convolutional Neural Networks Specialist - Mark Tellez",
  description: "Hire a CNN expert with extensive experience in medical imaging, screen capture analysis, and diffusion models. Delivering high-performance AI solutions for complex visual recognition tasks.",
  keywords: ["CNN", "convolutional neural networks", "medical imaging", "X-ray analysis", "diffusion models", "computer vision", "deep learning"],
  url: "https://marktellez.com/i-know/cnns",
  type: "article",
  siteName: "Mark Tellez - Expert Programmer and AI Engineer"
});

export default function CNNsSkillPage() {
  return (
    <div className="container mx-auto py-8">
      <div>
        <h1 className="text-white">Convolutional Neural Networks: Expert in Visual AI</h1>

        <p className="text-gray-300">My extensive experience with Convolutional Neural Networks (CNNs) spans medical imaging, screen capture analysis, and diffusion models. I've developed sophisticated visual recognition systems that outperform published research papers, delivering production-ready AI solutions with remarkable accuracy and efficiency.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Proficiency and Strategic Value</h2>
        <p className="text-gray-300">My CNN expertise goes beyond implementing existing architectures—I design custom neural network topologies tailored to specific visual recognition challenges. During my time at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I conducted significant research in medical diagnostics, developing CNN models for chest and brain X-ray analysis that outperformed published papers from 2018-2019.</p>

        <h3 className="mt-12 text-white">Key Capabilities</h3>
        <div className="my-10 p-8 md:p-10 bg-gradient-to-br from-blue-900 to-teal-800 rounded-xl shadow-lg">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Medical imaging analysis with state-of-the-art accuracy
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Diffusion model implementation for generative AI applications
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Screen capture analysis for intelligent UI/UX automation
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-6 h-6 text-white mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-lg md:text-xl leading-relaxed text-white">
                Custom CNN architecture design for specialized applications
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Real-World Applications</h2>
        <p className="text-gray-300">My CNN implementations have delivered tangible value across multiple domains:</p>

        <p className="mt-4 text-gray-300">During my time at <Link href="/companies-ive-worked-for/devmentor-live">DevmentorLive</Link>, I developed sophisticated CNN models for medical diagnostics that analyzed chest and brain X-rays alongside blood and hormone markers. These models achieved remarkable accuracy, outperforming several published papers from 2018 and 2019.</p>

        <p className="mt-4 text-gray-300">I've also implemented diffusion models for generative AI applications, creating systems capable of producing high-quality synthetic images while maintaining control over the generation process. These models have applications in content creation, data augmentation, and specialized visualization tasks.</p>

        <div className="border-b border-white/50 my-12"></div>

        <h2 className="mt-8 text-white">Technical Approach</h2>
        <p className="text-gray-300">My approach to CNN development emphasizes:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Architecture Optimization</h4>
            <p className="text-sm text-gray-300">Designing network topologies that balance computational efficiency with model performance, ensuring solutions that work in production environments.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Transfer Learning</h4>
            <p className="text-sm text-gray-300">Leveraging pre-trained models as foundations, then fine-tuning for specific tasks to accelerate development and improve performance with limited data.</p>
          </div>

          <div className="bg-gray-900/30 p-5 rounded-lg border border-white/10">
            <h4 className="text-xl font-semibold text-white mb-3">Data Efficiency</h4>
            <p className="text-sm text-gray-300">Implementing techniques to maximize model performance with limited training data, including augmentation strategies and regularization methods.</p>
          </div>
        </div>

        <h3 className="mt-6 text-white">Let's Build Your Next Visual AI Solution</h3>
        <p className="text-gray-300">Looking for an expert who can develop CNN-based solutions for medical imaging, computer vision, or generative AI? I'm ready to help transform your requirements into production-ready systems that deliver exceptional results.</p>

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